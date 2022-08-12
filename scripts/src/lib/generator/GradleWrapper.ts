import JSZip from 'jszip';

import gradlew from './templates/gradle/wrapper/gradlew?raw';
import gradlewBat from './templates/gradle/wrapper/gradlew.bat?raw';
import gradleWrapperJarUrl from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.jar?url';
import gradleWrapperProperties from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.properties?raw';

export async function addGradleWrapper(zip: JSZip) {
	zip.file('gradlew', gradlew);
	zip.file('gradlew.bat', gradlewBat);
	zip.file('gradle/wrapper/gradle-wrapper.properties', gradleWrapperProperties);

	await addUrl(zip, gradleWrapperJarUrl, 'gradle/wrapper/gradle-wrapper.jar');
}

async function addUrl(zip: JSZip, url: string, path: string) {
	const response = await fetch(url, {
		method: 'GET',
		headers: {
	  		Accept: 'application/java-archive',
		},
	});

	if (!response.ok) {
		throw new Error('failed to download gradle wrapper');
	}

	zip.file(path, await response.blob(), {binary: true});
}