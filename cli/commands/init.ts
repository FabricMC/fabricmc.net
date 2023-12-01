// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../../scripts/dist/fabric-template-generator.js";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import {
  Checkbox,
  CheckboxValueOptions,
  Input,
  Select,
} from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";
import * as path from "https://deno.land/std@0.177.1/path/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/mod.ts";
import * as utils from "../utils.ts";
import { ensureDir } from "https://deno.land/std@0.177.1/fs/ensure_dir.ts";

const error = colors.bold.red;
const progress = colors.bold.yellow;
const success = colors.bold.green;

const KOTLIN_ADVANCED_OPTION = "Kotlin Programming Language";
const DATAGEN_ADVANCED_OPTION = "Data Generation";
const SPLIT_ADVANCED_OPTION = "Split client and common sources";

export function initCommand() {
  return new Command()
    .name("init")
    .description("Generate a new fabric project")
    .option("-y, --defaultOptions", "Generate a mod with default options")
    .arguments("[dir:file]")
    .action(async ({ defaultOptions }, dir: string | undefined) => {
      await generate(defaultOptions == true, dir);
    });
}

async function generate(
  useDefaultOptions: boolean,
  outputDirName: string | undefined,
) {
  const outputDir = await getAndPrepareOutputDir(outputDirName);

  const isTargetEmpty = await utils.isDirEmpty(outputDir);
  if (!isTargetEmpty) {
    console.error(error("The target directory must be empty"));
    Deno.exit(1);
  }

  const config =
    await (useDefaultOptions
      ? defaultOptions(path.basename(outputDir))
      : promptUser(path.basename(outputDir)));

  const options: generator.Options = {
    config,
    writer: {
      write: async (contentPath, content, options) => {
        await writeFile(outputDir, contentPath, content, options);
      },
    },
  };

  console.log(progress("Generating mod template..."));
  await generator.generateTemplate(options);
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
): Promise<generator.Configuration> {
  // Store a promise for now, so the request can be made while taking the other inputs.
  const minecraftVersionsPromise = generator.getTemplateGameVersions();

  const modName: string = await Input.prompt({
    message: "Choose a name",
    default: startingName,
    minLength: 2,
  });

  const modId: string = await Input.prompt({
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

  const packageName: string = await Input.prompt({
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

  const minecraftVersion: string = await Select.prompt({
    message: "Select the minecraft version",
    options: (await minecraftVersionsPromise).map((v) => v.version),
  });

  const advancedOptions = await Checkbox.prompt({
    message: "Advanced options",
    options: getAdancedOptions(minecraftVersion),
  });

  return {
    modid: modId,
    minecraftVersion: minecraftVersion,
    projectName: modName,
    packageName: packageName,
    useKotlin: advancedOptions.includes(KOTLIN_ADVANCED_OPTION),
    dataGeneration: advancedOptions.includes(DATAGEN_ADVANCED_OPTION),
    splitSources: advancedOptions.includes(SPLIT_ADVANCED_OPTION),
  };
}

async function defaultOptions(
  startingName: string,
): Promise<generator.Configuration> {
  const minecraftVersions = await generator.getTemplateGameVersions();
  const minecraftVersion = minecraftVersions[0]!.version;

  return {
    modid: generator.nameToModId(startingName),
    minecraftVersion: minecraftVersion,
    projectName: startingName,
    packageName: generator.formatPackageName(
      generator.nameToModId(startingName),
    ),
    useKotlin: false,
    dataGeneration: false,
    splitSources: generator.minecraftSupportsSplitSources(minecraftVersion),
  };
}

function getAdancedOptions(minecraftVersion: string): CheckboxValueOptions {
  const options: CheckboxValueOptions = [
    { value: KOTLIN_ADVANCED_OPTION },
  ];

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
  if (content instanceof ArrayBuffer) {
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
      console.error(error("Permission not granted"));
      Deno.exit(1);
    }
  }
}
