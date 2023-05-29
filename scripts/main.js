const s = (e, o) => {
  const t = e[o];
  return t ? typeof t == "function" ? t() : Promise.resolve(t) : new Promise((i, r) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
};
function n(e) {
  return () => s(/* @__PURE__ */ Object.assign({ "./lib/Documentation.svelte": () => import("./Documentation.1a8379f3.js"), "./lib/DownloadIcon.svelte": () => import("./DownloadIcon.81b5365d.js"), "./lib/Installer.svelte": () => import("./Installer.a8c34215.js"), "./lib/LegacyVersion.svelte": () => import("./LegacyVersion.26e41215.js"), "./lib/MCUpdater.svelte": () => import("./MCUpdater.b51ab881.js"), "./lib/Server.svelte": () => import("./Server.1988fcf1.js"), "./lib/Technic.svelte": () => import("./Technic.ac95fdd3.js"), "./lib/Template.svelte": () => import("./Template.4683b41a.js"), "./lib/Versions.svelte": () => import("./Versions.db5f9ae1.js") }), `./lib/${e}.svelte`);
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
