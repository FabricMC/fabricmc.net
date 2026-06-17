import type { Configuration } from "./template";

function extractLicenseIds(): string[] {
	const licenseFiles = import.meta.glob(
		"./templates/license/*.txt",
		{
			query: "?raw",
			import: "default",
			eager: true,
		}
	) as Record<string, string>;

	return Object.keys(licenseFiles).map((path) => {
		const match = path.match(/\/([^\/]+)\.txt$/);
		if (match) {
			return match[1];
		}
		throw new Error(`Invalid license file path: ${path}`);
	});
}

export var supportedLicenses = extractLicenseIds();

const LICENSE_NOT_FOUND = "No license found. Please specify a valid license.";

const licenseFiles = import.meta.glob(
    "./templates/license/*.txt",
    {
        query: "?raw",
        import: "default",
        eager: true,
    }
) as Record<string, string>;

export function readLicenseText(
    license: string
): string {
    if (!supportedLicenses.includes(license)) {
        throw new Error(LICENSE_NOT_FOUND);
    }

    const path = `./templates/license/${license}.txt`;
    return licenseFiles[path];
}

export function readTemplateLicenseText(): string {
	return readLicenseText("Template");
}

export function computeLicenseErrors(
    licenseExpression: string
): string[] | undefined {
    const result = validateSpdxExpression(licenseExpression, true);

    if (!result.valid) {
        return [result.error ?? "Invalid SPDX expression."];
    }

    return undefined;
}

export function fillBoilerplate(
    text: string,
    authorText: string
): string {
    return text
        .replace(/<holders>/gi, authorText)
        .replace(/<year>/gi, String(new Date().getFullYear()));
}

export function genCopyrightNotice(
	options: Configuration
): string {
	const template = "Copyright (c) <year> <holders>";
	return fillBoilerplate(template, options.authorText);
}

export function genSpdxHeader(
	options: Configuration
): string {
	return `SPDX-License-Identifier: ${options.licenseExpression}`;
}

const TOKEN_REGEX = /\(|\)|AND|OR|WITH|[A-Za-z0-9.-]+/g;

export interface SpdxValidationResult {
    valid: boolean;
    licenses: string[];
    error?: string;
}

export function validateSpdxExpression(
    expression: string,
    allowCustomLicenses = false
): SpdxValidationResult {
    const tokens = expression.match(TOKEN_REGEX) ?? [];

    if (tokens.length === 0) {
        return {
            valid: false,
            licenses: [],
            error: "Empty SPDX expression."
        };
    }

    const includedLicenses = new Set<string>();

    let i = 0;

    function peek(): string | undefined {
        return tokens[i];
    }

    function consume(expected?: string): string {
        const token = tokens[i++];

        if (expected && token !== expected) {
            throw new Error(
                `Expected '${expected}', found '${token ?? "EOF"}'.`
            );
        }

        return token;
    }

    function parsePrimary(): void {
        const token = peek();

        if (token === "(") {
            consume("(");
            parseExpression();
            consume(")");
            return;
        }

        if (token == null) {
            throw new Error("Unexpected end of expression.");
        }

        if (
            !allowCustomLicenses &&
            !supportedLicenses.includes(token)
        ) {
            throw new Error(`Unknown license '${token}'.`);
        }

        includedLicenses.add(token);
        consume();

        if (peek() === "WITH") {
            consume("WITH");

            const exception = peek();

            if (exception == null) {
                throw new Error(
                    "Expected SPDX exception after WITH."
                );
            }

            // TODO: Validate against SPDX exception list.
            consume();
        }
    }

    function parseAnd(): void {
        parsePrimary();

        while (peek() === "AND") {
            consume("AND");
            parsePrimary();
        }
    }

    function parseExpression(): void {
        parseAnd();

        while (peek() === "OR") {
            consume("OR");
            parseAnd();
        }
    }

    try {
        parseExpression();

        if (i !== tokens.length) {
            throw new Error(
                `Unexpected token '${tokens[i]}'.`
            );
        }

        return {
            valid: true,
            licenses: [...includedLicenses]
        };
    } catch (e) {
        return {
            valid: false,
            licenses: [],
            error:
                e instanceof Error
                    ? e.message
                    : String(e)
        };
    }
}

export function extractSpdxLicenses(
    expression: string,
    allowCustomLicenses = false
): string[] {
    const result = validateSpdxExpression(
        expression,
        allowCustomLicenses
    );

    return result.valid
        ? result.licenses
        : [];
}