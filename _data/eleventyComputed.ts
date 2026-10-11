import site from "./site.json" with { type: "json" };
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({ html: true, typographer: true });

interface PageData {
    layout?: string;
    title?: string;
    description?: string;
    page: {
        rawInput: string;
        url: string;
        date: Date;
    };
}

interface PageSchema {
    "@context": string;
    "@type": "WebPage" | "BlogPosting" | "WebSite";
    headline: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
    name?: string;
}

export default {
    metadata(data: PageData) {
        const isPost = data.layout === "post";
        const title = data.title || site.title;
        let excerpt = "";
        if (isPost) {
            const firstParagraph = data.page.rawInput.trim().split(/\n\s*\n/)[0];
            const html = markdown.render(firstParagraph);
            const text = markdown.utils.unescapeAll(html.replace(/<[^>]*>/g, ""));
            excerpt = text.replace(/\s+/g, " ").trim();
        }
        const description = data.description || excerpt || site.description;
        const url = new URL(data.page.url, site.url).href;
        let schemaType: PageSchema["@type"] = "WebPage";
        if (isPost) {
            schemaType = "BlogPosting";
        } else if (data.page.url === "/") {
            schemaType = "WebSite";
        }
        const schema: PageSchema = {
            "@context": "https://schema.org",
            "@type": schemaType,
            headline: title,
            description,
            url,
        };
        if (isPost) {
            schema.datePublished = data.page.date.toISOString();
            schema.dateModified = schema.datePublished;
        } else {
            schema.name = site.title;
        }
        return {
            title: data.title ? `${title} | ${site.title}` : `${site.title} | ${site.description}`,
            description,
            schema,
        };
    },
};
