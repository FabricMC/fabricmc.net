import type { ComputedConfiguration, TemplateWriter } from './template';

import gradlePropertiesTemplate from './templates/gradle/groovy/gradle.properties.eta';
import buildGradleTemplate from './templates/gradle/groovy/build.gradle.eta';
import settingsGradle from './templates/gradle/groovy/settings.gradle?raw';
import { getJavaVersion } from './java';
import { eta } from './eta';

export async function addGroovyGradle(writer: TemplateWriter, config: ComputedConfiguration) {
	await writer.write('gradle.properties', eta.render(gradlePropertiesTemplate, config));
	await writer.write('build.gradle', eta.render(buildGradleTemplate, {...config, java: getJavaVersion(config.minecraftVersion)}));
	await writer.write('settings.gradle', settingsGradle);
}
