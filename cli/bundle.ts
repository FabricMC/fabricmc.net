import * as esbuild from "https://deno.land/x/esbuild@v0.20.0/mod.js";
import { denoPlugins } from "https://deno.land/x/esbuild_deno_loader@0.9.0/mod.ts";
import { format } from "https://deno.land/std@0.91.0/datetime/mod.ts";

const header = `/**
* Fabric Command Line tools
* This file contains a bundled TypeScript file with the code and dependencies for the Fabric command line tools.
* It is expected to be ran using https://deno.com/runtime. The source code for this tool can be found at: https://github.com/FabricMC/fabricmc.net
*/
`;

await esbuild.build({
  plugins: [...denoPlugins()],
  entryPoints: ["./main.ts"],
  outfile: "./bundled.ts",
  bundle: true,
  format: "esm",
  target: ["deno1"],
  minify: true,
  banner: { js: header },
  define: { __VERSION__: JSON.stringify(format(new Date(), "yyyy-MM-dd HH:mm:ss")) },
});

esbuild.stop();
