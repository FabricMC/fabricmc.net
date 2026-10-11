//#region scripts/src/lib/template/minecraft.ts
function e(e) {
	return i(e) >= 26 || a(e) >= 17;
}
function t(e) {
	return i(e) >= 26 || a(e) >= 18;
}
function n(e) {
	return i(e) >= 26 || a(e) >= 19;
}
function r(e) {
	return i(e) >= 26 || e.endsWith("_unobfuscated");
}
function i(e) {
	return s(e)[0];
}
function a(e) {
	return s(e)[1];
}
function o(e) {
	return s(e)[2];
}
function s(e) {
	return e.split("-")[0].split(".").map((e) => parseInt(e));
}
function c(e, t) {
	let n = [], r = t ? "Modid" : "Mod Name";
	return e.length == 0 ? [`${r} is empty!`] : (e.length == 1 ? n.push(`${r} is only a single character! (It must be at least 2 characters long)!`) : e.length > 64 && n.push(`${r} has more than 64 characters!`), e.toLocaleLowerCase().startsWith("fabric") && n.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), n.length === 0 ? void 0 : n);
}
function l(e) {
	if (e === void 0) return;
	let t = c(e, !0) ?? [], n = e.charAt(0);
	(n < "a" || n > "z") && t.push("Modid starts with an invalid character '" + n + "' (it must belowercase a-z)");
	let r = null;
	for (let t = 1; t < e.length; t++) {
		let n = e.charAt(t);
		n == "-" || n == "_" || "0" <= n && n <= "9" || "a" <= n && n <= "z" || (r ??= [], r.push(n));
	}
	if (r != null) {
		let e = "Modid contains invalid characters: " + r.map((e) => "'" + e + "'").join(", ") + "!";
		t.push(e + "!");
	}
	if (t.length != 0) return t;
}
function u(e) {
	return e.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
//#endregion
export { r as a, n as c, o as i, u as l, i as n, e as o, a as r, t as s, l as t, c as u };
