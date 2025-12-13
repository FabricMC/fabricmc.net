const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.e9213d32.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.39c279f6.js"), "./lib/Installer.svelte": () => import("./Installer.856f4a3e.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.a9d800dc.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.4b2c017b.js"), "./lib/Server.svelte": () => import("./Server.40e5c214.js"), "./lib/Technic.svelte": () => import("./Technic.aa3954c3.js"), "./lib/Template.svelte": () => import("./Template.ebc3bca2.js"), "./lib/Versions.svelte": () => import("./Versions.74fe0ab6.js") }), `./lib/${e}.svelte`);
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
