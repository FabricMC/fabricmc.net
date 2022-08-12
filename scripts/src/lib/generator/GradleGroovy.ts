import type JSZip from 'jszip';
import type { ComputedOptions } from './TemplateGenerator';
import { renderTemplate } from './eta';

import gradlePropertiesTemplate from './templates/gradle/groovy/gradle.properties.eta?raw';
import buildGradleTemplate from './templates/gradle/groovy/build.gradle.eta?raw';
import settingsGradle from './templates/gradle/groovy/settings.gradle?raw';

export function addGroovyGradle(zip: JSZip, options: ComputedOptions) {
	zip.file('gradle.properties', renderTemplate(gradlePropertiesTemplate, options));
	zip.file('build.gradle', renderTemplate(buildGradleTemplate, options));
	zip.file('settings.gradle', settingsGradle);
}
