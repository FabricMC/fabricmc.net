import * as esbuild from "https://deno.land/x/esbuild@v0.20.0/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

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
  define: { __VERSION__: JSON.stringify(format(new Date(), "yyyy-MM-dd HH:mm:ss")) },
};

try {
  await esbuild.build({ ...options, outfile: "./bundled.ts", target: ["deno1"] });
  await esbuild.build({
    ...options,
    outfile: "./bundled.mjs",
    platform: "node",
    target: ["node22"],
    define: { ...options.define, "import.meta.main": "true" },
    banner: {
      js: header +
        'import { createRequire } from "node:module"; const require = createRequire(import.meta.url);',
    },
  });
} finally {
  esbuild.stop();
}
