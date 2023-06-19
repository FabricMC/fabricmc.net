// @deno-types="../../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../../scripts/dist/fabric-template-generator.js";

import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import { Input } from "https://deno.land/x/cliffy@v0.25.7/prompt/input.ts";
import { Select } from "https://deno.land/x/cliffy@v0.25.7/prompt/select.ts";

import * as path from "https://deno.land/std@0.177.1/path/mod.ts";

export function initCommand(): Command {
  return new Command()
    .name("init")
    .global()
    .action(generate);
}

async function generate() {
  await promptUser();
}

async function promptUser() {
  const modName: string = await Input.prompt({
    message: "Choose a name for your mod",
    default: "My Mod", // TODO maybe use the dir name as a default?
  });

  const packageName: string = await Input.prompt({
    message: "Choose a package name for your mod",
    default: "com.mymod", // TODO maybe use the modName/id here
  });

  const minecraftVersions = await generator.getTemplateGameVersions();

  const minecraftVersion: string = await Select.prompt({
    message: "Select the minecraft version",
    options: minecraftVersions.map((v) => v.version),
  });
}

async function isDirEmpty(outputDir: string) {
  const contents = Deno.readDir(outputDir);

  for await (const _ of contents) {
    return false;
  }

  return true;
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
    mode: options?.unixPermissions,
  };

  // is there a cleaner way to do this?
  if (content instanceof String) {
    await Deno.writeTextFile(
      output,
      content as string,
      writeOptions,
    );
  } else {
    const data = new Uint8Array(content as ArrayBufferLike);
    await Deno.writeFile(outputPath, data, writeOptions);
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
