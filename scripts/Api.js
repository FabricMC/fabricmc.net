const a = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], o = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function v() {
  return r(a, "/v2/versions/installer");
}
async function p() {
  return r(a, "/v2/versions/game");
}
async function g() {
  return r(a, "/v2/versions/loader");
}
async function w() {
  return r(a, "/v2/versions/yarn");
}
async function m(t) {
  return r(a, "/v2/versions/yarn/" + t);
}
async function y(t, s) {
  return r(a, `/v2/versions/loader/${t}/${s}/profile/json`);
}
async function d() {
  return l(o, "/jdlist.txt").then((t) => t.split(`
`));
}
async function b(t) {
  return (await r(
    a,
    `/v2/versions/yarn/${t}?limit=1`
  ))[0];
}
function h() {
  return c("/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml");
}
function W() {
  return c("/net/fabricmc/fabric-language-kotlin/maven-metadata.xml");
}
async function x(t) {
  return (await h()).find((n) => {
    let e = t;
    return ["1.14", "1.15", "1.16", "1.17", "1.18", "1.19", "20w14infinite", "1.18_experimental"].forEach((i) => {
      t.startsWith(i) && (e = i);
    }), t.startsWith("22w13oneblockatatime") ? e = "22w13oneblockatatime" : t.startsWith("22w") ? e = "1.19" : t.startsWith("1.18.2") ? e = "1.18.2" : t.startsWith("1.19.1") ? e = "1.19.1" : t.startsWith("1.19.2") ? e = "1.19.2" : t.startsWith("21w") ? e = "1.18" : t.startsWith("20w") ? e = "1.17" : (t.startsWith("19w") || t.startsWith("18w")) && (e = "1.14"), n.endsWith("-" + e) || n.endsWith("+" + e);
  });
}
async function c(t) {
  let s = await l(o, t), e = new DOMParser().parseFromString(s, "text/xml");
  return Array.from(e.getElementsByTagName("version")).map((i) => i.childNodes[0].nodeValue);
}
async function r(t, s) {
  return await (await f(t, s)).json();
}
async function l(t, s) {
  return await (await f(t, s)).text();
}
async function f(t, s) {
  for (var n of t)
    try {
      const e = await fetch(n + s);
      if (e.ok)
        return e;
      console.error(await e.text());
    } catch (e) {
      console.error(e);
    }
  throw new Error(`Failed to fetch: ${t[0] + s}`);
}
export {
  w as a,
  g as b,
  v as c,
  p as d,
  b as e,
  y as f,
  d as g,
  x as h,
  m as i,
  W as j,
  h as k
};
