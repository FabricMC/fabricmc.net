// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import { parse as parseXml } from "https://deno.land/x/xml@2.1.1/mod.ts";
import { Command } from "https://deno.land/x/cliffy@v0.25.7/command/mod.ts";
import * as path from "https://deno.land/std@0.177.1/path/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/mod.ts";

const error = colors.bold.red;

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
    default: "./",
  })
  .action(async ({ minecraftVersion, output }) => {
    // If the dir is the current dir (default), check that it is empty before we go and create a mess.
    if (output == "./") {
      const isEmpty = await isDirEmpty(output);
      if (!isEmpty) {
        console.log(error("Current working directory is not empty"));
        Deno.exit(2);
      }
    }

    await requestPermissions(output);

    console.log(`Generating template for Minecraft ${minecraftVersion}`);

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

    console.log("Done!");
  })
  .parse();

async function requestPermissions(outputDir: string) {
  const permissions: Deno.PermissionDescriptor[] = [
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
      console.log("Permission not granted");
      Deno.exit(1);
    }
  }
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
