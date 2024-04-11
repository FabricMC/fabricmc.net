import * as generator from "../../../scripts/dist/fabric-template-generator.js";
import { z } from 'zod'
import JSZip from "jszip";

const GenerateRequestSchema = z.object({
	minecraftVersion: z.string().optional(),
	modName: z.string().optional(),
	modId: z.string().optional(),
	packageName: z.string().optional(),
	options: z.object({
		kotlin: z.boolean().optional(),
		dataGeneration: z.boolean().optional(),
		splitSources: z.boolean().optional()
	}).optional()
})

type ErrorResponse = {
	error: number,
	message: string,
	field?: string
}

export async function generateTemplate(body: unknown): Promise<Response> {
	const request = GenerateRequestSchema.safeParse(body)
	if (!request.success) {
		return errorResponse(400, "Invalid request body")
	}
	const data = request.data

	// Validate minecraftVersion
	const minecraftVersions = await generator.getTemplateGameVersions()
	const minecraftVersion = data.minecraftVersion ?? minecraftVersions[0].version
	if (!minecraftVersions.map((v) => v.version).includes(minecraftVersion)) {
		return errorResponse(400, "Invalid Minecraft version", "minecraftVersion")
	}

	// Validate modName
	const modName = data.modName ?? "Example Mod"
	if (modName.length < 2) {
		return errorResponse(400, "Mod name must be at least 2 characters", "modName")
	}

	// Generate and validate modId
	const modid = data.modId || generator.nameToModId(modName)
	const modidErrors = generator.computeCustomModIdErrors(modid)
	if (modidErrors != undefined) {
		return errorResponse(400, modidErrors.join(", "), "modId")
	}

	// Generate and validate packageName
	const packageName = data.packageName || generator.formatPackageName(modName)
	const packageNameErrors = generator.computePackageNameErrors(packageName)
	if (packageNameErrors.length > 0) {
		return errorResponse(400, packageNameErrors.join(", "), "packageName")
	}

	const useKotlin = data.options?.kotlin || false
	const dataGeneration = data.options?.dataGeneration || false
	const splitSources = data.options?.splitSources || generator.minecraftSupportsSplitSources(minecraftVersion)

	if (dataGeneration && !generator.minecraftSupportsSplitSources(minecraftVersion)) {
		return errorResponse(400, "Data generation is not supported for this Minecraft version", "options.dataGeneration")
	}
	if (splitSources && !generator.minecraftSupportsSplitSources(minecraftVersion)) {
		return errorResponse(400, "Split sources are not supported for this Minecraft version", "options.splitSources")
	}

	const zip = new JSZip();
	const options: generator.Options = {
		config: {
			modid,
			minecraftVersion,
			projectName: modName,
			packageName,
			useKotlin,
			dataGeneration,
			splitSources,
			uniqueModIcon: false // Not supported in Cloudflare Workers
		},
		writer: {
			write: async (path, content, options) => {
				zip.file(path, content, {
					unixPermissions: options?.executable ? "774": undefined
				});
			}
		},
		canvas: {
			create(width, height) {
				// Not implemented in Cloudflare Workers
				throw new Error("Not implemented")
			}
		}
	}
	await generator.generateTemplate(options)
	let content = await zip.generateAsync({ type: "uint8array" })
	const filename = `${modid}-template-${minecraftVersion}.zip`
	return new Response(content, {
		status: 200,
		headers: {
			"Content-Type": "application/zip",
			"Content-Disposition": `attachment; filename="${filename}"`
		}
	})
}

function errorResponse(error: number, message: string, field?: string): Response {
	const response: ErrorResponse = {
		error,
		message,
		field
	}
	return new Response(JSON.stringify(response), { status: error, headers: { 'Content-Type': 'application/json' } })
}