---
layout: page
title: use
permalink: /use/
topnav: true
---

<!--
    Handle the old URLs /use?page=xyz
-->
<script>
    var match = /page=(\w+)/.exec(window.location.href);
    switch (match ? match[1] : "") {
        default:
        case "installer":
            window.location.href = '/use/installer/';
            break;
        case "server":
            window.location.href = '/use/server/';
            break;
        case "mcupdater":
            window.location.href = '/use/mcupdater/';
            break;
        case "technic":
            window.location.href = '/use/installer/';
            break;
        case "atlauncher":
            window.location.href = '/use/installer/';
            break;
    }
</script>
