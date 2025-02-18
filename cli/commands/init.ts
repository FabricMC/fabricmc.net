// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../../scripts/dist/fabric-template-generator.js";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import {
  Checkbox,
  CheckboxValueOptions,
  Input,
  Select,
} from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";
import { parse as parseXml } from "https://deno.land/x/xml@2.1.1/mod.ts";
import * as path from "https://deno.land/std@0.177.1/path/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/mod.ts";
import * as utils from "../utils.ts";
import { ensureDir } from "https://deno.land/std@0.177.1/fs/ensure_dir.ts";

/* TODO fix icon generation
import fontData from "../font.ts";
import { decodeBase64 } from "https://deno.land/std@0.203.0/encoding/base64.ts";
import * as png from "https://deno.land/x/pngs@0.1.1/mod.ts";
import * as pureimage from "https://esm.sh/pureimage@0.4.13";
import * as opentype from "https://esm.sh/opentype.js@0.4.11";
*/

const ENABLE_ICON_GENERATION = false;

const error = colors.bold.red;
const progress = colors.bold.yellow;
const success = colors.bold.green;

const MOJMAP_ADVANCED_OPTION = "Mojang Mappings";
const ICON_ADVANCED_OPTION = "Generate Unique Mod Icon";
const KOTLIN_ADVANCED_OPTION = "Kotlin Programming Language";
const DATAGEN_ADVANCED_OPTION = "Data Generation";
const SPLIT_ADVANCED_OPTION = "Split client and common sources";

const ADVANCED_OPTIONS: Map<string, string> = new Map([
  ["kotlin", KOTLIN_ADVANCED_OPTION],
  ["datagen", DATAGEN_ADVANCED_OPTION],
  ["splitSources", SPLIT_ADVANCED_OPTION],
]);

interface CliOptions {
  defaultOptions?: true;
  name?: string;
  modid?: string;
  packageName?: string;
  version?: string;
  option?: (string | true)[];
}

const optionArg = {
  conflicts: ["defaultOptions"],
  // TODO hidden for now, as these are in beta and may change.
  hidden: true,
};

export function initCommand() {
  return new Command()
    .name("init")
    .description("Generate a new fabric project")
    .option("-y, --defaultOptions", "Generate a mod with default options")
    .option("-n, --name <name:string>", "The name of the mod", optionArg)
    .option("-m, --modid <modid:string>", "The modid of the mod", optionArg)
    .option(
      "-p, --packageName <packageName:string>",
      "The package name of the mod",
      optionArg,
    )
    .option(
      "-v, --version <version:string>",
      "The minecraft version",
      optionArg,
    )
    .option(
      "-o, --option [advancedOption:string]",
      "Specify an advanced option, one of" +
        Object.keys(ADVANCED_OPTIONS).join(","),
      {
        ...optionArg,
        collect: true,
      },
    )
    .arguments("[dir:file]")
    .action(async (options, dir: string | undefined) => {
      await generate(options, dir);
    });
}

// Set the XML parser as we do not have DomParser here.
generator.setXmlVersionParser((xml) => {
  const document = parseXml(xml) as any;
  return document.metadata.versioning.versions.version;
});

/*
const fontLoader = pureimage.registerFont("", generator.ICON_FONT);
fontLoader.font = opentype.parse(decodeBase64(fontData).buffer);
fontLoader.loaded = true;
*/

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
        /*
        const bitmap = pureimage.make(width, height);

        return {
          getContext: (id) => bitmap.getContext(id),
          getPng: () => png.encode(bitmap.data, bitmap.width, bitmap.height),
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
        */

        return null;
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
    await requestPermissions(".");
    return path.resolve(Deno.cwd());
  }

  await requestPermissions(outputDirName);
  const outputDir = path.resolve(outputDirName!);

  await ensureDir(outputDir);

  return outputDir;
}

async function promptUser(
  startingName: string,
  cli: CliOptions,
): Promise<generator.Configuration> {
  // Store a promise for now, so the request can be made while taking the other inputs.
  const minecraftVersionsPromise = generator.getTemplateGameVersions();

  validateCliOptions(cli);

  const modName: string = cli.name ?? await Input.prompt({
    message: "Choose a name",
    default: startingName,
    minLength: 2,
  });

  const modId: string = cli.modid ?? await Input.prompt({
    message: "Choose a unique modid",
    default: generator.nameToModId(modName),
    minLength: 2,
    maxLength: 64,
    validate: (value) => {
      const errors = generator.computeCustomModIdErrors(value);
      if (errors == undefined) {
        return true;
      }

      return errors.join(", ");
    },
  });

  const packageName: string = cli.packageName ?? await Input.prompt({
    message: "Choose a package name",
    default: generator.formatPackageName(modId),
    transform: (value) => {
      return generator.formatPackageName(value);
    },
    validate: (value) => {
      const errors = generator.computePackageNameErrors(value);

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
    minecraftVersion = await Select.prompt({
      message: "Select the minecraft version",
      options: minecraftVersions.map((v) => v.version),
      default: minecraftVersions.find((v) => v.stable)?.version,
    });
  }

  const cliOptions = cli.option?.map((o): string => {
    if (o === true) {
      fatalError("Advanced options must be specified with a value");
      return "unreachable";
    }

    const option = o as string;

    if (!ADVANCED_OPTIONS.has(option)) {
      fatalError(
        `Unknown option ${o} must be one of: ${
          Array.from(ADVANCED_OPTIONS.keys()).join(", ")
        }`,
      );
    }

    return ADVANCED_OPTIONS.get(option)!;
  });

  const advancedOptions = cliOptions ?? await Checkbox.prompt({
    message: "Advanced options",
    options: getAdvancedOptions(minecraftVersion),
  });

  return {
    modid: modId,
    minecraftVersion: minecraftVersion,
    projectName: modName,
    packageName: packageName,
    mojmap: advancedOptions.includes(MOJMAP_ADVANCED_OPTION),
    useKotlin: advancedOptions.includes(KOTLIN_ADVANCED_OPTION),
    dataGeneration: advancedOptions.includes(DATAGEN_ADVANCED_OPTION),
    splitSources: advancedOptions.includes(SPLIT_ADVANCED_OPTION),
    uniqueModIcon: advancedOptions.includes(ICON_ADVANCED_OPTION) &&
      ENABLE_ICON_GENERATION,
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
    mojmap: false,
    useKotlin: false,
    dataGeneration: false,
    splitSources: generator.minecraftSupportsSplitSources(minecraftVersion),
    uniqueModIcon: ENABLE_ICON_GENERATION,
  };
}

function getAdvancedOptions(minecraftVersion: string): CheckboxValueOptions {
  const options: CheckboxValueOptions = [];

  if (ENABLE_ICON_GENERATION) {
    options.push({ value: ICON_ADVANCED_OPTION, checked: true });
  }

  options.push({ value: KOTLIN_ADVANCED_OPTION });
  options.push({ value: MOJMAP_ADVANCED_OPTION });

  if (generator.minecraftSupportsDataGen(minecraftVersion)) {
    options.push({
      value: DATAGEN_ADVANCED_OPTION,
    });
  }

  if (generator.minecraftSupportsSplitSources(minecraftVersion)) {
    options.push({
      value: SPLIT_ADVANCED_OPTION,
      checked: true,
    });
  }

  return options;
}

async function writeFile(
  outputPath: string,
  filePath: string,
  content: string | ArrayBufferLike,
  options: generator.FileOptions | undefined,
) {
  const output = path.join(outputPath, filePath);
  await tryMkdirs(path.dirname(output));

  const writeOptions: Deno.WriteFileOptions = {
    mode: options?.executable ? 0o744 : undefined,
  };

  // is there a cleaner way to do this?
  if (content instanceof ArrayBuffer || content instanceof Uint8Array) {
    const data = new Uint8Array(content);
    await Deno.writeFile(output, data, writeOptions);
  } else {
    await Deno.writeTextFile(
      output,
      content as string,
      writeOptions,
    );
  }
}

async function tryMkdirs(path: string) {
  try {
    await Deno.mkdir(path, {
      recursive: true,
    });
  } catch (error) {
    if (!(error instanceof Deno.errors.AlreadyExists)) {
      throw error;
    }
  }
}

async function requestPermissions(outputDir: string) {
  const permissions: Deno.PermissionDescriptor[] = [
    {
      name: "read",
      path: Deno.cwd(), // We need this for all operations, path.resolve requries it.
    },
    {
      name: "read",
      path: outputDir,
    },
    {
      name: "write",
      path: outputDir,
    },
    {
      name: "net",
      host: "meta.fabricmc.net",
    },
    {
      name: "net",
      host: "maven.fabricmc.net",
    },
  ];

  for (const permission of permissions) {
    const status = await Deno.permissions.request(permission);

    if (status.state != "granted") {
      fatalError("Permission not granted");
    }
  }
}

function fatalError(message: string) {
  console.error(error(message));
  Deno.exit(1);
}
