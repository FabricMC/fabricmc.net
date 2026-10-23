import { A as e, B as t, D as n, E as r, F as i, I as a, L as o, M as s, N as c, O as l, P as u, S as d, T as f, g as p, h as m, j as h, k as g, l as _, m as v, p as y, t as b, u as x, v as S, w as C, x as w, y as T, z as E } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { c as D, d as O, f as k, n as A, r as j, u as M } from "./Api-DQbTMgo_.js";
import { a as N } from "./minecraft-BzvMyynV.js";
//#region scripts/src/lib/Versions.svelte
var P = w("<option> </option>"), F = w("<h2>Latest Versions</h2> <p>Select a Minecraft version to get the recommended versions of Fabric Loader, Yarn, and Fabric API for your <code>gradle.properties</code> file.</p> <p>Minecraft Version: <select style=\"min-width: 200px\"></select></p> <div style=\"margin-bottom: 15px;\"><pre><code> <!> <!></code></pre> <p><strong>Important Note:</strong> In some cases, such as snapshots or special releases, the <code>fabric-api</code> version might not align perfectly with your Minecraft version.</p> <p>If you encounter issues, double-check the latest release of Fabric API on <a href=\"https://modrinth.com/mod/fabric-api\">Modrinth</a> or <a href=\"https://minecraft.curseforge.com/projects/fabric/files\">CurseForge</a>.</p></div>", 1), I = w("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), L = w("<p>Loading versions...</p>"), R = w("<!> <hr/> <h2>Loom</h2> <p>The recommended loom version is <strong>1.19-SNAPSHOT</strong>. This is usually defined near the top of your build.gradle file.</p>", 1);
function z(w, z) {
	o(z, !1);
	let B = u(), V = u(), H = u(), U = u(), W = u(), G = j().then((e) => {
		i(V, e.find((e) => e.stable).version);
		let t = e[0];
		return e.filter((e) => e.stable || e == t);
	}), K = D(), q = O(), J = A();
	n(() => (f(V), M), () => {
		Promise.all([G, K]).then(([e, t]) => {
			let n = e.find((e) => e.version === f(V));
			i(U, M(n, t));
		});
	}), n(() => f(V), () => {
		q.then((e) => i(H, e.find((e) => e.gameVersion == f(V))?.version || "unknown"));
	}), n(() => f(V), () => {
		J.then((e) => i(W, e.filter((e) => k(e, f(V))).pop()));
	}), n(() => f(V), () => {
		i(B, N(f(V) || "1.99"));
	}), l(), b();
	var Y = R(), X = h(Y);
	p(X, () => G, (e) => {
		var t = L();
		T(e, t);
	}, (n, a) => {
		var o = F(), l = c(h(o), 4), u = c(e(l));
		y(u, 5, () => f(a), v, (e, t) => {
			var n = P(), i = s(n, !0), a = {};
			g(() => {
				S(i, (f(t), r(() => f(t).version))), a !== (a = (f(t), r(() => f(t).version))) && (n.value = (n.__value = a) ?? "");
			}), T(e, n);
		}), t(u), x(u), t(l);
		var p = c(l, 2), b = e(p), C = e(b), w = e(C), D = c(w), O = (e) => {
			var t = d();
			g(() => S(t, `yarn_mappings=${f(H) ?? ""}
`)), T(e, t);
		};
		m(D, (e) => {
			f(B) || e(O);
		});
		var k = c(D), A = c(k), j = (e) => {
			var t = d();
			g(() => S(t, `
# Fabric API
fabric_api_version=${f(W) ?? ""}
`)), T(e, t);
		}, M = (e) => {
			var t = d("\n# No Fabric API version available\n# fabric_api_version=\n");
			T(e, t);
		};
		m(A, (e) => {
			f(W) ? e(j) : e(M, -1);
		}), t(C), t(b), E(4), t(p), g(() => {
			S(w, `minecraft_version=${f(V) ?? ""}
`), S(k, `loader_version=${f(U) ?? ""}
loom_version=1.19-SNAPSHOT

`);
		}), _(u, () => f(V), (e) => i(V, e)), T(n, o);
	}, (e, t) => {
		var n = I(), i = h(n), a = s(i);
		E(2), g(() => S(a, `Error: ${C(f(t)), r(() => f(t).message) ?? ""}`)), T(e, n);
	}), E(6), T(w, Y), a();
}
//#endregion
export { z as default };
