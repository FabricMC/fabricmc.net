import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from "./template";

import javaEntrypointTemplate from './templates/entrypoint/Entrypoint.java.eta?raw';
import kotlinEntrypointTemplate from './templates/entrypoint/Entrypoint.kt.eta?raw';
import javaEntrypointClientTemplate from './templates/entrypoint/ClientEntrypoint.java.eta?raw';
import kotlinEntrypointClientTemplate from './templates/entrypoint/ClientEntrypoint.kt.eta?raw';
import javaEntrypointDataGeneratorTemplate from './templates/entrypoint/DataGeneratorEntrypoint.java.eta?raw';
import kotlinEntrypointDataGeneratorTemplate from './templates/entrypoint/DataGeneratorEntrypoint.kt.eta?raw';
import { getMajorMinecraftVersion, getMinorMinecraftVersion, getPatchMinecraftVersion, minecraftSupportsSlf4j } from "./minecraft";
import { formatClassname } from "./java";

interface IdentifierNames {
    /** @example net.minecraft.resources */
    package: string,
    /** @example Identifier */
    class: string,
    /** @example fromNamespaceAndPath */
    factoryName: string
}

interface IdentifierOptions extends IdentifierNames {
    /**
     * @example Identifier.fromNamespaceAndPath
     * @example new ResourceLocation
     */
    factory: string
}

interface ClassOptions {
    /** @example com.example */
    package: string,
    /** @example com.example.client */
    clientPackage: string
    /** @example ExampleClass */
    className: string,
    /** @example com.example.ExampleClass */
    classFullName: string,
    /** @example com.example.client.ExampleClass */
    clientClassFullName: string
    /** @example com/example/ExampleClass */
    path: string,
    /** @example com/example/client/ExampleClass */
    clientPath: string,
    modid: string,
    slf4j: boolean,
    clientEntrypoint: boolean,
    dataEntrypoint: boolean,
    identifier: IdentifierOptions
}

function getIdentifierFactory(names: IdentifierNames, version: string): string {
    const major = getMajorMinecraftVersion(version);
    const minor = getMinorMinecraftVersion(version);

    if(major > 1 || minor > 20)
        return `${names.class}.${names.factoryName}`;

    return `new ${names.class}`;
}

function getIdentifierNames(options: ComputedConfiguration): IdentifierNames {
    if(!(options.unobfuscated || options.mojmap)) {
        return {
            package: 'net.minecraft.util',
            class: 'Identifier',
            factoryName: 'of'
        };
    }
    const major = getMajorMinecraftVersion(options.minecraftVersion);
    const minor = getMinorMinecraftVersion(options.minecraftVersion);
    const patch = getPatchMinecraftVersion(options.minecraftVersion);

    const clazz = (major > 1 || (minor == 21 && patch == 11)) ? 'Identifier' : 'ResourceLocation';

    return {
        package: 'net.minecraft.resources',
        class: clazz,
        factoryName: 'fromNamespaceAndPath'
    };
}

function buildIdentifierOptions(options: ComputedConfiguration): IdentifierOptions {
    const names = getIdentifierNames(options);
    const factory = getIdentifierFactory(names, options.minecraftVersion);

    return {
        ...names,
        factory
    };
}

export async function generateEntrypoint(writer: TemplateWriter, options: ComputedConfiguration): Promise<unknown> {
    const className = formatClassname(options.projectName);

    const classOptions: ClassOptions = {
        package: options.packageName,
        clientPackage: options.packageName + ".client",
        className,
        classFullName: options.packageName + "." + className,
        clientClassFullName: options.packageName + ".client." + className,
        path: options.packageName.replaceAll(".", "/") + "/" + className,
        clientPath: options.packageName.replaceAll(".", "/") + "/client/" + className,
        modid: options.modid,
        slf4j: minecraftSupportsSlf4j(options.minecraftVersion),
        clientEntrypoint: options.splitSources,
        dataEntrypoint: options.dataGeneration,
        identifier: buildIdentifierOptions(options)
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

    await writer.write(`src/main/java/${options.path}.java`, renderTemplate(javaEntrypointTemplate, options))

    if (options.clientEntrypoint) {
        await writer.write(`src/client/java/${options.clientPath}Client.java`, renderTemplate(javaEntrypointClientTemplate, {
            ...options,
            className: options.className + "Client",
            package: options.clientPackage
        }));

        entrypoints = {
            ...entrypoints,
            "client": [
                options.clientClassFullName + "Client"
            ]
        }
    }

    if (options.dataEntrypoint) {
        const sourceSet = options.clientEntrypoint ? "client" : "main";
        const path = options.clientEntrypoint ? options.clientPath : options.path;
        const fullName = options.clientEntrypoint ? options.clientClassFullName : options.classFullName;

        await writer.write(`src/${sourceSet}/java/${path}DataGenerator.java`, renderTemplate(javaEntrypointDataGeneratorTemplate, {
            ...options,
            className: options.className + "DataGenerator",
            package: options.clientEntrypoint ? options.clientPackage : options.package
        }));

        entrypoints = {
            ...entrypoints,
            "fabric-datagen": [
                fullName + "DataGenerator"
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

    await writer.write(`src/main/kotlin/${options.path}.kt`, renderTemplate(kotlinEntrypointTemplate, options))

    if (options.clientEntrypoint) {
        await writer.write(`src/client/kotlin/${options.clientPath}Client.kt`, renderTemplate(kotlinEntrypointClientTemplate, {
            ...options,
            className: options.className + "Client",
            package: options.clientPackage
        }))

        entrypoints = {
            ...entrypoints,
            "client": [
                {
                    "value": options.clientClassFullName + "Client",
                    "adapter": "kotlin",
                }
            ]
        }
    }

    if (options.dataEntrypoint) {
        const sourceSet = options.clientEntrypoint ? "client" : "main";
        const path = options.clientEntrypoint ? options.clientPath : options.path;
        const fullName = options.clientEntrypoint ? options.clientClassFullName : options.classFullName;

        await writer.write(`src/${sourceSet}/kotlin/${path}DataGenerator.kt`, renderTemplate(kotlinEntrypointDataGeneratorTemplate, {
            ...options,
            className: options.className + "DataGenerator",
            package: options.clientEntrypoint ? options.clientPackage : options.package
        }))

        entrypoints = {
            ...entrypoints,
            "fabric-datagen": [
                {
                    "value": fullName + "DataGenerator",
                    "adapter": "kotlin",
                }
            ]
        }
    }

    return entrypoints;
}
