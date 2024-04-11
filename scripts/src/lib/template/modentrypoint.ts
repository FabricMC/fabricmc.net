import type { ComputedConfiguration, TemplateWriter } from "./template";

import javaEntrypointTemplate from './templates/entrypoint/Entrypoint.java.eta';
import kotlinEntrypointTemplate from './templates/entrypoint/Entrypoint.kt.eta';
import javaEntrypointClientTemplate from './templates/entrypoint/ClientEntrypoint.java.eta';
import kotlinEntrypointClientTemplate from './templates/entrypoint/ClientEntrypoint.kt.eta';
import javaEntrypointDataGeneratorTemplate from './templates/entrypoint/DataGeneratorEntrypoint.java.eta';
import kotlinEntrypointDataGeneratorTemplate from './templates/entrypoint/DataGeneratorEntrypoint.kt.eta';
import { getMinorMinecraftVersion } from "./minecraft";
import { eta } from "./eta";

interface ClassOptions {
    package: string, // com.example
    className: string, // ExampleClass
    classFullName: string, // com.example.ExampleClass
    path: string, // com/example/ExampleClass
    modid: string,
    slf4j: boolean,
    clientEntrypoint: boolean,
    dataEntrypoint: boolean,
}

export async function generateEntrypoint(writer: TemplateWriter, options: ComputedConfiguration): Promise<unknown> {
    const className = formatClassname(options.projectName);

    const classOptions: ClassOptions = {
        package: options.packageName,
        className,
        classFullName: options.packageName + "." + className,
        path: options.packageName.replaceAll(".", "/") + "/" + className,
        modid: options.modid,
        slf4j: getMinorMinecraftVersion(options.minecraftVersion) >= 18,
        clientEntrypoint: options.splitSources,
        dataEntrypoint: options.dataGeneration
    }

    if (options.kotlin) {
        return await generateKotlinEntrypoint(writer, classOptions);
    } else {
        return await generateJavaEntrypoint(writer, classOptions);
    }
}

function formatClassname(projectName: string): string {
    return projectName.split(' ')
        .map(s => s[0].toUpperCase() + s.slice(1))
        .join("")
        .replace(/\W+/g, "");
}

async function generateJavaEntrypoint(writer: TemplateWriter, options: ClassOptions): Promise<unknown> {
    var entrypoints: any = {
        "main": [
            options.classFullName
        ]
    };

    await writer.write(`src/main/java/${options.path}.java`, eta.render(javaEntrypointTemplate, options))

    if (options.clientEntrypoint) {
        await writer.write(`src/client/java/${options.path}Client.java`, eta.render(javaEntrypointClientTemplate, {...options, className: options.className + "Client"}));

        entrypoints = {
            ...entrypoints,
            "client": [
                options.classFullName + "Client"
            ]
        }
    }

    if (options.dataEntrypoint) {
        await writer.write(`src/main/java/${options.path}DataGenerator.java`, eta.render(javaEntrypointDataGeneratorTemplate, {...options, className: options.className + "DataGenerator"}));

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

    await writer.write(`src/main/kotlin/${options.path}.kt`, eta.render(kotlinEntrypointTemplate, options))

    if (options.clientEntrypoint) {
        await writer.write(`src/client/kotlin/${options.path}Client.kt`, eta.render(kotlinEntrypointClientTemplate, {...options, className: options.className + "Client"}))

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
        await writer.write(`src/main/kotlin/${options.path}DataGenerator.kt`, eta.render(kotlinEntrypointDataGeneratorTemplate, {...options, className: options.className + "DataGenerator"}))

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