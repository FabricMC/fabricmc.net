function l(t) {
  return o(t) >= 26 || i(t) >= 17;
}
function f(t) {
  return o(t) >= 26 || i(t) >= 18;
}
function h(t) {
  return o(t) >= 26 || i(t) >= 19;
}
function p(t) {
  return o(t) >= 26 || t.endsWith("_unobfuscated");
}
function o(t) {
  return c(t)[0];
}
function i(t) {
  return c(t)[1];
}
function d(t) {
  return c(t)[2];
}
function c(t) {
  return t.split("-")[0].split(".").map((e) => parseInt(e));
}
function u(t, n) {
  let e = [];
  const r = n ? "Modid" : "Mod Name";
  return t.length == 0 ? [`${r} is empty!`] : (t.length == 1 ? e.push(`${r} is only a single character! (It must be at least 2 characters long)!`) : t.length > 64 && e.push(`${r} has more than 64 characters!`), t.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function g(t) {
  if (t === void 0)
    return;
  let n = u(t, !0) ?? [];
  const e = t.charAt(0);
  (e < "a" || e > "z") && n.push("Modid starts with an invalid character '" + e + "' (it must belowercase a-z)");
  let r = null;
  for (let s = 1; s < t.length; s++) {
    let a = t.charAt(s);
    a == "-" || a == "_" || "0" <= a && a <= "9" || "a" <= a && a <= "z" || (r == null && (r = []), r.push(a));
  }
  if (r != null) {
    let s = "Modid contains invalid characters: " + r.map((a) => "'" + a + "'").join(", ") + "!";
    n.push(s + "!");
  }
  if (n.length != 0)
    return n;
}
function m(t) {
  return t.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function M(t) {
  return t.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
export {
  i as a,
  d as b,
  p as c,
  l as d,
  h as e,
  g as f,
  o as g,
  m as h,
  f as m,
  M as n,
  u as s
};
