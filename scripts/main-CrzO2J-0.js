import { _ as e } from "./index-client-C1cRk3Js.js";
//#region \0rolldown_dynamic_import_helper.js
var t = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
};
//#endregion
//#region scripts/src/main.ts
function n(e) {
	return (() => t(/* #__PURE__ */ Object.assign({
		"./lib/Documentation.svelte": () => import("./Documentation-DlUVBudU.js"),
		"./lib/DownloadIcon.svelte": () => import("./DownloadIcon-Dx6AF_oA.js"),
		"./lib/Installer.svelte": () => import("./Installer-B6WCmOvh.js"),
		"./lib/LegacyVersion.svelte": () => import("./LegacyVersion-B7qZjq2E.js"),
		"./lib/MCUpdater.svelte": () => import("./MCUpdater-DmnYRK5c.js"),
		"./lib/Server.svelte": () => import("./Server-CP_-Gftj.js"),
		"./lib/Technic.svelte": () => import("./Technic-DlkVeMdq.js"),
		"./lib/Template.svelte": () => import("./Template-CK-5O7iR.js"),
		"./lib/Versions.svelte": () => import("./Versions-DmuUoGNf.js")
	}), `./lib/${e}.svelte`, 3));
}
var r = {
	Installer: n("Installer"),
	MCUpdater: n("MCUpdater"),
	Technic: n("Technic"),
	Server: n("Server"),
	Versions: n("Versions"),
	Documentation: n("Documentation"),
	Template: n("Template")
};
function i() {
	for (let t of document.getElementsByClassName("fabric-component")) {
		if (!(t instanceof HTMLElement)) continue;
		let n = t.dataset.component;
		if (!n) throw Error("Missing data-component attribute");
		let i = r[n];
		if (!i) throw Error("Unknown component: " + n);
		i().then((n) => {
			e(n.default, { target: t });
		});
	}
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", i) : i();
//#endregion
