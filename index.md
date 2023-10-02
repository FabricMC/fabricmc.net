---
layout: default
---

<div class="home post-content">
   <header>
      <div class="showcase">
         <h1>Fabric Loader</h1>
         <p>Fabric is a modular, open source mod loader for Minecraft</p>
         <br>
         <a class="button primary" href="/use">Download</a>
      </div>
   </header>
   <hr>
   <section>
      <div class="row-3">
         <article class="column">
            <h3>Play</h3>
            <section>
               <p class="component-body">Fabric API provides an extenstive set of tools that helps developers create their mods. Fabric API is a requirement for most mods, it can be installed by copying it to the mods directory.</p>
            </section>
            <a class="button secondary" href="https://minecraft.curseforge.com/projects/fabric/files">Download Fabric API</a>
         </article>
         <article class="column">
            <h3>Develop</h3>
            <section>
               <p>A flexible platform independent mod loader designed for Minecraft and other games and applications. Fabric loaders enables mods to make use of technology such as <a href="https://github.com/FabricMC/Mixin">Mixin</a> and <a href="https://github.com/FabricMC/intermediary">Intermediary</a>.</p>
            </section>
            <a class="button secondary" href="/develop">Develop a mod</a>
         </article>
         <article class="column">
            <h3>Explore</h3>
            <section>
               <p>A Gradle plugin enabling developers to develop and debug mods. Fabric Loom utilizes a number of Fabric-developed tools such as <a href="https://github.com/FabricMC/tiny-remapper">Tiny Remapper</a>, <a href="https://github.com/FabricMC/mapping-io">Mapping-IO</a> and <a href="https://github.com/FabricMC/yarn">Yarn</a>.</p>
            </section>
            <a class="button secondary" href="/wiki">Visit the wiki</a>
         </article>
      </div>
   </section>
   <hr>
   <section>
   <h2>Core Toolchain Projects</h2>
   <ul>
      <li><a herf="">Fabric Loader</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
      <li><a herf="">Yarn</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
      <li><a herf="">Fabric Loom</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
      <li><a herf="">Matcher</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
      <li><a herf="">Intermediary</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
      <li><a herf="">Mapping IO</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</li>
   </ul>
   </section>
   <hr>
   <section>
      <h2>Latest Blog Posts</h2>
      <div class="row-2">
         {% for post in site.posts limit: 2 %}
         <article class="column">
            <a href="{{ post.url }}">
               <h3>{{ post.title }}</h3>
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
