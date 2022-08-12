import type JSZip from "jszip";
import { renderTemplate } from "./eta";
import type { ComputedOptions } from "./TemplateGenerator";

import javaEntrypointTemplate from './templates/entrypoint/Entrypoint.java.eta?raw';
import kotlinEntrypointTemplate from './templates/entrypoint/Entrypoint.kt.eta?raw';

interface ClassOptions {
    package: string, // com.example
    className: string, // ExampleClass
    path: string // com/example/ExampleClass
}

export function generateEntrypoint(zip: JSZip, options: ComputedOptions): any {
    const className = "ExampleMod"; // TODO base of mod name.

    const classOptions: ClassOptions = {
        package: options.packageName,
        className,
        path: options.packageName.replace(".", "/") + "/" + className
    }

    if (options.kotlin) {
        return generateKotlinEntrypoint(zip, classOptions);
    }

    return generateJavaEntrypoint(zip, classOptions);
}

function generateJavaEntrypoint(zip: JSZip, options: ClassOptions): any {
    zip.file("src/main/java/" + options.path + ".java", renderTemplate(javaEntrypointTemplate, options))

    return {
        "main": [
            options.className
        ]
    }
}

function generateKotlinEntrypoint(zip: JSZip, options: ClassOptions): any {
    zip.file("src/main/kotlin/" + options.path + ".kt", renderTemplate(kotlinEntrypointTemplate, options))

    return {
        "main": [
            {
                "value": options.className + "::init",
                "adapter": "kotlin",
            }
        ]
    }
}