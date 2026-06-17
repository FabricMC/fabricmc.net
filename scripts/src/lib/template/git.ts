import type { ComputedConfiguration, TemplateWriter } from "./template";
import { renderTemplate } from './eta';

import gitattributes from './templates/git/gitattributes?raw';
import gitignore from './templates/git/gitignore?raw';
import workflow from './templates/git/workflow.yml?raw';
import readme from './templates/git/README.md.eta?raw';
import { extractSpdxLicenses, fillBoilerplate, readLicenseText, readTemplateLicenseText, supportedLicenses } from "./license";

export async function addGitFiles(writer: TemplateWriter, config: ComputedConfiguration) {
    await writer.write('.gitattributes', gitattributes);
    await writer.write('.gitignore', gitignore);
    await writer.write('.github/workflows/build.yml', workflow);

	const licenses = extractSpdxLicenses(config.licenseExpression, true);
	for (let i = 0; i < licenses.length; i++) {
		const license = licenses[i];
		var text;
		
		if (license in supportedLicenses) {
			text = fillBoilerplate(readLicenseText(license), config.authorText);
		}
		else {
			text = fillBoilerplate(readTemplateLicenseText(), config.authorText);
		}

		await writer.write(`LICENSE-${license}.txt`, text);
	}

    await writer.write('README.md', renderTemplate(readme, config));
}
