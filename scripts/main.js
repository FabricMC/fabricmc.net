const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.f6f637d9.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.39c279f6.js"), "./lib/Installer.svelte": () => import("./Installer.e0155eb0.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.46c5024a.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.8c356cdb.js"), "./lib/Server.svelte": () => import("./Server.12ca7a97.js"), "./lib/Technic.svelte": () => import("./Technic.34dec79e.js"), "./lib/Template.svelte": () => import("./Template.c682972c.js"), "./lib/Versions.svelte": () => import("./Versions.da29f8b5.js") }), `./lib/${e}.svelte`);
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
