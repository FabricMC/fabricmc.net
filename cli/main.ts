// @deno-types="../scripts/dist/fabric-template-generator.d.ts"
import * as generator from "../scripts/dist/fabric-template-generator.js";
import { parse as parseXml } from "https://deno.land/x/xml@2.1.1/mod.ts";

// Set the XML parser as we do not have DomParser here.
generator.setXmlVersionParser((xml) => {
  const document = parseXml(xml) as any;
  return document.metadata.versioning.versions.version;
});

await generator.generateTemplate({
  config: {
    modid: "example",
    minecraftVersion: "1.19.4",
    projectName: "Test",
    packageName: "example",
    useKotlin: false,
    dataGeneration: false,
    splitSources: true,
  },
  writer: {
    write: async (path, _content, _options) => {
      console.log(path);
    },
  },
});
