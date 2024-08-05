import type { ComputedConfiguration, TemplateWriter } from "./template";

import gitattributes from './templates/git/gitattributes?raw';
import gitignore from './templates/git/gitignore?raw';
import workflow from './templates/git/workflow.yml?raw';
import license from './templates/git/LICENSE?raw';

export async function addGitFiles(writer: TemplateWriter, _config: ComputedConfiguration) {
    await writer.write('.gitattributes', gitattributes);
    await writer.write('.gitignore', gitignore);
    await writer.write('.github/workflows/build.yml', workflow);
    await writer.write('LICENSE', license);
}
