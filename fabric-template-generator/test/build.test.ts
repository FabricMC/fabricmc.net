import { test, describe } from 'vitest';
import { dirname } from 'path';
import { promises as fs } from "fs";
import { Configuration, generateTemplate, TemplateWriter } from '../src';

const basePath = "./testdata";

async function generate(name: string, config: Configuration) {
  const dir = `${basePath}/${name}`;

  try {
    await fs.mkdir(dir, {recursive: true});
  } catch (e) {
  }
  
  await fs.rm(dir, { recursive: true, force: false });

  const writer: TemplateWriter = {
    write: async function (path: string, content: string | ArrayBufferLike): Promise<void> {
        const fullPath = `${dir}/${path}`;
        await fs.mkdir(dirname(fullPath), { recursive: true });
        await fs.writeFile(fullPath, content as any);
    }
  }

  await generateTemplate({
    config,
    writer
  });
}

const minecraftVersions = ["1.19.2", "1.18.2", "1.17.1", "1.16.4", "1.15.2", "1.14.4"];

describe("Java simple", () => {
  minecraftVersions.forEach((minecraftVersion) => {
    test(minecraftVersion, async () => {
      await generate("simple/" + minecraftVersion, {
            minecraftVersion,
            projectName: "test",
            packageName: "net.example",
            useKotlin: false,
            dataGeneration: false,
            githubActions: false,
            splitSources: false
        });
    });
  });
});

describe("Kotlin", () => {
  minecraftVersions.forEach((minecraftVersion) => {
    test(minecraftVersion, async () => {
      await generate("kotlin/" + minecraftVersion, {
            minecraftVersion,
            projectName: "test",
            packageName: "net.example",
            useKotlin: true,
            dataGeneration: false,
            githubActions: false,
            splitSources: false
        });
    });
  });
});