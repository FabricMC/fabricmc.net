import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from "./template";

import mixinTemplate from './templates/mixin/Mixin.java.eta?raw';
import { getJavaVersion } from "./java";

export async function generateMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown[]> {
    const packageName = options.packageName + ".mixin";
    const className = "ExampleMixin";

    const targetClass = "MinecraftServer";
    const targetClassFull = "net.minecraft.server.MinecraftServer";
    const targetMethod = options.mojmap ? "loadLevel" : "loadWorld";

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
        packageName,
        targetClass,
        targetClassFull,
        targetMethod
    }));

    return [mixinJsonName];
}

export async function generateClientMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown[]> {
    const packageName = options.packageName + ".mixin.client";
    const className = "ExampleClientMixin"

    const targetClass = options.mojmap ? "Minecraft" : "MinecraftClient";
    const targetClassFull = `net.minecraft.client.${targetClass}`;
    const targetMethod = "run";

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
    await writer.write(`src/client/java/${packageName.replaceAll("\.", "/")}/${className}.java`, renderTemplate(mixinTemplate, {
        className,
        packageName,
        targetClass,
        targetClassFull,
        targetMethod
    }));

    return [
        {
        "config": mixinJsonName,
        "environment": "client"
      }
    ];
}