import { A as e, B as t, F as n, I as r, L as i, M as a, N as o, P as s, T as c, a as l, b as u, g as d, h as f, i as p, j as m, k as h, l as g, m as _, p as v, s as y, t as b, u as x, v as S, x as C, y as w, z as T } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { l as E, r as D, s as O } from "./Api-djDgWKPI.js";
//#region scripts/src/lib/LegacyVersion.svelte
var k = C("<option> </option>"), A = C("Game version: <select style=\"min-width: 200px\"></select>", 1), j = C("<p style=\"color: red\"> </p> <p>For support please vist one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), M = C("<p>Loading versions..</p>"), N = C("Loader version: <select style=\"min-width: 200px\"></select>", 1), P = C("<main><label><input type=\"checkbox\"/> Show snapshot versions</label> <br/> <br/> <!> <br/> <br/> <!></main>");
function F(C, F) {
	i(F, !1);
	let I = s(!1), L = s(""), R = s(""), z = D().then((e) => (n(L, e.find((e) => e.stable || c(I))?.version ?? ""), e)), B = E().then((e) => (n(R, e[0]?.version ?? ""), e));
	async function V() {
		return {
			yarnVersion: (await O(c(L)))?.version ?? "",
			loaderVersion: c(R),
			selectedGameVersion: c(L)
		};
	}
	var H = { getSelectedVersions: V };
	b();
	var U = P(), W = e(U), G = e(W);
	y(G), T(), t(W);
	var K = o(W, 6);
	d(K, () => z, (e) => {
		var t = M();
		w(e, t);
	}, (e, r) => {
		var i = A(), s = o(m(i));
		v(s, 5, () => c(r), _, (e, t) => {
			var n = u(), r = m(n), i = (e) => {
				var n = k(), r = a(n, !0), i = {};
				h(() => {
					S(r, c(t).version), i !== (i = c(t).version) && (n.value = (n.__value = i) ?? "");
				}), w(e, n);
			};
			f(r, (e) => {
				(c(t).stable || c(I)) && e(i);
			}), w(e, n);
		}), t(s), x(s), g(s, () => c(L), (e) => n(L, e)), w(e, i);
	}, (e, t) => {
		var n = j(), r = m(n), i = a(r);
		T(2), h(() => S(i, `Error: ${c(t).message ?? ""}`)), w(e, n);
	});
	var q = o(K, 6);
	return d(q, () => B, (e) => {
		var t = M();
		w(e, t);
	}, (e, r) => {
		var i = N(), s = o(m(i));
		v(s, 5, () => c(r), _, (e, t) => {
			var n = k(), r = a(n, !0), i = {};
			h(() => {
				S(r, c(t).version), i !== (i = c(t).version) && (n.value = (n.__value = i) ?? "");
			}), w(e, n);
		}), t(s), x(s), g(s, () => c(R), (e) => n(R, e)), w(e, i);
	}, (e, t) => {
		var n = j(), r = m(n), i = a(r);
		T(2), h(() => S(i, `Error: ${c(t).message ?? ""}`)), w(e, n);
	}), t(U), l(G, () => c(I), (e) => n(I, e)), w(C, U), p(F, "getSelectedVersions", V), r(H);
}
//#endregion
export { F as default };
