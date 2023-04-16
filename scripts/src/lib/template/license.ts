import frontMatter from 'front-matter'
import type { ComputedConfiguration, TemplateWriter } from './template';

const licensesRaw = import.meta.glob("./licenses/*.txt", { as: "raw", eager: true });
const headersRaw = import.meta.glob("./licenses/headers/*.txt", { as: "raw", eager: true });

const currentYear = new Date().getFullYear().toString();

// https://github.com/desktop/desktop/blob/af7b8ae7d1f88ba93e01731cdd7d070ee7ca4a7e/script/build.ts#L16
interface ChooseALicense {
  readonly title: string
  readonly nickname?: string
  readonly "spdx-id": string
}

interface Header {
  readonly "spdx-id": string
}

export type License = {
  readonly name: string
  readonly id: string
  readonly body: string
};

export const licenses = Object.values(licensesRaw)
                  .map(parseLicense)
                  .sort((a, b) => a.name.localeCompare(b.name));
export const licensesMap = new Map(licenses.map(l => [l.name, l]));
export const licenseHeaders = new Map(Object.values(headersRaw).map(parseHeader));

function parseLicense(content: string): License {
  const result = frontMatter<ChooseALicense>(content);

  return {
    name: result.attributes.nickname || result.attributes.title,
    id: result.attributes['spdx-id'],
    body: result.body,
  };
}

function parseHeader(content: string): [string, string] {
  const result = frontMatter<Header>(content);
  const headerText = result.body.trim()
  return [result.attributes['spdx-id'], headerText]
}

export function fillLicensePlaceholders(text: string): string {
  // TODO [fullname]?
  // TODO [modname]
  return text.replaceAll("[yyyy]", currentYear);
}

export function applyHeader(text: string, license: License): string {
  const header = licenseHeaders.get(license.id);

  if (header == undefined) {
    return text;
  }

  return commentBlock(fillLicensePlaceholders(header)) + "\n\n" + text;
}

export async function addLicense(writer: TemplateWriter, options: ComputedConfiguration): Promise<void> {
  writer.write("LICENSE", fillLicensePlaceholders(options.license.body));
}

/*
 * Blah
 */
function commentBlock(header: string): string {
  var lines = ["/*"];

  for (var line of header.split("\n")) {
    lines.push(" * " + line);
  }

  lines.push(" */")
  return lines.join("\n");
}