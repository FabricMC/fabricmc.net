import { addGradleWrapper } from './gradlewrapper';
import { addGroovyGradle } from './gradlegroovy';
import { getKotlinAdapterVersions, getLoaderVersions, getMinecraftYarnVersions } from './api';
import { addModJson } from './modjson';

export * as api from "./api";

export interface Options {
	/**
	 * The configuration of the project we'd like to generate.
	 */
	config: Configuration;
	/**
	 * An interface we can write the generated files to, depending on the platform we're running
	 * this might be directly to the filesystem or to a zip file.
	 */
	writer: TemplateWriter,
	/**
	 * Because the Gradle wrapper is a huge file we don't want to bundle it in our JavaScript so
	 * we need to load it somehow. Depending on the platform how we load it will vary, so we'll
	 * leave it up to the user to give us the file.
	 */
	gradleWrapperLoader: () => Promise<ArrayBufferLike>,
}

export interface Configuration {
	minecraftVersion: string,
	projectName: string,
	packageName: string,
	useKotlin: boolean,
	dataGeneration: boolean,
	githubActions: boolean,
	splitSources: boolean,
}

export interface KotlinConfiguration {
	kotlinVersion: string,
	fabricKotlinAdapterVersion: string
}

// Computed options are not presented to the user.
export interface ComputedConfiguration extends Configuration {
	modid: string,
	loaderVersion: string,
	yarnVersion: string,
	kotlin: KotlinConfiguration | undefined
}

export interface TemplateOptions {
	minecraftVersion: string, loaderVersion: string, yarnVersion: string
}

export interface TemplateWriter {
	write(path: string, content: string | ArrayBufferLike): Promise<void>
}

export async function generateTemplate(options: Options) {
	const computedConfig = await computeConfig(options.config);

	await addGradleWrapper(options);
	await addGroovyGradle(options.writer, computedConfig);
	await addModJson(options.writer, computedConfig);
}

export function nameToModId(name: string) {
	return name; // TODO
}

async function computeConfig(options: Configuration): Promise<ComputedConfiguration> {
	return {
		...options,
		modid: nameToModId(options.projectName),
		loaderVersion: (await getLoaderVersions()).find((v) => v.stable)!.version,
		yarnVersion: (await getMinecraftYarnVersions(options.minecraftVersion))[0].version,
		kotlin: await computeKotlinOptions(options)
	};
}

async function computeKotlinOptions(options: Configuration): Promise<KotlinConfiguration | undefined> {
	if (!options.useKotlin) {
		return undefined;
	}

	const kotlinVersions = await getKotlinAdapterVersions();
	const fabricKotlinAdapterVersion = kotlinVersions[0]; // 1.8.2+kotlin.1.7.10
	const kotlinVersion = fabricKotlinAdapterVersion.split("+kotlin.")[1];

	return {
		fabricKotlinAdapterVersion,
		kotlinVersion
	};
}