//#region scripts/src/lib/Api.ts
var e = [
	"https://meta.fabricmc.net",
	"https://meta2.fabricmc.net",
	"https://meta3.fabricmc.net"
], t = [
	"https://maven.fabricmc.net",
	"https://maven2.fabricmc.net",
	"https://maven3.fabricmc.net"
], n = 0;
async function r() {
	var r = await v(e, "/v2/versions/installer");
	return n != 0 && r.forEach((e) => e.url = e.url.replace(t[0], t[n])), r;
}
async function i() {
	return v(e, "/v2/versions/game");
}
async function a() {
	return v(e, "/v2/versions/loader");
}
async function o() {
	return v(e, "/v2/versions/yarn");
}
async function s(t) {
	return v(e, "/v2/versions/yarn/" + t);
}
async function c(t, n) {
	return v(e, `/v2/versions/loader/${t}/${n}/profile/json`);
}
async function l() {
	return y(t, "/jdlist.txt").then((e) => e.split("\n"));
}
function u() {
	return _("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function d() {
	return _("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function f(e) {
	let t = (await u()).filter((t) => h(t, e)).pop();
	if (!t) throw Error(`Could not find a valid Fabric API version for Minecraft ${e}`);
	return t;
}
function p(e) {
	return m(e)[0];
}
function m(e) {
	return e.split("-")[0].split(".").map((e) => parseInt(e));
}
function h(e, t) {
	if (!t) return !1;
	if (t == "1.18") return e == "0.44.0+1.18";
	let n = t;
	if ([
		"1.14",
		"1.15",
		"1.16",
		"1.17",
		"1.18",
		"1.19",
		"1.20",
		"20w14infinite",
		"1.18_experimental"
	].forEach((e) => {
		t.startsWith(e) && (n = e);
	}), p(t) >= 26) {
		let e = t.indexOf("-");
		n = t.substring(0, e === -1 ? t.length : e);
	}
	return t.endsWith("_unobfuscated") ? n = "1.21.11_unobfuscated" : t.startsWith("25w14craftmine") ? n = "25w14craftmine" : t.startsWith("22w13oneblockatatime") ? n = "22w13oneblockatatime" : t.startsWith("25w") ? n = "1.21.11" : t.startsWith("24w") ? n = "1.21.4" : t.startsWith("23w") ? n = "1.20.5" : t.startsWith("22w") ? n = "1.19.3" : t.startsWith("1.18.2") ? n = "1.18.2" : t.startsWith("1.19.1") ? n = "1.19.1" : t.startsWith("1.19.2") ? n = "1.19.2" : t.startsWith("1.19.3") ? n = "1.19.3" : t.startsWith("1.19.4") ? n = "1.19.4" : t.startsWith("1.20.1") ? n = "1.20.1" : t.startsWith("1.20.2") ? n = "1.20.2" : t.startsWith("1.20.3") ? n = "1.20.3" : t.startsWith("1.20.4") ? n = "1.20.4" : t.startsWith("1.20.5") ? n = "1.20.5" : t.startsWith("1.20.6") ? n = "1.20.6" : t.startsWith("1.21.6") ? n = "1.21.6" : t.startsWith("1.21.7") ? n = "1.21.7" : t.startsWith("1.21.8") ? n = "1.21.8" : t.startsWith("1.21.9") ? n = "1.21.9" : t.startsWith("1.21.10") ? n = "1.21.10" : t.startsWith("1.21.11") ? n = "1.21.11" : t.startsWith("1.21.5") ? n = "1.21.5" : t.startsWith("1.21.4") ? n = "1.21.4" : t.startsWith("1.21.3") ? n = "1.21.3" : t.startsWith("1.21.2") ? n = "1.21.2" : t.startsWith("1.21.1") ? n = "1.21.1" : t.startsWith("1.21") ? n = "1.21" : t.startsWith("21w") ? n = "1.18" : t.startsWith("20w") ? n = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (n = "1.14"), e.endsWith("-" + n) || e.endsWith("+" + n);
}
var g = (e) => {
	let t = new DOMParser().parseFromString(e, "text/xml");
	return Array.from(t.getElementsByTagName("version")).map((e) => e.childNodes[0].nodeValue);
};
async function _(e) {
	return g(await y(t, e));
}
async function v(e, t) {
	return await (await b(e, t)).json();
}
async function y(e, t) {
	return await (await b(e, t)).text();
}
async function b(e, t) {
	let r;
	for (var i of [5e3, 3e4]) for (var a of e) {
		let o = a + t;
		try {
			let t = await fetch(o, { signal: AbortSignal.timeout(i) });
			if (t.ok) return n = e.indexOf(a), t;
			throw Error(`HTTP ${t.status} ${t.statusText}`.trim());
		} catch (e) {
			r ??= e instanceof Error ? e.message : String(e), console.error(e);
		}
	}
	throw Error(`Failed to fetch: ${e[0] + t}. ${r}`);
}
//#endregion
export { l as a, a as c, h as d, r as i, s as l, u as n, d as o, i as r, c as s, f as t, o as u };
