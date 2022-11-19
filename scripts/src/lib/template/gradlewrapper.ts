import type { Options } from './template';
import gradlew from './templates/gradle/wrapper/gradlew?raw';
import gradlewBat from './templates/gradle/wrapper/gradlew.bat?raw';
import gradleWrapperProperties from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.properties?raw';
import gradleWrapperJar from './templates/gradle/wrapper/gradle/wrapper/gradle-wrapper.jar.base64?raw';

function decode64(base64: string): ArrayBufferLike {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
}

export async function addGradleWrapper({ writer }: Options) {
	await writer.write('gradlew', gradlew);
	await writer.write('gradlew.bat', gradlewBat);
	await writer.write('gradle/wrapper/gradle-wrapper.properties', gradleWrapperProperties);
	await writer.write('gradle/wrapper/gradle-wrapper.jar', decode64(gradleWrapperJar));
}