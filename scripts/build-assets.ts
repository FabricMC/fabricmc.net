import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { compile } from "sass";
import { build, type Manifest } from "vite";

// Build stylesheets and JavaScript before Eleventy renders pages, returning
// their hashed URLs so the generated HTML references the matching assets.
export async function buildAssets(mode: "development" | "production"): Promise<Map<string, string>> {
    const assetUrls = new Map<string, string>();
    mkdirSync("_site/assets", { recursive: true });

    for (const name of ["main", "dark"]) {
        const result = compile(`assets/${name}.scss`, {
            loadPaths: ["_sass"],
            style: "compressed",
            silenceDeprecations: ["import", "global-builtin", "color-functions", "slash-div"],
        });
        const hash = createHash("sha256").update(result.css).digest("hex").slice(0, 12);
        const url = `/assets/${name}-${hash}.css`;
        writeFileSync(`_site${url}`, result.css);
        assetUrls.set(`/assets/${name}.css`, url);
    }

    await build({
        root: "scripts",
        configFile: "scripts/vite.config.ts",
        mode,
    });
    const manifest: Manifest = JSON.parse(readFileSync("_site/scripts/.vite/manifest.json", "utf8"));
    assetUrls.set("/scripts/main.js", `/scripts/${manifest["src/main.ts"].file}`);
    assetUrls.set("/scripts/style.css", `/scripts/${manifest["style.css"].file}`);
    return assetUrls;
}
