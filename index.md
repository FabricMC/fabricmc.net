---
layout: default
---

<div class="home post-content">
   <header>
      <div class="showcase">
         <h1>Fabric Loader</h1>
         <p>Fabric is a modular, lightweight mod loader for Minecraft</p>
         <br>
         <a class="button primary large" href="/use/">Download</a>
      </div>
   </header>
   <hr>
   <section>
      <div class="row-3">
         <article class="column">
            <h3>Play</h3>
            <section>
               <p class="component-body">The Fabric Loader download above is the bare minimum. Combine it with Fabric API to get all the important extra APIs mods use. It has to be put into the mods folder like any other mod.</p>
            </section>
            <a class="button secondary" href="https://www.curseforge.com/minecraft/mc-mods/fabric-api/files">Download Fabric API</a>
         </article>
         <article class="column">
            <h3>Develop</h3>
            <section>
               <p>Fabric gives you powerful tools to change the game however you like. Use the online <a href="/develop/template/">template generator</a> to get started creating a mod. You can also use the <a href="https://github.com/FabricMC/fabric-example-mod">example mod</a> repository or <a href="/develop/cli/">CLI tools</a>.</p>
            </section>
            <a class="button secondary" href="/develop/">Develop a mod</a>
         </article>
         <article class="column">
            <h3>Explore</h3>
            <section>
               <p>Extensive documentation is available in the Fabric wiki for both developers and players. Get additional help from the <a href="https://discord.gg/v6v4pMv">Fabric Discord server</a>, or ask a question on the <a href="https://github.com/orgs/FabricMC/discussions">GitHub Discussion</a> forums.</p>
            </section>
            <a class="button secondary" href="/wiki/">Visit the wiki</a>
         </article>
      </div>
   </section>
   <hr>
   <section>
   <h3>Core Toolchain Projects</h3>
   <ul>
      <li><a href="https://github.com/FabricMC/fabric-loader">Fabric Loader</a> A flexible platform-independent mod loader designed for Minecraft and other games and applications.</li>
      <li><a href="https://github.com/FabricMC/yarn">Yarn</a> Yarn is a set of open Minecraft mappings, free for everyone to use under the Creative Commons Zero license.</li>
      <li><a href="https://github.com/FabricMC/fabric-loom">Fabric Loom</a> A Gradle plugin enabling developers to easily develop and debug mods.</li>
      <li><a href="https://github.com/FabricMC/fabric-language-kotlin">Fabric Language Kotlin</a> This is a mod that enables usage of the Kotlin programming language for Fabric mods.</li>
      <li><a href="https://github.com/FabricMC/intermediary">Intermediary</a> Intermediary contains match information between different versions of Minecraft, enabling cross version mods.</li>
      <li><a href="https://github.com/FabricMC/tiny-remapper">Tiny Remapper</a> A tiny, efficient tool for remapping JAR files.</li>
      <li><a href="https://github.com/FabricMC/mapping-io">Mapping IO</a> A library for reading, manipulating and writing mapping files, with support for a wide range of formats.</li>
   </ul>
   </section>
   <hr>
   <section>
      <h3>Latest Blog Posts</h3>
      <div class="row-2">
         {% for post in site.posts limit: 2 %}
         <article class="column">
            <a href="{{ post.url }}">
               <h4>{{ post.title }}</h4>
            </a>
            <section>
               <p>{{ post.content | strip_html | truncate: 310 }}</p>
            </section>
            <a class="button secondary" href="{{ post.url }}">Continue reading</a>
         </article>
         {% endfor %}
      </div>
   </section>
</div>
