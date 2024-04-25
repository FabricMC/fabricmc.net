import { addGradleWrapper } from './gradlewrapper';
import { addGroovyGradle } from './gradlegroovy';
import { getApiVersionForMinecraft, getKotlinAdapterVersions, getLoaderVersions, getMinecraftYarnVersions, type GameVersion, getGameVersions } from '../Api';
import { addModJson } from './modjson';
import { addGitFiles } from './git';

export const ICON_FONT = "Comic Relief";

export interface Options {
	/**
	 * The configuration of the project we'd like to generate.
	 */
	config: Configuration;
	/**
	 * An interface we can write the generated files to, depending on the platform we're running
	 * this might be directly to the filesystem or to a zip file.
	 */
	writer: TemplateWriter;
	canvas: CanvasAdaptorFactory;
}

export interface Configuration {
	modid: string,
	minecraftVersion: string,
	projectName: string,
	packageName: string,
	mojmap: boolean,
	useKotlin: boolean,
	dataGeneration: boolean,
	splitSources: boolean,
	uniqueModIcon: boolean
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

export interface FileOptions {
	executable: boolean;
}

export interface TemplateWriter {
	write(path: string, content: string | ArrayBufferLike, options?: FileOptions): Promise<void>
}

export interface CanvasAdaptorFactory {
	create(width: number, height: number): CanvasAdaptor | null
}

export interface CanvasAdaptor {
  getContext(contextId: "2d"): unknown
	getPng(): ArrayBufferLike
	measureText(ctx: unknown, text: string): TextMetricsAdaptor
}

export interface TextMetricsAdaptor {
	width: number
	ascent: number
	descent: number
}

export async function generateTemplate(options: Options) {
	const computedConfig = await computeConfig(options.config);

	await addGradleWrapper(options);
	await addGroovyGradle(options.writer, computedConfig);
	await addModJson(options.writer, options.canvas, computedConfig);
	await addGitFiles(options.writer, computedConfig);
}

export async function getTemplateGameVersions(): Promise<GameVersion[]> {
	let versions = await getGameVersions()
	return versions.filter((v) => {
		const version = v.version;

		if (version.startsWith("1.14") && version != "1.14.4") {
			// Hide pre 1.14.4 MC versions as they require using V1 yarn.
			return false;
		}

		if (!v.stable) {
			// Hide unstable versions, other than the latest -pre or -rc version.
			const isLatest = versions[0].version == version;
			const isPre = version.includes("-pre") || version.includes("-rc");
			return isLatest && isPre;
		}

		return true;
	});
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