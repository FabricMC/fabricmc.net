import * as esbuild from "https://deno.land/x/esbuild@v0.20.0/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const { version } = JSON.parse(await Deno.readTextFile("./package.json"));

const header = `/**
* Fabric Command Line tools
* This file contains a bundled TypeScript file with the code and dependencies for the Fabric command line tools.
* The source code for this tool can be found at: https://github.com/FabricMC/fabricmc.net
*/
`;

const options: esbuild.BuildOptions = {
  plugins: [...denoPlugins()],
  entryPoints: ["./main.ts"],
  bundle: true,
  format: "esm",
  minify: true,
  supported: { "dynamic-import": true },
  banner: { js: header },
  define: {
    __VERSION__: JSON.stringify(format(new Date(), "yyyy-MM-dd HH:mm:ss")),
  },
};

try {
  await esbuild.build({
    ...options,
    outfile: "./bundled.ts",
    target: ["deno1"],
  });
  const nodeBundle = await esbuild.build({
    ...options,
    write: false,
    outfile: "./bundled.mjs",
    platform: "node",
    target: ["node22"],
    define: {
      __VERSION__: JSON.stringify(version),
      "import.meta.main": "true",
    },
    banner: {
      js: header +
        'import { createRequire } from "node:module"; const require = createRequire(import.meta.url);',
    },
  });
  await Deno.writeTextFile(
    "./bundled.mjs",
    nodeBundle.outputFiles![0].text.replace(/^#![^\n]*/, "#!/usr/bin/env node"),
  );
  await Deno.chmod("./bundled.mjs", 0o755);
} finally {
  esbuild.stop();
}
