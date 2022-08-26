const r = ["https://meta.fabricmc.net", "https://meta2.fabricmc.net"], o = ["https://maven.fabricmc.net", "https://maven2.fabricmc.net"];
async function l() {
  return a(r, "/v2/versions/installer");
}
async function u() {
  return a(r, "/v2/versions/game");
}
async function m() {
  return a(r, "/v2/versions/loader");
}
async function v() {
  return a(r, "/v2/versions/yarn");
}
async function p(e, n) {
  return a(r, `/v2/versions/loader/${e}/${n}/profile/json`);
}
async function y() {
  return i(o, "/jdlist.txt").then((e) => e.split(`
`));
}
async function g(e) {
  return (await a(
    r,
    `/v2/versions/yarn/${e}?limit=1`
  ))[0];
}
async function d() {
  let e = await i(o, "/net/fabricmc/fabric-api/fabric-api/maven-metadata.xml"), s = new DOMParser().parseFromString(e, "text/xml");
  return Array.from(s.getElementsByTagName("version")).map((f) => f.childNodes[0].nodeValue);
}
async function a(e, n) {
  return await (await c(e, n)).json();
}
async function i(e, n) {
  return await (await c(e, n)).text();
}
async function c(e, n) {
  for (var s of e)
    try {
      const t = await fetch(s + n);
      if (t.ok)
        return t;
      console.error(await t.text());
    } catch (t) {
      console.error(t);
    }
  throw new Error(`Failed to fetch: ${e[0] + n}`);
}
export {
  v as a,
  m as b,
  l as c,
  u as d,
  g as e,
  p as f,
  y as g,
  d as h
};
