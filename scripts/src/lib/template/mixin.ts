import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from "./template";

import mixinTemplate from './templates/mixin/Mixin.java.eta?raw';
import { getJavaVersion } from "./java";
import { genCopyrightNotice, genSpdxHeader } from "./license";

export async function generateMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown[]> {
    const packageName = options.packageName + ".mixin";
    const className = "ExampleMixin";

    const targetClass = "MinecraftServer";
    const targetClassFull = "net.minecraft.server.MinecraftServer";
    const targetMethod = options.mojmap ? "loadLevel" : "loadWorld";
	const spdxHeader = genSpdxHeader(options);
	const copyrightNotice = genCopyrightNotice(options);

    const mixinJson = {
        "required": true,
        "package": packageName,
        "compatibilityLevel": getJavaVersion(options.minecraftVersion).mixin,
        "mixins": [
            className
        ],
        "injectors": {
            "defaultRequire": 1
        },
        "overwrites": {
            "requireAnnotations": true
        }
    };

    const mixinJsonName = `${options.modid}.mixins.json`;
    await writer.write(`src/main/resources/${mixinJsonName}`, JSON.stringify(mixinJson, null, "\t"));
    await writer.write(`src/main/java/${packageName.replaceAll("\.", "/")}/${className}.java`, renderTemplate(mixinTemplate, {
        className,
        packageName,
        targetClass,
        targetClassFull,
        targetMethod,
		copyrightNotice,
		spdxHeader
    }));

    return [mixinJsonName];
}

export async function generateClientMixin(writer: TemplateWriter, options: ComputedConfiguration) : Promise<unknown[]> {
    const packageName = options.packageName + ".client.mixin";
    const className = "ExampleClientMixin"

    const targetClass = options.mojmap ? "Minecraft" : "MinecraftClient";
    const targetClassFull = `net.minecraft.client.${targetClass}`;
    const targetMethod = "run";
	const spdxHeader = genSpdxHeader(options);
	const copyrightNotice = genCopyrightNotice(options);

    const mixinJson = {
        "required": true,
        "package": packageName,
        "compatibilityLevel": getJavaVersion(options.minecraftVersion).mixin,
        "client": [
            className
        ],
        "injectors": {
            "defaultRequire": 1
        },
        "overwrites": {
            "requireAnnotations": true
        }
    };

    const mixinJsonName = `${options.modid}.client.mixins.json`;
    await writer.write(`src/client/resources/${mixinJsonName}`, JSON.stringify(mixinJson, null, "\t"));
    await writer.write(`src/client/java/${packageName.replaceAll("\.", "/")}/${className}.java`, renderTemplate(mixinTemplate, {
        className,
        packageName,
        targetClass,
        targetClassFull,
        targetMethod,
		copyrightNotice,
		spdxHeader
    }));

    return [
        {
        "config": mixinJsonName,
        "environment": "client"
      }
    ];
}
