import { addGradleWrapper } from './gradlewrapper';
import { addGroovyGradle } from './gradlegroovy';
import { getApiVersionForMinecraft, getKotlinAdapterVersions, getLoaderVersions, getMinecraftYarnVersions } from '../Api';
import { addModJson } from './modjson';
import { addGitFiles } from './git';
import { addLicense, type License } from './license';

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
}

export interface Configuration {
	modid: string,
	minecraftVersion: string,
	projectName: string,
	packageName: string,
	useKotlin: boolean,
	dataGeneration: boolean,
	splitSources: boolean,
	license: License
}

export interface KotlinConfiguration {
	kotlinVersion: string,
	fabricKotlinAdapterVersion: string
}

// Computed options are not presented to the user.
export interface ComputedConfiguration extends Configuration {
	modid: string,
	loaderVersion: string,
	fabricVersion: string,
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
	await addGitFiles(options.writer, computedConfig);
	await addLicense(options.writer, computedConfig);
}

export function nameToModId(name: string) {
	return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-za-z0-9-_]/, "");
}

async function computeConfig(options: Configuration): Promise<ComputedConfiguration> {
	return {
		...options,
		loaderVersion: (await getLoaderVersions()).find((v) => v.stable)!.version,
		fabricVersion: await getApiVersionForMinecraft(options.minecraftVersion),
		yarnVersion: (await getMinecraftYarnVersions(options.minecraftVersion))[0].version,
		kotlin: await computeKotlinOptions(options)
	};
}

async function computeKotlinOptions(options: Configuration): Promise<KotlinConfiguration | undefined> {
	if (!options.useKotlin) {
		return undefined;
	}

	const kotlinVersions = await getKotlinAdapterVersions();
	const fabricKotlinAdapterVersion = kotlinVersions.pop()!; // 1.8.2+kotlin.1.7.10
	const kotlinVersion = fabricKotlinAdapterVersion.split("+kotlin.")[1];

	return {
		fabricKotlinAdapterVersion,
		kotlinVersion
	};
}