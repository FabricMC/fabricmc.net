// @ts-check
import esbuild from "esbuild";
import rawPlugin from "esbuild-plugin-raw";
import path from "path";

/**
 * Because eta ships a version that only works in Node by default, we'll use a custom plugin to
 * change the import path to just use the browser version. We don't use any Node specific features
 * so we might as well reduce our bundle size.
 * 
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

// Not strictly necessary, but otherwise the frontend would have to have some duplicate code that
// already exists in the library.
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