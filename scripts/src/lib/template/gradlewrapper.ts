import type { Options } from './template';
import { decode64 } from './utils';

import gradlew from './templates/gradle/wrapper/gradlew?raw';
import gradlewBat from './templates/gradle/wrapper/gradlew.bat?raw';
import gradleWrapperProperties from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.properties?raw';
import gradleWrapperJar from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.jar?url&inline';
import gitignore from './templates/git/gitignore?raw';
import workflow from './templates/git/workflow.yml?raw'

export async function addGradleWrapper({ writer }: Options) {
	await writer.write('gradlew', gradlew, {
    executable: true
  });
	await writer.write('gradlew.bat', gradlewBat);
	await writer.write('gradle/wrapper/gradle-wrapper.properties', gradleWrapperProperties);
	const jar = await (await fetch(gradleWrapperJar)).arrayBuffer();
	await writer.write('gradle/wrapper/gradle-wrapper.jar', jar);

    // TODO make this configurable, move elsewhere
    await writer.write('.gitignore', gitignore);
    await writer.write('.github/workflows/build.yml', workflow);
}