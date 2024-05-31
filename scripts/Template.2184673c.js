import { S as Be, i as Ie, s as Fe, h as Re, b as _e, c as kt, u as Ne, o as zt, p as Dt, d as Et, q as Oe, e as nt, t as Ft, a as lt, f as Vt, g as Y, n as Ot, k as K, r as Te, C as Ut, l as qt, m as Rt, D as Ue, E as Ve, j as Pt, B as de, A as Zt, y as Ht, v as fe, w as pe, x as me } from "./index.4deac2e0.js";
import ge from "./DownloadIcon.39c279f6.js";
import { d as Ge, b as Le, h as Me, i as ze, j as De } from "./Api.4fd96799.js";
var Nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ve(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
function jt(E) {
  throw new Error('Could not dynamically require "' + E + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var be = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(E, d) {
  (function(e) {
    E.exports = e();
  })(function() {
    return function e(p, c, r) {
      function a(f, m) {
        if (!c[f]) {
          if (!p[f]) {
            var v = typeof jt == "function" && jt;
            if (!m && v)
              return v(f, !0);
            if (n)
              return n(f, !0);
            var w = new Error("Cannot find module '" + f + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var l = c[f] = { exports: {} };
          p[f][0].call(l.exports, function(g) {
            var s = p[f][1][g];
            return a(s || g);
          }, l, l.exports, e, p, c, r);
        }
        return c[f].exports;
      }
      for (var n = typeof jt == "function" && jt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, p, c) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var f, m, v, w, l, g, s, A = [], u = 0, y = o.length, x = y, N = r.getTypeOf(o) !== "string"; u < o.length; )
          x = y - u, v = N ? (f = o[u++], m = u < y ? o[u++] : 0, u < y ? o[u++] : 0) : (f = o.charCodeAt(u++), m = u < y ? o.charCodeAt(u++) : 0, u < y ? o.charCodeAt(u++) : 0), w = f >> 2, l = (3 & f) << 4 | m >> 4, g = 1 < x ? (15 & m) << 2 | v >> 6 : 64, s = 2 < x ? 63 & v : 64, A.push(n.charAt(w) + n.charAt(l) + n.charAt(g) + n.charAt(s));
        return A.join("");
      }, c.decode = function(o) {
        var f, m, v, w, l, g, s = 0, A = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var y, x = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && x--, o.charAt(o.length - 2) === n.charAt(64) && x--, x % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (y = a.uint8array ? new Uint8Array(0 | x) : new Array(0 | x); s < o.length; )
          f = n.indexOf(o.charAt(s++)) << 2 | (w = n.indexOf(o.charAt(s++))) >> 4, m = (15 & w) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, v = (3 & l) << 6 | (g = n.indexOf(o.charAt(s++))), y[A++] = f, l !== 64 && (y[A++] = m), g !== 64 && (y[A++] = v);
        return y;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, p, c) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function f(m, v, w, l, g) {
        this.compressedSize = m, this.uncompressedSize = v, this.crc32 = w, this.compression = l, this.compressedContent = g;
      }
      f.prototype = { getContentWorker: function() {
        var m = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), v = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== v.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, f.createWorkerFrom = function(m, v, w) {
        return m.pipe(new n()).pipe(new o("uncompressedSize")).pipe(v.compressWorker(w)).pipe(new o("compressedSize")).withStreamInfo("compression", v);
      }, p.exports = f;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, p, c) {
      var r = e("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, c.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, p, c) {
      var r = e("./utils"), a = function() {
        for (var n, o = [], f = 0; f < 256; f++) {
          n = f;
          for (var m = 0; m < 8; m++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          o[f] = n;
        }
        return o;
      }();
      p.exports = function(n, o) {
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(f, m, v, w) {
          var l = a, g = w + v;
          f ^= -1;
          for (var s = w; s < g; s++)
            f = f >>> 8 ^ l[255 & (f ^ m[s])];
          return -1 ^ f;
        }(0 | o, n, n.length, 0) : function(f, m, v, w) {
          var l = a, g = w + v;
          f ^= -1;
          for (var s = w; s < g; s++)
            f = f >>> 8 ^ l[255 & (f ^ m.charCodeAt(s))];
          return -1 ^ f;
        }(0 | o, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, p, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(e, p, c) {
      var r = null;
      r = typeof Promise < "u" ? Promise : e("lie"), p.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(e, p, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", a = e("pako"), n = e("./utils"), o = e("./stream/GenericWorker"), f = r ? "uint8array" : "array";
      function m(v, w) {
        o.call(this, "FlateWorker/" + v), this._pako = null, this._pakoAction = v, this._pakoOptions = w, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(v) {
        this.meta = v.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(f, v.data), !1);
      }, m.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var v = this;
        this._pako.onData = function(w) {
          v.push({ data: w, meta: v.meta });
        };
      }, c.compressWorker = function(v) {
        return new m("Deflate", v);
      }, c.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, p, c) {
      function r(l, g) {
        var s, A = "";
        for (s = 0; s < g; s++)
          A += String.fromCharCode(255 & l), l >>>= 8;
        return A;
      }
      function a(l, g, s, A, u, y) {
        var x, N, R = l.file, M = l.compression, G = y !== f.utf8encode, P = n.transformTo("string", y(R.name)), V = n.transformTo("string", f.utf8encode(R.name)), H = R.comment, rt = n.transformTo("string", y(H)), k = n.transformTo("string", f.utf8encode(H)), T = V.length !== R.name.length, i = k.length !== H.length, D = "", it = "", C = "", U = R.dir, F = R.date, j = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !s || (j.crc32 = l.crc32, j.compressedSize = l.compressedSize, j.uncompressedSize = l.uncompressedSize);
        var S = 0;
        g && (S |= 8), G || !T && !i || (S |= 2048);
        var B = 0, q = 0;
        U && (B |= 16), u === "UNIX" ? (q = 798, B |= function(X, ct) {
          var gt = X;
          return X || (gt = ct ? 16893 : 33204), (65535 & gt) << 16;
        }(R.unixPermissions, U)) : (q = 20, B |= function(X) {
          return 63 & (X || 0);
        }(R.dosPermissions)), x = F.getUTCHours(), x <<= 6, x |= F.getUTCMinutes(), x <<= 5, x |= F.getUTCSeconds() / 2, N = F.getUTCFullYear() - 1980, N <<= 4, N |= F.getUTCMonth() + 1, N <<= 5, N |= F.getUTCDate(), T && (it = r(1, 1) + r(m(P), 4) + V, D += "up" + r(it.length, 2) + it), i && (C = r(1, 1) + r(m(rt), 4) + k, D += "uc" + r(C.length, 2) + C);
        var Z = "";
        return Z += `
\0`, Z += r(S, 2), Z += M.magic, Z += r(x, 2), Z += r(N, 2), Z += r(j.crc32, 4), Z += r(j.compressedSize, 4), Z += r(j.uncompressedSize, 4), Z += r(P.length, 2), Z += r(D.length, 2), { fileRecord: v.LOCAL_FILE_HEADER + Z + P + D, dirRecord: v.CENTRAL_FILE_HEADER + r(q, 2) + Z + r(rt.length, 2) + "\0\0\0\0" + r(B, 4) + r(A, 4) + P + D + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), f = e("../utf8"), m = e("../crc32"), v = e("../signature");
      function w(l, g, s, A) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = s, this.encodeFileName = A, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(w, o), w.prototype.push = function(l) {
        var g = l.meta.percent || 0, s = this.entriesCount, A = this._sources.length;
        this.accumulate ? this.contentBuffer.push(l) : (this.bytesWritten += l.data.length, o.prototype.push.call(this, { data: l.data, meta: { currentFile: this.currentFile, percent: s ? (g + 100 * (s - A - 1)) / s : 100 } }));
      }, w.prototype.openedSource = function(l) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = l.file.name;
        var g = this.streamFiles && !l.file.dir;
        if (g) {
          var s = a(l, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, w.prototype.closedSource = function(l) {
        this.accumulate = !1;
        var g = this.streamFiles && !l.file.dir, s = a(l, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(s.dirRecord), g)
          this.push({ data: function(A) {
            return v.DATA_DESCRIPTOR + r(A.crc32, 4) + r(A.compressedSize, 4) + r(A.uncompressedSize, 4);
          }(l), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, w.prototype.flush = function() {
        for (var l = this.bytesWritten, g = 0; g < this.dirRecords.length; g++)
          this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var s = this.bytesWritten - l, A = function(u, y, x, N, R) {
          var M = n.transformTo("string", R(N));
          return v.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(y, 4) + r(x, 4) + r(M.length, 2) + M;
        }(this.dirRecords.length, s, l, this.zipComment, this.encodeFileName);
        this.push({ data: A, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(l) {
        this._sources.push(l);
        var g = this;
        return l.on("data", function(s) {
          g.processChunk(s);
        }), l.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), l.on("error", function(s) {
          g.error(s);
        }), this;
      }, w.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(l) {
        var g = this._sources;
        if (!o.prototype.error.call(this, l))
          return !1;
        for (var s = 0; s < g.length; s++)
          try {
            g[s].error(l);
          } catch {
          }
        return !0;
      }, w.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var l = this._sources, g = 0; g < l.length; g++)
          l[g].lock();
      }, p.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, p, c) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(n, o, f) {
        var m = new a(o.streamFiles, f, o.platform, o.encodeFileName), v = 0;
        try {
          n.forEach(function(w, l) {
            v++;
            var g = function(y, x) {
              var N = y || x, R = r[N];
              if (!R)
                throw new Error(N + " is not a valid compression method !");
              return R;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, A = l.dir, u = l.date;
            l._compressWorker(g, s).withStreamInfo("file", { name: w, dir: A, date: u, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = v;
        } catch (w) {
          m.error(w);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, p, c) {
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
      }, r.external = e("./external"), p.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, p, c) {
      var r = e("./utils"), a = e("./external"), n = e("./utf8"), o = e("./zipEntries"), f = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
      function v(w) {
        return new a.Promise(function(l, g) {
          var s = w.decompressed.getContentWorker().pipe(new f());
          s.on("error", function(A) {
            g(A);
          }).on("end", function() {
            s.streamInfo.crc32 !== w.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : l();
          }).resume();
        });
      }
      p.exports = function(w, l) {
        var g = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(w) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", w, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var A = new o(l);
          return A.load(s), A;
        }).then(function(s) {
          var A = [a.Promise.resolve(s)], u = s.files;
          if (l.checkCRC32)
            for (var y = 0; y < u.length; y++)
              A.push(v(u[y]));
          return a.Promise.all(A);
        }).then(function(s) {
          for (var A = s.shift(), u = A.files, y = 0; y < u.length; y++) {
            var x = u[y], N = x.fileNameStr, R = r.resolve(x.fileNameStr);
            g.file(R, x.decompressed, { binary: !0, optimizedBinaryString: !0, date: x.date, dir: x.dir, comment: x.fileCommentStr.length ? x.fileCommentStr : null, unixPermissions: x.unixPermissions, dosPermissions: x.dosPermissions, createFolders: l.createFolders }), x.dir || (g.file(R).unsafeOriginalName = N);
          }
          return A.zipComment.length && (g.comment = A.zipComment), g;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, p, c) {
      var r = e("../utils"), a = e("../stream/GenericWorker");
      function n(o, f) {
        a.call(this, "Nodejs stream input adapter for " + o), this._upstreamEnded = !1, this._bindStream(f);
      }
      r.inherits(n, a), n.prototype._bindStream = function(o) {
        var f = this;
        (this._stream = o).pause(), o.on("data", function(m) {
          f.push({ data: m, meta: { percent: 0 } });
        }).on("error", function(m) {
          f.isPaused ? this.generatedError = m : f.error(m);
        }).on("end", function() {
          f.isPaused ? f._upstreamEnded = !0 : f.end();
        });
      }, n.prototype.pause = function() {
        return !!a.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!a.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, p.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, p, c) {
      var r = e("readable-stream").Readable;
      function a(n, o, f) {
        r.call(this, o), this._helper = n;
        var m = this;
        n.on("data", function(v, w) {
          m.push(v) || m._helper.pause(), f && f(w);
        }).on("error", function(v) {
          m.emit("error", v);
        }).on("end", function() {
          m.push(null);
        });
      }
      e("../utils").inherits(a, r), a.prototype._read = function() {
        this._helper.resume();
      }, p.exports = a;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, p, c) {
      p.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, a) {
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
    }, {}], 15: [function(e, p, c) {
      function r(R, M, G) {
        var P, V = n.getTypeOf(M), H = n.extend(G || {}, m);
        H.date = H.date || /* @__PURE__ */ new Date(), H.compression !== null && (H.compression = H.compression.toUpperCase()), typeof H.unixPermissions == "string" && (H.unixPermissions = parseInt(H.unixPermissions, 8)), H.unixPermissions && 16384 & H.unixPermissions && (H.dir = !0), H.dosPermissions && 16 & H.dosPermissions && (H.dir = !0), H.dir && (R = u(R)), H.createFolders && (P = A(R)) && y.call(this, P, !0);
        var rt = V === "string" && H.binary === !1 && H.base64 === !1;
        G && G.binary !== void 0 || (H.binary = !rt), (M instanceof v && M.uncompressedSize === 0 || H.dir || !M || M.length === 0) && (H.base64 = !1, H.binary = !0, M = "", H.compression = "STORE", V = "string");
        var k = null;
        k = M instanceof v || M instanceof o ? M : g.isNode && g.isStream(M) ? new s(R, M) : n.prepareContent(R, M, H.binary, H.optimizedBinaryString, H.base64);
        var T = new w(R, k, H);
        this.files[R] = T;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), f = e("./stream/StreamHelper"), m = e("./defaults"), v = e("./compressedObject"), w = e("./zipObject"), l = e("./generate"), g = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), A = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var M = R.lastIndexOf("/");
        return 0 < M ? R.substring(0, M) : "";
      }, u = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, y = function(R, M) {
        return M = M !== void 0 ? M : m.createFolders, R = u(R), this.files[R] || r.call(this, R, null, { dir: !0, createFolders: M }), this.files[R];
      };
      function x(R) {
        return Object.prototype.toString.call(R) === "[object RegExp]";
      }
      var N = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(R) {
        var M, G, P;
        for (M in this.files)
          P = this.files[M], (G = M.slice(this.root.length, M.length)) && M.slice(0, this.root.length) === this.root && R(G, P);
      }, filter: function(R) {
        var M = [];
        return this.forEach(function(G, P) {
          R(G, P) && M.push(P);
        }), M;
      }, file: function(R, M, G) {
        if (arguments.length !== 1)
          return R = this.root + R, r.call(this, R, M, G), this;
        if (x(R)) {
          var P = R;
          return this.filter(function(H, rt) {
            return !rt.dir && P.test(H);
          });
        }
        var V = this.files[this.root + R];
        return V && !V.dir ? V : null;
      }, folder: function(R) {
        if (!R)
          return this;
        if (x(R))
          return this.filter(function(V, H) {
            return H.dir && R.test(V);
          });
        var M = this.root + R, G = y.call(this, M), P = this.clone();
        return P.root = G.name, P;
      }, remove: function(R) {
        R = this.root + R;
        var M = this.files[R];
        if (M || (R.slice(-1) !== "/" && (R += "/"), M = this.files[R]), M && !M.dir)
          delete this.files[R];
        else
          for (var G = this.filter(function(V, H) {
            return H.name.slice(0, R.length) === R;
          }), P = 0; P < G.length; P++)
            delete this.files[G[P].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(R) {
        var M, G = {};
        try {
          if ((G = n.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = G.type.toLowerCase(), G.compression = G.compression.toUpperCase(), G.type === "binarystring" && (G.type = "string"), !G.type)
            throw new Error("No output type specified.");
          n.checkSupport(G.type), G.platform !== "darwin" && G.platform !== "freebsd" && G.platform !== "linux" && G.platform !== "sunos" || (G.platform = "UNIX"), G.platform === "win32" && (G.platform = "DOS");
          var P = G.comment || this.comment || "";
          M = l.generateWorker(this, G, P);
        } catch (V) {
          (M = new o("error")).error(V);
        }
        return new f(M, G.type || "string", G.mimeType);
      }, generateAsync: function(R, M) {
        return this.generateInternalStream(R).accumulate(M);
      }, generateNodeStream: function(R, M) {
        return (R = R || {}).type || (R.type = "nodebuffer"), this.generateInternalStream(R).toNodejsStream(M);
      } };
      p.exports = N;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, p, c) {
      p.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, p, c) {
      var r = e("./DataReader");
      function a(n) {
        r.call(this, n);
        for (var o = 0; o < this.data.length; o++)
          n[o] = 255 & n[o];
      }
      e("../utils").inherits(a, r), a.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, a.prototype.lastIndexOfSignature = function(n) {
        for (var o = n.charCodeAt(0), f = n.charCodeAt(1), m = n.charCodeAt(2), v = n.charCodeAt(3), w = this.length - 4; 0 <= w; --w)
          if (this.data[w] === o && this.data[w + 1] === f && this.data[w + 2] === m && this.data[w + 3] === v)
            return w - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var o = n.charCodeAt(0), f = n.charCodeAt(1), m = n.charCodeAt(2), v = n.charCodeAt(3), w = this.readData(4);
        return o === w[0] && f === w[1] && m === w[2] && v === w[3];
      }, a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, p.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, p, c) {
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
        var o, f = 0;
        for (this.checkOffset(n), o = this.index + n - 1; o >= this.index; o--)
          f = (f << 8) + this.byteAt(o);
        return this.index += n, f;
      }, readString: function(n) {
        return r.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, p.exports = a;
    }, { "../utils": 32 }], 19: [function(e, p, c) {
      var r = e("./Uint8ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        this.checkOffset(n);
        var o = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, p.exports = a;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, p, c) {
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
      }, p.exports = a;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, p, c) {
      var r = e("./ArrayReader");
      function a(n) {
        r.call(this, n);
      }
      e("../utils").inherits(a, r), a.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var o = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, o;
      }, p.exports = a;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, p, c) {
      var r = e("../utils"), a = e("../support"), n = e("./ArrayReader"), o = e("./StringReader"), f = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      p.exports = function(v) {
        var w = r.getTypeOf(v);
        return r.checkSupport(w), w !== "string" || a.uint8array ? w === "nodebuffer" ? new f(v) : a.uint8array ? new m(r.transformTo("uint8array", v)) : new n(r.transformTo("array", v)) : new o(v);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, p, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, p, c) {
      var r = e("./GenericWorker"), a = e("../utils");
      function n(o) {
        r.call(this, "ConvertWorker to " + o), this.destType = o;
      }
      a.inherits(n, r), n.prototype.processChunk = function(o) {
        this.push({ data: a.transformTo(this.destType, o.data), meta: o.meta });
      }, p.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, p, c) {
      var r = e("./GenericWorker"), a = e("../crc32");
      function n() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(n, r), n.prototype.processChunk = function(o) {
        this.streamInfo.crc32 = a(o.data, this.streamInfo.crc32 || 0), this.push(o);
      }, p.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, p, c) {
      var r = e("../utils"), a = e("./GenericWorker");
      function n(o) {
        a.call(this, "DataLengthProbe for " + o), this.propName = o, this.withStreamInfo(o, 0);
      }
      r.inherits(n, a), n.prototype.processChunk = function(o) {
        if (o) {
          var f = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = f + o.data.length;
        }
        a.prototype.processChunk.call(this, o);
      }, p.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, p, c) {
      var r = e("../utils"), a = e("./GenericWorker");
      function n(o) {
        a.call(this, "DataWorker");
        var f = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, o.then(function(m) {
          f.dataIsReady = !0, f.data = m, f.max = m && m.length || 0, f.type = r.getTypeOf(m), f.isPaused || f._tickAndRepeat();
        }, function(m) {
          f.error(m);
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
        var o = null, f = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            o = this.data.substring(this.index, f);
            break;
          case "uint8array":
            o = this.data.subarray(this.index, f);
            break;
          case "array":
          case "nodebuffer":
            o = this.data.slice(this.index, f);
        }
        return this.index = f, this.push({ data: o, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, p.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, p, c) {
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
      } }, p.exports = r;
    }, {}], 29: [function(e, p, c) {
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), f = e("../support"), m = e("../external"), v = null;
      if (f.nodestream)
        try {
          v = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function w(g, s) {
        return new m.Promise(function(A, u) {
          var y = [], x = g._internalType, N = g._outputType, R = g._mimeType;
          g.on("data", function(M, G) {
            y.push(M), s && s(G);
          }).on("error", function(M) {
            y = [], u(M);
          }).on("end", function() {
            try {
              var M = function(G, P, V) {
                switch (G) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", P), V);
                  case "base64":
                    return o.encode(P);
                  default:
                    return r.transformTo(G, P);
                }
              }(N, function(G, P) {
                var V, H = 0, rt = null, k = 0;
                for (V = 0; V < P.length; V++)
                  k += P[V].length;
                switch (G) {
                  case "string":
                    return P.join("");
                  case "array":
                    return Array.prototype.concat.apply([], P);
                  case "uint8array":
                    for (rt = new Uint8Array(k), V = 0; V < P.length; V++)
                      rt.set(P[V], H), H += P[V].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(P);
                  default:
                    throw new Error("concat : unsupported type '" + G + "'");
                }
              }(x, y), R);
              A(M);
            } catch (G) {
              u(G);
            }
            y = [];
          }).resume();
        });
      }
      function l(g, s, A) {
        var u = s;
        switch (s) {
          case "blob":
          case "arraybuffer":
            u = "uint8array";
            break;
          case "base64":
            u = "string";
        }
        try {
          this._internalType = u, this._outputType = s, this._mimeType = A, r.checkSupport(u), this._worker = g.pipe(new a(u)), g.lock();
        } catch (y) {
          this._worker = new n("error"), this._worker.error(y);
        }
      }
      l.prototype = { accumulate: function(g) {
        return w(this, g);
      }, on: function(g, s) {
        var A = this;
        return g === "data" ? this._worker.on(g, function(u) {
          s.call(A, u.data, u.meta);
        }) : this._worker.on(g, function() {
          r.delay(s, arguments, A);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(g) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new v(this, { objectMode: this._outputType !== "nodebuffer" }, g);
      } }, p.exports = l;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, p, c) {
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
    }, { "readable-stream": 16 }], 31: [function(e, p, c) {
      for (var r = e("./utils"), a = e("./support"), n = e("./nodejsUtils"), o = e("./stream/GenericWorker"), f = new Array(256), m = 0; m < 256; m++)
        f[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      f[254] = f[254] = 1;
      function v() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function w() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(g) {
          var s, A, u, y, x, N = g.length, R = 0;
          for (y = 0; y < N; y++)
            (64512 & (A = g.charCodeAt(y))) == 55296 && y + 1 < N && (64512 & (u = g.charCodeAt(y + 1))) == 56320 && (A = 65536 + (A - 55296 << 10) + (u - 56320), y++), R += A < 128 ? 1 : A < 2048 ? 2 : A < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(R) : new Array(R), y = x = 0; x < R; y++)
            (64512 & (A = g.charCodeAt(y))) == 55296 && y + 1 < N && (64512 & (u = g.charCodeAt(y + 1))) == 56320 && (A = 65536 + (A - 55296 << 10) + (u - 56320), y++), A < 128 ? s[x++] = A : (A < 2048 ? s[x++] = 192 | A >>> 6 : (A < 65536 ? s[x++] = 224 | A >>> 12 : (s[x++] = 240 | A >>> 18, s[x++] = 128 | A >>> 12 & 63), s[x++] = 128 | A >>> 6 & 63), s[x++] = 128 | 63 & A);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(g) {
          var s, A, u, y, x = g.length, N = new Array(2 * x);
          for (s = A = 0; s < x; )
            if ((u = g[s++]) < 128)
              N[A++] = u;
            else if (4 < (y = f[u]))
              N[A++] = 65533, s += y - 1;
            else {
              for (u &= y === 2 ? 31 : y === 3 ? 15 : 7; 1 < y && s < x; )
                u = u << 6 | 63 & g[s++], y--;
              1 < y ? N[A++] = 65533 : u < 65536 ? N[A++] = u : (u -= 65536, N[A++] = 55296 | u >> 10 & 1023, N[A++] = 56320 | 1023 & u);
            }
          return N.length !== A && (N.subarray ? N = N.subarray(0, A) : N.length = A), r.applyFromCharCode(N);
        }(l = r.transformTo(a.uint8array ? "uint8array" : "array", l));
      }, r.inherits(v, o), v.prototype.processChunk = function(l) {
        var g = r.transformTo(a.uint8array ? "uint8array" : "array", l.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = g;
            (g = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), g.set(s, this.leftOver.length);
          } else
            g = this.leftOver.concat(g);
          this.leftOver = null;
        }
        var A = function(y, x) {
          var N;
          for ((x = x || y.length) > y.length && (x = y.length), N = x - 1; 0 <= N && (192 & y[N]) == 128; )
            N--;
          return N < 0 || N === 0 ? x : N + f[y[N]] > x ? N : x;
        }(g), u = g;
        A !== g.length && (a.uint8array ? (u = g.subarray(0, A), this.leftOver = g.subarray(A, g.length)) : (u = g.slice(0, A), this.leftOver = g.slice(A, g.length))), this.push({ data: c.utf8decode(u), meta: l.meta });
      }, v.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = v, r.inherits(w, o), w.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = w;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, p, c) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function f(s) {
        return s;
      }
      function m(s, A) {
        for (var u = 0; u < s.length; ++u)
          A[u] = 255 & s.charCodeAt(u);
        return A;
      }
      e("setimmediate"), c.newBlob = function(s, A) {
        c.checkSupport("blob");
        try {
          return new Blob([s], { type: A });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(s), u.getBlob(A);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var v = { stringifyByChunk: function(s, A, u) {
        var y = [], x = 0, N = s.length;
        if (N <= u)
          return String.fromCharCode.apply(null, s);
        for (; x < N; )
          A === "array" || A === "nodebuffer" ? y.push(String.fromCharCode.apply(null, s.slice(x, Math.min(x + u, N)))) : y.push(String.fromCharCode.apply(null, s.subarray(x, Math.min(x + u, N)))), x += u;
        return y.join("");
      }, stringifyByChar: function(s) {
        for (var A = "", u = 0; u < s.length; u++)
          A += String.fromCharCode(s[u]);
        return A;
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
      function w(s) {
        var A = 65536, u = c.getTypeOf(s), y = !0;
        if (u === "uint8array" ? y = v.applyCanBeUsed.uint8array : u === "nodebuffer" && (y = v.applyCanBeUsed.nodebuffer), y)
          for (; 1 < A; )
            try {
              return v.stringifyByChunk(s, u, A);
            } catch {
              A = Math.floor(A / 2);
            }
        return v.stringifyByChar(s);
      }
      function l(s, A) {
        for (var u = 0; u < s.length; u++)
          A[u] = s[u];
        return A;
      }
      c.applyFromCharCode = w;
      var g = {};
      g.string = { string: f, array: function(s) {
        return m(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.string.uint8array(s).buffer;
      }, uint8array: function(s) {
        return m(s, new Uint8Array(s.length));
      }, nodebuffer: function(s) {
        return m(s, n.allocBuffer(s.length));
      } }, g.array = { string: w, array: f, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.arraybuffer = { string: function(s) {
        return w(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: f, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, g.uint8array = { string: w, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: f, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.nodebuffer = { string: w, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.nodebuffer.uint8array(s).buffer;
      }, uint8array: function(s) {
        return l(s, new Uint8Array(s.length));
      }, nodebuffer: f }, c.transformTo = function(s, A) {
        if (A = A || "", !s)
          return A;
        c.checkSupport(s);
        var u = c.getTypeOf(A);
        return g[u][s](A);
      }, c.resolve = function(s) {
        for (var A = s.split("/"), u = [], y = 0; y < A.length; y++) {
          var x = A[y];
          x === "." || x === "" && y !== 0 && y !== A.length - 1 || (x === ".." ? u.pop() : u.push(x));
        }
        return u.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(s) {
        var A, u, y = "";
        for (u = 0; u < (s || "").length; u++)
          y += "\\x" + ((A = s.charCodeAt(u)) < 16 ? "0" : "") + A.toString(16).toUpperCase();
        return y;
      }, c.delay = function(s, A, u) {
        setImmediate(function() {
          s.apply(u || null, A || []);
        });
      }, c.inherits = function(s, A) {
        function u() {
        }
        u.prototype = A.prototype, s.prototype = new u();
      }, c.extend = function() {
        var s, A, u = {};
        for (s = 0; s < arguments.length; s++)
          for (A in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], A) && u[A] === void 0 && (u[A] = arguments[s][A]);
        return u;
      }, c.prepareContent = function(s, A, u, y, x) {
        return o.Promise.resolve(A).then(function(N) {
          return r.blob && (N instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(N)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(R, M) {
            var G = new FileReader();
            G.onload = function(P) {
              R(P.target.result);
            }, G.onerror = function(P) {
              M(P.target.error);
            }, G.readAsArrayBuffer(N);
          }) : N;
        }).then(function(N) {
          var R = c.getTypeOf(N);
          return R ? (R === "arraybuffer" ? N = c.transformTo("uint8array", N) : R === "string" && (x ? N = a.decode(N) : u && y !== !0 && (N = function(M) {
            return m(M, r.uint8array ? new Uint8Array(M.length) : new Array(M.length));
          }(N))), N) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, p, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./signature"), o = e("./zipEntry"), f = e("./support");
      function m(v) {
        this.files = [], this.loadOptions = v;
      }
      m.prototype = { checkSignature: function(v) {
        if (!this.reader.readAndCheckSignature(v)) {
          this.reader.index -= 4;
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(w) + ", expected " + a.pretty(v) + ")");
        }
      }, isSignature: function(v, w) {
        var l = this.reader.index;
        this.reader.setIndex(v);
        var g = this.reader.readString(4) === w;
        return this.reader.setIndex(l), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var v = this.reader.readData(this.zipCommentLength), w = f.uint8array ? "uint8array" : "array", l = a.transformTo(w, v);
        this.zipComment = this.loadOptions.decodeFileName(l);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var v, w, l, g = this.zip64EndOfCentralSize - 44; 0 < g; )
          v = this.reader.readInt(2), w = this.reader.readInt(4), l = this.reader.readData(w), this.zip64ExtensibleData[v] = { id: v, length: w, value: l };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var v, w;
        for (v = 0; v < this.files.length; v++)
          w = this.files[v], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
      }, readCentralDir: function() {
        var v;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (v = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(v);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var v = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (v < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(v);
        var w = v;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (v = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(v), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var g = w - l;
        if (0 < g)
          this.isSignature(w, n.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(v) {
        this.reader = r(v);
      }, load: function(v) {
        this.prepareReader(v), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, p.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, p, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), f = e("./utf8"), m = e("./compressions"), v = e("./support");
      function w(l, g) {
        this.options = l, this.loadOptions = g;
      }
      w.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(l) {
        var g, s;
        if (l.skip(22), this.fileNameLength = l.readInt(2), s = l.readInt(2), this.fileName = l.readData(this.fileNameLength), l.skip(s), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((g = function(A) {
          for (var u in m)
            if (Object.prototype.hasOwnProperty.call(m, u) && m[u].magic === A)
              return m[u];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + a.pretty(this.compressionMethod) + " unknown (inner file : " + a.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, g, l.readData(this.compressedSize));
      }, readCentralPart: function(l) {
        this.versionMadeBy = l.readInt(2), l.skip(2), this.bitFlag = l.readInt(2), this.compressionMethod = l.readString(2), this.date = l.readDate(), this.crc32 = l.readInt(4), this.compressedSize = l.readInt(4), this.uncompressedSize = l.readInt(4);
        var g = l.readInt(2);
        if (this.extraFieldsLength = l.readInt(2), this.fileCommentLength = l.readInt(2), this.diskNumberStart = l.readInt(2), this.internalFileAttributes = l.readInt(2), this.externalFileAttributes = l.readInt(4), this.localHeaderOffset = l.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        l.skip(g), this.readExtraFields(l), this.parseZIP64ExtraField(l), this.fileComment = l.readData(this.fileCommentLength);
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
        var g, s, A, u = l.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); l.index + 4 < u; )
          g = l.readInt(2), s = l.readInt(2), A = l.readData(s), this.extraFields[g] = { id: g, length: s, value: A };
        l.setIndex(u);
      }, handleUTF8: function() {
        var l = v.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = f.utf8decode(this.fileName), this.fileCommentStr = f.utf8decode(this.fileComment);
        else {
          var g = this.findExtraFieldUnicodePath();
          if (g !== null)
            this.fileNameStr = g;
          else {
            var s = a.transformTo(l, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(s);
          }
          var A = this.findExtraFieldUnicodeComment();
          if (A !== null)
            this.fileCommentStr = A;
          else {
            var u = a.transformTo(l, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var l = this.extraFields[28789];
        if (l) {
          var g = r(l.value);
          return g.readInt(1) !== 1 || o(this.fileName) !== g.readInt(4) ? null : f.utf8decode(g.readData(l.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var l = this.extraFields[25461];
        if (l) {
          var g = r(l.value);
          return g.readInt(1) !== 1 || o(this.fileComment) !== g.readInt(4) ? null : f.utf8decode(g.readData(l.length - 5));
        }
        return null;
      } }, p.exports = w;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, p, c) {
      function r(g, s, A) {
        this.name = g, this.dir = A.dir, this.date = A.date, this.comment = A.comment, this.unixPermissions = A.unixPermissions, this.dosPermissions = A.dosPermissions, this._data = s, this._dataBinary = A.binary, this.options = { compression: A.compression, compressionOptions: A.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), f = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(g) {
        var s = null, A = "string";
        try {
          if (!g)
            throw new Error("No output type specified.");
          var u = (A = g.toLowerCase()) === "string" || A === "text";
          A !== "binarystring" && A !== "text" || (A = "string"), s = this._decompressWorker();
          var y = !this._dataBinary;
          y && !u && (s = s.pipe(new o.Utf8EncodeWorker())), !y && u && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (x) {
          (s = new m("error")).error(x);
        }
        return new a(s, A, "");
      }, async: function(g, s) {
        return this.internalStream(g).accumulate(s);
      }, nodeStream: function(g, s) {
        return this.internalStream(g || "nodebuffer").toNodejsStream(s);
      }, _compressWorker: function(g, s) {
        if (this._data instanceof f && this._data.compression.magic === g.magic)
          return this._data.getCompressedWorker();
        var A = this._decompressWorker();
        return this._dataBinary || (A = A.pipe(new o.Utf8EncodeWorker())), f.createWorkerFrom(A, g, s);
      }, _decompressWorker: function() {
        return this._data instanceof f ? this._data.getContentWorker() : this._data instanceof m ? this._data : new n(this._data);
      } };
      for (var v = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < v.length; l++)
        r.prototype[v[l]] = w;
      p.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, p, c) {
      (function(r) {
        var a, n, o = r.MutationObserver || r.WebKitMutationObserver;
        if (o) {
          var f = 0, m = new o(g), v = r.document.createTextNode("");
          m.observe(v, { characterData: !0 }), a = function() {
            v.data = f = ++f % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0)
          a = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
            var s = r.document.createElement("script");
            s.onreadystatechange = function() {
              g(), s.onreadystatechange = null, s.parentNode.removeChild(s), s = null;
            }, r.document.documentElement.appendChild(s);
          } : function() {
            setTimeout(g, 0);
          };
        else {
          var w = new r.MessageChannel();
          w.port1.onmessage = g, a = function() {
            w.port2.postMessage(0);
          };
        }
        var l = [];
        function g() {
          var s, A;
          n = !0;
          for (var u = l.length; u; ) {
            for (A = l, l = [], s = -1; ++s < u; )
              A[s]();
            u = l.length;
          }
          n = !1;
        }
        p.exports = function(s) {
          l.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Nt < "u" ? Nt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, p, c) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], f = ["FULFILLED"], m = ["PENDING"];
      function v(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, u !== a && s(this, u);
      }
      function w(u, y, x) {
        this.promise = u, typeof y == "function" && (this.onFulfilled = y, this.callFulfilled = this.otherCallFulfilled), typeof x == "function" && (this.onRejected = x, this.callRejected = this.otherCallRejected);
      }
      function l(u, y, x) {
        r(function() {
          var N;
          try {
            N = y(x);
          } catch (R) {
            return n.reject(u, R);
          }
          N === u ? n.reject(u, new TypeError("Cannot resolve promise with itself")) : n.resolve(u, N);
        });
      }
      function g(u) {
        var y = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof y == "function")
          return function() {
            y.apply(u, arguments);
          };
      }
      function s(u, y) {
        var x = !1;
        function N(G) {
          x || (x = !0, n.reject(u, G));
        }
        function R(G) {
          x || (x = !0, n.resolve(u, G));
        }
        var M = A(function() {
          y(R, N);
        });
        M.status === "error" && N(M.value);
      }
      function A(u, y) {
        var x = {};
        try {
          x.value = u(y), x.status = "success";
        } catch (N) {
          x.status = "error", x.value = N;
        }
        return x;
      }
      (p.exports = v).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var y = this.constructor;
        return this.then(function(x) {
          return y.resolve(u()).then(function() {
            return x;
          });
        }, function(x) {
          return y.resolve(u()).then(function() {
            throw x;
          });
        });
      }, v.prototype.catch = function(u) {
        return this.then(null, u);
      }, v.prototype.then = function(u, y) {
        if (typeof u != "function" && this.state === f || typeof y != "function" && this.state === o)
          return this;
        var x = new this.constructor(a);
        return this.state !== m ? l(x, this.state === f ? u : y, this.outcome) : this.queue.push(new w(x, u, y)), x;
      }, w.prototype.callFulfilled = function(u) {
        n.resolve(this.promise, u);
      }, w.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, w.prototype.callRejected = function(u) {
        n.reject(this.promise, u);
      }, w.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, n.resolve = function(u, y) {
        var x = A(g, y);
        if (x.status === "error")
          return n.reject(u, x.value);
        var N = x.value;
        if (N)
          s(u, N);
        else {
          u.state = f, u.outcome = y;
          for (var R = -1, M = u.queue.length; ++R < M; )
            u.queue[R].callFulfilled(y);
        }
        return u;
      }, n.reject = function(u, y) {
        u.state = o, u.outcome = y;
        for (var x = -1, N = u.queue.length; ++x < N; )
          u.queue[x].callRejected(y);
        return u;
      }, v.resolve = function(u) {
        return u instanceof this ? u : n.resolve(new this(a), u);
      }, v.reject = function(u) {
        var y = new this(a);
        return n.reject(y, u);
      }, v.all = function(u) {
        var y = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var x = u.length, N = !1;
        if (!x)
          return this.resolve([]);
        for (var R = new Array(x), M = 0, G = -1, P = new this(a); ++G < x; )
          V(u[G], G);
        return P;
        function V(H, rt) {
          y.resolve(H).then(function(k) {
            R[rt] = k, ++M !== x || N || (N = !0, n.resolve(P, R));
          }, function(k) {
            N || (N = !0, n.reject(P, k));
          });
        }
      }, v.race = function(u) {
        var y = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var x = u.length, N = !1;
        if (!x)
          return this.resolve([]);
        for (var R = -1, M = new this(a); ++R < x; )
          G = u[R], y.resolve(G).then(function(P) {
            N || (N = !0, n.resolve(M, P));
          }, function(P) {
            N || (N = !0, n.reject(M, P));
          });
        var G;
        return M;
      };
    }, { immediate: 36 }], 38: [function(e, p, c) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), p.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, p, c) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), f = e("./zlib/zstream"), m = Object.prototype.toString, v = 0, w = -1, l = 0, g = 8;
      function s(u) {
        if (!(this instanceof s))
          return new s(u);
        this.options = a.assign({ level: w, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, u || {});
        var y = this.options;
        y.raw && 0 < y.windowBits ? y.windowBits = -y.windowBits : y.gzip && 0 < y.windowBits && y.windowBits < 16 && (y.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
        var x = r.deflateInit2(this.strm, y.level, y.method, y.windowBits, y.memLevel, y.strategy);
        if (x !== v)
          throw new Error(o[x]);
        if (y.header && r.deflateSetHeader(this.strm, y.header), y.dictionary) {
          var N;
          if (N = typeof y.dictionary == "string" ? n.string2buf(y.dictionary) : m.call(y.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(y.dictionary) : y.dictionary, (x = r.deflateSetDictionary(this.strm, N)) !== v)
            throw new Error(o[x]);
          this._dict_set = !0;
        }
      }
      function A(u, y) {
        var x = new s(y);
        if (x.push(u, !0), x.err)
          throw x.msg || o[x.err];
        return x.result;
      }
      s.prototype.push = function(u, y) {
        var x, N, R = this.strm, M = this.options.chunkSize;
        if (this.ended)
          return !1;
        N = y === ~~y ? y : y === !0 ? 4 : 0, typeof u == "string" ? R.input = n.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? R.input = new Uint8Array(u) : R.input = u, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new a.Buf8(M), R.next_out = 0, R.avail_out = M), (x = r.deflate(R, N)) !== 1 && x !== v)
            return this.onEnd(x), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || N !== 4 && N !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(R.output, R.next_out))) : this.onData(a.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && x !== 1);
        return N === 4 ? (x = r.deflateEnd(this.strm), this.onEnd(x), this.ended = !0, x === v) : N !== 2 || (this.onEnd(v), !(R.avail_out = 0));
      }, s.prototype.onData = function(u) {
        this.chunks.push(u);
      }, s.prototype.onEnd = function(u) {
        u === v && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = s, c.deflate = A, c.deflateRaw = function(u, y) {
        return (y = y || {}).raw = !0, A(u, y);
      }, c.gzip = function(u, y) {
        return (y = y || {}).gzip = !0, A(u, y);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, p, c) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), f = e("./zlib/messages"), m = e("./zlib/zstream"), v = e("./zlib/gzheader"), w = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var A = this.options;
        A.raw && 0 <= A.windowBits && A.windowBits < 16 && (A.windowBits = -A.windowBits, A.windowBits === 0 && (A.windowBits = -15)), !(0 <= A.windowBits && A.windowBits < 16) || s && s.windowBits || (A.windowBits += 32), 15 < A.windowBits && A.windowBits < 48 && !(15 & A.windowBits) && (A.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var u = r.inflateInit2(this.strm, A.windowBits);
        if (u !== o.Z_OK)
          throw new Error(f[u]);
        this.header = new v(), r.inflateGetHeader(this.strm, this.header);
      }
      function g(s, A) {
        var u = new l(A);
        if (u.push(s, !0), u.err)
          throw u.msg || f[u.err];
        return u.result;
      }
      l.prototype.push = function(s, A) {
        var u, y, x, N, R, M, G = this.strm, P = this.options.chunkSize, V = this.options.dictionary, H = !1;
        if (this.ended)
          return !1;
        y = A === ~~A ? A : A === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? G.input = n.binstring2buf(s) : w.call(s) === "[object ArrayBuffer]" ? G.input = new Uint8Array(s) : G.input = s, G.next_in = 0, G.avail_in = G.input.length;
        do {
          if (G.avail_out === 0 && (G.output = new a.Buf8(P), G.next_out = 0, G.avail_out = P), (u = r.inflate(G, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && V && (M = typeof V == "string" ? n.string2buf(V) : w.call(V) === "[object ArrayBuffer]" ? new Uint8Array(V) : V, u = r.inflateSetDictionary(this.strm, M)), u === o.Z_BUF_ERROR && H === !0 && (u = o.Z_OK, H = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          G.next_out && (G.avail_out !== 0 && u !== o.Z_STREAM_END && (G.avail_in !== 0 || y !== o.Z_FINISH && y !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (x = n.utf8border(G.output, G.next_out), N = G.next_out - x, R = n.buf2string(G.output, x), G.next_out = N, G.avail_out = P - N, N && a.arraySet(G.output, G.output, x, N, 0), this.onData(R)) : this.onData(a.shrinkBuf(G.output, G.next_out)))), G.avail_in === 0 && G.avail_out === 0 && (H = !0);
        } while ((0 < G.avail_in || G.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (y = o.Z_FINISH), y === o.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : y !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(G.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, c.Inflate = l, c.inflate = g, c.inflateRaw = function(s, A) {
        return (A = A || {}).raw = !0, g(s, A);
      }, c.ungzip = g;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, p, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var f = Array.prototype.slice.call(arguments, 1); f.length; ) {
          var m = f.shift();
          if (m) {
            if (typeof m != "object")
              throw new TypeError(m + "must be non-object");
            for (var v in m)
              m.hasOwnProperty(v) && (o[v] = m[v]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, f) {
        return o.length === f ? o : o.subarray ? o.subarray(0, f) : (o.length = f, o);
      };
      var a = { arraySet: function(o, f, m, v, w) {
        if (f.subarray && o.subarray)
          o.set(f.subarray(m, m + v), w);
        else
          for (var l = 0; l < v; l++)
            o[w + l] = f[m + l];
      }, flattenChunks: function(o) {
        var f, m, v, w, l, g;
        for (f = v = 0, m = o.length; f < m; f++)
          v += o[f].length;
        for (g = new Uint8Array(v), f = w = 0, m = o.length; f < m; f++)
          l = o[f], g.set(l, w), w += l.length;
        return g;
      } }, n = { arraySet: function(o, f, m, v, w) {
        for (var l = 0; l < v; l++)
          o[w + l] = f[m + l];
      }, flattenChunks: function(o) {
        return [].concat.apply([], o);
      } };
      c.setTyped = function(o) {
        o ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, a)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, n));
      }, c.setTyped(r);
    }, {}], 42: [function(e, p, c) {
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
      for (var o = new r.Buf8(256), f = 0; f < 256; f++)
        o[f] = 252 <= f ? 6 : 248 <= f ? 5 : 240 <= f ? 4 : 224 <= f ? 3 : 192 <= f ? 2 : 1;
      function m(v, w) {
        if (w < 65537 && (v.subarray && n || !v.subarray && a))
          return String.fromCharCode.apply(null, r.shrinkBuf(v, w));
        for (var l = "", g = 0; g < w; g++)
          l += String.fromCharCode(v[g]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(v) {
        var w, l, g, s, A, u = v.length, y = 0;
        for (s = 0; s < u; s++)
          (64512 & (l = v.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = v.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), y += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (w = new r.Buf8(y), s = A = 0; A < y; s++)
          (64512 & (l = v.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = v.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), l < 128 ? w[A++] = l : (l < 2048 ? w[A++] = 192 | l >>> 6 : (l < 65536 ? w[A++] = 224 | l >>> 12 : (w[A++] = 240 | l >>> 18, w[A++] = 128 | l >>> 12 & 63), w[A++] = 128 | l >>> 6 & 63), w[A++] = 128 | 63 & l);
        return w;
      }, c.buf2binstring = function(v) {
        return m(v, v.length);
      }, c.binstring2buf = function(v) {
        for (var w = new r.Buf8(v.length), l = 0, g = w.length; l < g; l++)
          w[l] = v.charCodeAt(l);
        return w;
      }, c.buf2string = function(v, w) {
        var l, g, s, A, u = w || v.length, y = new Array(2 * u);
        for (l = g = 0; l < u; )
          if ((s = v[l++]) < 128)
            y[g++] = s;
          else if (4 < (A = o[s]))
            y[g++] = 65533, l += A - 1;
          else {
            for (s &= A === 2 ? 31 : A === 3 ? 15 : 7; 1 < A && l < u; )
              s = s << 6 | 63 & v[l++], A--;
            1 < A ? y[g++] = 65533 : s < 65536 ? y[g++] = s : (s -= 65536, y[g++] = 55296 | s >> 10 & 1023, y[g++] = 56320 | 1023 & s);
          }
        return m(y, g);
      }, c.utf8border = function(v, w) {
        var l;
        for ((w = w || v.length) > v.length && (w = v.length), l = w - 1; 0 <= l && (192 & v[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? w : l + o[v[l]] > w ? l : w;
      };
    }, { "./common": 41 }], 43: [function(e, p, c) {
      p.exports = function(r, a, n, o) {
        for (var f = 65535 & r | 0, m = r >>> 16 & 65535 | 0, v = 0; n !== 0; ) {
          for (n -= v = 2e3 < n ? 2e3 : n; m = m + (f = f + a[o++] | 0) | 0, --v; )
            ;
          f %= 65521, m %= 65521;
        }
        return f | m << 16 | 0;
      };
    }, {}], 44: [function(e, p, c) {
      p.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, p, c) {
      var r = function() {
        for (var a, n = [], o = 0; o < 256; o++) {
          a = o;
          for (var f = 0; f < 8; f++)
            a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
          n[o] = a;
        }
        return n;
      }();
      p.exports = function(a, n, o, f) {
        var m = r, v = f + o;
        a ^= -1;
        for (var w = f; w < v; w++)
          a = a >>> 8 ^ m[255 & (a ^ n[w])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, p, c) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), f = e("./crc32"), m = e("./messages"), v = 0, w = 4, l = 0, g = -2, s = -1, A = 4, u = 2, y = 8, x = 9, N = 286, R = 30, M = 19, G = 2 * N + 1, P = 15, V = 3, H = 258, rt = H + V + 1, k = 42, T = 113, i = 1, D = 2, it = 3, C = 4;
      function U(t, z) {
        return t.msg = m[z], z;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function j(t) {
        for (var z = t.length; 0 <= --z; )
          t[z] = 0;
      }
      function S(t) {
        var z = t.state, O = z.pending;
        O > t.avail_out && (O = t.avail_out), O !== 0 && (a.arraySet(t.output, z.pending_buf, z.pending_out, O, t.next_out), t.next_out += O, z.pending_out += O, t.total_out += O, t.avail_out -= O, z.pending -= O, z.pending === 0 && (z.pending_out = 0));
      }
      function B(t, z) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, z), t.block_start = t.strstart, S(t.strm);
      }
      function q(t, z) {
        t.pending_buf[t.pending++] = z;
      }
      function Z(t, z) {
        t.pending_buf[t.pending++] = z >>> 8 & 255, t.pending_buf[t.pending++] = 255 & z;
      }
      function X(t, z) {
        var O, b, h = t.max_chain_length, I = t.strstart, W = t.prev_length, L = t.nice_match, _ = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, Q = t.window, $ = t.w_mask, J = t.prev, tt = t.strstart + H, ht = Q[I + W - 1], st = Q[I + W];
        t.prev_length >= t.good_match && (h >>= 2), L > t.lookahead && (L = t.lookahead);
        do
          if (Q[(O = z) + W] === st && Q[O + W - 1] === ht && Q[O] === Q[I] && Q[++O] === Q[I + 1]) {
            I += 2, O++;
            do
              ;
            while (Q[++I] === Q[++O] && Q[++I] === Q[++O] && Q[++I] === Q[++O] && Q[++I] === Q[++O] && Q[++I] === Q[++O] && Q[++I] === Q[++O] && Q[++I] === Q[++O] && Q[++I] === Q[++O] && I < tt);
            if (b = H - (tt - I), I = tt - H, W < b) {
              if (t.match_start = z, L <= (W = b))
                break;
              ht = Q[I + W - 1], st = Q[I + W];
            }
          }
        while ((z = J[z & $]) > _ && --h != 0);
        return W <= t.lookahead ? W : t.lookahead;
      }
      function ct(t) {
        var z, O, b, h, I, W, L, _, Q, $, J = t.w_size;
        do {
          if (h = t.window_size - t.lookahead - t.strstart, t.strstart >= J + (J - rt)) {
            for (a.arraySet(t.window, t.window, J, J, 0), t.match_start -= J, t.strstart -= J, t.block_start -= J, z = O = t.hash_size; b = t.head[--z], t.head[z] = J <= b ? b - J : 0, --O; )
              ;
            for (z = O = J; b = t.prev[--z], t.prev[z] = J <= b ? b - J : 0, --O; )
              ;
            h += J;
          }
          if (t.strm.avail_in === 0)
            break;
          if (W = t.strm, L = t.window, _ = t.strstart + t.lookahead, Q = h, $ = void 0, $ = W.avail_in, Q < $ && ($ = Q), O = $ === 0 ? 0 : (W.avail_in -= $, a.arraySet(L, W.input, W.next_in, $, _), W.state.wrap === 1 ? W.adler = o(W.adler, L, $, _) : W.state.wrap === 2 && (W.adler = f(W.adler, L, $, _)), W.next_in += $, W.total_in += $, $), t.lookahead += O, t.lookahead + t.insert >= V)
            for (I = t.strstart - t.insert, t.ins_h = t.window[I], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + V - 1]) & t.hash_mask, t.prev[I & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = I, I++, t.insert--, !(t.lookahead + t.insert < V)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function gt(t, z) {
        for (var O, b; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && z === v)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (O = 0, t.lookahead >= V && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), O !== 0 && t.strstart - O <= t.w_size - rt && (t.match_length = X(t, O)), t.match_length >= V)
            if (b = n._tr_tally(t, t.strstart - t.match_start, t.match_length - V), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= V) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            b = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (b && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < V - 1 ? t.strstart : V - 1, z === w ? (B(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : D;
      }
      function ot(t, z) {
        for (var O, b, h; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && z === v)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (O = 0, t.lookahead >= V && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = V - 1, O !== 0 && t.prev_length < t.max_lazy_match && t.strstart - O <= t.w_size - rt && (t.match_length = X(t, O), t.match_length <= 5 && (t.strategy === 1 || t.match_length === V && 4096 < t.strstart - t.match_start) && (t.match_length = V - 1)), t.prev_length >= V && t.match_length <= t.prev_length) {
            for (h = t.strstart + t.lookahead - V, b = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - V), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= h && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, O = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = V - 1, t.strstart++, b && (B(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((b = n._tr_tally(t, 0, t.window[t.strstart - 1])) && B(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (b = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < V - 1 ? t.strstart : V - 1, z === w ? (B(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : D;
      }
      function at(t, z, O, b, h) {
        this.good_length = t, this.max_lazy = z, this.nice_length = O, this.max_chain = b, this.func = h;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * G), this.dyn_dtree = new a.Buf16(2 * (2 * R + 1)), this.bl_tree = new a.Buf16(2 * (2 * M + 1)), j(this.dyn_ltree), j(this.dyn_dtree), j(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(P + 1), this.heap = new a.Buf16(2 * N + 1), j(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * N + 1), j(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ut(t) {
        var z;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (z = t.state).pending = 0, z.pending_out = 0, z.wrap < 0 && (z.wrap = -z.wrap), z.status = z.wrap ? k : T, t.adler = z.wrap === 2 ? 0 : 1, z.last_flush = v, n._tr_init(z), l) : U(t, g);
      }
      function mt(t) {
        var z = ut(t);
        return z === l && function(O) {
          O.window_size = 2 * O.w_size, j(O.head), O.max_lazy_match = r[O.level].max_lazy, O.good_match = r[O.level].good_length, O.nice_match = r[O.level].nice_length, O.max_chain_length = r[O.level].max_chain, O.strstart = 0, O.block_start = 0, O.lookahead = 0, O.insert = 0, O.match_length = O.prev_length = V - 1, O.match_available = 0, O.ins_h = 0;
        }(t.state), z;
      }
      function wt(t, z, O, b, h, I) {
        if (!t)
          return g;
        var W = 1;
        if (z === s && (z = 6), b < 0 ? (W = 0, b = -b) : 15 < b && (W = 2, b -= 16), h < 1 || x < h || O !== y || b < 8 || 15 < b || z < 0 || 9 < z || I < 0 || A < I)
          return U(t, g);
        b === 8 && (b = 9);
        var L = new ft();
        return (t.state = L).strm = t, L.wrap = W, L.gzhead = null, L.w_bits = b, L.w_size = 1 << L.w_bits, L.w_mask = L.w_size - 1, L.hash_bits = h + 7, L.hash_size = 1 << L.hash_bits, L.hash_mask = L.hash_size - 1, L.hash_shift = ~~((L.hash_bits + V - 1) / V), L.window = new a.Buf8(2 * L.w_size), L.head = new a.Buf16(L.hash_size), L.prev = new a.Buf16(L.w_size), L.lit_bufsize = 1 << h + 6, L.pending_buf_size = 4 * L.lit_bufsize, L.pending_buf = new a.Buf8(L.pending_buf_size), L.d_buf = 1 * L.lit_bufsize, L.l_buf = 3 * L.lit_bufsize, L.level = z, L.strategy = I, L.method = O, mt(t);
      }
      r = [new at(0, 0, 0, 0, function(t, z) {
        var O = 65535;
        for (O > t.pending_buf_size - 5 && (O = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && z === v)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var b = t.block_start + O;
          if ((t.strstart === 0 || t.strstart >= b) && (t.lookahead = t.strstart - b, t.strstart = b, B(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, z === w ? (B(t, !0), t.strm.avail_out === 0 ? it : C) : (t.strstart > t.block_start && (B(t, !1), t.strm.avail_out), i);
      }), new at(4, 4, 8, 4, gt), new at(4, 5, 16, 8, gt), new at(4, 6, 32, 32, gt), new at(4, 4, 16, 16, ot), new at(8, 16, 32, 32, ot), new at(8, 16, 128, 128, ot), new at(8, 32, 128, 256, ot), new at(32, 128, 258, 1024, ot), new at(32, 258, 258, 4096, ot)], c.deflateInit = function(t, z) {
        return wt(t, z, y, 15, 8, 0);
      }, c.deflateInit2 = wt, c.deflateReset = mt, c.deflateResetKeep = ut, c.deflateSetHeader = function(t, z) {
        return t && t.state ? t.state.wrap !== 2 ? g : (t.state.gzhead = z, l) : g;
      }, c.deflate = function(t, z) {
        var O, b, h, I;
        if (!t || !t.state || 5 < z || z < 0)
          return t ? U(t, g) : g;
        if (b = t.state, !t.output || !t.input && t.avail_in !== 0 || b.status === 666 && z !== w)
          return U(t, t.avail_out === 0 ? -5 : g);
        if (b.strm = t, O = b.last_flush, b.last_flush = z, b.status === k)
          if (b.wrap === 2)
            t.adler = 0, q(b, 31), q(b, 139), q(b, 8), b.gzhead ? (q(b, (b.gzhead.text ? 1 : 0) + (b.gzhead.hcrc ? 2 : 0) + (b.gzhead.extra ? 4 : 0) + (b.gzhead.name ? 8 : 0) + (b.gzhead.comment ? 16 : 0)), q(b, 255 & b.gzhead.time), q(b, b.gzhead.time >> 8 & 255), q(b, b.gzhead.time >> 16 & 255), q(b, b.gzhead.time >> 24 & 255), q(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), q(b, 255 & b.gzhead.os), b.gzhead.extra && b.gzhead.extra.length && (q(b, 255 & b.gzhead.extra.length), q(b, b.gzhead.extra.length >> 8 & 255)), b.gzhead.hcrc && (t.adler = f(t.adler, b.pending_buf, b.pending, 0)), b.gzindex = 0, b.status = 69) : (q(b, 0), q(b, 0), q(b, 0), q(b, 0), q(b, 0), q(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), q(b, 3), b.status = T);
          else {
            var W = y + (b.w_bits - 8 << 4) << 8;
            W |= (2 <= b.strategy || b.level < 2 ? 0 : b.level < 6 ? 1 : b.level === 6 ? 2 : 3) << 6, b.strstart !== 0 && (W |= 32), W += 31 - W % 31, b.status = T, Z(b, W), b.strstart !== 0 && (Z(b, t.adler >>> 16), Z(b, 65535 & t.adler)), t.adler = 1;
          }
        if (b.status === 69)
          if (b.gzhead.extra) {
            for (h = b.pending; b.gzindex < (65535 & b.gzhead.extra.length) && (b.pending !== b.pending_buf_size || (b.gzhead.hcrc && b.pending > h && (t.adler = f(t.adler, b.pending_buf, b.pending - h, h)), S(t), h = b.pending, b.pending !== b.pending_buf_size)); )
              q(b, 255 & b.gzhead.extra[b.gzindex]), b.gzindex++;
            b.gzhead.hcrc && b.pending > h && (t.adler = f(t.adler, b.pending_buf, b.pending - h, h)), b.gzindex === b.gzhead.extra.length && (b.gzindex = 0, b.status = 73);
          } else
            b.status = 73;
        if (b.status === 73)
          if (b.gzhead.name) {
            h = b.pending;
            do {
              if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > h && (t.adler = f(t.adler, b.pending_buf, b.pending - h, h)), S(t), h = b.pending, b.pending === b.pending_buf_size)) {
                I = 1;
                break;
              }
              I = b.gzindex < b.gzhead.name.length ? 255 & b.gzhead.name.charCodeAt(b.gzindex++) : 0, q(b, I);
            } while (I !== 0);
            b.gzhead.hcrc && b.pending > h && (t.adler = f(t.adler, b.pending_buf, b.pending - h, h)), I === 0 && (b.gzindex = 0, b.status = 91);
          } else
            b.status = 91;
        if (b.status === 91)
          if (b.gzhead.comment) {
            h = b.pending;
            do {
              if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > h && (t.adler = f(t.adler, b.pending_buf, b.pending - h, h)), S(t), h = b.pending, b.pending === b.pending_buf_size)) {
                I = 1;
                break;
              }
              I = b.gzindex < b.gzhead.comment.length ? 255 & b.gzhead.comment.charCodeAt(b.gzindex++) : 0, q(b, I);
            } while (I !== 0);
            b.gzhead.hcrc && b.pending > h && (t.adler = f(t.adler, b.pending_buf, b.pending - h, h)), I === 0 && (b.status = 103);
          } else
            b.status = 103;
        if (b.status === 103 && (b.gzhead.hcrc ? (b.pending + 2 > b.pending_buf_size && S(t), b.pending + 2 <= b.pending_buf_size && (q(b, 255 & t.adler), q(b, t.adler >> 8 & 255), t.adler = 0, b.status = T)) : b.status = T), b.pending !== 0) {
          if (S(t), t.avail_out === 0)
            return b.last_flush = -1, l;
        } else if (t.avail_in === 0 && F(z) <= F(O) && z !== w)
          return U(t, -5);
        if (b.status === 666 && t.avail_in !== 0)
          return U(t, -5);
        if (t.avail_in !== 0 || b.lookahead !== 0 || z !== v && b.status !== 666) {
          var L = b.strategy === 2 ? function(_, Q) {
            for (var $; ; ) {
              if (_.lookahead === 0 && (ct(_), _.lookahead === 0)) {
                if (Q === v)
                  return i;
                break;
              }
              if (_.match_length = 0, $ = n._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++, $ && (B(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Q === w ? (B(_, !0), _.strm.avail_out === 0 ? it : C) : _.last_lit && (B(_, !1), _.strm.avail_out === 0) ? i : D;
          }(b, z) : b.strategy === 3 ? function(_, Q) {
            for (var $, J, tt, ht, st = _.window; ; ) {
              if (_.lookahead <= H) {
                if (ct(_), _.lookahead <= H && Q === v)
                  return i;
                if (_.lookahead === 0)
                  break;
              }
              if (_.match_length = 0, _.lookahead >= V && 0 < _.strstart && (J = st[tt = _.strstart - 1]) === st[++tt] && J === st[++tt] && J === st[++tt]) {
                ht = _.strstart + H;
                do
                  ;
                while (J === st[++tt] && J === st[++tt] && J === st[++tt] && J === st[++tt] && J === st[++tt] && J === st[++tt] && J === st[++tt] && J === st[++tt] && tt < ht);
                _.match_length = H - (ht - tt), _.match_length > _.lookahead && (_.match_length = _.lookahead);
              }
              if (_.match_length >= V ? ($ = n._tr_tally(_, 1, _.match_length - V), _.lookahead -= _.match_length, _.strstart += _.match_length, _.match_length = 0) : ($ = n._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++), $ && (B(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Q === w ? (B(_, !0), _.strm.avail_out === 0 ? it : C) : _.last_lit && (B(_, !1), _.strm.avail_out === 0) ? i : D;
          }(b, z) : r[b.level].func(b, z);
          if (L !== it && L !== C || (b.status = 666), L === i || L === it)
            return t.avail_out === 0 && (b.last_flush = -1), l;
          if (L === D && (z === 1 ? n._tr_align(b) : z !== 5 && (n._tr_stored_block(b, 0, 0, !1), z === 3 && (j(b.head), b.lookahead === 0 && (b.strstart = 0, b.block_start = 0, b.insert = 0))), S(t), t.avail_out === 0))
            return b.last_flush = -1, l;
        }
        return z !== w ? l : b.wrap <= 0 ? 1 : (b.wrap === 2 ? (q(b, 255 & t.adler), q(b, t.adler >> 8 & 255), q(b, t.adler >> 16 & 255), q(b, t.adler >> 24 & 255), q(b, 255 & t.total_in), q(b, t.total_in >> 8 & 255), q(b, t.total_in >> 16 & 255), q(b, t.total_in >> 24 & 255)) : (Z(b, t.adler >>> 16), Z(b, 65535 & t.adler)), S(t), 0 < b.wrap && (b.wrap = -b.wrap), b.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var z;
        return t && t.state ? (z = t.state.status) !== k && z !== 69 && z !== 73 && z !== 91 && z !== 103 && z !== T && z !== 666 ? U(t, g) : (t.state = null, z === T ? U(t, -3) : l) : g;
      }, c.deflateSetDictionary = function(t, z) {
        var O, b, h, I, W, L, _, Q, $ = z.length;
        if (!t || !t.state || (I = (O = t.state).wrap) === 2 || I === 1 && O.status !== k || O.lookahead)
          return g;
        for (I === 1 && (t.adler = o(t.adler, z, $, 0)), O.wrap = 0, $ >= O.w_size && (I === 0 && (j(O.head), O.strstart = 0, O.block_start = 0, O.insert = 0), Q = new a.Buf8(O.w_size), a.arraySet(Q, z, $ - O.w_size, O.w_size, 0), z = Q, $ = O.w_size), W = t.avail_in, L = t.next_in, _ = t.input, t.avail_in = $, t.next_in = 0, t.input = z, ct(O); O.lookahead >= V; ) {
          for (b = O.strstart, h = O.lookahead - (V - 1); O.ins_h = (O.ins_h << O.hash_shift ^ O.window[b + V - 1]) & O.hash_mask, O.prev[b & O.w_mask] = O.head[O.ins_h], O.head[O.ins_h] = b, b++, --h; )
            ;
          O.strstart = b, O.lookahead = V - 1, ct(O);
        }
        return O.strstart += O.lookahead, O.block_start = O.strstart, O.insert = O.lookahead, O.lookahead = 0, O.match_length = O.prev_length = V - 1, O.match_available = 0, t.next_in = L, t.input = _, t.avail_in = W, O.wrap = I, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, p, c) {
      p.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, p, c) {
      p.exports = function(r, a) {
        var n, o, f, m, v, w, l, g, s, A, u, y, x, N, R, M, G, P, V, H, rt, k, T, i, D;
        n = r.state, o = r.next_in, i = r.input, f = o + (r.avail_in - 5), m = r.next_out, D = r.output, v = m - (a - r.avail_out), w = m + (r.avail_out - 257), l = n.dmax, g = n.wsize, s = n.whave, A = n.wnext, u = n.window, y = n.hold, x = n.bits, N = n.lencode, R = n.distcode, M = (1 << n.lenbits) - 1, G = (1 << n.distbits) - 1;
        t:
          do {
            x < 15 && (y += i[o++] << x, x += 8, y += i[o++] << x, x += 8), P = N[y & M];
            e:
              for (; ; ) {
                if (y >>>= V = P >>> 24, x -= V, (V = P >>> 16 & 255) === 0)
                  D[m++] = 65535 & P;
                else {
                  if (!(16 & V)) {
                    if (!(64 & V)) {
                      P = N[(65535 & P) + (y & (1 << V) - 1)];
                      continue e;
                    }
                    if (32 & V) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  H = 65535 & P, (V &= 15) && (x < V && (y += i[o++] << x, x += 8), H += y & (1 << V) - 1, y >>>= V, x -= V), x < 15 && (y += i[o++] << x, x += 8, y += i[o++] << x, x += 8), P = R[y & G];
                  n:
                    for (; ; ) {
                      if (y >>>= V = P >>> 24, x -= V, !(16 & (V = P >>> 16 & 255))) {
                        if (!(64 & V)) {
                          P = R[(65535 & P) + (y & (1 << V) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & P, x < (V &= 15) && (y += i[o++] << x, (x += 8) < V && (y += i[o++] << x, x += 8)), l < (rt += y & (1 << V) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (y >>>= V, x -= V, (V = m - v) < rt) {
                        if (s < (V = rt - V) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (T = u, (k = 0) === A) {
                          if (k += g - V, V < H) {
                            for (H -= V; D[m++] = u[k++], --V; )
                              ;
                            k = m - rt, T = D;
                          }
                        } else if (A < V) {
                          if (k += g + A - V, (V -= A) < H) {
                            for (H -= V; D[m++] = u[k++], --V; )
                              ;
                            if (k = 0, A < H) {
                              for (H -= V = A; D[m++] = u[k++], --V; )
                                ;
                              k = m - rt, T = D;
                            }
                          }
                        } else if (k += A - V, V < H) {
                          for (H -= V; D[m++] = u[k++], --V; )
                            ;
                          k = m - rt, T = D;
                        }
                        for (; 2 < H; )
                          D[m++] = T[k++], D[m++] = T[k++], D[m++] = T[k++], H -= 3;
                        H && (D[m++] = T[k++], 1 < H && (D[m++] = T[k++]));
                      } else {
                        for (k = m - rt; D[m++] = D[k++], D[m++] = D[k++], D[m++] = D[k++], 2 < (H -= 3); )
                          ;
                        H && (D[m++] = D[k++], 1 < H && (D[m++] = D[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < f && m < w);
        o -= H = x >> 3, y &= (1 << (x -= H << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < f ? f - o + 5 : 5 - (o - f), r.avail_out = m < w ? w - m + 257 : 257 - (m - w), n.hold = y, n.bits = x;
      };
    }, {}], 49: [function(e, p, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), f = e("./inftrees"), m = 1, v = 2, w = 0, l = -2, g = 1, s = 852, A = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function y() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function x(k) {
        var T;
        return k && k.state ? (T = k.state, k.total_in = k.total_out = T.total = 0, k.msg = "", T.wrap && (k.adler = 1 & T.wrap), T.mode = g, T.last = 0, T.havedict = 0, T.dmax = 32768, T.head = null, T.hold = 0, T.bits = 0, T.lencode = T.lendyn = new r.Buf32(s), T.distcode = T.distdyn = new r.Buf32(A), T.sane = 1, T.back = -1, w) : l;
      }
      function N(k) {
        var T;
        return k && k.state ? ((T = k.state).wsize = 0, T.whave = 0, T.wnext = 0, x(k)) : l;
      }
      function R(k, T) {
        var i, D;
        return k && k.state ? (D = k.state, T < 0 ? (i = 0, T = -T) : (i = 1 + (T >> 4), T < 48 && (T &= 15)), T && (T < 8 || 15 < T) ? l : (D.window !== null && D.wbits !== T && (D.window = null), D.wrap = i, D.wbits = T, N(k))) : l;
      }
      function M(k, T) {
        var i, D;
        return k ? (D = new y(), (k.state = D).window = null, (i = R(k, T)) !== w && (k.state = null), i) : l;
      }
      var G, P, V = !0;
      function H(k) {
        if (V) {
          var T;
          for (G = new r.Buf32(512), P = new r.Buf32(32), T = 0; T < 144; )
            k.lens[T++] = 8;
          for (; T < 256; )
            k.lens[T++] = 9;
          for (; T < 280; )
            k.lens[T++] = 7;
          for (; T < 288; )
            k.lens[T++] = 8;
          for (f(m, k.lens, 0, 288, G, 0, k.work, { bits: 9 }), T = 0; T < 32; )
            k.lens[T++] = 5;
          f(v, k.lens, 0, 32, P, 0, k.work, { bits: 5 }), V = !1;
        }
        k.lencode = G, k.lenbits = 9, k.distcode = P, k.distbits = 5;
      }
      function rt(k, T, i, D) {
        var it, C = k.state;
        return C.window === null && (C.wsize = 1 << C.wbits, C.wnext = 0, C.whave = 0, C.window = new r.Buf8(C.wsize)), D >= C.wsize ? (r.arraySet(C.window, T, i - C.wsize, C.wsize, 0), C.wnext = 0, C.whave = C.wsize) : (D < (it = C.wsize - C.wnext) && (it = D), r.arraySet(C.window, T, i - D, it, C.wnext), (D -= it) ? (r.arraySet(C.window, T, i - D, D, 0), C.wnext = D, C.whave = C.wsize) : (C.wnext += it, C.wnext === C.wsize && (C.wnext = 0), C.whave < C.wsize && (C.whave += it))), 0;
      }
      c.inflateReset = N, c.inflateReset2 = R, c.inflateResetKeep = x, c.inflateInit = function(k) {
        return M(k, 15);
      }, c.inflateInit2 = M, c.inflate = function(k, T) {
        var i, D, it, C, U, F, j, S, B, q, Z, X, ct, gt, ot, at, ft, ut, mt, wt, t, z, O, b, h = 0, I = new r.Buf8(4), W = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), U = k.next_out, it = k.output, j = k.avail_out, C = k.next_in, D = k.input, F = k.avail_in, S = i.hold, B = i.bits, q = F, Z = j, z = w;
        t:
          for (; ; )
            switch (i.mode) {
              case g:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
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
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
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
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                i.head && (i.head.time = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, I[2] = S >>> 16 & 255, I[3] = S >>> 24 & 255, i.check = n(i.check, I, 4, 0)), B = S = 0, i.mode = 4;
              case 4:
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                i.head && (i.head.xflags = 255 & S, i.head.os = S >> 8), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; B < 16; ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  i.length = S, i.head && (i.head.extra_len = S), 512 & i.flags && (I[0] = 255 & S, I[1] = S >>> 8 & 255, i.check = n(i.check, I, 2, 0)), B = S = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (X = i.length) && (X = F), X && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, D, C, X, t)), 512 & i.flags && (i.check = n(i.check, D, X, C)), F -= X, C += X, i.length -= X), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = D[C + X++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, D, X, C)), F -= X, C += X, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = D[C + X++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, D, X, C)), F -= X, C += X, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; B < 16; ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
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
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                k.adler = i.check = u(S), B = S = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = U, k.avail_out = j, k.next_in = C, k.avail_in = F, i.hold = S, i.bits = B, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (T === 5 || T === 6)
                  break t;
              case 13:
                if (i.last) {
                  S >>>= 7 & B, B -= 7 & B, i.mode = 27;
                  break;
                }
                for (; B < 3; ) {
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                switch (i.last = 1 & S, B -= 1, 3 & (S >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (H(i), i.mode = 20, T !== 6)
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
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                if ((65535 & S) != (S >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & S, B = S = 0, i.mode = 15, T === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (X = i.length) {
                  if (F < X && (X = F), j < X && (X = j), X === 0)
                    break t;
                  r.arraySet(it, D, C, X, U), F -= X, C += X, j -= X, U += X, i.length -= X;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; B < 14; ) {
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                if (i.nlen = 257 + (31 & S), S >>>= 5, B -= 5, i.ndist = 1 + (31 & S), S >>>= 5, B -= 5, i.ncode = 4 + (15 & S), S >>>= 4, B -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; B < 3; ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  i.lens[W[i.have++]] = 7 & S, S >>>= 3, B -= 3;
                }
                for (; i.have < 19; )
                  i.lens[W[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, O = { bits: i.lenbits }, z = f(0, i.lens, 0, 19, i.lencode, 0, i.work, O), i.lenbits = O.bits, z) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; at = (h = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & h, !((ot = h >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  if (ft < 16)
                    S >>>= ot, B -= ot, i.lens[i.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (b = ot + 2; B < b; ) {
                        if (F === 0)
                          break t;
                        F--, S += D[C++] << B, B += 8;
                      }
                      if (S >>>= ot, B -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], X = 3 + (3 & S), S >>>= 2, B -= 2;
                    } else if (ft === 17) {
                      for (b = ot + 3; B < b; ) {
                        if (F === 0)
                          break t;
                        F--, S += D[C++] << B, B += 8;
                      }
                      B -= ot, t = 0, X = 3 + (7 & (S >>>= ot)), S >>>= 3, B -= 3;
                    } else {
                      for (b = ot + 7; B < b; ) {
                        if (F === 0)
                          break t;
                        F--, S += D[C++] << B, B += 8;
                      }
                      B -= ot, t = 0, X = 11 + (127 & (S >>>= ot)), S >>>= 7, B -= 7;
                    }
                    if (i.have + X > i.nlen + i.ndist) {
                      k.msg = "invalid bit length repeat", i.mode = 30;
                      break;
                    }
                    for (; X--; )
                      i.lens[i.have++] = t;
                  }
                }
                if (i.mode === 30)
                  break;
                if (i.lens[256] === 0) {
                  k.msg = "invalid code -- missing end-of-block", i.mode = 30;
                  break;
                }
                if (i.lenbits = 9, O = { bits: i.lenbits }, z = f(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, O), i.lenbits = O.bits, z) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, O = { bits: i.distbits }, z = f(v, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, O), i.distbits = O.bits, z) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, T === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= j) {
                  k.next_out = U, k.avail_out = j, k.next_in = C, k.avail_in = F, i.hold = S, i.bits = B, o(k, Z), U = k.next_out, it = k.output, j = k.avail_out, C = k.next_in, D = k.input, F = k.avail_in, S = i.hold, B = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; at = (h = i.lencode[S & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & h, !((ot = h >>> 24) <= B); ) {
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                if (at && !(240 & at)) {
                  for (ut = ot, mt = at, wt = ft; at = (h = i.lencode[wt + ((S & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & h, !(ut + (ot = h >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  S >>>= ut, B -= ut, i.back += ut;
                }
                if (S >>>= ot, B -= ot, i.back += ot, i.length = ft, at === 0) {
                  i.mode = 26;
                  break;
                }
                if (32 & at) {
                  i.back = -1, i.mode = 12;
                  break;
                }
                if (64 & at) {
                  k.msg = "invalid literal/length code", i.mode = 30;
                  break;
                }
                i.extra = 15 & at, i.mode = 22;
              case 22:
                if (i.extra) {
                  for (b = i.extra; B < b; ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  i.length += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; at = (h = i.distcode[S & (1 << i.distbits) - 1]) >>> 16 & 255, ft = 65535 & h, !((ot = h >>> 24) <= B); ) {
                  if (F === 0)
                    break t;
                  F--, S += D[C++] << B, B += 8;
                }
                if (!(240 & at)) {
                  for (ut = ot, mt = at, wt = ft; at = (h = i.distcode[wt + ((S & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & h, !(ut + (ot = h >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  S >>>= ut, B -= ut, i.back += ut;
                }
                if (S >>>= ot, B -= ot, i.back += ot, 64 & at) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = ft, i.extra = 15 & at, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (b = i.extra; B < b; ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  i.offset += S & (1 << i.extra) - 1, S >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (j === 0)
                  break t;
                if (X = Z - j, i.offset > X) {
                  if ((X = i.offset - X) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = X > i.wnext ? (X -= i.wnext, i.wsize - X) : i.wnext - X, X > i.length && (X = i.length), gt = i.window;
                } else
                  gt = it, ct = U - i.offset, X = i.length;
                for (j < X && (X = j), j -= X, i.length -= X; it[U++] = gt[ct++], --X; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (j === 0)
                  break t;
                it[U++] = i.length, j--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; B < 32; ) {
                    if (F === 0)
                      break t;
                    F--, S |= D[C++] << B, B += 8;
                  }
                  if (Z -= j, k.total_out += Z, i.total += Z, Z && (k.adler = i.check = i.flags ? n(i.check, it, Z, U - Z) : a(i.check, it, Z, U - Z)), Z = j, (i.flags ? S : u(S)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; B < 32; ) {
                    if (F === 0)
                      break t;
                    F--, S += D[C++] << B, B += 8;
                  }
                  if (S !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  B = S = 0;
                }
                i.mode = 29;
              case 29:
                z = 1;
                break t;
              case 30:
                z = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = U, k.avail_out = j, k.next_in = C, k.avail_in = F, i.hold = S, i.bits = B, (i.wsize || Z !== k.avail_out && i.mode < 30 && (i.mode < 27 || T !== 4)) && rt(k, k.output, k.next_out, Z - k.avail_out) ? (i.mode = 31, -4) : (q -= k.avail_in, Z -= k.avail_out, k.total_in += q, k.total_out += Z, i.total += Z, i.wrap && Z && (k.adler = i.check = i.flags ? n(i.check, it, Z, k.next_out - Z) : a(i.check, it, Z, k.next_out - Z)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (q == 0 && Z === 0 || T === 4) && z === w && (z = -5), z);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var T = k.state;
        return T.window && (T.window = null), k.state = null, w;
      }, c.inflateGetHeader = function(k, T) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = T).done = !1, w) : l;
      }, c.inflateSetDictionary = function(k, T) {
        var i, D = T.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, T, D, 0) !== i.check ? -3 : rt(k, T, D, D) ? (i.mode = 31, -4) : (i.havedict = 1, w) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, p, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      p.exports = function(m, v, w, l, g, s, A, u) {
        var y, x, N, R, M, G, P, V, H, rt = u.bits, k = 0, T = 0, i = 0, D = 0, it = 0, C = 0, U = 0, F = 0, j = 0, S = 0, B = null, q = 0, Z = new r.Buf16(16), X = new r.Buf16(16), ct = null, gt = 0;
        for (k = 0; k <= 15; k++)
          Z[k] = 0;
        for (T = 0; T < l; T++)
          Z[v[w + T]]++;
        for (it = rt, D = 15; 1 <= D && Z[D] === 0; D--)
          ;
        if (D < it && (it = D), D === 0)
          return g[s++] = 20971520, g[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < D && Z[i] === 0; i++)
          ;
        for (it < i && (it = i), k = F = 1; k <= 15; k++)
          if (F <<= 1, (F -= Z[k]) < 0)
            return -1;
        if (0 < F && (m === 0 || D !== 1))
          return -1;
        for (X[1] = 0, k = 1; k < 15; k++)
          X[k + 1] = X[k] + Z[k];
        for (T = 0; T < l; T++)
          v[w + T] !== 0 && (A[X[v[w + T]]++] = T);
        if (G = m === 0 ? (B = ct = A, 19) : m === 1 ? (B = a, q -= 257, ct = n, gt -= 257, 256) : (B = o, ct = f, -1), k = i, M = s, U = T = S = 0, N = -1, R = (j = 1 << (C = it)) - 1, m === 1 && 852 < j || m === 2 && 592 < j)
          return 1;
        for (; ; ) {
          for (P = k - U, H = A[T] < G ? (V = 0, A[T]) : A[T] > G ? (V = ct[gt + A[T]], B[q + A[T]]) : (V = 96, 0), y = 1 << k - U, i = x = 1 << C; g[M + (S >> U) + (x -= y)] = P << 24 | V << 16 | H | 0, x !== 0; )
            ;
          for (y = 1 << k - 1; S & y; )
            y >>= 1;
          if (y !== 0 ? (S &= y - 1, S += y) : S = 0, T++, --Z[k] == 0) {
            if (k === D)
              break;
            k = v[w + A[T]];
          }
          if (it < k && (S & R) !== N) {
            for (U === 0 && (U = it), M += i, F = 1 << (C = k - U); C + U < D && !((F -= Z[C + U]) <= 0); )
              C++, F <<= 1;
            if (j += 1 << C, m === 1 && 852 < j || m === 2 && 592 < j)
              return 1;
            g[N = S & R] = it << 24 | C << 16 | M - s | 0;
          }
        }
        return S !== 0 && (g[M + S] = k - U << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, p, c) {
      p.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, p, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(h) {
        for (var I = h.length; 0 <= --I; )
          h[I] = 0;
      }
      var f = 0, m = 29, v = 256, w = v + 1 + m, l = 30, g = 19, s = 2 * w + 1, A = 15, u = 16, y = 7, x = 256, N = 16, R = 17, M = 18, G = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], P = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (w + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var T = new Array(512);
      o(T);
      var i = new Array(256);
      o(i);
      var D = new Array(m);
      o(D);
      var it, C, U, F = new Array(l);
      function j(h, I, W, L, _) {
        this.static_tree = h, this.extra_bits = I, this.extra_base = W, this.elems = L, this.max_length = _, this.has_stree = h && h.length;
      }
      function S(h, I) {
        this.dyn_tree = h, this.max_code = 0, this.stat_desc = I;
      }
      function B(h) {
        return h < 256 ? T[h] : T[256 + (h >>> 7)];
      }
      function q(h, I) {
        h.pending_buf[h.pending++] = 255 & I, h.pending_buf[h.pending++] = I >>> 8 & 255;
      }
      function Z(h, I, W) {
        h.bi_valid > u - W ? (h.bi_buf |= I << h.bi_valid & 65535, q(h, h.bi_buf), h.bi_buf = I >> u - h.bi_valid, h.bi_valid += W - u) : (h.bi_buf |= I << h.bi_valid & 65535, h.bi_valid += W);
      }
      function X(h, I, W) {
        Z(h, W[2 * I], W[2 * I + 1]);
      }
      function ct(h, I) {
        for (var W = 0; W |= 1 & h, h >>>= 1, W <<= 1, 0 < --I; )
          ;
        return W >>> 1;
      }
      function gt(h, I, W) {
        var L, _, Q = new Array(A + 1), $ = 0;
        for (L = 1; L <= A; L++)
          Q[L] = $ = $ + W[L - 1] << 1;
        for (_ = 0; _ <= I; _++) {
          var J = h[2 * _ + 1];
          J !== 0 && (h[2 * _] = ct(Q[J]++, J));
        }
      }
      function ot(h) {
        var I;
        for (I = 0; I < w; I++)
          h.dyn_ltree[2 * I] = 0;
        for (I = 0; I < l; I++)
          h.dyn_dtree[2 * I] = 0;
        for (I = 0; I < g; I++)
          h.bl_tree[2 * I] = 0;
        h.dyn_ltree[2 * x] = 1, h.opt_len = h.static_len = 0, h.last_lit = h.matches = 0;
      }
      function at(h) {
        8 < h.bi_valid ? q(h, h.bi_buf) : 0 < h.bi_valid && (h.pending_buf[h.pending++] = h.bi_buf), h.bi_buf = 0, h.bi_valid = 0;
      }
      function ft(h, I, W, L) {
        var _ = 2 * I, Q = 2 * W;
        return h[_] < h[Q] || h[_] === h[Q] && L[I] <= L[W];
      }
      function ut(h, I, W) {
        for (var L = h.heap[W], _ = W << 1; _ <= h.heap_len && (_ < h.heap_len && ft(I, h.heap[_ + 1], h.heap[_], h.depth) && _++, !ft(I, L, h.heap[_], h.depth)); )
          h.heap[W] = h.heap[_], W = _, _ <<= 1;
        h.heap[W] = L;
      }
      function mt(h, I, W) {
        var L, _, Q, $, J = 0;
        if (h.last_lit !== 0)
          for (; L = h.pending_buf[h.d_buf + 2 * J] << 8 | h.pending_buf[h.d_buf + 2 * J + 1], _ = h.pending_buf[h.l_buf + J], J++, L === 0 ? X(h, _, I) : (X(h, (Q = i[_]) + v + 1, I), ($ = G[Q]) !== 0 && Z(h, _ -= D[Q], $), X(h, Q = B(--L), W), ($ = P[Q]) !== 0 && Z(h, L -= F[Q], $)), J < h.last_lit; )
            ;
        X(h, x, I);
      }
      function wt(h, I) {
        var W, L, _, Q = I.dyn_tree, $ = I.stat_desc.static_tree, J = I.stat_desc.has_stree, tt = I.stat_desc.elems, ht = -1;
        for (h.heap_len = 0, h.heap_max = s, W = 0; W < tt; W++)
          Q[2 * W] !== 0 ? (h.heap[++h.heap_len] = ht = W, h.depth[W] = 0) : Q[2 * W + 1] = 0;
        for (; h.heap_len < 2; )
          Q[2 * (_ = h.heap[++h.heap_len] = ht < 2 ? ++ht : 0)] = 1, h.depth[_] = 0, h.opt_len--, J && (h.static_len -= $[2 * _ + 1]);
        for (I.max_code = ht, W = h.heap_len >> 1; 1 <= W; W--)
          ut(h, Q, W);
        for (_ = tt; W = h.heap[1], h.heap[1] = h.heap[h.heap_len--], ut(h, Q, 1), L = h.heap[1], h.heap[--h.heap_max] = W, h.heap[--h.heap_max] = L, Q[2 * _] = Q[2 * W] + Q[2 * L], h.depth[_] = (h.depth[W] >= h.depth[L] ? h.depth[W] : h.depth[L]) + 1, Q[2 * W + 1] = Q[2 * L + 1] = _, h.heap[1] = _++, ut(h, Q, 1), 2 <= h.heap_len; )
          ;
        h.heap[--h.heap_max] = h.heap[1], function(st, pt) {
          var xt, It, yt, dt, Ct, Bt, vt = pt.dyn_tree, Gt = pt.max_code, _t = pt.stat_desc.static_tree, Wt = pt.stat_desc.has_stree, et = pt.stat_desc.extra_bits, bt = pt.stat_desc.extra_base, St = pt.stat_desc.max_length, At = 0;
          for (dt = 0; dt <= A; dt++)
            st.bl_count[dt] = 0;
          for (vt[2 * st.heap[st.heap_max] + 1] = 0, xt = st.heap_max + 1; xt < s; xt++)
            St < (dt = vt[2 * vt[2 * (It = st.heap[xt]) + 1] + 1] + 1) && (dt = St, At++), vt[2 * It + 1] = dt, Gt < It || (st.bl_count[dt]++, Ct = 0, bt <= It && (Ct = et[It - bt]), Bt = vt[2 * It], st.opt_len += Bt * (dt + Ct), Wt && (st.static_len += Bt * (_t[2 * It + 1] + Ct)));
          if (At !== 0) {
            do {
              for (dt = St - 1; st.bl_count[dt] === 0; )
                dt--;
              st.bl_count[dt]--, st.bl_count[dt + 1] += 2, st.bl_count[St]--, At -= 2;
            } while (0 < At);
            for (dt = St; dt !== 0; dt--)
              for (It = st.bl_count[dt]; It !== 0; )
                Gt < (yt = st.heap[--xt]) || (vt[2 * yt + 1] !== dt && (st.opt_len += (dt - vt[2 * yt + 1]) * vt[2 * yt], vt[2 * yt + 1] = dt), It--);
          }
        }(h, I), gt(Q, ht, h.bl_count);
      }
      function t(h, I, W) {
        var L, _, Q = -1, $ = I[1], J = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), I[2 * (W + 1) + 1] = 65535, L = 0; L <= W; L++)
          _ = $, $ = I[2 * (L + 1) + 1], ++J < tt && _ === $ || (J < ht ? h.bl_tree[2 * _] += J : _ !== 0 ? (_ !== Q && h.bl_tree[2 * _]++, h.bl_tree[2 * N]++) : J <= 10 ? h.bl_tree[2 * R]++ : h.bl_tree[2 * M]++, Q = _, ht = (J = 0) === $ ? (tt = 138, 3) : _ === $ ? (tt = 6, 3) : (tt = 7, 4));
      }
      function z(h, I, W) {
        var L, _, Q = -1, $ = I[1], J = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), L = 0; L <= W; L++)
          if (_ = $, $ = I[2 * (L + 1) + 1], !(++J < tt && _ === $)) {
            if (J < ht)
              for (; X(h, _, h.bl_tree), --J != 0; )
                ;
            else
              _ !== 0 ? (_ !== Q && (X(h, _, h.bl_tree), J--), X(h, N, h.bl_tree), Z(h, J - 3, 2)) : J <= 10 ? (X(h, R, h.bl_tree), Z(h, J - 3, 3)) : (X(h, M, h.bl_tree), Z(h, J - 11, 7));
            Q = _, ht = (J = 0) === $ ? (tt = 138, 3) : _ === $ ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(F);
      var O = !1;
      function b(h, I, W, L) {
        Z(h, (f << 1) + (L ? 1 : 0), 3), function(_, Q, $, J) {
          at(_), J && (q(_, $), q(_, ~$)), r.arraySet(_.pending_buf, _.window, Q, $, _.pending), _.pending += $;
        }(h, I, W, !0);
      }
      c._tr_init = function(h) {
        O || (function() {
          var I, W, L, _, Q, $ = new Array(A + 1);
          for (_ = L = 0; _ < m - 1; _++)
            for (D[_] = L, I = 0; I < 1 << G[_]; I++)
              i[L++] = _;
          for (i[L - 1] = _, _ = Q = 0; _ < 16; _++)
            for (F[_] = Q, I = 0; I < 1 << P[_]; I++)
              T[Q++] = _;
          for (Q >>= 7; _ < l; _++)
            for (F[_] = Q << 7, I = 0; I < 1 << P[_] - 7; I++)
              T[256 + Q++] = _;
          for (W = 0; W <= A; W++)
            $[W] = 0;
          for (I = 0; I <= 143; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (; I <= 255; )
            rt[2 * I + 1] = 9, I++, $[9]++;
          for (; I <= 279; )
            rt[2 * I + 1] = 7, I++, $[7]++;
          for (; I <= 287; )
            rt[2 * I + 1] = 8, I++, $[8]++;
          for (gt(rt, w + 1, $), I = 0; I < l; I++)
            k[2 * I + 1] = 5, k[2 * I] = ct(I, 5);
          it = new j(rt, G, v + 1, w, A), C = new j(k, P, 0, l, A), U = new j(new Array(0), V, 0, g, y);
        }(), O = !0), h.l_desc = new S(h.dyn_ltree, it), h.d_desc = new S(h.dyn_dtree, C), h.bl_desc = new S(h.bl_tree, U), h.bi_buf = 0, h.bi_valid = 0, ot(h);
      }, c._tr_stored_block = b, c._tr_flush_block = function(h, I, W, L) {
        var _, Q, $ = 0;
        0 < h.level ? (h.strm.data_type === 2 && (h.strm.data_type = function(J) {
          var tt, ht = 4093624447;
          for (tt = 0; tt <= 31; tt++, ht >>>= 1)
            if (1 & ht && J.dyn_ltree[2 * tt] !== 0)
              return a;
          if (J.dyn_ltree[18] !== 0 || J.dyn_ltree[20] !== 0 || J.dyn_ltree[26] !== 0)
            return n;
          for (tt = 32; tt < v; tt++)
            if (J.dyn_ltree[2 * tt] !== 0)
              return n;
          return a;
        }(h)), wt(h, h.l_desc), wt(h, h.d_desc), $ = function(J) {
          var tt;
          for (t(J, J.dyn_ltree, J.l_desc.max_code), t(J, J.dyn_dtree, J.d_desc.max_code), wt(J, J.bl_desc), tt = g - 1; 3 <= tt && J.bl_tree[2 * H[tt] + 1] === 0; tt--)
            ;
          return J.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(h), _ = h.opt_len + 3 + 7 >>> 3, (Q = h.static_len + 3 + 7 >>> 3) <= _ && (_ = Q)) : _ = Q = W + 5, W + 4 <= _ && I !== -1 ? b(h, I, W, L) : h.strategy === 4 || Q === _ ? (Z(h, 2 + (L ? 1 : 0), 3), mt(h, rt, k)) : (Z(h, 4 + (L ? 1 : 0), 3), function(J, tt, ht, st) {
          var pt;
          for (Z(J, tt - 257, 5), Z(J, ht - 1, 5), Z(J, st - 4, 4), pt = 0; pt < st; pt++)
            Z(J, J.bl_tree[2 * H[pt] + 1], 3);
          z(J, J.dyn_ltree, tt - 1), z(J, J.dyn_dtree, ht - 1);
        }(h, h.l_desc.max_code + 1, h.d_desc.max_code + 1, $ + 1), mt(h, h.dyn_ltree, h.dyn_dtree)), ot(h), L && at(h);
      }, c._tr_tally = function(h, I, W) {
        return h.pending_buf[h.d_buf + 2 * h.last_lit] = I >>> 8 & 255, h.pending_buf[h.d_buf + 2 * h.last_lit + 1] = 255 & I, h.pending_buf[h.l_buf + h.last_lit] = 255 & W, h.last_lit++, I === 0 ? h.dyn_ltree[2 * W]++ : (h.matches++, I--, h.dyn_ltree[2 * (i[W] + v + 1)]++, h.dyn_dtree[2 * B(I)]++), h.last_lit === h.lit_bufsize - 1;
      }, c._tr_align = function(h) {
        Z(h, 2, 3), X(h, x, rt), function(I) {
          I.bi_valid === 16 ? (q(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
        }(h);
      };
    }, { "../utils/common": 41 }], 53: [function(e, p, c) {
      p.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, p, c) {
      (function(r) {
        (function(a, n) {
          if (!a.setImmediate) {
            var o, f, m, v, w = 1, l = {}, g = !1, s = a.document, A = Object.getPrototypeOf && Object.getPrototypeOf(a);
            A = A && A.setTimeout ? A : a, o = {}.toString.call(a.process) === "[object process]" ? function(N) {
              process.nextTick(function() {
                y(N);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var N = !0, R = a.onmessage;
                return a.onmessage = function() {
                  N = !1;
                }, a.postMessage("", "*"), a.onmessage = R, N;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", x, !1) : a.attachEvent("onmessage", x), function(N) {
              a.postMessage(v + N, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(N) {
              y(N.data);
            }, function(N) {
              m.port2.postMessage(N);
            }) : s && "onreadystatechange" in s.createElement("script") ? (f = s.documentElement, function(N) {
              var R = s.createElement("script");
              R.onreadystatechange = function() {
                y(N), R.onreadystatechange = null, f.removeChild(R), R = null;
              }, f.appendChild(R);
            }) : function(N) {
              setTimeout(y, 0, N);
            }, A.setImmediate = function(N) {
              typeof N != "function" && (N = new Function("" + N));
              for (var R = new Array(arguments.length - 1), M = 0; M < R.length; M++)
                R[M] = arguments[M + 1];
              var G = { callback: N, args: R };
              return l[w] = G, o(w), w++;
            }, A.clearImmediate = u;
          }
          function u(N) {
            delete l[N];
          }
          function y(N) {
            if (g)
              setTimeout(y, 0, N);
            else {
              var R = l[N];
              if (R) {
                g = !0;
                try {
                  (function(M) {
                    var G = M.callback, P = M.args;
                    switch (P.length) {
                      case 0:
                        G();
                        break;
                      case 1:
                        G(P[0]);
                        break;
                      case 2:
                        G(P[0], P[1]);
                        break;
                      case 3:
                        G(P[0], P[1], P[2]);
                        break;
                      default:
                        G.apply(n, P);
                    }
                  })(R);
                } finally {
                  u(N), g = !1;
                }
              }
            }
          }
          function x(N) {
            N.source === a && typeof N.data == "string" && N.data.indexOf(v) === 0 && y(+N.data.slice(v.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Nt < "u" ? Nt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(be);
var We = be.exports;
const je = /* @__PURE__ */ ve(We);
var we = { exports: {} };
(function(E, d) {
  (function(e, p) {
    p();
  })(Nt, function() {
    function e(f, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type) ? new Blob(["\uFEFF", f], { type: f.type }) : f;
    }
    function p(f, m, v) {
      var w = new XMLHttpRequest();
      w.open("GET", f), w.responseType = "blob", w.onload = function() {
        o(w.response, m, v);
      }, w.onerror = function() {
        console.error("could not download file");
      }, w.send();
    }
    function c(f) {
      var m = new XMLHttpRequest();
      m.open("HEAD", f, !1);
      try {
        m.send();
      } catch {
      }
      return 200 <= m.status && 299 >= m.status;
    }
    function r(f) {
      try {
        f.dispatchEvent(new MouseEvent("click"));
      } catch {
        var m = document.createEvent("MouseEvents");
        m.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), f.dispatchEvent(m);
      }
    }
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Nt == "object" && Nt.global === Nt ? Nt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(f, m, v) {
      var w = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || f.name || "download", l.download = m, l.rel = "noopener", typeof f == "string" ? (l.href = f, l.origin === location.origin ? r(l) : c(l.href) ? p(f, m, v) : r(l, l.target = "_blank")) : (l.href = w.createObjectURL(f), setTimeout(function() {
        w.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, m, v) {
      if (m = m || f.name || "download", typeof f != "string")
        navigator.msSaveOrOpenBlob(e(f, v), m);
      else if (c(f))
        p(f, m, v);
      else {
        var w = document.createElement("a");
        w.href = f, w.target = "_blank", setTimeout(function() {
          r(w);
        });
      }
    } : function(f, m, v, w) {
      if (w = w || open("", "_blank"), w && (w.document.title = w.document.body.innerText = "downloading..."), typeof f == "string")
        return p(f, m, v);
      var l = f.type === "application/octet-stream", g = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && g || n) && typeof FileReader < "u") {
        var A = new FileReader();
        A.onloadend = function() {
          var x = A.result;
          x = s ? x : x.replace(/^data:[^;]*;/, "data:attachment/file;"), w ? w.location.href = x : location = x, w = null;
        }, A.readAsDataURL(f);
      } else {
        var u = a.URL || a.webkitURL, y = u.createObjectURL(f);
        w ? w.location = y : location.href = y, w = null, setTimeout(function() {
          u.revokeObjectURL(y);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, E.exports = o;
  });
})(we);
var Pe = we.exports;
const Je = /* @__PURE__ */ ve(Pe);
function Jt(E) {
  for (var d = window.atob(E), e = d.length, p = new Uint8Array(e), c = 0; c < e; c++)
    p[c] = d.charCodeAt(c);
  return p.buffer;
}
const Ze = `#!/bin/sh

#
# Copyright © 2015-2021 the original authors.
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
#       https://github.com/gradle/gradle/blob/HEAD/subprojects/plugins/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
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
APP_HOME=$( cd "\${APP_HOME:-./}" > /dev/null && pwd -P ) || exit

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

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar


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
    CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

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
#   * DEFAULT_JVM_OPTS, JAVA_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,
#     and any embedded shellness will be escaped.
#   * For example: A user cannot expect \${Hostname} to be expanded, as it is an environment variable and will be
#     treated as '\${Hostname}' itself on the command line.

set -- \\
        "-Dorg.gradle.appname=$APP_BASE_NAME" \\
        -classpath "$CLASSPATH" \\
        org.gradle.wrapper.GradleWrapperMain \\
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
`, Qe = `@rem\r
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
set CLASSPATH=%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar\r
\r
\r
@rem Execute Gradle\r
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %*\r
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
`, Ye = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.7-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Xe = "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UGFyc2VyJEFmdGVyT3B0aW9ucy5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCL4zEXLAMAAF0HAAA8AAkAAAAAAAAAAAAAANMVAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRCZWZvcmVGaXJzdFN1YkNvbW1hbmQuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA6doPs98GAABiDgAAPQAJAAAAAAAAAAAAAAByGQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkS25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBDJ3yiTAIAAJcEAAA8AAkAAAAAAAAAAAAAAMUgAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRNaXNzaW5nT3B0aW9uQXJnU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAtJRbo9cCAABKBQAAPQAJAAAAAAAAAAAAAACEIwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uQXdhcmVQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB1W3o/ogEAAH0CAAA4AAkAAAAAAAAAAAAAAM8mAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAW1+kcDQIAAEMDAAAzAAkAAAAAAAAAAAAAAOAoAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAkMnJiacBAADOAgAAMgAJAAAAAAAAAAAAAABXKwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAS8+WoHMCAADHBAAAPwAJAAAAAAAAAAAAAABnLQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAB2MmemvBAAAYwgAACYACQAAAAAAAAAAAAAAUDAAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOsyd406BAAA4QcAACYACQAAAAAAAAAAAAAAXDUAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFrddm1UAQAArAEAACwACQAAAAAAAAAAAAAA8zkAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAPkkTxT/AgAAnAQAADMACQAAAAAAAAAAAAAAqjsAAG9yZy9ncmFkbGUvaW50ZXJuYWwvZmlsZS9QYXRoVHJhdmVyc2FsQ2hlY2tlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB5tXfKhwEAAAMCAABBAAkAAAAAAAAAAAAAABM/AABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBipwaKwQEAAKMCAAA+AAkAAAAAAAAAAAAAABJBAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvV3JhcHBlckRpc3RyaWJ1dGlvblVybENvbnZlcnRlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCcRdKajgEAAB4CAAAvAAkAAAAAAAAAAAAAAEhDAABvcmcvZ3JhZGxlL3dyYXBwZXIvQm9vdHN0cmFwTWFpblN0YXJ0ZXIkMS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCA0yUGKQMAAOQEAABBAAkAAAAAAAAAAAAAADxFAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkRGVmYXVsdERvd25sb2FkUHJvZ3Jlc3NMaXN0ZW5lci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB3o7Ym5QIAABEFAAA0AAkAAAAAAAAAAAAAAN1IAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkUHJveHlBdXRoZW50aWNhdG9yLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhABgEsAxlCQAAKhIAACEACQAAAAAAAAAAAAAALUwAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBBcxcJ2QEAALICAAAtAAkAAAAAAAAAAAAAAOpVAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlVXNlckhvbWVMb29rdXAuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA3RS7hw0VAACpKQAAKgAJAAAAAAAAAAAAAAAnWAAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVdyYXBwZXJNYWluLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACKYkR7DCwAAuhUAACIACQAAAAAAAAAAAAAAlW0AAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJDEuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAqgSTSmoBAADnAQAALQAJAAAAAAAAAAAAAACxeQAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwkSW5zdGFsbENoZWNrLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAD8+qWeoDgAA2hsAACAACQAAAAAAAAAAAAAAf3sAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAF32tW87AgAAHgQAAB8ACQAAAAAAAAAAAAAAfooAAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA6imTPiQBAABqAQAAJgAJAAAAAAAAAAAAAAAPjQAAb3JnL2dyYWRsZS93cmFwcGVyL1BhdGhBc3NlbWJsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA1uMlrJoDAABOBgAAMAAJAAAAAAAAAAAAAACQjgAAb3JnL2dyYWRsZS93cmFwcGVyL1N5c3RlbVByb3BlcnRpZXNIYW5kbGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOYRBMnuAgAAUAYAAC0ACQAAAAAAAAAAAAAAkZIAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyQ29uZmlndXJhdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQARWWHoUwYAAMUMAAAoAAkAAAAAAAAAAAAAAOOVAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckV4ZWN1dG9yLmNsYXNzVVQFAAEAAAAAUEsFBgAAAAAhACEAEg0AAJWcAAAAAA==", ye = `# gradle

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
`, ke = `# Automatically build the project and run any configured tests for every push
# and submitted pull request. This can help catch issues that only occur on
# certain platforms or Java versions, and provides a first line of defence
# against bad commits.

name: build
on: [pull_request, push]

jobs:
  build:
    strategy:
      matrix:
        # Use these Java versions
        java: [
          21,    # Current Java LTS
        ]
    runs-on: ubuntu-22.04
    steps:
      - name: checkout repository
        uses: actions/checkout@v4
      - name: validate gradle wrapper
        uses: gradle/wrapper-validation-action@v2
      - name: setup jdk \${{ matrix.java }}
        uses: actions/setup-java@v4
        with:
          java-version: \${{ matrix.java }}
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        if: \${{ matrix.java == '21' }} # Only upload artifacts built from latest java
        uses: actions/upload-artifact@v4
        with:
          name: Artifacts
          path: build/libs/`;
async function He({ writer: E }) {
  await E.write("gradlew", Ze, {
    executable: !0
  }), await E.write("gradlew.bat", Qe), await E.write("gradle/wrapper/gradle-wrapper.properties", Ye), await E.write("gradle/wrapper/gradle-wrapper.jar", Jt(Xe)), await E.write(".gitignore", ye), await E.write(".github/workflows/build.yml", ke);
}
var Xt = { exports: {} };
(function(E, d) {
  (function(e, p) {
    p(d);
  })(Nt, function(e) {
    function p() {
      return p = Object.assign ? Object.assign.bind() : function(C) {
        for (var U = 1; U < arguments.length; U++) {
          var F = arguments[U];
          for (var j in F)
            Object.prototype.hasOwnProperty.call(F, j) && (C[j] = F[j]);
        }
        return C;
      }, p.apply(this, arguments);
    }
    function c(C, U) {
      C.prototype = Object.create(U.prototype), C.prototype.constructor = C, a(C, U);
    }
    function r(C) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(U) {
        return U.__proto__ || Object.getPrototypeOf(U);
      }, r(C);
    }
    function a(C, U) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, j) {
        return F.__proto__ = j, F;
      }, a(C, U);
    }
    function n(C, U, F) {
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
      }() ? Reflect.construct.bind() : function(j, S, B) {
        var q = [null];
        q.push.apply(q, S);
        var Z = new (Function.bind.apply(j, q))();
        return B && a(Z, B.prototype), Z;
      }, n.apply(null, arguments);
    }
    function o(C) {
      var U = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(F) {
        if (F === null || Function.toString.call(F).indexOf("[native code]") === -1)
          return F;
        if (typeof F != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (U !== void 0) {
          if (U.has(F))
            return U.get(F);
          U.set(F, j);
        }
        function j() {
          return n(F, arguments, r(this).constructor);
        }
        return j.prototype = Object.create(F.prototype, { constructor: { value: j, enumerable: !1, writable: !0, configurable: !0 } }), a(j, F);
      }, o(C);
    }
    var f = /* @__PURE__ */ function() {
      function C(F) {
        this.cache = void 0, this.cache = F;
      }
      var U = C.prototype;
      return U.define = function(F, j) {
        this.cache[F] = j;
      }, U.get = function(F) {
        return this.cache[F];
      }, U.remove = function(F) {
        delete this.cache[F];
      }, U.reset = function() {
        this.cache = {};
      }, U.load = function(F) {
        this.cache = p({}, this.cache, F);
      }, C;
    }(), m = /* @__PURE__ */ function(C) {
      function U(F) {
        var j;
        return (j = C.call(this, F) || this).name = "Eta Error", j;
      }
      return c(U, C), U;
    }(/* @__PURE__ */ o(Error));
    function v(C, U, F) {
      var j = U.slice(0, F).split(/\n/), S = j.length, B = j[S - 1].length + 1;
      throw C += " at line " + S + " col " + B + `:

  ` + U.split(/\n/)[S - 1] + `
  ` + Array(B).join(" ") + "^", new m(C);
    }
    function w(C, U, F, j) {
      var S = U.split(`
`), B = Math.max(F - 3, 0), q = Math.min(S.length, F + 3), Z = j, X = S.slice(B, q).map(function(gt, ot) {
        var at = ot + B + 1;
        return (at == F ? " >> " : "    ") + at + "| " + gt;
      }).join(`
`), ct = new m((Z ? Z + ":" + F + `
` : "line " + F + `
`) + X + `

` + C.message);
      throw ct.name = C.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function g(C, U) {
      var F = this.config, j = U && U.async ? l : Function;
      try {
        return new j(F.varName, "options", this.compileToString.call(this, C, U));
      } catch (S) {
        throw S instanceof SyntaxError ? new m(`Bad template syntax

` + S.message + `
` + Array(S.message.length + 1).join("=") + `
` + this.compileToString.call(this, C, U) + `
`) : S;
      }
    }
    function s(C, U) {
      var F = this.config, j = U && U.async, S = this.parse.call(this, C), B = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + C.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + A.call(this, S) + `
if (__eta.layout) {
  __eta.res = ` + (j ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var q = 0; q < F.plugins.length; q++) {
          var Z = F.plugins[q];
          Z.processFnString && (B = Z.processFnString(B, F));
        }
      return B;
    }
    function A(C) {
      for (var U = this.config, F = 0, j = C.length, S = ""; F < j; F++) {
        var B = C[F];
        if (typeof B == "string")
          S += "__eta.res+='" + B + `'
`;
        else {
          var q = B.t, Z = B.val || "";
          U.debug && (S += "__eta.line=" + B.lineNo + `
`), q === "r" ? (U.autoFilter && (Z = "__eta.f(" + Z + ")"), S += "__eta.res+=" + Z + `
`) : q === "i" ? (U.autoFilter && (Z = "__eta.f(" + Z + ")"), U.autoEscape && (Z = "__eta.e(" + Z + ")"), S += "__eta.res+=" + Z + `
`) : q === "e" && (S += Z + `
`);
        }
      }
      return S;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function y(C) {
      return u[C];
    }
    var x = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(C) {
      var U = String(C);
      return /[&<>"']/.test(U) ? U.replace(/[&<>"']/g, y) : U;
    }, filterFunction: function(C) {
      return String(C);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, N = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, R = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, M = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function G(C) {
      return C.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function P(C, U) {
      return C.slice(0, U).split(`
`).length;
    }
    function V(C) {
      var U = this.config, F = [], j = !1, S = 0, B = U.parse;
      if (U.plugins)
        for (var q = 0; q < U.plugins.length; q++) {
          var Z = U.plugins[q];
          Z.processTemplate && (C = Z.processTemplate(C, U));
        }
      function X(I, W) {
        I && (I = function(L, _, Q, $) {
          var J, tt;
          return Array.isArray(_.autoTrim) ? (J = _.autoTrim[1], tt = _.autoTrim[0]) : J = tt = _.autoTrim, (Q || Q === !1) && (J = Q), ($ || $ === !1) && (tt = $), tt || J ? J === "slurp" && tt === "slurp" ? L.trim() : (J === "_" || J === "slurp" ? L = L.trimStart() : J !== "-" && J !== "nl" || (L = L.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? L = L.trimEnd() : tt !== "-" && tt !== "nl" || (L = L.replace(/(?:\r\n|\n|\r)$/, "")), L) : L;
        }(I, U, j, W), I && (I = I.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(I)));
      }
      U.rmWhitespace && (C = C.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), N.lastIndex = 0, R.lastIndex = 0, M.lastIndex = 0;
      for (var ct, gt = [B.exec, B.interpolate, B.raw].reduce(function(I, W) {
        return I && W ? I + "|" + G(W) : W ? G(W) : I;
      }, ""), ot = new RegExp(G(U.tags[0]) + "(-|_)?\\s*(" + gt + ")?\\s*", "g"), at = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + G(U.tags[1]) + ")", "g"); ct = ot.exec(C); ) {
        var ft = C.slice(S, ct.index);
        S = ct[0].length + ct.index;
        var ut = ct[2] || "";
        X(ft, ct[1]), at.lastIndex = S;
        for (var mt = void 0, wt = !1; mt = at.exec(C); ) {
          if (mt[1]) {
            var t = C.slice(S, mt.index);
            ot.lastIndex = S = at.lastIndex, j = mt[2], wt = { t: ut === B.exec ? "e" : ut === B.raw ? "r" : ut === B.interpolate ? "i" : "", val: t };
            break;
          }
          var z = mt[0];
          if (z === "/*") {
            var O = C.indexOf("*/", at.lastIndex);
            O === -1 && v("unclosed comment", C, mt.index), at.lastIndex = O;
          } else
            z === "'" ? (R.lastIndex = mt.index, R.exec(C) ? at.lastIndex = R.lastIndex : v("unclosed string", C, mt.index)) : z === '"' ? (M.lastIndex = mt.index, M.exec(C) ? at.lastIndex = M.lastIndex : v("unclosed string", C, mt.index)) : z === "`" && (N.lastIndex = mt.index, N.exec(C) ? at.lastIndex = N.lastIndex : v("unclosed string", C, mt.index));
        }
        wt ? (U.debug && (wt.lineNo = P(C, ct.index)), F.push(wt)) : v("unclosed tag", C, ct.index);
      }
      if (X(C.slice(S, C.length), !1), U.plugins)
        for (var b = 0; b < U.plugins.length; b++) {
          var h = U.plugins[b];
          h.processAST && (F = h.processAST(F, U));
        }
      return F;
    }
    function H(C, U) {
      var F = U && U.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !C.startsWith("@")) {
        var j = U.filepath, S = F.get(j);
        if (this.config.cache && S)
          return S;
        var B = this.readFile(j), q = this.compile(B, U);
        return this.config.cache && F.define(j, q), q;
      }
      var Z = F.get(C);
      if (Z)
        return Z;
      throw new m("Failed to get template '" + C + "'");
    }
    function rt(C, U, F) {
      var j, S = p({}, F, { async: !1 });
      return typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (S.filepath = this.resolvePath(C, S)), j = H.call(this, C, S)) : j = C, j.call(this, U, S);
    }
    function k(C, U, F) {
      var j, S = p({}, F, { async: !0 });
      typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (S.filepath = this.resolvePath(C, S)), j = H.call(this, C, S)) : j = C;
      var B = j.call(this, U, S);
      return Promise.resolve(B);
    }
    function T(C, U) {
      var F = this.compile(C, { async: !1 });
      return rt.call(this, F, U);
    }
    function i(C, U) {
      var F = this.compile(C, { async: !0 });
      return k.call(this, F, U);
    }
    var D = /* @__PURE__ */ function() {
      function C(F) {
        this.config = void 0, this.RuntimeErr = w, this.compile = g, this.compileToString = s, this.parse = V, this.render = rt, this.renderAsync = k, this.renderString = T, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new f({}), this.templatesAsync = new f({}), this.resolvePath = null, this.readFile = null, this.config = F ? p({}, x, F) : p({}, x);
      }
      var U = C.prototype;
      return U.configure = function(F) {
        this.config = p({}, this.config, F);
      }, U.withConfig = function(F) {
        return p({}, this, { config: p({}, this.config, F) });
      }, U.loadTemplate = function(F, j, S) {
        if (typeof j == "string")
          (S && S.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(j, S));
        else {
          var B = this.templatesSync;
          (j.constructor.name === "AsyncFunction" || S && S.async) && (B = this.templatesAsync), B.define(F, j);
        }
      }, C;
    }(), it = /* @__PURE__ */ function(C) {
      function U() {
        return C.apply(this, arguments) || this;
      }
      return c(U, C), U;
    }(D);
    e.Eta = it;
  });
})(Xt, Xt.exports);
var qe = Xt.exports;
const Ke = new qe.Eta({
  autoTrim: !1
});
function Tt(E, d) {
  return Ke.renderString(E, d);
}
const $e = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, tn = `plugins {
	id 'fabric-loom' version '1.6-SNAPSHOT'
	id 'maven-publish'
	<%_ if (it.kotlin) { %>
  id "org.jetbrains.kotlin.jvm" version "<%= it.kotlin.kotlinVersion %>"
  <%_ } %>
}

version = project.mod_version
group = project.maven_group

base {
	archivesName = project.archives_base_name
}

repositories {
	// Add repositories to retrieve artifacts from in here.
	// You should only use this when depending on other mods because
	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.
	// See https://docs.gradle.org/current/userguide/declaring_repositories.html
	// for more information about repositories.
}
<% if (it.splitSources) { %>
loom {
<% if (it.splitSources) { %>    splitEnvironmentSourceSets()

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
	configureDataGeneration()
}
<% } %>
dependencies {
	// To change the versions see the gradle.properties file
	minecraft "com.mojang:minecraft:\${project.minecraft_version}"
	mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${project.yarn_mappings}:v2"<% } %>
	modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
	<% if (it.kotlin) { %>modImplementation "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
}

processResources {
	inputs.property "version", project.version

	filesMatching("fabric.mod.json") {
		expand "version": project.version
	}
}

tasks.withType(JavaCompile).configureEach {
	it.options.release = <%= it.java.release %>
}
<% if (it.kotlin) { %>
tasks.withType(org.jetbrains.kotlin.gradle.tasks.KotlinCompile).all {
	kotlinOptions {
		jvmTarget = <%= it.java.kotlinRelease %>
	}
}
<% } %>
java {
	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the "build" task
	// if it is present.
	// If you remove this line, sources will not be generated.
	withSourcesJar()

	sourceCompatibility = JavaVersion.<%= it.java.compatibility %>
	targetCompatibility = JavaVersion.<%= it.java.compatibility %>
}

jar {
	from("LICENSE") {
		rename { "\${it}_\${project.base.archivesName.get()}"}
	}
}

// configure the maven publication
publishing {
	publications {
		create("mavenJava", MavenPublication) {
			artifactId = project.archives_base_name
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
}`, en = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`;
function nn(E) {
  return Qt(E) >= 17;
}
function rn(E) {
  return Qt(E) >= 19;
}
function Qt(E) {
  return Ee(E)[1];
}
function an(E) {
  return Ee(E)[2];
}
function Ee(E) {
  return E.split("-")[0].split(".").map((e) => parseInt(e));
}
function xe(E, d) {
  let e = [];
  const p = d ? "Modid" : "Mod Name";
  return E.length == 0 ? [`${p} is empty!`] : (E.length == 1 ? e.push(`${p} is only a single character! (It must be at least 2 characters long)!`) : E.length > 64 && e.push(`${p} has more than 64 characters!`), E.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function sn(E) {
  if (E === void 0)
    return;
  let d = xe(E, !0) ?? [];
  const e = E.charAt(0);
  (e < "a" || e > "z") && d.push("Modid starts with an invalid character '" + e + "' (it must belowercase a-z)");
  let p = null;
  for (let c = 1; c < E.length; c++) {
    let r = E.charAt(c);
    r == "-" || r == "_" || "0" <= r && r <= "9" || "a" <= r && r <= "z" || (p == null && (p = []), p.push(r));
  }
  if (p != null) {
    let c = "Modid contains invalid characters: " + p.map((r) => "'" + r + "'").join(", ") + "!";
    d.push(c + "!");
  }
  if (d.length != 0)
    return d;
}
function on(E) {
  return E.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function ln(E) {
  return E.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
const cn = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, un = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, Kt = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
}, hn = {
  compatibility: "VERSION_21",
  mixin: "JAVA_21",
  release: 21,
  kotlinRelease: "21"
};
function Yt(E) {
  const d = Qt(E);
  return d <= 16 ? cn : d == 17 ? un : d <= 19 || d == 20 && an(E) <= 4 ? Kt : hn;
}
const An = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/, dn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function fn(E) {
  let d = [];
  An.test(E.toLowerCase()) || d.push("Package name is not a valid Java package name!");
  for (let e of dn)
    E.toLowerCase().startsWith(e) ? d.push(`Package name starts with '${e}', which is reserved!`) : E.toLowerCase() + "." == e && d.push(`Package name is '${e}', which is reserved!`);
  return d;
}
async function pn(E, d) {
  await E.write("gradle.properties", Tt($e, d)), await E.write("build.gradle", Tt(tn, { ...d, java: Yt(d.minecraftVersion) })), await E.write("settings.gradle", en);
}
const Ce = `package <%= it.packageName %>;

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
async function mn(E, d) {
  const e = d.packageName + ".mixin", p = "ExampleMixin", c = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = d.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Yt(d.minecraftVersion).mixin,
    mixins: [
      p
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${d.modid}.mixins.json`;
  return await E.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/main/java/${e.replaceAll(".", "/")}/${p}.java`, Tt(Ce, {
    className: p,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function gn(E, d) {
  const e = d.packageName + ".mixin.client", p = "ExampleClientMixin", c = d.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${c}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Yt(d.minecraftVersion).mixin,
    client: [
      p
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${d.modid}.client.mixins.json`;
  return await E.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/client/java/${e.replaceAll(".", "/")}/${p}.java`, Tt(Ce, {
    className: p,
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
const vn = `package <%= it.package %>;

import net.fabricmc.api.ModInitializer;
<% if (it.slf4j) { %>
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
<% } else { %>
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
<% } %>
public class <%= it.className %> implements ModInitializer {
	// This logger is used to write text to the console and the log file.
	// It is considered best practice to use your mod id as the logger's name.
	// That way, it's clear which mod wrote info, warnings, and errors.
<% if (it.slf4j) { %>    public static final Logger LOGGER = LoggerFactory.getLogger("<%= it.modid %>");
<% } else { %>    public static final Logger LOGGER = LogManager.getLogger("<%= it.modid %>");<% } %>
	@Override
	public void onInitialize() {
		// This code runs as soon as Minecraft is in a mod-load-ready state.
		// However, some things (like resources) may still be uninitialized.
		// Proceed with mild caution.

		LOGGER.info("Hello Fabric world!");
	}
}`, bn = `package <%= it.package %>

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
}`, wn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, yn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, kn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, En = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function xn(E, d) {
  const e = Cn(d.projectName), p = {
    package: d.packageName,
    className: e,
    classFullName: d.packageName + "." + e,
    path: d.packageName.replaceAll(".", "/") + "/" + e,
    modid: d.modid,
    slf4j: Qt(d.minecraftVersion) >= 18,
    clientEntrypoint: d.splitSources,
    dataEntrypoint: d.dataGeneration
  };
  return d.kotlin ? await Bn(E, p) : await Sn(E, p);
}
function Cn(E) {
  return E.split(" ").map((d) => d[0].toUpperCase() + d.slice(1)).join("").replace(/\W+/g, "");
}
async function Sn(E, d) {
  var e = {
    main: [
      d.classFullName
    ]
  };
  return await E.write(`src/main/java/${d.path}.java`, Tt(vn, d)), d.clientEntrypoint && (await E.write(`src/client/java/${d.path}Client.java`, Tt(wn, { ...d, className: d.className + "Client" })), e = {
    ...e,
    client: [
      d.classFullName + "Client"
    ]
  }), d.dataEntrypoint && (await E.write(`src/main/java/${d.path}DataGenerator.java`, Tt(kn, { ...d, className: d.className + "DataGenerator" })), e = {
    ...e,
    "fabric-datagen": [
      d.classFullName + "DataGenerator"
    ]
  }), e;
}
async function Bn(E, d) {
  var e = {
    main: [
      {
        value: d.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  return await E.write(`src/main/kotlin/${d.path}.kt`, Tt(bn, d)), d.clientEntrypoint && (await E.write(`src/client/kotlin/${d.path}Client.kt`, Tt(yn, { ...d, className: d.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: d.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), d.dataEntrypoint && (await E.write(`src/main/kotlin/${d.path}DataGenerator.kt`, Tt(En, { ...d, className: d.className + "DataGenerator" })), e = {
    ...e,
    "fabric-datagen": [
      {
        value: d.classFullName + "DataGenerator",
        adapter: "kotlin"
      }
    ]
  }), e;
}
const $t = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function In(E, d, e) {
  if (!d)
    return Jt($t);
  const p = e.create(128, 128);
  return p != null && Fn(p, E) ? p.getPng() : Jt($t);
}
function Fn(E, d) {
  const e = E.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const p = d.split(/\s+/);
  let c = 0, r = Array(p.length), a = 65;
  for (; ; ) {
    c = 0;
    for (const o of p) {
      let f = a;
      do
        f--, e.font = `${f}px ${Mt}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, f);
    }
    for (let o = 0; o < p.length; o++) {
      const f = p[o];
      e.font = `${a}px ${Mt}`;
      const m = E.measureText(e, f);
      r[o] = m.ascent + m.descent, c += r[o];
    }
    if (c += (p.length - 1) * 2, c <= 124)
      break;
  }
  const n = (128 - c) / 2;
  for (let o = 0; o < p.length; o++) {
    let f = 0;
    for (const w of r.slice(0, o))
      f += w + 2;
    const m = p[o];
    e.font = `${a}px ${Mt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const v = E.measureText(e, m);
    e.fillText(m, 64, n + f + v.ascent);
  }
  return !0;
}
function Rn(E) {
  return Number(E.split(".")[1]) >= 59;
}
async function _n(E, d, e) {
  const p = [
    ...await mn(E, e),
    ...e.splitSources ? await gn(E, e) : []
  ], c = e.minecraftVersion.indexOf("-"), r = e.minecraftVersion.substring(0, c === -1 ? e.minecraftVersion.length : c + 1), a = {
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
    entrypoints: await xn(E, e),
    mixins: p,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Yt(e.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  a.depends[Rn(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await E.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await E.write(`src/main/resources/assets/${e.modid}/icon.png`, In(e.projectName, e.uniqueModIcon, d));
}
const Nn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, On = `Creative Commons Legal Code

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
    this CC0 or use of the Work.`;
async function Tn(E, d) {
  await E.write(".gitattributes", Nn), await E.write(".gitignore", ye), await E.write(".github/workflows/build.yml", ke), await E.write("LICENSE", On);
}
const Mt = "Comic Relief";
async function Un(E) {
  const d = await Vn(E.config);
  await He(E), await pn(E.writer, d), await _n(E.writer, E.canvas, d), await Tn(E.writer);
}
async function Se() {
  let E = await Ge();
  return E.filter((d) => {
    const e = d.version;
    if (e.startsWith("1.14") && e != "1.14.4")
      return !1;
    if (!d.stable) {
      const p = E[0].version == e, c = e.includes("-pre") || e.includes("-rc");
      return p && c;
    }
    return !0;
  });
}
async function Vn(E) {
  return {
    ...E,
    loaderVersion: (await Le()).find((d) => d.stable).version,
    fabricVersion: await Me(E.minecraftVersion),
    yarnVersion: (await ze(E.minecraftVersion))[0].version,
    kotlin: await Gn(E)
  };
}
async function Gn(E) {
  if (!E.useKotlin)
    return;
  const e = (await De()).pop(), p = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: p
  };
}
const Ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Mt,
  generateTemplate: Un,
  getTemplateGameVersions: Se
}, Symbol.toStringTag, { value: "Module" }));
function te(E, d, e) {
  const p = E.slice();
  return p[31] = d[e], p;
}
function ee(E, d, e) {
  const p = E.slice();
  return p[34] = d[e], p;
}
function ne(E, d, e) {
  const p = E.slice();
  return p[34] = d[e], p;
}
function re(E, d, e) {
  const p = E.slice();
  return p[34] = d[e], p;
}
function Mn(E) {
  let d, e, p = (
    /*error*/
    E[34].message + ""
  ), c, r, a;
  return {
    c() {
      d = nt("p"), e = Ft("Error: "), c = Ft(p), r = lt(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, Vt(d, "color", "red");
    },
    m(n, o) {
      kt(n, d, o), Y(d, e), Y(d, c), kt(n, r, o), kt(n, a, o);
    },
    p: Ot,
    i: Ot,
    o: Ot,
    d(n) {
      n && Et(d), n && Et(r), n && Et(a);
    }
  };
}
function zn(E) {
  let d, e, p, c, r, a, n, o, f, m, v, w, l, g, s, A, u, y, x, N, R, M, G, P, V, H, rt, k, T, i, D, it, C, U, F, j, S, B, q, Z, X, ct, gt, ot, at, ft, ut, mt, wt, t, z, O, b, h, I, W, L, _, Q, $, J;
  function tt(et, bt) {
    return (
      /*customModId*/
      et[3] != null ? Wn : Dn
    );
  }
  let ht = tt(E), st = ht(E), pt = (
    /*modIdErrors*/
    E[14] != null && ie(E)
  ), xt = (
    /*customModId*/
    E[3] != null && se(E)
  ), It = (
    /*packageNameErrors*/
    E[12]
  ), yt = [];
  for (let et = 0; et < It.length; et += 1)
    yt[et] = ce(ee(E, It, et));
  let dt = (
    /*data*/
    E[30].game
  ), Ct = [];
  for (let et = 0; et < dt.length; et += 1)
    Ct[et] = ue(te(E, dt, et));
  let Bt = (
    /*supportsDataGen*/
    E[11] && he(E)
  ), vt = (
    /*supportsSplitSources*/
    E[10] && Ae(E)
  );
  const Gt = [Pn, jn], _t = [];
  function Wt(et, bt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return L = Wt(E), _ = _t[L] = Gt[L](E), {
    c() {
      d = nt("div"), e = nt("div"), p = nt("h3"), p.textContent = "Mod Name:", c = lt(), r = nt("hr"), a = lt(), st.c(), n = lt(), o = nt("input"), f = lt(), pt && pt.c(), m = lt(), xt && xt.c(), v = lt(), w = nt("div"), l = nt("h3"), l.textContent = "Package Name:", g = lt(), s = nt("hr"), A = lt(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, y = lt(), x = nt("input"), N = lt();
      for (let et = 0; et < yt.length; et += 1)
        yt[et].c();
      R = lt(), M = nt("div"), G = nt("h3"), G.textContent = "Minecraft Version:", P = lt(), V = nt("hr"), H = lt(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = lt(), T = nt("select");
      for (let et = 0; et < Ct.length; et += 1)
        Ct[et].c();
      i = lt(), D = nt("hr"), it = lt(), C = nt("br"), U = lt(), F = nt("h4"), F.textContent = "Advanced Options:", j = lt(), S = nt("div"), B = nt("div"), q = nt("input"), Z = lt(), X = nt("label"), X.textContent = "Kotlin Programming Language", ct = lt(), gt = nt("p"), gt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = lt(), at = nt("div"), ft = nt("div"), ut = nt("input"), mt = lt(), wt = nt("label"), wt.textContent = "Mojang Mappings", t = lt(), z = nt("p"), z.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", O = lt(), Bt && Bt.c(), b = lt(), vt && vt.c(), h = lt(), I = nt("br"), W = lt(), _.c(), K(p, "class", "svelte-c4460r"), K(r, "class", "svelte-c4460r"), K(o, "id", "project-name"), K(o, "class", "svelte-c4460r"), K(e, "class", "form-line svelte-c4460r"), K(l, "class", "svelte-c4460r"), K(s, "class", "svelte-c4460r"), K(u, "class", "svelte-c4460r"), K(x, "id", "package-name"), K(x, "class", "svelte-c4460r"), K(w, "class", "form-line svelte-c4460r"), K(G, "class", "svelte-c4460r"), K(V, "class", "svelte-c4460r"), K(rt, "class", "svelte-c4460r"), K(T, "id", "minecraft-version"), Vt(T, "min-width", "200px"), K(T, "class", "svelte-c4460r"), /*minecraftVersion*/
      E[0] === void 0 && Te(() => (
        /*select_change_handler*/
        E[24].call(T)
      )), K(M, "class", "form-line svelte-c4460r"), K(D, "class", "svelte-c4460r"), K(C, "class", "svelte-c4460r"), K(F, "class", "svelte-c4460r"), K(q, "id", "kotlin"), K(q, "type", "checkbox"), K(q, "class", "option-input svelte-c4460r"), K(X, "for", "kotlin"), K(X, "class", "option-label svelte-c4460r"), K(B, "class", "option-container svelte-c4460r"), K(gt, "class", "option-body svelte-c4460r"), K(S, "class", "svelte-c4460r"), K(ut, "id", "mojmap"), K(ut, "type", "checkbox"), K(ut, "class", "option-input svelte-c4460r"), K(wt, "for", "mojmap"), K(wt, "class", "option-label svelte-c4460r"), K(ft, "class", "option-container svelte-c4460r"), K(z, "class", "option-body svelte-c4460r"), K(at, "class", "svelte-c4460r"), K(I, "class", "svelte-c4460r"), K(d, "class", "template svelte-c4460r");
    },
    m(et, bt) {
      kt(et, d, bt), Y(d, e), Y(e, p), Y(e, c), Y(e, r), Y(e, a), st.m(e, null), Y(e, n), Y(e, o), Ut(
        o,
        /*projectName*/
        E[1]
      ), Y(e, f), pt && pt.m(e, null), Y(d, m), xt && xt.m(d, null), Y(d, v), Y(d, w), Y(w, l), Y(w, g), Y(w, s), Y(w, A), Y(w, u), Y(w, y), Y(w, x), Ut(
        x,
        /*packageName*/
        E[2]
      ), Y(w, N);
      for (let St = 0; St < yt.length; St += 1)
        yt[St] && yt[St].m(w, null);
      Y(d, R), Y(d, M), Y(M, G), Y(M, P), Y(M, V), Y(M, H), Y(M, rt), Y(M, k), Y(M, T);
      for (let St = 0; St < Ct.length; St += 1)
        Ct[St] && Ct[St].m(T, null);
      qt(
        T,
        /*minecraftVersion*/
        E[0],
        !0
      ), Y(d, i), Y(d, D), Y(d, it), Y(d, C), Y(d, U), Y(d, F), Y(d, j), Y(d, S), Y(S, B), Y(B, q), q.checked = /*useKotlin*/
      E[5], Y(B, Z), Y(B, X), Y(S, ct), Y(S, gt), Y(d, ot), Y(d, at), Y(at, ft), Y(ft, ut), ut.checked = /*mojmap*/
      E[6], Y(ft, mt), Y(ft, wt), Y(at, t), Y(at, z), Y(d, O), Bt && Bt.m(d, null), Y(d, b), vt && vt.m(d, null), Y(d, h), Y(d, I), Y(d, W), _t[L].m(d, null), Q = !0, $ || (J = [
        Rt(
          o,
          "input",
          /*input0_input_handler*/
          E[21]
        ),
        Rt(
          o,
          "blur",
          /*doFormatProjectName*/
          E[17]
        ),
        Rt(
          x,
          "keyup",
          /*doFormatPackageName*/
          E[18]
        ),
        Rt(
          x,
          "input",
          /*input1_input_handler*/
          E[23]
        ),
        Rt(
          T,
          "change",
          /*select_change_handler*/
          E[24]
        ),
        Rt(
          q,
          "change",
          /*input2_change_handler*/
          E[25]
        ),
        Rt(
          ut,
          "change",
          /*input3_change_handler*/
          E[26]
        )
      ], $ = !0);
    },
    p(et, bt) {
      if (ht === (ht = tt(et)) && st ? st.p(et, bt) : (st.d(1), st = ht(et), st && (st.c(), st.m(e, n))), bt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      et[1] && Ut(
        o,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[14] != null ? pt ? pt.p(et, bt) : (pt = ie(et), pt.c(), pt.m(e, null)) : pt && (pt.d(1), pt = null), /*customModId*/
      et[3] != null ? xt ? xt.p(et, bt) : (xt = se(et), xt.c(), xt.m(d, v)) : xt && (xt.d(1), xt = null), bt[0] & /*packageName*/
      4 && x.value !== /*packageName*/
      et[2] && Ut(
        x,
        /*packageName*/
        et[2]
      ), bt[0] & /*packageNameErrors*/
      4096) {
        It = /*packageNameErrors*/
        et[12];
        let At;
        for (At = 0; At < It.length; At += 1) {
          const Lt = ee(et, It, At);
          yt[At] ? yt[At].p(Lt, bt) : (yt[At] = ce(Lt), yt[At].c(), yt[At].m(w, null));
        }
        for (; At < yt.length; At += 1)
          yt[At].d(1);
        yt.length = It.length;
      }
      if (bt[0] & /*versions*/
      32768) {
        dt = /*data*/
        et[30].game;
        let At;
        for (At = 0; At < dt.length; At += 1) {
          const Lt = te(et, dt, At);
          Ct[At] ? Ct[At].p(Lt, bt) : (Ct[At] = ue(Lt), Ct[At].c(), Ct[At].m(T, null));
        }
        for (; At < Ct.length; At += 1)
          Ct[At].d(1);
        Ct.length = dt.length;
      }
      bt[0] & /*minecraftVersion, versions*/
      32769 && qt(
        T,
        /*minecraftVersion*/
        et[0]
      ), bt[0] & /*useKotlin*/
      32 && (q.checked = /*useKotlin*/
      et[5]), bt[0] & /*mojmap*/
      64 && (ut.checked = /*mojmap*/
      et[6]), /*supportsDataGen*/
      et[11] ? Bt ? Bt.p(et, bt) : (Bt = he(et), Bt.c(), Bt.m(d, b)) : Bt && (Bt.d(1), Bt = null), /*supportsSplitSources*/
      et[10] ? vt ? vt.p(et, bt) : (vt = Ae(et), vt.c(), vt.m(d, h)) : vt && (vt.d(1), vt = null);
      let St = L;
      L = Wt(et), L === St ? _t[L].p(et, bt) : (Ue(), Dt(_t[St], 1, 1, () => {
        _t[St] = null;
      }), Ve(), _ = _t[L], _ ? _.p(et, bt) : (_ = _t[L] = Gt[L](et), _.c()), zt(_, 1), _.m(d, null));
    },
    i(et) {
      Q || (zt(_), Q = !0);
    },
    o(et) {
      Dt(_), Q = !1;
    },
    d(et) {
      et && Et(d), st.d(), pt && pt.d(), xt && xt.d(), Pt(yt, et), Pt(Ct, et), Bt && Bt.d(), vt && vt.d(), _t[L].d(), $ = !1, de(J);
    }
  };
}
function Dn(E) {
  let d, e, p, c, r, a, n, o;
  return {
    c() {
      d = nt("p"), e = Ft("Choose a name for your new mod. The mod ID will be "), p = nt("code"), c = Ft(
        /*modid*/
        E[4]
      ), r = Ft(". "), a = nt("a"), a.textContent = "Use custom id", K(p, "class", "svelte-c4460r"), K(a, "href", ""), K(a, "class", "svelte-c4460r"), K(d, "class", "svelte-c4460r");
    },
    m(f, m) {
      kt(f, d, m), Y(d, e), Y(d, p), Y(p, c), Y(d, r), Y(d, a), n || (o = Rt(a, "click", Ht(
        /*useCustomModId*/
        E[19]
      )), n = !0);
    },
    p(f, m) {
      m[0] & /*modid*/
      16 && Zt(
        c,
        /*modid*/
        f[4]
      );
    },
    d(f) {
      f && Et(d), n = !1, o();
    }
  };
}
function Wn(E) {
  let d;
  return {
    c() {
      d = nt("p"), d.textContent = "Choose a name for your new mod.", K(d, "class", "svelte-c4460r");
    },
    m(e, p) {
      kt(e, d, p);
    },
    p: Ot,
    d(e) {
      e && Et(d);
    }
  };
}
function ie(E) {
  let d, e, p = (
    /*modIdErrors*/
    E[14]
  ), c = [];
  for (let r = 0; r < p.length; r += 1)
    c[r] = ae(re(E, p, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      d = lt(), e = nt("br"), K(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, d, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      16384) {
        p = /*modIdErrors*/
        r[14];
        let n;
        for (n = 0; n < p.length; n += 1) {
          const o = re(r, p, n);
          c[n] ? c[n].p(o, a) : (c[n] = ae(o), c[n].c(), c[n].m(d.parentNode, d));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = p.length;
      }
    },
    d(r) {
      Pt(c, r), r && Et(d), r && Et(e);
    }
  };
}
function ae(E) {
  let d, e = (
    /*error*/
    E[34] + ""
  ), p;
  return {
    c() {
      d = nt("li"), p = Ft(e), Vt(d, "color", "red"), K(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, d, r), Y(d, p);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      16384 && e !== (e = /*error*/
      c[34] + "") && Zt(p, e);
    },
    d(c) {
      c && Et(d);
    }
  };
}
function se(E) {
  let d, e, p, c, r, a, n, o, f, m, v, w, l, g = (
    /*customIdErrors*/
    E[13] != null && oe(E)
  );
  return {
    c() {
      d = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", p = lt(), c = nt("hr"), r = lt(), a = nt("p"), n = Ft("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", f = lt(), g && g.c(), m = lt(), v = nt("input"), K(e, "class", "svelte-c4460r"), K(c, "class", "svelte-c4460r"), K(o, "href", ""), K(o, "class", "svelte-c4460r"), K(a, "class", "svelte-c4460r"), K(v, "id", "mod-id"), K(v, "class", "svelte-c4460r"), K(d, "class", "form-line svelte-c4460r");
    },
    m(s, A) {
      kt(s, d, A), Y(d, e), Y(d, p), Y(d, c), Y(d, r), Y(d, a), Y(a, n), Y(a, o), Y(d, f), g && g.m(d, null), Y(d, m), Y(d, v), Ut(
        v,
        /*customModId*/
        E[3]
      ), w || (l = [
        Rt(o, "click", Ht(
          /*useDefaultModId*/
          E[20]
        )),
        Rt(
          v,
          "input",
          /*input_input_handler*/
          E[22]
        )
      ], w = !0);
    },
    p(s, A) {
      /*customIdErrors*/
      s[13] != null ? g ? g.p(s, A) : (g = oe(s), g.c(), g.m(d, m)) : g && (g.d(1), g = null), A[0] & /*customModId*/
      8 && v.value !== /*customModId*/
      s[3] && Ut(
        v,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(d), g && g.d(), w = !1, de(l);
    }
  };
}
function oe(E) {
  let d, e, p = (
    /*customIdErrors*/
    E[13]
  ), c = [];
  for (let r = 0; r < p.length; r += 1)
    c[r] = le(ne(E, p, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      d = lt(), e = nt("br"), K(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, d, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      8192) {
        p = /*customIdErrors*/
        r[13];
        let n;
        for (n = 0; n < p.length; n += 1) {
          const o = ne(r, p, n);
          c[n] ? c[n].p(o, a) : (c[n] = le(o), c[n].c(), c[n].m(d.parentNode, d));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = p.length;
      }
    },
    d(r) {
      Pt(c, r), r && Et(d), r && Et(e);
    }
  };
}
function le(E) {
  let d, e = (
    /*error*/
    E[34] + ""
  ), p;
  return {
    c() {
      d = nt("li"), p = Ft(e), Vt(d, "color", "red"), K(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, d, r), Y(d, p);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      8192 && e !== (e = /*error*/
      c[34] + "") && Zt(p, e);
    },
    d(c) {
      c && Et(d);
    }
  };
}
function ce(E) {
  let d, e = (
    /*error*/
    E[34] + ""
  ), p;
  return {
    c() {
      d = nt("li"), p = Ft(e), Vt(d, "color", "red"), K(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, d, r), Y(d, p);
    },
    p(c, r) {
      r[0] & /*packageNameErrors*/
      4096 && e !== (e = /*error*/
      c[34] + "") && Zt(p, e);
    },
    d(c) {
      c && Et(d);
    }
  };
}
function ue(E) {
  let d, e = (
    /*version*/
    E[31].version + ""
  ), p;
  return {
    c() {
      d = nt("option"), p = Ft(e), d.__value = /*version*/
      E[31].version, d.value = d.__value, K(d, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, d, r), Y(d, p);
    },
    p: Ot,
    d(c) {
      c && Et(d);
    }
  };
}
function he(E) {
  let d, e, p, c, r, a, n, o, f;
  return {
    c() {
      d = nt("div"), e = nt("div"), p = nt("input"), c = lt(), r = nt("label"), r.textContent = "Data Generation", a = lt(), n = nt("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', K(p, "id", "datagen"), K(p, "type", "checkbox"), K(p, "class", "option-input svelte-c4460r"), K(r, "for", "datagen"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(d, "class", "svelte-c4460r");
    },
    m(m, v) {
      kt(m, d, v), Y(d, e), Y(e, p), p.checked = /*dataGeneration*/
      E[7], Y(e, c), Y(e, r), Y(d, a), Y(d, n), o || (f = Rt(
        p,
        "change",
        /*input_change_handler*/
        E[27]
      ), o = !0);
    },
    p(m, v) {
      v[0] & /*dataGeneration*/
      128 && (p.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && Et(d), o = !1, f();
    }
  };
}
function Ae(E) {
  let d, e, p, c, r, a, n, o, f;
  return {
    c() {
      d = nt("div"), e = nt("div"), p = nt("input"), c = lt(), r = nt("label"), r.textContent = "Split client and common sources", a = lt(), n = nt("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, K(p, "id", "splitSources"), K(p, "type", "checkbox"), K(p, "class", "option-input svelte-c4460r"), K(r, "for", "splitSources"), K(r, "class", "option-label svelte-c4460r"), K(e, "class", "option-container svelte-c4460r"), K(n, "class", "option-body svelte-c4460r"), K(d, "class", "svelte-c4460r");
    },
    m(m, v) {
      kt(m, d, v), Y(d, e), Y(e, p), p.checked = /*splitSources*/
      E[8], Y(e, c), Y(e, r), Y(d, a), Y(d, n), o || (f = Rt(
        p,
        "change",
        /*input_change_handler_1*/
        E[28]
      ), o = !0);
    },
    p(m, v) {
      v[0] & /*splitSources*/
      256 && (p.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && Et(d), o = !1, f();
    }
  };
}
function jn(E) {
  let d, e, p, c, r, a;
  return e = new ge({}), {
    c() {
      d = nt("a"), fe(e.$$.fragment), p = Ft(" Download Template (.ZIP)"), K(d, "class", "button primary large download-button svelte-c4460r"), K(d, "href", "");
    },
    m(n, o) {
      kt(n, d, o), pe(e, d, null), Y(d, p), c = !0, r || (a = Rt(d, "click", Ht(
        /*generate*/
        E[16]
      )), r = !0);
    },
    p: Ot,
    i(n) {
      c || (zt(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Dt(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && Et(d), me(e), r = !1, a();
    }
  };
}
function Pn(E) {
  let d, e, p, c;
  return e = new ge({}), {
    c() {
      d = nt("a"), fe(e.$$.fragment), p = Ft(" Generating..."), K(d, "class", "button primary download-button svelte-c4460r"), K(d, "href", "");
    },
    m(r, a) {
      kt(r, d, a), pe(e, d, null), Y(d, p), c = !0;
    },
    p: Ot,
    i(r) {
      c || (zt(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Dt(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && Et(d), me(e);
    }
  };
}
function Jn(E) {
  let d, e, p, c;
  return {
    c() {
      d = nt("p"), e = Ft(`Loading data
    
        
        `), p = nt("span"), c = Ft("..."), Vt(p, "font-family", Mt);
    },
    m(r, a) {
      kt(r, d, a), Y(d, e), Y(d, p), Y(p, c);
    },
    p: Ot,
    i: Ot,
    o: Ot,
    d(r) {
      r && Et(d);
    }
  };
}
function Zn(E) {
  let d, e, p = {
    ctx: E,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Jn,
    then: zn,
    catch: Mn,
    value: 30,
    error: 34,
    blocks: [, , ,]
  };
  return Re(
    /*versions*/
    E[15],
    p
  ), {
    c() {
      d = _e(), p.block.c();
    },
    m(c, r) {
      kt(c, d, r), p.block.m(c, p.anchor = r), p.mount = () => d.parentNode, p.anchor = d, e = !0;
    },
    p(c, r) {
      E = c, Ne(p, E, r);
    },
    i(c) {
      e || (zt(p.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = p.blocks[r];
        Dt(a);
      }
      e = !1;
    },
    d(c) {
      c && Et(d), p.block.d(c), p.token = null, p = null;
    }
  };
}
function Qn(E, d, e) {
  let p, c, r, a, n, o, f, m = "Template Mod", v = "com.example", w = !1, l = !1, g = !1, s = !0, A, u = !1;
  const y = Promise.all([Se()]).then(([C]) => (e(0, f = C.find((U) => U.stable).version), { game: C }));
  function x(C) {
    if (C !== void 0)
      return xe(C, A === void 0);
  }
  async function N() {
    if (a !== void 0 || A !== void 0 && n !== void 0 || o.length > 0)
      return;
    e(9, u = !0);
    const C = await Promise.resolve().then(() => Ln), U = {
      modid: A ?? p,
      minecraftVersion: f,
      projectName: m,
      packageName: v,
      useKotlin: w,
      mojmap: l,
      dataGeneration: g && c,
      splitSources: s && r,
      uniqueModIcon: !0
    }, F = new je();
    await C.generateTemplate({
      config: U,
      writer: {
        write: async (j, S, B) => {
          F.file(j, S, {
            unixPermissions: B != null && B.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(j, S) {
          const B = document.createElement("canvas");
          return B.width = j, B.height = S, {
            getContext: (q) => B.getContext(q),
            getPng: () => Jt(B.toDataURL().split(";base64,")[1]),
            measureText(q, Z) {
              const X = q.measureText(Z);
              return {
                width: X.width,
                ascent: X.actualBoundingBoxAscent,
                descent: X.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Je.saveAs(await F.generateAsync({ type: "blob", platform: "UNIX" }), `${p}-template-${U.minecraftVersion}.zip`), e(9, u = !1);
  }
  function R() {
    e(1, m = m.trim());
  }
  function M() {
    e(2, v = on(v));
  }
  function G() {
    e(3, A = p);
  }
  function P() {
    e(3, A = void 0);
  }
  function V() {
    m = this.value, e(1, m);
  }
  function H() {
    A = this.value, e(3, A);
  }
  function rt() {
    v = this.value, e(2, v);
  }
  function k() {
    f = Oe(this), e(0, f), e(15, y);
  }
  function T() {
    w = this.checked, e(5, w);
  }
  function i() {
    l = this.checked, e(6, l);
  }
  function D() {
    g = this.checked, e(7, g);
  }
  function it() {
    s = this.checked, e(8, s);
  }
  return E.$$.update = () => {
    E.$$.dirty[0] & /*projectName*/
    2 && e(4, p = ln(m)), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, c = nn(f || "1.99")), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(10, r = rn(f || "1.99")), E.$$.dirty[0] & /*modid*/
    16 && e(14, a = x(p)), E.$$.dirty[0] & /*customModId*/
    8 && e(13, n = sn(A)), E.$$.dirty[0] & /*packageName*/
    4 && e(12, o = fn(v));
  }, [
    f,
    m,
    v,
    A,
    p,
    w,
    l,
    g,
    s,
    u,
    r,
    c,
    o,
    n,
    a,
    y,
    N,
    R,
    M,
    G,
    P,
    V,
    H,
    rt,
    k,
    T,
    i,
    D,
    it
  ];
}
class qn extends Be {
  constructor(d) {
    super(), Ie(this, d, Qn, Zn, Fe, {}, null, [-1, -1]);
  }
}
export {
  qn as default
};
