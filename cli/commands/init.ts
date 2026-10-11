import * as generator from "@fabricmc/scripts";
import { Command, Option } from "commander";
import prompts from "prompts";
import { XMLParser } from "fast-xml-parser";
import * as path from "node:path";
import { mkdir, writeFile as write } from "node:fs/promises";
import { cwd, env, exit } from "node:process";
import chalk from "chalk";
import * as utils from "../utils.ts";
import fontData from "../font.ts";
import { Buffer } from "node:buffer";
import { PNG } from "pngjs";
import * as pureimage from "pureimage";
import * as opentype from "opentype.js";

const error = chalk.bold.red;
const progress = chalk.bold.yellow;
const success = chalk.bold.green;

const MOJMAP_ADVANCED_OPTION = "Mojang Mappings";
const ICON_ADVANCED_OPTION = "Generate Unique Mod Icon";
const KOTLIN_ADVANCED_OPTION = "Kotlin Programming Language";
const DATAGEN_ADVANCED_OPTION = "Data Generation";
const SPLIT_ADVANCED_OPTION = "Split client and common sources";
const KOTLIN_DSL_ADVANCED_OPTION = "Gradle Kotlin DSL";

const ADVANCED_OPTIONS: Map<string, string> = new Map([
  ["kotlin", KOTLIN_ADVANCED_OPTION],
  ["datagen", DATAGEN_ADVANCED_OPTION],
  ["splitSources", SPLIT_ADVANCED_OPTION],
  ["mojangMappings", MOJMAP_ADVANCED_OPTION],
  ["gradleKotlin", KOTLIN_DSL_ADVANCED_OPTION],
]);

interface CliOptions {
  defaultOptions?: boolean;
  name?: string;
  modid?: string;
  packageName?: string;
  version?: string;
  option?: string[];
}

export function initCommand() {
  return new Command()
    .name("init")
    .description("Generate a new fabric project")
    .option("-y, --defaultOptions", "Generate a mod with default options")
    .addOption(
      new Option("-n, --name <name>", "The name of the mod")
        .conflicts("defaultOptions"),
    )
    .addOption(
      new Option("-m, --modid <modid>", "The modid of the mod")
        .conflicts("defaultOptions"),
    )
    .addOption(
      new Option("-p, --packageName <packageName>", "The package name of the mod")
        .conflicts("defaultOptions"),
    )
    .addOption(
      new Option("-v, --version <version>", "The minecraft version")
        .conflicts("defaultOptions"),
    )
    .addOption(
      new Option(
        "-o, --option <advancedOption>",
        "Specify an advanced option, one of: " +
          Array.from(ADVANCED_OPTIONS.keys()).join(", "),
      )
        .conflicts("defaultOptions")
        .argParser((value: string, previous: string[] = []) => [
          ...previous,
          value,
        ])
        .hideHelp(),
    )
    .argument("[dir]", "The output directory")
    .action(async (dir: string | undefined, options: CliOptions) => {
      await generate(options, dir);
    });
}

// Set the XML parser as we do not have DomParser here.
generator.setXmlVersionParser((xml) => {
  const document = new XMLParser({
    parseTagValue: false,
    isArray: (name) => name === "version",
  }).parse(xml);
  return document.metadata.versioning.versions.version;
});

const fontLoader = pureimage.registerFont("", generator.ICON_FONT);
const fontBytes = Uint8Array.from(Buffer.from(fontData, "base64"));
fontLoader.font = opentype.parse(fontBytes.buffer);
fontLoader.loaded = true;

export function getGeneratorOptions(
  outputDir: string,
  config: generator.Configuration,
): generator.Options {
  return {
    config,
    writer: {
      write: async (contentPath, content, options) => {
        await writeFile(outputDir, contentPath, content, options);
      },
    },
    canvas: {
      create(width, height) {
        const bitmap = pureimage.make(width, height);

        return {
          getContext: (id) => bitmap.getContext(id),
          getPng: () => {
            const png = new PNG({ width: bitmap.width, height: bitmap.height });
            png.data = Buffer.from(bitmap.data);
            return Uint8Array.from(PNG.sync.write(png)).buffer;
          },
          measureText(ctx: pureimage.Context, text) {
            const font = fontLoader.font;
            const fontSize = ctx._font.size!;

            let advance = 0;
            let ascent = 0;
            let descent = 0;

            const glyphs = font.stringToGlyphs(text);

            for (const glyph of glyphs) {
              const metrics = glyph.getMetrics();
              advance += glyph.advanceWidth!;
              ascent = Math.max(ascent, metrics.yMax);
              descent = Math.min(descent, metrics.yMin);
            }

            return {
              width: (advance / font.unitsPerEm) * fontSize,
              ascent: Math.abs((ascent / font.unitsPerEm) * fontSize),
              descent: Math.abs((descent / font.unitsPerEm) * fontSize),
            };
          },
        };
      },
    },
  };
}

async function generate(
  cli: CliOptions,
  outputDirName: string | undefined,
) {
  const outputDir = await getAndPrepareOutputDir(outputDirName);

  const isTargetEmpty = await utils.isDirEmpty(outputDir);
  if (!isTargetEmpty) {
    fatalError("The target directory must be empty");
  }

  const config =
    await (cli.defaultOptions
      ? defaultOptions(path.basename(outputDir))
      : promptUser(path.basename(outputDir), cli));

  console.log(progress("Generating mod template..."));

  await generator.generateTemplate(getGeneratorOptions(outputDir, config));
  console.log(success("Done!"));
}

async function getAndPrepareOutputDir(
  outputDirName: string | undefined,
): Promise<string> {
  if (outputDirName == undefined) {
    return path.resolve(cwd());
  }

  const outputDir = path.resolve(outputDirName!);

  await mkdir(outputDir, { recursive: true });

  return outputDir;
}

async function promptUser(
  startingName: string,
  cli: CliOptions,
): Promise<generator.Configuration> {
  // Store a promise for now, so the request can be made while taking the other inputs.
  const minecraftVersionsPromise = generator.getTemplateGameVersions();

  validateCliOptions(cli);

  const modName = cli.name ?? await prompt<string>({
    type: "text",
    message: "Choose a name",
    initial: startingName,
    validate: (value: string) =>
      value.length >= 2 || "The name must have at least 2 characters",
  });

  const modId = cli.modid ?? await prompt<string>({
    type: "text",
    message: "Choose a unique modid",
    initial: generator.nameToModId(modName),
    validate: (value: string) => {
      if (value.length < 2 || value.length > 64) {
        return "The modid must have between 2 and 64 characters";
      }

      const errors = generator.computeCustomModIdErrors(value);
      if (errors == undefined) {
        return true;
      }

      return errors.join(", ");
    },
  });

  const packageName = cli.packageName ?? await prompt<string>({
    type: "text",
    message: "Choose a package name",
    initial: generator.generatePackageName(
      (env.FABRIC_MOD_GENERATOR_GLOBAL_PACKAGE_PREFIX ?? "") + modId,
    ),
    format: (value: string) => generator.formatPackageName(value),
    validate: (value: string) => {
      const formatted = generator.formatPackageName(value);
      const errors = generator.computePackageNameErrors(formatted);

      if (errors.length == 0) {
        return true;
      }

      return errors.join(", ");
    },
  });

  const minecraftVersions = await minecraftVersionsPromise;
  let minecraftVersion: string;

  if (cli.version != undefined) {
    minecraftVersion = cli.version;

    if (!minecraftVersions.map((v) => v.version).includes(minecraftVersion)) {
      fatalError(`The minecraft version ${minecraftVersion} does not exist.`);
    }
  } else {
    minecraftVersion = await prompt<string>({
      type: "select",
      message: "Select the minecraft version",
      choices: minecraftVersions.map((v) => ({
        title: v.version,
        value: v.version,
      })),
      initial: Math.max(0, minecraftVersions.findIndex((v) => v.stable)),
    });
  }

  const cliOptions = cli.option?.map((o): string => {
    if (!ADVANCED_OPTIONS.has(o)) {
      fatalError(
        `Unknown option ${o} must be one of: ${
          Array.from(ADVANCED_OPTIONS.keys()).join(", ")
        }`,
      );
    }

    return ADVANCED_OPTIONS.get(o)!;
  });

  const advancedOptions = cliOptions ?? await prompt<string[]>({
    type: "multiselect",
    message: "Advanced options",
    choices: getAdvancedOptions(minecraftVersion),
  });

  return {
    modid: modId,
    minecraftVersion: minecraftVersion,
    projectName: modName,
    packageName: packageName,
    mojmap: generator.minecraftIsUnobfuscated(minecraftVersion) || advancedOptions.includes(MOJMAP_ADVANCED_OPTION),
    useKotlin: advancedOptions.includes(KOTLIN_ADVANCED_OPTION),
    dataGeneration: advancedOptions.includes(DATAGEN_ADVANCED_OPTION),
    splitSources: advancedOptions.includes(SPLIT_ADVANCED_OPTION),
    gradleKotlin: advancedOptions.includes(KOTLIN_DSL_ADVANCED_OPTION),
    uniqueModIcon: advancedOptions.includes(ICON_ADVANCED_OPTION),
  };
}

function validateCliOptions(cli: CliOptions) {
  if (cli.modid != undefined) {
    const errors = generator.computeCustomModIdErrors(cli.modid);
    if (errors != undefined) {
      fatalError(errors.join(", "));
    }
  }

  if (cli.packageName != undefined) {
    const errors = generator.computePackageNameErrors(cli.packageName);
    if (errors.length > 0) {
      fatalError(errors.join(", "));
    }
  }
}

async function defaultOptions(
  startingName: string,
): Promise<generator.Configuration> {
  const minecraftVersions = await generator.getTemplateGameVersions();
  const minecraftVersion = minecraftVersions.find((v) => v.stable)!.version;

  return {
    modid: generator.nameToModId(startingName),
    minecraftVersion: minecraftVersion,
    projectName: startingName,
    packageName: generator.formatPackageName(
      generator.nameToModId(startingName),
    ),
    mojmap: true,
    useKotlin: false,
    dataGeneration: false,
    splitSources: generator.minecraftSupportsSplitSources(minecraftVersion),
    gradleKotlin: false,
    uniqueModIcon: true,
  };
}

async function prompt<T>(
  question: Omit<prompts.PromptObject<"value">, "name">,
): Promise<T> {
  const answers = await prompts({ ...question, name: "value" }, {
    onCancel: () => fatalError("Project generation cancelled"),
  });

  return answers.value;
}

function getAdvancedOptions(minecraftVersion: string): prompts.Choice[] {
  const options: prompts.Choice[] = [];

  options.push({
    title: ICON_ADVANCED_OPTION,
    value: ICON_ADVANCED_OPTION,
    selected: true,
  });
  options.push({ title: KOTLIN_ADVANCED_OPTION, value: KOTLIN_ADVANCED_OPTION });

  if (!generator.minecraftIsUnobfuscated(minecraftVersion)) {
    options.push({
      title: MOJMAP_ADVANCED_OPTION,
      value: MOJMAP_ADVANCED_OPTION,
      selected: true,
    });
  }

  if (generator.minecraftSupportsDataGen(minecraftVersion)) {
    options.push({
      title: DATAGEN_ADVANCED_OPTION,
      value: DATAGEN_ADVANCED_OPTION,
    });
  }

  if (generator.minecraftSupportsSplitSources(minecraftVersion)) {
    options.push({
      title: SPLIT_ADVANCED_OPTION,
      value: SPLIT_ADVANCED_OPTION,
      selected: true,
    });
  }

  options.push({
    title: KOTLIN_DSL_ADVANCED_OPTION,
    value: KOTLIN_DSL_ADVANCED_OPTION,
  });

  return options;
}

async function writeFile(
  outputPath: string,
  filePath: string,
  content: string | ArrayBufferLike,
  options: generator.FileOptions | undefined,
) {
  const output = path.join(outputPath, filePath);
  await mkdir(path.dirname(output), { recursive: true });
  await write(
    output,
    typeof content === "string" ? content : new Uint8Array(content),
    { mode: options?.executable ? 0o744 : undefined },
  );
}

function fatalError(message: string) {
  console.error(error(message));
  exit(1);
}
