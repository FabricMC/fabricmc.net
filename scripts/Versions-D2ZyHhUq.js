import { A as e, B as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, S as d, T as f, g as p, h as m, j as h, k as g, l as _, m as v, p as y, t as b, u as x, v as S, w as C, x as w, y as T, z as E } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { d as D, f as O, l as k, n as A, r as j } from "./Api-COGEoNr-.js";
import { a as M } from "./minecraft-BzvMyynV.js";
//#region scripts/src/lib/Versions.svelte
var N = w("<option> </option>"), P = w("<h2>Latest Versions</h2> <p>Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.</p> <p>Minecraft Version: <select style=\"min-width: 200px\"></select></p> <div style=\"margin-bottom: 15px;\"><pre><code> <!> <!></code></pre> <p><strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.</p> <p>If you encounter issues, double-check the latest release of Fabric API on <a href=\"https://modrinth.com/mod/fabric-api\">Modrinth</a> or <a href=\"https://minecraft.curseforge.com/projects/fabric/files\">CurseForge</a>.</p></div>", 1), F = w("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), I = w("<p>Loading versions...</p>"), L = w("<!> <hr/> <h2>Loom</h2> <p>The recommended loom version is <strong>1.18-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.</p>", 1);
function R(w, R) {
	o(R, !1);
	let z = u(), B = u(), V = u(), H = u(), U = u(), W = j().then((e) => {
		i(B, e.find((e) => e.stable).version);
		let t = e[0];
		return e.filter((e) => e.stable || e == t).map((e) => e.version);
	});
	k().then((e) => (i(H, e.find((e) => e.stable).version), e));
	let G = D(), K = A();
	n(() => f(B), () => {
		G.then((e) => i(V, e.find((e) => e.gameVersion == f(B))?.version || "unknown"));
	}), n(() => f(B), () => {
		K.then((e) => i(U, e.filter((e) => O(e, f(B))).pop()));
	}), n(() => f(B), () => {
		i(z, M(f(B) || "1.99"));
	}), l(), b();
	var q = L(), J = h(q);
	p(J, () => W, (e) => {
		var t = I();
		T(e, t);
	}, (n, r) => {
		var a = P(), o = c(h(a), 4), l = c(e(o));
		y(l, 5, () => f(r), v, (e, t) => {
			var n = N(), r = s(n, !0), i = {};
			g(() => {
				S(r, f(t)), i !== (i = f(t)) && (n.value = (n.__value = i) ?? "");
			}), T(e, n);
		}), t(l), x(l), t(o);
		var u = c(o, 2), p = e(u), b = e(p), C = e(b), w = c(C), D = (e) => {
			var t = d();
			g(() => S(t, `yarn_mappings=${f(V) ?? ""}
`)), T(e, t);
		};
		m(w, (e) => {
			f(z) || e(D);
		});
		var O = c(w), k = c(O), A = (e) => {
			var t = d();
			g(() => S(t, `
# Fabric API
fabric_api_version=${f(U) ?? ""}
`)), T(e, t);
		}, j = (e) => {
			var t = d("\n# No Fabric API version available\n# fabric_api_version=\n");
			T(e, t);
		};
		m(k, (e) => {
			f(U) ? e(A) : e(j, -1);
		}), t(b), t(p), E(4), t(u), g(() => {
			S(C, `minecraft_version=${f(B) ?? ""}
`), S(O, `loader_version=${f(H) ?? ""}
loom_version=1.18-SNAPSHOT

`);
		}), _(l, () => f(B), (e) => i(B, e)), T(n, a);
	}, (e, t) => {
		var n = F(), i = h(n), a = s(i);
		E(2), g(() => S(a, `Error: ${C(f(t)), r(() => f(t).message) ?? ""}`)), T(e, n);
	}), E(6), T(w, q), a();
}
//#endregion
export { R as default };
