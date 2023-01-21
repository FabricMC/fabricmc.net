import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from "./template";

import mixinTemplate from './templates/mixin/Mixin.java.eta?raw';
import mixinClientTemplate from './templates/mixin/ClientMixin.java.eta?raw';
import { getJavaVersion } from "./java";

export async function generateMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown[]> {
    const packageName = options.packageName + ".mixin";
    const className = "ExampleMixin"

    const mixinJson = {
        "required": true,
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

    return [mixinJsonName];
}

export async function generateClientMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown[]> {
    const packageName = options.packageName + ".mixin.client";
    const className = "ExampleClientMixin"

    const mixinJson = {
        "required": true,
        "package": packageName,
        "compatibilityLevel": getJavaVersion(options.minecraftVersion).mixin,
        "client": [
            className
        ],
        "injectors": {
            "defaultRequire": 1
        }
    };

    const mixinJsonName = `${options.modid}.client.mixins.json`;
    await writer.write(`src/client/resources/${mixinJsonName}`, JSON.stringify(mixinJson, null, "\t"));
    await writer.write(`src/client/java/${packageName.replaceAll("\.", "/")}/${className}.java`, renderTemplate(mixinClientTemplate, {
        className,
        packageName
    }));

    return [
        {
        "config": mixinJsonName,
        "environment": "client"
      }
    ];
}