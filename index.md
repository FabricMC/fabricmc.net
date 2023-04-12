---
layout: page
---
Fabric is a lightweight modding toolchain for Minecraft.

## design

* Fabric's APIs are lightweight and modular, making porting faster and game instances leaner.
* Fabric development targets snapshots as well as release versions, allowing earlier mod updates and more informed community planning.
* The Fabric toolchain is available for everyone to use - even if you only want to use some of it!

## installation

To install Fabric, you need the **Fabric Loader**, which you can <a class="page-link page-link-download" href="/use">download here</a>

In addition, most mods depend on an API mod, containing commonly used hooks. They can be found here:

* [Fabric API for Minecraft 1.14 and above](https://minecraft.curseforge.com/projects/fabric/files)

It is recommended that you read the <a href="https://fabricmc.net/wiki/faq:user">Frequently Asked Questions for users.</a> 

## projects

### enigma

The Fabric project maintains a [fork](https://github.com/FabricMC/Enigma) of [Enigma](https://www.cuchazinteractive.com/enigma/), a tool
for deobfuscation of Java classes originally by Cuchaz Interactive. Our changes include countless
bugfixes, optimizations and improvements across the codebase, as well as user experience and compatibility
improvements.

Downloads can be found [here](https://maven.fabricmc.net/cuchaz/enigma/).

### tiny-remapper

The [tiny-remapper](https://github.com/FabricMC/tiny-remapper) project provides a fast, optimized tool for accurately remapping .JAR files
using the Tiny mapping format.

### other tools

* [Fernflower](https://github.com/FabricMC/intellij-fernflower), a modified version of JetBrains' upstream with line number mapping information exposed.
* [Matcher](https://github.com/sfPlayer1/Matcher/), sfPlayer1's tool for tracking elements in obfuscated Java archives across releases used for updating Yarn mappings.
* [Stitch](https://github.com/FabricMC/stitch) is an assortment of small tools providing various functionality used by the Fabric project in command-line form, such as
generating and updating "intermediaries" for cross-version name stability, based on Matcher output or merging client and server Minecraft .JARs.
* [Weave](https://github.com/FabricMC/weave) is an earlier iteration of Stitch and is now generally only used to export Enigma-format mappings to
Tiny-format files.

### libraries

* [Mixin](https://github.com/FabricMC/Mixin), a trait/mixin framework for Java bytecode created by Mumfrey for Sponge - forked by Fabric to adapt to our use cases.
* [tiny-mappings-parser](https://github.com/FabricMC/tiny-mappings-parser), a library for processing Tiny-format mapping files.

### components

* [intermediary](https://github.com/FabricMC/intermediary), providing stable cross-version names and match information between Minecraft releases,
* [yarn](https://github.com/FabricMC/yarn), providing deobfuscated/friendly names for the most recent versions of the game based on community contributions,
* [fabric-loom](https://github.com/FabricMC/fabric-loom) is our Gradle-based build system, used for developing Fabric mods.
* [fabric-loader](https://github.com/FabricMC/fabric-loader) is our version-independent mod loader, providing mod loading and code patching functionality.
* [fabric-api](https://github.com/FabricMC/fabric) is our "hook layer", providing the most common hooks and interoperability required for Fabric mods,
* Fabric language modules for supporting other languages: [Kotlin](https://github.com/FabricMC/fabric-language-kotlin), [Scala](https://github.com/FabricMC/fabric-language-scala).
* [fabric-installer](https://github.com/FabricMC/fabric-installer), a tool for creating Fabric-ready profiles for the official Minecraft launcher.
