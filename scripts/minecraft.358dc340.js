function u(t) {
  return o(t) >= 26 || c(t) >= 17;
}
function f(t) {
  return o(t) >= 26 || c(t) >= 19;
}
function h(t) {
  return o(t) >= 26 || t.endsWith("_unobfuscated");
}
function o(t) {
  return i(t)[0];
}
function c(t) {
  return i(t)[1];
}
function p(t) {
  return i(t)[2];
}
function i(t) {
  return t.split("-")[0].split(".").map((e) => parseInt(e));
}
function l(t, n) {
  let e = [];
  const r = n ? "Modid" : "Mod Name";
  return t.length == 0 ? [`${r} is empty!`] : (t.length == 1 ? e.push(`${r} is only a single character! (It must be at least 2 characters long)!`) : t.length > 64 && e.push(`${r} has more than 64 characters!`), t.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function d(t) {
  if (t === void 0)
    return;
  let n = l(t, !0) ?? [];
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
function g(t) {
  return t.toLocaleLowerCase().replaceAll(/\s+/g, ".").replaceAll(/[^a-za-z0-9_\.]/, "");
}
function m(t) {
  return t.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
export {
  c as a,
  p as b,
  u as c,
  f as d,
  d as e,
  g as f,
  o as g,
  h as m,
  m as n,
  l as s
};
