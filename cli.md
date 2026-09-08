---
layout: page
title: "Fabric command line tools"
permalink: /develop/cli/
---
<style type="text/css">
  code.command {
    display: inline-block;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    user-select: all;
  }
</style>

The Fabric command line tools (CLI) can be used by mod developers to generate new mods and find recommended Fabric versions directly from your terminal. If you happen to find an issue please make sure to report it on our [GitHub](https://github.com/FabricMC/fabricmc.net) page.

## Installation

The Fabric CLI tools can be installed using npm or Deno.

### npm

With [Node.js](https://nodejs.org/) 22 or newer and npm installed, run the following command to globally install the Fabric CLI tools:

<code class="command">
npm install -g @fabricmc/cli
</code>

To update via npm, run:

<code class="command">
npm install -g @fabricmc/cli@latest
</code>

To remove via npm, run:

<code class="command">
npm uninstall -g @fabricmc/cli
</code>

### Deno

After following the [Deno installation](https://deno.com/manual/getting_started/installation) instructions, run the following command to globally install the Fabric CLI tools:

<code class="command">
deno install -A -g -n fabric https://fabricmc.net/cli
</code>

To update via Deno, run:

<code class="command">
fabric upgrade
</code>

To remove via Deno, run:

<code class="command">
deno uninstall fabric
</code>

## Usage

### Generate a mod

The `init` sub-command can be used to generate a customised template mod. To generate a new mod in the current directory, the following command can be used:

<code class="command">
fabric init
</code>

You can optionally pass a directory path, if the directory does not exist it will be created. 

<code class="command">
fabric init MyCoolMod
</code>

If you wish to accept all of the default values you can pass the `-y` argument. The directory name is then used to influence the mod name.

<code class="command">
fabric init MyCoolMod -y
</code>

### Find recommended versions

The `versions` sub-command shows the recommended Fabric Loader, Loom and Fabric API versions for a Minecraft version, along with Yarn mappings when applicable. By default it uses the latest stable Minecraft version:

<code class="command">
fabric versions
</code>

You can optionally pass a Minecraft version to look up a specific version:

<code class="command">
fabric versions 1.21.1
</code>

Pass `--json` to get JSON output for use in scripts:

<code class="command">
fabric versions 1.21.1 --json
</code>

### Run without installing

With Node.js and npm, you can run the CLI without installing it globally:

<code class="command">
npx @fabricmc/cli init
</code>

Alternatively, use Deno to run it directly:

<code class="command">
deno run https://fabricmc.net/cli init
</code>

Deno is secure by default, so will ask for [permission](https://deno.land/manual/basics/permissions) before making any changes to your system.
