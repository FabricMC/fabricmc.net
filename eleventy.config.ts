import { rmSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import Prism from "prismjs";
import loadLanguages from "prismjs/components/index.js";
import { parse } from "yaml";
import site from "./_data/site.json" with { type: "json" };
import { buildAssets } from "./scripts/build-assets.ts";
import type UserConfig from "@11ty/eleventy/UserConfig";

loadLanguages(["java", "groovy", "diff", "json"]);

const markdown = new MarkdownIt({
    html: true,
    typographer: true,
    highlight(code, language) {
        const grammar = Prism.languages[language];
        if (grammar) {
            return Prism.highlight(code, grammar, language);
        }
        return "";
    },
}).use(anchor, { slugify: heading => heading.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s/g, "-") });

export default function (config: UserConfig) {
    const development = process.env.ELEVENTY_RUN_MODE !== "build";
    let assetUrls = new Map<string, string>();
    config.addFilter("asset_url", (url: string) => {
        const assetUrl = assetUrls.get(url);
        if (!assetUrl) {
            throw new Error(`Unknown asset: ${url}`);
        }
        return assetUrl;
    });
    config.addDataExtension("yml", (contents: string) => parse(contents));
    config.addDataExtension("ts", {
        read: false,
        async parser(filePath: string) {
            const url = pathToFileURL(resolve(filePath));
            // Reload changed TypeScript data modules when rebuilding in watch mode.
            url.searchParams.set("mtime", String(statSync(filePath).mtimeMs));
            return (await import(url.href)).default;
        },
    });
    config.setLibrary("md", markdown);
    config.addFilter("json", (value: unknown) => JSON.stringify(value).replace(/</g, "\\u003c"));
    config.addFilter("normalize_whitespace", (text: string) => text.replace(/\s+/g, " "));
    config.addFilter("date_to_xmlschema", (value: Date | string) => new Date(value).toISOString());
    config.addFilter("absolute_url", (value: string) => new URL(value, site.url).href);
    config.addFilter("xml_escape", (value: unknown) => markdown.utils.escapeHtml(String(value)));
    config.addCollection("posts", (collection: { getFilteredByTag(tag: string): unknown[] }) => {
        return collection.getFilteredByTag("posts").reverse();
    });
    config.addWatchTarget("assets/**/*.scss");
    config.addWatchTarget("_sass");
    config.addWatchTarget("scripts/src");
    config.addWatchTarget("scripts/svelte.config.ts");
    config.addWatchTarget("scripts/vite.config.ts");
    config.setServerOptions({ port: 4000, domDiff: false });

    config.addPassthroughCopy("assets/**/*.{png,jpg,svg,woff2,txt}");
    config.addPassthroughCopy("download");
    config.addPassthroughCopy("robots.txt");
    config.ignores.add("{README.md,LICENSE,scripts/**,cli/**,node_modules/**}");
    config.on("eleventy.before", async () => {
        if (!development) {
            rmSync("_site", { recursive: true, force: true });
        }
        assetUrls = await buildAssets(development ? "development" : "production");
    });
    return {
        templateFormats: ["md", "html", "liquid"],
        markdownTemplateEngine: "liquid",
        htmlTemplateEngine: "liquid",
        dir: { input: ".", output: "_site", includes: "_includes", layouts: "_layouts", data: "_data" },
    };
}
