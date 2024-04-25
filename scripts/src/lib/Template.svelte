<script lang="ts">
    import JSZip from "jszip";
    import FileSaver from "file-saver";
    import DownloadIcon from "./DownloadIcon.svelte";
    import { ICON_FONT, getTemplateGameVersions, type Configuration } from "./template/template";
    import { minecraftSupportsDataGen, minecraftSupportsSplitSources, computeCustomModIdErrors, sharedModIdChecks, formatPackageName, nameToModId} from "./template/minecraft";
    import { computePackageNameErrors } from "./template/java"
    import { decode64 } from "./template/utils";

    let minecraftVersion: string;
    let projectName = "Template Mod";
    let packageName = "com.example";
    let useKotlin = false;
    let mojmap = false;
    let dataGeneration = false;
    let splitSources = true;

    let customModId: string | undefined;
    let loading = false;

    $: modid = nameToModId(projectName);

    const versions = Promise.all([getTemplateGameVersions()]).then(([gameVersions]) => {
        minecraftVersion = gameVersions.find((version) => version.stable)!.version;
        return {
            game: gameVersions,
        };
    });

    $: supportsDataGen = minecraftSupportsDataGen(minecraftVersion || "1.99");
    $: supportsSplitSources = minecraftSupportsSplitSources(minecraftVersion || "1.99");

    $: modIdErrors = computeModIdErrors(modid);
    $: customIdErrors = computeCustomModIdErrors(customModId);
    $: packageNameErrors = computePackageNameErrors(packageName);

    function computeModIdErrors(id: string | undefined) : string[] | undefined {
      if (id === undefined) {
        return undefined;
      }

      return sharedModIdChecks(id, customModId === undefined);
    }

    async function generate() {
        if (modIdErrors !== undefined || (customModId !== undefined && customIdErrors !== undefined) || packageNameErrors.length > 0) {
            return;
        }

        loading = true;

        const generator = await import("./template/template");
        const config: Configuration = {
            modid: customModId ?? modid,
            minecraftVersion,
            projectName,
            packageName,
            useKotlin,
            mojmap,
            dataGeneration: dataGeneration && supportsDataGen,
            splitSources: splitSources && supportsSplitSources,
            uniqueModIcon: true
        };

        const zip = new JSZip();

        await generator.generateTemplate({
            config,
            writer: {
                write: async (path, content, options) => {
                    zip.file(path, content, {
                        unixPermissions: options?.executable ? "774": undefined
                    });
                },
            },
            canvas: {
                create(width, height) {
                    const canvas = document.createElement("canvas");
                    canvas.width = width;
                    canvas.height = height;

                    return {
                        getContext: (id) => canvas.getContext(id),
                        getPng: () => decode64(canvas.toDataURL().split(";base64,")[1]),
                        measureText(ctx: CanvasRenderingContext2D, text) {
                            const metrics = ctx.measureText(text);
                            return {
                                width: metrics.width,
                                ascent: metrics.actualBoundingBoxAscent,
                                descent: metrics.actualBoundingBoxDescent
                            }
                        }
                    };
                },
            }
        });

        FileSaver.saveAs(
            await zip.generateAsync({ type: "blob", platform: "UNIX" }),
            `${modid}-template-${config.minecraftVersion}.zip`
        );

        loading = false;
    }

    function doFormatProjectName() {
        projectName = projectName.trim()
    }

    function doFormatPackageName() {
        packageName = formatPackageName(packageName)
    }

    function useCustomModId() {
        customModId = modid;
    }

    function useDefaultModId() {
        customModId = undefined;
    }
</script>

{#await versions}
    <p>
        Loading data
    
        <!-- Force the icon fonts to be loaded, https://stackoverflow.com/questions/2756575 -->
        <span style="font-family: {ICON_FONT};">...</span>
    </p>
{:then data}
    <div class="template">
        <div class="form-line">
            <h3>Mod Name:</h3>
            <hr />

            {#if customModId != undefined}
                <p>Choose a name for your new mod.</p>
            {:else}
                <p>Choose a name for your new mod. The mod ID will be <code>{modid}</code>. <a href={""} on:click|preventDefault={useCustomModId}>Use custom id</a></p>
            {/if}

            <input id="project-name" bind:value={projectName} on:blur={doFormatProjectName} />

            {#if modIdErrors != undefined}
                {#each modIdErrors as error}
                    <li style="color: red">{error}</li>
                {/each}
                <br>
            {/if}
        </div>

        {#if customModId != undefined}
            <div class="form-line">
                <h3>Mod ID:</h3>
                <hr />
                <p>Enter the modid you wish to use for your mod. <a href={""} on:click|preventDefault={useDefaultModId}>Use default</a></p>
                {#if customIdErrors != undefined}
                    {#each customIdErrors as error}
                        <li style="color: red">{error}</li>
                    {/each}
                    <br />
                {/if}

                <input id="mod-id" bind:value={customModId} />
            </div>
        {/if}

        <div class="form-line">
            <h3>Package Name:</h3>
            <hr />
            <p>
                Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code>name.modid</code>.
            </p>
            <input id="package-name" on:keyup={doFormatPackageName} bind:value={packageName} />

            {#each packageNameErrors as error}
                <li style="color: red">{error}</li>
            {/each}
        </div>

        <div class="form-line">
            <h3>Minecraft Version:</h3>
            <hr />
            <p>
                Select the version of Minecraft that you wish to use for your
                mod.
            </p>
            <select
                id="minecraft-version"
                bind:value={minecraftVersion}
                style="min-width: 200px"
            >
                {#each data.game as version}
                    <option value={version.version}>{version.version}</option>
                {/each}
            </select>
        </div>

        <hr>
        <br>

        <h4>Advanced Options:</h4>

        <div>
            <div class="option-container">
                <input id="kotlin" type="checkbox" class="option-input" bind:checked={useKotlin} />
                <label for="kotlin" class="option-label">Kotlin Programming Language</label>
            </div>
            <p class="option-body">
                <a href="https://kotlinlang.org/">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.
            </p>
        </div>

        <div>
            <div class="option-container">
                <input id="mojmap" type="checkbox" class="option-input" bind:checked={mojmap} />
                <label for="mojmap" class="option-label">Mojang Mappings</label>
            </div>
            <p class="option-body">
                Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.
            </p>
        </div>

        {#if supportsDataGen}
        <div>
            <div class="option-container">
                <input id="datagen" type="checkbox" class="option-input" bind:checked={dataGeneration} />
                <label for="datagen" class="option-label">Data Generation</label>
            </div>
            <p class="option-body">
                This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.
            </p>
        </div>
        {/if}

        {#if supportsSplitSources}
        <div>
            <div class="option-container">
                <input id="splitSources" type="checkbox" class="option-input" bind:checked={splitSources} />
                <label for="splitSources" class="option-label">Split client and common sources</label>
            </div>
            <p class="option-body">
                A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.
            </p>
        </div>
        {/if}

        <br>

        {#if loading}
            <a class="button primary download-button" href={""}>
                <DownloadIcon /> Generating...
            </a>
        {:else}
            <a
                class="button primary large download-button"
                href={""}
                on:click|preventDefault={generate}
            >
                <DownloadIcon /> Download Template (.ZIP)
            </a>
        {/if}
    </div>
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.
    </p>
{/await}

<style lang="scss">
    @font-face {
    	font-family: "Comic Relief";
	    src: url("/assets/fonts/ComicRelief-Regular.woff2");
    }
    
    .template {
        * {
            text-align: left;
        }

        h3 {
            margin-bottom: 0;
        }
        .download-button {
            text-align: center;
        }
    }

    .option {
        &-container {
            display: flex;
            align-items: center;
        }

        &-input {
            width: 1rem;
            height: 1rem;
        }

        &-label {
            margin-left: 0.5rem;
        }

        &-body {
            display: block;
            padding-left: 1rem;
            margin-top: 0.25rem;
            margin-left: 1rem;
        }
    }
</style>
