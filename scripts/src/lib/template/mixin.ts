import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from "./template";

import mixinTemplate from './templates/mixin/Mixin.java.eta?raw';
import { getJavaVersion } from "./java";

export async function generateMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown> {
    const packageName = options.packageName + ".mixin";
    const className = "ExampleMixin"

    const mixinJson = {
        "required": true,
        "minVersion": "0.8",
        "package": packageName,
        "compatibilityLevel": getJavaVersion(options.minecraftVersion).mixin,
        "mixins": [
            className
        ],
        "injectors": {
            "defaultRequire": 1
        }
    };

    const mixinJsonName = `${options.modid}.mixins.json`;
    await writer.write(`src/main/resources/${mixinJsonName}`, JSON.stringify(mixinJson, null, "\t"));
    await writer.write(`src/main/java/${packageName.replaceAll("\.", "/")}/${className}.java`, renderTemplate(mixinTemplate, {
        className,
        packageName
    }));

    return [mixinJsonName]
}