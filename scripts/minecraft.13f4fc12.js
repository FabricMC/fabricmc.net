function l(t) {
  return i(t) >= 26 || o(t) >= 17;
}
function f(t) {
  return i(t) >= 26 || o(t) >= 18;
}
function h(t) {
  return i(t) >= 26 || o(t) >= 19;
}
function p(t) {
  return i(t) >= 26 || t.endsWith("_unobfuscated");
}
function i(t) {
  return c(t)[0];
}
function o(t) {
  return c(t)[1];
}
function d(t) {
  return c(t)[2];
}
function c(t) {
  return t.split("-")[0].split(".").map((r) => parseInt(r));
}
function u(t, a) {
  let r = [];
  const e = a ? "Modid" : "Mod Name";
  return t.length == 0 ? [`${e} is empty!`] : (t.length == 1 ? r.push(`${e} is only a single character! (It must be at least 2 characters long)!`) : t.length > 64 && r.push(`${e} has more than 64 characters!`), t.toLocaleLowerCase().startsWith("fabric") && r.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), r.length === 0 ? void 0 : r);
}
function g(t) {
  if (t === void 0)
    return;
  let a = u(t, !0) ?? [];
  const r = t.charAt(0);
  (r < "a" || r > "z") && a.push("Modid starts with an invalid character '" + r + "' (it must belowercase a-z)");
  let e = null;
  for (let s = 1; s < t.length; s++) {
    let n = t.charAt(s);
    n == "-" || n == "_" || "0" <= n && n <= "9" || "a" <= n && n <= "z" || (e == null && (e = []), e.push(n));
  }
  if (e != null) {
    let s = "Modid contains invalid characters: " + e.map((n) => "'" + n + "'").join(", ") + "!";
    a.push(s + "!");
  }
  if (a.length != 0)
    return a;
}
function M(t) {
  return t.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
export {
  o as a,
  d as b,
  p as c,
  h as d,
  l as e,
  g as f,
  i as g,
  f as m,
  M as n,
  u as s
};
