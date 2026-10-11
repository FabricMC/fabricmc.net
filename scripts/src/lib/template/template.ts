import { addGradle } from './gradle';
import { addGradleWrapper } from './gradlewrapper';
import { getApiVersionForMinecraft, getKotlinAdapterVersions, getLoaderVersions, getMinecraftYarnVersions } from '../Api';
import { addModJson } from './modjson';
import { addGitFiles } from './git';
import { minecraftIsUnobfuscated, minecraftSupportsSplitSources, minecraftSupportsDataGen } from './minecraft';

export { getTemplateGameVersions } from './versions';

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
	uniqueModIcon: boolean,
	gradleKotlin: boolean
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
	yarnVersion: string | undefined,
	kotlin: KotlinConfiguration | undefined
	unobfuscated: boolean
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

	await addGradle(options.writer, computedConfig);

	await addModJson(options.writer, options.canvas, computedConfig);
	await addGitFiles(options.writer, computedConfig);
}

async function computeConfig(options: Configuration): Promise<ComputedConfiguration> {
	const unobfuscated = minecraftIsUnobfuscated(options.minecraftVersion);
	return {
		...options,
        splitSources: minecraftSupportsSplitSources(options.minecraftVersion) && options.splitSources,
        dataGeneration: minecraftSupportsDataGen(options.minecraftVersion) && options.dataGeneration,
		loaderVersion: (await getLoaderVersions()).find((v) => v.stable)!.version,
		fabricVersion: await getApiVersionForMinecraft(options.minecraftVersion),
		yarnVersion: unobfuscated ? undefined : (await getMinecraftYarnVersions(options.minecraftVersion))[0].version,
		kotlin: await computeKotlinOptions(options),
		unobfuscated
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
