import type JSZip from "jszip";
import { renderTemplate } from "./eta";
import type { ComputedOptions } from "./TemplateGenerator";

import mixinTemplate from './templates/mixin/Mixin.java.eta?raw';

export function generateMixin(zip: JSZip, options: ComputedOptions) : string[] {
    const packageName = options.packageName + ".mixin";
    const className = "ExampleMixin"

    const mixinJson = {
        "required": true,
        "minVersion": "0.8",
        "package": packageName,
        "compatibilityLevel": "JAVA_17", // TODO pass this in based on the target mc ver.
        "mixins": [
        ],
        "client": [
            className // TODO need an example mixin that targets a common class.
        ],
        "injectors": {
            "defaultRequire": 1
        }
    };

    zip.file(`src/main/resources/${options.modid}.mixin.json`, JSON.stringify(mixinJson, null, "\t"));
    zip.file(`src/main/java/${packageName.replace(".", "/")}/${className}.java`, renderTemplate(mixinTemplate, {
        className,
        packageName
    }));

    return [];
}