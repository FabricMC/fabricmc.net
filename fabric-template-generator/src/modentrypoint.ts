import { renderTemplate } from "./eta";
import type { ComputedConfiguration, TemplateWriter } from ".";

import javaEntrypointTemplate from './templates/entrypoint/Entrypoint.java.eta?raw';
import kotlinEntrypointTemplate from './templates/entrypoint/Entrypoint.kt.eta?raw';

interface ClassOptions {
    package: string, // com.example
    className: string, // ExampleClass
    path: string // com/example/ExampleClass
}

export async function generateEntrypoint(writer: TemplateWriter, options: ComputedConfiguration): Promise<unknown> {
    const className = "ExampleMod"; // TODO base of mod name.

    const classOptions: ClassOptions = {
        package: options.packageName,
        className,
        path: options.packageName.replace(".", "/") + "/" + className
    }

    if (options.kotlin) {
        return await generateKotlinEntrypoint(writer, classOptions);
    } else {
        return await generateJavaEntrypoint(writer, classOptions);
    }
}

async function generateJavaEntrypoint(writer: TemplateWriter, options: ClassOptions): Promise<unknown> {
    await writer.write("src/main/java/" + options.path + ".java", renderTemplate(javaEntrypointTemplate, options))

    return {
        "main": [
            options.className
        ]
    }
}

async function generateKotlinEntrypoint(writer: TemplateWriter, options: ClassOptions): Promise<unknown> {
    await writer.write("src/main/kotlin/" + options.path + ".kt", renderTemplate(kotlinEntrypointTemplate, options))

    return {
        "main": [
            {
                "value": options.className + "::init",
                "adapter": "kotlin",
            }
        ]
    }
}