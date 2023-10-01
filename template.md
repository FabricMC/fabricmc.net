---
layout: page
title: Template mod generator
permalink: /develop/template/
topnav: false
---

Use this tool to generate a customised template mod project, this is similar to the pre-configured <a href="https://github.com/FabricMC/fabric-example-mod">fabric-example-mod</a>.

Please submit any suggestions or feedback to <a href="https://github.com/FabricMC/fabricmc.net">github.com/FabricMC/fabricmc.net</a>

<noscript style="color:red">You need Javascript to generate a mod template</noscript>
<div class="fabric-component" data-component="Template"></div>

{% assign cacheBust = site.time | date:'?v=%s' %}
<script type="text/javascript" src="{{ "/scripts/main.js" | relative_url | append: cacheBust }}"></script>
<link href="{{ "/scripts/style.css" | relative_url | append: cacheBust }}" rel="stylesheet">

<br>
For setup instructions please see the [fabric wiki page](https://fabricmc.net/wiki/tutorial:setup) that relates to the IDE that you are using.
This template is available under the CC0 license. Feel free to learn from it and incorporate it in your own projects.