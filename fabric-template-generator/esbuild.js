// @ts-check
import esbuild from "esbuild";
import rawPlugin from "esbuild-plugin-raw";
import path from "path";

/**
 * @type {import("esbuild").Plugin}
 */
const etaPlugin = {
  name: "eta-fixer",
  setup: function (build) {
    build.onResolve({ filter: /^eta/ }, () => ({
      path: path.resolve("./node_modules/eta/dist/browser/eta.min.js"),
    }));
  },
};

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.js",
    plugins: [rawPlugin(), etaPlugin],
    target: "es2020",
    format: "esm",
    minify: true,
    sourcemap: true
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ["src/api.ts"],
    bundle: true,
    outfile: "dist/api.js",
    target: "es2020",
    format: "esm",
    minify: true,
    sourcemap: true
  })
  .catch(() => process.exit(1));