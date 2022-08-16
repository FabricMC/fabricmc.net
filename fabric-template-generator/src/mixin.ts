import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from ".";

import mixinTemplate from './templates/mixin/Mixin.java.eta?raw';
import { getJavaVersion } from "./java";

export async function generateMixin(writer: TemplateWriter, options: ComputedConfiguration) {
    const packageName = options.packageName + ".mixin";
    const className = "ExampleMixin"

    const mixinJson = {
        "required": true,
        "minVersion": "0.8",
        "package": packageName,
        "compatibilityLevel": getJavaVersion(options.minecraftVersion).mixin,
        "mixins": [
        ],
        "client": [
            className // TODO need an example mixin that targets a common class.
        ],
        "injectors": {
            "defaultRequire": 1
        }
    };

    await writer.write(`src/main/resources/${options.modid}.mixin.json`, JSON.stringify(mixinJson, null, "\t"));
    await writer.write(`src/main/java/${packageName.replace(".", "/")}/${className}.java`, renderTemplate(mixinTemplate, {
        className,
        packageName
    }));
}