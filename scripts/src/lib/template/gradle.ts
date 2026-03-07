import type { ComputedConfiguration, TemplateWriter } from './template';
import { renderTemplate } from './eta';
import { addGroovyGradle } from './gradlegroovy';
import { addKotlinGradle } from './gradlekotlin';

import gradlePropertiesTemplate from './templates/gradle/gradle.properties.eta?raw';

export async function addGradle(writer: TemplateWriter, config: ComputedConfiguration) {
	await writer.write('gradle.properties', renderTemplate(gradlePropertiesTemplate, config));
	if (config.gradleKotlin) {
		await addKotlinGradle(writer, config);
	} else {
		await addGroovyGradle(writer, config);
	}
}
