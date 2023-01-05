import type { ComputedConfiguration, TemplateWriter } from "./template";

import gitignore from './templates/git/gitignore?raw';
import workflow from './templates/git/workflow.yml?raw';

export async function addGitFiles(writer: TemplateWriter, config: ComputedConfiguration) {
    await writer.write('.gitignore', gitignore);
    await writer.write('.github/workflows/build.yml', workflow);
}