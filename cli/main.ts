// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import { parse as parseXml } from "https://deno.land/x/xml@2.1.1/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import * as path from "https://deno.land/std@0.177.1/path/mod.ts";

// Set the XML parser as we do not have DomParser here.
generator.setXmlVersionParser((xml) => {
  const document = parseXml(xml) as any;
  return document.metadata.versioning.versions.version;
});

await new Command()
  .name("fabric-templte-generator")
  .option("-m, --minecraftVersion <version>", "The minecraft version", {
    required: true,
  })
  .option("-o, --output <outputDir>", "The output directory", {
    required: true,
  })
  .action(async ({ minecraftVersion, output }) => {
    // Request write permission to the whole of the output directory.
    const status = await Deno.permissions.request({
      name: "write",
      path: output,
    });
    if (status.state != "granted") {
      return;
    }

    console.log(`Generating template for Minecraft ${minecraftVersion}`);

    // Actually genrate the template!
    await generator.generateTemplate({
      config: {
        modid: "example",
        minecraftVersion: minecraftVersion,
        projectName: "Test",
        packageName: "example",
        useKotlin: false,
        dataGeneration: false,
        splitSources: true,
      },
      writer: {
        write: async (contentPath, content, options) => {
          await writeFile(output, contentPath, content, options);
        },
      },
    });
  })
  .parse();

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

  // TODO is there a cleaner way to do this?
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
