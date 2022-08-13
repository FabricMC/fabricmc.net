import { Options, TemplateWriter } from '.';
import gradlew from './templates/gradle/wrapper/gradlew?raw';
import gradlewBat from './templates/gradle/wrapper/gradlew.bat?raw';
import gradleWrapperProperties from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.properties?raw';

export async function addGradleWrapper({ writer, gradleWrapperLoader }: Options) {
	await writer.write('gradlew', gradlew);
	await writer.write('gradlew.bat', gradlewBat);
	await writer.write('gradle/wrapper/gradle-wrapper.properties', gradleWrapperProperties);

	// Because we don't want to bundle the gradle wrapper we need to load it at runtime.
	const gradleWrapperBytes = await gradleWrapperLoader();
	await writer.write('gradle/wrapper/gradle-wrapper.jar', gradleWrapperBytes);
}