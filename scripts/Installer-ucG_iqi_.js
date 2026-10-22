import { A as e, B as t, C as n, F as r, I as i, L as a, M as o, N as s, P as c, S as l, T as u, b as d, c as f, g as p, h as m, j as h, k as g, l as _, m as v, n as y, p as b, t as x, u as S, v as C, x as w, y as T, z as E } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { i as D } from "./Api-DQbTMgo_.js";
import O from "./DownloadIcon-Dx6AF_oA.js";
//#region scripts/src/lib/Installer.svelte
var k = w("<option> </option>"), A = w("Installer Version: <select style=\"min-width: 200px\"></select> <br/> <br/>", 1), j = w("<a>Show beta versions</a>"), M = w("<p><!> <!></p>"), N = w("<p><a class=\"button primary large\"><!> Download for Windows</a> <br/> <a>Download universal jar</a></p>"), P = w("<p><a class=\"button primary large\"><!> Download installer (Universal/.JAR)</a> <br/> <a>Download for Windows</a></p>"), F = w("<!> <div class=\"download\"><p>The Minecraft and Fabric Loader versions can be selected in the installer, this download\n        works for every version we support.</p> <!></div>", 1), I = w("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), L = w("<p>Loading versions..</p>"), R = w("<main><!></main>");
function z(w, z) {
	a(z, !1);
	let B = navigator.platform == "Win32", V = c(!1), H = c(!1), U = c(""), W = G();
	async function G() {
		let e = await D();
		return r(U, e.find((e) => e.stable)?.url ?? ""), r(V, e[0].stable == 0), e;
	}
	function K() {
		r(H, !0);
	}
	async function q() {
		return (await W).find((e) => e.url === u(U));
	}
	x();
	var J = R(), Y = e(J);
	p(Y, () => W, (e) => {
		var t = L();
		T(e, t);
	}, (i, a) => {
		var c = F(), x = h(c), w = (e) => {
			var n = A(), i = s(h(n));
			b(i, 5, () => u(a), v, (e, t) => {
				var n = k(), r = o(n, !0), i = {};
				g(() => {
					C(r, u(t).version), i !== (i = u(t).url) && (n.value = (n.__value = i) ?? "");
				}), T(e, n);
			}), t(i), S(i), E(4), _(i, () => u(U), (e) => r(U, e)), T(e, n);
		}, D = (r) => {
			var i = d(), a = h(i);
			p(a, q, null, (r, i) => {
				var a = M(), o = e(a), c = (e) => {
					var t = l();
					g(() => C(t, `Installer Version: ${u(i).version ?? ""} (Latest)`)), T(e, t);
				};
				m(o, (e) => {
					u(i)?.stable && e(c);
				});
				var d = s(o, 2), p = (e) => {
					var t = j();
					f(t, "href", "#"), n("click", t, y(K)), T(e, t);
				};
				m(d, (e) => {
					u(H) || e(p);
				}), t(a), T(r, a);
			}), T(r, i);
		};
		m(x, (e) => {
			u(H) ? e(w) : u(V) && e(D, 1);
		});
		var I = s(x, 2), L = s(e(I), 2), R = (n) => {
			var r = N(), i = e(r), a = e(i);
			O(a, {}), E(), t(i);
			var o = s(i, 4);
			t(r), g((e) => {
				f(i, "href", e), f(o, "href", u(U));
			}, [() => u(U).replace(".jar", ".exe")]), T(n, r);
		}, z = (n) => {
			var r = P(), i = e(r), a = e(i);
			O(a, {}), E(), t(i);
			var o = s(i, 4);
			t(r), g((e) => {
				f(i, "href", u(U)), f(o, "href", e);
			}, [() => u(U).replace(".jar", ".exe")]), T(n, r);
		};
		m(L, (e) => {
			B ? e(R) : e(z, -1);
		}), t(I), T(i, c);
	}, (e, t) => {
		var n = I(), r = h(n), i = o(r);
		E(2), g(() => C(i, `Error: ${u(t).message ?? ""}`)), T(e, n);
	}), t(J), T(w, J), i();
}
//#endregion
export { z as default };
