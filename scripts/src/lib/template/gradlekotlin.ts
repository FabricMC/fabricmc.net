import type { ComputedConfiguration, TemplateWriter } from './template';
import { renderTemplate } from './eta';

import gradlePropertiesTemplate from './templates/gradle/kotlin/gradle.properties.eta?raw';
import buildGradleTemplate from './templates/gradle/kotlin/build.gradle.kts.eta?raw';
import settingsGradle from './templates/gradle/kotlin/settings.gradle.kts.eta?raw';
import { getJavaVersion } from './java';

export async function addKotlinGradle(writer: TemplateWriter, config: ComputedConfiguration) {
    await writer.write('gradle.properties', renderTemplate(gradlePropertiesTemplate, config));
    await writer.write('build.gradle.kts', renderTemplate(buildGradleTemplate, {...config, java: getJavaVersion(config.minecraftVersion)}));
    await writer.write('settings.gradle.kts', renderTemplate(settingsGradle, config));
}
