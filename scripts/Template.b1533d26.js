import { S as _e, i as We, s as Te, h as Ge, b as Le, c as kt, u as Qe, o as Mt, p as Dt, d as Et, q as je, e as et, t as Bt, a as ot, f as Lt, g as Z, n as Tt, k as q, r as ze, C as Gt, l as te, m as Ft, D as Me, E as De, j as Jt, B as be, A as Ht, y as qt, v as ve, w as ye, x as we } from "./index.4deac2e0.js";
import ke from "./DownloadIcon.39c279f6.js";
import { g as Kt, a as $t, b as Ee, m as Ue, c as Ce, d as xe, e as Se, n as Ze, f as Pe, s as Je } from "./minecraft.13f4fc12.js";
import { d as Ye, b as He, h as Xe, i as qe, j as Ke } from "./Api.fd2c0b6d.js";
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ie(k) {
  return k && k.__esModule && Object.prototype.hasOwnProperty.call(k, "default") ? k.default : k;
}
function Pt(k) {
  throw new Error('Could not dynamically require "' + k + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Fe = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(k, l) {
  (function(e) {
    k.exports = e();
  })(function() {
    return function e(A, u, r) {
      function a(p, m) {
        if (!u[p]) {
          if (!A[p]) {
            var g = typeof Pt == "function" && Pt;
            if (!m && g)
              return g(p, !0);
            if (n)
              return n(p, !0);
            var v = new Error("Cannot find module '" + p + "'");
            throw v.code = "MODULE_NOT_FOUND", v;
          }
          var c = u[p] = { exports: {} };
          A[p][0].call(c.exports, function(b) {
            var s = A[p][1][b];
            return a(s || b);
          }, c, c.exports, e, A, u, r);
        }
        return u[p].exports;
      }
      for (var n = typeof Pt == "function" && Pt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, A, u) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      u.encode = function(o) {
        for (var p, m, g, v, c, b, s, f = [], h = 0, w = o.length, C = w, R = r.getTypeOf(o) !== "string"; h < o.length; )
          C = w - h, g = R ? (p = o[h++], m = h < w ? o[h++] : 0, h < w ? o[h++] : 0) : (p = o.charCodeAt(h++), m = h < w ? o.charCodeAt(h++) : 0, h < w ? o.charCodeAt(h++) : 0), v = p >> 2, c = (3 & p) << 4 | m >> 4, b = 1 < C ? (15 & m) << 2 | g >> 6 : 64, s = 2 < C ? 63 & g : 64, f.push(n.charAt(v) + n.charAt(c) + n.charAt(b) + n.charAt(s));
        return f.join("");
      }, u.decode = function(o) {
        var p, m, g, v, c, b, s = 0, f = 0, h = "data:";
        if (o.substr(0, h.length) === h)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, C = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && C--, o.charAt(o.length - 2) === n.charAt(64) && C--, C % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (v = n.indexOf(o.charAt(s++))) >> 4, m = (15 & v) << 4 | (c = n.indexOf(o.charAt(s++))) >> 2, g = (3 & c) << 6 | (b = n.indexOf(o.charAt(s++))), w[f++] = p, c !== 64 && (w[f++] = m), b !== 64 && (w[f++] = g);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, A, u) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, g, v, c, b) {
        this.compressedSize = m, this.uncompressedSize = g, this.crc32 = v, this.compression = c, this.compressedContent = b;
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
      }, A.exports = p;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, A, u) {
      var r = e("./stream/GenericWorker");
      u.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, u.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, A, u) {
      var r = e("./utils"), a = function() {
        for (var n, o = [], p = 0; p < 256; p++) {
          n = p;
          for (var m = 0; m < 8; m++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          o[p] = n;
        }
        return o;
      }();
      A.exports = function(n, o) {
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(p, m, g, v) {
          var c = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ c[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : function(p, m, g, v) {
          var c = a, b = v + g;
          p ^= -1;
          for (var s = v; s < b; s++)
            p = p >>> 8 ^ c[255 & (p ^ m.charCodeAt(s))];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, A, u) {
      u.base64 = !1, u.binary = !1, u.dir = !1, u.createFolders = !0, u.date = null, u.compression = null, u.compressionOptions = null, u.comment = null, u.unixPermissions = null, u.dosPermissions = null;
    }, {}], 6: [function(e, A, u) {
      var r = null;
      r = typeof Promise < "u" ? Promise : e("lie"), A.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(e, A, u) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), n = e("./utils"), o = e("./stream/GenericWorker"), p = r ? "uint8array" : "array";
      function m(g, v) {
        o.call(this, "FlateWorker/" + g), this._pako = null, this._pakoAction = g, this._pakoOptions = v, this.meta = {};
      }
      u.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(g) {
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
      }, u.compressWorker = function(g) {
        return new m("Deflate", g);
      }, u.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, A, u) {
      function r(c, b) {
        var s, f = "";
        for (s = 0; s < b; s++)
          f += String.fromCharCode(255 & c), c >>>= 8;
        return f;
      }
      function a(c, b, s, f, h, w) {
        var C, R, N = c.file, L = c.compression, T = w !== p.utf8encode, Y = n.transformTo("string", w(N.name)), W = n.transformTo("string", p.utf8encode(N.name)), X = N.comment, rt = n.transformTo("string", w(X)), E = n.transformTo("string", p.utf8encode(X)), _ = W.length !== N.name.length, i = E.length !== X.length, j = "", it = "", S = "", G = N.dir, B = N.date, D = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        b && !s || (D.crc32 = c.crc32, D.compressedSize = c.compressedSize, D.uncompressedSize = c.uncompressedSize);
        var x = 0;
        b && (x |= 8), T || !_ && !i || (x |= 2048);
        var F = 0, K = 0;
        G && (F |= 16), h === "UNIX" ? (K = 798, F |= function(H, lt) {
          var ft = H;
          return H || (ft = lt ? 16893 : 33204), (65535 & ft) << 16;
        }(N.unixPermissions, G)) : (K = 20, F |= function(H) {
          return 63 & (H || 0);
        }(N.dosPermissions)), C = B.getUTCHours(), C <<= 6, C |= B.getUTCMinutes(), C <<= 5, C |= B.getUTCSeconds() / 2, R = B.getUTCFullYear() - 1980, R <<= 4, R |= B.getUTCMonth() + 1, R <<= 5, R |= B.getUTCDate(), _ && (it = r(1, 1) + r(m(Y), 4) + W, j += "up" + r(it.length, 2) + it), i && (S = r(1, 1) + r(m(rt), 4) + E, j += "uc" + r(S.length, 2) + S);
        var P = "";
        return P += `
\0`, P += r(x, 2), P += L.magic, P += r(C, 2), P += r(R, 2), P += r(D.crc32, 4), P += r(D.compressedSize, 4), P += r(D.uncompressedSize, 4), P += r(Y.length, 2), P += r(j.length, 2), { fileRecord: g.LOCAL_FILE_HEADER + P + Y + j, dirRecord: g.CENTRAL_FILE_HEADER + r(K, 2) + P + r(rt.length, 2) + "\0\0\0\0" + r(F, 4) + r(f, 4) + Y + j + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), g = e("../signature");
      function v(c, b, s, f) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = b, this.zipPlatform = s, this.encodeFileName = f, this.streamFiles = c, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(v, o), v.prototype.push = function(c) {
        var b = c.meta.percent || 0, s = this.entriesCount, f = this._sources.length;
        this.accumulate ? this.contentBuffer.push(c) : (this.bytesWritten += c.data.length, o.prototype.push.call(this, { data: c.data, meta: { currentFile: this.currentFile, percent: s ? (b + 100 * (s - f - 1)) / s : 100 } }));
      }, v.prototype.openedSource = function(c) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = c.file.name;
        var b = this.streamFiles && !c.file.dir;
        if (b) {
          var s = a(c, b, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, v.prototype.closedSource = function(c) {
        this.accumulate = !1;
        var b = this.streamFiles && !c.file.dir, s = a(c, b, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(s.dirRecord), b)
          this.push({ data: function(f) {
            return g.DATA_DESCRIPTOR + r(f.crc32, 4) + r(f.compressedSize, 4) + r(f.uncompressedSize, 4);
          }(c), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, v.prototype.flush = function() {
        for (var c = this.bytesWritten, b = 0; b < this.dirRecords.length; b++)
          this.push({ data: this.dirRecords[b], meta: { percent: 100 } });
        var s = this.bytesWritten - c, f = function(h, w, C, R, N) {
          var L = n.transformTo("string", N(R));
          return g.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(h, 2) + r(h, 2) + r(w, 4) + r(C, 4) + r(L.length, 2) + L;
        }(this.dirRecords.length, s, c, this.zipComment, this.encodeFileName);
        this.push({ data: f, meta: { percent: 100 } });
      }, v.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, v.prototype.registerPrevious = function(c) {
        this._sources.push(c);
        var b = this;
        return c.on("data", function(s) {
          b.processChunk(s);
        }), c.on("end", function() {
          b.closedSource(b.previous.streamInfo), b._sources.length ? b.prepareNextSource() : b.end();
        }), c.on("error", function(s) {
          b.error(s);
        }), this;
      }, v.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, v.prototype.error = function(c) {
        var b = this._sources;
        if (!o.prototype.error.call(this, c))
          return !1;
        for (var s = 0; s < b.length; s++)
          try {
            b[s].error(c);
          } catch {
          }
        return !0;
      }, v.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var c = this._sources, b = 0; b < c.length; b++)
          c[b].lock();
      }, A.exports = v;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, A, u) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      u.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), g = 0;
        try {
          n.forEach(function(v, c) {
            g++;
            var b = function(w, C) {
              var R = w || C, N = r[R];
              if (!N)
                throw new Error(R + " is not a valid compression method !");
              return N;
            }(c.options.compression, o.compression), s = c.options.compressionOptions || o.compressionOptions || {}, f = c.dir, h = c.date;
            c._compressWorker(b, s).withStreamInfo("file", { name: v, dir: f, date: h, comment: c.comment || "", unixPermissions: c.unixPermissions, dosPermissions: c.dosPermissions }).pipe(m);
          }), m.entriesCount = g;
        } catch (v) {
          m.error(v);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, A, u) {
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
      }, r.external = e("./external"), A.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, A, u) {
      var r = e("./utils"), a = e("./external"), n = e("./utf8"), o = e("./zipEntries"), p = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
      function g(v) {
        return new a.Promise(function(c, b) {
          var s = v.decompressed.getContentWorker().pipe(new p());
          s.on("error", function(f) {
            b(f);
          }).on("end", function() {
            s.streamInfo.crc32 !== v.decompressed.crc32 ? b(new Error("Corrupted zip : CRC32 mismatch")) : c();
          }).resume();
        });
      }
      A.exports = function(v, c) {
        var b = this;
        return c = r.extend(c || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(v) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", v, !0, c.optimizedBinaryString, c.base64).then(function(s) {
          var f = new o(c);
          return f.load(s), f;
        }).then(function(s) {
          var f = [a.Promise.resolve(s)], h = s.files;
          if (c.checkCRC32)
            for (var w = 0; w < h.length; w++)
              f.push(g(h[w]));
          return a.Promise.all(f);
        }).then(function(s) {
          for (var f = s.shift(), h = f.files, w = 0; w < h.length; w++) {
            var C = h[w], R = C.fileNameStr, N = r.resolve(C.fileNameStr);
            b.file(N, C.decompressed, { binary: !0, optimizedBinaryString: !0, date: C.date, dir: C.dir, comment: C.fileCommentStr.length ? C.fileCommentStr : null, unixPermissions: C.unixPermissions, dosPermissions: C.dosPermissions, createFolders: c.createFolders }), C.dir || (b.file(N).unsafeOriginalName = R);
          }
          return f.zipComment.length && (b.comment = f.zipComment), b;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, A, u) {
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
      }, A.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, A, u) {
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
      }, A.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, A, u) {
      A.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, a) {
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
    }, {}], 15: [function(e, A, u) {
      function r(N, L, T) {
        var Y, W = n.getTypeOf(L), X = n.extend(T || {}, m);
        X.date = X.date || /* @__PURE__ */ new Date(), X.compression !== null && (X.compression = X.compression.toUpperCase()), typeof X.unixPermissions == "string" && (X.unixPermissions = parseInt(X.unixPermissions, 8)), X.unixPermissions && 16384 & X.unixPermissions && (X.dir = !0), X.dosPermissions && 16 & X.dosPermissions && (X.dir = !0), X.dir && (N = h(N)), X.createFolders && (Y = f(N)) && w.call(this, Y, !0);
        var rt = W === "string" && X.binary === !1 && X.base64 === !1;
        T && T.binary !== void 0 || (X.binary = !rt), (L instanceof g && L.uncompressedSize === 0 || X.dir || !L || L.length === 0) && (X.base64 = !1, X.binary = !0, L = "", X.compression = "STORE", W = "string");
        var E = null;
        E = L instanceof g || L instanceof o ? L : b.isNode && b.isStream(L) ? new s(N, L) : n.prepareContent(N, L, X.binary, X.optimizedBinaryString, X.base64);
        var _ = new v(N, E, X);
        this.files[N] = _;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), g = e("./compressedObject"), v = e("./zipObject"), c = e("./generate"), b = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), f = function(N) {
        N.slice(-1) === "/" && (N = N.substring(0, N.length - 1));
        var L = N.lastIndexOf("/");
        return 0 < L ? N.substring(0, L) : "";
      }, h = function(N) {
        return N.slice(-1) !== "/" && (N += "/"), N;
      }, w = function(N, L) {
        return L = L !== void 0 ? L : m.createFolders, N = h(N), this.files[N] || r.call(this, N, null, { dir: !0, createFolders: L }), this.files[N];
      };
      function C(N) {
        return Object.prototype.toString.call(N) === "[object RegExp]";
      }
      var R = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(N) {
        var L, T, Y;
        for (L in this.files)
          Y = this.files[L], (T = L.slice(this.root.length, L.length)) && L.slice(0, this.root.length) === this.root && N(T, Y);
      }, filter: function(N) {
        var L = [];
        return this.forEach(function(T, Y) {
          N(T, Y) && L.push(Y);
        }), L;
      }, file: function(N, L, T) {
        if (arguments.length !== 1)
          return N = this.root + N, r.call(this, N, L, T), this;
        if (C(N)) {
          var Y = N;
          return this.filter(function(X, rt) {
            return !rt.dir && Y.test(X);
          });
        }
        var W = this.files[this.root + N];
        return W && !W.dir ? W : null;
      }, folder: function(N) {
        if (!N)
          return this;
        if (C(N))
          return this.filter(function(W, X) {
            return X.dir && N.test(W);
          });
        var L = this.root + N, T = w.call(this, L), Y = this.clone();
        return Y.root = T.name, Y;
      }, remove: function(N) {
        N = this.root + N;
        var L = this.files[N];
        if (L || (N.slice(-1) !== "/" && (N += "/"), L = this.files[N]), L && !L.dir)
          delete this.files[N];
        else
          for (var T = this.filter(function(W, X) {
            return X.name.slice(0, N.length) === N;
          }), Y = 0; Y < T.length; Y++)
            delete this.files[T[Y].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(N) {
        var L, T = {};
        try {
          if ((T = n.extend(N || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = T.type.toLowerCase(), T.compression = T.compression.toUpperCase(), T.type === "binarystring" && (T.type = "string"), !T.type)
            throw new Error("No output type specified.");
          n.checkSupport(T.type), T.platform !== "darwin" && T.platform !== "freebsd" && T.platform !== "linux" && T.platform !== "sunos" || (T.platform = "UNIX"), T.platform === "win32" && (T.platform = "DOS");
          var Y = T.comment || this.comment || "";
          L = c.generateWorker(this, T, Y);
        } catch (W) {
          (L = new o("error")).error(W);
        }
        return new p(L, T.type || "string", T.mimeType);
      }, generateAsync: function(N, L) {
        return this.generateInternalStream(N).accumulate(L);
      }, generateNodeStream: function(N, L) {
        return (N = N || {}).type || (N.type = "nodebuffer"), this.generateInternalStream(N).toNodejsStream(L);
      } };
      A.exports = R;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, A, u) {
      A.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, A, u) {
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
      }, A.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, A, u) {
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
      } }, A.exports = a;
    }, { "../utils": 32 }], 19: [function(e, A, u) {
      var r = e("./Uint8ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, A.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, A, u) {
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
      }, A.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, A, u) {
      var r = e("./ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, A.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, A, u) {
      var r = e("../utils"), a = e("../support"), n = e("./ArrayReader"), o = e("./StringReader"), p = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      A.exports = function(g) {
        var v = r.getTypeOf(g);
        return r.checkSupport(v), v !== "string" || a.uint8array ? v === "nodebuffer" ? new p(g) : a.uint8array ? new m(r.transformTo("uint8array", g)) : new n(r.transformTo("array", g)) : new o(g);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, A, u) {
      u.LOCAL_FILE_HEADER = "PK", u.CENTRAL_FILE_HEADER = "PK", u.CENTRAL_DIRECTORY_END = "PK", u.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", u.ZIP64_CENTRAL_DIRECTORY_END = "PK", u.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, A, u) {
      var r = e("./GenericWorker"), a = e("../utils");
      function n(o) {
        r.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(n, r), n.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, A.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, A, u) {
      var r = e("./GenericWorker"), a = e("../crc32");
      function n() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(n, r), n.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, A.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, A, u) {
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
      }, A.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, A, u) {
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
      }, A.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, A, u) {
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
      } }, A.exports = r;
    }, {}], 29: [function(e, A, u) {
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), g = null;
      if (p.nodestream)
        try {
          g = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function v(b, s) {
        return new m.Promise(function(f, h) {
          var w = [], C = b._internalType, R = b._outputType, N = b._mimeType;
          b.on("data", function(L, T) {
            w.push(L), s && s(T);
          }).on("error", function(L) {
            w = [], h(L);
          }).on("end", function() {
            try {
              var L = function(T, Y, W) {
                switch (T) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", Y), W);
                  case "base64":
                    return o.encode(Y);
                  default:
                    return r.transformTo(T, Y);
                }
              }(R, function(T, Y) {
                var W, X = 0, rt = null, E = 0;
                for (W = 0; W < Y.length; W++)
                  E += Y[W].length;
                switch (T) {
                  case "string":
                    return Y.join("");
                  case "array":
                    return Array.prototype.concat.apply([], Y);
                  case "uint8array":
                    for (rt = new Uint8Array(E), W = 0; W < Y.length; W++)
                      rt.set(Y[W], X), X += Y[W].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(Y);
                  default:
                    throw new Error("concat : unsupported type '" + T + "'");
                }
              }(C, w), N);
              f(L);
            } catch (T) {
              h(T);
            }
            w = [];
          }).resume();
        });
      }
      function c(b, s, f) {
        var h = s;
        switch (s) {
          case "blob":
          case "arraybuffer":
            h = "uint8array";
            break;
          case "base64":
            h = "string";
        }
        try {
          this._internalType = h, this._outputType = s, this._mimeType = f, r.checkSupport(h), this._worker = b.pipe(new a(h)), b.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      c.prototype = { accumulate: function(b) {
        return v(this, b);
      }, on: function(b, s) {
        var f = this;
        return b === "data" ? this._worker.on(b, function(h) {
          s.call(f, h.data, h.meta);
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
      } }, A.exports = c;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, A, u) {
      if (u.base64 = !0, u.array = !0, u.string = !0, u.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", u.nodebuffer = typeof Buffer < "u", u.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        u.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          u.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var a = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            a.append(r), u.blob = a.getBlob("application/zip").size === 0;
          } catch {
            u.blob = !1;
          }
        }
      }
      try {
        u.nodestream = !!e("readable-stream").Readable;
      } catch {
        u.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, A, u) {
      for (var r = e("./utils"), a = e("./support"), n = e("./nodejsUtils"), o = e("./stream/GenericWorker"), p = new Array(256), m = 0; m < 256; m++)
        p[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      p[254] = p[254] = 1;
      function g() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function v() {
        o.call(this, "utf-8 encode");
      }
      u.utf8encode = function(c) {
        return a.nodebuffer ? n.newBufferFrom(c, "utf-8") : function(b) {
          var s, f, h, w, C, R = b.length, N = 0;
          for (w = 0; w < R; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < R && (64512 & (h = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), w++), N += f < 128 ? 1 : f < 2048 ? 2 : f < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(N) : new Array(N), w = C = 0; C < N; w++)
            (64512 & (f = b.charCodeAt(w))) == 55296 && w + 1 < R && (64512 & (h = b.charCodeAt(w + 1))) == 56320 && (f = 65536 + (f - 55296 << 10) + (h - 56320), w++), f < 128 ? s[C++] = f : (f < 2048 ? s[C++] = 192 | f >>> 6 : (f < 65536 ? s[C++] = 224 | f >>> 12 : (s[C++] = 240 | f >>> 18, s[C++] = 128 | f >>> 12 & 63), s[C++] = 128 | f >>> 6 & 63), s[C++] = 128 | 63 & f);
          return s;
        }(c);
      }, u.utf8decode = function(c) {
        return a.nodebuffer ? r.transformTo("nodebuffer", c).toString("utf-8") : function(b) {
          var s, f, h, w, C = b.length, R = new Array(2 * C);
          for (s = f = 0; s < C; )
            if ((h = b[s++]) < 128)
              R[f++] = h;
            else if (4 < (w = p[h]))
              R[f++] = 65533, s += w - 1;
            else {
              for (h &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < C; )
                h = h << 6 | 63 & b[s++], w--;
              1 < w ? R[f++] = 65533 : h < 65536 ? R[f++] = h : (h -= 65536, R[f++] = 55296 | h >> 10 & 1023, R[f++] = 56320 | 1023 & h);
            }
          return R.length !== f && (R.subarray ? R = R.subarray(0, f) : R.length = f), r.applyFromCharCode(R);
        }(c = r.transformTo(a.uint8array ? "uint8array" : "array", c));
      }, r.inherits(g, o), g.prototype.processChunk = function(c) {
        var b = r.transformTo(a.uint8array ? "uint8array" : "array", c.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = b;
            (b = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), b.set(s, this.leftOver.length);
          } else
            b = this.leftOver.concat(b);
          this.leftOver = null;
        }
        var f = function(w, C) {
          var R;
          for ((C = C || w.length) > w.length && (C = w.length), R = C - 1; 0 <= R && (192 & w[R]) == 128; )
            R--;
          return R < 0 || R === 0 ? C : R + p[w[R]] > C ? R : C;
        }(b), h = b;
        f !== b.length && (a.uint8array ? (h = b.subarray(0, f), this.leftOver = b.subarray(f, b.length)) : (h = b.slice(0, f), this.leftOver = b.slice(f, b.length))), this.push({ data: u.utf8decode(h), meta: c.meta });
      }, g.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: u.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, u.Utf8DecodeWorker = g, r.inherits(v, o), v.prototype.processChunk = function(c) {
        this.push({ data: u.utf8encode(c.data), meta: c.meta });
      }, u.Utf8EncodeWorker = v;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, A, u) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function p(s) {
        return s;
      }
      function m(s, f) {
        for (var h = 0; h < s.length; ++h)
          f[h] = 255 & s.charCodeAt(h);
        return f;
      }
      e("setimmediate"), u.newBlob = function(s, f) {
        u.checkSupport("blob");
        try {
          return new Blob([s], { type: f });
        } catch {
          try {
            var h = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return h.append(s), h.getBlob(f);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var g = { stringifyByChunk: function(s, f, h) {
        var w = [], C = 0, R = s.length;
        if (R <= h)
          return String.fromCharCode.apply(null, s);
        for (; C < R; )
          f === "array" || f === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(C, Math.min(C + h, R)))) : w.push(String.fromCharCode.apply(null, s.subarray(C, Math.min(C + h, R)))), C += h;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var f = "", h = 0; h < s.length; h++)
          f += String.fromCharCode(s[h]);
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
        var f = 65536, h = u.getTypeOf(s), w = !0;
        if (h === "uint8array" ? w = g.applyCanBeUsed.uint8array : h === "nodebuffer" && (w = g.applyCanBeUsed.nodebuffer), w)
          for (; 1 < f; )
            try {
              return g.stringifyByChunk(s, h, f);
            } catch {
              f = Math.floor(f / 2);
            }
        return g.stringifyByChar(s);
      }
      function c(s, f) {
        for (var h = 0; h < s.length; h++)
          f[h] = s[h];
        return f;
      }
      u.applyFromCharCode = v;
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
        return c(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, b.uint8array = { string: v, array: function(s) {
        return c(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, b.nodebuffer = { string: v, array: function(s) {
        return c(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return b.nodebuffer.uint8array(s).buffer;
      }, uint8array: function(s) {
        return c(s, new Uint8Array(s.length));
      }, nodebuffer: p }, u.transformTo = function(s, f) {
        if (f = f || "", !s)
          return f;
        u.checkSupport(s);
        var h = u.getTypeOf(f);
        return b[h][s](f);
      }, u.resolve = function(s) {
        for (var f = s.split("/"), h = [], w = 0; w < f.length; w++) {
          var C = f[w];
          C === "." || C === "" && w !== 0 && w !== f.length - 1 || (C === ".." ? h.pop() : h.push(C));
        }
        return h.join("/");
      }, u.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, u.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, u.MAX_VALUE_16BITS = 65535, u.MAX_VALUE_32BITS = -1, u.pretty = function(s) {
        var f, h, w = "";
        for (h = 0; h < (s || "").length; h++)
          w += "\\x" + ((f = s.charCodeAt(h)) < 16 ? "0" : "") + f.toString(16).toUpperCase();
        return w;
      }, u.delay = function(s, f, h) {
        setImmediate(function() {
          s.apply(h || null, f || []);
        });
      }, u.inherits = function(s, f) {
        function h() {
        }
        h.prototype = f.prototype, s.prototype = new h();
      }, u.extend = function() {
        var s, f, h = {};
        for (s = 0; s < arguments.length; s++)
          for (f in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], f) && h[f] === void 0 && (h[f] = arguments[s][f]);
        return h;
      }, u.prepareContent = function(s, f, h, w, C) {
        return o.Promise.resolve(f).then(function(R) {
          return r.blob && (R instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(R)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(N, L) {
            var T = new FileReader();
            T.onload = function(Y) {
              N(Y.target.result);
            }, T.onerror = function(Y) {
              L(Y.target.error);
            }, T.readAsArrayBuffer(R);
          }) : R;
        }).then(function(R) {
          var N = u.getTypeOf(R);
          return N ? (N === "arraybuffer" ? R = u.transformTo("uint8array", R) : N === "string" && (C ? R = a.decode(R) : h && w !== !0 && (R = function(L) {
            return m(L, r.uint8array ? new Uint8Array(L.length) : new Array(L.length));
          }(R))), R) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, A, u) {
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
        var c = this.reader.index;
        this.reader.setIndex(g);
        var b = this.reader.readString(4) === v;
        return this.reader.setIndex(c), b;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var g = this.reader.readData(this.zipCommentLength), v = p.uint8array ? "uint8array" : "array", c = a.transformTo(v, g);
        this.zipComment = this.loadOptions.decodeFileName(c);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var g, v, c, b = this.zip64EndOfCentralSize - 44; 0 < b; )
          g = this.reader.readInt(2), v = this.reader.readInt(4), c = this.reader.readData(v), this.zip64ExtensibleData[g] = { id: g, length: v, value: c };
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
        var c = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (c += 20, c += 12 + this.zip64EndOfCentralSize);
        var b = v - c;
        if (0 < b)
          this.isSignature(v, n.CENTRAL_FILE_HEADER) || (this.reader.zero = b);
        else if (b < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(b) + " bytes.");
      }, prepareReader: function(g) {
        this.reader = r(g);
      }, load: function(g) {
        this.prepareReader(g), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, A.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, A, u) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), g = e("./support");
      function v(c, b) {
        this.options = c, this.loadOptions = b;
      }
      v.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(c) {
        var b, s;
        if (c.skip(22), this.fileNameLength = c.readInt(2), s = c.readInt(2), this.fileName = c.readData(this.fileNameLength), c.skip(s), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((b = function(f) {
          for (var h in m)
            if (Object.prototype.hasOwnProperty.call(m, h) && m[h].magic === f)
              return m[h];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, b, c.readData(this.compressedSize));
      }, readCentralPart: function(c) {
        this.versionMadeBy = c.readInt(2), c.skip(2), this.bitFlag = c.readInt(2), this.compressionMethod = c.readString(2), this.date = c.readDate(), this.crc32 = c.readInt(4), this.compressedSize = c.readInt(4), this.uncompressedSize = c.readInt(4);
        var b = c.readInt(2);
        if (this.extraFieldsLength = c.readInt(2), this.fileCommentLength = c.readInt(2), this.diskNumberStart = c.readInt(2), this.internalFileAttributes = c.readInt(2), this.externalFileAttributes = c.readInt(4), this.localHeaderOffset = c.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        c.skip(b), this.readExtraFields(c), this.parseZIP64ExtraField(c), this.fileComment = c.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var c = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), c == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), c == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var c = r(this.extraFields[1].value);
          this.uncompressedSize === a.MAX_VALUE_32BITS && (this.uncompressedSize = c.readInt(8)), this.compressedSize === a.MAX_VALUE_32BITS && (this.compressedSize = c.readInt(8)), this.localHeaderOffset === a.MAX_VALUE_32BITS && (this.localHeaderOffset = c.readInt(8)), this.diskNumberStart === a.MAX_VALUE_32BITS && (this.diskNumberStart = c.readInt(4));
        }
      }, readExtraFields: function(c) {
        var b, s, f, h = c.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); c.index + 4 < h; )
          b = c.readInt(2), s = c.readInt(2), f = c.readData(s), this.extraFields[b] = { id: b, length: s, value: f };
        c.setIndex(h);
      }, handleUTF8: function() {
        var c = g.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
        else {
          var b = this.findExtraFieldUnicodePath();
          if (b !== null)
            this.fileNameStr = b;
          else {
            var s = a.transformTo(c, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(s);
          }
          var f = this.findExtraFieldUnicodeComment();
          if (f !== null)
            this.fileCommentStr = f;
          else {
            var h = a.transformTo(c, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(h);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var c = this.extraFields[28789];
        if (c) {
          var b = r(c.value);
          return b.readInt(1) !== 1 || o(this.fileName) !== b.readInt(4) ? null : p.utf8decode(b.readData(c.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var c = this.extraFields[25461];
        if (c) {
          var b = r(c.value);
          return b.readInt(1) !== 1 || o(this.fileComment) !== b.readInt(4) ? null : p.utf8decode(b.readData(c.length - 5));
        }
        return null;
      } }, A.exports = v;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, A, u) {
      function r(b, s, f) {
        this.name = b, this.dir = f.dir, this.date = f.date, this.comment = f.comment, this.unixPermissions = f.unixPermissions, this.dosPermissions = f.dosPermissions, this._data = s, this._dataBinary = f.binary, this.options = { compression: f.compression, compressionOptions: f.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(b) {
        var s = null, f = "string";
        try {
          if (!b)
            throw new Error("No output type specified.");
          var h = (f = b.toLowerCase()) === "string" || f === "text";
          f !== "binarystring" && f !== "text" || (f = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !h && (s = s.pipe(new o.Utf8EncodeWorker())), !w && h && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (C) {
          (s = new m("error")).error(C);
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
      }, c = 0; c < g.length; c++)
        r.prototype[g[c]] = v;
      A.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, A, u) {
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
        var c = [];
        function b() {
          var s, f;
          n = !0;
          for (var h = c.length; h; ) {
            for (f = c, c = [], s = -1; ++s < h; )
              f[s]();
            h = c.length;
          }
          n = !1;
        }
        A.exports = function(s) {
          c.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Wt < "u" ? Wt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, A, u) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function g(h) {
        if (typeof h != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, h !== a && s(this, h);
      }
      function v(h, w, C) {
        this.promise = h, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      function c(h, w, C) {
        r(function() {
          var R;
          try {
            R = w(C);
          } catch (N) {
            return n.reject(h, N);
          }
          R === h ? n.reject(h, new TypeError("Cannot resolve promise with itself")) : n.resolve(h, R);
        });
      }
      function b(h) {
        var w = h && h.then;
        if (h && (typeof h == "object" || typeof h == "function") && typeof w == "function")
          return function() {
            w.apply(h, arguments);
          };
      }
      function s(h, w) {
        var C = !1;
        function R(T) {
          C || (C = !0, n.reject(h, T));
        }
        function N(T) {
          C || (C = !0, n.resolve(h, T));
        }
        var L = f(function() {
          w(N, R);
        });
        L.status === "error" && R(L.value);
      }
      function f(h, w) {
        var C = {};
        try {
          C.value = h(w), C.status = "success";
        } catch (R) {
          C.status = "error", C.value = R;
        }
        return C;
      }
      (A.exports = g).prototype.finally = function(h) {
        if (typeof h != "function")
          return this;
        var w = this.constructor;
        return this.then(function(C) {
          return w.resolve(h()).then(function() {
            return C;
          });
        }, function(C) {
          return w.resolve(h()).then(function() {
            throw C;
          });
        });
      }, g.prototype.catch = function(h) {
        return this.then(null, h);
      }, g.prototype.then = function(h, w) {
        if (typeof h != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var C = new this.constructor(a);
        return this.state !== m ? c(C, this.state === p ? h : w, this.outcome) : this.queue.push(new v(C, h, w)), C;
      }, v.prototype.callFulfilled = function(h) {
        n.resolve(this.promise, h);
      }, v.prototype.otherCallFulfilled = function(h) {
        c(this.promise, this.onFulfilled, h);
      }, v.prototype.callRejected = function(h) {
        n.reject(this.promise, h);
      }, v.prototype.otherCallRejected = function(h) {
        c(this.promise, this.onRejected, h);
      }, n.resolve = function(h, w) {
        var C = f(b, w);
        if (C.status === "error")
          return n.reject(h, C.value);
        var R = C.value;
        if (R)
          s(h, R);
        else {
          h.state = p, h.outcome = w;
          for (var N = -1, L = h.queue.length; ++N < L; )
            h.queue[N].callFulfilled(w);
        }
        return h;
      }, n.reject = function(h, w) {
        h.state = o, h.outcome = w;
        for (var C = -1, R = h.queue.length; ++C < R; )
          h.queue[C].callRejected(w);
        return h;
      }, g.resolve = function(h) {
        return h instanceof this ? h : n.resolve(new this(a), h);
      }, g.reject = function(h) {
        var w = new this(a);
        return n.reject(w, h);
      }, g.all = function(h) {
        var w = this;
        if (Object.prototype.toString.call(h) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = h.length, R = !1;
        if (!C)
          return this.resolve([]);
        for (var N = new Array(C), L = 0, T = -1, Y = new this(a); ++T < C; )
          W(h[T], T);
        return Y;
        function W(X, rt) {
          w.resolve(X).then(function(E) {
            N[rt] = E, ++L !== C || R || (R = !0, n.resolve(Y, N));
          }, function(E) {
            R || (R = !0, n.reject(Y, E));
          });
        }
      }, g.race = function(h) {
        var w = this;
        if (Object.prototype.toString.call(h) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = h.length, R = !1;
        if (!C)
          return this.resolve([]);
        for (var N = -1, L = new this(a); ++N < C; )
          T = h[N], w.resolve(T).then(function(Y) {
            R || (R = !0, n.resolve(L, Y));
          }, function(Y) {
            R || (R = !0, n.reject(L, Y));
          });
        var T;
        return L;
      };
    }, { immediate: 36 }], 38: [function(e, A, u) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), A.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, A, u) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, g = 0, v = -1, c = 0, b = 8;
      function s(h) {
        if (!(this instanceof s))
          return new s(h);
        this.options = a.assign({ level: v, method: b, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, h || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var C = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (C !== g)
          throw new Error(o[C]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var R;
          if (R = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (C = r.deflateSetDictionary(this.strm, R)) !== g)
            throw new Error(o[C]);
          this._dict_set = !0;
        }
      }
      function f(h, w) {
        var C = new s(w);
        if (C.push(h, !0), C.err)
          throw C.msg || o[C.err];
        return C.result;
      }
      s.prototype.push = function(h, w) {
        var C, R, N = this.strm, L = this.options.chunkSize;
        if (this.ended)
          return !1;
        R = w === ~~w ? w : w === !0 ? 4 : 0, typeof h == "string" ? N.input = n.string2buf(h) : m.call(h) === "[object ArrayBuffer]" ? N.input = new Uint8Array(h) : N.input = h, N.next_in = 0, N.avail_in = N.input.length;
        do {
          if (N.avail_out === 0 && (N.output = new a.Buf8(L), N.next_out = 0, N.avail_out = L), (C = r.deflate(N, R)) !== 1 && C !== g)
            return this.onEnd(C), !(this.ended = !0);
          N.avail_out !== 0 && (N.avail_in !== 0 || R !== 4 && R !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(N.output, N.next_out))) : this.onData(a.shrinkBuf(N.output, N.next_out)));
        } while ((0 < N.avail_in || N.avail_out === 0) && C !== 1);
        return R === 4 ? (C = r.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === g) : R !== 2 || (this.onEnd(g), !(N.avail_out = 0));
      }, s.prototype.onData = function(h) {
        this.chunks.push(h);
      }, s.prototype.onEnd = function(h) {
        h === g && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = h, this.msg = this.strm.msg;
      }, u.Deflate = s, u.deflate = f, u.deflateRaw = function(h, w) {
        return (w = w || {}).raw = !0, f(h, w);
      }, u.gzip = function(h, w) {
        return (w = w || {}).gzip = !0, f(h, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, A, u) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), g = e("./zlib/gzheader"), v = Object.prototype.toString;
      function c(s) {
        if (!(this instanceof c))
          return new c(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var f = this.options;
        f.raw && 0 <= f.windowBits && f.windowBits < 16 && (f.windowBits = -f.windowBits, f.windowBits === 0 && (f.windowBits = -15)), !(0 <= f.windowBits && f.windowBits < 16) || s && s.windowBits || (f.windowBits += 32), 15 < f.windowBits && f.windowBits < 48 && !(15 & f.windowBits) && (f.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var h = r.inflateInit2(this.strm, f.windowBits);
        if (h !== o.Z_OK)
          throw new Error(p[h]);
        this.header = new g(), r.inflateGetHeader(this.strm, this.header);
      }
      function b(s, f) {
        var h = new c(f);
        if (h.push(s, !0), h.err)
          throw h.msg || p[h.err];
        return h.result;
      }
      c.prototype.push = function(s, f) {
        var h, w, C, R, N, L, T = this.strm, Y = this.options.chunkSize, W = this.options.dictionary, X = !1;
        if (this.ended)
          return !1;
        w = f === ~~f ? f : f === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? T.input = n.binstring2buf(s) : v.call(s) === "[object ArrayBuffer]" ? T.input = new Uint8Array(s) : T.input = s, T.next_in = 0, T.avail_in = T.input.length;
        do {
          if (T.avail_out === 0 && (T.output = new a.Buf8(Y), T.next_out = 0, T.avail_out = Y), (h = r.inflate(T, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && W && (L = typeof W == "string" ? n.string2buf(W) : v.call(W) === "[object ArrayBuffer]" ? new Uint8Array(W) : W, h = r.inflateSetDictionary(this.strm, L)), h === o.Z_BUF_ERROR && X === !0 && (h = o.Z_OK, X = !1), h !== o.Z_STREAM_END && h !== o.Z_OK)
            return this.onEnd(h), !(this.ended = !0);
          T.next_out && (T.avail_out !== 0 && h !== o.Z_STREAM_END && (T.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = n.utf8border(T.output, T.next_out), R = T.next_out - C, N = n.buf2string(T.output, C), T.next_out = R, T.avail_out = Y - R, R && a.arraySet(T.output, T.output, C, R, 0), this.onData(N)) : this.onData(a.shrinkBuf(T.output, T.next_out)))), T.avail_in === 0 && T.avail_out === 0 && (X = !0);
        } while ((0 < T.avail_in || T.avail_out === 0) && h !== o.Z_STREAM_END);
        return h === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (h = r.inflateEnd(this.strm), this.onEnd(h), this.ended = !0, h === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(T.avail_out = 0));
      }, c.prototype.onData = function(s) {
        this.chunks.push(s);
      }, c.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, u.Inflate = c, u.inflate = b, u.inflateRaw = function(s, f) {
        return (f = f || {}).raw = !0, b(s, f);
      }, u.ungzip = b;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, A, u) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      u.assign = function(o) {
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
      }, u.shrinkBuf = function(o, p) {
        return o.length === p ? o : o.subarray ? o.subarray(0, p) : (o.length = p, o);
      };
      var a = { arraySet: function(o, p, m, g, v) {
        if (p.subarray && o.subarray)
          o.set(p.subarray(m, m + g), v);
        else
          for (var c = 0; c < g; c++)
            o[v + c] = p[m + c];
      }, flattenChunks: function(o) {
        var p, m, g, v, c, b;
        for (p = g = 0, m = o.length; p < m; p++)
          g += o[p].length;
        for (b = new Uint8Array(g), p = v = 0, m = o.length; p < m; p++)
          c = o[p], b.set(c, v), v += c.length;
        return b;
      } }, n = { arraySet: function(o, p, m, g, v) {
        for (var c = 0; c < g; c++)
          o[v + c] = p[m + c];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      u.setTyped = function(o) {
        o ? (u.Buf8 = Uint8Array, u.Buf16 = Uint16Array, u.Buf32 = Int32Array, u.assign(u, a)) : (u.Buf8 = Array, u.Buf16 = Array, u.Buf32 = Array, u.assign(u, n));
      }, u.setTyped(r);
    }, {}], 42: [function(e, A, u) {
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
        for (var c = "", b = 0; b < v; b++)
          c += String.fromCharCode(g[b]);
        return c;
      }
      o[254] = o[254] = 1, u.string2buf = function(g) {
        var v, c, b, s, f, h = g.length, w = 0;
        for (s = 0; s < h; s++)
          (64512 & (c = g.charCodeAt(s))) == 55296 && s + 1 < h && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (c = 65536 + (c - 55296 << 10) + (b - 56320), s++), w += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
        for (v = new r.Buf8(w), s = f = 0; f < w; s++)
          (64512 & (c = g.charCodeAt(s))) == 55296 && s + 1 < h && (64512 & (b = g.charCodeAt(s + 1))) == 56320 && (c = 65536 + (c - 55296 << 10) + (b - 56320), s++), c < 128 ? v[f++] = c : (c < 2048 ? v[f++] = 192 | c >>> 6 : (c < 65536 ? v[f++] = 224 | c >>> 12 : (v[f++] = 240 | c >>> 18, v[f++] = 128 | c >>> 12 & 63), v[f++] = 128 | c >>> 6 & 63), v[f++] = 128 | 63 & c);
        return v;
      }, u.buf2binstring = function(g) {
        return m(g, g.length);
      }, u.binstring2buf = function(g) {
        for (var v = new r.Buf8(g.length), c = 0, b = v.length; c < b; c++)
          v[c] = g.charCodeAt(c);
        return v;
      }, u.buf2string = function(g, v) {
        var c, b, s, f, h = v || g.length, w = new Array(2 * h);
        for (c = b = 0; c < h; )
          if ((s = g[c++]) < 128)
            w[b++] = s;
          else if (4 < (f = o[s]))
            w[b++] = 65533, c += f - 1;
          else {
            for (s &= f === 2 ? 31 : f === 3 ? 15 : 7; 1 < f && c < h; )
              s = s << 6 | 63 & g[c++], f--;
            1 < f ? w[b++] = 65533 : s < 65536 ? w[b++] = s : (s -= 65536, w[b++] = 55296 | s >> 10 & 1023, w[b++] = 56320 | 1023 & s);
          }
        return m(w, b);
      }, u.utf8border = function(g, v) {
        var c;
        for ((v = v || g.length) > g.length && (v = g.length), c = v - 1; 0 <= c && (192 & g[c]) == 128; )
          c--;
        return c < 0 || c === 0 ? v : c + o[g[c]] > v ? c : v;
      };
    }, { "./common": 41 }], 43: [function(e, A, u) {
      A.exports = function(r, a, n, o) {
        for (var p = 65535 & r | 0, m = r >>> 16 & 65535 | 0, g = 0; n !== 0; ) {
          for (n -= g = 2e3 < n ? 2e3 : n; m = m + (p = p + a[o++] | 0) | 0, --g; )
            ;
          p %= 65521, m %= 65521;
        }
        return p | m << 16 | 0;
      };
    }, {}], 44: [function(e, A, u) {
      A.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, A, u) {
      var r = function() {
        for (var a, n = [], o = 0; o < 256; o++) {
          a = o;
          for (var p = 0; p < 8; p++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          n[o] = a;
        }
        return n;
      }();
      A.exports = function(a, n, o, p) {
        var m = r, g = p + o;
        a ^= -1;
        for (var v = p; v < g; v++)
          a = a >>> 8 ^ m[255 & (a ^ n[v])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, A, u) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), g = 0, v = 4, c = 0, b = -2, s = -1, f = 4, h = 2, w = 8, C = 9, R = 286, N = 30, L = 19, T = 2 * R + 1, Y = 15, W = 3, X = 258, rt = X + W + 1, E = 42, _ = 113, i = 1, j = 2, it = 3, S = 4;
      function G(t, Q) {
        return t.msg = m[Q], Q;
      }
      function B(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function D(t) {
        for (var Q = t.length; 0 <= --Q; )
          t[Q] = 0;
      }
      function x(t) {
        var Q = t.state, V = Q.pending;
        V > t.avail_out && (V = t.avail_out), V !== 0 && (a.arraySet(t.output, Q.pending_buf, Q.pending_out, V, t.next_out), t.next_out += V, Q.pending_out += V, t.total_out += V, t.avail_out -= V, Q.pending -= V, Q.pending === 0 && (Q.pending_out = 0));
      }
      function F(t, Q) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, Q), t.block_start = t.strstart, x(t.strm);
      }
      function K(t, Q) {
        t.pending_buf[t.pending++] = Q;
      }
      function P(t, Q) {
        t.pending_buf[t.pending++] = Q >>> 8 & 255, t.pending_buf[t.pending++] = 255 & Q;
      }
      function H(t, Q) {
        var V, y, d = t.max_chain_length, I = t.strstart, z = t.prev_length, M = t.nice_match, O = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, U = t.window, $ = t.w_mask, J = t.prev, nt = t.strstart + X, dt = U[I + z - 1], ct = U[I + z];
        t.prev_length >= t.good_match && (d >>= 2), M > t.lookahead && (M = t.lookahead);
        do
          if (U[(V = Q) + z] === ct && U[V + z - 1] === dt && U[V] === U[I] && U[++V] === U[I + 1]) {
            I += 2, V++;
            do
              ;
            while (U[++I] === U[++V] && U[++I] === U[++V] && U[++I] === U[++V] && U[++I] === U[++V] && U[++I] === U[++V] && U[++I] === U[++V] && U[++I] === U[++V] && U[++I] === U[++V] && I < nt);
            if (y = X - (nt - I), I = nt - X, z < y) {
              if (t.match_start = Q, M <= (z = y))
                break;
              dt = U[I + z - 1], ct = U[I + z];
            }
          }
        while ((Q = J[Q & $]) > O && --d != 0);
        return z <= t.lookahead ? z : t.lookahead;
      }
      function lt(t) {
        var Q, V, y, d, I, z, M, O, U, $, J = t.w_size;
        do {
          if (d = t.window_size - t.lookahead - t.strstart, t.strstart >= J + (J - rt)) {
            for (a.arraySet(t.window, t.window, J, J, 0), t.match_start -= J, t.strstart -= J, t.block_start -= J, Q = V = t.hash_size; y = t.head[--Q], t.head[Q] = J <= y ? y - J : 0, --V; )
              ;
            for (Q = V = J; y = t.prev[--Q], t.prev[Q] = J <= y ? y - J : 0, --V; )
              ;
            d += J;
          }
          if (t.strm.avail_in === 0)
            break;
          if (z = t.strm, M = t.window, O = t.strstart + t.lookahead, U = d, $ = void 0, $ = z.avail_in, U < $ && ($ = U), V = $ === 0 ? 0 : (z.avail_in -= $, a.arraySet(M, z.input, z.next_in, $, O), z.state.wrap === 1 ? z.adler = o(z.adler, M, $, O) : z.state.wrap === 2 && (z.adler = p(z.adler, M, $, O)), z.next_in += $, z.total_in += $, $), t.lookahead += V, t.lookahead + t.insert >= W)
            for (I = t.strstart - t.insert, t.ins_h = t.window[I], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + W - 1]) & t.hash_mask, t.prev[I & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = I, I++, t.insert--, !(t.lookahead + t.insert < W)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function ft(t, Q) {
        for (var V, y; ; ) {
          if (t.lookahead < rt) {
            if (lt(t), t.lookahead < rt && Q === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (V = 0, t.lookahead >= W && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + W - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), V !== 0 && t.strstart - V <= t.w_size - rt && (t.match_length = H(t, V)), t.match_length >= W)
            if (y = n._tr_tally(t, t.strstart - t.match_start, t.match_length - W), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= W) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + W - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            y = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (y && (F(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < W - 1 ? t.strstart : W - 1, Q === v ? (F(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (F(t, !1), t.strm.avail_out === 0) ? i : j;
      }
      function at(t, Q) {
        for (var V, y, d; ; ) {
          if (t.lookahead < rt) {
            if (lt(t), t.lookahead < rt && Q === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (V = 0, t.lookahead >= W && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + W - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = W - 1, V !== 0 && t.prev_length < t.max_lazy_match && t.strstart - V <= t.w_size - rt && (t.match_length = H(t, V), t.match_length <= 5 && (t.strategy === 1 || t.match_length === W && 4096 < t.strstart - t.match_start) && (t.match_length = W - 1)), t.prev_length >= W && t.match_length <= t.prev_length) {
            for (d = t.strstart + t.lookahead - W, y = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - W), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= d && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + W - 1]) & t.hash_mask, V = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = W - 1, t.strstart++, y && (F(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((y = n._tr_tally(t, 0, t.window[t.strstart - 1])) && F(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (y = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < W - 1 ? t.strstart : W - 1, Q === v ? (F(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (F(t, !1), t.strm.avail_out === 0) ? i : j;
      }
      function st(t, Q, V, y, d) {
        this.good_length = t, this.max_lazy = Q, this.nice_length = V, this.max_chain = y, this.func = d;
      }
      function bt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * T), this.dyn_dtree = new a.Buf16(2 * (2 * N + 1)), this.bl_tree = new a.Buf16(2 * (2 * L + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(Y + 1), this.heap = new a.Buf16(2 * R + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * R + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function At(t) {
        var Q;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = h, (Q = t.state).pending = 0, Q.pending_out = 0, Q.wrap < 0 && (Q.wrap = -Q.wrap), Q.status = Q.wrap ? E : _, t.adler = Q.wrap === 2 ? 0 : 1, Q.last_flush = g, n._tr_init(Q), c) : G(t, b);
      }
      function ht(t) {
        var Q = At(t);
        return Q === c && function(V) {
          V.window_size = 2 * V.w_size, D(V.head), V.max_lazy_match = r[V.level].max_lazy, V.good_match = r[V.level].good_length, V.nice_match = r[V.level].nice_length, V.max_chain_length = r[V.level].max_chain, V.strstart = 0, V.block_start = 0, V.lookahead = 0, V.insert = 0, V.match_length = V.prev_length = W - 1, V.match_available = 0, V.ins_h = 0;
        }(t.state), Q;
      }
      function yt(t, Q, V, y, d, I) {
        if (!t)
          return b;
        var z = 1;
        if (Q === s && (Q = 6), y < 0 ? (z = 0, y = -y) : 15 < y && (z = 2, y -= 16), d < 1 || C < d || V !== w || y < 8 || 15 < y || Q < 0 || 9 < Q || I < 0 || f < I)
          return G(t, b);
        y === 8 && (y = 9);
        var M = new bt();
        return (t.state = M).strm = t, M.wrap = z, M.gzhead = null, M.w_bits = y, M.w_size = 1 << M.w_bits, M.w_mask = M.w_size - 1, M.hash_bits = d + 7, M.hash_size = 1 << M.hash_bits, M.hash_mask = M.hash_size - 1, M.hash_shift = ~~((M.hash_bits + W - 1) / W), M.window = new a.Buf8(2 * M.w_size), M.head = new a.Buf16(M.hash_size), M.prev = new a.Buf16(M.w_size), M.lit_bufsize = 1 << d + 6, M.pending_buf_size = 4 * M.lit_bufsize, M.pending_buf = new a.Buf8(M.pending_buf_size), M.d_buf = 1 * M.lit_bufsize, M.l_buf = 3 * M.lit_bufsize, M.level = Q, M.strategy = I, M.method = V, ht(t);
      }
      r = [new st(0, 0, 0, 0, function(t, Q) {
        var V = 65535;
        for (V > t.pending_buf_size - 5 && (V = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (lt(t), t.lookahead === 0 && Q === g)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var y = t.block_start + V;
          if ((t.strstart === 0 || t.strstart >= y) && (t.lookahead = t.strstart - y, t.strstart = y, F(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (F(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, Q === v ? (F(t, !0), t.strm.avail_out === 0 ? it : S) : (t.strstart > t.block_start && (F(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, ft), new st(4, 5, 16, 8, ft), new st(4, 6, 32, 32, ft), new st(4, 4, 16, 16, at), new st(8, 16, 32, 32, at), new st(8, 16, 128, 128, at), new st(8, 32, 128, 256, at), new st(32, 128, 258, 1024, at), new st(32, 258, 258, 4096, at)], u.deflateInit = function(t, Q) {
        return yt(t, Q, w, 15, 8, 0);
      }, u.deflateInit2 = yt, u.deflateReset = ht, u.deflateResetKeep = At, u.deflateSetHeader = function(t, Q) {
        return t && t.state ? t.state.wrap !== 2 ? b : (t.state.gzhead = Q, c) : b;
      }, u.deflate = function(t, Q) {
        var V, y, d, I;
        if (!t || !t.state || 5 < Q || Q < 0)
          return t ? G(t, b) : b;
        if (y = t.state, !t.output || !t.input && t.avail_in !== 0 || y.status === 666 && Q !== v)
          return G(t, t.avail_out === 0 ? -5 : b);
        if (y.strm = t, V = y.last_flush, y.last_flush = Q, y.status === E)
          if (y.wrap === 2)
            t.adler = 0, K(y, 31), K(y, 139), K(y, 8), y.gzhead ? (K(y, (y.gzhead.text ? 1 : 0) + (y.gzhead.hcrc ? 2 : 0) + (y.gzhead.extra ? 4 : 0) + (y.gzhead.name ? 8 : 0) + (y.gzhead.comment ? 16 : 0)), K(y, 255 & y.gzhead.time), K(y, y.gzhead.time >> 8 & 255), K(y, y.gzhead.time >> 16 & 255), K(y, y.gzhead.time >> 24 & 255), K(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), K(y, 255 & y.gzhead.os), y.gzhead.extra && y.gzhead.extra.length && (K(y, 255 & y.gzhead.extra.length), K(y, y.gzhead.extra.length >> 8 & 255)), y.gzhead.hcrc && (t.adler = p(t.adler, y.pending_buf, y.pending, 0)), y.gzindex = 0, y.status = 69) : (K(y, 0), K(y, 0), K(y, 0), K(y, 0), K(y, 0), K(y, y.level === 9 ? 2 : 2 <= y.strategy || y.level < 2 ? 4 : 0), K(y, 3), y.status = _);
          else {
            var z = w + (y.w_bits - 8 << 4) << 8;
            z |= (2 <= y.strategy || y.level < 2 ? 0 : y.level < 6 ? 1 : y.level === 6 ? 2 : 3) << 6, y.strstart !== 0 && (z |= 32), z += 31 - z % 31, y.status = _, P(y, z), y.strstart !== 0 && (P(y, t.adler >>> 16), P(y, 65535 & t.adler)), t.adler = 1;
          }
        if (y.status === 69)
          if (y.gzhead.extra) {
            for (d = y.pending; y.gzindex < (65535 & y.gzhead.extra.length) && (y.pending !== y.pending_buf_size || (y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), x(t), d = y.pending, y.pending !== y.pending_buf_size)); )
              K(y, 255 & y.gzhead.extra[y.gzindex]), y.gzindex++;
            y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), y.gzindex === y.gzhead.extra.length && (y.gzindex = 0, y.status = 73);
          } else
            y.status = 73;
        if (y.status === 73)
          if (y.gzhead.name) {
            d = y.pending;
            do {
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), x(t), d = y.pending, y.pending === y.pending_buf_size)) {
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
              if (y.pending === y.pending_buf_size && (y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), x(t), d = y.pending, y.pending === y.pending_buf_size)) {
                I = 1;
                break;
              }
              I = y.gzindex < y.gzhead.comment.length ? 255 & y.gzhead.comment.charCodeAt(y.gzindex++) : 0, K(y, I);
            } while (I !== 0);
            y.gzhead.hcrc && y.pending > d && (t.adler = p(t.adler, y.pending_buf, y.pending - d, d)), I === 0 && (y.status = 103);
          } else
            y.status = 103;
        if (y.status === 103 && (y.gzhead.hcrc ? (y.pending + 2 > y.pending_buf_size && x(t), y.pending + 2 <= y.pending_buf_size && (K(y, 255 & t.adler), K(y, t.adler >> 8 & 255), t.adler = 0, y.status = _)) : y.status = _), y.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return y.last_flush = -1, c;
        } else if (t.avail_in === 0 && B(Q) <= B(V) && Q !== v)
          return G(t, -5);
        if (y.status === 666 && t.avail_in !== 0)
          return G(t, -5);
        if (t.avail_in !== 0 || y.lookahead !== 0 || Q !== g && y.status !== 666) {
          var M = y.strategy === 2 ? function(O, U) {
            for (var $; ; ) {
              if (O.lookahead === 0 && (lt(O), O.lookahead === 0)) {
                if (U === g)
                  return i;
                break;
              }
              if (O.match_length = 0, $ = n._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++, $ && (F(O, !1), O.strm.avail_out === 0))
                return i;
            }
            return O.insert = 0, U === v ? (F(O, !0), O.strm.avail_out === 0 ? it : S) : O.last_lit && (F(O, !1), O.strm.avail_out === 0) ? i : j;
          }(y, Q) : y.strategy === 3 ? function(O, U) {
            for (var $, J, nt, dt, ct = O.window; ; ) {
              if (O.lookahead <= X) {
                if (lt(O), O.lookahead <= X && U === g)
                  return i;
                if (O.lookahead === 0)
                  break;
              }
              if (O.match_length = 0, O.lookahead >= W && 0 < O.strstart && (J = ct[nt = O.strstart - 1]) === ct[++nt] && J === ct[++nt] && J === ct[++nt]) {
                dt = O.strstart + X;
                do
                  ;
                while (J === ct[++nt] && J === ct[++nt] && J === ct[++nt] && J === ct[++nt] && J === ct[++nt] && J === ct[++nt] && J === ct[++nt] && J === ct[++nt] && nt < dt);
                O.match_length = X - (dt - nt), O.match_length > O.lookahead && (O.match_length = O.lookahead);
              }
              if (O.match_length >= W ? ($ = n._tr_tally(O, 1, O.match_length - W), O.lookahead -= O.match_length, O.strstart += O.match_length, O.match_length = 0) : ($ = n._tr_tally(O, 0, O.window[O.strstart]), O.lookahead--, O.strstart++), $ && (F(O, !1), O.strm.avail_out === 0))
                return i;
            }
            return O.insert = 0, U === v ? (F(O, !0), O.strm.avail_out === 0 ? it : S) : O.last_lit && (F(O, !1), O.strm.avail_out === 0) ? i : j;
          }(y, Q) : r[y.level].func(y, Q);
          if (M !== it && M !== S || (y.status = 666), M === i || M === it)
            return t.avail_out === 0 && (y.last_flush = -1), c;
          if (M === j && (Q === 1 ? n._tr_align(y) : Q !== 5 && (n._tr_stored_block(y, 0, 0, !1), Q === 3 && (D(y.head), y.lookahead === 0 && (y.strstart = 0, y.block_start = 0, y.insert = 0))), x(t), t.avail_out === 0))
            return y.last_flush = -1, c;
        }
        return Q !== v ? c : y.wrap <= 0 ? 1 : (y.wrap === 2 ? (K(y, 255 & t.adler), K(y, t.adler >> 8 & 255), K(y, t.adler >> 16 & 255), K(y, t.adler >> 24 & 255), K(y, 255 & t.total_in), K(y, t.total_in >> 8 & 255), K(y, t.total_in >> 16 & 255), K(y, t.total_in >> 24 & 255)) : (P(y, t.adler >>> 16), P(y, 65535 & t.adler)), x(t), 0 < y.wrap && (y.wrap = -y.wrap), y.pending !== 0 ? c : 1);
      }, u.deflateEnd = function(t) {
        var Q;
        return t && t.state ? (Q = t.state.status) !== E && Q !== 69 && Q !== 73 && Q !== 91 && Q !== 103 && Q !== _ && Q !== 666 ? G(t, b) : (t.state = null, Q === _ ? G(t, -3) : c) : b;
      }, u.deflateSetDictionary = function(t, Q) {
        var V, y, d, I, z, M, O, U, $ = Q.length;
        if (!t || !t.state || (I = (V = t.state).wrap) === 2 || I === 1 && V.status !== E || V.lookahead)
          return b;
        for (I === 1 && (t.adler = o(t.adler, Q, $, 0)), V.wrap = 0, $ >= V.w_size && (I === 0 && (D(V.head), V.strstart = 0, V.block_start = 0, V.insert = 0), U = new a.Buf8(V.w_size), a.arraySet(U, Q, $ - V.w_size, V.w_size, 0), Q = U, $ = V.w_size), z = t.avail_in, M = t.next_in, O = t.input, t.avail_in = $, t.next_in = 0, t.input = Q, lt(V); V.lookahead >= W; ) {
          for (y = V.strstart, d = V.lookahead - (W - 1); V.ins_h = (V.ins_h << V.hash_shift ^ V.window[y + W - 1]) & V.hash_mask, V.prev[y & V.w_mask] = V.head[V.ins_h], V.head[V.ins_h] = y, y++, --d; )
            ;
          V.strstart = y, V.lookahead = W - 1, lt(V);
        }
        return V.strstart += V.lookahead, V.block_start = V.strstart, V.insert = V.lookahead, V.lookahead = 0, V.match_length = V.prev_length = W - 1, V.match_available = 0, t.next_in = M, t.input = O, t.avail_in = z, V.wrap = I, c;
      }, u.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, A, u) {
      A.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, A, u) {
      A.exports = function(r, a) {
        var n, o, p, m, g, v, c, b, s, f, h, w, C, R, N, L, T, Y, W, X, rt, E, _, i, j;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, j = r.output, g = m - (a - r.avail_out), v = m + (r.avail_out - 257), c = n.dmax, b = n.wsize, s = n.whave, f = n.wnext, h = n.window, w = n.hold, C = n.bits, R = n.lencode, N = n.distcode, L = (1 << n.lenbits) - 1, T = (1 << n.distbits) - 1;
        t:
          do {
            C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), Y = R[w & L];
            e:
              for (; ; ) {
                if (w >>>= W = Y >>> 24, C -= W, (W = Y >>> 16 & 255) === 0)
                  j[m++] = 65535 & Y;
                else {
                  if (!(16 & W)) {
                    if (!(64 & W)) {
                      Y = R[(65535 & Y) + (w & (1 << W) - 1)];
                      continue e;
                    }
                    if (32 & W) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  X = 65535 & Y, (W &= 15) && (C < W && (w += i[o++] << C, C += 8), X += w & (1 << W) - 1, w >>>= W, C -= W), C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), Y = N[w & T];
                  n:
                    for (; ; ) {
                      if (w >>>= W = Y >>> 24, C -= W, !(16 & (W = Y >>> 16 & 255))) {
                        if (!(64 & W)) {
                          Y = N[(65535 & Y) + (w & (1 << W) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & Y, C < (W &= 15) && (w += i[o++] << C, (C += 8) < W && (w += i[o++] << C, C += 8)), c < (rt += w & (1 << W) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= W, C -= W, (W = m - g) < rt) {
                        if (s < (W = rt - W) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (_ = h, (E = 0) === f) {
                          if (E += b - W, W < X) {
                            for (X -= W; j[m++] = h[E++], --W; )
                              ;
                            E = m - rt, _ = j;
                          }
                        } else if (f < W) {
                          if (E += b + f - W, (W -= f) < X) {
                            for (X -= W; j[m++] = h[E++], --W; )
                              ;
                            if (E = 0, f < X) {
                              for (X -= W = f; j[m++] = h[E++], --W; )
                                ;
                              E = m - rt, _ = j;
                            }
                          }
                        } else if (E += f - W, W < X) {
                          for (X -= W; j[m++] = h[E++], --W; )
                            ;
                          E = m - rt, _ = j;
                        }
                        for (; 2 < X; )
                          j[m++] = _[E++], j[m++] = _[E++], j[m++] = _[E++], X -= 3;
                        X && (j[m++] = _[E++], 1 < X && (j[m++] = _[E++]));
                      } else {
                        for (E = m - rt; j[m++] = j[E++], j[m++] = j[E++], j[m++] = j[E++], 2 < (X -= 3); )
                          ;
                        X && (j[m++] = j[E++], 1 < X && (j[m++] = j[E++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < v);
        o -= X = C >> 3, w &= (1 << (C -= X << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < v ? v - m + 257 : 257 - (m - v), n.hold = w, n.bits = C;
      };
    }, {}], 49: [function(e, A, u) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, g = 2, v = 0, c = -2, b = 1, s = 852, f = 592;
      function h(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function C(E) {
        var _;
        return E && E.state ? (_ = E.state, E.total_in = E.total_out = _.total = 0, E.msg = "", _.wrap && (E.adler = 1 & _.wrap), _.mode = b, _.last = 0, _.havedict = 0, _.dmax = 32768, _.head = null, _.hold = 0, _.bits = 0, _.lencode = _.lendyn = new r.Buf32(s), _.distcode = _.distdyn = new r.Buf32(f), _.sane = 1, _.back = -1, v) : c;
      }
      function R(E) {
        var _;
        return E && E.state ? ((_ = E.state).wsize = 0, _.whave = 0, _.wnext = 0, C(E)) : c;
      }
      function N(E, _) {
        var i, j;
        return E && E.state ? (j = E.state, _ < 0 ? (i = 0, _ = -_) : (i = 1 + (_ >> 4), _ < 48 && (_ &= 15)), _ && (_ < 8 || 15 < _) ? c : (j.window !== null && j.wbits !== _ && (j.window = null), j.wrap = i, j.wbits = _, R(E))) : c;
      }
      function L(E, _) {
        var i, j;
        return E ? (j = new w(), (E.state = j).window = null, (i = N(E, _)) !== v && (E.state = null), i) : c;
      }
      var T, Y, W = !0;
      function X(E) {
        if (W) {
          var _;
          for (T = new r.Buf32(512), Y = new r.Buf32(32), _ = 0; _ < 144; )
            E.lens[_++] = 8;
          for (; _ < 256; )
            E.lens[_++] = 9;
          for (; _ < 280; )
            E.lens[_++] = 7;
          for (; _ < 288; )
            E.lens[_++] = 8;
          for (p(m, E.lens, 0, 288, T, 0, E.work, { bits: 9 }), _ = 0; _ < 32; )
            E.lens[_++] = 5;
          p(g, E.lens, 0, 32, Y, 0, E.work, { bits: 5 }), W = !1;
        }
        E.lencode = T, E.lenbits = 9, E.distcode = Y, E.distbits = 5;
      }
      function rt(E, _, i, j) {
        var it, S = E.state;
        return S.window === null && (S.wsize = 1 << S.wbits, S.wnext = 0, S.whave = 0, S.window = new r.Buf8(S.wsize)), j >= S.wsize ? (r.arraySet(S.window, _, i - S.wsize, S.wsize, 0), S.wnext = 0, S.whave = S.wsize) : (j < (it = S.wsize - S.wnext) && (it = j), r.arraySet(S.window, _, i - j, it, S.wnext), (j -= it) ? (r.arraySet(S.window, _, i - j, j, 0), S.wnext = j, S.whave = S.wsize) : (S.wnext += it, S.wnext === S.wsize && (S.wnext = 0), S.whave < S.wsize && (S.whave += it))), 0;
      }
      u.inflateReset = R, u.inflateReset2 = N, u.inflateResetKeep = C, u.inflateInit = function(E) {
        return L(E, 15);
      }, u.inflateInit2 = L, u.inflate = function(E, _) {
        var i, j, it, S, G, B, D, x, F, K, P, H, lt, ft, at, st, bt, At, ht, yt, t, Q, V, y, d = 0, I = new r.Buf8(4), z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0)
          return c;
        (i = E.state).mode === 12 && (i.mode = 13), G = E.next_out, it = E.output, D = E.avail_out, S = E.next_in, j = E.input, B = E.avail_in, x = i.hold, F = i.bits, K = B, P = D, Q = v;
        t:
          for (; ; )
            switch (i.mode) {
              case b:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; F < 16; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  I[i.check = 0] = 255 & x, I[1] = x >>> 8 & 255, i.check = n(i.check, I, 2, 0), F = x = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & x) << 8) + (x >> 8)) % 31) {
                  E.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & x) != 8) {
                  E.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (F -= 4, t = 8 + (15 & (x >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  E.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, E.adler = i.check = 1, i.mode = 512 & x ? 10 : 12, F = x = 0;
                break;
              case 2:
                for (; F < 16; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  E.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  E.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (I[0] = 255 & x, I[1] = x >>> 8 & 255, i.check = n(i.check, I, 2, 0)), F = x = 0, i.mode = 3;
              case 3:
                for (; F < 32; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (I[0] = 255 & x, I[1] = x >>> 8 & 255, I[2] = x >>> 16 & 255, I[3] = x >>> 24 & 255, i.check = n(i.check, I, 4, 0)), F = x = 0, i.mode = 4;
              case 4:
                for (; F < 16; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (I[0] = 255 & x, I[1] = x >>> 8 & 255, i.check = n(i.check, I, 2, 0)), F = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; F < 16; ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (I[0] = 255 & x, I[1] = x >>> 8 & 255, i.check = n(i.check, I, 2, 0)), F = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (B < (H = i.length) && (H = B), H && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, j, S, H, t)), 512 & i.flags && (i.check = n(i.check, j, H, S)), B -= H, S += H, i.length -= H), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (B === 0)
                    break t;
                  for (H = 0; t = j[S + H++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && H < B; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, j, H, S)), B -= H, S += H, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (B === 0)
                    break t;
                  for (H = 0; t = j[S + H++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && H < B; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, j, H, S)), B -= H, S += H, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; F < 16; ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  if (x !== (65535 & i.check)) {
                    E.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  F = x = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), E.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; F < 32; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                E.adler = i.check = h(x), F = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return E.next_out = G, E.avail_out = D, E.next_in = S, E.avail_in = B, i.hold = x, i.bits = F, 2;
                E.adler = i.check = 1, i.mode = 12;
              case 12:
                if (_ === 5 || _ === 6)
                  break t;
              case 13:
                if (i.last) {
                  x >>>= 7 & F, F -= 7 & F, i.mode = 27;
                  break;
                }
                for (; F < 3; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                switch (i.last = 1 & x, F -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (X(i), i.mode = 20, _ !== 6)
                      break;
                    x >>>= 2, F -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    E.msg = "invalid block type", i.mode = 30;
                }
                x >>>= 2, F -= 2;
                break;
              case 14:
                for (x >>>= 7 & F, F -= 7 & F; F < 32; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                if ((65535 & x) != (x >>> 16 ^ 65535)) {
                  E.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & x, F = x = 0, i.mode = 15, _ === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (H = i.length) {
                  if (B < H && (H = B), D < H && (H = D), H === 0)
                    break t;
                  r.arraySet(it, j, S, H, G), B -= H, S += H, D -= H, G += H, i.length -= H;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; F < 14; ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                if (i.nlen = 257 + (31 & x), x >>>= 5, F -= 5, i.ndist = 1 + (31 & x), x >>>= 5, F -= 5, i.ncode = 4 + (15 & x), x >>>= 4, F -= 4, 286 < i.nlen || 30 < i.ndist) {
                  E.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; F < 3; ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  i.lens[z[i.have++]] = 7 & x, x >>>= 3, F -= 3;
                }
                for (; i.have < 19; )
                  i.lens[z[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, V = { bits: i.lenbits }, Q = p(0, i.lens, 0, 19, i.lencode, 0, i.work, V), i.lenbits = V.bits, Q) {
                  E.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (d = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, bt = 65535 & d, !((at = d >>> 24) <= F); ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  if (bt < 16)
                    x >>>= at, F -= at, i.lens[i.have++] = bt;
                  else {
                    if (bt === 16) {
                      for (y = at + 2; F < y; ) {
                        if (B === 0)
                          break t;
                        B--, x += j[S++] << F, F += 8;
                      }
                      if (x >>>= at, F -= at, i.have === 0) {
                        E.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], H = 3 + (3 & x), x >>>= 2, F -= 2;
                    } else if (bt === 17) {
                      for (y = at + 3; F < y; ) {
                        if (B === 0)
                          break t;
                        B--, x += j[S++] << F, F += 8;
                      }
                      F -= at, t = 0, H = 3 + (7 & (x >>>= at)), x >>>= 3, F -= 3;
                    } else {
                      for (y = at + 7; F < y; ) {
                        if (B === 0)
                          break t;
                        B--, x += j[S++] << F, F += 8;
                      }
                      F -= at, t = 0, H = 11 + (127 & (x >>>= at)), x >>>= 7, F -= 7;
                    }
                    if (i.have + H > i.nlen + i.ndist) {
                      E.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; H--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  E.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, V = { bits: i.lenbits }, Q = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, V), i.lenbits = V.bits, Q) {
                  E.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, V = { bits: i.distbits }, Q = p(g, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, V), i.distbits = V.bits, Q) {
                  E.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, _ === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= B && 258 <= D) {
                  E.next_out = G, E.avail_out = D, E.next_in = S, E.avail_in = B, i.hold = x, i.bits = F, o(E, P), G = E.next_out, it = E.output, D = E.avail_out, S = E.next_in, j = E.input, B = E.avail_in, x = i.hold, F = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (d = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, bt = 65535 & d, !((at = d >>> 24) <= F); ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                if (st && !(240 & st)) {
                  for (At = at, ht = st, yt = bt; st = (d = i.lencode[yt + ((x & (1 << At + ht) - 1) >> At)]) >>> 16 & 255, bt = 65535 & d, !(At + (at = d >>> 24) <= F); ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  x >>>= At, F -= At, i.back += At;
                }
                if (x >>>= at, F -= at, i.back += at, i.length = bt, st === 0) {
                  i.mode = 26;
                  break;
                }
                if (32 & st) {
                  i.back = -1, i.mode = 12;
                  break;
                }
                if (64 & st) {
                  E.msg = "invalid literal/length code", i.mode = 30;
                  break;
                }
                i.extra = 15 & st, i.mode = 22;
              case 22:
                if (i.extra) {
                  for (y = i.extra; F < y; ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, F -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (d = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, bt = 65535 & d, !((at = d >>> 24) <= F); ) {
                  if (B === 0)
                    break t;
                  B--, x += j[S++] << F, F += 8;
                }
                if (!(240 & st)) {
                  for (At = at, ht = st, yt = bt; st = (d = i.distcode[yt + ((x & (1 << At + ht) - 1) >> At)]) >>> 16 & 255, bt = 65535 & d, !(At + (at = d >>> 24) <= F); ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  x >>>= At, F -= At, i.back += At;
                }
                if (x >>>= at, F -= at, i.back += at, 64 & st) {
                  E.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = bt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (y = i.extra; F < y; ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  i.offset += x & (1 << i.extra) - 1, x >>>= i.extra, F -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  E.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (D === 0)
                  break t;
                if (H = P - D, i.offset > H) {
                  if ((H = i.offset - H) > i.whave && i.sane) {
                    E.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  lt = H > i.wnext ? (H -= i.wnext, i.wsize - H) : i.wnext - H, H > i.length && (H = i.length), ft = i.window;
                } else
                  ft = it, lt = G - i.offset, H = i.length;
                for (D < H && (H = D), D -= H, i.length -= H; it[G++] = ft[lt++], --H; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (D === 0)
                  break t;
                it[G++] = i.length, D--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; F < 32; ) {
                    if (B === 0)
                      break t;
                    B--, x |= j[S++] << F, F += 8;
                  }
                  if (P -= D, E.total_out += P, i.total += P, P && (E.adler = i.check = i.flags ? n(i.check, it, P, G - P) : a(i.check, it, P, G - P)), P = D, (i.flags ? x : h(x)) !== i.check) {
                    E.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  F = x = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; F < 32; ) {
                    if (B === 0)
                      break t;
                    B--, x += j[S++] << F, F += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    E.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  F = x = 0;
                }
                i.mode = 29;
              case 29:
                Q = 1;
                break t;
              case 30:
                Q = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return c;
            }
        return E.next_out = G, E.avail_out = D, E.next_in = S, E.avail_in = B, i.hold = x, i.bits = F, (i.wsize || P !== E.avail_out && i.mode < 30 && (i.mode < 27 || _ !== 4)) && rt(E, E.output, E.next_out, P - E.avail_out) ? (i.mode = 31, -4) : (K -= E.avail_in, P -= E.avail_out, E.total_in += K, E.total_out += P, i.total += P, i.wrap && P && (E.adler = i.check = i.flags ? n(i.check, it, P, E.next_out - P) : a(i.check, it, P, E.next_out - P)), E.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && P === 0 || _ === 4) && Q === v && (Q = -5), Q);
      }, u.inflateEnd = function(E) {
        if (!E || !E.state)
          return c;
        var _ = E.state;
        return _.window && (_.window = null), E.state = null, v;
      }, u.inflateGetHeader = function(E, _) {
        var i;
        return E && E.state && 2 & (i = E.state).wrap ? ((i.head = _).done = !1, v) : c;
      }, u.inflateSetDictionary = function(E, _) {
        var i, j = _.length;
        return E && E.state ? (i = E.state).wrap !== 0 && i.mode !== 11 ? c : i.mode === 11 && a(1, _, j, 0) !== i.check ? -3 : rt(E, _, j, j) ? (i.mode = 31, -4) : (i.havedict = 1, v) : c;
      }, u.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, A, u) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      A.exports = function(m, g, v, c, b, s, f, h) {
        var w, C, R, N, L, T, Y, W, X, rt = h.bits, E = 0, _ = 0, i = 0, j = 0, it = 0, S = 0, G = 0, B = 0, D = 0, x = 0, F = null, K = 0, P = new r.Buf16(16), H = new r.Buf16(16), lt = null, ft = 0;
        for (E = 0; E <= 15; E++)
          P[E] = 0;
        for (_ = 0; _ < c; _++)
          P[g[v + _]]++;
        for (it = rt, j = 15; 1 <= j && P[j] === 0; j--)
          ;
        if (j < it && (it = j), j === 0)
          return b[s++] = 20971520, b[s++] = 20971520, h.bits = 1, 0;
        for (i = 1; i < j && P[i] === 0; i++)
          ;
        for (it < i && (it = i), E = B = 1; E <= 15; E++)
          if (B <<= 1, (B -= P[E]) < 0)
            return -1;
        if (0 < B && (m === 0 || j !== 1))
          return -1;
        for (H[1] = 0, E = 1; E < 15; E++)
          H[E + 1] = H[E] + P[E];
        for (_ = 0; _ < c; _++)
          g[v + _] !== 0 && (f[H[g[v + _]]++] = _);
        if (T = m === 0 ? (F = lt = f, 19) : m === 1 ? (F = a, K -= 257, lt = n, ft -= 257, 256) : (F = o, lt = p, -1), E = i, L = s, G = _ = x = 0, R = -1, N = (D = 1 << (S = it)) - 1, m === 1 && 852 < D || m === 2 && 592 < D)
          return 1;
        for (; ; ) {
          for (Y = E - G, X = f[_] < T ? (W = 0, f[_]) : f[_] > T ? (W = lt[ft + f[_]], F[K + f[_]]) : (W = 96, 0), w = 1 << E - G, i = C = 1 << S; b[L + (x >> G) + (C -= w)] = Y << 24 | W << 16 | X | 0, C !== 0; )
            ;
          for (w = 1 << E - 1; x & w; )
            w >>= 1;
          if (w !== 0 ? (x &= w - 1, x += w) : x = 0, _++, --P[E] == 0) {
            if (E === j)
              break;
            E = g[v + f[_]];
          }
          if (it < E && (x & N) !== R) {
            for (G === 0 && (G = it), L += i, B = 1 << (S = E - G); S + G < j && !((B -= P[S + G]) <= 0); )
              S++, B <<= 1;
            if (D += 1 << S, m === 1 && 852 < D || m === 2 && 592 < D)
              return 1;
            b[R = x & N] = it << 24 | S << 16 | L - s | 0;
          }
        }
        return x !== 0 && (b[L + x] = E - G << 24 | 64 << 16 | 0), h.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, A, u) {
      A.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, A, u) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(d) {
        for (var I = d.length; 0 <= --I; )
          d[I] = 0;
      }
      var p = 0, m = 29, g = 256, v = g + 1 + m, c = 30, b = 19, s = 2 * v + 1, f = 15, h = 16, w = 7, C = 256, R = 16, N = 17, L = 18, T = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], Y = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], W = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], X = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (v + 2));
      o(rt);
      var E = new Array(2 * c);
      o(E);
      var _ = new Array(512);
      o(_);
      var i = new Array(256);
      o(i);
      var j = new Array(m);
      o(j);
      var it, S, G, B = new Array(c);
      function D(d, I, z, M, O) {
        this.static_tree = d, this.extra_bits = I, this.extra_base = z, this.elems = M, this.max_length = O, this.has_stree = d && d.length;
      }
      function x(d, I) {
        this.dyn_tree = d, this.max_code = 0, this.stat_desc = I;
      }
      function F(d) {
        return d < 256 ? _[d] : _[256 + (d >>> 7)];
      }
      function K(d, I) {
        d.pending_buf[d.pending++] = 255 & I, d.pending_buf[d.pending++] = I >>> 8 & 255;
      }
      function P(d, I, z) {
        d.bi_valid > h - z ? (d.bi_buf |= I << d.bi_valid & 65535, K(d, d.bi_buf), d.bi_buf = I >> h - d.bi_valid, d.bi_valid += z - h) : (d.bi_buf |= I << d.bi_valid & 65535, d.bi_valid += z);
      }
      function H(d, I, z) {
        P(d, z[2 * I], z[2 * I + 1]);
      }
      function lt(d, I) {
        for (var z = 0; z |= 1 & d, d >>>= 1, z <<= 1, 0 < --I; )
          ;
        return z >>> 1;
      }
      function ft(d, I, z) {
        var M, O, U = new Array(f + 1), $ = 0;
        for (M = 1; M <= f; M++)
          U[M] = $ = $ + z[M - 1] << 1;
        for (O = 0; O <= I; O++) {
          var J = d[2 * O + 1];
          J !== 0 && (d[2 * O] = lt(U[J]++, J));
        }
      }
      function at(d) {
        var I;
        for (I = 0; I < v; I++)
          d.dyn_ltree[2 * I] = 0;
        for (I = 0; I < c; I++)
          d.dyn_dtree[2 * I] = 0;
        for (I = 0; I < b; I++)
          d.bl_tree[2 * I] = 0;
        d.dyn_ltree[2 * C] = 1, d.opt_len = d.static_len = 0, d.last_lit = d.matches = 0;
      }
      function st(d) {
        8 < d.bi_valid ? K(d, d.bi_buf) : 0 < d.bi_valid && (d.pending_buf[d.pending++] = d.bi_buf), d.bi_buf = 0, d.bi_valid = 0;
      }
      function bt(d, I, z, M) {
        var O = 2 * I, U = 2 * z;
        return d[O] < d[U] || d[O] === d[U] && M[I] <= M[z];
      }
      function At(d, I, z) {
        for (var M = d.heap[z], O = z << 1; O <= d.heap_len && (O < d.heap_len && bt(I, d.heap[O + 1], d.heap[O], d.depth) && O++, !bt(I, M, d.heap[O], d.depth)); )
          d.heap[z] = d.heap[O], z = O, O <<= 1;
        d.heap[z] = M;
      }
      function ht(d, I, z) {
        var M, O, U, $, J = 0;
        if (d.last_lit !== 0)
          for (; M = d.pending_buf[d.d_buf + 2 * J] << 8 | d.pending_buf[d.d_buf + 2 * J + 1], O = d.pending_buf[d.l_buf + J], J++, M === 0 ? H(d, O, I) : (H(d, (U = i[O]) + g + 1, I), ($ = T[U]) !== 0 && P(d, O -= j[U], $), H(d, U = F(--M), z), ($ = Y[U]) !== 0 && P(d, M -= B[U], $)), J < d.last_lit; )
            ;
        H(d, C, I);
      }
      function yt(d, I) {
        var z, M, O, U = I.dyn_tree, $ = I.stat_desc.static_tree, J = I.stat_desc.has_stree, nt = I.stat_desc.elems, dt = -1;
        for (d.heap_len = 0, d.heap_max = s, z = 0; z < nt; z++)
          U[2 * z] !== 0 ? (d.heap[++d.heap_len] = dt = z, d.depth[z] = 0) : U[2 * z + 1] = 0;
        for (; d.heap_len < 2; )
          U[2 * (O = d.heap[++d.heap_len] = dt < 2 ? ++dt : 0)] = 1, d.depth[O] = 0, d.opt_len--, J && (d.static_len -= $[2 * O + 1]);
        for (I.max_code = dt, z = d.heap_len >> 1; 1 <= z; z--)
          At(d, U, z);
        for (O = nt; z = d.heap[1], d.heap[1] = d.heap[d.heap_len--], At(d, U, 1), M = d.heap[1], d.heap[--d.heap_max] = z, d.heap[--d.heap_max] = M, U[2 * O] = U[2 * z] + U[2 * M], d.depth[O] = (d.depth[z] >= d.depth[M] ? d.depth[z] : d.depth[M]) + 1, U[2 * z + 1] = U[2 * M + 1] = O, d.heap[1] = O++, At(d, U, 1), 2 <= d.heap_len; )
          ;
        d.heap[--d.heap_max] = d.heap[1], function(ct, wt) {
          var Ct, mt, Rt, ut, Vt, xt, vt = wt.dyn_tree, St = wt.max_code, It = wt.stat_desc.static_tree, Zt = wt.stat_desc.has_stree, _t = wt.stat_desc.extra_bits, Qt = wt.stat_desc.extra_base, tt = wt.stat_desc.max_length, pt = 0;
          for (ut = 0; ut <= f; ut++)
            ct.bl_count[ut] = 0;
          for (vt[2 * ct.heap[ct.heap_max] + 1] = 0, Ct = ct.heap_max + 1; Ct < s; Ct++)
            tt < (ut = vt[2 * vt[2 * (mt = ct.heap[Ct]) + 1] + 1] + 1) && (ut = tt, pt++), vt[2 * mt + 1] = ut, St < mt || (ct.bl_count[ut]++, Vt = 0, Qt <= mt && (Vt = _t[mt - Qt]), xt = vt[2 * mt], ct.opt_len += xt * (ut + Vt), Zt && (ct.static_len += xt * (It[2 * mt + 1] + Vt)));
          if (pt !== 0) {
            do {
              for (ut = tt - 1; ct.bl_count[ut] === 0; )
                ut--;
              ct.bl_count[ut]--, ct.bl_count[ut + 1] += 2, ct.bl_count[tt]--, pt -= 2;
            } while (0 < pt);
            for (ut = tt; ut !== 0; ut--)
              for (mt = ct.bl_count[ut]; mt !== 0; )
                St < (Rt = ct.heap[--Ct]) || (vt[2 * Rt + 1] !== ut && (ct.opt_len += (ut - vt[2 * Rt + 1]) * vt[2 * Rt], vt[2 * Rt + 1] = ut), mt--);
          }
        }(d, I), ft(U, dt, d.bl_count);
      }
      function t(d, I, z) {
        var M, O, U = -1, $ = I[1], J = 0, nt = 7, dt = 4;
        for ($ === 0 && (nt = 138, dt = 3), I[2 * (z + 1) + 1] = 65535, M = 0; M <= z; M++)
          O = $, $ = I[2 * (M + 1) + 1], ++J < nt && O === $ || (J < dt ? d.bl_tree[2 * O] += J : O !== 0 ? (O !== U && d.bl_tree[2 * O]++, d.bl_tree[2 * R]++) : J <= 10 ? d.bl_tree[2 * N]++ : d.bl_tree[2 * L]++, U = O, dt = (J = 0) === $ ? (nt = 138, 3) : O === $ ? (nt = 6, 3) : (nt = 7, 4));
      }
      function Q(d, I, z) {
        var M, O, U = -1, $ = I[1], J = 0, nt = 7, dt = 4;
        for ($ === 0 && (nt = 138, dt = 3), M = 0; M <= z; M++)
          if (O = $, $ = I[2 * (M + 1) + 1], !(++J < nt && O === $)) {
            if (J < dt)
              for (; H(d, O, d.bl_tree), --J != 0; )
                ;
            else
              O !== 0 ? (O !== U && (H(d, O, d.bl_tree), J--), H(d, R, d.bl_tree), P(d, J - 3, 2)) : J <= 10 ? (H(d, N, d.bl_tree), P(d, J - 3, 3)) : (H(d, L, d.bl_tree), P(d, J - 11, 7));
            U = O, dt = (J = 0) === $ ? (nt = 138, 3) : O === $ ? (nt = 6, 3) : (nt = 7, 4);
          }
      }
      o(B);
      var V = !1;
      function y(d, I, z, M) {
        P(d, (p << 1) + (M ? 1 : 0), 3), function(O, U, $, J) {
          st(O), J && (K(O, $), K(O, ~$)), r.arraySet(O.pending_buf, O.window, U, $, O.pending), O.pending += $;
        }(d, I, z, !0);
      }
      u._tr_init = function(d) {
        V || (function() {
          var I, z, M, O, U, $ = new Array(f + 1);
          for (O = M = 0; O < m - 1; O++)
            for (j[O] = M, I = 0; I < 1 << T[O]; I++)
              i[M++] = O;
          for (i[M - 1] = O, O = U = 0; O < 16; O++)
            for (B[O] = U, I = 0; I < 1 << Y[O]; I++)
              _[U++] = O;
          for (U >>= 7; O < c; O++)
            for (B[O] = U << 7, I = 0; I < 1 << Y[O] - 7; I++)
              _[256 + U++] = O;
          for (z = 0; z <= f; z++)
            $[z] = 0;
          for (I = 0; I <= 143; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (; I <= 255; )
            rt[2 * I + 1] = 9, I++, $[9]++;
          for (; I <= 279; )
            rt[2 * I + 1] = 7, I++, $[7]++;
          for (; I <= 287; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (ft(rt, v + 1, $), I = 0; I < c; I++)
            E[2 * I + 1] = 5, E[2 * I] = lt(I, 5);
          it = new D(rt, T, g + 1, v, f), S = new D(E, Y, 0, c, f), G = new D(new Array(0), W, 0, b, w);
        }(), V = !0), d.l_desc = new x(d.dyn_ltree, it), d.d_desc = new x(d.dyn_dtree, S), d.bl_desc = new x(d.bl_tree, G), d.bi_buf = 0, d.bi_valid = 0, at(d);
      }, u._tr_stored_block = y, u._tr_flush_block = function(d, I, z, M) {
        var O, U, $ = 0;
        0 < d.level ? (d.strm.data_type === 2 && (d.strm.data_type = function(J) {
          var nt, dt = 4093624447;
          for (nt = 0; nt <= 31; nt++, dt >>>= 1)
            if (1 & dt && J.dyn_ltree[2 * nt] !== 0)
              return a;
          if (J.dyn_ltree[18] !== 0 || J.dyn_ltree[20] !== 0 || J.dyn_ltree[26] !== 0)
            return n;
          for (nt = 32; nt < g; nt++)
            if (J.dyn_ltree[2 * nt] !== 0)
              return n;
          return a;
        }(d)), yt(d, d.l_desc), yt(d, d.d_desc), $ = function(J) {
          var nt;
          for (t(J, J.dyn_ltree, J.l_desc.max_code), t(J, J.dyn_dtree, J.d_desc.max_code), yt(J, J.bl_desc), nt = b - 1; 3 <= nt && J.bl_tree[2 * X[nt] + 1] === 0; nt--)
            ;
          return J.opt_len += 3 * (nt + 1) + 5 + 5 + 4, nt;
        }(d), O = d.opt_len + 3 + 7 >>> 3, (U = d.static_len + 3 + 7 >>> 3) <= O && (O = U)) : O = U = z + 5, z + 4 <= O && I !== -1 ? y(d, I, z, M) : d.strategy === 4 || U === O ? (P(d, 2 + (M ? 1 : 0), 3), ht(d, rt, E)) : (P(d, 4 + (M ? 1 : 0), 3), function(J, nt, dt, ct) {
          var wt;
          for (P(J, nt - 257, 5), P(J, dt - 1, 5), P(J, ct - 4, 4), wt = 0; wt < ct; wt++)
            P(J, J.bl_tree[2 * X[wt] + 1], 3);
          Q(J, J.dyn_ltree, nt - 1), Q(J, J.dyn_dtree, dt - 1);
        }(d, d.l_desc.max_code + 1, d.d_desc.max_code + 1, $ + 1), ht(d, d.dyn_ltree, d.dyn_dtree)), at(d), M && st(d);
      }, u._tr_tally = function(d, I, z) {
        return d.pending_buf[d.d_buf + 2 * d.last_lit] = I >>> 8 & 255, d.pending_buf[d.d_buf + 2 * d.last_lit + 1] = 255 & I, d.pending_buf[d.l_buf + d.last_lit] = 255 & z, d.last_lit++, I === 0 ? d.dyn_ltree[2 * z]++ : (d.matches++, I--, d.dyn_ltree[2 * (i[z] + g + 1)]++, d.dyn_dtree[2 * F(I)]++), d.last_lit === d.lit_bufsize - 1;
      }, u._tr_align = function(d) {
        P(d, 2, 3), H(d, C, rt), function(I) {
          I.bi_valid === 16 ? (K(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
        }(d);
      };
    }, { "../utils/common": 41 }], 53: [function(e, A, u) {
      A.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, A, u) {
      (function(r) {
        (function(a, n) {
          if (!a.setImmediate) {
            var o, p, m, g, v = 1, c = {}, b = !1, s = a.document, f = Object.getPrototypeOf && Object.getPrototypeOf(a);
            f = f && f.setTimeout ? f : a, o = {}.toString.call(a.process) === "[object process]" ? function(R) {
              process.nextTick(function() {
                w(R);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var R = !0, N = a.onmessage;
                return a.onmessage = function() {
                  R = !1;
                }, a.postMessage("", "*"), a.onmessage = N, R;
              }
            }() ? (g = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", C, !1) : a.attachEvent("onmessage", C), function(R) {
              a.postMessage(g + R, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(R) {
              w(R.data);
            }, function(R) {
              m.port2.postMessage(R);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(R) {
              var N = s.createElement("script");
              N.onreadystatechange = function() {
                w(R), N.onreadystatechange = null, p.removeChild(N), N = null;
              }, p.appendChild(N);
            }) : function(R) {
              setTimeout(w, 0, R);
            }, f.setImmediate = function(R) {
              typeof R != "function" && (R = new Function("" + R));
              for (var N = new Array(arguments.length - 1), L = 0; L < N.length; L++)
                N[L] = arguments[L + 1];
              var T = { callback: R, args: N };
              return c[v] = T, o(v), v++;
            }, f.clearImmediate = h;
          }
          function h(R) {
            delete c[R];
          }
          function w(R) {
            if (b)
              setTimeout(w, 0, R);
            else {
              var N = c[R];
              if (N) {
                b = !0;
                try {
                  (function(L) {
                    var T = L.callback, Y = L.args;
                    switch (Y.length) {
                      case 0:
                        T();
                        break;
                      case 1:
                        T(Y[0]);
                        break;
                      case 2:
                        T(Y[0], Y[1]);
                        break;
                      case 3:
                        T(Y[0], Y[1], Y[2]);
                        break;
                      default:
                        T.apply(n, Y);
                    }
                  })(N);
                } finally {
                  h(R), b = !1;
                }
              }
            }
          }
          function C(R) {
            R.source === a && typeof R.data == "string" && R.data.indexOf(g) === 0 && w(+R.data.slice(g.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Wt < "u" ? Wt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(Fe);
var $e = Fe.exports;
const tn = /* @__PURE__ */ Ie($e);
var Be = { exports: {} };
(function(k, l) {
  (function(e, A) {
    A();
  })(Wt, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function A(p, m, g) {
      var v = new XMLHttpRequest();
      v.open("GET", p), v.responseType = "blob", v.onload = function() {
        o(v.response, m, g);
      }, v.onerror = function() {
        console.error("could not download file");
      }, v.send();
    }
    function u(p) {
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Wt == "object" && Wt.global === Wt ? Wt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, g) {
      var v = a.URL || a.webkitURL, c = document.createElement("a");
      m = m || p.name || "download", c.download = m, c.rel = "noopener", typeof p == "string" ? (c.href = p, c.origin === location.origin ? r(c) : u(c.href) ? A(p, m, g) : r(c, c.target = "_blank")) : (c.href = v.createObjectURL(p), setTimeout(function() {
        v.revokeObjectURL(c.href);
      }, 4e4), setTimeout(function() {
        r(c);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, g) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, g), m);
      else if (u(p))
        A(p, m, g);
      else {
        var v = document.createElement("a");
        v.href = p, v.target = "_blank", setTimeout(function() {
          r(v);
        });
      }
    } : function(p, m, g, v) {
      if (v = v || open("", "_blank"), v && (v.document.title = v.document.body.innerText = "downloading..."), typeof p == "string")
        return A(p, m, g);
      var c = p.type === "application/octet-stream", b = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || c && b || n) && typeof FileReader < "u") {
        var f = new FileReader();
        f.onloadend = function() {
          var C = f.result;
          C = s ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), v ? v.location.href = C : location = C, v = null;
        }, f.readAsDataURL(p);
      } else {
        var h = a.URL || a.webkitURL, w = h.createObjectURL(p);
        v ? v.location = w : location.href = w, v = null, setTimeout(function() {
          h.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, k.exports = o;
  });
})(Be);
var en = Be.exports;
const nn = /* @__PURE__ */ Ie(en);
var Xt = { exports: {} };
(function(k, l) {
  (function(e, A) {
    A(l);
  })(Wt, function(e) {
    function A() {
      return A = Object.assign ? Object.assign.bind() : function(S) {
        for (var G = 1; G < arguments.length; G++) {
          var B = arguments[G];
          for (var D in B)
            Object.prototype.hasOwnProperty.call(B, D) && (S[D] = B[D]);
        }
        return S;
      }, A.apply(this, arguments);
    }
    function u(S, G) {
      S.prototype = Object.create(G.prototype), S.prototype.constructor = S, a(S, G);
    }
    function r(S) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(G) {
        return G.__proto__ || Object.getPrototypeOf(G);
      }, r(S);
    }
    function a(S, G) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(B, D) {
        return B.__proto__ = D, B;
      }, a(S, G);
    }
    function n(S, G, B) {
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
      }() ? Reflect.construct.bind() : function(D, x, F) {
        var K = [null];
        K.push.apply(K, x);
        var P = new (Function.bind.apply(D, K))();
        return F && a(P, F.prototype), P;
      }, n.apply(null, arguments);
    }
    function o(S) {
      var G = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(B) {
        if (B === null || Function.toString.call(B).indexOf("[native code]") === -1)
          return B;
        if (typeof B != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (G !== void 0) {
          if (G.has(B))
            return G.get(B);
          G.set(B, D);
        }
        function D() {
          return n(B, arguments, r(this).constructor);
        }
        return D.prototype = Object.create(B.prototype, { constructor: { value: D, enumerable: !1, writable: !0, configurable: !0 } }), a(D, B);
      }, o(S);
    }
    var p = /* @__PURE__ */ function() {
      function S(B) {
        this.cache = void 0, this.cache = B;
      }
      var G = S.prototype;
      return G.define = function(B, D) {
        this.cache[B] = D;
      }, G.get = function(B) {
        return this.cache[B];
      }, G.remove = function(B) {
        delete this.cache[B];
      }, G.reset = function() {
        this.cache = {};
      }, G.load = function(B) {
        this.cache = A({}, this.cache, B);
      }, S;
    }(), m = /* @__PURE__ */ function(S) {
      function G(B) {
        var D;
        return (D = S.call(this, B) || this).name = "Eta Error", D;
      }
      return u(G, S), G;
    }(/* @__PURE__ */ o(Error));
    function g(S, G, B) {
      var D = G.slice(0, B).split(/\n/), x = D.length, F = D[x - 1].length + 1;
      throw S += " at line " + x + " col " + F + `:

  ` + G.split(/\n/)[x - 1] + `
  ` + Array(F).join(" ") + "^", new m(S);
    }
    function v(S, G, B, D) {
      var x = G.split(`
`), F = Math.max(B - 3, 0), K = Math.min(x.length, B + 3), P = D, H = x.slice(F, K).map(function(ft, at) {
        var st = at + F + 1;
        return (st == B ? " >> " : "    ") + st + "| " + ft;
      }).join(`
`), lt = new m((P ? P + ":" + B + `
` : "line " + B + `
`) + H + `

` + S.message);
      throw lt.name = S.name, lt;
    }
    var c = function() {
      return Promise.resolve();
    }.constructor;
    function b(S, G) {
      var B = this.config, D = G && G.async ? c : Function;
      try {
        return new D(B.varName, "options", this.compileToString.call(this, S, G));
      } catch (x) {
        throw x instanceof SyntaxError ? new m(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, S, G) + `
`) : x;
      }
    }
    function s(S, G) {
      var B = this.config, D = G && G.async, x = this.parse.call(this, S), F = B.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (B.debug ? ', line: 1, templateStr: "' + S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (B.debug ? "try {" : "") + (B.useWith ? "with(" + B.varName + "||{}){" : "") + `

` + f.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (D ? "await includeAsync" : "include") + " (__eta.layout, {..." + B.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (B.useWith ? "}" : "") + (B.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (B.plugins)
        for (var K = 0; K < B.plugins.length; K++) {
          var P = B.plugins[K];
          P.processFnString && (F = P.processFnString(F, B));
        }
      return F;
    }
    function f(S) {
      for (var G = this.config, B = 0, D = S.length, x = ""; B < D; B++) {
        var F = S[B];
        if (typeof F == "string")
          x += "__eta.res+='" + F + `'
`;
        else {
          var K = F.t, P = F.val || "";
          G.debug && (x += "__eta.line=" + F.lineNo + `
`), K === "r" ? (G.autoFilter && (P = "__eta.f(" + P + ")"), x += "__eta.res+=" + P + `
`) : K === "i" ? (G.autoFilter && (P = "__eta.f(" + P + ")"), G.autoEscape && (P = "__eta.e(" + P + ")"), x += "__eta.res+=" + P + `
`) : K === "e" && (x += P + `
`);
        }
      }
      return x;
    }
    var h = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(S) {
      return h[S];
    }
    var C = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(S) {
      var G = String(S);
      return /[&<>"']/.test(G) ? G.replace(/[&<>"']/g, w) : G;
    }, filterFunction: function(S) {
      return String(S);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, R = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, N = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, L = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function T(S) {
      return S.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function Y(S, G) {
      return S.slice(0, G).split(`
`).length;
    }
    function W(S) {
      var G = this.config, B = [], D = !1, x = 0, F = G.parse;
      if (G.plugins)
        for (var K = 0; K < G.plugins.length; K++) {
          var P = G.plugins[K];
          P.processTemplate && (S = P.processTemplate(S, G));
        }
      function H(I, z) {
        I && (I = function(M, O, U, $) {
          var J, nt;
          return Array.isArray(O.autoTrim) ? (J = O.autoTrim[1], nt = O.autoTrim[0]) : J = nt = O.autoTrim, (U || U === !1) && (J = U), ($ || $ === !1) && (nt = $), nt || J ? J === "slurp" && nt === "slurp" ? M.trim() : (J === "_" || J === "slurp" ? M = M.trimStart() : J !== "-" && J !== "nl" || (M = M.replace(/^(?:\r\n|\n|\r)/, "")), nt === "_" || nt === "slurp" ? M = M.trimEnd() : nt !== "-" && nt !== "nl" || (M = M.replace(/(?:\r\n|\n|\r)$/, "")), M) : M;
        }(I, G, D, z), I && (I = I.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), B.push(I)));
      }
      G.rmWhitespace && (S = S.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), R.lastIndex = 0, N.lastIndex = 0, L.lastIndex = 0;
      for (var lt, ft = [F.exec, F.interpolate, F.raw].reduce(function(I, z) {
        return I && z ? I + "|" + T(z) : z ? T(z) : I;
      }, ""), at = new RegExp(T(G.tags[0]) + "(-|_)?\\s*(" + ft + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + T(G.tags[1]) + ")", "g"); lt = at.exec(S); ) {
        var bt = S.slice(x, lt.index);
        x = lt[0].length + lt.index;
        var At = lt[2] || "";
        H(bt, lt[1]), st.lastIndex = x;
        for (var ht = void 0, yt = !1; ht = st.exec(S); ) {
          if (ht[1]) {
            var t = S.slice(x, ht.index);
            at.lastIndex = x = st.lastIndex, D = ht[2], yt = { t: At === F.exec ? "e" : At === F.raw ? "r" : At === F.interpolate ? "i" : "", val: t };
            break;
          }
          var Q = ht[0];
          if (Q === "/*") {
            var V = S.indexOf("*/", st.lastIndex);
            V === -1 && g("unclosed comment", S, ht.index), st.lastIndex = V;
          } else
            Q === "'" ? (N.lastIndex = ht.index, N.exec(S) ? st.lastIndex = N.lastIndex : g("unclosed string", S, ht.index)) : Q === '"' ? (L.lastIndex = ht.index, L.exec(S) ? st.lastIndex = L.lastIndex : g("unclosed string", S, ht.index)) : Q === "`" && (R.lastIndex = ht.index, R.exec(S) ? st.lastIndex = R.lastIndex : g("unclosed string", S, ht.index));
        }
        yt ? (G.debug && (yt.lineNo = Y(S, lt.index)), B.push(yt)) : g("unclosed tag", S, lt.index);
      }
      if (H(S.slice(x, S.length), !1), G.plugins)
        for (var y = 0; y < G.plugins.length; y++) {
          var d = G.plugins[y];
          d.processAST && (B = d.processAST(B, G));
        }
      return B;
    }
    function X(S, G) {
      var B = G && G.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !S.startsWith("@")) {
        var D = G.filepath, x = B.get(D);
        if (this.config.cache && x)
          return x;
        var F = this.readFile(D), K = this.compile(F, G);
        return this.config.cache && B.define(D, K), K;
      }
      var P = B.get(S);
      if (P)
        return P;
      throw new m("Failed to get template '" + S + "'");
    }
    function rt(S, G, B) {
      var D, x = A({}, B, { async: !1 });
      return typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), D = X.call(this, S, x)) : D = S, D.call(this, G, x);
    }
    function E(S, G, B) {
      var D, x = A({}, B, { async: !0 });
      typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), D = X.call(this, S, x)) : D = S;
      var F = D.call(this, G, x);
      return Promise.resolve(F);
    }
    function _(S, G) {
      var B = this.compile(S, { async: !1 });
      return rt.call(this, B, G);
    }
    function i(S, G) {
      var B = this.compile(S, { async: !0 });
      return E.call(this, B, G);
    }
    var j = /* @__PURE__ */ function() {
      function S(B) {
        this.config = void 0, this.RuntimeErr = v, this.compile = b, this.compileToString = s, this.parse = W, this.render = rt, this.renderAsync = E, this.renderString = _, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = B ? A({}, C, B) : A({}, C);
      }
      var G = S.prototype;
      return G.configure = function(B) {
        this.config = A({}, this.config, B);
      }, G.withConfig = function(B) {
        return A({}, this, { config: A({}, this.config, B) });
      }, G.loadTemplate = function(B, D, x) {
        if (typeof D == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(B, this.compile(D, x));
        else {
          var F = this.templatesSync;
          (D.constructor.name === "AsyncFunction" || x && x.async) && (F = this.templatesAsync), F.define(B, D);
        }
      }, S;
    }(), it = /* @__PURE__ */ function(S) {
      function G() {
        return S.apply(this, arguments) || this;
      }
      return u(G, S), G;
    }(j);
    e.Eta = it;
  });
})(Xt, Xt.exports);
var rn = Xt.exports;
const an = new rn.Eta({
  autoTrim: !1
});
function Nt(k, l) {
  return an.renderString(k, l);
}
const sn = `<% if (it.kotlin) { -%>
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

<% } -%>
plugins {
<% const loomSuffix = it.unobfuscated ? '' : '-remap'; -%>
	id 'net.fabricmc.fabric-loom<%= loomSuffix %>' version "\${loom_version}"
	id 'maven-publish'
<% if (it.kotlin) { -%>
	id "org.jetbrains.kotlin.jvm" version "<%= it.kotlin.kotlinVersion %>"
<% } -%>
}

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}

<% if (it.splitSources) { -%>
loom {
	splitEnvironmentSourceSets()

	mods {
		"<%= it.modid %>" {
			sourceSet sourceSets.main
			sourceSet sourceSets.client
		}
	}
}

<% } -%>
<% if (it.dataGeneration) { -%>
fabricApi {
	configureDataGeneration {
		client = true
	}
}

<% } -%>
dependencies {
<% const implementation = it.unobfuscated ? 'implementation' : 'modImplementation' -%>
	// To change the versions see the gradle.properties file
	minecraft "com.mojang:minecraft:\${project.minecraft_version}"
<% if (!it.unobfuscated) { -%>
	mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${project.yarn_mappings}:v2"<% } %>
<% } -%>
	<%= implementation %> "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	<%= implementation %> "net.fabricmc.fabric-api:fabric-api:\${project.fabric_api_version}"
<% if (it.kotlin) { -%>
    <%= implementation %> "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"
<% } -%>
}

processResources {
	def version = project.version
	inputs.property "version", version

	filesMatching("fabric.mod.json") {
		expand "version": version
	}
}

tasks.withType(JavaCompile).configureEach {
	it.options.release = <%= it.java.release %>
}

<% if (it.kotlin) { -%>
kotlin {
	compilerOptions {
		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>
	}
}

<% } -%>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
}

jar {
	def projectName = project.name
	inputs.property "projectName", projectName

	from("LICENSE") {
		rename { "\${it}_$projectName"}
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
}
`, on = `pluginManagement {
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
}, ee = {
  compatibility: "17",
  mixin: "JAVA_17",
  release: 17
}, un = {
  compatibility: "21",
  mixin: "JAVA_21",
  release: 21
}, hn = {
  compatibility: "25",
  mixin: "JAVA_25",
  release: 25
};
function Ut(k) {
  const l = Kt(k), e = $t(k);
  return l >= 26 ? hn : e <= 16 ? ln : e == 17 ? cn : e <= 19 || e == 20 && Ee(k) <= 4 ? ee : un;
}
const An = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, dn = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), fn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function pn(k) {
  let l = [];
  An.test(k.toLowerCase()) || l.push("Package name is not a valid Java package name!");
  const e = k.split(".").filter((A) => dn.includes(A));
  e.length != 0 && l.push(`Package name contains illegal component: '${e[0]}'`);
  for (let A of fn)
    k.toLowerCase().startsWith(A) ? l.push(`Package name starts with '${A}', which is reserved!`) : k.toLowerCase() + "." == A && l.push(`Package name is '${A}', which is reserved!`);
  return l;
}
const mn = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];
function gn(k) {
  const l = k.match(/^\d+/);
  if (!(l && l[0]))
    return [k];
  const e = l[0], A = k.substring(e.length);
  return [...e.split("").map((u) => mn[parseInt(u)]), A];
}
function ne(k) {
  return k.filter(Boolean).map((l) => l[0].toUpperCase() + l.slice(1)).join("");
}
function bn(k) {
  const l = ne(k.split(/\b/).map((e) => e.replaceAll(/\W/g, "")));
  return ne(gn(l));
}
function vn(k) {
  return k.toLowerCase().replaceAll(/[\s/]+/g, ".").replaceAll(/[^a-z0-9_\.]/g, "");
}
async function yn(k, l) {
  await k.write("build.gradle", Nt(sn, { ...l, java: Ut(l.minecraftVersion) })), await k.write("settings.gradle", Nt(on, l));
}
const wn = `<% if (it.kotlin) { -%>
import org.jetbrains.kotlin.gradle.dsl.JvmTarget

<% } -%>
plugins {
<% const pluginSuffix = it.unobfuscated ? '' : '-remap' -%>
	id("net.fabricmc.fabric-loom<%= pluginSuffix %>")
	\`maven-publish\`
<% if (it.kotlin) { -%>
	id("org.jetbrains.kotlin.jvm") version "<%= it.kotlin.kotlinVersion %>"
<% } -%>
}

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}

<% if (it.splitSources) { -%>
loom {
	splitEnvironmentSourceSets()

	mods {
		register("<%= it.modid %>") {
			sourceSet(sourceSets.main.get())
			sourceSet(sourceSets.getByName("client"))
		}
	}
}

<% } -%>
<% if (it.dataGeneration) { -%>
fabricApi {
	configureDataGeneration {
		client = true
	}
}

<% } -%>
dependencies {
<% const implementation = it.unobfuscated ? 'implementation' : 'modImplementation' -%>
	// To change the versions see the gradle.properties file
	minecraft("com.mojang:minecraft:\${providers.gradleProperty("minecraft_version").get()}")
<% if (!it.unobfuscated) { -%>
    mappings(<% if(it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${providers.gradleProperty("yarn_mappings").get()}:v2"<% } %>)
<% } -%>
	<%= implementation %>("net.fabricmc:fabric-loader:\${providers.gradleProperty("loader_version").get()}")

	// Fabric API. This is technically optional, but you probably want it anyway.
	<%= implementation %>("net.fabricmc.fabric-api:fabric-api:\${providers.gradleProperty("fabric_api_version").get()}")
<% if (it.kotlin) { -%>
    <%= implementation %>("net.fabricmc:fabric-language-kotlin:\${providers.gradleProperty("fabric_kotlin_version").get()}")
<% } -%>
}

tasks.processResources {
	val version = version
	inputs.property("version", version)

	filesMatching("fabric.mod.json") {
		expand("version" to version)
	}
}

tasks.withType<JavaCompile>().configureEach {
	options.release = <%= it.java.release %>
}

<% if (it.kotlin) { -%>
kotlin {
	compilerOptions {
		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>
	}
}

<% } -%>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>
}

tasks.jar {
	val projectName = project.name
	inputs.property("projectName", projectName)

	from("LICENSE") {
		rename { "\${it}_$projectName" }
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
`, kn = `pluginManagement {
	repositories {
		maven {
			name = "Fabric"
			url = uri("https://maven.fabricmc.net/")
		}
		mavenCentral()
		gradlePluginPortal()
	}

	plugins {
<% const pluginSuffix = it.unobfuscated ? '' : '-remap' -%>
		id("net.fabricmc.fabric-loom<%= pluginSuffix %>") version providers.gradleProperty("loom_version")
	}
}

// Should match your modid
rootProject.name = "<%= it.modid %>"
`;
async function En(k, l) {
  await k.write("build.gradle.kts", Nt(wn, { ...l, java: Ut(l.minecraftVersion) })), await k.write("settings.gradle.kts", Nt(kn, l));
}
const Cn = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true
org.gradle.configuration-cache=true

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap && !it.unobfuscated) { -%>
yarn_mappings=<%= it.yarnVersion %>
<% } -%>
loader_version=<%= it.loaderVersion %>
loom_version=1.18-SNAPSHOT
<% if (it.kotlin) { -%>
fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } -%>

# Mod Properties
version=1.0.0
group=<%= it.packageName %>

# Dependencies
fabric_api_version=<%= it.fabricVersion %>
`;
async function xn(k, l) {
  await k.write("gradle.properties", Nt(Cn, l)), l.gradleKotlin ? await En(k, l) : await yn(k, l);
}
function Yt(k) {
  for (var l = globalThis.atob(k), e = l.length, A = new Uint8Array(e), u = 0; u < e; u++)
    A[u] = l.charCodeAt(u);
  return A.buffer;
}
const Sn = `#!/bin/sh

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
#   gradlew start up script for POSIX generated by Gradle.
#
#   Important for running:
#
#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is
#       noncompliant, but you have some other compliant shell such as ksh or
#       bash, then to run this script, type that shell name before the whole
#       command line, like:
#
#           ksh gradlew
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
#       https://github.com/gradle/gradle/blob/3d91ce3b8caaf77ad09f381f43615b715b53f72c/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
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
`, In = `@rem\r
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
@rem  gradlew startup script for Windows\r
@rem\r
@rem ##########################################################################\r
\r
@rem Set local scope for the variables, and ensure extensions are enabled\r
setlocal EnableExtensions\r
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
"%COMSPEC%" /c exit 1\r
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
"%COMSPEC%" /c exit 1\r
\r
:execute\r
@rem Setup the command line\r
\r
\r
\r
@rem Execute gradlew\r
@rem endlocal doesn't take effect until after the line is parsed and variables are expanded\r
@rem which allows us to clear the local environment before executing the java command\r
endlocal & "%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -jar "%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar" %* & call :exitWithErrorLevel\r
\r
:exitWithErrorLevel\r
@rem Use "%COMSPEC%" /c exit to allow operators to work properly in scripts\r
"%COMSPEC%" /c exit %ERRORLEVEL%\r
`, Fn = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.7.1-bin.zip
networkTimeout=10000
retries=0
retryBackOffMs=500
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Bn = "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AAYnAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDXZAGWGAIAAFkDAAAzAAkAAAAAAAAAAAAAAOwoAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAlPuVyYEBAACKAgAAMgAJAAAAAAAAAAAAAABuKwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAXRRUYmcCAAC4BAAAPwAJAAAAAAAAAAAAAABYLQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFouHi0LBQAADAkAACYACQAAAAAAAAAAAAAANTAAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhALn6+5bqBAAAWQkAACYACQAAAAAAAAAAAAAAnTUAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAA7pJ0FDAQAAkwEAACwACQAAAAAAAAAAAAAA5DoAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAAtbYOsMBQAANggAADMACQAAAAAAAAAAAAAAijwAAG9yZy9ncmFkbGUvaW50ZXJuYWwvZmlsZS9QYXRoVHJhdmVyc2FsQ2hlY2tlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBYAqd5nwEAACsCAABBAAkAAAAAAAAAAAAAAABCAABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFz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", Ne = `# gradle

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
`, Oe = `# Automatically build the project and run any configured tests for every push
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
async function Nn({ writer: k }) {
  await k.write("gradlew", Sn, {
    executable: !0
  }), await k.write("gradlew.bat", In), await k.write("gradle/wrapper/gradle-wrapper.properties", Fn), await k.write("gradle/wrapper/gradle-wrapper.jar", Yt(Bn)), await k.write(".gitignore", Ne), await k.write(".github/workflows/build.yml", Oe);
}
const Re = `package <%= it.packageName %>;

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
async function On(k, l) {
  const e = l.packageName + ".mixin", A = "ExampleMixin", u = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = l.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Ut(l.minecraftVersion).mixin,
    mixins: [
      A
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${l.modid}.mixins.json`;
  return await k.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await k.write(`src/main/java/${e.replaceAll(".", "/")}/${A}.java`, Nt(Re, {
    className: A,
    packageName: e,
    targetClass: u,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function Rn(k, l) {
  const e = l.packageName + ".client.mixin", A = "ExampleClientMixin", u = l.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${u}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Ut(l.minecraftVersion).mixin,
    client: [
      A
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${l.modid}.client.mixins.json`;
  return await k.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await k.write(`src/client/java/${e.replaceAll(".", "/")}/${A}.java`, Nt(Re, {
    className: A,
    packageName: e,
    targetClass: u,
    targetClassFull: r,
    targetMethod: a
  })), [
    {
      config: o,
      environment: "client"
    }
  ];
}
const Vn = `package <%= it.package %>;

import net.fabricmc.api.ModInitializer;

import <%= it.identifier.package %>.<%= it.identifier.class %>;

<% if (it.slf4j) { -%>
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<% } else { -%>
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
<% } -%>

public class <%= it.className %> implements ModInitializer {
	public static final String MOD_ID = "<%= it.modid %>";

	// This logger is used to write text to the console and the log file.
	// It is considered best practice to use your mod id as the logger's name.
	// That way, it's clear which mod wrote info, warnings, and errors.
<% if (it.slf4j) { -%>
	public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);
<% } else { -%>
	public static final Logger LOGGER = LogManager.getLogger(MOD_ID);
<% } -%>

	@Override
	public void onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.

		LOGGER.info("Hello Fabric world!");
	}

	public static <%= it.identifier.class %> id(String path) {
		return <%= it.identifier.factory %>(MOD_ID, path);
	}
}
`, _n = `package <%= it.package %>

import net.fabricmc.api.ModInitializer
import <%= it.identifier.package %>.<%= it.identifier.class %>
<% if (it.slf4j) { -%>
import org.slf4j.LoggerFactory
<% } else { -%>
import org.apache.logging.log4j.LogManager
<% } -%>

object <%= it.className %> : ModInitializer {
	const val MOD_ID: String = "<%= it.modid %>"

<% if (it.slf4j) { -%>
	private val LOGGER = LoggerFactory.getLogger(MOD_ID)
<% } else { -%>
	private val LOGGER = LogManager.getLogger(MOD_ID)
<% } -%>

	override fun onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.

		LOGGER.info("Hello Fabric world!")
	}

	fun id(path: String): <%= it.identifier.class %>
		= <%= it.identifier.factory %>(MOD_ID, path)
}
`, Wn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Tn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, Gn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, Ln = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
function Qn(k, l) {
  const e = Kt(l), A = $t(l);
  return e > 1 || A > 20 ? `${k.class}.${k.factoryName}` : `new ${k.class}`;
}
function jn(k) {
  if (!(k.unobfuscated || k.mojmap))
    return {
      package: "net.minecraft.util",
      class: "Identifier",
      factoryName: "of"
    };
  const l = Kt(k.minecraftVersion), e = $t(k.minecraftVersion), A = Ee(k.minecraftVersion);
  return {
    package: "net.minecraft.resources",
    class: l > 1 || e == 21 && A == 11 ? "Identifier" : "ResourceLocation",
    factoryName: "fromNamespaceAndPath"
  };
}
function zn(k) {
  const l = jn(k), e = Qn(l, k.minecraftVersion);
  return {
    ...l,
    factory: e
  };
}
async function Mn(k, l) {
  const e = bn(l.projectName), A = {
    package: l.packageName,
    clientPackage: l.packageName + ".client",
    className: e,
    classFullName: l.packageName + "." + e,
    clientClassFullName: l.packageName + ".client." + e,
    path: l.packageName.replaceAll(".", "/") + "/" + e,
    clientPath: l.packageName.replaceAll(".", "/") + "/client/" + e,
    modid: l.modid,
    slf4j: Ue(l.minecraftVersion),
    clientEntrypoint: l.splitSources,
    dataEntrypoint: l.dataGeneration,
    identifier: zn(l)
  };
  return l.kotlin ? await Un(k, A) : await Dn(k, A);
}
async function Dn(k, l) {
  var e = {
    main: [
      l.classFullName
    ]
  };
  if (await k.write(`src/main/java/${l.path}.java`, Nt(Vn, l)), l.clientEntrypoint && (await k.write(`src/client/java/${l.clientPath}Client.java`, Nt(Wn, {
    ...l,
    className: l.className + "Client",
    package: l.clientPackage
  })), e = {
    ...e,
    client: [
      l.clientClassFullName + "Client"
    ]
  }), l.dataEntrypoint) {
    const A = l.clientEntrypoint ? "client" : "main", u = l.clientEntrypoint ? l.clientPath : l.path, r = l.clientEntrypoint ? l.clientClassFullName : l.classFullName;
    await k.write(`src/${A}/java/${u}DataGenerator.java`, Nt(Gn, {
      ...l,
      className: l.className + "DataGenerator",
      package: l.clientEntrypoint ? l.clientPackage : l.package
    })), e = {
      ...e,
      "fabric-datagen": [
        r + "DataGenerator"
      ]
    };
  }
  return e;
}
async function Un(k, l) {
  var e = {
    main: [
      {
        value: l.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await k.write(`src/main/kotlin/${l.path}.kt`, Nt(_n, l)), l.clientEntrypoint && (await k.write(`src/client/kotlin/${l.clientPath}Client.kt`, Nt(Tn, {
    ...l,
    className: l.className + "Client",
    package: l.clientPackage
  })), e = {
    ...e,
    client: [
      {
        value: l.clientClassFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), l.dataEntrypoint) {
    const A = l.clientEntrypoint ? "client" : "main", u = l.clientEntrypoint ? l.clientPath : l.path, r = l.clientEntrypoint ? l.clientClassFullName : l.classFullName;
    await k.write(`src/${A}/kotlin/${u}DataGenerator.kt`, Nt(Ln, {
      ...l,
      className: l.className + "DataGenerator",
      package: l.clientEntrypoint ? l.clientPackage : l.package
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
const re = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Zn(k, l, e) {
  if (!l)
    return Yt(re);
  const A = e.create(128, 128);
  return A != null && Pn(A, k) ? A.getPng() : Yt(re);
}
function Pn(k, l) {
  const e = k.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const A = l.split(/\s+/);
  let u = 0, r = Array(A.length), a = 65;
  for (; ; ) {
    u = 0;
    for (const o of A) {
      let p = a;
      do
        p--, e.font = `${p}px ${zt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < A.length; o++) {
      const p = A[o];
      e.font = `${a}px ${zt}`;
      const m = k.measureText(e, p);
      r[o] = m.ascent + m.descent, u += r[o];
    }
    if (u += (A.length - 1) * 2, u <= 124)
      break;
  }
  const n = (128 - u) / 2;
  for (let o = 0; o < A.length; o++) {
    let p = 0;
    for (const v of r.slice(0, o))
      p += v + 2;
    const m = A[o];
    e.font = `${a}px ${zt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const g = k.measureText(e, m);
    e.fillText(m, 64, n + p + g.ascent);
  }
  return !0;
}
function Jn(k) {
  return Number(k.split(".")[1]) >= 59;
}
async function Yn(k, l, e) {
  const A = [
    ...await On(k, e),
    ...e.splitSources ? await Rn(k, e) : []
  ], u = e.minecraftVersion.indexOf("-");
  var r = e.minecraftVersion.substring(0, u === -1 ? e.minecraftVersion.length : u + 1);
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
    entrypoints: await Mn(k, e),
    mixins: A,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Ut(e.minecraftVersion).release
    }
  };
  a.depends[Jn(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await k.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await k.write(`src/main/resources/assets/${e.modid}/icon.png`, Zn(e.projectName, e.uniqueModIcon, l));
}
const Hn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Xn = `Creative Commons Legal Code

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
    this CC0 or use of the Work.`, qn = `# <%= it.projectName %>

## Setup

For setup instructions, please see the [Fabric Documentation page](https://docs.fabricmc.net/develop/getting-started/creating-a-project#setting-up) related to the IDE that you are using.

## License

This template is available under the CC0 license. Feel free to learn from it and incorporate it in your own projects.
`;
async function Kn(k, l) {
  await k.write(".gitattributes", Hn), await k.write(".gitignore", Ne), await k.write(".github/workflows/build.yml", Oe), await k.write("LICENSE", Xn), await k.write("README.md", Nt(qn, l));
}
const zt = "Comic Relief";
async function $n(k) {
  const l = await tr(k.config);
  await Nn(k), await xn(k.writer, l), await Yn(k.writer, k.canvas, l), await Kn(k.writer, l);
}
async function Ve() {
  const k = await Ye();
  return k.filter((l) => {
    const e = l.version;
    return e.startsWith("1.14") && e != "1.14.4" ? !1 : l.stable ? !0 : k[0].version == e;
  });
}
async function tr(k) {
  const l = Ce(k.minecraftVersion);
  return {
    ...k,
    splitSources: xe(k.minecraftVersion) && k.splitSources,
    dataGeneration: Se(k.minecraftVersion) && k.dataGeneration,
    loaderVersion: (await He()).find((e) => e.stable).version,
    fabricVersion: await Xe(k.minecraftVersion),
    yarnVersion: l ? void 0 : (await qe(k.minecraftVersion))[0].version,
    kotlin: await er(k),
    unobfuscated: l
  };
}
async function er(k) {
  if (!k.useKotlin)
    return;
  const e = (await Ke()).pop(), A = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: A
  };
}
const nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: zt,
  generateTemplate: $n,
  getTemplateGameVersions: Ve
}, Symbol.toStringTag, { value: "Module" }));
function ie(k, l, e) {
  const A = k.slice();
  return A[34] = l[e], A;
}
function ae(k, l, e) {
  const A = k.slice();
  return A[37] = l[e], A;
}
function se(k, l, e) {
  const A = k.slice();
  return A[37] = l[e], A;
}
function oe(k, l, e) {
  const A = k.slice();
  return A[37] = l[e], A;
}
function rr(k) {
  let l, e, A = (
    /*error*/
    k[37].message + ""
  ), u, r, a;
  return {
    c() {
      l = et("p"), e = Bt("Error: "), u = Bt(A), r = ot(), a = et("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, Lt(l, "color", "red");
    },
    m(n, o) {
      kt(n, l, o), Z(l, e), Z(l, u), kt(n, r, o), kt(n, a, o);
    },
    p: Tt,
    i: Tt,
    o: Tt,
    d(n) {
      n && Et(l), n && Et(r), n && Et(a);
    }
  };
}
function ir(k) {
  let l, e, A, u, r, a, n, o, p, m, g, v, c, b, s, f, h, w, C, R, N, L, T, Y, W, X, rt, E, _, i, j, it, S, G, B, D, x, F, K, P, H, lt, ft, at, st, bt, At, ht, yt, t, Q, V, y, d, I, z, M, O, U, $, J, nt;
  function dt(tt, pt) {
    return (
      /*customModId*/
      tt[3] != null ? sr : ar
    );
  }
  let ct = dt(k), wt = ct(k), Ct = (
    /*modIdErrors*/
    k[16] != null && le(k)
  ), mt = (
    /*customModId*/
    k[3] != null && ue(k)
  ), Rt = (
    /*packageNameErrors*/
    k[14]
  ), ut = [];
  for (let tt = 0; tt < Rt.length; tt += 1)
    ut[tt] = de(ae(k, Rt, tt));
  let Vt = (
    /*data*/
    k[33].game
  ), xt = [];
  for (let tt = 0; tt < Vt.length; tt += 1)
    xt[tt] = fe(ie(k, Vt, tt));
  let vt = !/*isUnobfuscated*/
  k[13] && pe(k), St = (
    /*supportsDataGen*/
    k[12] && me(k)
  ), It = (
    /*supportsSplitSources*/
    k[11] && ge(k)
  );
  const Zt = [lr, or], _t = [];
  function Qt(tt, pt) {
    return (
      /*loading*/
      tt[10] ? 0 : 1
    );
  }
  return O = Qt(k), U = _t[O] = Zt[O](k), {
    c() {
      l = et("div"), e = et("div"), A = et("h3"), A.textContent = "Mod Name:", u = ot(), r = et("hr"), a = ot(), wt.c(), n = ot(), o = et("input"), p = ot(), Ct && Ct.c(), m = ot(), mt && mt.c(), g = ot(), v = et("div"), c = et("h3"), c.textContent = "Package Name:", b = ot(), s = et("hr"), f = ot(), h = et("p"), h.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = ot(), C = et("input"), R = ot();
      for (let tt = 0; tt < ut.length; tt += 1)
        ut[tt].c();
      N = ot(), L = et("div"), T = et("h3"), T.textContent = "Minecraft Version:", Y = ot(), W = et("hr"), X = ot(), rt = et("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, E = ot(), _ = et("select");
      for (let tt = 0; tt < xt.length; tt += 1)
        xt[tt].c();
      i = ot(), j = et("hr"), it = ot(), S = et("br"), G = ot(), B = et("h4"), B.textContent = "Advanced Options:", D = ot(), x = et("div"), F = et("div"), K = et("input"), P = ot(), H = et("label"), H.textContent = "Kotlin Programming Language", lt = ot(), ft = et("p"), ft.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, at = ot(), vt && vt.c(), st = ot(), St && St.c(), bt = ot(), It && It.c(), At = ot(), ht = et("div"), yt = et("div"), t = et("input"), Q = ot(), V = et("label"), V.textContent = "Kotlin Build Script", y = ot(), d = et("p"), d.textContent = "The Gradle build script will use the Kotlin programming language instead of Groovy.", I = ot(), z = et("br"), M = ot(), U.c(), q(A, "class", "svelte-c4460r"), q(r, "class", "svelte-c4460r"), q(o, "id", "project-name"), q(o, "class", "svelte-c4460r"), q(e, "class", "form-line svelte-c4460r"), q(c, "class", "svelte-c4460r"), q(s, "class", "svelte-c4460r"), q(h, "class", "svelte-c4460r"), q(C, "id", "package-name"), q(C, "class", "svelte-c4460r"), q(v, "class", "form-line svelte-c4460r"), q(T, "class", "svelte-c4460r"), q(W, "class", "svelte-c4460r"), q(rt, "class", "svelte-c4460r"), q(_, "id", "minecraft-version"), Lt(_, "min-width", "200px"), q(_, "class", "svelte-c4460r"), /*minecraftVersion*/
      k[0] === void 0 && ze(() => (
        /*select_change_handler*/
        k[26].call(_)
      )), q(L, "class", "form-line svelte-c4460r"), q(j, "class", "svelte-c4460r"), q(S, "class", "svelte-c4460r"), q(B, "class", "svelte-c4460r"), q(K, "id", "kotlin"), q(K, "type", "checkbox"), q(K, "class", "option-input svelte-c4460r"), q(H, "for", "kotlin"), q(H, "class", "option-label svelte-c4460r"), q(F, "class", "option-container svelte-c4460r"), q(ft, "class", "option-body svelte-c4460r"), q(x, "class", "svelte-c4460r"), q(t, "id", "gradleKotlin"), q(t, "type", "checkbox"), q(t, "class", "option-input svelte-c4460r"), q(V, "for", "gradleKotlin"), q(V, "class", "option-label svelte-c4460r"), q(yt, "class", "option-container svelte-c4460r"), q(d, "class", "option-body svelte-c4460r"), q(ht, "class", "svelte-c4460r"), q(z, "class", "svelte-c4460r"), q(l, "class", "template svelte-c4460r");
    },
    m(tt, pt) {
      kt(tt, l, pt), Z(l, e), Z(e, A), Z(e, u), Z(e, r), Z(e, a), wt.m(e, null), Z(e, n), Z(e, o), Gt(
        o,
        /*projectName*/
        k[1]
      ), Z(e, p), Ct && Ct.m(e, null), Z(l, m), mt && mt.m(l, null), Z(l, g), Z(l, v), Z(v, c), Z(v, b), Z(v, s), Z(v, f), Z(v, h), Z(v, w), Z(v, C), Gt(
        C,
        /*packageName*/
        k[2]
      ), Z(v, R);
      for (let Ot = 0; Ot < ut.length; Ot += 1)
        ut[Ot] && ut[Ot].m(v, null);
      Z(l, N), Z(l, L), Z(L, T), Z(L, Y), Z(L, W), Z(L, X), Z(L, rt), Z(L, E), Z(L, _);
      for (let Ot = 0; Ot < xt.length; Ot += 1)
        xt[Ot] && xt[Ot].m(_, null);
      te(
        _,
        /*minecraftVersion*/
        k[0],
        !0
      ), Z(l, i), Z(l, j), Z(l, it), Z(l, S), Z(l, G), Z(l, B), Z(l, D), Z(l, x), Z(x, F), Z(F, K), K.checked = /*useKotlin*/
      k[5], Z(F, P), Z(F, H), Z(x, lt), Z(x, ft), Z(l, at), vt && vt.m(l, null), Z(l, st), St && St.m(l, null), Z(l, bt), It && It.m(l, null), Z(l, At), Z(l, ht), Z(ht, yt), Z(yt, t), t.checked = /*gradleKotlin*/
      k[9], Z(yt, Q), Z(yt, V), Z(ht, y), Z(ht, d), Z(l, I), Z(l, z), Z(l, M), _t[O].m(l, null), $ = !0, J || (nt = [
        Ft(
          o,
          "input",
          /*input0_input_handler*/
          k[23]
        ),
        Ft(
          o,
          "blur",
          /*doFormatProjectName*/
          k[19]
        ),
        Ft(
          C,
          "keyup",
          /*doFormatPackageName*/
          k[20]
        ),
        Ft(
          C,
          "input",
          /*input1_input_handler*/
          k[25]
        ),
        Ft(
          _,
          "change",
          /*select_change_handler*/
          k[26]
        ),
        Ft(
          K,
          "change",
          /*input2_change_handler*/
          k[27]
        ),
        Ft(
          t,
          "change",
          /*input3_change_handler*/
          k[31]
        )
      ], J = !0);
    },
    p(tt, pt) {
      if (ct === (ct = dt(tt)) && wt ? wt.p(tt, pt) : (wt.d(1), wt = ct(tt), wt && (wt.c(), wt.m(e, n))), pt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      tt[1] && Gt(
        o,
        /*projectName*/
        tt[1]
      ), /*modIdErrors*/
      tt[16] != null ? Ct ? Ct.p(tt, pt) : (Ct = le(tt), Ct.c(), Ct.m(e, null)) : Ct && (Ct.d(1), Ct = null), /*customModId*/
      tt[3] != null ? mt ? mt.p(tt, pt) : (mt = ue(tt), mt.c(), mt.m(l, g)) : mt && (mt.d(1), mt = null), pt[0] & /*packageName*/
      4 && C.value !== /*packageName*/
      tt[2] && Gt(
        C,
        /*packageName*/
        tt[2]
      ), pt[0] & /*packageNameErrors*/
      16384) {
        Rt = /*packageNameErrors*/
        tt[14];
        let gt;
        for (gt = 0; gt < Rt.length; gt += 1) {
          const jt = ae(tt, Rt, gt);
          ut[gt] ? ut[gt].p(jt, pt) : (ut[gt] = de(jt), ut[gt].c(), ut[gt].m(v, null));
        }
        for (; gt < ut.length; gt += 1)
          ut[gt].d(1);
        ut.length = Rt.length;
      }
      if (pt[0] & /*versions*/
      131072) {
        Vt = /*data*/
        tt[33].game;
        let gt;
        for (gt = 0; gt < Vt.length; gt += 1) {
          const jt = ie(tt, Vt, gt);
          xt[gt] ? xt[gt].p(jt, pt) : (xt[gt] = fe(jt), xt[gt].c(), xt[gt].m(_, null));
        }
        for (; gt < xt.length; gt += 1)
          xt[gt].d(1);
        xt.length = Vt.length;
      }
      pt[0] & /*minecraftVersion, versions*/
      131073 && te(
        _,
        /*minecraftVersion*/
        tt[0]
      ), pt[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      tt[5]), /*isUnobfuscated*/
      tt[13] ? vt && (vt.d(1), vt = null) : vt ? vt.p(tt, pt) : (vt = pe(tt), vt.c(), vt.m(l, st)), /*supportsDataGen*/
      tt[12] ? St ? St.p(tt, pt) : (St = me(tt), St.c(), St.m(l, bt)) : St && (St.d(1), St = null), /*supportsSplitSources*/
      tt[11] ? It ? It.p(tt, pt) : (It = ge(tt), It.c(), It.m(l, At)) : It && (It.d(1), It = null), pt[0] & /*gradleKotlin*/
      512 && (t.checked = /*gradleKotlin*/
      tt[9]);
      let Ot = O;
      O = Qt(tt), O === Ot ? _t[O].p(tt, pt) : (Me(), Dt(_t[Ot], 1, 1, () => {
        _t[Ot] = null;
      }), De(), U = _t[O], U ? U.p(tt, pt) : (U = _t[O] = Zt[O](tt), U.c()), Mt(U, 1), U.m(l, null));
    },
    i(tt) {
      $ || (Mt(U), $ = !0);
    },
    o(tt) {
      Dt(U), $ = !1;
    },
    d(tt) {
      tt && Et(l), wt.d(), Ct && Ct.d(), mt && mt.d(), Jt(ut, tt), Jt(xt, tt), vt && vt.d(), St && St.d(), It && It.d(), _t[O].d(), J = !1, be(nt);
    }
  };
}
function ar(k) {
  let l, e, A, u, r, a, n, o;
  return {
    c() {
      l = et("p"), e = Bt("Choose a name for your new mod. The mod ID will be "), A = et("code"), u = Bt(
        /*modid*/
        k[4]
      ), r = Bt(". "), a = et("a"), a.textContent = "Use custom id", q(A, "class", "svelte-c4460r"), q(a, "href", ""), q(a, "class", "svelte-c4460r"), q(l, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, l, m), Z(l, e), Z(l, A), Z(A, u), Z(l, r), Z(l, a), n || (o = Ft(a, "click", qt(
        /*useCustomModId*/
        k[21]
      )), n = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && Ht(
        u,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && Et(l), n = !1, o();
    }
  };
}
function sr(k) {
  let l;
  return {
    c() {
      l = et("p"), l.textContent = "Choose a name for your new mod.", q(l, "class", "svelte-c4460r");
    },
    m(e, A) {
      kt(e, l, A);
    },
    p: Tt,
    d(e) {
      e && Et(l);
    }
  };
}
function le(k) {
  let l, e, A = (
    /*modIdErrors*/
    k[16]
  ), u = [];
  for (let r = 0; r < A.length; r += 1)
    u[r] = ce(oe(k, A, r));
  return {
    c() {
      for (let r = 0; r < u.length; r += 1)
        u[r].c();
      l = ot(), e = et("br"), q(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < u.length; n += 1)
        u[n] && u[n].m(r, a);
      kt(r, l, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      65536) {
        A = /*modIdErrors*/
        r[16];
        let n;
        for (n = 0; n < A.length; n += 1) {
          const o = oe(r, A, n);
          u[n] ? u[n].p(o, a) : (u[n] = ce(o), u[n].c(), u[n].m(l.parentNode, l));
        }
        for (; n < u.length; n += 1)
          u[n].d(1);
        u.length = A.length;
      }
    },
    d(r) {
      Jt(u, r), r && Et(l), r && Et(e);
    }
  };
}
function ce(k) {
  let l, e = (
    /*error*/
    k[37] + ""
  ), A;
  return {
    c() {
      l = et("li"), A = Bt(e), Lt(l, "color", "red"), q(l, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, l, r), Z(l, A);
    },
    p(u, r) {
      r[0] & /*modIdErrors*/
      65536 && e !== (e = /*error*/
      u[37] + "") && Ht(A, e);
    },
    d(u) {
      u && Et(l);
    }
  };
}
function ue(k) {
  let l, e, A, u, r, a, n, o, p, m, g, v, c, b = (
    /*customIdErrors*/
    k[15] != null && he(k)
  );
  return {
    c() {
      l = et("div"), e = et("h3"), e.textContent = "Mod ID:", A = ot(), u = et("hr"), r = ot(), a = et("p"), n = Bt("Enter the modid you wish to use for your mod. "), o = et("a"), o.textContent = "Use default", p = ot(), b && b.c(), m = ot(), g = et("input"), q(e, "class", "svelte-c4460r"), q(u, "class", "svelte-c4460r"), q(o, "href", ""), q(o, "class", "svelte-c4460r"), q(a, "class", "svelte-c4460r"), q(g, "id", "mod-id"), q(g, "class", "svelte-c4460r"), q(l, "class", "form-line svelte-c4460r");
    },
    m(s, f) {
      kt(s, l, f), Z(l, e), Z(l, A), Z(l, u), Z(l, r), Z(l, a), Z(a, n), Z(a, o), Z(l, p), b && b.m(l, null), Z(l, m), Z(l, g), Gt(
        g,
        /*customModId*/
        k[3]
      ), v || (c = [
        Ft(o, "click", qt(
          /*useDefaultModId*/
          k[22]
        )),
        Ft(
          g,
          "input",
          /*input_input_handler*/
          k[24]
        )
      ], v = !0);
    },
    p(s, f) {
      /*customIdErrors*/
      s[15] != null ? b ? b.p(s, f) : (b = he(s), b.c(), b.m(l, m)) : b && (b.d(1), b = null), f[0] & /*customModId*/
      8 && g.value !== /*customModId*/
      s[3] && Gt(
        g,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(l), b && b.d(), v = !1, be(c);
    }
  };
}
function he(k) {
  let l, e, A = (
    /*customIdErrors*/
    k[15]
  ), u = [];
  for (let r = 0; r < A.length; r += 1)
    u[r] = Ae(se(k, A, r));
  return {
    c() {
      for (let r = 0; r < u.length; r += 1)
        u[r].c();
      l = ot(), e = et("br"), q(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < u.length; n += 1)
        u[n] && u[n].m(r, a);
      kt(r, l, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      32768) {
        A = /*customIdErrors*/
        r[15];
        let n;
        for (n = 0; n < A.length; n += 1) {
          const o = se(r, A, n);
          u[n] ? u[n].p(o, a) : (u[n] = Ae(o), u[n].c(), u[n].m(l.parentNode, l));
        }
        for (; n < u.length; n += 1)
          u[n].d(1);
        u.length = A.length;
      }
    },
    d(r) {
      Jt(u, r), r && Et(l), r && Et(e);
    }
  };
}
function Ae(k) {
  let l, e = (
    /*error*/
    k[37] + ""
  ), A;
  return {
    c() {
      l = et("li"), A = Bt(e), Lt(l, "color", "red"), q(l, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, l, r), Z(l, A);
    },
    p(u, r) {
      r[0] & /*customIdErrors*/
      32768 && e !== (e = /*error*/
      u[37] + "") && Ht(A, e);
    },
    d(u) {
      u && Et(l);
    }
  };
}
function de(k) {
  let l, e = (
    /*error*/
    k[37] + ""
  ), A;
  return {
    c() {
      l = et("li"), A = Bt(e), Lt(l, "color", "red"), q(l, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, l, r), Z(l, A);
    },
    p(u, r) {
      r[0] & /*packageNameErrors*/
      16384 && e !== (e = /*error*/
      u[37] + "") && Ht(A, e);
    },
    d(u) {
      u && Et(l);
    }
  };
}
function fe(k) {
  let l, e = (
    /*version*/
    k[34].version + ""
  ), A;
  return {
    c() {
      l = et("option"), A = Bt(e), l.__value = /*version*/
      k[34].version, l.value = l.__value, q(l, "class", "svelte-c4460r");
    },
    m(u, r) {
      kt(u, l, r), Z(l, A);
    },
    p: Tt,
    d(u) {
      u && Et(l);
    }
  };
}
function pe(k) {
  let l, e, A, u, r, a, n, o, p;
  return {
    c() {
      l = et("div"), e = et("div"), A = et("input"), u = ot(), r = et("label"), r.textContent = "Mojang Mappings", a = ot(), n = et("p"), n.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", q(A, "id", "mojmap"), q(A, "type", "checkbox"), q(A, "class", "option-input svelte-c4460r"), q(r, "for", "mojmap"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(l, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, l, g), Z(l, e), Z(e, A), A.checked = /*mojmap*/
      k[6], Z(e, u), Z(e, r), Z(l, a), Z(l, n), o || (p = Ft(
        A,
        "change",
        /*input_change_handler*/
        k[28]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*mojmap*/
      64 && (A.checked = /*mojmap*/
      m[6]);
    },
    d(m) {
      m && Et(l), o = !1, p();
    }
  };
}
function me(k) {
  let l, e, A, u, r, a, n, o, p;
  return {
    c() {
      l = et("div"), e = et("div"), A = et("input"), u = ot(), r = et("label"), r.textContent = "Data Generation", a = ot(), n = et("p"), n.innerHTML = 'This option configures the <a href="https://docs.fabricmc.net/develop/data-generation/setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', q(A, "id", "datagen"), q(A, "type", "checkbox"), q(A, "class", "option-input svelte-c4460r"), q(r, "for", "datagen"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(l, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, l, g), Z(l, e), Z(e, A), A.checked = /*dataGeneration*/
      k[7], Z(e, u), Z(e, r), Z(l, a), Z(l, n), o || (p = Ft(
        A,
        "change",
        /*input_change_handler_1*/
        k[29]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*dataGeneration*/
      128 && (A.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && Et(l), o = !1, p();
    }
  };
}
function ge(k) {
  let l, e, A, u, r, a, n, o, p;
  return {
    c() {
      l = et("div"), e = et("div"), A = et("input"), u = ot(), r = et("label"), r.textContent = "Split client and common sources", a = ot(), n = et("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, q(A, "id", "splitSources"), q(A, "type", "checkbox"), q(A, "class", "option-input svelte-c4460r"), q(r, "for", "splitSources"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(l, "class", "svelte-c4460r");
    },
    m(m, g) {
      kt(m, l, g), Z(l, e), Z(e, A), A.checked = /*splitSources*/
      k[8], Z(e, u), Z(e, r), Z(l, a), Z(l, n), o || (p = Ft(
        A,
        "change",
        /*input_change_handler_2*/
        k[30]
      ), o = !0);
    },
    p(m, g) {
      g[0] & /*splitSources*/
      256 && (A.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && Et(l), o = !1, p();
    }
  };
}
function or(k) {
  let l, e, A, u, r, a;
  return e = new ke({}), {
    c() {
      l = et("a"), ve(e.$$.fragment), A = Bt(" Download Template (.ZIP)"), q(l, "class", "button primary large download-button svelte-c4460r"), q(l, "href", "");
    },
    m(n, o) {
      kt(n, l, o), ye(e, l, null), Z(l, A), u = !0, r || (a = Ft(l, "click", qt(
        /*generate*/
        k[18]
      )), r = !0);
    },
    p: Tt,
    i(n) {
      u || (Mt(e.$$.fragment, n), u = !0);
    },
    o(n) {
      Dt(e.$$.fragment, n), u = !1;
    },
    d(n) {
      n && Et(l), we(e), r = !1, a();
    }
  };
}
function lr(k) {
  let l, e, A, u;
  return e = new ke({}), {
    c() {
      l = et("a"), ve(e.$$.fragment), A = Bt(" Generating..."), q(l, "class", "button primary download-button svelte-c4460r"), q(l, "href", "");
    },
    m(r, a) {
      kt(r, l, a), ye(e, l, null), Z(l, A), u = !0;
    },
    p: Tt,
    i(r) {
      u || (Mt(e.$$.fragment, r), u = !0);
    },
    o(r) {
      Dt(e.$$.fragment, r), u = !1;
    },
    d(r) {
      r && Et(l), we(e);
    }
  };
}
function cr(k) {
  let l, e, A, u;
  return {
    c() {
      l = et("p"), e = Bt(`Loading data
    
        
        `), A = et("span"), u = Bt("..."), Lt(A, "font-family", zt);
    },
    m(r, a) {
      kt(r, l, a), Z(l, e), Z(l, A), Z(A, u);
    },
    p: Tt,
    i: Tt,
    o: Tt,
    d(r) {
      r && Et(l);
    }
  };
}
function ur(k) {
  let l, e, A = {
    ctx: k,
    current: null,
    token: null,
    hasCatch: !0,
    pending: cr,
    then: ir,
    catch: rr,
    value: 33,
    error: 37,
    blocks: [, , ,]
  };
  return Ge(
    /*versions*/
    k[17],
    A
  ), {
    c() {
      l = Le(), A.block.c();
    },
    m(u, r) {
      kt(u, l, r), A.block.m(u, A.anchor = r), A.mount = () => l.parentNode, A.anchor = l, e = !0;
    },
    p(u, r) {
      k = u, Qe(A, k, r);
    },
    i(u) {
      e || (Mt(A.block), e = !0);
    },
    o(u) {
      for (let r = 0; r < 3; r += 1) {
        const a = A.blocks[r];
        Dt(a);
      }
      e = !1;
    },
    d(u) {
      u && Et(l), A.block.d(u), A.token = null, A = null;
    }
  };
}
function hr(k, l, e) {
  let A, u, r, a, n, o, p, m, g = "Template Mod", v = "com.example", c = !1, b = !0, s = !1, f = !0, h = !1, w, C = !1;
  const R = Promise.all([Ve()]).then(([D]) => (e(0, m = D.find((x) => x.stable).version), { game: D }));
  function N(D) {
    if (D !== void 0)
      return Je(D, w === void 0);
  }
  async function L() {
    if (n !== void 0 || w !== void 0 && o !== void 0 || p.length > 0)
      return;
    e(10, C = !0);
    const D = await Promise.resolve().then(() => nr), x = {
      modid: w ?? A,
      minecraftVersion: m,
      projectName: g,
      packageName: v,
      useKotlin: c,
      mojmap: b || a,
      dataGeneration: s && u,
      splitSources: f && r,
      uniqueModIcon: !0,
      gradleKotlin: h
    }, F = new tn();
    await D.generateTemplate({
      config: x,
      writer: {
        write: async (K, P, H) => {
          F.file(K, P, {
            unixPermissions: H != null && H.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(K, P) {
          const H = document.createElement("canvas");
          return H.width = K, H.height = P, {
            getContext: (lt) => H.getContext(lt),
            getPng: () => Yt(H.toDataURL().split(";base64,")[1]),
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
    }), nn.saveAs(await F.generateAsync({ type: "blob", platform: "UNIX" }), `${A}-template-${x.minecraftVersion}.zip`), e(10, C = !1);
  }
  function T() {
    e(1, g = g.trim());
  }
  function Y() {
    e(2, v = vn(v));
  }
  function W() {
    e(3, w = A);
  }
  function X() {
    e(3, w = void 0);
  }
  function rt() {
    g = this.value, e(1, g);
  }
  function E() {
    w = this.value, e(3, w);
  }
  function _() {
    v = this.value, e(2, v);
  }
  function i() {
    m = je(this), e(0, m), e(17, R);
  }
  function j() {
    c = this.checked, e(5, c);
  }
  function it() {
    b = this.checked, e(6, b);
  }
  function S() {
    s = this.checked, e(7, s);
  }
  function G() {
    f = this.checked, e(8, f);
  }
  function B() {
    h = this.checked, e(9, h);
  }
  return k.$$.update = () => {
    k.$$.dirty[0] & /*projectName*/
    2 && e(4, A = Ze(g)), k.$$.dirty[0] & /*minecraftVersion*/
    1 && e(12, u = Se(m || "1.99")), k.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, r = xe(m || "1.99")), k.$$.dirty[0] & /*minecraftVersion*/
    1 && e(13, a = Ce(m || "1.99")), k.$$.dirty[0] & /*modid*/
    16 && e(16, n = N(A)), k.$$.dirty[0] & /*customModId*/
    8 && e(15, o = Pe(w)), k.$$.dirty[0] & /*packageName*/
    4 && e(14, p = pn(v));
  }, [
    m,
    g,
    v,
    w,
    A,
    c,
    b,
    s,
    f,
    h,
    C,
    r,
    u,
    a,
    p,
    o,
    n,
    R,
    L,
    T,
    Y,
    W,
    X,
    rt,
    E,
    _,
    i,
    j,
    it,
    S,
    G,
    B
  ];
}
class mr extends _e {
  constructor(l) {
    super(), We(this, l, hr, ur, Te, {}, null, [-1, -1]);
  }
}
export {
  mr as default
};
