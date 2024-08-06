---
layout: default
title: Download
permalink: /download/
topnav: true
---

# Download Fabric Loader

You can select the Minecraft and Fabric Loader versions in the installer, which works for all supported versions; it will install Fabric Loader and add it as a profile to your Minecraft Launcher. For more details, see the [Fabric Documentation - Installing Fabric page](https://docs.fabricmc.net/players/installing-fabric).

<noscript style="color:red">You need Javascript to show the Download button.</noscript>
<div class="fabric-component" data-component="Download"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">

## Using a Third-Party Launcher? {#third-party-launcher}

These third-party launchers have their own installation process for Fabric Loader, consider checking out the relevant documentation for the launcher you are using:

<div class="button-group horizontal">
	<a class="button secondary" href="https://support.modrinth.com/en/articles/8827653-installing-updating-mod-loaders-and-game-versions" target="_blank"><img class="button-icon" src="/assets/external/modrinth-app.png"><span>Modrinth App</span></a>
	<a class="button secondary" href="https://support.curseforge.com/en/support/solutions/articles/9000196904-creating-a-custom-profile" target="_blank"><img class="button-icon" src="/assets/external/cf_app_icon.png"><span>CurseForge App</span></a>
	<a class="button secondary" href="https://prismlauncher.org/wiki/getting-started/download-mods/" target="_blank"><img class="button-icon" src="/assets/external/prism_launcher.png"><span>Prism Launcher</span></a>
	<a class="button secondary" href="https://gdlauncher.com/docs/" target="_blank"><img class="button-icon" src="/assets/external/gdlauncher.png"><span>GDLauncher Carbon</span></a>
	<!-- <a class="button secondary" href="https://github.com/MultiMC/Launcher/wiki/Instance-Version#install" target="_blank"><img class="button-icon" src="/assets/external/multimc.png"><span>MultiMC</span></a> -->
	<a class="button secondary" href="https://atlauncher.com/help" target="_blank"><img class="button-icon" src="/assets/external/ATLauncher.png"><span>ATLauncher</span></a>
	<a class="button secondary" href="https://docs.feed-the-beast.com/docs/app/" target="_blank"><img class="button-icon" src="/assets/external/ftb.png"><span>FTB App</span></a>
</div>
<br />
_Is your Launcher not in this list? Consider adding it to the website's [GitHub Repository.](https://github.com/FabricMC/fabricmc.net)_

## Other Installation Methods

### Minecraft Server {#server}

To create a Minecraft server with Fabric mods, use the universal jar installer above to install a server instance on your current system, or use the Fabric Server Launcher, which wraps the vanilla server jar with Fabric Loader - useful for dedicated servers.

<div class="container">

</div>