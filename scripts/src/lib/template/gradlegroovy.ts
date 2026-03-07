import type { ComputedConfiguration, TemplateWriter } from './template';
import { renderTemplate } from './eta';

import buildGradleTemplate from './templates/gradle/groovy/build.gradle.eta?raw';
import settingsGradle from './templates/gradle/groovy/settings.gradle?raw';
import { getJavaVersion } from './java';

export async function addGroovyGradle(writer: TemplateWriter, config: ComputedConfiguration) {
	await writer.write('build.gradle', renderTemplate(buildGradleTemplate, {...config, java: getJavaVersion(config.minecraftVersion)}));
	await writer.write('settings.gradle', settingsGradle);
}
