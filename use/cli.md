---
layout: page
title: "Fabric command line tools"
permalink: /use/cli/
---

The Fabric command line tools (CLI) can be used to generate new mods right from your terminal.

## Installation

The Fabric CLI tools require the [deno runtime](https://deno.com/runtime) to be installed on your system. Deno is a cross platform JavaScript runtime that allows us to use one code base between the web and desktop. After following the [deno installation](https://deno.com/manual/getting_started/installation) instructions, run the following command to globally install the fabric CLI tools:

```
deno install -A -n fabric https://fabricmc.net/cli
```

To update the Fabric command line tools run:
```
fabric upgrade
```

If you wish to remove the Fabric CLI tools run:
```
deno uninstall fabric
```

## Usage
The Fabric CLI tools currently offer one sub command, `init`. In the future we may expand the range of tools offered. If you find an issue please make sure to report it on our [GitHub](https://github.com/FabricMC/fabricmc.net) page.

The `init` sub command can be used to generate a customised template mod. To generate a new mod in the current directory, the following command can be used:
```
fabric init
```

You can optionally pass a directory path, if the directory does not exist it will be created. 
```
fabric init MyCoolMod
```

If you wish to accept all of the default values you can pass the `-y` argument. The directory name is then used to infulence the mod name.
```
fabric init MyCoolMod -y
```