import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from "./template";

import javaEntrypointTemplate from './templates/entrypoint/Entrypoint.java.eta?raw';
import kotlinEntrypointTemplate from './templates/entrypoint/Entrypoint.kt.eta?raw';
import javaEntrypointClientTemplate from './templates/entrypoint/ClientEntrypoint.java.eta?raw';
import kotlinEntrypointClientTemplate from './templates/entrypoint/ClientEntrypoint.kt.eta?raw';
import javaEntrypointDataGeneratorTemplate from './templates/entrypoint/DataGeneratorEntrypoint.java.eta?raw';
import kotlinEntrypointDataGeneratorTemplate from './templates/entrypoint/DataGeneratorEntrypoint.kt.eta?raw';
import { getMinorMinecraftVersion } from "./java";
import { applyHeader, type License } from './license';

interface ClassOptions {
    package: string, // com.example
    className: string, // ExampleClass
    classFullName: string, // com.example.ExampleClass
    path: string, // com/example/ExampleClass
    modid: string,
    slf4j: boolean,
    clientEntrypoint: boolean,
    dataEntrypoint: boolean,
    license: License,
}

export async function generateEntrypoint(writer: TemplateWriter, options: ComputedConfiguration): Promise<unknown> {
    const className = "ExampleMod"; // TODO base of mod name.

    const classOptions: ClassOptions = {
        package: options.packageName,
        className,
        classFullName: options.packageName + "." + className,
        path: options.packageName.replaceAll(".", "/") + "/" + className,
        modid: options.modid,
        slf4j: getMinorMinecraftVersion(options.minecraftVersion) >= 18,
        clientEntrypoint: options.splitSources,
        dataEntrypoint: options.dataGeneration,
        license: options.license
    }

    if (options.kotlin) {
        return await generateKotlinEntrypoint(writer, classOptions);
    } else {
        return await generateJavaEntrypoint(writer, classOptions);
    }
}

async function generateJavaEntrypoint(writer: TemplateWriter, options: ClassOptions): Promise<unknown> {
    var entrypoints: any = {
        "main": [
            options.classFullName
        ]
    };

    await writer.write(`src/main/java/${options.path}.java`, renderSource(javaEntrypointTemplate, options))

    if (options.clientEntrypoint) {
        await writer.write(`src/client/java/${options.path}Client.java`, renderSource(javaEntrypointClientTemplate, {...options, className: options.className + "Client"}));

        entrypoints = {
            ...entrypoints,
            "client": [
                options.classFullName + "Client"
            ]
        }
    }

    if (options.dataEntrypoint) {
        await writer.write(`src/main/java/${options.path}DataGenerator.java`, renderSource(javaEntrypointDataGeneratorTemplate, {...options, className: options.className + "DataGenerator"}));

        entrypoints = {
            ...entrypoints,
            "fabric-datagen": [
                options.classFullName + "DataGenerator"
            ]
        }
    }

    return entrypoints;
}

async function generateKotlinEntrypoint(writer: TemplateWriter, options: ClassOptions): Promise<unknown> {
    var entrypoints: any =  {
        "main": [
            {
                "value": options.classFullName,
                "adapter": "kotlin",
            }
        ]
    };

    await writer.write(`src/main/kotlin/${options.path}.kt`, renderSource(kotlinEntrypointTemplate, options))

    if (options.clientEntrypoint) {
        await writer.write(`src/client/kotlin/${options.path}Client.kt`, renderSource(kotlinEntrypointClientTemplate, {...options, className: options.className + "Client"}))

        entrypoints = {
            ...entrypoints,
            "client": [
                {
                    "value": options.classFullName + "Client",
                    "adapter": "kotlin",
                }
            ]
        }
    }

    if (options.dataEntrypoint) {
        await writer.write(`src/main/kotlin/${options.path}DataGenerator.kt`, renderSource(kotlinEntrypointDataGeneratorTemplate, {...options, className: options.className + "DataGenerator"}))

        entrypoints = {
            ...entrypoints,
            "fabric-datagen": [
                {
                    "value": options.classFullName + "DataGenerator",
                    "adapter": "kotlin",
                }
            ]
        }
    }

    return entrypoints;
}

function renderSource(template: string, options: ClassOptions): string {
    return applyHeader(renderTemplate(template, options), options.license);
}