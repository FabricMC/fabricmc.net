import * as esbuild from "esbuild";
import { chmod, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const { version } = JSON.parse(await readFile("./package.json", "utf8"));

const isTest = process.argv[2] === "test";
const outputPath = isTest ? "./test-bundled.mjs" : "./bundled.mjs";

const rawTemplates: esbuild.Plugin = {
  name: "raw-templates",
  setup(build) {
    build.onResolve({ filter: /\?raw$/ }, (args) => ({
      path: resolve(args.resolveDir, args.path.slice(0, -4)),
      namespace: "raw-templates",
    }));
    build.onLoad({ filter: /.*/, namespace: "raw-templates" }, async (args) => ({
      contents: await readFile(args.path, "utf8"),
      loader: "text",
    }));
  },
};

const header = `/**
* Fabric Command Line tools
* This file contains a bundled TypeScript file with the code and dependencies for the Fabric command line tools.
* The source code for this tool can be found at: https://github.com/FabricMC/fabricmc.net
*/
`;

try {
  const nodeBundle = await esbuild.build({
    entryPoints: [isTest ? "./test.ts" : "./main.ts"],
    plugins: [rawTemplates],
    bundle: true,
    format: "esm",
    minify: !isTest,
    supported: { "dynamic-import": true },
    write: false,
    outfile: outputPath,
    platform: "node",
    target: ["node22"],
    define: {
      __VERSION__: JSON.stringify(version),
    },
    banner: {
      js: header +
        'import { createRequire } from "node:module"; const require = createRequire(import.meta.url);',
    },
  });
  await writeFile(outputPath, nodeBundle.outputFiles![0].text);
  await chmod(outputPath, 0o755);
} finally {
  esbuild.stop();
}
