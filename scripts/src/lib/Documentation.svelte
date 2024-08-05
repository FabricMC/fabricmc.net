<script lang="ts">
    import {
        getJavadocList,
        getYarnVersions,
        getLoaderVersions,
    } from "./Api";

		function handleSelectChange(event: any, project: any) {
				const selectedVersion = event.target.value;

				if (selectedVersion.includes("Select")) return;

                window.location.assign(`https://maven.fabricmc.net/docs/${project.prefix}${selectedVersion}/`);
		}

    function filterAndSortVersions(
        versions: string[],
        prefix: string,
        sorted: string[]
    ): string[] {
        return versions
            .filter((v) => v.startsWith(prefix))
            .map((v) => v.slice(prefix.length))
            .sort((a, b) => {
                return sorted.indexOf(a) - sorted.indexOf(b);
            });
    }

    let data = Promise.all([
        getJavadocList(),
        getYarnVersions(),
        getLoaderVersions(),
    ]).then(([jdList, yarnVersions, loaderVersions]) => {
        const apiVersions = filterAndSortVersions(
            jdList,
            "fabric-api-",
            []
        ).reverse();

        return [
            {
                name: "Minecraft (Yarn)",
                desc: "Javadoc documentation for Minecraft generated from the comments in the yarn mappings.",
                prefix: "yarn-",
                versions: filterAndSortVersions(
                    jdList,
                    "yarn-",
                    yarnVersions.map((v) => v.version)
                ),
                selected: "Select Version",
            },
            {
                name: "Fabric API",
                desc: "Javadoc documentation for Fabric API",
                prefix: "fabric-api-",
                versions: apiVersions,
                selected: "Select Version",
            },
            {
                name: "Fabric Loader",
                desc: "Javadoc documentation for Fabric API",
                prefix: "fabric-loader-",
                versions: filterAndSortVersions(
                    jdList,
                    "fabric-loader-",
                    loaderVersions.map((v) => v.version)
                ),
                selected: "Select Version",
            },
            // Disabled for now as the mixin JD css seems broken
            // {
            //     name: "Mixin (Fabric's fork)",
            //     desc: "Javadoc documentation for Fabric's mixin fork",
            //     prefix: "sponge-mixin-",
            //     versions: mixinVersions,
            //     selected: mixinVersions[0],
            // },
        ];
    });
</script>

<div />

{#await data}
    <p>Loading versions..</p>
{:then data}
    {#each data as project}
        <div class="javadoc-selector">
					<select value="Select {project.name} Version" on:change={(event) => handleSelectChange(event, project)}>
						<option>Select {project.name} Version</option>
							{#each project.versions as version}
									<option value={version}>{version}</option>
							{/each}
					</select>
				</div>
    {/each}
{:catch error}
    <p style="color: red">Error: {error.message}</p>
    <p>
        For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.
    </p>
{/await}
