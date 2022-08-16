import { test, beforeEach } from 'vitest'
import { dirname } from 'path';
// import { promises as fs } from "fs";
import { generateTemplate, TemplateWriter } from '../src'

const fs = require('fs').promises;

const basePath = "./testdata";

const writer: TemplateWriter = {
    write: async function (path: string, content: string | ArrayBufferLike): Promise<void> {
        const fullPath = `${basePath}/${path}`;
        await fs.mkdir(dirname(fullPath), { recursive: true });
        await fs.writeFile(fullPath, content);
    }
}

beforeEach(async () => {
    await fs.rmdir(basePath, { recursive: true });
});

test('Simple project', async () => {
  await generateTemplate({
    config: {
        minecraftVersion: "1.19.2",
        projectName: "test",
        packageName: "net.example",
        useKotlin: false,
        dataGeneration: false,
        githubActions: false,
        splitSources: false
    },
    writer
  });
})