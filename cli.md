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

The Fabric command line tools (CLI) can be used by mod developers to generate new mods directly from your terminal. If you happen to find an issue please make sure to report it on our [GitHub](https://github.com/FabricMC/fabricmc.net) page.

## Installation

The Fabric CLI tools require the [deno runtime](https://deno.com/runtime) to be installed on your system. Deno is a cross platform JavaScript runtime that allows us to use one code base between the web and desktop. After following the [deno installation](https://deno.com/manual/getting_started/installation) instructions, run the following command to globally install the fabric CLI tools:

<code class="command">
deno install -A -g -n fabric https://fabricmc.net/cli
</code>

To update the Fabric command line tools run:

<code class="command">
fabric upgrade
</code>

If you wish to remove the Fabric CLI tools run:

<code class="command">
deno uninstall fabric
</code>

## Usage
The Fabric CLI tools currently offer one main sub-command, `init`.

The `init` sub-command can be used to generate a customised template mod. To generate a new mod in the current directory, the following command can be used:

<code class="command">
fabric init
</code>

You can optionally pass a directory path, if the directory does not exist it will be created. 

<code class="command">
fabric init MyCoolMod
</code>

If you wish to accept all of the default values you can pass the `-y` argument. The directory name is then used to infulence the mod name.

<code class="command">
fabric init MyCoolMod -y
</code>

### Run without installing

If you do not wish to install the Fabric CLI tools to your system, you can use deno to run it directly like so:

<code class="command">
deno run https://fabricmc.net/cli init
</code>

Deno is secure by default, so will ask for [permission](https://deno.land/manual/basics/permissions) before making any changes to your system.
