const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.c87acc38.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.fd237c91.js"), "./lib/Installer.svelte": () => import("./Installer.4ea49a28.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.df1c9b8d.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.feb6a31d.js"), "./lib/Server.svelte": () => import("./Server.08504aa9.js"), "./lib/Technic.svelte": () => import("./Technic.874689f8.js"), "./lib/Template.svelte": () => import("./Template.ca6d41fc.js"), "./lib/Versions.svelte": () => import("./Versions.544f3bd3.js") }), `./lib/${e}.svelte`);
}
const c = n("Installer"), l = n("MCUpdater"), a = n("Technic"), m = n("Server"), p = n("Versions"), u = n("Documentation"), v = n("Template");
let b = {
  Installer: c,
  MCUpdater: l,
  Technic: a,
  Server: m,
  Versions: p,
  Documentation: u,
  Template: v
};
function d() {
  for (const e of document.getElementsByClassName("fabric-component")) {
    if (!(e instanceof HTMLElement))
      continue;
    const o = e.dataset.component;
    if (!o)
      throw new Error("Missing data-component attribute");
    const t = b[o];
    if (!t)
      throw new Error("Unknown component: " + o);
    t().then((i) => {
      new i.default({
        target: e
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", d);
