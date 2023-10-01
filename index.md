---
layout: page
---

<div class="home">
   <div class='row'>
      <div class='column'>
         <h1>What is Fabric?</h1>
         <p>Fabric provides a cohesive platform to develop and play with Minecraft mods. Fabric's lightweight and modular design allows for greater flexibility enabling releases for stable and snapshot versions of Minecraft. The Fabric toolchain is <a href="https://github.com/FabricMC">open source</a> for everyone to use, even if you only want some of it!</p>
         <br>
         <a class="page-link page-link-download" href="/use">Download</a>
      </div>
      <div class='column hide-large'>
         <img src="/assets/cliffs.png" alt="">
      </div>
   </div>
   <hr>
   <h1 class="row-heading">Core Components:</h1>
   <div class='row'>
      <div class='column'>
         <h4>Fabric API</h4>
         <p class="component-body">An extensive set of developer APIs that enable developers to create mods. Fabric API provides critical hooks to allow mods to extend and integrate with Minecraft. </p>
         <a class="page-link page-link-info" href="https://minecraft.curseforge.com/projects/fabric/files">Download Fabric API</a>
      </div>
      <div class='column'>
         <h4>Fabric Loader</h4>
         <p class="component-body">A flexible platform independent mod loader designed for Minecraft and other games and applications. Fabric loader enables mods to make use of technology such as <a href="https://github.com/FabricMC/Mixin">Mixin</a> and <a href="https://github.com/FabricMC/intermediary">Intermediary</a>.</p>
         <a class="page-link page-link-info" href="https://fabricmc.net/wiki/documentation:fabric_loader">Find out more</a>
      </div>
      <div class='column'>
         <h4>Fabric Loom</h4>
         <p class="component-body">A Gradle plugin enabling developers to develop and debug mods. Fabric Loom utilizes a number of Fabric-developed tools such as <a href="https://github.com/FabricMC/tiny-remapper">Tiny Remapper</a>, <a href="https://github.com/FabricMC/mapping-io">Mapping-IO</a> and <a href="https://github.com/FabricMC/yarn">Yarn</a>.</p>
         <a class="page-link page-link-info" href="/develop">Get Started</a>
      </div>
   </div>
   <hr>
   <h1 class="row-heading">Latest Blog Posts:</h1>
   <div class='row'>
      {% for post in site.posts limit:2 %}
      <div class='column'>
         <a href="{{ post.url }}">
            <h4>{{ post.title }}</h4>
         </a>
         <p>{{ post.content | strip_html | truncate: 310 }}</p>
         <a class="page-link-info" href="{{ post.url }}">Continue reading</a>
      </div>
      {% endfor %}
   </div>
</div>