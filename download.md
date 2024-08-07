---
layout: default
title: Download
permalink: /download/
topnav: true
---

# Download Fabric Loader

You can select the Minecraft and Fabric Loader versions in the installer, which works for all supported versions; it will install Fabric Loader and add it as a profile to your Minecraft Launcher.

<noscript style="color:red">You need Javascript to show the Download button.</noscript>
<div class="fabric-component" data-component="Download"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">

<div style="text-align: center;">
	<b>Make sure to follow the <a href="https://docs.fabricmc.net/players/installing-fabric">installation instructions!</a></b>
</div>

## Using a Third-Party Launcher? {#third-party-launcher}

These third-party launchers have their own installation process for Fabric Loader, consider checking out the relevant documentation for the launcher you are using:

<!-- Todo: link to our own guides. -->

<div class="button-group horizontal">
	<a class="button secondary" href="https://fabricmc.net/wiki/player:tutorials:third-party:modrinth" target="_blank"><img class="button-icon" src="/assets/external/modrinth-app.png"><span>Modrinth App</span></a>
	<a class="button secondary" href="https://fabricmc.net/wiki/player:tutorials:third-party:curseforge" target="_blank"><img class="button-icon" src="/assets/external/cf_app_icon.png"><span>CurseForge App</span></a>
	<a class="button secondary" href="https://fabricmc.net/wiki/player:tutorials:third-party:prism" target="_blank"><img class="button-icon" src="/assets/external/prism_launcher.png"><span>Prism Launcher</span></a>
	<a class="button secondary" href="https://fabricmc.net/wiki/player:tutorials:third-party:gdlauncher" target="_blank"><img class="button-icon" src="/assets/external/gdlauncher.png"><span>GDLauncher Carbon</span></a>
	<a class="button secondary" href="https://fabricmc.net/wiki/player:tutorials:third-party:atlauncher" target="_blank"><img class="button-icon" src="/assets/external/ATLauncher.png"><span>ATLauncher</span></a>
	<a class="button secondary" href="https://fabricmc.net/wiki/player:tutorials:third-party:ftb" target="_blank"><img class="button-icon" src="/assets/external/ftb.png"><span>FTB App</span></a>
</div>
<br />
_Is your Launcher not in this list? Consider adding it to the website's [GitHub Repository.](https://github.com/FabricMC/fabricmc.net)_

## Other Installation Methods

### Minecraft Server {#server}

To create a Minecraft server with Fabric mods, use the universal jar installer to set up a server on your system, or the Fabric Server Launcher, which wraps the vanilla server jar with Fabric Loader for dedicated servers. The executable jar is a small launcher that starts the Fabric-enabled Minecraft server using the specified versions, eliminating the need for an installer.

<noscript style="color:red">You need Javascript to show the Server Executable Download button.</noscript>
<div class="fabric-component" data-component="Server"></div>

### Portable Minecraft {#portablemc}

For a portable version, you can use [PortableMC](https://github.com/mindstorm38/portablemc). PortableMC is a fast, reliable, cross-platform command-line Minecraft launcher that simplifies the installation and usage of the Fabric mod loader.

To use Fabric with PortableMC, you can simply run the `portablemc start fabric:` command to install and start a Fabric instance using the latest version of Fabric Loader and Minecraft.

For more information, you should consult the [PortableMC repository](https://github.com/mindstorm38/portablemc).