import { S as Fe, i as Re, s as Ve, h as Te, b as _e, c as kt, u as Ge, o as Ut, p as Lt, d as Et, q as De, e as et, t as Nt, a as ot, f as jt, g as P, n as Dt, k as q, r as Oe, C as Ot, l as Kt, m as Bt, D as je, E as Me, j as Yt, B as pe, A as Ht, y as qt, v as me, w as ge, x as be } from "./index.4deac2e0.js";
import ve from "./DownloadIcon.39c279f6.js";
import { g as ze, a as Qe, b as Ue, m as Le, c as ye, d as we, e as ke, n as Ze, f as Pe, s as We, h as Ye } from "./minecraft.d54608dc.js";
import { d as Xe, b as He, h as Je, i as qe, j as Ke } from "./Api.fd2c0b6d.js";
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ee(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
function Wt(C) {
  throw new Error('Could not dynamically require "' + C + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Ce = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(C, u) {
  (function(e) {
    C.exports = e();
  })(function() {
    return function e(h, c, r) {
      function a(p, m) {
        if (!c[p]) {
          if (!h[p]) {
            var g = typeof Wt == "function" && Wt;
            if (!m && g)
              return g(p, !0);
            if (n)
              return n(p, !0);
            var v = new Error("Cannot find module '" + p + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var l = c[p] = { exports: {} };
          h[p][0].call(l.exports, function(b) {
            var s = h[p][1][b];
            return a(s || b);
          }, l, l.exports, e, h, c, r);
        }
        return c[p].exports;
      }
      for (var n = typeof Wt == "function" && Wt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, h, c) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var p, m, g, v, l, b, s, f = [], A = 0, w = o.length, E = w, V = r.getTypeOf(o) !== "string"; A < o.length; )
          E = w - A, g = V ? (p = o[A++], m = A < w ? o[A++] : 0, A < w ? o[A++] : 0) : (p = o.charCodeAt(A++), m = A < w ? o.charCodeAt(A++) : 0, A < w ? o.charCodeAt(A++) : 0), v = p >> 2, l = (3 & p) << 4 | m >> 4, b = 1 < E ? (15 & m) << 2 | g >> 6 : 64, s = 2 < E ? 63 & g : 64, f.push(n.charAt(v) + n.charAt(l) + n.charAt(b) + n.charAt(s));
        return f.join("");
      }, c.decode = function(o) {
        var p, m, g, v, l, b, s = 0, f = 0, A = "data:";
        if (o.substr(0, A.length) === A)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, E = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && E--, o.charAt(o.length - 2) === n.charAt(64) && E--, E % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (v = n.indexOf(o.charAt(s++))) >> 4, m = (15 & v) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, g = (3 & l) << 6 | (b = n.indexOf(o.charAt(s++))), w[f++] = p, l !== 64 && (w[f++] = m), b !== 64 && (w[f++] = g);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, c) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, g, v, l, b) {
        this.compressedSize = m, this.uncompressedSize = g, this.crc32 = v, this.compression = l, this.compressedContent = b;
      }
      p.prototype = { getContentWorker: function() {
        var m = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), g = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== g.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(m, g, v) {
        return m.pipe(new n()).pipe(new o("uncompressedSize")).pipe(g.compressWorker(v)).pipe(new o("compressedSize")).withStreamInfo("compression", g);
      }, h.exports = p;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, h, c) {
      var r = e("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, c.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, h, c) {
      var r = e("./utils"), a = function() {
        for (var n, o = [], p = 0; p < 256; p++) {
          n = p;
          for (var m = 0; m < 8; m++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          o[p] = n;
        }
        return o;
      }();
      h.exports = function(n, o) {
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(p, m, g, v) {
          var l = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ l[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : function(p, m, g, v) {
          var l = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ l[255 & (p ^ m.charCodeAt(s))];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, h, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(e, h, c) {
      var r = null;
      r = typeof Promise < "u" ? Promise : e("lie"), h.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(e, h, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), n = e("./utils"), o = e("./stream/GenericWorker"), p = r ? "uint8array" : "array";
      function m(g, v) {
        o.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = v, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(g) {
        this.meta = g.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(p, g.data), !1);
      }, m.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var g = this;
        this._pako.onData = function(v) {
          g.push({ data: v, meta: g.meta });
        };
      }, c.compressWorker = function(g) {
        return new m("Deflate", g);
      }, c.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, h, c) {
      function r(l, b) {
        var s, f = "";
        for (s = 0; s < b; s++)
          f += String.fromCharCode(255 & l), l >>>= 8;
        return f;
      }
      function a(l, b, s, f, A, w) {
        var E, V, F = l.file, j = l.compression, D = w !== p.utf8encode, X = n.transformTo("string", w(F.name)), G = n.transformTo("string", p.utf8encode(F.name)), J = F.comment, rt = n.transformTo("string", w(J)), k = n.transformTo("string", p.utf8encode(J)), _ = G.length !== F.name.length, i = k.length !== J.length, z = "", it = "", x = "", O = F.dir, N = F.date, L = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !s || (L.crc32 = l.crc32, L.compressedSize = l.compressedSize, L.uncompressedSize = l.uncompressedSize);
        var S = 0;
        b && (S |= 8), D || !_ && !i || (S |= 2048);
        var B = 0, K = 0;
        O && (B |= 16), A === "UNIX" ? (K = 798, B |= function(H, lt) {
          var ft = H;
          return H || (ft = lt ? 16893 : 33204), (65535 & ft) << 16;
        }(F.unixPermissions, O)) : (K = 20, B |= function(H) {
          return 63 & (H || 0);
        }(F.dosPermissions)), E = N.getUTCHours(), E <<= 6, E |= N.getUTCMinutes(), E <<= 5, E |= N.getUTCSeconds() / 2, V = N.getUTCFullYear() - 1980, V <<= 4, V |= N.getUTCMonth() + 1, V <<= 5, V |= N.getUTCDate(), _ && (it = r(1, 1) + r(m(X), 4) + G, z += "up" + r(it.length, 2) + it), i && (x = r(1, 1) + r(m(rt), 4) + k, z += "uc" + r(x.length, 2) + x);
        var W = "";
        return W += `
\0`, W += r(S, 2), W += j.magic, W += r(E, 2), W += r(V, 2), W += r(L.crc32, 4), W += r(L.compressedSize, 4), W += r(L.uncompressedSize, 4), W += r(X.length, 2), W += r(z.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + W + X + z, dirRecord: g.CENTRAL_FILE_HEADER + r(K, 2) + W + r(rt.length, 2) + "\0\0\0\0" + r(B, 4) + r(f, 4) + X + z + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), g = e("../signature");
      function v(l, b, s, f) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = s, this.encodeFileName = f, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(v, o), v.prototype.push = function(l) {
        var b = l.meta.percent || 0, s = this.entriesCount, f = this._sources.length;
        this.accumulate ? this.contentBuffer.push(l) : (this.bytesWritten += l.data.length, o.prototype.push.call(this, { data: l.data, meta: { currentFile: this.currentFile, percent: s ? (b + 100 * (s - f - 1)) / s : 100 } }));
      }, v.prototype.openedSource = function(l) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = l.file.name;
        var b = this.streamFiles && !l.file.dir;
        if (b) {
          var s = a(l, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, v.prototype.closedSource = function(l) {
        this.accumulate = !1;
        var b = this.streamFiles && !l.file.dir, s = a(l, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(s.dirRecord), b)
          this.push({ data: function(f) {
            return g.DATA_DESCRIPTOR + r(f.crc32, 4) + r(f.compressedSize, 4) + r(f.uncompressedSize, 4);
          }(l), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var l = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var s = this.bytesWritten - l, f = function(A, w, E, V, F) {
          var j = n.transformTo("string", F(V));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(A, 2) + r(A, 2) + r(w, 4) + r(E, 4) + r(j.length, 2) + j;
        }(this.dirRecords.length, s, l, this.zipComment, this.encodeFileName);
        this.push({ data: f, meta: { percent: 100 } });
      }, v.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, v.prototype.registerPrevious = function(l) {
        this._sources.push(l);
        var b = this;
        return l.on("data", function(s) {
          b.processChunk(s);
        }), l.on("end", function() {
          b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
        }), l.on("error", function(s) {
          b.error(s);
        }), this;
      }, v.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, v.prototype.error = function(l) {
        var b = this._sources;
        if (!o.prototype.error.call(this, l))
          return !1;
        for (var s = 0; s < b.length; s++)
          try {
            b[s].error(l);
          } catch {
          }
        return !0;
      }, v.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var l = this._sources, b = 0; b < l.length; b++)
          l[b].lock();
      }, h.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, h, c) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), g = 0;
        try {
          n.forEach(function(v, l) {
            g++;
            var b = function(w, E) {
              var V = w || E, F = r[V];
              if (!F)
                throw new Error(V + " is not a valid compression method !");
              return F;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, f = l.dir, A = l.date;
            l._compressWorker(b, s).withStreamInfo("file", { name: v, dir: f, date: A, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = g;
        } catch (v) {
          m.error(v);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, h, c) {
      function r() {
        if (!(this instanceof r))
          return new r();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var a = new r();
          for (var n in this)
            typeof this[n] != "function" && (a[n] = this[n]);
          return a;
        };
      }
      (r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.1", r.loadAsync = function(a, n) {
        return new r().loadAsync(a, n);
      }, r.external = e("./external"), h.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, h, c) {
      var r = e("./utils"), a = e("./external"), n = e("./utf8"), o = e("./zipEntries"), p = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
      function g(v) {
        return new a.Promise(function(l, b) {
          var s = v.decompressed.getContentWorker().pipe(new p());
          s.on("error", function(f) {
            b(f);
          }).on("end", function() {
            s.streamInfo.crc32 !== v.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : l();
          }).resume();
        });
      }
      h.exports = function(v, l) {
        var b = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(v) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", v, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var f = new o(l);
          return f.load(s), f;
        }).then(function(s) {
          var f = [a.Promise.resolve(s)], A = s.files;
          if (l.checkCRC32)
            for (var w = 0; w < A.length; w++)
              f.push(g(A[w]));
          return a.Promise.all(f);
        }).then(function(s) {
          for (var f = s.shift(), A = f.files, w = 0; w < A.length; w++) {
            var E = A[w], V = E.fileNameStr, F = r.resolve(E.fileNameStr);
            b.file(F, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: l.createFolders }), E.dir || (b.file(F).unsafeOriginalName = V);
          }
          return f.zipComment.length && (b.comment = f.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, h, c) {
      var r = e("../utils"), a = e("../stream/GenericWorker");
      function n(o, p) {
        a.call(this, "Nodejs stream input adapter for " + o), this._upstreamEnded = !1, this._bindStream(p);
      }
      r.inherits(n, a), n.prototype._bindStream = function(o) {
        var p = this;
        (this._stream = o).pause(), o.on("data", function(m) {
          p.push({ data: m, meta: { percent: 0 } });
        }).on("error", function(m) {
          p.isPaused ? this.generatedError = m : p.error(m);
        }).on("end", function() {
          p.isPaused ? p._upstreamEnded = !0 : p.end();
        });
      }, n.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, h.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, h, c) {
      var r = e("readable-stream").Readable;
      function a(n, o, p) {
        r.call(this, o), this._helper = n;
        var m = this;
        n.on("data", function(g, v) {
          m.push(g) || m._helper.pause(), p && p(v);
        }).on("error", function(g) {
          m.emit("error", g);
        }).on("end", function() {
          m.push(null);
        });
      }
      e("../utils").inherits(a, r), a.prototype._read = function() {
        this._helper.resume();
      }, h.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, h, c) {
      h.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, a) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(r, a);
        if (typeof r == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(r, a);
      }, allocBuffer: function(r) {
        if (Buffer.alloc)
          return Buffer.alloc(r);
        var a = new Buffer(r);
        return a.fill(0), a;
      }, isBuffer: function(r) {
        return Buffer.isBuffer(r);
      }, isStream: function(r) {
        return r && typeof r.on == "function" && typeof r.pause == "function" && typeof r.resume == "function";
      } };
    }, {}], 15: [function(e, h, c) {
      function r(F, j, D) {
        var X, G = n.getTypeOf(j), J = n.extend(D || {}, m);
        J.date = J.date || /* @__PURE__ */ new Date(), J.compression !== null && (J.compression = J.compression.toUpperCase()), typeof J.unixPermissions == "string" && (J.unixPermissions = parseInt(J.unixPermissions, 8)), J.unixPermissions && 16384 & J.unixPermissions && (J.dir = !0), J.dosPermissions && 16 & J.dosPermissions && (J.dir = !0), J.dir && (F = A(F)), J.createFolders && (X = f(F)) && w.call(this, X, !0);
        var rt = G === "string" && J.binary === !1 && J.base64 === !1;
        D && D.binary !== void 0 || (J.binary = !rt), (j instanceof g && j.uncompressedSize === 0 || J.dir || !j || j.length === 0) && (J.base64 = !1, J.binary = !0, j = "", J.compression = "STORE", G = "string");
        var k = null;
        k = j instanceof g || j instanceof o ? j : b.isNode && b.isStream(j) ? new s(F, j) : n.prepareContent(F, j, J.binary, J.optimizedBinaryString, J.base64);
        var _ = new v(F, k, J);
        this.files[F] = _;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), g = e("./compressedObject"), v = e("./zipObject"), l = e("./generate"), b = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), f = function(F) {
        F.slice(-1) === "/" && (F = F.substring(0, F.length - 1));
        var j = F.lastIndexOf("/");
        return 0 < j ? F.substring(0, j) : "";
      }, A = function(F) {
        return F.slice(-1) !== "/" && (F += "/"), F;
      }, w = function(F, j) {
        return j = j !== void 0 ? j : m.createFolders, F = A(F), this.files[F] || r.call(this, F, null, { dir: !0, createFolders: j }), this.files[F];
      };
      function E(F) {
        return Object.prototype.toString.call(F) === "[object RegExp]";
      }
      var V = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(F) {
        var j, D, X;
        for (j in this.files)
          X = this.files[j], (D = j.slice(this.root.length, j.length)) && j.slice(0, this.root.length) === this.root && F(D, X);
      }, filter: function(F) {
        var j = [];
        return this.forEach(function(D, X) {
          F(D, X) && j.push(X);
        }), j;
      }, file: function(F, j, D) {
        if (arguments.length !== 1)
          return F = this.root + F, r.call(this, F, j, D), this;
        if (E(F)) {
          var X = F;
          return this.filter(function(J, rt) {
            return !rt.dir && X.test(J);
          });
        }
        var G = this.files[this.root + F];
        return G && !G.dir ? G : null;
      }, folder: function(F) {
        if (!F)
          return this;
        if (E(F))
          return this.filter(function(G, J) {
            return J.dir && F.test(G);
          });
        var j = this.root + F, D = w.call(this, j), X = this.clone();
        return X.root = D.name, X;
      }, remove: function(F) {
        F = this.root + F;
        var j = this.files[F];
        if (j || (F.slice(-1) !== "/" && (F += "/"), j = this.files[F]), j && !j.dir)
          delete this.files[F];
        else
          for (var D = this.filter(function(G, J) {
            return J.name.slice(0, F.length) === F;
          }), X = 0; X < D.length; X++)
            delete this.files[D[X].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(F) {
        var j, D = {};
        try {
          if ((D = n.extend(F || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = D.type.toLowerCase(), D.compression = D.compression.toUpperCase(), D.type === "binarystring" && (D.type = "string"), !D.type)
            throw new Error("No output type specified.");
          n.checkSupport(D.type), D.platform !== "darwin" && D.platform !== "freebsd" && D.platform !== "linux" && D.platform !== "sunos" || (D.platform = "UNIX"), D.platform === "win32" && (D.platform = "DOS");
          var X = D.comment || this.comment || "";
          j = l.generateWorker(this, D, X);
        } catch (G) {
          (j = new o("error")).error(G);
        }
        return new p(j, D.type || "string", D.mimeType);
      }, generateAsync: function(F, j) {
        return this.generateInternalStream(F).accumulate(j);
      }, generateNodeStream: function(F, j) {
        return (F = F || {}).type || (F.type = "nodebuffer"), this.generateInternalStream(F).toNodejsStream(j);
      } };
      h.exports = V;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, h, c) {
      h.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, h, c) {
      var r = e("./DataReader");
      function a(n) {
        r.call(this, n);
        for (var o = 0; o < this.data.length; o++)
          n[o] = 255 & n[o];
      }
      e("../utils").inherits(a, r), a.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, a.prototype.lastIndexOfSignature = function(n) {
        for (var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), g = n.charCodeAt(3), v = this.length - 4; 0 <= v; --v)
          if (this.data[v] === o && this.data[v + 1] === p && this.data[v + 2] === m && this.data[v + 3] === g)
            return v - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), g = n.charCodeAt(3), v = this.readData(4);
        return o === v[0] && p === v[1] && m === v[2] && g === v[3];
      }, a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, h, c) {
      var r = e("../utils");
      function a(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      a.prototype = { checkOffset: function(n) {
        this.checkIndex(this.index + n);
      }, checkIndex: function(n) {
        if (this.length < this.zero + n || n < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + n + "). Corrupted zip ?");
      }, setIndex: function(n) {
        this.checkIndex(n), this.index = n;
      }, skip: function(n) {
        this.setIndex(this.index + n);
      }, byteAt: function() {
      }, readInt: function(n) {
        var o, p = 0;
        for (this.checkOffset(n), o = this.index + n - 1; o >= this.index; o--)
          p = (p << 8) + this.byteAt(o);
        return this.index += n, p;
      }, readString: function(n) {
        return r.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, h.exports = a;
    }, { "../utils": 32 }], 19: [function(e, h, c) {
      var r = e("./Uint8ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, h, c) {
      var r = e("./DataReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, a.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, a.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, h, c) {
      var r = e("./ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, h.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, h, c) {
      var r = e("../utils"), a = e("../support"), n = e("./ArrayReader"), o = e("./StringReader"), p = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      h.exports = function(g) {
        var v = r.getTypeOf(g);
        return r.checkSupport(v), v !== "string" || a.uint8array ? v === "nodebuffer" ? new p(g) : a.uint8array ? new m(r.transformTo("uint8array", g)) : new n(r.transformTo("array", g)) : new o(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, h, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, h, c) {
      var r = e("./GenericWorker"), a = e("../utils");
      function n(o) {
        r.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(n, r), n.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, h.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, h, c) {
      var r = e("./GenericWorker"), a = e("../crc32");
      function n() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(n, r), n.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, h.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, h, c) {
      var r = e("../utils"), a = e("./GenericWorker");
      function n(o) {
        a.call(this, "DataLengthProbe for " + o), this.propName = o, this.withStreamInfo(o, 0);
      }
      r.inherits(n, a), n.prototype.processChunk = function(o) {
        if (o) {
          var p = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = p + o.data.length;
        }
        a.prototype.processChunk.call(this, o);
      }, h.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, h, c) {
      var r = e("../utils"), a = e("./GenericWorker");
      function n(o) {
        a.call(this, "DataWorker");
        var p = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, o.then(function(m) {
          p.dataIsReady = !0, p.data = m, p.max = m && m.length || 0, p.type = r.getTypeOf(m), p.isPaused || p._tickAndRepeat();
        }, function(m) {
          p.error(m);
        });
      }
      r.inherits(n, a), n.prototype.cleanUp = function() {
        a.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var o = null, p = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            o = this.data.substring(this.index, p);
            break;
          case "uint8array":
            o = this.data.subarray(this.index, p);
            break;
          case "array":
          case "nodebuffer":
            o = this.data.slice(this.index, p);
        }
        return this.index = p, this.push({ data: o, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, h.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, h, c) {
      function r(a) {
        this.name = a || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      r.prototype = { push: function(a) {
        this.emit("data", a);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (a) {
          this.emit("error", a);
        }
        return !0;
      }, error: function(a) {
        return !this.isFinished && (this.isPaused ? this.generatedError = a : (this.isFinished = !0, this.emit("error", a), this.previous && this.previous.error(a), this.cleanUp()), !0);
      }, on: function(a, n) {
        return this._listeners[a].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(a, n) {
        if (this._listeners[a])
          for (var o = 0; o < this._listeners[a].length; o++)
            this._listeners[a][o].call(this, n);
      }, pipe: function(a) {
        return a.registerPrevious(this);
      }, registerPrevious: function(a) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = a.streamInfo, this.mergeStreamInfo(), this.previous = a;
        var n = this;
        return a.on("data", function(o) {
          n.processChunk(o);
        }), a.on("end", function() {
          n.end();
        }), a.on("error", function(o) {
          n.error(o);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var a = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), a = !0), this.previous && this.previous.resume(), !a;
      }, flush: function() {
      }, processChunk: function(a) {
        this.push(a);
      }, withStreamInfo: function(a, n) {
        return this.extraStreamInfo[a] = n, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var a in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, a) && (this.streamInfo[a] = this.extraStreamInfo[a]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var a = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + a : a;
      } }, h.exports = r;
    }, {}], 29: [function(e, h, c) {
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), g = null;
      if (p.nodestream)
        try {
          g = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(b, s) {
        return new m.Promise(function(f, A) {
          var w = [], E = b._internalType, V = b._outputType, F = b._mimeType;
          b.on("data", function(j, D) {
            w.push(j), s && s(D);
          }).on("error", function(j) {
            w = [], A(j);
          }).on("end", function() {
            try {
              var j = function(D, X, G) {
                switch (D) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", X), G);
                  case "base64":
                    return o.encode(X);
                  default:
                    return r.transformTo(D, X);
                }
              }(V, function(D, X) {
                var G, J = 0, rt = null, k = 0;
                for (G = 0; G < X.length; G++)
                  k += X[G].length;
                switch (D) {
                  case "string":
                    return X.join("");
                  case "array":
                    return Array.prototype.concat.apply([], X);
                  case "uint8array":
                    for (rt = new Uint8Array(k), G = 0; G < X.length; G++)
                      rt.set(X[G], J), J += X[G].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(X);
                  default:
                    throw new Error("concat : unsupported type '" + D + "'");
                }
              }(E, w), F);
              f(j);
            } catch (D) {
              A(D);
            }
            w = [];
          }).resume();
        });
      }
      function l(b, s, f) {
        var A = s;
        switch (s) {
          case "blob":
          case "arraybuffer":
            A = "uint8array";
            break;
          case "base64":
            A = "string";
        }
        try {
          this._internalType = A, this._outputType = s, this._mimeType = f, r.checkSupport(A), this._worker = b.pipe(new a(A)), b.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      l.prototype = { accumulate: function(b) {
        return v(this, b);
      }, on: function(b, s) {
        var f = this;
        return b === "data" ? this._worker.on(b, function(A) {
          s.call(f, A.data, A.meta);
        }) : this._worker.on(b, function() {
          r.delay(s, arguments, f);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(b) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new g(this, { objectMode: this._outputType !== "nodebuffer" }, b);
      } }, h.exports = l;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, h, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        c.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          c.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(r), c.blob = a.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!e("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, h, c) {
      for (var r = e("./utils"), a = e("./support"), n = e("./nodejsUtils"), o = e("./stream/GenericWorker"), p = new Array(256), m = 0; m < 256; m++)
        p[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      p[254] = p[254] = 1;
      function g() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(b) {
          var s, f, A, w, E, V = b.length, F = 0;
          for (w = 0; w < V; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < V && (64512 & (A = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (A - 56320), w++), F += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(F) : new Array(F), w = E = 0; E < F; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < V && (64512 & (A = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (A - 56320), w++), f < 128 ? s[E++] = f : (f < 2048 ? s[E++] = 192 | f >>> 6 : (f < 65536 ? s[E++] = 224 | f >>> 12 : (s[E++] = 240 | f >>> 18, s[E++] = 128 | f >>> 12 & 63), s[E++] = 128 | f >>> 6 & 63), s[E++] = 128 | 63 & f);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(b) {
          var s, f, A, w, E = b.length, V = new Array(2 * E);
          for (s = f = 0; s < E; )
            if ((A = b[s++]) < 128)
              V[f++] = A;
            else if (4 < (w = p[A]))
              V[f++] = 65533, s += w - 1;
            else {
              for (A &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < E; )
                A = A << 6 | 63 & b[s++], w--;
              1 < w ? V[f++] = 65533 : A < 65536 ? V[f++] = A : (A -= 65536, V[f++] = 55296 | A >> 10 & 1023, V[f++] = 56320 | 1023 & A);
            }
          return V.length !== f && (V.subarray ? V = V.subarray(0, f) : V.length = f), r.applyFromCharCode(V);
        }(l = r.transformTo(a.uint8array ? "uint8array" : "array", l));
      }, r.inherits(g, o), g.prototype.processChunk = function(l) {
        var b = r.transformTo(a.uint8array ? "uint8array" : "array", l.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = b;
            (b = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), b.set(s, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var f = function(w, E) {
          var V;
          for ((E = E || w.length) > w.length && (E = w.length), V = E - 1; 0 <= V && (192 & w[V]) == 128; )
            V--;
          return V < 0 || V === 0 ? E : V + p[w[V]] > E ? V : E;
        }(b), A = b;
        f !== b.length && (a.uint8array ? (A = b.subarray(0, f), this.leftOver = b.subarray(f, b.length)) : (A = b.slice(0, f), this.leftOver = b.slice(f, b.length))), this.push({ data: c.utf8decode(A), meta: l.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = g, r.inherits(v, o), v.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, h, c) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function p(s) {
        return s;
      }
      function m(s, f) {
        for (var A = 0; A < s.length; ++A)
          f[A] = 255 & s.charCodeAt(A);
        return f;
      }
      e("setimmediate"), c.newBlob = function(s, f) {
        c.checkSupport("blob");
        try {
          return new Blob([s], { type: f });
        } catch {
          try {
            var A = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return A.append(s), A.getBlob(f);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(s, f, A) {
        var w = [], E = 0, V = s.length;
        if (V <= A)
          return String.fromCharCode.apply(null, s);
        for (; E < V; )
          f === "array" || f === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(E, Math.min(E + A, V)))) : w.push(String.fromCharCode.apply(null, s.subarray(E, Math.min(E + A, V)))), E += A;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var f = "", A = 0; A < s.length; A++)
          f += String.fromCharCode(s[A]);
        return f;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return r.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return r.nodebuffer && String.fromCharCode.apply(null, n.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function v(s) {
        var f = 65536, A = c.getTypeOf(s), w = !0;
        if (A === "uint8array" ? w = g.applyCanBeUsed.uint8array : A === "nodebuffer" && (w = g.applyCanBeUsed.nodebuffer), w)
          for (; 1 < f; )
            try {
              return g.stringifyByChunk(s, A, f);
            } catch {
              f = Math.floor(f / 2);
            }
        return g.stringifyByChar(s);
      }
      function l(s, f) {
        for (var A = 0; A < s.length; A++)
          f[A] = s[A];
        return f;
      }
      c.applyFromCharCode = v;
      var b = {};
      b.string = { string: p, array: function(s) {
        return m(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return b.string.uint8array(s).buffer;
      }, uint8array: function(s) {
        return m(s, new Uint8Array(s.length));
      }, nodebuffer: function(s) {
        return m(s, n.allocBuffer(s.length));
      } }, b.array = { string: v, array: p, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, b.arraybuffer = { string: function(s) {
        return v(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, b.uint8array = { string: v, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, b.nodebuffer = { string: v, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return b.nodebuffer.uint8array(s).buffer;
      }, uint8array: function(s) {
        return l(s, new Uint8Array(s.length));
      }, nodebuffer: p }, c.transformTo = function(s, f) {
        if (f = f || "", !s)
          return f;
        c.checkSupport(s);
        var A = c.getTypeOf(f);
        return b[A][s](f);
      }, c.resolve = function(s) {
        for (var f = s.split("/"), A = [], w = 0; w < f.length; w++) {
          var E = f[w];
          E === "." || E === "" && w !== 0 && w !== f.length - 1 || (E === ".." ? A.pop() : A.push(E));
        }
        return A.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(s) {
        var f, A, w = "";
        for (A = 0; A < (s || "").length; A++)
          w += "\\x" + ((f = s.charCodeAt(A)) < 16 ? "0" : "") + f.toString(16).toUpperCase();
        return w;
      }, c.delay = function(s, f, A) {
        setImmediate(function() {
          s.apply(A || null, f || []);
        });
      }, c.inherits = function(s, f) {
        function A() {
        }
        A.prototype = f.prototype, s.prototype = new A();
      }, c.extend = function() {
        var s, f, A = {};
        for (s = 0; s < arguments.length; s++)
          for (f in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], f) && A[f] === void 0 && (A[f] = arguments[s][f]);
        return A;
      }, c.prepareContent = function(s, f, A, w, E) {
        return o.Promise.resolve(f).then(function(V) {
          return r.blob && (V instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(V)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(F, j) {
            var D = new FileReader();
            D.onload = function(X) {
              F(X.target.result);
            }, D.onerror = function(X) {
              j(X.target.error);
            }, D.readAsArrayBuffer(V);
          }) : V;
        }).then(function(V) {
          var F = c.getTypeOf(V);
          return F ? (F === "arraybuffer" ? V = c.transformTo("uint8array", V) : F === "string" && (E ? V = a.decode(V) : A && w !== !0 && (V = function(j) {
            return m(j, r.uint8array ? new Uint8Array(j.length) : new Array(j.length));
          }(V))), V) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./signature"), o = e("./zipEntry"), p = e("./support");
      function m(g) {
        this.files = [], this.loadOptions = g;
      }
      m.prototype = { checkSignature: function(g) {
        if (!this.reader.readAndCheckSignature(g)) {
          this.reader.index -= 4;
          var v = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(v) + ", expected " + a.pretty(g) + ")");
        }
      }, isSignature: function(g, v) {
        var l = this.reader.index;
        this.reader.setIndex(g);
        var b = this.reader.readString(4) === v;
        return this.reader.setIndex(l), b;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), v = p.uint8array ? "uint8array" : "array", l = a.transformTo(v, g);
        this.zipComment = this.loadOptions.decodeFileName(l);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, v, l, b = this.zip64EndOfCentralSize - 44; 0 < b; )
          g = this.reader.readInt(2), v = this.reader.readInt(4), l = this.reader.readData(v), this.zip64ExtensibleData[g] = { id: g, length: v, value: l };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var g, v;
        for (g = 0; g < this.files.length; g++)
          v = this.files[g], this.reader.setIndex(v.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), v.readLocalPart(this.reader), v.handleUTF8(), v.processAttributes();
      }, readCentralDir: function() {
        var g;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (g = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(g);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var g = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (g < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(g);
        var v = g;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (g = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(g), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var b = v - l;
        if (0 < b)
          this.isSignature(v, n.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = r(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), g = e("./support");
      function v(l, b) {
        this.options = l, this.loadOptions = b;
      }
      v.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(l) {
        var b, s;
        if (l.skip(22), this.fileNameLength = l.readInt(2), s = l.readInt(2), this.fileName = l.readData(this.fileNameLength), l.skip(s), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((b = function(f) {
          for (var A in m)
            if (Object.prototype.hasOwnProperty.call(m, A) && m[A].magic === f)
              return m[A];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, b, l.readData(this.compressedSize));
      }, readCentralPart: function(l) {
        this.versionMadeBy = l.readInt(2), l.skip(2), this.bitFlag = l.readInt(2), this.compressionMethod = l.readString(2), this.date = l.readDate(), this.crc32 = l.readInt(4), this.compressedSize = l.readInt(4), this.uncompressedSize = l.readInt(4);
        var b = l.readInt(2);
        if (this.extraFieldsLength = l.readInt(2), this.fileCommentLength = l.readInt(2), this.diskNumberStart = l.readInt(2), this.internalFileAttributes = l.readInt(2), this.externalFileAttributes = l.readInt(4), this.localHeaderOffset = l.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        l.skip(b), this.readExtraFields(l), this.parseZIP64ExtraField(l), this.fileComment = l.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var l = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), l == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), l == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var l = r(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = l.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = l.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = l.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = l.readInt(4));
        }
      }, readExtraFields: function(l) {
        var b, s, f, A = l.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); l.index + 4 < A; )
          b = l.readInt(2), s = l.readInt(2), f = l.readData(s), this.extraFields[b] = { id: b, length: s, value: f };
        l.setIndex(A);
      }, handleUTF8: function() {
        var l = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
        else {
          var b = this.findExtraFieldUnicodePath();
          if (b !== null)
            this.fileNameStr = b;
          else {
            var s = a.transformTo(l, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(s);
          }
          var f = this.findExtraFieldUnicodeComment();
          if (f !== null)
            this.fileCommentStr = f;
          else {
            var A = a.transformTo(l, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(A);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var l = this.extraFields[28789];
        if (l) {
          var b = r(l.value);
          return b.readInt(1) !== 1 || o(this.fileName) !== b.readInt(4) ? null : p.utf8decode(b.readData(l.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var l = this.extraFields[25461];
        if (l) {
          var b = r(l.value);
          return b.readInt(1) !== 1 || o(this.fileComment) !== b.readInt(4) ? null : p.utf8decode(b.readData(l.length - 5));
        }
        return null;
      } }, h.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, h, c) {
      function r(b, s, f) {
        this.name = b, this.dir = f.dir, this.date = f.date, this.comment = f.comment, this.unixPermissions = f.unixPermissions, this.dosPermissions = f.dosPermissions, this._data = s, this._dataBinary = f.binary, this.options = { compression: f.compression, compressionOptions: f.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(b) {
        var s = null, f = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var A = (f = b.toLowerCase()) === "string" || f === "text";
          f !== "binarystring" && f !== "text" || (f = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !A && (s = s.pipe(new o.Utf8EncodeWorker())), !w && A && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (E) {
          (s = new m("error")).error(E);
        }
        return new a(s, f, "");
      }, async: function(b, s) {
        return this.internalStream(b).accumulate(s);
      }, nodeStream: function(b, s) {
        return this.internalStream(b || "nodebuffer").toNodejsStream(s);
      }, _compressWorker: function(b, s) {
        if (this._data instanceof p && this._data.compression.magic === b.magic)
          return this._data.getCompressedWorker();
        var f = this._decompressWorker();
        return this._dataBinary || (f = f.pipe(new o.Utf8EncodeWorker())), p.createWorkerFrom(f, b, s);
      }, _decompressWorker: function() {
        return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof m ? this._data : new n(this._data);
      } };
      for (var g = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], v = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < g.length; l++)
        r.prototype[g[l]] = v;
      h.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, h, c) {
      (function(r) {
        var a, n, o = r.MutationObserver || r.WebKitMutationObserver;
        if (o) {
          var p = 0, m = new o(b), g = r.document.createTextNode("");
          m.observe(g, { characterData: !0 }), a = function() {
            g.data = p = ++p % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0)
          a = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
            var s = r.document.createElement("script");
            s.onreadystatechange = function() {
              b(), s.onreadystatechange = null, s.parentNode.removeChild(s), s = null;
            }, r.document.documentElement.appendChild(s);
          } : function() {
            setTimeout(b, 0);
          };
        else {
          var v = new r.MessageChannel();
          v.port1.onmessage = b, a = function() {
            v.port2.postMessage(0);
          };
        }
        var l = [];
        function b() {
          var s, f;
          n = !0;
          for (var A = l.length; A; ) {
            for (f = l, l = [], s = -1; ++s < A; )
              f[s]();
            A = l.length;
          }
          n = !1;
        }
        h.exports = function(s) {
          l.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Gt < "u" ? Gt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, h, c) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function g(A) {
        if (typeof A != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, A !== a && s(this, A);
      }
      function v(A, w, E) {
        this.promise = A, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function l(A, w, E) {
        r(function() {
          var V;
          try {
            V = w(E);
          } catch (F) {
            return n.reject(A, F);
          }
          V === A ? n.reject(A, new TypeError("Cannot resolve promise with itself")) : n.resolve(A, V);
        });
      }
      function b(A) {
        var w = A && A.then;
        if (A && (typeof A == "object" || typeof A == "function") && typeof w == "function")
          return function() {
            w.apply(A, arguments);
          };
      }
      function s(A, w) {
        var E = !1;
        function V(D) {
          E || (E = !0, n.reject(A, D));
        }
        function F(D) {
          E || (E = !0, n.resolve(A, D));
        }
        var j = f(function() {
          w(F, V);
        });
        j.status === "error" && V(j.value);
      }
      function f(A, w) {
        var E = {};
        try {
          E.value = A(w), E.status = "success";
        } catch (V) {
          E.status = "error", E.value = V;
        }
        return E;
      }
      (h.exports = g).prototype.finally = function(A) {
        if (typeof A != "function")
          return this;
        var w = this.constructor;
        return this.then(function(E) {
          return w.resolve(A()).then(function() {
            return E;
          });
        }, function(E) {
          return w.resolve(A()).then(function() {
            throw E;
          });
        });
      }, g.prototype.catch = function(A) {
        return this.then(null, A);
      }, g.prototype.then = function(A, w) {
        if (typeof A != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var E = new this.constructor(a);
        return this.state !== m ? l(E, this.state === p ? A : w, this.outcome) : this.queue.push(new v(E, A, w)), E;
      }, v.prototype.callFulfilled = function(A) {
        n.resolve(this.promise, A);
      }, v.prototype.otherCallFulfilled = function(A) {
        l(this.promise, this.onFulfilled, A);
      }, v.prototype.callRejected = function(A) {
        n.reject(this.promise, A);
      }, v.prototype.otherCallRejected = function(A) {
        l(this.promise, this.onRejected, A);
      }, n.resolve = function(A, w) {
        var E = f(b, w);
        if (E.status === "error")
          return n.reject(A, E.value);
        var V = E.value;
        if (V)
          s(A, V);
        else {
          A.state = p, A.outcome = w;
          for (var F = -1, j = A.queue.length; ++F < j; )
            A.queue[F].callFulfilled(w);
        }
        return A;
      }, n.reject = function(A, w) {
        A.state = o, A.outcome = w;
        for (var E = -1, V = A.queue.length; ++E < V; )
          A.queue[E].callRejected(w);
        return A;
      }, g.resolve = function(A) {
        return A instanceof this ? A : n.resolve(new this(a), A);
      }, g.reject = function(A) {
        var w = new this(a);
        return n.reject(w, A);
      }, g.all = function(A) {
        var w = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = A.length, V = !1;
        if (!E)
          return this.resolve([]);
        for (var F = new Array(E), j = 0, D = -1, X = new this(a); ++D < E; )
          G(A[D], D);
        return X;
        function G(J, rt) {
          w.resolve(J).then(function(k) {
            F[rt] = k, ++j !== E || V || (V = !0, n.resolve(X, F));
          }, function(k) {
            V || (V = !0, n.reject(X, k));
          });
        }
      }, g.race = function(A) {
        var w = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = A.length, V = !1;
        if (!E)
          return this.resolve([]);
        for (var F = -1, j = new this(a); ++F < E; )
          D = A[F], w.resolve(D).then(function(X) {
            V || (V = !0, n.resolve(j, X));
          }, function(X) {
            V || (V = !0, n.reject(j, X));
          });
        var D;
        return j;
      };
    }, { immediate: 36 }], 38: [function(e, h, c) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, c) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, g = 0, v = -1, l = 0, b = 8;
      function s(A) {
        if (!(this instanceof s))
          return new s(A);
        this.options = a.assign({ level: v, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, A || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var E = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (E !== g)
          throw new Error(o[E]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var V;
          if (V = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (E = r.deflateSetDictionary(this.strm, V)) !== g)
            throw new Error(o[E]);
          this._dict_set = !0;
        }
      }
      function f(A, w) {
        var E = new s(w);
        if (E.push(A, !0), E.err)
          throw E.msg || o[E.err];
        return E.result;
      }
      s.prototype.push = function(A, w) {
        var E, V, F = this.strm, j = this.options.chunkSize;
        if (this.ended)
          return !1;
        V = w === ~~w ? w : w === !0 ? 4 : 0, typeof A == "string" ? F.input = n.string2buf(A) : m.call(A) === "[object ArrayBuffer]" ? F.input = new Uint8Array(A) : F.input = A, F.next_in = 0, F.avail_in = F.input.length;
        do {
          if (F.avail_out === 0 && (F.output = new a.Buf8(j), F.next_out = 0, F.avail_out = j), (E = r.deflate(F, V)) !== 1 && E !== g)
            return this.onEnd(E), !(this.ended = !0);
          F.avail_out !== 0 && (F.avail_in !== 0 || V !== 4 && V !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(F.output, F.next_out))) : this.onData(a.shrinkBuf(F.output, F.next_out)));
        } while ((0 < F.avail_in || F.avail_out === 0) && E !== 1);
        return V === 4 ? (E = r.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === g) : V !== 2 || (this.onEnd(g), !(F.avail_out = 0));
      }, s.prototype.onData = function(A) {
        this.chunks.push(A);
      }, s.prototype.onEnd = function(A) {
        A === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = A, this.msg = this.strm.msg;
      }, c.Deflate = s, c.deflate = f, c.deflateRaw = function(A, w) {
        return (w = w || {}).raw = !0, f(A, w);
      }, c.gzip = function(A, w) {
        return (w = w || {}).gzip = !0, f(A, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, h, c) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), g = e("./zlib/gzheader"), v = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var f = this.options;
        f.raw && 0 <= f.windowBits && f.windowBits < 16 && (f.windowBits = -f.windowBits, f.windowBits === 0 && (f.windowBits = -15)), !(0 <= f.windowBits && f.windowBits < 16) || s && s.windowBits || (f.windowBits += 32), 15 < f.windowBits && f.windowBits < 48 && !(15 & f.windowBits) && (f.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var A = r.inflateInit2(this.strm, f.windowBits);
        if (A !== o.Z_OK)
          throw new Error(p[A]);
        this.header = new g(), r.inflateGetHeader(this.strm, this.header);
      }
      function b(s, f) {
        var A = new l(f);
        if (A.push(s, !0), A.err)
          throw A.msg || p[A.err];
        return A.result;
      }
      l.prototype.push = function(s, f) {
        var A, w, E, V, F, j, D = this.strm, X = this.options.chunkSize, G = this.options.dictionary, J = !1;
        if (this.ended)
          return !1;
        w = f === ~~f ? f : f === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? D.input = n.binstring2buf(s) : v.call(s) === "[object ArrayBuffer]" ? D.input = new Uint8Array(s) : D.input = s, D.next_in = 0, D.avail_in = D.input.length;
        do {
          if (D.avail_out === 0 && (D.output = new a.Buf8(X), D.next_out = 0, D.avail_out = X), (A = r.inflate(D, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && G && (j = typeof G == "string" ? n.string2buf(G) : v.call(G) === "[object ArrayBuffer]" ? new Uint8Array(G) : G, A = r.inflateSetDictionary(this.strm, j)), A === o.Z_BUF_ERROR && J === !0 && (A = o.Z_OK, J = !1), A !== o.Z_STREAM_END && A !== o.Z_OK)
            return this.onEnd(A), !(this.ended = !0);
          D.next_out && (D.avail_out !== 0 && A !== o.Z_STREAM_END && (D.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = n.utf8border(D.output, D.next_out), V = D.next_out - E, F = n.buf2string(D.output, E), D.next_out = V, D.avail_out = X - V, V && a.arraySet(D.output, D.output, E, V, 0), this.onData(F)) : this.onData(a.shrinkBuf(D.output, D.next_out)))), D.avail_in === 0 && D.avail_out === 0 && (J = !0);
        } while ((0 < D.avail_in || D.avail_out === 0) && A !== o.Z_STREAM_END);
        return A === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (A = r.inflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(D.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, c.Inflate = l, c.inflate = b, c.inflateRaw = function(s, f) {
        return (f = f || {}).raw = !0, b(s, f);
      }, c.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, h, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
          var m = p.shift();
          if (m) {
            if (typeof m != "object")
              throw new TypeError(m + "must be non-object");
            for (var g in m)
              m.hasOwnProperty(g) && (o[g] = m[g]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, p) {
        return o.length === p ? o : o.subarray ? o.subarray(0, p) : (o.length = p, o);
      };
      var a = { arraySet: function(o, p, m, g, v) {
        if (p.subarray && o.subarray)
          o.set(p.subarray(m, m + g), v);
        else
          for (var l = 0; l < g; l++)
            o[v + l] = p[m + l];
      }, flattenChunks: function(o) {
        var p, m, g, v, l, b;
        for (p = g = 0, m = o.length; p < m; p++)
          g += o[p].length;
        for (b = new Uint8Array(g), p = v = 0, m = o.length; p < m; p++)
          l = o[p], b.set(l, v), v += l.length;
        return b;
      } }, n = { arraySet: function(o, p, m, g, v) {
        for (var l = 0; l < g; l++)
          o[v + l] = p[m + l];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      c.setTyped = function(o) {
        o ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, n));
      }, c.setTyped(r);
    }, {}], 42: [function(e, h, c) {
      var r = e("./common"), a = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        a = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var o = new r.Buf8(256), p = 0; p < 256; p++)
        o[p] = 252 <= p ? 6 : 248 <= p ? 5 : 240 <= p ? 4 : 224 <= p ? 3 : 192 <= p ? 2 : 1;
      function m(g, v) {
        if (v < 65537 && (g.subarray && n || !g.subarray && a))
          return String.fromCharCode.apply(null, r.shrinkBuf(g, v));
        for (var l = "", b = 0; b < v; b++)
          l += String.fromCharCode(g[b]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(g) {
        var v, l, b, s, f, A = g.length, w = 0;
        for (s = 0; s < A; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < A && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), w += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (v = new r.Buf8(w), s = f = 0; f < w; s++)
          (64512 & (l = g.charCodeAt(s))) == 55296 && s + 1 < A && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (b - 56320), s++), l < 128 ? v[f++] = l : (l < 2048 ? v[f++] = 192 | l >>> 6 : (l < 65536 ? v[f++] = 224 | l >>> 12 : (v[f++] = 240 | l >>> 18, v[f++] = 128 | l >>> 12 & 63), v[f++] = 128 | l >>> 6 & 63), v[f++] = 128 | 63 & l);
        return v;
      }, c.buf2binstring = function(g) {
        return m(g, g.length);
      }, c.binstring2buf = function(g) {
        for (var v = new r.Buf8(g.length), l = 0, b = v.length; l < b; l++)
          v[l] = g.charCodeAt(l);
        return v;
      }, c.buf2string = function(g, v) {
        var l, b, s, f, A = v || g.length, w = new Array(2 * A);
        for (l = b = 0; l < A; )
          if ((s = g[l++]) < 128)
            w[b++] = s;
          else if (4 < (f = o[s]))
            w[b++] = 65533, l += f - 1;
          else {
            for (s &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && l < A; )
              s = s << 6 | 63 & g[l++], f--;
            1 < f ? w[b++] = 65533 : s < 65536 ? w[b++] = s : (s -= 65536, w[b++] = 55296 | s >> 10 & 1023, w[b++] = 56320 | 1023 & s);
          }
        return m(w, b);
      }, c.utf8border = function(g, v) {
        var l;
        for ((v = v || g.length) > g.length && (v = g.length), l = v - 1; 0 <= l && (192 & g[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? v : l + o[g[l]] > v ? l : v;
      };
    }, { "./common": 41 }], 43: [function(e, h, c) {
      h.exports = function(r, a, n, o) {
        for (var p = 65535 & r | 0, m = r >>> 16 & 65535 | 0, g = 0; n !== 0; ) {
          for (n -= g = 2e3 < n ? 2e3 : n; m = m + (p = p + a[o++] | 0) | 0, --g; )
            ;
          p %= 65521, m %= 65521;
        }
        return p | m << 16 | 0;
      };
    }, {}], 44: [function(e, h, c) {
      h.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, h, c) {
      var r = function() {
        for (var a, n = [], o = 0; o < 256; o++) {
          a = o;
          for (var p = 0; p < 8; p++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          n[o] = a;
        }
        return n;
      }();
      h.exports = function(a, n, o, p) {
        var m = r, g = p + o;
        a ^= -1;
        for (var v = p; v < g; v++)
          a = a >>> 8 ^ m[255 & (a ^ n[v])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, h, c) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), g = 0, v = 4, l = 0, b = -2, s = -1, f = 4, A = 2, w = 8, E = 9, V = 286, F = 30, j = 19, D = 2 * V + 1, X = 15, G = 3, J = 258, rt = J + G + 1, k = 42, _ = 113, i = 1, z = 2, it = 3, x = 4;
      function O(t, M) {
        return t.msg = m[M], M;
      }
      function N(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function L(t) {
        for (var M = t.length; 0 <= --M; )
          t[M] = 0;
      }
      function S(t) {
        var M = t.state, T = M.pending;
        T > t.avail_out && (T = t.avail_out), T !== 0 && (a.arraySet(t.output, M.pending_buf, M.pending_out, T, t.next_out), t.next_out += T, M.pending_out += T, t.total_out += T, t.avail_out -= T, M.pending -= T, M.pending === 0 && (M.pending_out = 0));
      }
      function B(t, M) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, M), t.block_start = t.strstart, S(t.strm);
      }
      function K(t, M) {
        t.pending_buf[t.pending++] = M;
      }
      function W(t, M) {
        t.pending_buf[t.pending++] = M >>> 8 & 255, t.pending_buf[t.pending++] = 255 & M;
      }
      function H(t, M) {
        var T, y, d = t.max_chain_length, I = t.strstart, Q = t.prev_length, U = t.nice_match, R = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, Z = t.window, $ = t.w_mask, Y = t.prev, nt = t.strstart + J, dt = Z[I + Q - 1], ct = Z[I + Q];
        t.prev_length >= t.good_match && (d >>= 2), U > t.lookahead && (U = t.lookahead);
        do
          if (Z[(T = M) + Q] === ct && Z[T + Q - 1] === dt && Z[T] === Z[I] && Z[++T] === Z[I + 1]) {
            I += 2, T++;
            do
              ;
            while (Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && I < nt);
            if (y = J - (nt - I), I = nt - J, Q < y) {
              if (t.match_start = M, U <= (Q = y))
                break;
              dt = Z[I + Q - 1], ct = Z[I + Q];
            }
          }
        while ((M = Y[M & $]) > R && --d != 0);
        return Q <= t.lookahead ? Q : t.lookahead;
      }
      function lt(t) {
        var M, T, y, d, I, Q, U, R, Z, $, Y = t.w_size;
        do {
          if (d = t.window_size - t.lookahead - t.strstart, t.strstart >= Y + (Y - rt)) {
            for (a.arraySet(t.window, t.window, Y, Y, 0), t.match_start -= Y, t.strstart -= Y, t.block_start -= Y, M = T = t.hash_size; y = t.head[--M], t.head[M] = Y <= y ? y - Y : 0, --T; )
              ;
            for (M = T = Y; y = t.prev[--M], t.prev[M] = Y <= y ? y - Y : 0, --T; )
              ;
            d += Y;
          }
          if (t.strm.avail_in === 0)
            break;
          if (Q = t.strm, U = t.window, R = t.strstart + t.lookahead, Z = d, $ = void 0, $ = Q.avail_in, Z < $ && ($ = Z), T = $ === 0 ? 0 : (Q.avail_in -= $, a.arraySet(U, Q.input, Q.next_in, $, R), Q.state.wrap === 1 ? Q.adler = o(Q.adler, U, $, R) : Q.state.wrap === 2 && (Q.adler = p(Q.adler, U, $, R)), Q.next_in += $, Q.total_in += $, $), t.lookahead += T, t.lookahead + t.insert >= G)
            for (I = t.strstart - t.insert, t.ins_h = t.window[I], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + G - 1]) & t.hash_mask, t.prev[I & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = I, I++, t.insert--, !(t.lookahead + t.insert < G)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function ft(t, M) {
        for (var T, y; ; ) {
          if (t.lookahead < rt) {
            if (lt(t), t.lookahead < rt && M === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= G && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + G - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), T !== 0 && t.strstart - T <= t.w_size - rt && (t.match_length = H(t, T)), t.match_length >= G)
            if (y = n._tr_tally(t, t.strstart - t.match_start, t.match_length - G), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= G) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + G - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            y = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (y && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < G - 1 ? t.strstart : G - 1, M === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : z;
      }
      function at(t, M) {
        for (var T, y, d; ; ) {
          if (t.lookahead < rt) {
            if (lt(t), t.lookahead < rt && M === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= G && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + G - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = G - 1, T !== 0 && t.prev_length < t.max_lazy_match && t.strstart - T <= t.w_size - rt && (t.match_length = H(t, T), t.match_length <= 5 && (t.strategy === 1 || t.match_length === G && 4096 < t.strstart - t.match_start) && (t.match_length = G - 1)), t.prev_length >= G && t.match_length <= t.prev_length) {
            for (d = t.strstart + t.lookahead - G, y = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - G), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= d && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + G - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = G - 1, t.strstart++, y && (B(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((y = n._tr_tally(t, 0, t.window[t.strstart - 1])) && B(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (y = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < G - 1 ? t.strstart : G - 1, M === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : z;
      }
      function st(t, M, T, y, d) {
        this.good_length = t, this.max_lazy = M, this.nice_length = T, this.max_chain = y, this.func = d;
      }
      function bt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * D), this.dyn_dtree = new a.Buf16(2 * (2 * F + 1)), this.bl_tree = new a.Buf16(2 * (2 * j + 1)), L(this.dyn_ltree), L(this.dyn_dtree), L(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(X + 1), this.heap = new a.Buf16(2 * V + 1), L(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * V + 1), L(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ht(t) {
        var M;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = A, (M = t.state).pending = 0, M.pending_out = 0, M.wrap < 0 && (M.wrap = -M.wrap), M.status = M.wrap ? k : _, t.adler = M.wrap === 2 ? 0 : 1, M.last_flush = g, n._tr_init(M), l) : O(t, b);
      }
      function At(t) {
        var M = ht(t);
        return M === l && function(T) {
          T.window_size = 2 * T.w_size, L(T.head), T.max_lazy_match = r[T.level].max_lazy, T.good_match = r[T.level].good_length, T.nice_match = r[T.level].nice_length, T.max_chain_length = r[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = G - 1, T.match_available = 0, T.ins_h = 0;
        }(t.state), M;
      }
      function yt(t, M, T, y, d, I) {
        if (!t)
          return b;
        var Q = 1;
        if (M === s && (M = 6), y < 0 ? (Q = 0, y = -y) : 15 < y && (Q = 2, y -= 16), d < 1 || E < d || T !== w || y < 8 || 15 < y || M < 0 || 9 < M || I < 0 || f < I)
          return O(t, b);
        y === 8 && (y = 9);
        var U = new bt();
        return (t.state = U).strm = t, U.wrap = Q, U.gzhead = null, U.w_bits = y, U.w_size = 1 << U.w_bits, U.w_mask = U.w_size - 1, U.hash_bits = d + 7, U.hash_size = 1 << U.hash_bits, U.hash_mask = U.hash_size - 1, U.hash_shift = ~~((U.hash_bits + G - 1) / G), U.window = new a.Buf8(2 * U.w_size), U.head = new a.Buf16(U.hash_size), U.prev = new a.Buf16(U.w_size), U.lit_bufsize = 1 << d + 6, U.pending_buf_size = 4 * U.lit_bufsize, U.pending_buf = new a.Buf8(U.pending_buf_size), U.d_buf = 1 * U.lit_bufsize, U.l_buf = 3 * U.lit_bufsize, U.level = M, U.strategy = I, U.method = T, At(t);
      }
      r = [new st(0, 0, 0, 0, function(t, M) {
        var T = 65535;
        for (T > t.pending_buf_size - 5 && (T = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (lt(t), t.lookahead === 0 && M === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var y = t.block_start + T;
          if ((t.strstart === 0 || t.strstart >= y) && (t.lookahead = t.strstart - y, t.strstart = y, B(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, M === v ? (B(t, !0), t.strm.avail_out === 0 ? it : x) : (t.strstart > t.block_start && (B(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, ft), new st(4, 5, 16, 8, ft), new st(4, 6, 32, 32, ft), new st(4, 4, 16, 16, at), new st(8, 16, 32, 32, at), new st(8, 16, 128, 128, at), new st(8, 32, 128, 256, at), new st(32, 128, 258, 1024, at), new st(32, 258, 258, 4096, at)], c.deflateInit = function(t, M) {
        return yt(t, M, w, 15, 8, 0);
      }, c.deflateInit2 = yt, c.deflateReset = At, c.deflateResetKeep = ht, c.deflateSetHeader = function(t, M) {
        return t && t.state ? t.state.wrap !== 2 ? b : (t.state.gzhead = M, l) : b;
      }, c.deflate = function(t, M) {
        var T, y, d, I;
        if (!t || !t.state || 5 < M || M < 0)
          return t ? O(t, b) : b;
        if (y = t.state, !t.output || !t.input && t.avail_in !== 0 || y.status === 666 && M !== v)
          return O(t, t.avail_out === 0 ? -5 : b);
        if (y.strm = t, T = y.last_flush, y.last_flush = M, y.status === k)
          if (y.wrap === 2)
            t.adler = 0, K(y, 31), K(y, 139), K(y, 8), y.gzhead ? (K(y, (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)), K(y, 255 & y.gzhead.time), K(y, y.gzhead.time >> 8 & 255), K(y, y.gzhead.time >> 16 & 255), K(y, y.gzhead.time >> 24 & 255), K(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), K(y, 255 & y.gzhead.os), y.gzhead.extra && y.gzhead.extra.length && (K(y, 255 & y.gzhead.extra.length), K(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (t.adler = p(t.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = 69) : (K(y, 0), K(y, 0), K(y, 0), K(y, 0), K(y, 0), K(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), K(y, 3), y.status = _);
          else {
            var Q = w + (y.w_bits - 8 << 4) << 8;
            Q |= (2 <= y.strategy || y.level < 2 ? 0 : y.level < 6 ? 1 : y.level === 6 ? 2 : 3) << 6, y.strstart !== 0 && (Q |= 32), Q += 31 - Q % 31, y.status = _, W(y, Q), y.strstart !== 0 && (W(y, t.adler >>> 16), W(y, 65535 & t.adler)), t.adler = 1;
          }
        if (y.status === 69)
          if (y.gzhead.extra) {
            for (d = y.pending; y.gzindex < (65535 & y.gzhead.extra.length) && (y.pending !== y.pending_buf_size || (y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), S(t), d = y.pending, y.pending !== y.pending_buf_size)); )
              K(y, 255 & y.gzhead.extra[y.gzindex]), y.gzindex++;
            y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), y.gzindex === y.gzhead.extra.length && (y.gzindex = 0, y.status = 73);
          } else
            y.status = 73;
        if (y.status === 73)
          if (y.gzhead.name) {
            d = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), S(t), d = y.pending, y.pending === y.pending_buf_size)) {
                I = 1;
                break;
              }
              I = y.gzindex < y.gzhead.name.length ? 255 & y.gzhead.name.charCodeAt(y.gzindex++) : 0, K(y, I);
            } while (I !== 0);
            y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), I === 0 && (y.gzindex = 0, y.status = 91);
          } else
            y.status = 91;
        if (y.status === 91)
          if (y.gzhead.comment) {
            d = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), S(t), d = y.pending, y.pending === y.pending_buf_size)) {
                I = 1;
                break;
              }
              I = y.gzindex < y.gzhead.comment.length ? 255 & y.gzhead.comment.charCodeAt(y.gzindex++) : 0, K(y, I);
            } while (I !== 0);
            y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), I === 0 && (y.status = 103);
          } else
            y.status = 103;
        if (y.status === 103 && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && S(t), y.pending + 2 <= y.pending_buf_size && (K(y, 255 & t.adler), K(y, t.adler >> 8 & 255), t.adler = 0, y.status = _)) : y.status = _), y.pending !== 0) {
          if (S(t), t.avail_out === 0)
            return y.last_flush = -1, l;
        } else if (t.avail_in === 0 && N(M) <= N(T) && M !== v)
          return O(t, -5);
        if (y.status === 666 && t.avail_in !== 0)
          return O(t, -5);
        if (t.avail_in !== 0 || y.lookahead !== 0 || M !== g && y.status !== 666) {
          var U = y.strategy === 2 ? function(R, Z) {
            for (var $; ; ) {
              if (R.lookahead === 0 && (lt(R), R.lookahead === 0)) {
                if (Z === g)
                  return i;
                break;
              }
              if (R.match_length = 0, $ = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, $ && (B(R, !1), R.strm.avail_out === 0))
                return i;
            }
            return R.insert = 0, Z === v ? (B(R, !0), R.strm.avail_out === 0 ? it : x) : R.last_lit && (B(R, !1), R.strm.avail_out === 0) ? i : z;
          }(y, M) : y.strategy === 3 ? function(R, Z) {
            for (var $, Y, nt, dt, ct = R.window; ; ) {
              if (R.lookahead <= J) {
                if (lt(R), R.lookahead <= J && Z === g)
                  return i;
                if (R.lookahead === 0)
                  break;
              }
              if (R.match_length = 0, R.lookahead >= G && 0 < R.strstart && (Y = ct[nt = R.strstart - 1]) === ct[++nt] && Y === ct[++nt] && Y === ct[++nt]) {
                dt = R.strstart + J;
                do
                  ;
                while (Y === ct[++nt] && Y === ct[++nt] && Y === ct[++nt] && Y === ct[++nt] && Y === ct[++nt] && Y === ct[++nt] && Y === ct[++nt] && Y === ct[++nt] && nt < dt);
                R.match_length = J - (dt - nt), R.match_length > R.lookahead && (R.match_length = R.lookahead);
              }
              if (R.match_length >= G ? ($ = n._tr_tally(R, 1, R.match_length - G), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : ($ = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), $ && (B(R, !1), R.strm.avail_out === 0))
                return i;
            }
            return R.insert = 0, Z === v ? (B(R, !0), R.strm.avail_out === 0 ? it : x) : R.last_lit && (B(R, !1), R.strm.avail_out === 0) ? i : z;
          }(y, M) : r[y.level].func(y, M);
          if (U !== it && U !== x || (y.status = 666), U === i || U === it)
            return t.avail_out === 0 && (y.last_flush = -1), l;
          if (U === z && (M === 1 ? n._tr_align(y) : M !== 5 && (n._tr_stored_block(y, 0, 0, !1), M === 3 && (L(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), S(t), t.avail_out === 0))
            return y.last_flush = -1, l;
        }
        return M !== v ? l : y.wrap <= 0 ? 1 : (y.wrap === 2 ? (K(y, 255 & t.adler), K(y, t.adler >> 8 & 255), K(y, t.adler >> 16 & 255), K(y, t.adler >> 24 & 255), K(y, 255 & t.total_in), K(y, t.total_in >> 8 & 255), K(y, t.total_in >> 16 & 255), K(y, t.total_in >> 24 & 255)) : (W(y, t.adler >>> 16), W(y, 65535 & t.adler)), S(t), 0 < y.wrap && (y.wrap = -y.wrap), y.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var M;
        return t && t.state ? (M = t.state.status) !== k && M !== 69 && M !== 73 && M !== 91 && M !== 103 && M !== _ && M !== 666 ? O(t, b) : (t.state = null, M === _ ? O(t, -3) : l) : b;
      }, c.deflateSetDictionary = function(t, M) {
        var T, y, d, I, Q, U, R, Z, $ = M.length;
        if (!t || !t.state || (I = (T = t.state).wrap) === 2 || I === 1 && T.status !== k || T.lookahead)
          return b;
        for (I === 1 && (t.adler = o(t.adler, M, $, 0)), T.wrap = 0, $ >= T.w_size && (I === 0 && (L(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), Z = new a.Buf8(T.w_size), a.arraySet(Z, M, $ - T.w_size, T.w_size, 0), M = Z, $ = T.w_size), Q = t.avail_in, U = t.next_in, R = t.input, t.avail_in = $, t.next_in = 0, t.input = M, lt(T); T.lookahead >= G; ) {
          for (y = T.strstart, d = T.lookahead - (G - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[y + G - 1]) & T.hash_mask, T.prev[y & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = y, y++, --d; )
            ;
          T.strstart = y, T.lookahead = G - 1, lt(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = G - 1, T.match_available = 0, t.next_in = U, t.input = R, t.avail_in = Q, T.wrap = I, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(r, a) {
        var n, o, p, m, g, v, l, b, s, f, A, w, E, V, F, j, D, X, G, J, rt, k, _, i, z;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, z = r.output, g = m - (a - r.avail_out), v = m + (r.avail_out - 257), l = n.dmax, b = n.wsize, s = n.whave, f = n.wnext, A = n.window, w = n.hold, E = n.bits, V = n.lencode, F = n.distcode, j = (1 << n.lenbits) - 1, D = (1 << n.distbits) - 1;
        t:
          do {
            E < 15 && (w += i[o++] << E, E += 8, w += i[o++] << E, E += 8), X = V[w & j];
            e:
              for (; ; ) {
                if (w >>>= G = X >>> 24, E -= G, (G = X >>> 16 & 255) === 0)
                  z[m++] = 65535 & X;
                else {
                  if (!(16 & G)) {
                    if (!(64 & G)) {
                      X = V[(65535 & X) + (w & (1 << G) - 1)];
                      continue e;
                    }
                    if (32 & G) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  J = 65535 & X, (G &= 15) && (E < G && (w += i[o++] << E, E += 8), J += w & (1 << G) - 1, w >>>= G, E -= G), E < 15 && (w += i[o++] << E, E += 8, w += i[o++] << E, E += 8), X = F[w & D];
                  n:
                    for (; ; ) {
                      if (w >>>= G = X >>> 24, E -= G, !(16 & (G = X >>> 16 & 255))) {
                        if (!(64 & G)) {
                          X = F[(65535 & X) + (w & (1 << G) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & X, E < (G &= 15) && (w += i[o++] << E, (E += 8) < G && (w += i[o++] << E, E += 8)), l < (rt += w & (1 << G) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= G, E -= G, (G = m - g) < rt) {
                        if (s < (G = rt - G) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (_ = A, (k = 0) === f) {
                          if (k += b - G, G < J) {
                            for (J -= G; z[m++] = A[k++], --G; )
                              ;
                            k = m - rt, _ = z;
                          }
                        } else if (f < G) {
                          if (k += b + f - G, (G -= f) < J) {
                            for (J -= G; z[m++] = A[k++], --G; )
                              ;
                            if (k = 0, f < J) {
                              for (J -= G = f; z[m++] = A[k++], --G; )
                                ;
                              k = m - rt, _ = z;
                            }
                          }
                        } else if (k += f - G, G < J) {
                          for (J -= G; z[m++] = A[k++], --G; )
                            ;
                          k = m - rt, _ = z;
                        }
                        for (; 2 < J; )
                          z[m++] = _[k++], z[m++] = _[k++], z[m++] = _[k++], J -= 3;
                        J && (z[m++] = _[k++], 1 < J && (z[m++] = _[k++]));
                      } else {
                        for (k = m - rt; z[m++] = z[k++], z[m++] = z[k++], z[m++] = z[k++], 2 < (J -= 3); )
                          ;
                        J && (z[m++] = z[k++], 1 < J && (z[m++] = z[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < v);
        o -= J = E >> 3, w &= (1 << (E -= J << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < v ? v - m + 257 : 257 - (m - v), n.hold = w, n.bits = E;
      };
    }, {}], 49: [function(e, h, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, g = 2, v = 0, l = -2, b = 1, s = 852, f = 592;
      function A(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(k) {
        var _;
        return k && k.state ? (_ = k.state, k.total_in = k.total_out = _.total = 0, k.msg = "", _.wrap && (k.adler = 1 & _.wrap), _.mode = b, _.last = 0, _.havedict = 0, _.dmax = 32768, _.head = null, _.hold = 0, _.bits = 0, _.lencode = _.lendyn = new r.Buf32(s), _.distcode = _.distdyn = new r.Buf32(f), _.sane = 1, _.back = -1, v) : l;
      }
      function V(k) {
        var _;
        return k && k.state ? ((_ = k.state).wsize = 0, _.whave = 0, _.wnext = 0, E(k)) : l;
      }
      function F(k, _) {
        var i, z;
        return k && k.state ? (z = k.state, _ < 0 ? (i = 0, _ = -_) : (i = 1 + (_ >> 4), _ < 48 && (_ &= 15)), _ && (_ < 8 || 15 < _) ? l : (z.window !== null && z.wbits !== _ && (z.window = null), z.wrap = i, z.wbits = _, V(k))) : l;
      }
      function j(k, _) {
        var i, z;
        return k ? (z = new w(), (k.state = z).window = null, (i = F(k, _)) !== v && (k.state = null), i) : l;
      }
      var D, X, G = !0;
      function J(k) {
        if (G) {
          var _;
          for (D = new r.Buf32(512), X = new r.Buf32(32), _ = 0; _ < 144; )
            k.lens[_++] = 8;
          for (; _ < 256; )
            k.lens[_++] = 9;
          for (; _ < 280; )
            k.lens[_++] = 7;
          for (; _ < 288; )
            k.lens[_++] = 8;
          for (p(m, k.lens, 0, 288, D, 0, k.work, { bits: 9 }), _ = 0; _ < 32; )
            k.lens[_++] = 5;
          p(g, k.lens, 0, 32, X, 0, k.work, { bits: 5 }), G = !1;
        }
        k.lencode = D, k.lenbits = 9, k.distcode = X, k.distbits = 5;
      }
      function rt(k, _, i, z) {
        var it, x = k.state;
        return x.window === null && (x.wsize = 1 << x.wbits, x.wnext = 0, x.whave = 0, x.window = new r.Buf8(x.wsize)), z >= x.wsize ? (r.arraySet(x.window, _, i - x.wsize, x.wsize, 0), x.wnext = 0, x.whave = x.wsize) : (z < (it = x.wsize - x.wnext) && (it = z), r.arraySet(x.window, _, i - z, it, x.wnext), (z -= it) ? (r.arraySet(x.window, _, i - z, z, 0), x.wnext = z, x.whave = x.wsize) : (x.wnext += it, x.wnext === x.wsize && (x.wnext = 0), x.whave < x.wsize && (x.whave += it))), 0;
      }
      c.inflateReset = V, c.inflateReset2 = F, c.inflateResetKeep = E, c.inflateInit = function(k) {
        return j(k, 15);
      }, c.inflateInit2 = j, c.inflate = function(k, _) {
        var i, z, it, x, O, N, L, S, B, K, W, H, lt, ft, at, st, bt, ht, At, yt, t, M, T, y, d = 0, I = new r.Buf8(4), Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), O = k.next_out, it = k.output, L = k.avail_out, x = k.next_in, z = k.input, N = k.avail_in, S = i.hold, B = i.bits, K = N, W = L, M = v;
        t:
          for (; ; )
            switch (i.mode) {
              case b:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; B < 16; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                if (2 & i.wrap && S === 35615) {
                  I[i.check = 0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0), B = S = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & S) << 8) + (S >> 8)) % 31) {
                  k.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & S) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (B -= 4, t = 8 + (15 & (S >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  k.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, k.adler = i.check = 1, i.mode = 512 & S ? 10 : 12, B = S = 0;
                break;
              case 2:
                for (; B < 16; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                if (i.flags = S, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = S >> 8 & 1), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0, i.mode = 3;
              case 3:
                for (; B < 32; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                i.head && (i.head.time = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, I[2] = S >>> 16 & 255, I[3] = S >>> 24 & 255, i.check = n(i.check, I, 4, 0)), B = S = 0, i.mode = 4;
              case 4:
                for (; B < 16; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                i.head && (i.head.xflags = 255 & S, i.head.os = S >> 8), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; B < 16; ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  i.length = S, i.head && (i.head.extra_len = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (N < (H = i.length) && (H = N), H && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, z, x, H, t)), 512 & i.flags && (i.check = n(i.check, z, H, x)), N -= H, x += H, i.length -= H), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (N === 0)
                    break t;
                  for (H = 0; t = z[x + H++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && H < N; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, z, H, x)), N -= H, x += H, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (N === 0)
                    break t;
                  for (H = 0; t = z[x + H++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && H < N; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, z, H, x)), N -= H, x += H, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; B < 16; ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  if (S !== (65535 & i.check)) {
                    k.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), k.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; B < 32; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                k.adler = i.check = A(S), B = S = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = O, k.avail_out = L, k.next_in = x, k.avail_in = N, i.hold = S, i.bits = B, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (_ === 5 || _ === 6)
                  break t;
              case 13:
                if (i.last) {
                  S >>>= 7 & B, B -= 7 & B, i.mode = 27;
                  break;
                }
                for (; B < 3; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                switch (i.last = 1 & S, B -= 1, 3 & (S >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (J(i), i.mode = 20, _ !== 6)
                      break;
                    S >>>= 2, B -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", i.mode = 30;
                }
                S >>>= 2, B -= 2;
                break;
              case 14:
                for (S >>>= 7 & B, B -= 7 & B; B < 32; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                if ((65535 & S) != (S >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & S, B = S = 0, i.mode = 15, _ === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (H = i.length) {
                  if (N < H && (H = N), L < H && (H = L), H === 0)
                    break t;
                  r.arraySet(it, z, x, H, O), N -= H, x += H, L -= H, O += H, i.length -= H;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; B < 14; ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                if (i.nlen = 257 + (31 & S), S >>>= 5, B -= 5, i.ndist = 1 + (31 & S), S >>>= 5, B -= 5, i.ncode = 4 + (15 & S), S >>>= 4, B -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; B < 3; ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  i.lens[Q[i.have++]] = 7 & S, S >>>= 3, B -= 3;
                }
                for (; i.have < 19; )
                  i.lens[Q[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, T = { bits: i.lenbits }, M = p(0, i.lens, 0, 19, i.lencode, 0, i.work, T), i.lenbits = T.bits, M) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (d = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, bt = 65535 & d, !((at = d >>> 24) <= B); ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  if (bt < 16)
                    S >>>= at, B -= at, i.lens[i.have++] = bt;
                  else {
                    if (bt === 16) {
                      for (y = at + 2; B < y; ) {
                        if (N === 0)
                          break t;
                        N--, S += z[x++] << B, B += 8;
                      }
                      if (S >>>= at, B -= at, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], H = 3 + (3 & S), S >>>= 2, B -= 2;
                    } else if (bt === 17) {
                      for (y = at + 3; B < y; ) {
                        if (N === 0)
                          break t;
                        N--, S += z[x++] << B, B += 8;
                      }
                      B -= at, t = 0, H = 3 + (7 & (S >>>= at)), S >>>= 3, B -= 3;
                    } else {
                      for (y = at + 7; B < y; ) {
                        if (N === 0)
                          break t;
                        N--, S += z[x++] << B, B += 8;
                      }
                      B -= at, t = 0, H = 11 + (127 & (S >>>= at)), S >>>= 7, B -= 7;
                    }
                    if (i.have + H > i.nlen + i.ndist) {
                      k.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; H--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, T = { bits: i.lenbits }, M = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, T), i.lenbits = T.bits, M) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, T = { bits: i.distbits }, M = p(g, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, T), i.distbits = T.bits, M) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, _ === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= N && 258 <= L) {
                  k.next_out = O, k.avail_out = L, k.next_in = x, k.avail_in = N, i.hold = S, i.bits = B, o(k, W), O = k.next_out, it = k.output, L = k.avail_out, x = k.next_in, z = k.input, N = k.avail_in, S = i.hold, B = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (d = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, bt = 65535 & d, !((at = d >>> 24) <= B); ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                if (st && !(240 & st)) {
                  for (ht = at, At = st, yt = bt; st = (d = i.lencode[yt + ((S & (1 << ht + At) - 1) >> ht)]) >>> 16 & 255, bt = 65535 & d, !(ht + (at = d >>> 24) <= B); ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  S >>>= ht, B -= ht, i.back += ht;
                }
                if (S >>>= at, B -= at, i.back += at, i.length = bt, st === 0) {
                  i.mode = 26;
                  break;
                }
                if (32 & st) {
                  i.back = -1, i.mode = 12;
                  break;
                }
                if (64 & st) {
                  k.msg = "invalid literal/length code", i.mode = 30;
                  break;
                }
                i.extra = 15 & st, i.mode = 22;
              case 22:
                if (i.extra) {
                  for (y = i.extra; B < y; ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  i.length += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (d = i.distcode[S & (1 << i.distbits) - 1]) >>> 16 & 255, bt = 65535 & d, !((at = d >>> 24) <= B); ) {
                  if (N === 0)
                    break t;
                  N--, S += z[x++] << B, B += 8;
                }
                if (!(240 & st)) {
                  for (ht = at, At = st, yt = bt; st = (d = i.distcode[yt + ((S & (1 << ht + At) - 1) >> ht)]) >>> 16 & 255, bt = 65535 & d, !(ht + (at = d >>> 24) <= B); ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  S >>>= ht, B -= ht, i.back += ht;
                }
                if (S >>>= at, B -= at, i.back += at, 64 & st) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = bt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (y = i.extra; B < y; ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  i.offset += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (L === 0)
                  break t;
                if (H = W - L, i.offset > H) {
                  if ((H = i.offset - H) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  lt = H > i.wnext ? (H -= i.wnext, i.wsize - H) : i.wnext - H, H > i.length && (H = i.length), ft = i.window;
                } else
                  ft = it, lt = O - i.offset, H = i.length;
                for (L < H && (H = L), L -= H, i.length -= H; it[O++] = ft[lt++], --H; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (L === 0)
                  break t;
                it[O++] = i.length, L--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; B < 32; ) {
                    if (N === 0)
                      break t;
                    N--, S |= z[x++] << B, B += 8;
                  }
                  if (W -= L, k.total_out += W, i.total += W, W && (k.adler = i.check = i.flags ? n(i.check, it, W, O - W) : a(i.check, it, W, O - W)), W = L, (i.flags ? S : A(S)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; B < 32; ) {
                    if (N === 0)
                      break t;
                    N--, S += z[x++] << B, B += 8;
                  }
                  if (S !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 29;
              case 29:
                M = 1;
                break t;
              case 30:
                M = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = O, k.avail_out = L, k.next_in = x, k.avail_in = N, i.hold = S, i.bits = B, (i.wsize || W !== k.avail_out && i.mode < 30 && (i.mode < 27 || _ !== 4)) && rt(k, k.output, k.next_out, W - k.avail_out) ? (i.mode = 31, -4) : (K -= k.avail_in, W -= k.avail_out, k.total_in += K, k.total_out += W, i.total += W, i.wrap && W && (k.adler = i.check = i.flags ? n(i.check, it, W, k.next_out - W) : a(i.check, it, W, k.next_out - W)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && W === 0 || _ === 4) && M === v && (M = -5), M);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var _ = k.state;
        return _.window && (_.window = null), k.state = null, v;
      }, c.inflateGetHeader = function(k, _) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = _).done = !1, v) : l;
      }, c.inflateSetDictionary = function(k, _) {
        var i, z = _.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, _, z, 0) !== i.check ? -3 : rt(k, _, z, z) ? (i.mode = 31, -4) : (i.havedict = 1, v) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, g, v, l, b, s, f, A) {
        var w, E, V, F, j, D, X, G, J, rt = A.bits, k = 0, _ = 0, i = 0, z = 0, it = 0, x = 0, O = 0, N = 0, L = 0, S = 0, B = null, K = 0, W = new r.Buf16(16), H = new r.Buf16(16), lt = null, ft = 0;
        for (k = 0; k <= 15; k++)
          W[k] = 0;
        for (_ = 0; _ < l; _++)
          W[g[v + _]]++;
        for (it = rt, z = 15; 1 <= z && W[z] === 0; z--)
          ;
        if (z < it && (it = z), z === 0)
          return b[s++] = 20971520, b[s++] = 20971520, A.bits = 1, 0;
        for (i = 1; i < z && W[i] === 0; i++)
          ;
        for (it < i && (it = i), k = N = 1; k <= 15; k++)
          if (N <<= 1, (N -= W[k]) < 0)
            return -1;
        if (0 < N && (m === 0 || z !== 1))
          return -1;
        for (H[1] = 0, k = 1; k < 15; k++)
          H[k + 1] = H[k] + W[k];
        for (_ = 0; _ < l; _++)
          g[v + _] !== 0 && (f[H[g[v + _]]++] = _);
        if (D = m === 0 ? (B = lt = f, 19) : m === 1 ? (B = a, K -= 257, lt = n, ft -= 257, 256) : (B = o, lt = p, -1), k = i, j = s, O = _ = S = 0, V = -1, F = (L = 1 << (x = it)) - 1, m === 1 && 852 < L || m === 2 && 592 < L)
          return 1;
        for (; ; ) {
          for (X = k - O, J = f[_] < D ? (G = 0, f[_]) : f[_] > D ? (G = lt[ft + f[_]], B[K + f[_]]) : (G = 96, 0), w = 1 << k - O, i = E = 1 << x; b[j + (S >> O) + (E -= w)] = X << 24 | G << 16 | J | 0, E !== 0; )
            ;
          for (w = 1 << k - 1; S & w; )
            w >>= 1;
          if (w !== 0 ? (S &= w - 1, S += w) : S = 0, _++, --W[k] == 0) {
            if (k === z)
              break;
            k = g[v + f[_]];
          }
          if (it < k && (S & F) !== V) {
            for (O === 0 && (O = it), j += i, N = 1 << (x = k - O); x + O < z && !((N -= W[x + O]) <= 0); )
              x++, N <<= 1;
            if (L += 1 << x, m === 1 && 852 < L || m === 2 && 592 < L)
              return 1;
            b[V = S & F] = it << 24 | x << 16 | j - s | 0;
          }
        }
        return S !== 0 && (b[j + S] = k - O << 24 | 64 << 16 | 0), A.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(d) {
        for (var I = d.length; 0 <= --I; )
          d[I] = 0;
      }
      var p = 0, m = 29, g = 256, v = g + 1 + m, l = 30, b = 19, s = 2 * v + 1, f = 15, A = 16, w = 7, E = 256, V = 16, F = 17, j = 18, D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], X = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], G = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], J = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (v + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var _ = new Array(512);
      o(_);
      var i = new Array(256);
      o(i);
      var z = new Array(m);
      o(z);
      var it, x, O, N = new Array(l);
      function L(d, I, Q, U, R) {
        this.static_tree = d, this.extra_bits = I, this.extra_base = Q, this.elems = U, this.max_length = R, this.has_stree = d && d.length;
      }
      function S(d, I) {
        this.dyn_tree = d, this.max_code = 0, this.stat_desc = I;
      }
      function B(d) {
        return d < 256 ? _[d] : _[256 + (d >>> 7)];
      }
      function K(d, I) {
        d.pending_buf[d.pending++] = 255 & I, d.pending_buf[d.pending++] = I >>> 8 & 255;
      }
      function W(d, I, Q) {
        d.bi_valid > A - Q ? (d.bi_buf |= I << d.bi_valid & 65535, K(d, d.bi_buf), d.bi_buf = I >> A - d.bi_valid, d.bi_valid += Q - A) : (d.bi_buf |= I << d.bi_valid & 65535, d.bi_valid += Q);
      }
      function H(d, I, Q) {
        W(d, Q[2 * I], Q[2 * I + 1]);
      }
      function lt(d, I) {
        for (var Q = 0; Q |= 1 & d, d >>>= 1, Q <<= 1, 0 < --I; )
          ;
        return Q >>> 1;
      }
      function ft(d, I, Q) {
        var U, R, Z = new Array(f + 1), $ = 0;
        for (U = 1; U <= f; U++)
          Z[U] = $ = $ + Q[U - 1] << 1;
        for (R = 0; R <= I; R++) {
          var Y = d[2 * R + 1];
          Y !== 0 && (d[2 * R] = lt(Z[Y]++, Y));
        }
      }
      function at(d) {
        var I;
        for (I = 0; I < v; I++)
          d.dyn_ltree[2 * I] = 0;
        for (I = 0; I < l; I++)
          d.dyn_dtree[2 * I] = 0;
        for (I = 0; I < b; I++)
          d.bl_tree[2 * I] = 0;
        d.dyn_ltree[2 * E] = 1, d.opt_len = d.static_len = 0, d.last_lit = d.matches = 0;
      }
      function st(d) {
        8 < d.bi_valid ? K(d, d.bi_buf) : 0 < d.bi_valid && (d.pending_buf[d.pending++] = d.bi_buf), d.bi_buf = 0, d.bi_valid = 0;
      }
      function bt(d, I, Q, U) {
        var R = 2 * I, Z = 2 * Q;
        return d[R] < d[Z] || d[R] === d[Z] && U[I] <= U[Q];
      }
      function ht(d, I, Q) {
        for (var U = d.heap[Q], R = Q << 1; R <= d.heap_len && (R < d.heap_len && bt(I, d.heap[R + 1], d.heap[R], d.depth) && R++, !bt(I, U, d.heap[R], d.depth)); )
          d.heap[Q] = d.heap[R], Q = R, R <<= 1;
        d.heap[Q] = U;
      }
      function At(d, I, Q) {
        var U, R, Z, $, Y = 0;
        if (d.last_lit !== 0)
          for (; U = d.pending_buf[d.d_buf + 2 * Y] << 8 | d.pending_buf[d.d_buf + 2 * Y + 1], R = d.pending_buf[d.l_buf + Y], Y++, U === 0 ? H(d, R, I) : (H(d, (Z = i[R]) + g + 1, I), ($ = D[Z]) !== 0 && W(d, R -= z[Z], $), H(d, Z = B(--U), Q), ($ = X[Z]) !== 0 && W(d, U -= N[Z], $)), Y < d.last_lit; )
            ;
        H(d, E, I);
      }
      function yt(d, I) {
        var Q, U, R, Z = I.dyn_tree, $ = I.stat_desc.static_tree, Y = I.stat_desc.has_stree, nt = I.stat_desc.elems, dt = -1;
        for (d.heap_len = 0, d.heap_max = s, Q = 0; Q < nt; Q++)
          Z[2 * Q] !== 0 ? (d.heap[++d.heap_len] = dt = Q, d.depth[Q] = 0) : Z[2 * Q + 1] = 0;
        for (; d.heap_len < 2; )
          Z[2 * (R = d.heap[++d.heap_len] = dt < 2 ? ++dt : 0)] = 1, d.depth[R] = 0, d.opt_len--, Y && (d.static_len -= $[2 * R + 1]);
        for (I.max_code = dt, Q = d.heap_len >> 1; 1 <= Q; Q--)
          ht(d, Z, Q);
        for (R = nt; Q = d.heap[1], d.heap[1] = d.heap[d.heap_len--], ht(d, Z, 1), U = d.heap[1], d.heap[--d.heap_max] = Q, d.heap[--d.heap_max] = U, Z[2 * R] = Z[2 * Q] + Z[2 * U], d.depth[R] = (d.depth[Q] >= d.depth[U] ? d.depth[Q] : d.depth[U]) + 1, Z[2 * Q + 1] = Z[2 * U + 1] = R, d.heap[1] = R++, ht(d, Z, 1), 2 <= d.heap_len; )
          ;
        d.heap[--d.heap_max] = d.heap[1], function(ct, wt) {
          var Ct, mt, Vt, ut, Tt, St, vt = wt.dyn_tree, xt = wt.max_code, It = wt.stat_desc.static_tree, Pt = wt.stat_desc.has_stree, _t = wt.stat_desc.extra_bits, Mt = wt.stat_desc.extra_base, tt = wt.stat_desc.max_length, pt = 0;
          for (ut = 0; ut <= f; ut++)
            ct.bl_count[ut] = 0;
          for (vt[2 * ct.heap[ct.heap_max] + 1] = 0, Ct = ct.heap_max + 1; Ct < s; Ct++)
            tt < (ut = vt[2 * vt[2 * (mt = ct.heap[Ct]) + 1] + 1] + 1) && (ut = tt, pt++), vt[2 * mt + 1] = ut, xt < mt || (ct.bl_count[ut]++, Tt = 0, Mt <= mt && (Tt = _t[mt - Mt]), St = vt[2 * mt], ct.opt_len += St * (ut + Tt), Pt && (ct.static_len += St * (It[2 * mt + 1] + Tt)));
          if (pt !== 0) {
            do {
              for (ut = tt - 1; ct.bl_count[ut] === 0; )
                ut--;
              ct.bl_count[ut]--, ct.bl_count[ut + 1] += 2, ct.bl_count[tt]--, pt -= 2;
            } while (0 < pt);
            for (ut = tt; ut !== 0; ut--)
              for (mt = ct.bl_count[ut]; mt !== 0; )
                xt < (Vt = ct.heap[--Ct]) || (vt[2 * Vt + 1] !== ut && (ct.opt_len += (ut - vt[2 * Vt + 1]) * vt[2 * Vt], vt[2 * Vt + 1] = ut), mt--);
          }
        }(d, I), ft(Z, dt, d.bl_count);
      }
      function t(d, I, Q) {
        var U, R, Z = -1, $ = I[1], Y = 0, nt = 7, dt = 4;
        for ($ === 0 && (nt = 138, dt = 3), I[2 * (Q + 1) + 1] = 65535, U = 0; U <= Q; U++)
          R = $, $ = I[2 * (U + 1) + 1], ++Y < nt && R === $ || (Y < dt ? d.bl_tree[2 * R] += Y : R !== 0 ? (R !== Z && d.bl_tree[2 * R]++, d.bl_tree[2 * V]++) : Y <= 10 ? d.bl_tree[2 * F]++ : d.bl_tree[2 * j]++, Z = R, dt = (Y = 0) === $ ? (nt = 138, 3) : R === $ ? (nt = 6, 3) : (nt = 7, 4));
      }
      function M(d, I, Q) {
        var U, R, Z = -1, $ = I[1], Y = 0, nt = 7, dt = 4;
        for ($ === 0 && (nt = 138, dt = 3), U = 0; U <= Q; U++)
          if (R = $, $ = I[2 * (U + 1) + 1], !(++Y < nt && R === $)) {
            if (Y < dt)
              for (; H(d, R, d.bl_tree), --Y != 0; )
                ;
            else
              R !== 0 ? (R !== Z && (H(d, R, d.bl_tree), Y--), H(d, V, d.bl_tree), W(d, Y - 3, 2)) : Y <= 10 ? (H(d, F, d.bl_tree), W(d, Y - 3, 3)) : (H(d, j, d.bl_tree), W(d, Y - 11, 7));
            Z = R, dt = (Y = 0) === $ ? (nt = 138, 3) : R === $ ? (nt = 6, 3) : (nt = 7, 4);
          }
      }
      o(N);
      var T = !1;
      function y(d, I, Q, U) {
        W(d, (p << 1) + (U ? 1 : 0), 3), function(R, Z, $, Y) {
          st(R), Y && (K(R, $), K(R, ~$)), r.arraySet(R.pending_buf, R.window, Z, $, R.pending), R.pending += $;
        }(d, I, Q, !0);
      }
      c._tr_init = function(d) {
        T || (function() {
          var I, Q, U, R, Z, $ = new Array(f + 1);
          for (R = U = 0; R < m - 1; R++)
            for (z[R] = U, I = 0; I < 1 << D[R]; I++)
              i[U++] = R;
          for (i[U - 1] = R, R = Z = 0; R < 16; R++)
            for (N[R] = Z, I = 0; I < 1 << X[R]; I++)
              _[Z++] = R;
          for (Z >>= 7; R < l; R++)
            for (N[R] = Z << 7, I = 0; I < 1 << X[R] - 7; I++)
              _[256 + Z++] = R;
          for (Q = 0; Q <= f; Q++)
            $[Q] = 0;
          for (I = 0; I <= 143; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (; I <= 255; )
            rt[2 * I + 1] = 9, I++, $[9]++;
          for (; I <= 279; )
            rt[2 * I + 1] = 7, I++, $[7]++;
          for (; I <= 287; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (ft(rt, v + 1, $), I = 0; I < l; I++)
            k[2 * I + 1] = 5, k[2 * I] = lt(I, 5);
          it = new L(rt, D, g + 1, v, f), x = new L(k, X, 0, l, f), O = new L(new Array(0), G, 0, b, w);
        }(), T = !0), d.l_desc = new S(d.dyn_ltree, it), d.d_desc = new S(d.dyn_dtree, x), d.bl_desc = new S(d.bl_tree, O), d.bi_buf = 0, d.bi_valid = 0, at(d);
      }, c._tr_stored_block = y, c._tr_flush_block = function(d, I, Q, U) {
        var R, Z, $ = 0;
        0 < d.level ? (d.strm.data_type === 2 && (d.strm.data_type = function(Y) {
          var nt, dt = 4093624447;
          for (nt = 0; nt <= 31; nt++, dt >>>= 1)
            if (1 & dt && Y.dyn_ltree[2 * nt] !== 0)
              return a;
          if (Y.dyn_ltree[18] !== 0 || Y.dyn_ltree[20] !== 0 || Y.dyn_ltree[26] !== 0)
            return n;
          for (nt = 32; nt < g; nt++)
            if (Y.dyn_ltree[2 * nt] !== 0)
              return n;
          return a;
        }(d)), yt(d, d.l_desc), yt(d, d.d_desc), $ = function(Y) {
          var nt;
          for (t(Y, Y.dyn_ltree, Y.l_desc.max_code), t(Y, Y.dyn_dtree, Y.d_desc.max_code), yt(Y, Y.bl_desc), nt = b - 1; 3 <= nt && Y.bl_tree[2 * J[nt] + 1] === 0; nt--)
            ;
          return Y.opt_len += 3 * (nt + 1) + 5 + 5 + 4, nt;
        }(d), R = d.opt_len + 3 + 7 >>> 3, (Z = d.static_len + 3 + 7 >>> 3) <= R && (R = Z)) : R = Z = Q + 5, Q + 4 <= R && I !== -1 ? y(d, I, Q, U) : d.strategy === 4 || Z === R ? (W(d, 2 + (U ? 1 : 0), 3), At(d, rt, k)) : (W(d, 4 + (U ? 1 : 0), 3), function(Y, nt, dt, ct) {
          var wt;
          for (W(Y, nt - 257, 5), W(Y, dt - 1, 5), W(Y, ct - 4, 4), wt = 0; wt < ct; wt++)
            W(Y, Y.bl_tree[2 * J[wt] + 1], 3);
          M(Y, Y.dyn_ltree, nt - 1), M(Y, Y.dyn_dtree, dt - 1);
        }(d, d.l_desc.max_code + 1, d.d_desc.max_code + 1, $ + 1), At(d, d.dyn_ltree, d.dyn_dtree)), at(d), U && st(d);
      }, c._tr_tally = function(d, I, Q) {
        return d.pending_buf[d.d_buf + 2 * d.last_lit] = I >>> 8 & 255, d.pending_buf[d.d_buf + 2 * d.last_lit + 1] = 255 & I, d.pending_buf[d.l_buf + d.last_lit] = 255 & Q, d.last_lit++, I === 0 ? d.dyn_ltree[2 * Q]++ : (d.matches++, I--, d.dyn_ltree[2 * (i[Q] + g + 1)]++, d.dyn_dtree[2 * B(I)]++), d.last_lit === d.lit_bufsize - 1;
      }, c._tr_align = function(d) {
        W(d, 2, 3), H(d, E, rt), function(I) {
          I.bi_valid === 16 ? (K(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
        }(d);
      };
    }, { "../utils/common": 41 }], 53: [function(e, h, c) {
      h.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, h, c) {
      (function(r) {
        (function(a, n) {
          if (!a.setImmediate) {
            var o, p, m, g, v = 1, l = {}, b = !1, s = a.document, f = Object.getPrototypeOf && Object.getPrototypeOf(a);
            f = f && f.setTimeout ? f : a, o = {}.toString.call(a.process) === "[object process]" ? function(V) {
              process.nextTick(function() {
                w(V);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var V = !0, F = a.onmessage;
                return a.onmessage = function() {
                  V = !1;
                }, a.postMessage("", "*"), a.onmessage = F, V;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", E, !1) : a.attachEvent("onmessage", E), function(V) {
              a.postMessage(g + V, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(V) {
              w(V.data);
            }, function(V) {
              m.port2.postMessage(V);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(V) {
              var F = s.createElement("script");
              F.onreadystatechange = function() {
                w(V), F.onreadystatechange = null, p.removeChild(F), F = null;
              }, p.appendChild(F);
            }) : function(V) {
              setTimeout(w, 0, V);
            }, f.setImmediate = function(V) {
              typeof V != "function" && (V = new Function("" + V));
              for (var F = new Array(arguments.length - 1), j = 0; j < F.length; j++)
                F[j] = arguments[j + 1];
              var D = { callback: V, args: F };
              return l[v] = D, o(v), v++;
            }, f.clearImmediate = A;
          }
          function A(V) {
            delete l[V];
          }
          function w(V) {
            if (b)
              setTimeout(w, 0, V);
            else {
              var F = l[V];
              if (F) {
                b = !0;
                try {
                  (function(j) {
                    var D = j.callback, X = j.args;
                    switch (X.length) {
                      case 0:
                        D();
                        break;
                      case 1:
                        D(X[0]);
                        break;
                      case 2:
                        D(X[0], X[1]);
                        break;
                      case 3:
                        D(X[0], X[1], X[2]);
                        break;
                      default:
                        D.apply(n, X);
                    }
                  })(F);
                } finally {
                  A(V), b = !1;
                }
              }
            }
          }
          function E(V) {
            V.source === a && typeof V.data == "string" && V.data.indexOf(g) === 0 && w(+V.data.slice(g.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Gt < "u" ? Gt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Ce);
var $e = Ce.exports;
const tn = /* @__PURE__ */ Ee($e);
var Se = { exports: {} };
(function(C, u) {
  (function(e, h) {
    h();
  })(Gt, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function h(p, m, g) {
      var v = new XMLHttpRequest();
      v.open("GET", p), v.responseType = "blob", v.onload = function() {
        o(v.response, m, g);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function c(p) {
      var m = new XMLHttpRequest();
      m.open("HEAD", p, !1);
      try {
        m.send();
      } catch {
      }
      return 200 <= m.status && 299 >= m.status;
    }
    function r(p) {
      try {
        p.dispatchEvent(new MouseEvent("click"));
      } catch {
        var m = document.createEvent("MouseEvents");
        m.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), p.dispatchEvent(m);
      }
    }
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Gt == "object" && Gt.global === Gt ? Gt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, g) {
      var v = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? r(l) : c(l.href) ? h(p, m, g) : r(l, l.target = "_blank")) : (l.href = v.createObjectURL(p), setTimeout(function() {
        v.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, g) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, g), m);
      else if (c(p))
        h(p, m, g);
      else {
        var v = document.createElement("a");
        v.href = p, v.target = "_blank", setTimeout(function() {
          r(v);
        });
      }
    } : function(p, m, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof p == "string")
        return h(p, m, g);
      var l = p.type === "application/octet-stream", b = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && b || n) && typeof FileReader < "u") {
        var f = new FileReader();
        f.onloadend = function() {
          var E = f.result;
          E = s ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = E : location = E, v = null;
        }, f.readAsDataURL(p);
      } else {
        var A = a.URL || a.webkitURL, w = A.createObjectURL(p);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          A.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, C.exports = o;
  });
})(Se);
var en = Se.exports;
const nn = /* @__PURE__ */ Ee(en);
var Jt = { exports: {} };
(function(C, u) {
  (function(e, h) {
    h(u);
  })(Gt, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(x) {
        for (var O = 1; O < arguments.length; O++) {
          var N = arguments[O];
          for (var L in N)
            Object.prototype.hasOwnProperty.call(N, L) && (x[L] = N[L]);
        }
        return x;
      }, h.apply(this, arguments);
    }
    function c(x, O) {
      x.prototype = Object.create(O.prototype), x.prototype.constructor = x, a(x, O);
    }
    function r(x) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(O) {
        return O.__proto__ || Object.getPrototypeOf(O);
      }, r(x);
    }
    function a(x, O) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(N, L) {
        return N.__proto__ = L, N;
      }, a(x, O);
    }
    function n(x, O, N) {
      return n = function() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }() ? Reflect.construct.bind() : function(L, S, B) {
        var K = [null];
        K.push.apply(K, S);
        var W = new (Function.bind.apply(L, K))();
        return B && a(W, B.prototype), W;
      }, n.apply(null, arguments);
    }
    function o(x) {
      var O = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(N) {
        if (N === null || Function.toString.call(N).indexOf("[native code]") === -1)
          return N;
        if (typeof N != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (O !== void 0) {
          if (O.has(N))
            return O.get(N);
          O.set(N, L);
        }
        function L() {
          return n(N, arguments, r(this).constructor);
        }
        return L.prototype = Object.create(N.prototype, { constructor: { value: L, enumerable: !1, writable: !0, configurable: !0 } }), a(L, N);
      }, o(x);
    }
    var p = /* @__PURE__ */ function() {
      function x(N) {
        this.cache = void 0, this.cache = N;
      }
      var O = x.prototype;
      return O.define = function(N, L) {
        this.cache[N] = L;
      }, O.get = function(N) {
        return this.cache[N];
      }, O.remove = function(N) {
        delete this.cache[N];
      }, O.reset = function() {
        this.cache = {};
      }, O.load = function(N) {
        this.cache = h({}, this.cache, N);
      }, x;
    }(), m = /* @__PURE__ */ function(x) {
      function O(N) {
        var L;
        return (L = x.call(this, N) || this).name = "Eta Error", L;
      }
      return c(O, x), O;
    }(/* @__PURE__ */ o(Error));
    function g(x, O, N) {
      var L = O.slice(0, N).split(/\n/), S = L.length, B = L[S - 1].length + 1;
      throw x += " at line " + S + " col " + B + `:

  ` + O.split(/\n/)[S - 1] + `
  ` + Array(B).join(" ") + "^", new m(x);
    }
    function v(x, O, N, L) {
      var S = O.split(`
`), B = Math.max(N - 3, 0), K = Math.min(S.length, N + 3), W = L, H = S.slice(B, K).map(function(ft, at) {
        var st = at + B + 1;
        return (st == N ? " >> " : "    ") + st + "| " + ft;
      }).join(`
`), lt = new m((W ? W + ":" + N + `
` : "line " + N + `
`) + H + `

` + x.message);
      throw lt.name = x.name, lt;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function b(x, O) {
      var N = this.config, L = O && O.async ? l : Function;
      try {
        return new L(N.varName, "options", this.compileToString.call(this, x, O));
      } catch (S) {
        throw S instanceof SyntaxError ? new m(`Bad template syntax

` + S.message + `
` + Array(S.message.length + 1).join("=") + `
` + this.compileToString.call(this, x, O) + `
`) : S;
      }
    }
    function s(x, O) {
      var N = this.config, L = O && O.async, S = this.parse.call(this, x), B = N.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (N.debug ? ', line: 1, templateStr: "' + x.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (N.debug ? "try {" : "") + (N.useWith ? "with(" + N.varName + "||{}){" : "") + `

` + f.call(this, S) + `
if (__eta.layout) {
  __eta.res = ` + (L ? "await includeAsync" : "include") + " (__eta.layout, {..." + N.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (N.useWith ? "}" : "") + (N.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (N.plugins)
        for (var K = 0; K < N.plugins.length; K++) {
          var W = N.plugins[K];
          W.processFnString && (B = W.processFnString(B, N));
        }
      return B;
    }
    function f(x) {
      for (var O = this.config, N = 0, L = x.length, S = ""; N < L; N++) {
        var B = x[N];
        if (typeof B == "string")
          S += "__eta.res+='" + B + `'
`;
        else {
          var K = B.t, W = B.val || "";
          O.debug && (S += "__eta.line=" + B.lineNo + `
`), K === "r" ? (O.autoFilter && (W = "__eta.f(" + W + ")"), S += "__eta.res+=" + W + `
`) : K === "i" ? (O.autoFilter && (W = "__eta.f(" + W + ")"), O.autoEscape && (W = "__eta.e(" + W + ")"), S += "__eta.res+=" + W + `
`) : K === "e" && (S += W + `
`);
        }
      }
      return S;
    }
    var A = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(x) {
      return A[x];
    }
    var E = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(x) {
      var O = String(x);
      return /[&<>"']/.test(O) ? O.replace(/[&<>"']/g, w) : O;
    }, filterFunction: function(x) {
      return String(x);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, V = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, F = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, j = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function D(x) {
      return x.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function X(x, O) {
      return x.slice(0, O).split(`
`).length;
    }
    function G(x) {
      var O = this.config, N = [], L = !1, S = 0, B = O.parse;
      if (O.plugins)
        for (var K = 0; K < O.plugins.length; K++) {
          var W = O.plugins[K];
          W.processTemplate && (x = W.processTemplate(x, O));
        }
      function H(I, Q) {
        I && (I = function(U, R, Z, $) {
          var Y, nt;
          return Array.isArray(R.autoTrim) ? (Y = R.autoTrim[1], nt = R.autoTrim[0]) : Y = nt = R.autoTrim, (Z || Z === !1) && (Y = Z), ($ || $ === !1) && (nt = $), nt || Y ? Y === "slurp" && nt === "slurp" ? U.trim() : (Y === "_" || Y === "slurp" ? U = U.trimStart() : Y !== "-" && Y !== "nl" || (U = U.replace(/^(?:\r\n|\n|\r)/, "")), nt === "_" || nt === "slurp" ? U = U.trimEnd() : nt !== "-" && nt !== "nl" || (U = U.replace(/(?:\r\n|\n|\r)$/, "")), U) : U;
        }(I, O, L, Q), I && (I = I.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), N.push(I)));
      }
      O.rmWhitespace && (x = x.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), V.lastIndex = 0, F.lastIndex = 0, j.lastIndex = 0;
      for (var lt, ft = [B.exec, B.interpolate, B.raw].reduce(function(I, Q) {
        return I && Q ? I + "|" + D(Q) : Q ? D(Q) : I;
      }, ""), at = new RegExp(D(O.tags[0]) + "(-|_)?\\s*(" + ft + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + D(O.tags[1]) + ")", "g"); lt = at.exec(x); ) {
        var bt = x.slice(S, lt.index);
        S = lt[0].length + lt.index;
        var ht = lt[2] || "";
        H(bt, lt[1]), st.lastIndex = S;
        for (var At = void 0, yt = !1; At = st.exec(x); ) {
          if (At[1]) {
            var t = x.slice(S, At.index);
            at.lastIndex = S = st.lastIndex, L = At[2], yt = { t: ht === B.exec ? "e" : ht === B.raw ? "r" : ht === B.interpolate ? "i" : "", val: t };
            break;
          }
          var M = At[0];
          if (M === "/*") {
            var T = x.indexOf("*/", st.lastIndex);
            T === -1 && g("unclosed comment", x, At.index), st.lastIndex = T;
          } else
            M === "'" ? (F.lastIndex = At.index, F.exec(x) ? st.lastIndex = F.lastIndex : g("unclosed string", x, At.index)) : M === '"' ? (j.lastIndex = At.index, j.exec(x) ? st.lastIndex = j.lastIndex : g("unclosed string", x, At.index)) : M === "`" && (V.lastIndex = At.index, V.exec(x) ? st.lastIndex = V.lastIndex : g("unclosed string", x, At.index));
        }
        yt ? (O.debug && (yt.lineNo = X(x, lt.index)), N.push(yt)) : g("unclosed tag", x, lt.index);
      }
      if (H(x.slice(S, x.length), !1), O.plugins)
        for (var y = 0; y < O.plugins.length; y++) {
          var d = O.plugins[y];
          d.processAST && (N = d.processAST(N, O));
        }
      return N;
    }
    function J(x, O) {
      var N = O && O.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !x.startsWith("@")) {
        var L = O.filepath, S = N.get(L);
        if (this.config.cache && S)
          return S;
        var B = this.readFile(L), K = this.compile(B, O);
        return this.config.cache && N.define(L, K), K;
      }
      var W = N.get(x);
      if (W)
        return W;
      throw new m("Failed to get template '" + x + "'");
    }
    function rt(x, O, N) {
      var L, S = h({}, N, { async: !1 });
      return typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), L = J.call(this, x, S)) : L = x, L.call(this, O, S);
    }
    function k(x, O, N) {
      var L, S = h({}, N, { async: !0 });
      typeof x == "string" ? (this.resolvePath && this.readFile && !x.startsWith("@") && (S.filepath = this.resolvePath(x, S)), L = J.call(this, x, S)) : L = x;
      var B = L.call(this, O, S);
      return Promise.resolve(B);
    }
    function _(x, O) {
      var N = this.compile(x, { async: !1 });
      return rt.call(this, N, O);
    }
    function i(x, O) {
      var N = this.compile(x, { async: !0 });
      return k.call(this, N, O);
    }
    var z = /* @__PURE__ */ function() {
      function x(N) {
        this.config = void 0, this.RuntimeErr = v, this.compile = b, this.compileToString = s, this.parse = G, this.render = rt, this.renderAsync = k, this.renderString = _, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = N ? h({}, E, N) : h({}, E);
      }
      var O = x.prototype;
      return O.configure = function(N) {
        this.config = h({}, this.config, N);
      }, O.withConfig = function(N) {
        return h({}, this, { config: h({}, this.config, N) });
      }, O.loadTemplate = function(N, L, S) {
        if (typeof L == "string")
          (S && S.async ? this.templatesAsync : this.templatesSync).define(N, this.compile(L, S));
        else {
          var B = this.templatesSync;
          (L.constructor.name === "AsyncFunction" || S && S.async) && (B = this.templatesAsync), B.define(N, L);
        }
      }, x;
    }(), it = /* @__PURE__ */ function(x) {
      function O() {
        return x.apply(this, arguments) || this;
      }
      return c(O, x), O;
    }(z);
    e.Eta = it;
  });
})(Jt, Jt.exports);
var rn = Jt.exports;
const an = new rn.Eta({
  autoTrim: !1
});
function Ft(C, u) {
  return an.renderString(C, u);
}
const sn = `<% if (it.kotlin) { %>import org.jetbrains.kotlin.gradle.dsl.JvmTarget

<% } %>plugins {
	id '<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>' version "\${loom_version}"
	id 'maven-publish'
	<%_ if (it.kotlin) { %>
	id "org.jetbrains.kotlin.jvm" version "<%= it.kotlin.kotlinVersion %>"
  <%_ } %>
}

version = project.mod_version
group = project.maven_group

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}
<% if (it.splitSources) { %>
loom {
<% if (it.splitSources) { %>	splitEnvironmentSourceSets()

	mods {
		"<%= it.modid %>" {
			sourceSet sourceSets.main
			sourceSet sourceSets.client
		}
	}
<% } %>
}
<% } %><% if (it.dataGeneration) { %>
fabricApi {
	configureDataGeneration {
		client = true
	}
}
<% } %>
dependencies {
	// To change the versions see the gradle.properties file
	minecraft "com.mojang:minecraft:\${project.minecraft_version}"
	<% if (!it.unobfuscated) { %>mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${project.yarn_mappings}:v2"<% } %><% } %>
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc.fabric-api:fabric-api:\${project.fabric_api_version}"
	<% if (it.kotlin) { %><% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %> "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
}

processResources {
	inputs.property "version", project.version

	filesMatching("fabric.mod.json") {
		expand "version": inputs.properties.version
	}
}

tasks.withType(JavaCompile).configureEach {
	it.options.release = <%= it.java.release %>
}
<% if (it.kotlin) { %>
kotlin {
	compilerOptions {
		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>
	}
}
<% } %>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
}

jar {
	inputs.property "projectName", project.name

	from("LICENSE") {
		rename { "\${it}_\${project.name}"}
	}
}

// configure the maven publication
publishing {
	publications {
		create("mavenJava", MavenPublication) {
			from components.java
		}
	}

	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.
	repositories {
		// Add repositories to publish to here.
		// Notice: This block does NOT have the same function as the block in the top level.
		// The repositories here will be used for publishing your artifact, not for
		// retrieving dependencies.
	}
}`, on = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}

// Should match your modid
rootProject.name = '<%= it.modid %>'
`, ln = {
  compatibility: "1_8",
  mixin: "JAVA_8",
  release: 8
}, cn = {
  compatibility: "16",
  mixin: "JAVA_16",
  release: 16
}, $t = {
  compatibility: "17",
  mixin: "JAVA_17",
  release: 17
}, un = {
  compatibility: "21",
  mixin: "JAVA_21",
  release: 21
}, An = {
  compatibility: "25",
  mixin: "JAVA_25",
  release: 25
};
function Zt(C) {
  const u = ze(C), e = Qe(C);
  return u >= 26 ? An : e <= 16 ? ln : e == 17 ? cn : e <= 19 || e == 20 && Ue(C) <= 4 ? $t : un;
}
const hn = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, dn = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), fn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function pn(C) {
  let u = [];
  hn.test(C.toLowerCase()) || u.push("Package name is not a valid Java package name!");
  const e = C.split(".").filter((h) => dn.includes(h));
  e.length != 0 && u.push(`Package name contains illegal component: '${e[0]}'`);
  for (let h of fn)
    C.toLowerCase().startsWith(h) ? u.push(`Package name starts with '${h}', which is reserved!`) : C.toLowerCase() + "." == h && u.push(`Package name is '${h}', which is reserved!`);
  return u;
}
async function mn(C, u) {
  await C.write("build.gradle", Ft(sn, { ...u, java: Zt(u.minecraftVersion) })), await C.write("settings.gradle", Ft(on, u));
}
const gn = `<% if (it.kotlin) { %>import org.jetbrains.kotlin.gradle.dsl.JvmTarget

<% } %>plugins {
	id("<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>")
	\`maven-publish\`
	<%_ if (it.kotlin) { %>
	id("org.jetbrains.kotlin.jvm") version "<%= it.kotlin.kotlinVersion %>"
	<%_ } %>
}

version = providers.gradleProperty("mod_version").get()
group = providers.gradleProperty("maven_group").get()

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}
<% if (it.splitSources) { %>
loom {
	splitEnvironmentSourceSets()

	mods {
		register("<%= it.modid %>") {
			sourceSet(sourceSets.main.get())
			sourceSet(sourceSets.getByName("client"))
		}
	}
}
<% } %><% if (it.dataGeneration) { %>
fabricApi {
	configureDataGeneration {
		client = true
	}
}
<% } %>
dependencies {
	// To change the versions see the gradle.properties file
	minecraft("com.mojang:minecraft:\${providers.gradleProperty("minecraft_version").get()}")
	<% if (!it.unobfuscated) { %>mappings(<% if(it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${providers.gradleProperty("yarn_mappings").get()}:v2"<% } %>)<% } %>
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %>("net.fabricmc:fabric-loader:\${providers.gradleProperty("loader_version").get()}")

	// Fabric API. This is technically optional, but you probably want it anyway.
	<% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %>("net.fabricmc.fabric-api:fabric-api:\${providers.gradleProperty("fabric_api_version").get()}")
	<% if (it.kotlin) { %><% if (it.unobfuscated) { %>implementation<% } else { %>modImplementation<% } %>("net.fabricmc:fabric-language-kotlin:\${providers.gradleProperty("fabric_kotlin_version").get()}")<% } %>
}

tasks.processResources {
	inputs.property("version", version)

	filesMatching("fabric.mod.json") {
		expand("version" to version)
	}
}

tasks.withType<JavaCompile>().configureEach {
	options.release = <%= it.java.release %>
}
<% if (it.kotlin) { %>
kotlin {
	compilerOptions {
		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>
	}
}
<% } %>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
}

tasks.jar {
	inputs.property("projectName", project.name)

	from("LICENSE") {
		rename { "\${it}_\${project.name}" }
	}
}

// configure the maven publication
publishing {
	publications {
		register<MavenPublication>("mavenJava") {
			from(components["java"])
		}
	}

	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.
	repositories {
		// Add repositories to publish to here.
		// Notice: This block does NOT have the same function as the block in the top level.
		// The repositories here will be used for publishing your artifact, not for
		// retrieving dependencies.
	}
}
`, bn = `pluginManagement {
	repositories {
		maven {
			name = "Fabric"
			url = uri("https://maven.fabricmc.net/")
		}
		mavenCentral()
		gradlePluginPortal()
	}

	plugins {
		id("<% if (it.unobfuscated) { %>net.fabricmc.fabric-loom<% } else { %>net.fabricmc.fabric-loom-remap<% } %>") version providers.gradleProperty("loom_version")
	}
}

// Should match your modid
rootProject.name = "<%= it.modid %>"
`;
async function vn(C, u) {
  await C.write("build.gradle.kts", Ft(gn, { ...u, java: Zt(u.minecraftVersion) })), await C.write("settings.gradle.kts", Ft(bn, u));
}
const yn = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# IntelliJ IDEA is not yet fully compatible with configuration cache, see: https://github.com/FabricMC/fabric-loom/issues/1349
org.gradle.configuration-cache=false

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap && !it.unobfuscated) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.16-SNAPSHOT
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>

# Dependencies
fabric_api_version=<%= it.fabricVersion %>`;
async function wn(C, u) {
  await C.write("gradle.properties", Ft(yn, u)), u.gradleKotlin ? await vn(C, u) : await mn(C, u);
}
function Xt(C) {
  for (var u = globalThis.atob(C), e = u.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = u.charCodeAt(c);
  return h.buffer;
}
const kn = `#!/bin/sh

#
# Copyright © 2015 the original authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      https://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0
#

##############################################################################
#
#   Gradle start up script for POSIX generated by Gradle.
#
#   Important for running:
#
#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
#       noncompliant, but you have some other compliant shell such as ksh or
#       bash, then to run this script, type that shell name before the whole
#       command line, like:
#
#           ksh Gradle
#
#       Busybox and similar reduced shells will NOT work, because this script
#       requires all of these POSIX shell features:
#         * functions;
#         * expansions «$var», «\${var}», «\${var:-default}», «\${var+SET}»,
#           «\${var#prefix}», «\${var%suffix}», and «$( cmd )»;
#         * compound commands having a testable exit status, especially «case»;
#         * various built-in commands including «command», «set», and «ulimit».
#
#   Important for patching:
#
#   (2) This script targets any POSIX shell, so it avoids extensions provided
#       by Bash, Ksh, etc; in particular arrays are avoided.
#
#       The "traditional" practice of packing multiple parameters into a
#       space-separated string is a well documented source of bugs and security
#       problems, so this is (mostly) avoided, by progressively accumulating
#       options in "$@", and eventually passing that to Java.
#
#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,
#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;
#       see the in-line comments for details.
#
#       There are tweaks for specific operating systems such as AIX, CygWin,
#       Darwin, MinGW, and NonStop.
#
#   (3) This script is generated from the Groovy template
#       https://github.com/gradle/gradle/blob/2d6327017519d23b96af35865dc997fcb544fb40/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
#       within the Gradle project.
#
#       You can find Gradle at https://github.com/gradle/gradle/.
#
##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link
app_path=$0

# Need this for daisy-chained symlinks.
while
    APP_HOME=\${app_path%"\${app_path##*/}"}  # leaves a trailing /; empty if no leading path
    [ -h "$app_path" ]
do
    ls=$( ls -ld "$app_path" )
    link=\${ls#*' -> '}
    case $link in             #(
      /*)   app_path=$link ;; #(
      *)    app_path=$APP_HOME$link ;;
    esac
done

# This is normally unused
# shellcheck disable=SC2034
APP_BASE_NAME=\${0##*/}
# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)
APP_HOME=$( cd -P "\${APP_HOME:-./}" > /dev/null && printf '%s\\n' "$PWD" ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.
MAX_FD=maximum

warn () {
    echo "$*"
} >&2

die () {
    echo
    echo "$*"
    echo
    exit 1
} >&2

# OS specific support (must be 'true' or 'false').
cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in                #(
  CYGWIN* )         cygwin=true  ;; #(
  Darwin* )         darwin=true  ;; #(
  MSYS* | MINGW* )  msys=true    ;; #(
  NONSTOP* )        nonstop=true ;;
esac



# Determine the Java command to use to start the JVM.
if [ -n "$JAVA_HOME" ] ; then
    if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
        # IBM's JDK on AIX uses strange locations for the executables
        JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
    fi
    if [ ! -x "$JAVACMD" ] ; then
        die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
else
    JAVACMD=java
    if ! command -v java >/dev/null 2>&1
    then
        die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
    fi
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
            warn "Could not set maximum file descriptor limit to $MAX_FD"
    esac
fi

# Collect all arguments for the java command, stacking in reverse order:
#   * args from the command line
#   * the main class name
#   * -classpath
#   * -D...appname settings
#   * --module-path (only if needed)
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java
if "$cygwin" || "$msys" ; then
    APP_HOME=$( cygpath --path --mixed "$APP_HOME" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            # don't mess with options #(
              /?*)  t=\${arg#/} t=/\${t%%/*}              # looks like a POSIX filepath
                    [ -e "$t" ] ;;                      #(
              *)    false ;;
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # args, so each arg winds up back in the position where it started, but
        # possibly modified.
        #
        # NB: a \`for\` loop captures its iteration list before it begins, so
        # changing the positional parameters here affects neither the number of
        # iterations, nor the values presented in \`arg\`.
        shift                   # remove old arg
        set -- "$@" "$arg"      # push replacement arg
    done
fi


# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command:
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect \${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '\${Hostname}' itself on the command line.

set -- \\
        "-Dorg.gradle.appname=$APP_BASE_NAME" \\
        -jar "$APP_HOME/gradle/wrapper/gradle-wrapper.jar" \\
        "$@"

# Stop when "xargs" is not available.
if ! command -v xargs >/dev/null 2>&1
then
    die "xargs is not available"
fi

# Use "xargs" to parse quoted args.
#
# With -n1 it outputs one arg per line, with the quotes and backslashes removed.
#
# In Bash we could simply go:
#
#   readarray ARGS < <( xargs -n1 <<<"$var" ) &&
#   set -- "\${ARGS[@]}" "$@"
#
# but POSIX shell has neither arrays nor command substitution, so instead we
# post-process each arg (as a line of input to sed) to backslash-escape any
# character that might be a shell metacharacter, then use eval to reverse
# that process (while maintaining the separation between arguments), and wrap
# the whole thing up as a single "set" statement.
#
# This will of course break if any of these variables contains a newline or
# an unmatched quote.
#

eval "set -- $(
        printf '%s\\n' "$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
        xargs -n1 |
        sed ' s~[^-[:alnum:]+,./:=@_]~\\\\&~g; ' |
        tr '\\n' ' '
    )" '"$@"'

exec "$JAVACMD" "$@"
`, En = `@rem\r
@rem Copyright 2015 the original author or authors.\r
@rem\r
@rem Licensed under the Apache License, Version 2.0 (the "License");\r
@rem you may not use this file except in compliance with the License.\r
@rem You may obtain a copy of the License at\r
@rem\r
@rem      https://www.apache.org/licenses/LICENSE-2.0\r
@rem\r
@rem Unless required by applicable law or agreed to in writing, software\r
@rem distributed under the License is distributed on an "AS IS" BASIS,\r
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r
@rem See the License for the specific language governing permissions and\r
@rem limitations under the License.\r
@rem\r
@rem SPDX-License-Identifier: Apache-2.0\r
@rem\r
\r
@if "%DEBUG%"=="" @echo off\r
@rem ##########################################################################\r
@rem\r
@rem  Gradle startup script for Windows\r
@rem\r
@rem ##########################################################################\r
\r
@rem Set local scope for the variables with windows NT shell\r
if "%OS%"=="Windows_NT" setlocal\r
\r
set DIRNAME=%~dp0\r
if "%DIRNAME%"=="" set DIRNAME=.\r
@rem This is normally unused\r
set APP_BASE_NAME=%~n0\r
set APP_HOME=%DIRNAME%\r
\r
@rem Resolve any "." and ".." in APP_HOME to make it shorter.\r
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi\r
\r
@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.\r
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"\r
\r
@rem Find java.exe\r
if defined JAVA_HOME goto findJavaFromJavaHome\r
\r
set JAVA_EXE=java.exe\r
%JAVA_EXE% -version >NUL 2>&1\r
if %ERRORLEVEL% equ 0 goto execute\r
\r
echo. 1>&2\r
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2\r
echo. 1>&2\r
echo Please set the JAVA_HOME variable in your environment to match the 1>&2\r
echo location of your Java installation. 1>&2\r
\r
goto fail\r
\r
:findJavaFromJavaHome\r
set JAVA_HOME=%JAVA_HOME:"=%\r
set JAVA_EXE=%JAVA_HOME%/bin/java.exe\r
\r
if exist "%JAVA_EXE%" goto execute\r
\r
echo. 1>&2\r
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2\r
echo. 1>&2\r
echo Please set the JAVA_HOME variable in your environment to match the 1>&2\r
echo location of your Java installation. 1>&2\r
\r
goto fail\r
\r
:execute\r
@rem Setup the command line\r
\r
\r
\r
@rem Execute Gradle\r
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -jar "%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar" %*\r
\r
:end\r
@rem End local scope for the variables with windows NT shell\r
if %ERRORLEVEL% equ 0 goto mainEnd\r
\r
:fail\r
rem Set variable GRADLE_EXIT_CONSOLE if you need the _script_ return code instead of\r
rem the _cmd.exe /c_ return code!\r
set EXIT_CODE=%ERRORLEVEL%\r
if %EXIT_CODE% equ 0 set EXIT_CODE=1\r
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%\r
exit /b %EXIT_CODE%\r
\r
:mainEnd\r
if "%OS%"=="Windows_NT" endlocal\r
\r
:omega\r
`, Cn = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.4.1-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Sn = "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aS9Db21tYW5kTGluZVBhcnNlciRCZWZvcmVGaXJzdFN1YkNvbW1hbmQuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEApv7cD18HAAA6DwAAPQAJAAAAAAAAAAAAAAAPGgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkS25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBrgzSgTAIAAJcEAAA8AAkAAAAAAAAAAAAAAOIhAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRNaXNzaW5nT3B0aW9uQXJnU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEARYZ1xtYCAABKBQAAPQAJAAAAAAAAAAAAAAChJAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uQXdhcmVQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQD1WGfyogEAAH0CAAA4AAkAAAAAAAAAAAAAAOsnAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQC0fWhNIgIAAGYDAAAzAAkAAAAAAAAAAAAAAPwpAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAmahlkqwBAADOAgAAMgAJAAAAAAAAAAAAAACILAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAjwiKR3MCAADHBAAAPwAJAAAAAAAAAAAAAACdLgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOQRgy/rBAAA0ggAACYACQAAAAAAAAAAAAAAhjEAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhABhNjBCDBAAAUggAACYACQAAAAAAAAAAAAAAzjYAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhABLxWThRAQAArAEAACwACQAAAAAAAAAAAAAArjsAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAAYNbGgiBQAAVggAADMACQAAAAAAAAAAAAAAYj0AAG9yZy9ncmFkbGUvaW50ZXJuYWwvZmlsZS9QYXRoVHJhdmVyc2FsQ2hlY2tlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDZpsvlnQEAACYCAABBAAkAAAAAAAAAAAAAAO5CAABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBKCT6T2wQAAOoIAAAxAAkAAAAAAAAAAAAAAANFAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvV3JhcHBlckNyZWRlbnRpYWxzLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhANenErjaAQAAxwIAAD4ACQAAAAAAAAAAAAAARkoAAG9yZy9ncmFkbGUvdXRpbC9pbnRlcm5hbC9XcmFwcGVyRGlzdHJpYnV0aW9uVXJsQ29udmVydGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAMk3EZmPAQAAHgIAAC8ACQAAAAAAAAAAAAAAlUwAAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlciQxLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhALhSmGdLAwAAEgUAAEEACQAAAAAAAAAAAAAAik4AAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCREZWZhdWx0RG93bmxvYWRQcm9ncmVzc0xpc3RlbmVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOQLi38GAwAAQQUAADQACQAAAAAAAAAAAAAATVIAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCRQcm94eUF1dGhlbnRpY2F0b3IuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAM6wND1ALAAAdFgAAIQAJAAAAAAAAAAAAAAC+VQAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAK2rZ0rZAQAAsgIAAC0ACQAAAAAAAAAAAAAAZmEAAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVVc2VySG9tZUxvb2t1cC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBB/e93+AAAACwBAAAxAAkAAAAAAAAAAAAAAKNjAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlV3JhcHBlck1haW4kQWN0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAExnGE2CGAAA7TIAACoACQAAAAAAAAAAAAAAA2UAAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVXcmFwcGVyTWFpbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBPLH7PxAwAALIYAAAiAAkAAAAAAAAAAAAAAOZ9AABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbCQxLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAJQKw5RqAQAA5wEAAC0ACQAAAAAAAAAAAAAAA4sAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJEluc3RhbGxDaGVjay5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCOJXStDREAAM4gAAAgAAkAAAAAAAAAAAAAANGMAABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAyJAvjWwIAAFoEAAAfAAkAAAAAAAAAAAAAADWeAABvcmcvZ3JhZGxlL3dyYXBwZXIvTG9nZ2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACOKqc0jAQAAagEAACYACQAAAAAAAAAAAAAA5qAAAG9yZy9ncmFkbGUvd3JhcHBlci9QYXRoQXNzZW1ibGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhADBmz+YyBAAAZgcAAC4ACQAAAAAAAAAAAAAAZqIAAG9yZy9ncmFkbGUvd3JhcHBlci9Qcm9wZXJ0aWVzRmlsZUhhbmRsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAt0UBU+8CAABQBgAALQAJAAAAAAAAAAAAAAD9pgAAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJDb25maWd1cmF0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAPEwYrmhBgAARA0AACgACQAAAAAAAAAAAAAAUKoAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyRXhlY3V0b3IuY2xhc3NVVAUAAQAAAABQSwUGAAAAACMAIwDgDQAAULEAAAAA", xe = `# gradle

.gradle/
build/
out/
classes/

# eclipse

*.launch

# idea

.idea/
*.iml
*.ipr
*.iws

# vscode

.settings/
.vscode/
bin/
.classpath
.project

# macos

*.DS_Store

# fabric

run/

# java

hs_err_*.log
replay_*.log
*.hprof
*.jfr
`, Ie = `# Automatically build the project and run any configured tests for every push
# and submitted pull request. This can help catch issues that only occur on
# certain platforms or Java versions, and provides a first line of defence
# against bad commits.

name: build
on: [pull_request, push]

jobs:
  build:
    runs-on: ubuntu-24.04
    steps:
      - name: checkout repository
        uses: actions/checkout@v6
      - name: validate gradle wrapper
        uses: gradle/actions/wrapper-validation@v6
      - name: setup jdk
        uses: actions/setup-java@v5
        with:
          java-version: '25'
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        uses: actions/upload-artifact@v7
        with:
          name: Artifacts
          path: build/libs/
`;
async function xn({ writer: C }) {
  await C.write("gradlew", kn, {
    executable: !0
  }), await C.write("gradlew.bat", En), await C.write("gradle/wrapper/gradle-wrapper.properties", Cn), await C.write("gradle/wrapper/gradle-wrapper.jar", Xt(Sn)), await C.write(".gitignore", xe), await C.write(".github/workflows/build.yml", Ie);
}
const Be = `package <%= it.packageName %>;

import <%= it.targetClassFull %>;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(<%= it.targetClass %>.class)
public class <%= it.className %> {
	@Inject(at = @At("HEAD"), method = "<%= it.targetMethod %>")
	private void init(CallbackInfo info) {
		// This code is injected into the start of <%= it.targetClass %>.<%= it.targetMethod %>()V
	}
}`;
async function In(C, u) {
  const e = u.packageName + ".mixin", h = "ExampleMixin", c = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = u.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Zt(u.minecraftVersion).mixin,
    mixins: [
      h
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${u.modid}.mixins.json`;
  return await C.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await C.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, Ft(Be, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function Bn(C, u) {
  const e = u.packageName + ".client.mixin", h = "ExampleClientMixin", c = u.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${c}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Zt(u.minecraftVersion).mixin,
    client: [
      h
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${u.modid}.client.mixins.json`;
  return await C.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await C.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, Ft(Be, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [
    {
      config: o,
      environment: "client"
    }
  ];
}
const Nn = `package <%= it.package %>;

import net.fabricmc.api.ModInitializer;
<% if (it.slf4j) { %>
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<% } else { %>
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
<% } %>
public class <%= it.className %> implements ModInitializer {
	public static final String MOD_ID = "<%= it.modid %>";

	// This logger is used to write text to the console and the log file.
	// It is considered best practice to use your mod id as the logger's name.
	// That way, it's clear which mod wrote info, warnings, and errors.
	<% if (it.slf4j) { %>public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);<% } else { %>public static final Logger LOGGER = LogManager.getLogger(MOD_ID);<% } %>

	@Override
	public void onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.

		LOGGER.info("Hello Fabric world!");
	}
}`, Fn = `package <%= it.package %>

import net.fabricmc.api.ModInitializer
<% if (it.slf4j) { %>import org.slf4j.LoggerFactory
<% } else { %>import org.apache.logging.log4j.LogManager<% } %>
object <%= it.className %> : ModInitializer {
<% if (it.slf4j) { %>    private val logger = LoggerFactory.getLogger("<%= it.modid %>")
<% } else { %>    private val logger = LogManager.getLogger("<%= it.modid %>")<% } %>
	override fun onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.
		logger.info("Hello Fabric world!")
	}
}`, Rn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Vn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Tn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, _n = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function Gn(C, u) {
  const e = Dn(u.projectName), h = {
    package: u.packageName,
    clientPackage: u.packageName + ".client",
    className: e,
    classFullName: u.packageName + "." + e,
    clientClassFullName: u.packageName + ".client." + e,
    path: u.packageName.replaceAll(".", "/") + "/" + e,
    clientPath: u.packageName.replaceAll(".", "/") + "/client/" + e,
    modid: u.modid,
    slf4j: Le(u.minecraftVersion),
    clientEntrypoint: u.splitSources,
    dataEntrypoint: u.dataGeneration
  };
  return u.kotlin ? await jn(C, h) : await On(C, h);
}
function Dn(C) {
  return C.split(" ").map((u) => u[0].toUpperCase() + u.slice(1)).join("").replace(/\W+/g, "");
}
async function On(C, u) {
  var e = {
    main: [
      u.classFullName
    ]
  };
  if (await C.write(`src/main/java/${u.path}.java`, Ft(Nn, u)), u.clientEntrypoint && (await C.write(`src/client/java/${u.clientPath}Client.java`, Ft(Rn, {
    ...u,
    className: u.className + "Client",
    package: u.clientPackage
  })), e = {
    ...e,
    client: [
      u.clientClassFullName + "Client"
    ]
  }), u.dataEntrypoint) {
    const h = u.clientEntrypoint ? "client" : "main", c = u.clientEntrypoint ? u.clientPath : u.path, r = u.clientEntrypoint ? u.clientClassFullName : u.classFullName;
    await C.write(`src/${h}/java/${c}DataGenerator.java`, Ft(Tn, {
      ...u,
      className: u.className + "DataGenerator",
      package: u.clientEntrypoint ? u.clientPackage : u.package
    })), e = {
      ...e,
      "fabric-datagen": [
        r + "DataGenerator"
      ]
    };
  }
  return e;
}
async function jn(C, u) {
  var e = {
    main: [
      {
        value: u.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await C.write(`src/main/kotlin/${u.path}.kt`, Ft(Fn, u)), u.clientEntrypoint && (await C.write(`src/client/kotlin/${u.clientPath}Client.kt`, Ft(Vn, {
    ...u,
    className: u.className + "Client",
    package: u.clientPackage
  })), e = {
    ...e,
    client: [
      {
        value: u.clientClassFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), u.dataEntrypoint) {
    const h = u.clientEntrypoint ? "client" : "main", c = u.clientEntrypoint ? u.clientPath : u.path, r = u.clientEntrypoint ? u.clientClassFullName : u.classFullName;
    await C.write(`src/${h}/kotlin/${c}DataGenerator.kt`, Ft(_n, {
      ...u,
      className: u.className + "DataGenerator",
      package: u.clientEntrypoint ? u.clientPackage : u.package
    })), e = {
      ...e,
      "fabric-datagen": [
        {
          value: r + "DataGenerator",
          adapter: "kotlin"
        }
      ]
    };
  }
  return e;
}
const te = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Mn(C, u, e) {
  if (!u)
    return Xt(te);
  const h = e.create(128, 128);
  return h != null && zn(h, C) ? h.getPng() : Xt(te);
}
function zn(C, u) {
  const e = C.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const h = u.split(/\s+/);
  let c = 0, r = Array(h.length), a = 65;
  for (; ; ) {
    c = 0;
    for (const o of h) {
      let p = a;
      do
        p--, e.font = `${p}px ${Qt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < h.length; o++) {
      const p = h[o];
      e.font = `${a}px ${Qt}`;
      const m = C.measureText(e, p);
      r[o] = m.ascent + m.descent, c += r[o];
    }
    if (c += (h.length - 1) * 2, c <= 124)
      break;
  }
  const n = (128 - c) / 2;
  for (let o = 0; o < h.length; o++) {
    let p = 0;
    for (const v of r.slice(0, o))
      p += v + 2;
    const m = h[o];
    e.font = `${a}px ${Qt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const g = C.measureText(e, m);
    e.fillText(m, 64, n + p + g.ascent);
  }
  return !0;
}
function Qn(C) {
  return Number(C.split(".")[1]) >= 59;
}
async function Un(C, u, e) {
  const h = [
    ...await In(C, e),
    ...e.splitSources ? await Bn(C, e) : []
  ], c = e.minecraftVersion.indexOf("-");
  var r = e.minecraftVersion.substring(0, c === -1 ? e.minecraftVersion.length : c + 1);
  const a = {
    schemaVersion: 1,
    id: e.modid,
    version: "${version}",
    name: e.projectName,
    description: "This is an example description! Tell everyone what your mod is about!",
    authors: [
      "Me!"
    ],
    contact: {
      homepage: "https://fabricmc.net/",
      sources: "https://github.com/FabricMC/fabric-example-mod"
    },
    license: "CC0-1.0",
    icon: `assets/${e.modid}/icon.png`,
    environment: "*",
    entrypoints: await Gn(C, e),
    mixins: h,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Zt(e.minecraftVersion).release
    }
  };
  a.depends[Qn(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await C.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await C.write(`src/main/resources/assets/${e.modid}/icon.png`, Mn(e.projectName, e.uniqueModIcon, u));
}
const Ln = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Zn = `Creative Commons Legal Code

CC0 1.0 Universal

    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
    INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
    HEREUNDER.

Statement of Purpose

The laws of most jurisdictions throughout the world automatically confer
exclusive Copyright and Related Rights (defined below) upon the creator
and subsequent owner(s) (each and all, an "owner") of an original work of
authorship and/or a database (each, a "Work").

Certain owners wish to permanently relinquish those rights to a Work for
the purpose of contributing to a commons of creative, cultural and
scientific works ("Commons") that the public can reliably and without fear
of later claims of infringement build upon, modify, incorporate in other
works, reuse and redistribute as freely as possible in any form whatsoever
and for any purposes, including without limitation commercial purposes.
These owners may contribute to the Commons to promote the ideal of a free
culture and the further production of creative, cultural and scientific
works, or to gain reputation or greater distribution for their Work in
part through the use and efforts of others.

For these and/or other purposes and motivations, and without any
expectation of additional consideration or compensation, the person
associating CC0 with a Work (the "Affirmer"), to the extent that he or she
is an owner of Copyright and Related Rights in the Work, voluntarily
elects to apply CC0 to the Work and publicly distribute the Work under its
terms, with knowledge of his or her Copyright and Related Rights in the
Work and the meaning and intended legal effect of CC0 on those rights.

1. Copyright and Related Rights. A Work made available under CC0 may be
protected by copyright and related or neighboring rights ("Copyright and
Related Rights"). Copyright and Related Rights include, but are not
limited to, the following:

  i. the right to reproduce, adapt, distribute, perform, display,
     communicate, and translate a Work;
 ii. moral rights retained by the original author(s) and/or performer(s);
iii. publicity and privacy rights pertaining to a person's image or
     likeness depicted in a Work;
 iv. rights protecting against unfair competition in regards to a Work,
     subject to the limitations in paragraph 4(a), below;
  v. rights protecting the extraction, dissemination, use and reuse of data
     in a Work;
 vi. database rights (such as those arising under Directive 96/9/EC of the
     European Parliament and of the Council of 11 March 1996 on the legal
     protection of databases, and under any national implementation
     thereof, including any amended or successor version of such
     directive); and
vii. other similar, equivalent or corresponding rights throughout the
     world based on applicable law or treaty, and any national
     implementations thereof.

2. Waiver. To the greatest extent permitted by, but not in contravention
of, applicable law, Affirmer hereby overtly, fully, permanently,
irrevocably and unconditionally waives, abandons, and surrenders all of
Affirmer's Copyright and Related Rights and associated claims and causes
of action, whether now known or unknown (including existing as well as
future claims and causes of action), in the Work (i) in all territories
worldwide, (ii) for the maximum duration provided by applicable law or
treaty (including future time extensions), (iii) in any current or future
medium and for any number of copies, and (iv) for any purpose whatsoever,
including without limitation commercial, advertising or promotional
purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
member of the public at large and to the detriment of Affirmer's heirs and
successors, fully intending that such Waiver shall not be subject to
revocation, rescission, cancellation, termination, or any other legal or
equitable action to disrupt the quiet enjoyment of the Work by the public
as contemplated by Affirmer's express Statement of Purpose.

3. Public License Fallback. Should any part of the Waiver for any reason
be judged legally invalid or ineffective under applicable law, then the
Waiver shall be preserved to the maximum extent permitted taking into
account Affirmer's express Statement of Purpose. In addition, to the
extent the Waiver is so judged Affirmer hereby grants to each affected
person a royalty-free, non transferable, non sublicensable, non exclusive,
irrevocable and unconditional license to exercise Affirmer's Copyright and
Related Rights in the Work (i) in all territories worldwide, (ii) for the
maximum duration provided by applicable law or treaty (including future
time extensions), (iii) in any current or future medium and for any number
of copies, and (iv) for any purpose whatsoever, including without
limitation commercial, advertising or promotional purposes (the
"License"). The License shall be deemed effective as of the date CC0 was
applied by Affirmer to the Work. Should any part of the License for any
reason be judged legally invalid or ineffective under applicable law, such
partial invalidity or ineffectiveness shall not invalidate the remainder
of the License, and in such case Affirmer hereby affirms that he or she
will not (i) exercise any of his or her remaining Copyright and Related
Rights in the Work or (ii) assert any associated claims and causes of
action with respect to the Work, in either case contrary to Affirmer's
express Statement of Purpose.

4. Limitations and Disclaimers.

 a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
 b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
 c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
 d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.`, Pn = `# <%= it.projectName %>

## Setup

For setup instructions, please see the [Fabric Documentation page](https://docs.fabricmc.net/develop/getting-started/creating-a-project#setting-up) related to the IDE that you are using.

## License

This template is available under the CC0 license. Feel free to learn from it and incorporate it in your own projects.
`;
async function Wn(C, u) {
  await C.write(".gitattributes", Ln), await C.write(".gitignore", xe), await C.write(".github/workflows/build.yml", Ie), await C.write("LICENSE", Zn), await C.write("README.md", Ft(Pn, u));
}
const Qt = "Comic Relief";
async function Yn(C) {
  const u = await Xn(C.config);
  await xn(C), await wn(C.writer, u), await Un(C.writer, C.canvas, u), await Wn(C.writer, u);
}
async function Ne() {
  const C = await Xe();
  return C.filter((u) => {
    const e = u.version;
    return e.startsWith("1.14") && e != "1.14.4" ? !1 : u.stable ? !0 : C[0].version == e;
  });
}
async function Xn(C) {
  const u = ye(C.minecraftVersion);
  return {
    ...C,
    splitSources: we(C.minecraftVersion) && C.splitSources,
    dataGeneration: ke(C.minecraftVersion) && C.dataGeneration,
    loaderVersion: (await He()).find((e) => e.stable).version,
    fabricVersion: await Je(C.minecraftVersion),
    yarnVersion: u ? void 0 : (await qe(C.minecraftVersion))[0].version,
    kotlin: await Hn(C),
    unobfuscated: u
  };
}
async function Hn(C) {
  if (!C.useKotlin)
    return;
  const e = (await Ke()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const Jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Qt,
  generateTemplate: Yn,
  getTemplateGameVersions: Ne
}, Symbol.toStringTag, { value: "Module" }));
function ee(C, u, e) {
  const h = C.slice();
  return h[34] = u[e], h;
}
function ne(C, u, e) {
  const h = C.slice();
  return h[37] = u[e], h;
}
function re(C, u, e) {
  const h = C.slice();
  return h[37] = u[e], h;
}
function ie(C, u, e) {
  const h = C.slice();
  return h[37] = u[e], h;
}
function qn(C) {
  let u, e, h = (
    /*error*/
    C[37].message + ""
  ), c, r, a;
  return {
    c() {
      u = et("p"), e = Nt("Error: "), c = Nt(h), r = ot(), a = et("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, jt(u, "color", "red");
    },
    m(n, o) {
      kt(n, u, o), P(u, e), P(u, c), kt(n, r, o), kt(n, a, o);
    },
    p: Dt,
    i: Dt,
    o: Dt,
    d(n) {
      n && Et(u), n && Et(r), n && Et(a);
    }
  };
}
function Kn(C) {
  let u, e, h, c, r, a, n, o, p, m, g, v, l, b, s, f, A, w, E, V, F, j, D, X, G, J, rt, k, _, i, z, it, x, O, N, L, S, B, K, W, H, lt, ft, at, st, bt, ht, At, yt, t, M, T, y, d, I, Q, U, R, Z, $, Y, nt;
  function dt(tt, pt) {
    return (
      /*customModId*/
      tt[3] != null ? tr : $n
    );
  }
  let ct = dt(C), wt = ct(C), Ct = (
    /*modIdErrors*/
    C[16] != null && ae(C)
  ), mt = (
    /*customModId*/
    C[3] != null && oe(C)
  ), Vt = (
    /*packageNameErrors*/
    C[14]
  ), ut = [];
  for (let tt = 0; tt < Vt.length; tt += 1)
    ut[tt] = ue(ne(C, Vt, tt));
  let Tt = (
    /*data*/
    C[33].game
  ), St = [];
  for (let tt = 0; tt < Tt.length; tt += 1)
    St[tt] = Ae(ee(C, Tt, tt));
  let vt = !/*isUnobfuscated*/
  C[13] && he(C), xt = (
    /*supportsDataGen*/
    C[12] && de(C)
  ), It = (
    /*supportsSplitSources*/
    C[11] && fe(C)
  );
  const Pt = [nr, er], _t = [];
  function Mt(tt, pt) {
    return (
      /*loading*/
      tt[10] ? 0 : 1
    );
  }
  return R = Mt(C), Z = _t[R] = Pt[R](C), {
    c() {
      u = et("div"), e = et("div"), h = et("h3"), h.textContent = "Mod Name:", c = ot(), r = et("hr"), a = ot(), wt.c(), n = ot(), o = et("input"), p = ot(), Ct && Ct.c(), m = ot(), mt && mt.c(), g = ot(), v = et("div"), l = et("h3"), l.textContent = "Package Name:", b = ot(), s = et("hr"), f = ot(), A = et("p"), A.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = ot(), E = et("input"), V = ot();
      for (let tt = 0; tt < ut.length; tt += 1)
        ut[tt].c();
      F = ot(), j = et("div"), D = et("h3"), D.textContent = "Minecraft Version:", X = ot(), G = et("hr"), J = ot(), rt = et("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = ot(), _ = et("select");
      for (let tt = 0; tt < St.length; tt += 1)
        St[tt].c();
      i = ot(), z = et("hr"), it = ot(), x = et("br"), O = ot(), N = et("h4"), N.textContent = "Advanced Options:", L = ot(), S = et("div"), B = et("div"), K = et("input"), W = ot(), H = et("label"), H.textContent = "Kotlin Programming Language", lt = ot(), ft = et("p"), ft.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, at = ot(), vt && vt.c(), st = ot(), xt && xt.c(), bt = ot(), It && It.c(), ht = ot(), At = et("div"), yt = et("div"), t = et("input"), M = ot(), T = et("label"), T.textContent = "Kotlin Build Script", y = ot(), d = et("p"), d.textContent = "The Gradle build script will use the Kotlin programming language instead of Groovy.", I = ot(), Q = et("br"), U = ot(), Z.c(), q(h, "class", "svelte-c4460r"), q(r, "class", "svelte-c4460r"), q(o, "id", "project-name"), q(o, "class", "svelte-c4460r"), q(e, "class", "form-line svelte-c4460r"), q(l, "class", "svelte-c4460r"), q(s, "class", "svelte-c4460r"), q(A, "class", "svelte-c4460r"), q(E, "id", "package-name"), q(E, "class", "svelte-c4460r"), q(v, "class", "form-line svelte-c4460r"), q(D, "class", "svelte-c4460r"), q(G, "class", "svelte-c4460r"), q(rt, "class", "svelte-c4460r"), q(_, "id", "minecraft-version"), jt(_, "min-width", "200px"), q(_, "class", "svelte-c4460r"), /*minecraftVersion*/
      C[0] === void 0 && Oe(() => (
        /*select_change_handler*/
        C[26].call(_)
      )), q(j, "class", "form-line svelte-c4460r"), q(z, "class", "svelte-c4460r"), q(x, "class", "svelte-c4460r"), q(N, "class", "svelte-c4460r"), q(K, "id", "kotlin"), q(K, "type", "checkbox"), q(K, "class", "option-input svelte-c4460r"), q(H, "for", "kotlin"), q(H, "class", "option-label svelte-c4460r"), q(B, "class", "option-container svelte-c4460r"), q(ft, "class", "option-body svelte-c4460r"), q(S, "class", "svelte-c4460r"), q(t, "id", "gradleKotlin"), q(t, "type", "checkbox"), q(t, "class", "option-input svelte-c4460r"), q(T, "for", "gradleKotlin"), q(T, "class", "option-label svelte-c4460r"), q(yt, "class", "option-container svelte-c4460r"), q(d, "class", "option-body svelte-c4460r"), q(At, "class", "svelte-c4460r"), q(Q, "class", "svelte-c4460r"), q(u, "class", "template svelte-c4460r");
    },
    m(tt, pt) {
      kt(tt, u, pt), P(u, e), P(e, h), P(e, c), P(e, r), P(e, a), wt.m(e, null), P(e, n), P(e, o), Ot(
        o,
        /*projectName*/
        C[1]
      ), P(e, p), Ct && Ct.m(e, null), P(u, m), mt && mt.m(u, null), P(u, g), P(u, v), P(v, l), P(v, b), P(v, s), P(v, f), P(v, A), P(v, w), P(v, E), Ot(
        E,
        /*packageName*/
        C[2]
      ), P(v, V);
      for (let Rt = 0; Rt < ut.length; Rt += 1)
        ut[Rt] && ut[Rt].m(v, null);
      P(u, F), P(u, j), P(j, D), P(j, X), P(j, G), P(j, J), P(j, rt), P(j, k), P(j, _);
      for (let Rt = 0; Rt < St.length; Rt += 1)
        St[Rt] && St[Rt].m(_, null);
      Kt(
        _,
        /*minecraftVersion*/
        C[0],
        !0
      ), P(u, i), P(u, z), P(u, it), P(u, x), P(u, O), P(u, N), P(u, L), P(u, S), P(S, B), P(B, K), K.checked = /*useKotlin*/
      C[5], P(B, W), P(B, H), P(S, lt), P(S, ft), P(u, at), vt && vt.m(u, null), P(u, st), xt && xt.m(u, null), P(u, bt), It && It.m(u, null), P(u, ht), P(u, At), P(At, yt), P(yt, t), t.checked = /*gradleKotlin*/
      C[9], P(yt, M), P(yt, T), P(At, y), P(At, d), P(u, I), P(u, Q), P(u, U), _t[R].m(u, null), $ = !0, Y || (nt = [
        Bt(
          o,
          "input",
          /*input0_input_handler*/
          C[23]
        ),
        Bt(
          o,
          "blur",
          /*doFormatProjectName*/
          C[19]
        ),
        Bt(
          E,
          "keyup",
          /*doFormatPackageName*/
          C[20]
        ),
        Bt(
          E,
          "input",
          /*input1_input_handler*/
          C[25]
        ),
        Bt(
          _,
          "change",
          /*select_change_handler*/
          C[26]
        ),
        Bt(
          K,
          "change",
          /*input2_change_handler*/
          C[27]
        ),
        Bt(
          t,
          "change",
          /*input3_change_handler*/
          C[31]
        )
      ], Y = !0);
    },
    p(tt, pt) {
      if (ct === (ct = dt(tt)) && wt ? wt.p(tt, pt) : (wt.d(1), wt = ct(tt), wt && (wt.c(), wt.m(e, n))), pt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      tt[1] && Ot(
        o,
        /*projectName*/
        tt[1]
      ), /*modIdErrors*/
      tt[16] != null ? Ct ? Ct.p(tt, pt) : (Ct = ae(tt), Ct.c(), Ct.m(e, null)) : Ct && (Ct.d(1), Ct = null), /*customModId*/
      tt[3] != null ? mt ? mt.p(tt, pt) : (mt = oe(tt), mt.c(), mt.m(u, g)) : mt && (mt.d(1), mt = null), pt[0] & /*packageName*/
      4 && E.value !== /*packageName*/
      tt[2] && Ot(
        E,
        /*packageName*/
        tt[2]
      ), pt[0] & /*packageNameErrors*/
      16384) {
        Vt = /*packageNameErrors*/
        tt[14];
        let gt;
        for (gt = 0; gt < Vt.length; gt += 1) {
          const zt = ne(tt, Vt, gt);
          ut[gt] ? ut[gt].p(zt, pt) : (ut[gt] = ue(zt), ut[gt].c(), ut[gt].m(v, null));
        }
        for (; gt < ut.length; gt += 1)
          ut[gt].d(1);
        ut.length = Vt.length;
      }
      if (pt[0] & /*versions*/
      131072) {
        Tt = /*data*/
        tt[33].game;
        let gt;
        for (gt = 0; gt < Tt.length; gt += 1) {
          const zt = ee(tt, Tt, gt);
          St[gt] ? St[gt].p(zt, pt) : (St[gt] = Ae(zt), St[gt].c(), St[gt].m(_, null));
        }
        for (; gt < St.length; gt += 1)
          St[gt].d(1);
        St.length = Tt.length;
      }
      pt[0] & /*minecraftVersion, versions*/
      131073 && Kt(
        _,
        /*minecraftVersion*/
        tt[0]
      ), pt[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      tt[5]), /*isUnobfuscated*/
      tt[13] ? vt && (vt.d(1), vt = null) : vt ? vt.p(tt, pt) : (vt = he(tt), vt.c(), vt.m(u, st)), /*supportsDataGen*/
      tt[12] ? xt ? xt.p(tt, pt) : (xt = de(tt), xt.c(), xt.m(u, bt)) : xt && (xt.d(1), xt = null), /*supportsSplitSources*/
      tt[11] ? It ? It.p(tt, pt) : (It = fe(tt), It.c(), It.m(u, ht)) : It && (It.d(1), It = null), pt[0] & /*gradleKotlin*/
      512 && (t.checked = /*gradleKotlin*/
      tt[9]);
      let Rt = R;
      R = Mt(tt), R === Rt ? _t[R].p(tt, pt) : (je(), Lt(_t[Rt], 1, 1, () => {
        _t[Rt] = null;
      }), Me(), Z = _t[R], Z ? Z.p(tt, pt) : (Z = _t[R] = Pt[R](tt), Z.c()), Ut(Z, 1), Z.m(u, null));
    },
    i(tt) {
      $ || (Ut(Z), $ = !0);
    },
    o(tt) {
      Lt(Z), $ = !1;
    },
    d(tt) {
      tt && Et(u), wt.d(), Ct && Ct.d(), mt && mt.d(), Yt(ut, tt), Yt(St, tt), vt && vt.d(), xt && xt.d(), It && It.d(), _t[R].d(), Y = !1, pe(nt);
    }
  };
}
function $n(C) {
  let u, e, h, c, r, a, n, o;
  return {
    c() {
      u = et("p"), e = Nt("Choose a name for your new mod. The mod ID will be "), h = et("code"), c = Nt(
        /*modid*/
        C[4]
      ), r = Nt(". "), a = et("a"), a.textContent = "Use custom id", q(h, "class", "svelte-c4460r"), q(a, "href", ""), q(a, "class", "svelte-c4460r"), q(u, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, u, m), P(u, e), P(u, h), P(h, c), P(u, r), P(u, a), n || (o = Bt(a, "click", qt(
        /*useCustomModId*/
        C[21]
      )), n = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && Ht(
        c,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && Et(u), n = !1, o();
    }
  };
}
function tr(C) {
  let u;
  return {
    c() {
      u = et("p"), u.textContent = "Choose a name for your new mod.", q(u, "class", "svelte-c4460r");
    },
    m(e, h) {
      kt(e, u, h);
    },
    p: Dt,
    d(e) {
      e && Et(u);
    }
  };
}
function ae(C) {
  let u, e, h = (
    /*modIdErrors*/
    C[16]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = se(ie(C, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      u = ot(), e = et("br"), q(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, u, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      65536) {
        h = /*modIdErrors*/
        r[16];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = ie(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = se(o), c[n].c(), c[n].m(u.parentNode, u));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      Yt(c, r), r && Et(u), r && Et(e);
    }
  };
}
function se(C) {
  let u, e = (
    /*error*/
    C[37] + ""
  ), h;
  return {
    c() {
      u = et("li"), h = Nt(e), jt(u, "color", "red"), q(u, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, u, r), P(u, h);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      65536 && e !== (e = /*error*/
      c[37] + "") && Ht(h, e);
    },
    d(c) {
      c && Et(u);
    }
  };
}
function oe(C) {
  let u, e, h, c, r, a, n, o, p, m, g, v, l, b = (
    /*customIdErrors*/
    C[15] != null && le(C)
  );
  return {
    c() {
      u = et("div"), e = et("h3"), e.textContent = "Mod ID:", h = ot(), c = et("hr"), r = ot(), a = et("p"), n = Nt("Enter the modid you wish to use for your mod. "), o = et("a"), o.textContent = "Use default", p = ot(), b && b.c(), m = ot(), g = et("input"), q(e, "class", "svelte-c4460r"), q(c, "class", "svelte-c4460r"), q(o, "href", ""), q(o, "class", "svelte-c4460r"), q(a, "class", "svelte-c4460r"), q(g, "id", "mod-id"), q(g, "class", "svelte-c4460r"), q(u, "class", "form-line svelte-c4460r");
    },
    m(s, f) {
      kt(s, u, f), P(u, e), P(u, h), P(u, c), P(u, r), P(u, a), P(a, n), P(a, o), P(u, p), b && b.m(u, null), P(u, m), P(u, g), Ot(
        g,
        /*customModId*/
        C[3]
      ), v || (l = [
        Bt(o, "click", qt(
          /*useDefaultModId*/
          C[22]
        )),
        Bt(
          g,
          "input",
          /*input_input_handler*/
          C[24]
        )
      ], v = !0);
    },
    p(s, f) {
      /*customIdErrors*/
      s[15] != null ? b ? b.p(s, f) : (b = le(s), b.c(), b.m(u, m)) : b && (b.d(1), b = null), f[0] & /*customModId*/
      8 && g.value !== /*customModId*/
      s[3] && Ot(
        g,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(u), b && b.d(), v = !1, pe(l);
    }
  };
}
function le(C) {
  let u, e, h = (
    /*customIdErrors*/
    C[15]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = ce(re(C, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      u = ot(), e = et("br"), q(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, u, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      32768) {
        h = /*customIdErrors*/
        r[15];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = re(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = ce(o), c[n].c(), c[n].m(u.parentNode, u));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      Yt(c, r), r && Et(u), r && Et(e);
    }
  };
}
function ce(C) {
  let u, e = (
    /*error*/
    C[37] + ""
  ), h;
  return {
    c() {
      u = et("li"), h = Nt(e), jt(u, "color", "red"), q(u, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, u, r), P(u, h);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      32768 && e !== (e = /*error*/
      c[37] + "") && Ht(h, e);
    },
    d(c) {
      c && Et(u);
    }
  };
}
function ue(C) {
  let u, e = (
    /*error*/
    C[37] + ""
  ), h;
  return {
    c() {
      u = et("li"), h = Nt(e), jt(u, "color", "red"), q(u, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, u, r), P(u, h);
    },
    p(c, r) {
      r[0] & /*packageNameErrors*/
      16384 && e !== (e = /*error*/
      c[37] + "") && Ht(h, e);
    },
    d(c) {
      c && Et(u);
    }
  };
}
function Ae(C) {
  let u, e = (
    /*version*/
    C[34].version + ""
  ), h;
  return {
    c() {
      u = et("option"), h = Nt(e), u.__value = /*version*/
      C[34].version, u.value = u.__value, q(u, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, u, r), P(u, h);
    },
    p: Dt,
    d(c) {
      c && Et(u);
    }
  };
}
function he(C) {
  let u, e, h, c, r, a, n, o, p;
  return {
    c() {
      u = et("div"), e = et("div"), h = et("input"), c = ot(), r = et("label"), r.textContent = "Mojang Mappings", a = ot(), n = et("p"), n.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", q(h, "id", "mojmap"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "mojmap"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(u, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, u, g), P(u, e), P(e, h), h.checked = /*mojmap*/
      C[6], P(e, c), P(e, r), P(u, a), P(u, n), o || (p = Bt(
        h,
        "change",
        /*input_change_handler*/
        C[28]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*mojmap*/
      64 && (h.checked = /*mojmap*/
      m[6]);
    },
    d(m) {
      m && Et(u), o = !1, p();
    }
  };
}
function de(C) {
  let u, e, h, c, r, a, n, o, p;
  return {
    c() {
      u = et("div"), e = et("div"), h = et("input"), c = ot(), r = et("label"), r.textContent = "Data Generation", a = ot(), n = et("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', q(h, "id", "datagen"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "datagen"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(u, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, u, g), P(u, e), P(e, h), h.checked = /*dataGeneration*/
      C[7], P(e, c), P(e, r), P(u, a), P(u, n), o || (p = Bt(
        h,
        "change",
        /*input_change_handler_1*/
        C[29]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*dataGeneration*/
      128 && (h.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && Et(u), o = !1, p();
    }
  };
}
function fe(C) {
  let u, e, h, c, r, a, n, o, p;
  return {
    c() {
      u = et("div"), e = et("div"), h = et("input"), c = ot(), r = et("label"), r.textContent = "Split client and common sources", a = ot(), n = et("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, q(h, "id", "splitSources"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "splitSources"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(u, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, u, g), P(u, e), P(e, h), h.checked = /*splitSources*/
      C[8], P(e, c), P(e, r), P(u, a), P(u, n), o || (p = Bt(
        h,
        "change",
        /*input_change_handler_2*/
        C[30]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*splitSources*/
      256 && (h.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && Et(u), o = !1, p();
    }
  };
}
function er(C) {
  let u, e, h, c, r, a;
  return e = new ve({}), {
    c() {
      u = et("a"), me(e.$$.fragment), h = Nt(" Download Template (.ZIP)"), q(u, "class", "button primary large download-button svelte-c4460r"), q(u, "href", "");
    },
    m(n, o) {
      kt(n, u, o), ge(e, u, null), P(u, h), c = !0, r || (a = Bt(u, "click", qt(
        /*generate*/
        C[18]
      )), r = !0);
    },
    p: Dt,
    i(n) {
      c || (Ut(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Lt(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && Et(u), be(e), r = !1, a();
    }
  };
}
function nr(C) {
  let u, e, h, c;
  return e = new ve({}), {
    c() {
      u = et("a"), me(e.$$.fragment), h = Nt(" Generating..."), q(u, "class", "button primary download-button svelte-c4460r"), q(u, "href", "");
    },
    m(r, a) {
      kt(r, u, a), ge(e, u, null), P(u, h), c = !0;
    },
    p: Dt,
    i(r) {
      c || (Ut(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Lt(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && Et(u), be(e);
    }
  };
}
function rr(C) {
  let u, e, h, c;
  return {
    c() {
      u = et("p"), e = Nt(`Loading data
    
        
        `), h = et("span"), c = Nt("..."), jt(h, "font-family", Qt);
    },
    m(r, a) {
      kt(r, u, a), P(u, e), P(u, h), P(h, c);
    },
    p: Dt,
    i: Dt,
    o: Dt,
    d(r) {
      r && Et(u);
    }
  };
}
function ir(C) {
  let u, e, h = {
    ctx: C,
    current: null,
    token: null,
    hasCatch: !0,
    pending: rr,
    then: Kn,
    catch: qn,
    value: 33,
    error: 37,
    blocks: [, , ,]
  };
  return Te(
    /*versions*/
    C[17],
    h
  ), {
    c() {
      u = _e(), h.block.c();
    },
    m(c, r) {
      kt(c, u, r), h.block.m(c, h.anchor = r), h.mount = () => u.parentNode, h.anchor = u, e = !0;
    },
    p(c, r) {
      C = c, Ge(h, C, r);
    },
    i(c) {
      e || (Ut(h.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = h.blocks[r];
        Lt(a);
      }
      e = !1;
    },
    d(c) {
      c && Et(u), h.block.d(c), h.token = null, h = null;
    }
  };
}
function ar(C, u, e) {
  let h, c, r, a, n, o, p, m, g = "Template Mod", v = "com.example", l = !1, b = !0, s = !1, f = !0, A = !1, w, E = !1;
  const V = Promise.all([Ne()]).then(([L]) => (e(0, m = L.find((S) => S.stable).version), { game: L }));
  function F(L) {
    if (L !== void 0)
      return We(L, w === void 0);
  }
  async function j() {
    if (n !== void 0 || w !== void 0 && o !== void 0 || p.length > 0)
      return;
    e(10, E = !0);
    const L = await Promise.resolve().then(() => Jn), S = {
      modid: w ?? h,
      minecraftVersion: m,
      projectName: g,
      packageName: v,
      useKotlin: l,
      mojmap: b || a,
      dataGeneration: s && c,
      splitSources: f && r,
      uniqueModIcon: !0,
      gradleKotlin: A
    }, B = new tn();
    await L.generateTemplate({
      config: S,
      writer: {
        write: async (K, W, H) => {
          B.file(K, W, {
            unixPermissions: H != null && H.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(K, W) {
          const H = document.createElement("canvas");
          return H.width = K, H.height = W, {
            getContext: (lt) => H.getContext(lt),
            getPng: () => Xt(H.toDataURL().split(";base64,")[1]),
            measureText(lt, ft) {
              const at = lt.measureText(ft);
              return {
                width: at.width,
                ascent: at.actualBoundingBoxAscent,
                descent: at.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), nn.saveAs(await B.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${S.minecraftVersion}.zip`), e(10, E = !1);
  }
  function D() {
    e(1, g = g.trim());
  }
  function X() {
    e(2, v = Ye(v));
  }
  function G() {
    e(3, w = h);
  }
  function J() {
    e(3, w = void 0);
  }
  function rt() {
    g = this.value, e(1, g);
  }
  function k() {
    w = this.value, e(3, w);
  }
  function _() {
    v = this.value, e(2, v);
  }
  function i() {
    m = De(this), e(0, m), e(17, V);
  }
  function z() {
    l = this.checked, e(5, l);
  }
  function it() {
    b = this.checked, e(6, b);
  }
  function x() {
    s = this.checked, e(7, s);
  }
  function O() {
    f = this.checked, e(8, f);
  }
  function N() {
    A = this.checked, e(9, A);
  }
  return C.$$.update = () => {
    C.$$.dirty[0] & /*projectName*/
    2 && e(4, h = Ze(g)), C.$$.dirty[0] & /*minecraftVersion*/
    1 && e(12, c = ke(m || "1.99")), C.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, r = we(m || "1.99")), C.$$.dirty[0] & /*minecraftVersion*/
    1 && e(13, a = ye(m || "1.99")), C.$$.dirty[0] & /*modid*/
    16 && e(16, n = F(h)), C.$$.dirty[0] & /*customModId*/
    8 && e(15, o = Pe(w)), C.$$.dirty[0] & /*packageName*/
    4 && e(14, p = pn(v));
  }, [
    m,
    g,
    v,
    w,
    h,
    l,
    b,
    s,
    f,
    A,
    E,
    r,
    c,
    a,
    p,
    o,
    n,
    V,
    j,
    D,
    X,
    G,
    J,
    rt,
    k,
    _,
    i,
    z,
    it,
    x,
    O,
    N
  ];
}
class ur extends Fe {
  constructor(u) {
    super(), Re(this, u, ar, ir, Ve, {}, null, [-1, -1]);
  }
}
export {
  ur as default
};
