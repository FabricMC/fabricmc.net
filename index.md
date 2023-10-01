---
layout: default
---

<div class="home post-content">
   <header>
      <div class="row-showcase">
         <article class="column">
            <h1>What is Fabric?</h1>
            <section>
               <p>Fabric provides a cohesive platform to develop and play with Minecraft mods. Fabric"s lightweight and modular design allows for greater flexibility enabling releases for stable and snapshot versions of Minecraft.<br><br>The Fabric toolchain is <a href="https://github.com/FabricMC">open source</a> for everyone to use, even if you only want some of it!</p>
            </section>
            <a class="button primary" href="/use">Download</a>
         </article>
         <figure class="column">
            <img class="cover" src="/assets/cliffs.png" alt="">
         </figure>
      </div>
   </header>
   <hr>
   <section>
      <h2>Core Toolchain Projects</h2>
      <div class="row-3">
         <article class="column">
            <h3>Fabric API</h3>
            <section>
               <p>An extensive set of developer APIs that enable developers to create mods. Fabric API provides critical hooks to allow mods to extend and integrate with Minecraft. </p>
            </section>
            <a class="button secondary" href="https://minecraft.curseforge.com/projects/fabric/files">Download Fabric API</a>
         </article>
         <article class="column">
            <h3>Fabric Loader</h3>
            <section>
               <p>A flexible platform independent mod loader designed for Minecraft and other games and applications. Fabric loader enables mods to make use of technology such as <a href="https://github.com/FabricMC/Mixin">Mixin</a> and <a href="https://github.com/FabricMC/intermediary">Intermediary</a>.</p>
            </section>
            <a class="button secondary" href="https://fabricmc.net/wiki/documentation:fabric_loader">Find out more</a>
         </article>
         <article class="column">
            <h3>Fabric Loom</h3>
            <section>
               <p>A Gradle plugin enabling developers to develop and debug mods. Fabric Loom utilizes a number of Fabric-developed tools such as <a href="https://github.com/FabricMC/tiny-remapper">Tiny Remapper</a>, <a href="https://github.com/FabricMC/mapping-io">Mapping-IO</a> and <a href="https://github.com/FabricMC/yarn">Yarn</a>.</p>
            </section>
            <a class="button secondary" href="/develop">Get started</a>
         </article>
      </div>
   </section>
   <hr>
   <section>
      <h2>Latest Blog Posts</h2>
      <div class="row-2">
         {% for post in site.posts limit: 4 %}
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
