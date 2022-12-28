<script lang="ts">
    import JSZip from "jszip";
    import { getGameVersions } from "./Api";
    import FileSaver from "file-saver";
    import DownloadIcon from "./DownloadIcon.svelte";
    import { nameToModId } from "./template/template";
    import { getMinorMinecraftVersion } from "./template/java";

    let minecraftVersion: string;
    let projectName = "Template Mod";
    let packageName = "com.example";
    let useKotlin = false;
    let dataGeneration = false;
    let splitSources = true;

    let loading = false;

    $: modid = nameToModId(projectName);

    const versions = Promise.all([getGameVersions()]).then(([gameVersions]) => {
        const game = gameVersions.filter((v) => v.stable).filter((v) => {
            const version = v.version;

            if (version.startsWith("1.14") && version != "1.14.4") {
                // Hide pre 1.14.4 MC versions as they require using V1 yarn.
                return false;
            }

            return true;
        });
        minecraftVersion = game[0].version;
        return {
            game,
        };
    });

    $: minorMcVersion = getMinorMinecraftVersion(minecraftVersion || "1.99")
    $: supportsDataGen = minorMcVersion >= 17;
    $: supportsSplitSources = minorMcVersion >= 19;


    async function generate() {
        loading = true;

        const generator = await import("./template/template");
        const config = {
            minecraftVersion,
            projectName,
            packageName,
            useKotlin,
            dataGeneration: dataGeneration && supportsDataGen,
            splitSources: splitSources && supportsSplitSources,
        };

        const zip = new JSZip();

        await generator.generateTemplate({
            config,
            writer: {
                write: async (path, content) => {
                    zip.file(path, content);
                },
            },
        });

        FileSaver.saveAs(
            await zip.generateAsync({ type: "blob" }),
            `${modid}-template-${config.minecraftVersion}.zip`
        );

        loading = false;
    }

    function formatPackageName() {
        packageName = packageName.toLocaleLowerCase().replace(/\s+/g, '_').replace(/[^a-za-z0-9-_\.]/, "")
    }
</script>

{#await versions}
    <p>Loading data..</p>
{:then data}
    <div class="template">
        <div class="form-line">
            <h3 for="project-name">Mod Name</h3>
            <hr />
            <p>Choose a name for your new mod. The mod ID will be <code>{modid}</code>.</p>
            <input id="project-name" bind:value={projectName} />
        </div>

        <div class="form-line">
            <h3 for="package-name">Package Name:</h3>
            <hr />
            <p>
                Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code>name.modid</code>.
            </p>
            <input id="package-name" on:keyup={formatPackageName} bind:value={packageName} />
        </div>

        <div class="form-line">
            <h3 for="minecraft-version">Minecraft Version:</h3>
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
                <label for="kotlin" class="option-label">Kotlin Programming Lanuage</label>
            </div>
            <p class="option-body">
                <a href="https://kotlinlang.org/">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.
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

        {#if loading}
            <a class="button download-button" href={""}>
                <DownloadIcon /> Generating...
            </a>
        {:else}
            <a
                class="button download-button"
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
        <a href="/discuss">community discussion</a>
        groups.
    </p>
{/await}

<style lang="scss">
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
