import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { addGradleWrapper } from './GradleWrapper';
import { addGroovyGradle } from './GradleGroovy';
import { getKotlinAdapterVersions, getLoaderVersions, getMinecraftYarnVersions } from '../Api';
import { addModJson } from './ModJson';

export interface Options {
    minecraftVersion: string,
    projectName: string,
    packageName: string,
    useKotlin: boolean,
    dataGeneration: boolean,
    githubActions: boolean,
    splitSources: boolean,
}

export interface KotlinOptions {
	kotlinVersion: string,
	fabricKotlinAdapterVersion: string
}

// Computed options are not presented to the user.
export interface ComputedOptions extends Options {
	modid: string,
	loaderVersion: string,
	yarnVersion: string,
	kotlin: KotlinOptions | undefined
}

export interface TemplateOptions {
	minecraftVersion: string, loaderVersion: string, yarnVersion: string
}

export async function generateTemplate(options: Options) {
	const computedOptions = await computeOptions(options);
	const zip = new JSZip();

	await addGradleWrapper(zip);
	addGroovyGradle(zip, computedOptions);
	addModJson(zip, computedOptions);

	zip.generateAsync({ type: 'blob' }).then((content) => {
		FileSaver.saveAs(content, `fabric-mod-template-${options.minecraftVersion}.zip`);
	});
}

export function nameToModId(name: string) {
	return name; // TODO
}

async function computeOptions(options: Options) : Promise<ComputedOptions> {
	return {
		...options,
		modid: nameToModId(options.projectName),
		loaderVersion: (await getLoaderVersions()).find((v) => v.stable)!.version,
		yarnVersion: (await getMinecraftYarnVersions(options.minecraftVersion))[0].version,
		kotlin: await computeKotlinOptions(options)
	};
}

async function computeKotlinOptions(options: Options) : Promise<KotlinOptions | undefined> {
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