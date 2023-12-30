const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.72bf12ae.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.214b8f5e.js"), "./lib/Installer.svelte": () => import("./Installer.e251ca0c.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.94297806.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.c0a555d5.js"), "./lib/Server.svelte": () => import("./Server.c715036e.js"), "./lib/Technic.svelte": () => import("./Technic.7e21049e.js"), "./lib/Template.svelte": () => import("./Template.8a80aded.js"), "./lib/Versions.svelte": () => import("./Versions.0087abc3.js") }), `./lib/${e}.svelte`);
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
