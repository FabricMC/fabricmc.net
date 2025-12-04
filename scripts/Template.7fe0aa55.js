import { S as Ie, i as Be, s as Fe, h as Re, b as _e, c as kt, u as Te, o as Wt, p as Lt, d as Et, q as Ue, e as nt, t as Ft, a as lt, f as zt, g as Y, n as Ut, k as q, r as Ve, C as Nt, l as Kt, m as Rt, D as Ne, E as ze, j as jt, B as de, A as Jt, y as Ht, v as fe, w as pe, x as me } from "./index.4deac2e0.js";
import ge from "./DownloadIcon.39c279f6.js";
import { d as De, b as Ge, h as Oe, i as We, j as Le } from "./Api.322fe952.js";
var Tt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function be(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, "default") ? E.default : E;
}
function Mt(E) {
  throw new Error('Could not dynamically require "' + E + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ve = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(E, f) {
  (function(e) {
    E.exports = e();
  })(function() {
    return function e(h, c, r) {
      function a(p, m) {
        if (!c[p]) {
          if (!h[p]) {
            var b = typeof Mt == "function" && Mt;
            if (!m && b)
              return b(p, !0);
            if (n)
              return n(p, !0);
            var y = new Error("Cannot find module '" + p + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var l = c[p] = { exports: {} };
          h[p][0].call(l.exports, function(g) {
            var s = h[p][1][g];
            return a(s || g);
          }, l, l.exports, e, h, c, r);
        }
        return c[p].exports;
      }
      for (var n = typeof Mt == "function" && Mt, o = 0; o < r.length; o++)
        a(r[o]);
      return a;
    }({ 1: [function(e, h, c) {
      var r = e("./utils"), a = e("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(o) {
        for (var p, m, b, y, l, g, s, d = [], u = 0, w = o.length, C = w, T = r.getTypeOf(o) !== "string"; u < o.length; )
          C = w - u, b = T ? (p = o[u++], m = u < w ? o[u++] : 0, u < w ? o[u++] : 0) : (p = o.charCodeAt(u++), m = u < w ? o.charCodeAt(u++) : 0, u < w ? o.charCodeAt(u++) : 0), y = p >> 2, l = (3 & p) << 4 | m >> 4, g = 1 < C ? (15 & m) << 2 | b >> 6 : 64, s = 2 < C ? 63 & b : 64, d.push(n.charAt(y) + n.charAt(l) + n.charAt(g) + n.charAt(s));
        return d.join("");
      }, c.decode = function(o) {
        var p, m, b, y, l, g, s = 0, d = 0, u = "data:";
        if (o.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, C = 3 * (o = o.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (o.charAt(o.length - 1) === n.charAt(64) && C--, o.charAt(o.length - 2) === n.charAt(64) && C--, C % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = a.uint8array ? new Uint8Array(0 | C) : new Array(0 | C); s < o.length; )
          p = n.indexOf(o.charAt(s++)) << 2 | (y = n.indexOf(o.charAt(s++))) >> 4, m = (15 & y) << 4 | (l = n.indexOf(o.charAt(s++))) >> 2, b = (3 & l) << 6 | (g = n.indexOf(o.charAt(s++))), w[d++] = p, l !== 64 && (w[d++] = m), g !== 64 && (w[d++] = b);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, h, c) {
      var r = e("./external"), a = e("./stream/DataWorker"), n = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
      function p(m, b, y, l, g) {
        this.compressedSize = m, this.uncompressedSize = b, this.crc32 = y, this.compression = l, this.compressedContent = g;
      }
      p.prototype = { getContentWorker: function() {
        var m = new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), b = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== b.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, p.createWorkerFrom = function(m, b, y) {
        return m.pipe(new n()).pipe(new o("uncompressedSize")).pipe(b.compressWorker(y)).pipe(new o("compressedSize")).withStreamInfo("compression", b);
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
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(p, m, b, y) {
          var l = a, g = y + b;
          p ^= -1;
          for (var s = y; s < g; s++)
            p = p >>> 8 ^ l[255 & (p ^ m[s])];
          return -1 ^ p;
        }(0 | o, n, n.length, 0) : function(p, m, b, y) {
          var l = a, g = y + b;
          p ^= -1;
          for (var s = y; s < g; s++)
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
      function m(b, y) {
        o.call(this, "FlateWorker/" + b), this._pako = null, this._pakoAction = b, this._pakoOptions = y, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(m, o), m.prototype.processChunk = function(b) {
        this.meta = b.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(p, b.data), !1);
      }, m.prototype.flush = function() {
        o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        o.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new a[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var b = this;
        this._pako.onData = function(y) {
          b.push({ data: y, meta: b.meta });
        };
      }, c.compressWorker = function(b) {
        return new m("Deflate", b);
      }, c.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, h, c) {
      function r(l, g) {
        var s, d = "";
        for (s = 0; s < g; s++)
          d += String.fromCharCode(255 & l), l >>>= 8;
        return d;
      }
      function a(l, g, s, d, u, w) {
        var C, T, R = l.file, O = l.compression, D = w !== p.utf8encode, j = n.transformTo("string", w(R.name)), z = n.transformTo("string", p.utf8encode(R.name)), H = R.comment, rt = n.transformTo("string", w(H)), k = n.transformTo("string", p.utf8encode(H)), V = z.length !== R.name.length, i = k.length !== H.length, L = "", it = "", S = "", N = R.dir, F = R.date, M = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !s || (M.crc32 = l.crc32, M.compressedSize = l.compressedSize, M.uncompressedSize = l.uncompressedSize);
        var x = 0;
        g && (x |= 8), D || !V && !i || (x |= 2048);
        var I = 0, K = 0;
        N && (I |= 16), u === "UNIX" ? (K = 798, I |= function(X, ct) {
          var gt = X;
          return X || (gt = ct ? 16893 : 33204), (65535 & gt) << 16;
        }(R.unixPermissions, N)) : (K = 20, I |= function(X) {
          return 63 & (X || 0);
        }(R.dosPermissions)), C = F.getUTCHours(), C <<= 6, C |= F.getUTCMinutes(), C <<= 5, C |= F.getUTCSeconds() / 2, T = F.getUTCFullYear() - 1980, T <<= 4, T |= F.getUTCMonth() + 1, T <<= 5, T |= F.getUTCDate(), V && (it = r(1, 1) + r(m(j), 4) + z, L += "up" + r(it.length, 2) + it), i && (S = r(1, 1) + r(m(rt), 4) + k, L += "uc" + r(S.length, 2) + S);
        var J = "";
        return J += `
\0`, J += r(x, 2), J += O.magic, J += r(C, 2), J += r(T, 2), J += r(M.crc32, 4), J += r(M.compressedSize, 4), J += r(M.uncompressedSize, 4), J += r(j.length, 2), J += r(L.length, 2), { fileRecord: b.LOCAL_FILE_HEADER + J + j + L, dirRecord: b.CENTRAL_FILE_HEADER + r(K, 2) + J + r(rt.length, 2) + "\0\0\0\0" + r(I, 4) + r(d, 4) + j + L + rt };
      }
      var n = e("../utils"), o = e("../stream/GenericWorker"), p = e("../utf8"), m = e("../crc32"), b = e("../signature");
      function y(l, g, s, d) {
        o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = s, this.encodeFileName = d, this.streamFiles = l, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(y, o), y.prototype.push = function(l) {
        var g = l.meta.percent || 0, s = this.entriesCount, d = this._sources.length;
        this.accumulate ? this.contentBuffer.push(l) : (this.bytesWritten += l.data.length, o.prototype.push.call(this, { data: l.data, meta: { currentFile: this.currentFile, percent: s ? (g + 100 * (s - d - 1)) / s : 100 } }));
      }, y.prototype.openedSource = function(l) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = l.file.name;
        var g = this.streamFiles && !l.file.dir;
        if (g) {
          var s = a(l, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: s.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, y.prototype.closedSource = function(l) {
        this.accumulate = !1;
        var g = this.streamFiles && !l.file.dir, s = a(l, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(s.dirRecord), g)
          this.push({ data: function(d) {
            return b.DATA_DESCRIPTOR + r(d.crc32, 4) + r(d.compressedSize, 4) + r(d.uncompressedSize, 4);
          }(l), meta: { percent: 100 } });
        else
          for (this.push({ data: s.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, y.prototype.flush = function() {
        for (var l = this.bytesWritten, g = 0; g < this.dirRecords.length; g++)
          this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var s = this.bytesWritten - l, d = function(u, w, C, T, R) {
          var O = n.transformTo("string", R(T));
          return b.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(u, 2) + r(u, 2) + r(w, 4) + r(C, 4) + r(O.length, 2) + O;
        }(this.dirRecords.length, s, l, this.zipComment, this.encodeFileName);
        this.push({ data: d, meta: { percent: 100 } });
      }, y.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, y.prototype.registerPrevious = function(l) {
        this._sources.push(l);
        var g = this;
        return l.on("data", function(s) {
          g.processChunk(s);
        }), l.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), l.on("error", function(s) {
          g.error(s);
        }), this;
      }, y.prototype.resume = function() {
        return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, y.prototype.error = function(l) {
        var g = this._sources;
        if (!o.prototype.error.call(this, l))
          return !1;
        for (var s = 0; s < g.length; s++)
          try {
            g[s].error(l);
          } catch {
          }
        return !0;
      }, y.prototype.lock = function() {
        o.prototype.lock.call(this);
        for (var l = this._sources, g = 0; g < l.length; g++)
          l[g].lock();
      }, h.exports = y;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, h, c) {
      var r = e("../compressions"), a = e("./ZipFileWorker");
      c.generateWorker = function(n, o, p) {
        var m = new a(o.streamFiles, p, o.platform, o.encodeFileName), b = 0;
        try {
          n.forEach(function(y, l) {
            b++;
            var g = function(w, C) {
              var T = w || C, R = r[T];
              if (!R)
                throw new Error(T + " is not a valid compression method !");
              return R;
            }(l.options.compression, o.compression), s = l.options.compressionOptions || o.compressionOptions || {}, d = l.dir, u = l.date;
            l._compressWorker(g, s).withStreamInfo("file", { name: y, dir: d, date: u, comment: l.comment || "", unixPermissions: l.unixPermissions, dosPermissions: l.dosPermissions }).pipe(m);
          }), m.entriesCount = b;
        } catch (y) {
          m.error(y);
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
      function b(y) {
        return new a.Promise(function(l, g) {
          var s = y.decompressed.getContentWorker().pipe(new p());
          s.on("error", function(d) {
            g(d);
          }).on("end", function() {
            s.streamInfo.crc32 !== y.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : l();
          }).resume();
        });
      }
      h.exports = function(y, l) {
        var g = this;
        return l = r.extend(l || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), m.isNode && m.isStream(y) ? a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", y, !0, l.optimizedBinaryString, l.base64).then(function(s) {
          var d = new o(l);
          return d.load(s), d;
        }).then(function(s) {
          var d = [a.Promise.resolve(s)], u = s.files;
          if (l.checkCRC32)
            for (var w = 0; w < u.length; w++)
              d.push(b(u[w]));
          return a.Promise.all(d);
        }).then(function(s) {
          for (var d = s.shift(), u = d.files, w = 0; w < u.length; w++) {
            var C = u[w], T = C.fileNameStr, R = r.resolve(C.fileNameStr);
            g.file(R, C.decompressed, { binary: !0, optimizedBinaryString: !0, date: C.date, dir: C.dir, comment: C.fileCommentStr.length ? C.fileCommentStr : null, unixPermissions: C.unixPermissions, dosPermissions: C.dosPermissions, createFolders: l.createFolders }), C.dir || (g.file(R).unsafeOriginalName = T);
          }
          return d.zipComment.length && (g.comment = d.zipComment), g;
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
        n.on("data", function(b, y) {
          m.push(b) || m._helper.pause(), p && p(y);
        }).on("error", function(b) {
          m.emit("error", b);
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
      function r(R, O, D) {
        var j, z = n.getTypeOf(O), H = n.extend(D || {}, m);
        H.date = H.date || /* @__PURE__ */ new Date(), H.compression !== null && (H.compression = H.compression.toUpperCase()), typeof H.unixPermissions == "string" && (H.unixPermissions = parseInt(H.unixPermissions, 8)), H.unixPermissions && 16384 & H.unixPermissions && (H.dir = !0), H.dosPermissions && 16 & H.dosPermissions && (H.dir = !0), H.dir && (R = u(R)), H.createFolders && (j = d(R)) && w.call(this, j, !0);
        var rt = z === "string" && H.binary === !1 && H.base64 === !1;
        D && D.binary !== void 0 || (H.binary = !rt), (O instanceof b && O.uncompressedSize === 0 || H.dir || !O || O.length === 0) && (H.base64 = !1, H.binary = !0, O = "", H.compression = "STORE", z = "string");
        var k = null;
        k = O instanceof b || O instanceof o ? O : g.isNode && g.isStream(O) ? new s(R, O) : n.prepareContent(R, O, H.binary, H.optimizedBinaryString, H.base64);
        var V = new y(R, k, H);
        this.files[R] = V;
      }
      var a = e("./utf8"), n = e("./utils"), o = e("./stream/GenericWorker"), p = e("./stream/StreamHelper"), m = e("./defaults"), b = e("./compressedObject"), y = e("./zipObject"), l = e("./generate"), g = e("./nodejsUtils"), s = e("./nodejs/NodejsStreamInputAdapter"), d = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var O = R.lastIndexOf("/");
        return 0 < O ? R.substring(0, O) : "";
      }, u = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, w = function(R, O) {
        return O = O !== void 0 ? O : m.createFolders, R = u(R), this.files[R] || r.call(this, R, null, { dir: !0, createFolders: O }), this.files[R];
      };
      function C(R) {
        return Object.prototype.toString.call(R) === "[object RegExp]";
      }
      var T = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(R) {
        var O, D, j;
        for (O in this.files)
          j = this.files[O], (D = O.slice(this.root.length, O.length)) && O.slice(0, this.root.length) === this.root && R(D, j);
      }, filter: function(R) {
        var O = [];
        return this.forEach(function(D, j) {
          R(D, j) && O.push(j);
        }), O;
      }, file: function(R, O, D) {
        if (arguments.length !== 1)
          return R = this.root + R, r.call(this, R, O, D), this;
        if (C(R)) {
          var j = R;
          return this.filter(function(H, rt) {
            return !rt.dir && j.test(H);
          });
        }
        var z = this.files[this.root + R];
        return z && !z.dir ? z : null;
      }, folder: function(R) {
        if (!R)
          return this;
        if (C(R))
          return this.filter(function(z, H) {
            return H.dir && R.test(z);
          });
        var O = this.root + R, D = w.call(this, O), j = this.clone();
        return j.root = D.name, j;
      }, remove: function(R) {
        R = this.root + R;
        var O = this.files[R];
        if (O || (R.slice(-1) !== "/" && (R += "/"), O = this.files[R]), O && !O.dir)
          delete this.files[R];
        else
          for (var D = this.filter(function(z, H) {
            return H.name.slice(0, R.length) === R;
          }), j = 0; j < D.length; j++)
            delete this.files[D[j].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(R) {
        var O, D = {};
        try {
          if ((D = n.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: a.utf8encode })).type = D.type.toLowerCase(), D.compression = D.compression.toUpperCase(), D.type === "binarystring" && (D.type = "string"), !D.type)
            throw new Error("No output type specified.");
          n.checkSupport(D.type), D.platform !== "darwin" && D.platform !== "freebsd" && D.platform !== "linux" && D.platform !== "sunos" || (D.platform = "UNIX"), D.platform === "win32" && (D.platform = "DOS");
          var j = D.comment || this.comment || "";
          O = l.generateWorker(this, D, j);
        } catch (z) {
          (O = new o("error")).error(z);
        }
        return new p(O, D.type || "string", D.mimeType);
      }, generateAsync: function(R, O) {
        return this.generateInternalStream(R).accumulate(O);
      }, generateNodeStream: function(R, O) {
        return (R = R || {}).type || (R.type = "nodebuffer"), this.generateInternalStream(R).toNodejsStream(O);
      } };
      h.exports = T;
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
        for (var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), b = n.charCodeAt(3), y = this.length - 4; 0 <= y; --y)
          if (this.data[y] === o && this.data[y + 1] === p && this.data[y + 2] === m && this.data[y + 3] === b)
            return y - this.zero;
        return -1;
      }, a.prototype.readAndCheckSignature = function(n) {
        var o = n.charCodeAt(0), p = n.charCodeAt(1), m = n.charCodeAt(2), b = n.charCodeAt(3), y = this.readData(4);
        return o === y[0] && p === y[1] && m === y[2] && b === y[3];
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
      h.exports = function(b) {
        var y = r.getTypeOf(b);
        return r.checkSupport(y), y !== "string" || a.uint8array ? y === "nodebuffer" ? new p(b) : a.uint8array ? new m(r.transformTo("uint8array", b)) : new n(r.transformTo("array", b)) : new o(b);
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
      var r = e("../utils"), a = e("./ConvertWorker"), n = e("./GenericWorker"), o = e("../base64"), p = e("../support"), m = e("../external"), b = null;
      if (p.nodestream)
        try {
          b = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function y(g, s) {
        return new m.Promise(function(d, u) {
          var w = [], C = g._internalType, T = g._outputType, R = g._mimeType;
          g.on("data", function(O, D) {
            w.push(O), s && s(D);
          }).on("error", function(O) {
            w = [], u(O);
          }).on("end", function() {
            try {
              var O = function(D, j, z) {
                switch (D) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", j), z);
                  case "base64":
                    return o.encode(j);
                  default:
                    return r.transformTo(D, j);
                }
              }(T, function(D, j) {
                var z, H = 0, rt = null, k = 0;
                for (z = 0; z < j.length; z++)
                  k += j[z].length;
                switch (D) {
                  case "string":
                    return j.join("");
                  case "array":
                    return Array.prototype.concat.apply([], j);
                  case "uint8array":
                    for (rt = new Uint8Array(k), z = 0; z < j.length; z++)
                      rt.set(j[z], H), H += j[z].length;
                    return rt;
                  case "nodebuffer":
                    return Buffer.concat(j);
                  default:
                    throw new Error("concat : unsupported type '" + D + "'");
                }
              }(C, w), R);
              d(O);
            } catch (D) {
              u(D);
            }
            w = [];
          }).resume();
        });
      }
      function l(g, s, d) {
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
          this._internalType = u, this._outputType = s, this._mimeType = d, r.checkSupport(u), this._worker = g.pipe(new a(u)), g.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      l.prototype = { accumulate: function(g) {
        return y(this, g);
      }, on: function(g, s) {
        var d = this;
        return g === "data" ? this._worker.on(g, function(u) {
          s.call(d, u.data, u.meta);
        }) : this._worker.on(g, function() {
          r.delay(s, arguments, d);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(g) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new b(this, { objectMode: this._outputType !== "nodebuffer" }, g);
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
      function b() {
        o.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function y() {
        o.call(this, "utf-8 encode");
      }
      c.utf8encode = function(l) {
        return a.nodebuffer ? n.newBufferFrom(l, "utf-8") : function(g) {
          var s, d, u, w, C, T = g.length, R = 0;
          for (w = 0; w < T; w++)
            (64512 & (d = g.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = g.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), R += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (s = a.uint8array ? new Uint8Array(R) : new Array(R), w = C = 0; C < R; w++)
            (64512 & (d = g.charCodeAt(w))) == 55296 && w + 1 < T && (64512 & (u = g.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), d < 128 ? s[C++] = d : (d < 2048 ? s[C++] = 192 | d >>> 6 : (d < 65536 ? s[C++] = 224 | d >>> 12 : (s[C++] = 240 | d >>> 18, s[C++] = 128 | d >>> 12 & 63), s[C++] = 128 | d >>> 6 & 63), s[C++] = 128 | 63 & d);
          return s;
        }(l);
      }, c.utf8decode = function(l) {
        return a.nodebuffer ? r.transformTo("nodebuffer", l).toString("utf-8") : function(g) {
          var s, d, u, w, C = g.length, T = new Array(2 * C);
          for (s = d = 0; s < C; )
            if ((u = g[s++]) < 128)
              T[d++] = u;
            else if (4 < (w = p[u]))
              T[d++] = 65533, s += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && s < C; )
                u = u << 6 | 63 & g[s++], w--;
              1 < w ? T[d++] = 65533 : u < 65536 ? T[d++] = u : (u -= 65536, T[d++] = 55296 | u >> 10 & 1023, T[d++] = 56320 | 1023 & u);
            }
          return T.length !== d && (T.subarray ? T = T.subarray(0, d) : T.length = d), r.applyFromCharCode(T);
        }(l = r.transformTo(a.uint8array ? "uint8array" : "array", l));
      }, r.inherits(b, o), b.prototype.processChunk = function(l) {
        var g = r.transformTo(a.uint8array ? "uint8array" : "array", l.data);
        if (this.leftOver && this.leftOver.length) {
          if (a.uint8array) {
            var s = g;
            (g = new Uint8Array(s.length + this.leftOver.length)).set(this.leftOver, 0), g.set(s, this.leftOver.length);
          } else
            g = this.leftOver.concat(g);
          this.leftOver = null;
        }
        var d = function(w, C) {
          var T;
          for ((C = C || w.length) > w.length && (C = w.length), T = C - 1; 0 <= T && (192 & w[T]) == 128; )
            T--;
          return T < 0 || T === 0 ? C : T + p[w[T]] > C ? T : C;
        }(g), u = g;
        d !== g.length && (a.uint8array ? (u = g.subarray(0, d), this.leftOver = g.subarray(d, g.length)) : (u = g.slice(0, d), this.leftOver = g.slice(d, g.length))), this.push({ data: c.utf8decode(u), meta: l.meta });
      }, b.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = b, r.inherits(y, o), y.prototype.processChunk = function(l) {
        this.push({ data: c.utf8encode(l.data), meta: l.meta });
      }, c.Utf8EncodeWorker = y;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, h, c) {
      var r = e("./support"), a = e("./base64"), n = e("./nodejsUtils"), o = e("./external");
      function p(s) {
        return s;
      }
      function m(s, d) {
        for (var u = 0; u < s.length; ++u)
          d[u] = 255 & s.charCodeAt(u);
        return d;
      }
      e("setimmediate"), c.newBlob = function(s, d) {
        c.checkSupport("blob");
        try {
          return new Blob([s], { type: d });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(s), u.getBlob(d);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var b = { stringifyByChunk: function(s, d, u) {
        var w = [], C = 0, T = s.length;
        if (T <= u)
          return String.fromCharCode.apply(null, s);
        for (; C < T; )
          d === "array" || d === "nodebuffer" ? w.push(String.fromCharCode.apply(null, s.slice(C, Math.min(C + u, T)))) : w.push(String.fromCharCode.apply(null, s.subarray(C, Math.min(C + u, T)))), C += u;
        return w.join("");
      }, stringifyByChar: function(s) {
        for (var d = "", u = 0; u < s.length; u++)
          d += String.fromCharCode(s[u]);
        return d;
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
      function y(s) {
        var d = 65536, u = c.getTypeOf(s), w = !0;
        if (u === "uint8array" ? w = b.applyCanBeUsed.uint8array : u === "nodebuffer" && (w = b.applyCanBeUsed.nodebuffer), w)
          for (; 1 < d; )
            try {
              return b.stringifyByChunk(s, u, d);
            } catch {
              d = Math.floor(d / 2);
            }
        return b.stringifyByChar(s);
      }
      function l(s, d) {
        for (var u = 0; u < s.length; u++)
          d[u] = s[u];
        return d;
      }
      c.applyFromCharCode = y;
      var g = {};
      g.string = { string: p, array: function(s) {
        return m(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.string.uint8array(s).buffer;
      }, uint8array: function(s) {
        return m(s, new Uint8Array(s.length));
      }, nodebuffer: function(s) {
        return m(s, n.allocBuffer(s.length));
      } }, g.array = { string: y, array: p, arraybuffer: function(s) {
        return new Uint8Array(s).buffer;
      }, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.arraybuffer = { string: function(s) {
        return y(new Uint8Array(s));
      }, array: function(s) {
        return l(new Uint8Array(s), new Array(s.byteLength));
      }, arraybuffer: p, uint8array: function(s) {
        return new Uint8Array(s);
      }, nodebuffer: function(s) {
        return n.newBufferFrom(new Uint8Array(s));
      } }, g.uint8array = { string: y, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return s.buffer;
      }, uint8array: p, nodebuffer: function(s) {
        return n.newBufferFrom(s);
      } }, g.nodebuffer = { string: y, array: function(s) {
        return l(s, new Array(s.length));
      }, arraybuffer: function(s) {
        return g.nodebuffer.uint8array(s).buffer;
      }, uint8array: function(s) {
        return l(s, new Uint8Array(s.length));
      }, nodebuffer: p }, c.transformTo = function(s, d) {
        if (d = d || "", !s)
          return d;
        c.checkSupport(s);
        var u = c.getTypeOf(d);
        return g[u][s](d);
      }, c.resolve = function(s) {
        for (var d = s.split("/"), u = [], w = 0; w < d.length; w++) {
          var C = d[w];
          C === "." || C === "" && w !== 0 && w !== d.length - 1 || (C === ".." ? u.pop() : u.push(C));
        }
        return u.join("/");
      }, c.getTypeOf = function(s) {
        return typeof s == "string" ? "string" : Object.prototype.toString.call(s) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(s) ? "nodebuffer" : r.uint8array && s instanceof Uint8Array ? "uint8array" : r.arraybuffer && s instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(s) {
        if (!r[s.toLowerCase()])
          throw new Error(s + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(s) {
        var d, u, w = "";
        for (u = 0; u < (s || "").length; u++)
          w += "\\x" + ((d = s.charCodeAt(u)) < 16 ? "0" : "") + d.toString(16).toUpperCase();
        return w;
      }, c.delay = function(s, d, u) {
        setImmediate(function() {
          s.apply(u || null, d || []);
        });
      }, c.inherits = function(s, d) {
        function u() {
        }
        u.prototype = d.prototype, s.prototype = new u();
      }, c.extend = function() {
        var s, d, u = {};
        for (s = 0; s < arguments.length; s++)
          for (d in arguments[s])
            Object.prototype.hasOwnProperty.call(arguments[s], d) && u[d] === void 0 && (u[d] = arguments[s][d]);
        return u;
      }, c.prepareContent = function(s, d, u, w, C) {
        return o.Promise.resolve(d).then(function(T) {
          return r.blob && (T instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(T)) !== -1) && typeof FileReader < "u" ? new o.Promise(function(R, O) {
            var D = new FileReader();
            D.onload = function(j) {
              R(j.target.result);
            }, D.onerror = function(j) {
              O(j.target.error);
            }, D.readAsArrayBuffer(T);
          }) : T;
        }).then(function(T) {
          var R = c.getTypeOf(T);
          return R ? (R === "arraybuffer" ? T = c.transformTo("uint8array", T) : R === "string" && (C ? T = a.decode(T) : u && w !== !0 && (T = function(O) {
            return m(O, r.uint8array ? new Uint8Array(O.length) : new Array(O.length));
          }(T))), T) : o.Promise.reject(new Error("Can't read the data of '" + s + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./signature"), o = e("./zipEntry"), p = e("./support");
      function m(b) {
        this.files = [], this.loadOptions = b;
      }
      m.prototype = { checkSignature: function(b) {
        if (!this.reader.readAndCheckSignature(b)) {
          this.reader.index -= 4;
          var y = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + a.pretty(y) + ", expected " + a.pretty(b) + ")");
        }
      }, isSignature: function(b, y) {
        var l = this.reader.index;
        this.reader.setIndex(b);
        var g = this.reader.readString(4) === y;
        return this.reader.setIndex(l), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var b = this.reader.readData(this.zipCommentLength), y = p.uint8array ? "uint8array" : "array", l = a.transformTo(y, b);
        this.zipComment = this.loadOptions.decodeFileName(l);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var b, y, l, g = this.zip64EndOfCentralSize - 44; 0 < g; )
          b = this.reader.readInt(2), y = this.reader.readInt(4), l = this.reader.readData(y), this.zip64ExtensibleData[b] = { id: b, length: y, value: l };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var b, y;
        for (b = 0; b < this.files.length; b++)
          y = this.files[b], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes();
      }, readCentralDir: function() {
        var b;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (b = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(b);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var b = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (b < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(b);
        var y = b;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === a.MAX_VALUE_16BITS || this.diskWithCentralDirStart === a.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === a.MAX_VALUE_16BITS || this.centralDirRecords === a.MAX_VALUE_16BITS || this.centralDirSize === a.MAX_VALUE_32BITS || this.centralDirOffset === a.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (b = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(b), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var l = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (l += 20, l += 12 + this.zip64EndOfCentralSize);
        var g = y - l;
        if (0 < g)
          this.isSignature(y, n.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(b) {
        this.reader = r(b);
      }, load: function(b) {
        this.prepareReader(b), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, h.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, h, c) {
      var r = e("./reader/readerFor"), a = e("./utils"), n = e("./compressedObject"), o = e("./crc32"), p = e("./utf8"), m = e("./compressions"), b = e("./support");
      function y(l, g) {
        this.options = l, this.loadOptions = g;
      }
      y.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(l) {
        var g, s;
        if (l.skip(22), this.fileNameLength = l.readInt(2), s = l.readInt(2), this.fileName = l.readData(this.fileNameLength), l.skip(s), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((g = function(d) {
          for (var u in m)
            if (Object.prototype.hasOwnProperty.call(m, u) && m[u].magic === d)
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
        var g, s, d, u = l.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); l.index + 4 < u; )
          g = l.readInt(2), s = l.readInt(2), d = l.readData(s), this.extraFields[g] = { id: g, length: s, value: d };
        l.setIndex(u);
      }, handleUTF8: function() {
        var l = b.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = p.utf8decode(this.fileName), this.fileCommentStr = p.utf8decode(this.fileComment);
        else {
          var g = this.findExtraFieldUnicodePath();
          if (g !== null)
            this.fileNameStr = g;
          else {
            var s = a.transformTo(l, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(s);
          }
          var d = this.findExtraFieldUnicodeComment();
          if (d !== null)
            this.fileCommentStr = d;
          else {
            var u = a.transformTo(l, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var l = this.extraFields[28789];
        if (l) {
          var g = r(l.value);
          return g.readInt(1) !== 1 || o(this.fileName) !== g.readInt(4) ? null : p.utf8decode(g.readData(l.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var l = this.extraFields[25461];
        if (l) {
          var g = r(l.value);
          return g.readInt(1) !== 1 || o(this.fileComment) !== g.readInt(4) ? null : p.utf8decode(g.readData(l.length - 5));
        }
        return null;
      } }, h.exports = y;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, h, c) {
      function r(g, s, d) {
        this.name = g, this.dir = d.dir, this.date = d.date, this.comment = d.comment, this.unixPermissions = d.unixPermissions, this.dosPermissions = d.dosPermissions, this._data = s, this._dataBinary = d.binary, this.options = { compression: d.compression, compressionOptions: d.compressionOptions };
      }
      var a = e("./stream/StreamHelper"), n = e("./stream/DataWorker"), o = e("./utf8"), p = e("./compressedObject"), m = e("./stream/GenericWorker");
      r.prototype = { internalStream: function(g) {
        var s = null, d = "string";
        try {
          if (!g)
            throw new Error("No output type specified.");
          var u = (d = g.toLowerCase()) === "string" || d === "text";
          d !== "binarystring" && d !== "text" || (d = "string"), s = this._decompressWorker();
          var w = !this._dataBinary;
          w && !u && (s = s.pipe(new o.Utf8EncodeWorker())), !w && u && (s = s.pipe(new o.Utf8DecodeWorker()));
        } catch (C) {
          (s = new m("error")).error(C);
        }
        return new a(s, d, "");
      }, async: function(g, s) {
        return this.internalStream(g).accumulate(s);
      }, nodeStream: function(g, s) {
        return this.internalStream(g || "nodebuffer").toNodejsStream(s);
      }, _compressWorker: function(g, s) {
        if (this._data instanceof p && this._data.compression.magic === g.magic)
          return this._data.getCompressedWorker();
        var d = this._decompressWorker();
        return this._dataBinary || (d = d.pipe(new o.Utf8EncodeWorker())), p.createWorkerFrom(d, g, s);
      }, _decompressWorker: function() {
        return this._data instanceof p ? this._data.getContentWorker() : this._data instanceof m ? this._data : new n(this._data);
      } };
      for (var b = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, l = 0; l < b.length; l++)
        r.prototype[b[l]] = y;
      h.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, h, c) {
      (function(r) {
        var a, n, o = r.MutationObserver || r.WebKitMutationObserver;
        if (o) {
          var p = 0, m = new o(g), b = r.document.createTextNode("");
          m.observe(b, { characterData: !0 }), a = function() {
            b.data = p = ++p % 2;
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
          var y = new r.MessageChannel();
          y.port1.onmessage = g, a = function() {
            y.port2.postMessage(0);
          };
        }
        var l = [];
        function g() {
          var s, d;
          n = !0;
          for (var u = l.length; u; ) {
            for (d = l, l = [], s = -1; ++s < u; )
              d[s]();
            u = l.length;
          }
          n = !1;
        }
        h.exports = function(s) {
          l.push(s) !== 1 || n || a();
        };
      }).call(this, typeof Tt < "u" ? Tt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, h, c) {
      var r = e("immediate");
      function a() {
      }
      var n = {}, o = ["REJECTED"], p = ["FULFILLED"], m = ["PENDING"];
      function b(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, u !== a && s(this, u);
      }
      function y(u, w, C) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof C == "function" && (this.onRejected = C, this.callRejected = this.otherCallRejected);
      }
      function l(u, w, C) {
        r(function() {
          var T;
          try {
            T = w(C);
          } catch (R) {
            return n.reject(u, R);
          }
          T === u ? n.reject(u, new TypeError("Cannot resolve promise with itself")) : n.resolve(u, T);
        });
      }
      function g(u) {
        var w = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof w == "function")
          return function() {
            w.apply(u, arguments);
          };
      }
      function s(u, w) {
        var C = !1;
        function T(D) {
          C || (C = !0, n.reject(u, D));
        }
        function R(D) {
          C || (C = !0, n.resolve(u, D));
        }
        var O = d(function() {
          w(R, T);
        });
        O.status === "error" && T(O.value);
      }
      function d(u, w) {
        var C = {};
        try {
          C.value = u(w), C.status = "success";
        } catch (T) {
          C.status = "error", C.value = T;
        }
        return C;
      }
      (h.exports = b).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var w = this.constructor;
        return this.then(function(C) {
          return w.resolve(u()).then(function() {
            return C;
          });
        }, function(C) {
          return w.resolve(u()).then(function() {
            throw C;
          });
        });
      }, b.prototype.catch = function(u) {
        return this.then(null, u);
      }, b.prototype.then = function(u, w) {
        if (typeof u != "function" && this.state === p || typeof w != "function" && this.state === o)
          return this;
        var C = new this.constructor(a);
        return this.state !== m ? l(C, this.state === p ? u : w, this.outcome) : this.queue.push(new y(C, u, w)), C;
      }, y.prototype.callFulfilled = function(u) {
        n.resolve(this.promise, u);
      }, y.prototype.otherCallFulfilled = function(u) {
        l(this.promise, this.onFulfilled, u);
      }, y.prototype.callRejected = function(u) {
        n.reject(this.promise, u);
      }, y.prototype.otherCallRejected = function(u) {
        l(this.promise, this.onRejected, u);
      }, n.resolve = function(u, w) {
        var C = d(g, w);
        if (C.status === "error")
          return n.reject(u, C.value);
        var T = C.value;
        if (T)
          s(u, T);
        else {
          u.state = p, u.outcome = w;
          for (var R = -1, O = u.queue.length; ++R < O; )
            u.queue[R].callFulfilled(w);
        }
        return u;
      }, n.reject = function(u, w) {
        u.state = o, u.outcome = w;
        for (var C = -1, T = u.queue.length; ++C < T; )
          u.queue[C].callRejected(w);
        return u;
      }, b.resolve = function(u) {
        return u instanceof this ? u : n.resolve(new this(a), u);
      }, b.reject = function(u) {
        var w = new this(a);
        return n.reject(w, u);
      }, b.all = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var R = new Array(C), O = 0, D = -1, j = new this(a); ++D < C; )
          z(u[D], D);
        return j;
        function z(H, rt) {
          w.resolve(H).then(function(k) {
            R[rt] = k, ++O !== C || T || (T = !0, n.resolve(j, R));
          }, function(k) {
            T || (T = !0, n.reject(j, k));
          });
        }
      }, b.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var C = u.length, T = !1;
        if (!C)
          return this.resolve([]);
        for (var R = -1, O = new this(a); ++R < C; )
          D = u[R], w.resolve(D).then(function(j) {
            T || (T = !0, n.resolve(O, j));
          }, function(j) {
            T || (T = !0, n.reject(O, j));
          });
        var D;
        return O;
      };
    }, { immediate: 36 }], 38: [function(e, h, c) {
      var r = {};
      (0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), h.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, h, c) {
      var r = e("./zlib/deflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/messages"), p = e("./zlib/zstream"), m = Object.prototype.toString, b = 0, y = -1, l = 0, g = 8;
      function s(u) {
        if (!(this instanceof s))
          return new s(u);
        this.options = a.assign({ level: y, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: l, to: "" }, u || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new p(), this.strm.avail_out = 0;
        var C = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (C !== b)
          throw new Error(o[C]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var T;
          if (T = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : m.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (C = r.deflateSetDictionary(this.strm, T)) !== b)
            throw new Error(o[C]);
          this._dict_set = !0;
        }
      }
      function d(u, w) {
        var C = new s(w);
        if (C.push(u, !0), C.err)
          throw C.msg || o[C.err];
        return C.result;
      }
      s.prototype.push = function(u, w) {
        var C, T, R = this.strm, O = this.options.chunkSize;
        if (this.ended)
          return !1;
        T = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? R.input = n.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? R.input = new Uint8Array(u) : R.input = u, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new a.Buf8(O), R.next_out = 0, R.avail_out = O), (C = r.deflate(R, T)) !== 1 && C !== b)
            return this.onEnd(C), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || T !== 4 && T !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(a.shrinkBuf(R.output, R.next_out))) : this.onData(a.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && C !== 1);
        return T === 4 ? (C = r.deflateEnd(this.strm), this.onEnd(C), this.ended = !0, C === b) : T !== 2 || (this.onEnd(b), !(R.avail_out = 0));
      }, s.prototype.onData = function(u) {
        this.chunks.push(u);
      }, s.prototype.onEnd = function(u) {
        u === b && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = s, c.deflate = d, c.deflateRaw = function(u, w) {
        return (w = w || {}).raw = !0, d(u, w);
      }, c.gzip = function(u, w) {
        return (w = w || {}).gzip = !0, d(u, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, h, c) {
      var r = e("./zlib/inflate"), a = e("./utils/common"), n = e("./utils/strings"), o = e("./zlib/constants"), p = e("./zlib/messages"), m = e("./zlib/zstream"), b = e("./zlib/gzheader"), y = Object.prototype.toString;
      function l(s) {
        if (!(this instanceof l))
          return new l(s);
        this.options = a.assign({ chunkSize: 16384, windowBits: 0, to: "" }, s || {});
        var d = this.options;
        d.raw && 0 <= d.windowBits && d.windowBits < 16 && (d.windowBits = -d.windowBits, d.windowBits === 0 && (d.windowBits = -15)), !(0 <= d.windowBits && d.windowBits < 16) || s && s.windowBits || (d.windowBits += 32), 15 < d.windowBits && d.windowBits < 48 && !(15 & d.windowBits) && (d.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var u = r.inflateInit2(this.strm, d.windowBits);
        if (u !== o.Z_OK)
          throw new Error(p[u]);
        this.header = new b(), r.inflateGetHeader(this.strm, this.header);
      }
      function g(s, d) {
        var u = new l(d);
        if (u.push(s, !0), u.err)
          throw u.msg || p[u.err];
        return u.result;
      }
      l.prototype.push = function(s, d) {
        var u, w, C, T, R, O, D = this.strm, j = this.options.chunkSize, z = this.options.dictionary, H = !1;
        if (this.ended)
          return !1;
        w = d === ~~d ? d : d === !0 ? o.Z_FINISH : o.Z_NO_FLUSH, typeof s == "string" ? D.input = n.binstring2buf(s) : y.call(s) === "[object ArrayBuffer]" ? D.input = new Uint8Array(s) : D.input = s, D.next_in = 0, D.avail_in = D.input.length;
        do {
          if (D.avail_out === 0 && (D.output = new a.Buf8(j), D.next_out = 0, D.avail_out = j), (u = r.inflate(D, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && z && (O = typeof z == "string" ? n.string2buf(z) : y.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, u = r.inflateSetDictionary(this.strm, O)), u === o.Z_BUF_ERROR && H === !0 && (u = o.Z_OK, H = !1), u !== o.Z_STREAM_END && u !== o.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          D.next_out && (D.avail_out !== 0 && u !== o.Z_STREAM_END && (D.avail_in !== 0 || w !== o.Z_FINISH && w !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (C = n.utf8border(D.output, D.next_out), T = D.next_out - C, R = n.buf2string(D.output, C), D.next_out = T, D.avail_out = j - T, T && a.arraySet(D.output, D.output, C, T, 0), this.onData(R)) : this.onData(a.shrinkBuf(D.output, D.next_out)))), D.avail_in === 0 && D.avail_out === 0 && (H = !0);
        } while ((0 < D.avail_in || D.avail_out === 0) && u !== o.Z_STREAM_END);
        return u === o.Z_STREAM_END && (w = o.Z_FINISH), w === o.Z_FINISH ? (u = r.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === o.Z_OK) : w !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(D.avail_out = 0));
      }, l.prototype.onData = function(s) {
        this.chunks.push(s);
      }, l.prototype.onEnd = function(s) {
        s === o.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = a.flattenChunks(this.chunks)), this.chunks = [], this.err = s, this.msg = this.strm.msg;
      }, c.Inflate = l, c.inflate = g, c.inflateRaw = function(s, d) {
        return (d = d || {}).raw = !0, g(s, d);
      }, c.ungzip = g;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, h, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(o) {
        for (var p = Array.prototype.slice.call(arguments, 1); p.length; ) {
          var m = p.shift();
          if (m) {
            if (typeof m != "object")
              throw new TypeError(m + "must be non-object");
            for (var b in m)
              m.hasOwnProperty(b) && (o[b] = m[b]);
          }
        }
        return o;
      }, c.shrinkBuf = function(o, p) {
        return o.length === p ? o : o.subarray ? o.subarray(0, p) : (o.length = p, o);
      };
      var a = { arraySet: function(o, p, m, b, y) {
        if (p.subarray && o.subarray)
          o.set(p.subarray(m, m + b), y);
        else
          for (var l = 0; l < b; l++)
            o[y + l] = p[m + l];
      }, flattenChunks: function(o) {
        var p, m, b, y, l, g;
        for (p = b = 0, m = o.length; p < m; p++)
          b += o[p].length;
        for (g = new Uint8Array(b), p = y = 0, m = o.length; p < m; p++)
          l = o[p], g.set(l, y), y += l.length;
        return g;
      } }, n = { arraySet: function(o, p, m, b, y) {
        for (var l = 0; l < b; l++)
          o[y + l] = p[m + l];
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
      function m(b, y) {
        if (y < 65537 && (b.subarray && n || !b.subarray && a))
          return String.fromCharCode.apply(null, r.shrinkBuf(b, y));
        for (var l = "", g = 0; g < y; g++)
          l += String.fromCharCode(b[g]);
        return l;
      }
      o[254] = o[254] = 1, c.string2buf = function(b) {
        var y, l, g, s, d, u = b.length, w = 0;
        for (s = 0; s < u; s++)
          (64512 & (l = b.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = b.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), w += l < 128 ? 1 : l < 2048 ? 2 : l < 65536 ? 3 : 4;
        for (y = new r.Buf8(w), s = d = 0; d < w; s++)
          (64512 & (l = b.charCodeAt(s))) == 55296 && s + 1 < u && (64512 & (g = b.charCodeAt(s + 1))) == 56320 && (l = 65536 + (l - 55296 << 10) + (g - 56320), s++), l < 128 ? y[d++] = l : (l < 2048 ? y[d++] = 192 | l >>> 6 : (l < 65536 ? y[d++] = 224 | l >>> 12 : (y[d++] = 240 | l >>> 18, y[d++] = 128 | l >>> 12 & 63), y[d++] = 128 | l >>> 6 & 63), y[d++] = 128 | 63 & l);
        return y;
      }, c.buf2binstring = function(b) {
        return m(b, b.length);
      }, c.binstring2buf = function(b) {
        for (var y = new r.Buf8(b.length), l = 0, g = y.length; l < g; l++)
          y[l] = b.charCodeAt(l);
        return y;
      }, c.buf2string = function(b, y) {
        var l, g, s, d, u = y || b.length, w = new Array(2 * u);
        for (l = g = 0; l < u; )
          if ((s = b[l++]) < 128)
            w[g++] = s;
          else if (4 < (d = o[s]))
            w[g++] = 65533, l += d - 1;
          else {
            for (s &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && l < u; )
              s = s << 6 | 63 & b[l++], d--;
            1 < d ? w[g++] = 65533 : s < 65536 ? w[g++] = s : (s -= 65536, w[g++] = 55296 | s >> 10 & 1023, w[g++] = 56320 | 1023 & s);
          }
        return m(w, g);
      }, c.utf8border = function(b, y) {
        var l;
        for ((y = y || b.length) > b.length && (y = b.length), l = y - 1; 0 <= l && (192 & b[l]) == 128; )
          l--;
        return l < 0 || l === 0 ? y : l + o[b[l]] > y ? l : y;
      };
    }, { "./common": 41 }], 43: [function(e, h, c) {
      h.exports = function(r, a, n, o) {
        for (var p = 65535 & r | 0, m = r >>> 16 & 65535 | 0, b = 0; n !== 0; ) {
          for (n -= b = 2e3 < n ? 2e3 : n; m = m + (p = p + a[o++] | 0) | 0, --b; )
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
        var m = r, b = p + o;
        a ^= -1;
        for (var y = p; y < b; y++)
          a = a >>> 8 ^ m[255 & (a ^ n[y])];
        return -1 ^ a;
      };
    }, {}], 46: [function(e, h, c) {
      var r, a = e("../utils/common"), n = e("./trees"), o = e("./adler32"), p = e("./crc32"), m = e("./messages"), b = 0, y = 4, l = 0, g = -2, s = -1, d = 4, u = 2, w = 8, C = 9, T = 286, R = 30, O = 19, D = 2 * T + 1, j = 15, z = 3, H = 258, rt = H + z + 1, k = 42, V = 113, i = 1, L = 2, it = 3, S = 4;
      function N(t, W) {
        return t.msg = m[W], W;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function M(t) {
        for (var W = t.length; 0 <= --W; )
          t[W] = 0;
      }
      function x(t) {
        var W = t.state, U = W.pending;
        U > t.avail_out && (U = t.avail_out), U !== 0 && (a.arraySet(t.output, W.pending_buf, W.pending_out, U, t.next_out), t.next_out += U, W.pending_out += U, t.total_out += U, t.avail_out -= U, W.pending -= U, W.pending === 0 && (W.pending_out = 0));
      }
      function I(t, W) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, W), t.block_start = t.strstart, x(t.strm);
      }
      function K(t, W) {
        t.pending_buf[t.pending++] = W;
      }
      function J(t, W) {
        t.pending_buf[t.pending++] = W >>> 8 & 255, t.pending_buf[t.pending++] = 255 & W;
      }
      function X(t, W) {
        var U, v, A = t.max_chain_length, B = t.strstart, Q = t.prev_length, G = t.nice_match, _ = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0, Z = t.window, $ = t.w_mask, P = t.prev, tt = t.strstart + H, ht = Z[B + Q - 1], st = Z[B + Q];
        t.prev_length >= t.good_match && (A >>= 2), G > t.lookahead && (G = t.lookahead);
        do
          if (Z[(U = W) + Q] === st && Z[U + Q - 1] === ht && Z[U] === Z[B] && Z[++U] === Z[B + 1]) {
            B += 2, U++;
            do
              ;
            while (Z[++B] === Z[++U] && Z[++B] === Z[++U] && Z[++B] === Z[++U] && Z[++B] === Z[++U] && Z[++B] === Z[++U] && Z[++B] === Z[++U] && Z[++B] === Z[++U] && Z[++B] === Z[++U] && B < tt);
            if (v = H - (tt - B), B = tt - H, Q < v) {
              if (t.match_start = W, G <= (Q = v))
                break;
              ht = Z[B + Q - 1], st = Z[B + Q];
            }
          }
        while ((W = P[W & $]) > _ && --A != 0);
        return Q <= t.lookahead ? Q : t.lookahead;
      }
      function ct(t) {
        var W, U, v, A, B, Q, G, _, Z, $, P = t.w_size;
        do {
          if (A = t.window_size - t.lookahead - t.strstart, t.strstart >= P + (P - rt)) {
            for (a.arraySet(t.window, t.window, P, P, 0), t.match_start -= P, t.strstart -= P, t.block_start -= P, W = U = t.hash_size; v = t.head[--W], t.head[W] = P <= v ? v - P : 0, --U; )
              ;
            for (W = U = P; v = t.prev[--W], t.prev[W] = P <= v ? v - P : 0, --U; )
              ;
            A += P;
          }
          if (t.strm.avail_in === 0)
            break;
          if (Q = t.strm, G = t.window, _ = t.strstart + t.lookahead, Z = A, $ = void 0, $ = Q.avail_in, Z < $ && ($ = Z), U = $ === 0 ? 0 : (Q.avail_in -= $, a.arraySet(G, Q.input, Q.next_in, $, _), Q.state.wrap === 1 ? Q.adler = o(Q.adler, G, $, _) : Q.state.wrap === 2 && (Q.adler = p(Q.adler, G, $, _)), Q.next_in += $, Q.total_in += $, $), t.lookahead += U, t.lookahead + t.insert >= z)
            for (B = t.strstart - t.insert, t.ins_h = t.window[B], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[B + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[B + z - 1]) & t.hash_mask, t.prev[B & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = B, B++, t.insert--, !(t.lookahead + t.insert < z)); )
              ;
        } while (t.lookahead < rt && t.strm.avail_in !== 0);
      }
      function gt(t, W) {
        for (var U, v; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && W === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (U = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), U !== 0 && t.strstart - U <= t.w_size - rt && (t.match_length = X(t, U)), t.match_length >= z)
            if (v = n._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            v = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (v && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, W === y ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : L;
      }
      function ot(t, W) {
        for (var U, v, A; ; ) {
          if (t.lookahead < rt) {
            if (ct(t), t.lookahead < rt && W === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (U = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, U !== 0 && t.prev_length < t.max_lazy_match && t.strstart - U <= t.w_size - rt && (t.match_length = X(t, U), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (A = t.strstart + t.lookahead - z, v = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= A && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, U = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, v && (I(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((v = n._tr_tally(t, 0, t.window[t.strstart - 1])) && I(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (v = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, W === y ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (I(t, !1), t.strm.avail_out === 0) ? i : L;
      }
      function at(t, W, U, v, A) {
        this.good_length = t, this.max_lazy = W, this.nice_length = U, this.max_chain = v, this.func = A;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new a.Buf16(2 * D), this.dyn_dtree = new a.Buf16(2 * (2 * R + 1)), this.bl_tree = new a.Buf16(2 * (2 * O + 1)), M(this.dyn_ltree), M(this.dyn_dtree), M(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new a.Buf16(j + 1), this.heap = new a.Buf16(2 * T + 1), M(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new a.Buf16(2 * T + 1), M(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ut(t) {
        var W;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (W = t.state).pending = 0, W.pending_out = 0, W.wrap < 0 && (W.wrap = -W.wrap), W.status = W.wrap ? k : V, t.adler = W.wrap === 2 ? 0 : 1, W.last_flush = b, n._tr_init(W), l) : N(t, g);
      }
      function mt(t) {
        var W = ut(t);
        return W === l && function(U) {
          U.window_size = 2 * U.w_size, M(U.head), U.max_lazy_match = r[U.level].max_lazy, U.good_match = r[U.level].good_length, U.nice_match = r[U.level].nice_length, U.max_chain_length = r[U.level].max_chain, U.strstart = 0, U.block_start = 0, U.lookahead = 0, U.insert = 0, U.match_length = U.prev_length = z - 1, U.match_available = 0, U.ins_h = 0;
        }(t.state), W;
      }
      function yt(t, W, U, v, A, B) {
        if (!t)
          return g;
        var Q = 1;
        if (W === s && (W = 6), v < 0 ? (Q = 0, v = -v) : 15 < v && (Q = 2, v -= 16), A < 1 || C < A || U !== w || v < 8 || 15 < v || W < 0 || 9 < W || B < 0 || d < B)
          return N(t, g);
        v === 8 && (v = 9);
        var G = new ft();
        return (t.state = G).strm = t, G.wrap = Q, G.gzhead = null, G.w_bits = v, G.w_size = 1 << G.w_bits, G.w_mask = G.w_size - 1, G.hash_bits = A + 7, G.hash_size = 1 << G.hash_bits, G.hash_mask = G.hash_size - 1, G.hash_shift = ~~((G.hash_bits + z - 1) / z), G.window = new a.Buf8(2 * G.w_size), G.head = new a.Buf16(G.hash_size), G.prev = new a.Buf16(G.w_size), G.lit_bufsize = 1 << A + 6, G.pending_buf_size = 4 * G.lit_bufsize, G.pending_buf = new a.Buf8(G.pending_buf_size), G.d_buf = 1 * G.lit_bufsize, G.l_buf = 3 * G.lit_bufsize, G.level = W, G.strategy = B, G.method = U, mt(t);
      }
      r = [new at(0, 0, 0, 0, function(t, W) {
        var U = 65535;
        for (U > t.pending_buf_size - 5 && (U = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ct(t), t.lookahead === 0 && W === b)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var v = t.block_start + U;
          if ((t.strstart === 0 || t.strstart >= v) && (t.lookahead = t.strstart - v, t.strstart = v, I(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - rt && (I(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, W === y ? (I(t, !0), t.strm.avail_out === 0 ? it : S) : (t.strstart > t.block_start && (I(t, !1), t.strm.avail_out), i);
      }), new at(4, 4, 8, 4, gt), new at(4, 5, 16, 8, gt), new at(4, 6, 32, 32, gt), new at(4, 4, 16, 16, ot), new at(8, 16, 32, 32, ot), new at(8, 16, 128, 128, ot), new at(8, 32, 128, 256, ot), new at(32, 128, 258, 1024, ot), new at(32, 258, 258, 4096, ot)], c.deflateInit = function(t, W) {
        return yt(t, W, w, 15, 8, 0);
      }, c.deflateInit2 = yt, c.deflateReset = mt, c.deflateResetKeep = ut, c.deflateSetHeader = function(t, W) {
        return t && t.state ? t.state.wrap !== 2 ? g : (t.state.gzhead = W, l) : g;
      }, c.deflate = function(t, W) {
        var U, v, A, B;
        if (!t || !t.state || 5 < W || W < 0)
          return t ? N(t, g) : g;
        if (v = t.state, !t.output || !t.input && t.avail_in !== 0 || v.status === 666 && W !== y)
          return N(t, t.avail_out === 0 ? -5 : g);
        if (v.strm = t, U = v.last_flush, v.last_flush = W, v.status === k)
          if (v.wrap === 2)
            t.adler = 0, K(v, 31), K(v, 139), K(v, 8), v.gzhead ? (K(v, (v.gzhead.text ? 1 : 0) + (v.gzhead.hcrc ? 2 : 0) + (v.gzhead.extra ? 4 : 0) + (v.gzhead.name ? 8 : 0) + (v.gzhead.comment ? 16 : 0)), K(v, 255 & v.gzhead.time), K(v, v.gzhead.time >> 8 & 255), K(v, v.gzhead.time >> 16 & 255), K(v, v.gzhead.time >> 24 & 255), K(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), K(v, 255 & v.gzhead.os), v.gzhead.extra && v.gzhead.extra.length && (K(v, 255 & v.gzhead.extra.length), K(v, v.gzhead.extra.length >> 8 & 255)), v.gzhead.hcrc && (t.adler = p(t.adler, v.pending_buf, v.pending, 0)), v.gzindex = 0, v.status = 69) : (K(v, 0), K(v, 0), K(v, 0), K(v, 0), K(v, 0), K(v, v.level === 9 ? 2 : 2 <= v.strategy || v.level < 2 ? 4 : 0), K(v, 3), v.status = V);
          else {
            var Q = w + (v.w_bits - 8 << 4) << 8;
            Q |= (2 <= v.strategy || v.level < 2 ? 0 : v.level < 6 ? 1 : v.level === 6 ? 2 : 3) << 6, v.strstart !== 0 && (Q |= 32), Q += 31 - Q % 31, v.status = V, J(v, Q), v.strstart !== 0 && (J(v, t.adler >>> 16), J(v, 65535 & t.adler)), t.adler = 1;
          }
        if (v.status === 69)
          if (v.gzhead.extra) {
            for (A = v.pending; v.gzindex < (65535 & v.gzhead.extra.length) && (v.pending !== v.pending_buf_size || (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending !== v.pending_buf_size)); )
              K(v, 255 & v.gzhead.extra[v.gzindex]), v.gzindex++;
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), v.gzindex === v.gzhead.extra.length && (v.gzindex = 0, v.status = 73);
          } else
            v.status = 73;
        if (v.status === 73)
          if (v.gzhead.name) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending === v.pending_buf_size)) {
                B = 1;
                break;
              }
              B = v.gzindex < v.gzhead.name.length ? 255 & v.gzhead.name.charCodeAt(v.gzindex++) : 0, K(v, B);
            } while (B !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), B === 0 && (v.gzindex = 0, v.status = 91);
          } else
            v.status = 91;
        if (v.status === 91)
          if (v.gzhead.comment) {
            A = v.pending;
            do {
              if (v.pending === v.pending_buf_size && (v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), x(t), A = v.pending, v.pending === v.pending_buf_size)) {
                B = 1;
                break;
              }
              B = v.gzindex < v.gzhead.comment.length ? 255 & v.gzhead.comment.charCodeAt(v.gzindex++) : 0, K(v, B);
            } while (B !== 0);
            v.gzhead.hcrc && v.pending > A && (t.adler = p(t.adler, v.pending_buf, v.pending - A, A)), B === 0 && (v.status = 103);
          } else
            v.status = 103;
        if (v.status === 103 && (v.gzhead.hcrc ? (v.pending + 2 > v.pending_buf_size && x(t), v.pending + 2 <= v.pending_buf_size && (K(v, 255 & t.adler), K(v, t.adler >> 8 & 255), t.adler = 0, v.status = V)) : v.status = V), v.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return v.last_flush = -1, l;
        } else if (t.avail_in === 0 && F(W) <= F(U) && W !== y)
          return N(t, -5);
        if (v.status === 666 && t.avail_in !== 0)
          return N(t, -5);
        if (t.avail_in !== 0 || v.lookahead !== 0 || W !== b && v.status !== 666) {
          var G = v.strategy === 2 ? function(_, Z) {
            for (var $; ; ) {
              if (_.lookahead === 0 && (ct(_), _.lookahead === 0)) {
                if (Z === b)
                  return i;
                break;
              }
              if (_.match_length = 0, $ = n._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++, $ && (I(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Z === y ? (I(_, !0), _.strm.avail_out === 0 ? it : S) : _.last_lit && (I(_, !1), _.strm.avail_out === 0) ? i : L;
          }(v, W) : v.strategy === 3 ? function(_, Z) {
            for (var $, P, tt, ht, st = _.window; ; ) {
              if (_.lookahead <= H) {
                if (ct(_), _.lookahead <= H && Z === b)
                  return i;
                if (_.lookahead === 0)
                  break;
              }
              if (_.match_length = 0, _.lookahead >= z && 0 < _.strstart && (P = st[tt = _.strstart - 1]) === st[++tt] && P === st[++tt] && P === st[++tt]) {
                ht = _.strstart + H;
                do
                  ;
                while (P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && P === st[++tt] && tt < ht);
                _.match_length = H - (ht - tt), _.match_length > _.lookahead && (_.match_length = _.lookahead);
              }
              if (_.match_length >= z ? ($ = n._tr_tally(_, 1, _.match_length - z), _.lookahead -= _.match_length, _.strstart += _.match_length, _.match_length = 0) : ($ = n._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++), $ && (I(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Z === y ? (I(_, !0), _.strm.avail_out === 0 ? it : S) : _.last_lit && (I(_, !1), _.strm.avail_out === 0) ? i : L;
          }(v, W) : r[v.level].func(v, W);
          if (G !== it && G !== S || (v.status = 666), G === i || G === it)
            return t.avail_out === 0 && (v.last_flush = -1), l;
          if (G === L && (W === 1 ? n._tr_align(v) : W !== 5 && (n._tr_stored_block(v, 0, 0, !1), W === 3 && (M(v.head), v.lookahead === 0 && (v.strstart = 0, v.block_start = 0, v.insert = 0))), x(t), t.avail_out === 0))
            return v.last_flush = -1, l;
        }
        return W !== y ? l : v.wrap <= 0 ? 1 : (v.wrap === 2 ? (K(v, 255 & t.adler), K(v, t.adler >> 8 & 255), K(v, t.adler >> 16 & 255), K(v, t.adler >> 24 & 255), K(v, 255 & t.total_in), K(v, t.total_in >> 8 & 255), K(v, t.total_in >> 16 & 255), K(v, t.total_in >> 24 & 255)) : (J(v, t.adler >>> 16), J(v, 65535 & t.adler)), x(t), 0 < v.wrap && (v.wrap = -v.wrap), v.pending !== 0 ? l : 1);
      }, c.deflateEnd = function(t) {
        var W;
        return t && t.state ? (W = t.state.status) !== k && W !== 69 && W !== 73 && W !== 91 && W !== 103 && W !== V && W !== 666 ? N(t, g) : (t.state = null, W === V ? N(t, -3) : l) : g;
      }, c.deflateSetDictionary = function(t, W) {
        var U, v, A, B, Q, G, _, Z, $ = W.length;
        if (!t || !t.state || (B = (U = t.state).wrap) === 2 || B === 1 && U.status !== k || U.lookahead)
          return g;
        for (B === 1 && (t.adler = o(t.adler, W, $, 0)), U.wrap = 0, $ >= U.w_size && (B === 0 && (M(U.head), U.strstart = 0, U.block_start = 0, U.insert = 0), Z = new a.Buf8(U.w_size), a.arraySet(Z, W, $ - U.w_size, U.w_size, 0), W = Z, $ = U.w_size), Q = t.avail_in, G = t.next_in, _ = t.input, t.avail_in = $, t.next_in = 0, t.input = W, ct(U); U.lookahead >= z; ) {
          for (v = U.strstart, A = U.lookahead - (z - 1); U.ins_h = (U.ins_h << U.hash_shift ^ U.window[v + z - 1]) & U.hash_mask, U.prev[v & U.w_mask] = U.head[U.ins_h], U.head[U.ins_h] = v, v++, --A; )
            ;
          U.strstart = v, U.lookahead = z - 1, ct(U);
        }
        return U.strstart += U.lookahead, U.block_start = U.strstart, U.insert = U.lookahead, U.lookahead = 0, U.match_length = U.prev_length = z - 1, U.match_available = 0, t.next_in = G, t.input = _, t.avail_in = Q, U.wrap = B, l;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, h, c) {
      h.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, h, c) {
      h.exports = function(r, a) {
        var n, o, p, m, b, y, l, g, s, d, u, w, C, T, R, O, D, j, z, H, rt, k, V, i, L;
        n = r.state, o = r.next_in, i = r.input, p = o + (r.avail_in - 5), m = r.next_out, L = r.output, b = m - (a - r.avail_out), y = m + (r.avail_out - 257), l = n.dmax, g = n.wsize, s = n.whave, d = n.wnext, u = n.window, w = n.hold, C = n.bits, T = n.lencode, R = n.distcode, O = (1 << n.lenbits) - 1, D = (1 << n.distbits) - 1;
        t:
          do {
            C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), j = T[w & O];
            e:
              for (; ; ) {
                if (w >>>= z = j >>> 24, C -= z, (z = j >>> 16 & 255) === 0)
                  L[m++] = 65535 & j;
                else {
                  if (!(16 & z)) {
                    if (!(64 & z)) {
                      j = T[(65535 & j) + (w & (1 << z) - 1)];
                      continue e;
                    }
                    if (32 & z) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  H = 65535 & j, (z &= 15) && (C < z && (w += i[o++] << C, C += 8), H += w & (1 << z) - 1, w >>>= z, C -= z), C < 15 && (w += i[o++] << C, C += 8, w += i[o++] << C, C += 8), j = R[w & D];
                  n:
                    for (; ; ) {
                      if (w >>>= z = j >>> 24, C -= z, !(16 & (z = j >>> 16 & 255))) {
                        if (!(64 & z)) {
                          j = R[(65535 & j) + (w & (1 << z) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (rt = 65535 & j, C < (z &= 15) && (w += i[o++] << C, (C += 8) < z && (w += i[o++] << C, C += 8)), l < (rt += w & (1 << z) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= z, C -= z, (z = m - b) < rt) {
                        if (s < (z = rt - z) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (V = u, (k = 0) === d) {
                          if (k += g - z, z < H) {
                            for (H -= z; L[m++] = u[k++], --z; )
                              ;
                            k = m - rt, V = L;
                          }
                        } else if (d < z) {
                          if (k += g + d - z, (z -= d) < H) {
                            for (H -= z; L[m++] = u[k++], --z; )
                              ;
                            if (k = 0, d < H) {
                              for (H -= z = d; L[m++] = u[k++], --z; )
                                ;
                              k = m - rt, V = L;
                            }
                          }
                        } else if (k += d - z, z < H) {
                          for (H -= z; L[m++] = u[k++], --z; )
                            ;
                          k = m - rt, V = L;
                        }
                        for (; 2 < H; )
                          L[m++] = V[k++], L[m++] = V[k++], L[m++] = V[k++], H -= 3;
                        H && (L[m++] = V[k++], 1 < H && (L[m++] = V[k++]));
                      } else {
                        for (k = m - rt; L[m++] = L[k++], L[m++] = L[k++], L[m++] = L[k++], 2 < (H -= 3); )
                          ;
                        H && (L[m++] = L[k++], 1 < H && (L[m++] = L[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (o < p && m < y);
        o -= H = C >> 3, w &= (1 << (C -= H << 3)) - 1, r.next_in = o, r.next_out = m, r.avail_in = o < p ? p - o + 5 : 5 - (o - p), r.avail_out = m < y ? y - m + 257 : 257 - (m - y), n.hold = w, n.bits = C;
      };
    }, {}], 49: [function(e, h, c) {
      var r = e("../utils/common"), a = e("./adler32"), n = e("./crc32"), o = e("./inffast"), p = e("./inftrees"), m = 1, b = 2, y = 0, l = -2, g = 1, s = 852, d = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function C(k) {
        var V;
        return k && k.state ? (V = k.state, k.total_in = k.total_out = V.total = 0, k.msg = "", V.wrap && (k.adler = 1 & V.wrap), V.mode = g, V.last = 0, V.havedict = 0, V.dmax = 32768, V.head = null, V.hold = 0, V.bits = 0, V.lencode = V.lendyn = new r.Buf32(s), V.distcode = V.distdyn = new r.Buf32(d), V.sane = 1, V.back = -1, y) : l;
      }
      function T(k) {
        var V;
        return k && k.state ? ((V = k.state).wsize = 0, V.whave = 0, V.wnext = 0, C(k)) : l;
      }
      function R(k, V) {
        var i, L;
        return k && k.state ? (L = k.state, V < 0 ? (i = 0, V = -V) : (i = 1 + (V >> 4), V < 48 && (V &= 15)), V && (V < 8 || 15 < V) ? l : (L.window !== null && L.wbits !== V && (L.window = null), L.wrap = i, L.wbits = V, T(k))) : l;
      }
      function O(k, V) {
        var i, L;
        return k ? (L = new w(), (k.state = L).window = null, (i = R(k, V)) !== y && (k.state = null), i) : l;
      }
      var D, j, z = !0;
      function H(k) {
        if (z) {
          var V;
          for (D = new r.Buf32(512), j = new r.Buf32(32), V = 0; V < 144; )
            k.lens[V++] = 8;
          for (; V < 256; )
            k.lens[V++] = 9;
          for (; V < 280; )
            k.lens[V++] = 7;
          for (; V < 288; )
            k.lens[V++] = 8;
          for (p(m, k.lens, 0, 288, D, 0, k.work, { bits: 9 }), V = 0; V < 32; )
            k.lens[V++] = 5;
          p(b, k.lens, 0, 32, j, 0, k.work, { bits: 5 }), z = !1;
        }
        k.lencode = D, k.lenbits = 9, k.distcode = j, k.distbits = 5;
      }
      function rt(k, V, i, L) {
        var it, S = k.state;
        return S.window === null && (S.wsize = 1 << S.wbits, S.wnext = 0, S.whave = 0, S.window = new r.Buf8(S.wsize)), L >= S.wsize ? (r.arraySet(S.window, V, i - S.wsize, S.wsize, 0), S.wnext = 0, S.whave = S.wsize) : (L < (it = S.wsize - S.wnext) && (it = L), r.arraySet(S.window, V, i - L, it, S.wnext), (L -= it) ? (r.arraySet(S.window, V, i - L, L, 0), S.wnext = L, S.whave = S.wsize) : (S.wnext += it, S.wnext === S.wsize && (S.wnext = 0), S.whave < S.wsize && (S.whave += it))), 0;
      }
      c.inflateReset = T, c.inflateReset2 = R, c.inflateResetKeep = C, c.inflateInit = function(k) {
        return O(k, 15);
      }, c.inflateInit2 = O, c.inflate = function(k, V) {
        var i, L, it, S, N, F, M, x, I, K, J, X, ct, gt, ot, at, ft, ut, mt, yt, t, W, U, v, A = 0, B = new r.Buf8(4), Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return l;
        (i = k.state).mode === 12 && (i.mode = 13), N = k.next_out, it = k.output, M = k.avail_out, S = k.next_in, L = k.input, F = k.avail_in, x = i.hold, I = i.bits, K = F, J = M, W = y;
        t:
          for (; ; )
            switch (i.mode) {
              case g:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  B[i.check = 0] = 255 & x, B[1] = x >>> 8 & 255, i.check = n(i.check, B, 2, 0), I = x = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & x) << 8) + (x >> 8)) % 31) {
                  k.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & x) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (I -= 4, t = 8 + (15 & (x >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  k.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, k.adler = i.check = 1, i.mode = 512 & x ? 10 : 12, I = x = 0;
                break;
              case 2:
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (B[0] = 255 & x, B[1] = x >>> 8 & 255, i.check = n(i.check, B, 2, 0)), I = x = 0, i.mode = 3;
              case 3:
                for (; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (B[0] = 255 & x, B[1] = x >>> 8 & 255, B[2] = x >>> 16 & 255, B[3] = x >>> 24 & 255, i.check = n(i.check, B, 4, 0)), I = x = 0, i.mode = 4;
              case 4:
                for (; I < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (B[0] = 255 & x, B[1] = x >>> 8 & 255, i.check = n(i.check, B, 2, 0)), I = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; I < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (B[0] = 255 & x, B[1] = x >>> 8 & 255, i.check = n(i.check, B, 2, 0)), I = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (X = i.length) && (X = F), X && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), r.arraySet(i.head.extra, L, S, X, t)), 512 & i.flags && (i.check = n(i.check, L, X, S)), F -= X, S += X, i.length -= X), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = L[S + X++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, L, X, S)), F -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = L[S + X++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = n(i.check, L, X, S)), F -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; I < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  if (x !== (65535 & i.check)) {
                    k.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), k.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                k.adler = i.check = u(x), I = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = N, k.avail_out = M, k.next_in = S, k.avail_in = F, i.hold = x, i.bits = I, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (V === 5 || V === 6)
                  break t;
              case 13:
                if (i.last) {
                  x >>>= 7 & I, I -= 7 & I, i.mode = 27;
                  break;
                }
                for (; I < 3; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                switch (i.last = 1 & x, I -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (H(i), i.mode = 20, V !== 6)
                      break;
                    x >>>= 2, I -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", i.mode = 30;
                }
                x >>>= 2, I -= 2;
                break;
              case 14:
                for (x >>>= 7 & I, I -= 7 & I; I < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                if ((65535 & x) != (x >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & x, I = x = 0, i.mode = 15, V === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (X = i.length) {
                  if (F < X && (X = F), M < X && (X = M), X === 0)
                    break t;
                  r.arraySet(it, L, S, X, N), F -= X, S += X, M -= X, N += X, i.length -= X;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; I < 14; ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                if (i.nlen = 257 + (31 & x), x >>>= 5, I -= 5, i.ndist = 1 + (31 & x), x >>>= 5, I -= 5, i.ncode = 4 + (15 & x), x >>>= 4, I -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; I < 3; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  i.lens[Q[i.have++]] = 7 & x, x >>>= 3, I -= 3;
                }
                for (; i.have < 19; )
                  i.lens[Q[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, U = { bits: i.lenbits }, W = p(0, i.lens, 0, 19, i.lencode, 0, i.work, U), i.lenbits = U.bits, W) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; at = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  if (ft < 16)
                    x >>>= ot, I -= ot, i.lens[i.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (v = ot + 2; I < v; ) {
                        if (F === 0)
                          break t;
                        F--, x += L[S++] << I, I += 8;
                      }
                      if (x >>>= ot, I -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], X = 3 + (3 & x), x >>>= 2, I -= 2;
                    } else if (ft === 17) {
                      for (v = ot + 3; I < v; ) {
                        if (F === 0)
                          break t;
                        F--, x += L[S++] << I, I += 8;
                      }
                      I -= ot, t = 0, X = 3 + (7 & (x >>>= ot)), x >>>= 3, I -= 3;
                    } else {
                      for (v = ot + 7; I < v; ) {
                        if (F === 0)
                          break t;
                        F--, x += L[S++] << I, I += 8;
                      }
                      I -= ot, t = 0, X = 11 + (127 & (x >>>= ot)), x >>>= 7, I -= 7;
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
                if (i.lenbits = 9, U = { bits: i.lenbits }, W = p(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, U), i.lenbits = U.bits, W) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, U = { bits: i.distbits }, W = p(b, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, U), i.distbits = U.bits, W) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, V === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= M) {
                  k.next_out = N, k.avail_out = M, k.next_in = S, k.avail_in = F, i.hold = x, i.bits = I, o(k, J), N = k.next_out, it = k.output, M = k.avail_out, S = k.next_in, L = k.input, F = k.avail_in, x = i.hold, I = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; at = (A = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                if (at && !(240 & at)) {
                  for (ut = ot, mt = at, yt = ft; at = (A = i.lencode[yt + ((x & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  x >>>= ut, I -= ut, i.back += ut;
                }
                if (x >>>= ot, I -= ot, i.back += ot, i.length = ft, at === 0) {
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
                  for (v = i.extra; I < v; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; at = (A = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, ft = 65535 & A, !((ot = A >>> 24) <= I); ) {
                  if (F === 0)
                    break t;
                  F--, x += L[S++] << I, I += 8;
                }
                if (!(240 & at)) {
                  for (ut = ot, mt = at, yt = ft; at = (A = i.distcode[yt + ((x & (1 << ut + mt) - 1) >> ut)]) >>> 16 & 255, ft = 65535 & A, !(ut + (ot = A >>> 24) <= I); ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  x >>>= ut, I -= ut, i.back += ut;
                }
                if (x >>>= ot, I -= ot, i.back += ot, 64 & at) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = ft, i.extra = 15 & at, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (v = i.extra; I < v; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  i.offset += x & (1 << i.extra) - 1, x >>>= i.extra, I -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (M === 0)
                  break t;
                if (X = J - M, i.offset > X) {
                  if ((X = i.offset - X) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ct = X > i.wnext ? (X -= i.wnext, i.wsize - X) : i.wnext - X, X > i.length && (X = i.length), gt = i.window;
                } else
                  gt = it, ct = N - i.offset, X = i.length;
                for (M < X && (X = M), M -= X, i.length -= X; it[N++] = gt[ct++], --X; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (M === 0)
                  break t;
                it[N++] = i.length, M--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; I < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x |= L[S++] << I, I += 8;
                  }
                  if (J -= M, k.total_out += J, i.total += J, J && (k.adler = i.check = i.flags ? n(i.check, it, J, N - J) : a(i.check, it, J, N - J)), J = M, (i.flags ? x : u(x)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; I < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x += L[S++] << I, I += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  I = x = 0;
                }
                i.mode = 29;
              case 29:
                W = 1;
                break t;
              case 30:
                W = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return l;
            }
        return k.next_out = N, k.avail_out = M, k.next_in = S, k.avail_in = F, i.hold = x, i.bits = I, (i.wsize || J !== k.avail_out && i.mode < 30 && (i.mode < 27 || V !== 4)) && rt(k, k.output, k.next_out, J - k.avail_out) ? (i.mode = 31, -4) : (K -= k.avail_in, J -= k.avail_out, k.total_in += K, k.total_out += J, i.total += J, i.wrap && J && (k.adler = i.check = i.flags ? n(i.check, it, J, k.next_out - J) : a(i.check, it, J, k.next_out - J)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && J === 0 || V === 4) && W === y && (W = -5), W);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return l;
        var V = k.state;
        return V.window && (V.window = null), k.state = null, y;
      }, c.inflateGetHeader = function(k, V) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = V).done = !1, y) : l;
      }, c.inflateSetDictionary = function(k, V) {
        var i, L = V.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? l : i.mode === 11 && a(1, V, L, 0) !== i.check ? -3 : rt(k, V, L, L) ? (i.mode = 31, -4) : (i.havedict = 1, y) : l;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, h, c) {
      var r = e("../utils/common"), a = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], o = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], p = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      h.exports = function(m, b, y, l, g, s, d, u) {
        var w, C, T, R, O, D, j, z, H, rt = u.bits, k = 0, V = 0, i = 0, L = 0, it = 0, S = 0, N = 0, F = 0, M = 0, x = 0, I = null, K = 0, J = new r.Buf16(16), X = new r.Buf16(16), ct = null, gt = 0;
        for (k = 0; k <= 15; k++)
          J[k] = 0;
        for (V = 0; V < l; V++)
          J[b[y + V]]++;
        for (it = rt, L = 15; 1 <= L && J[L] === 0; L--)
          ;
        if (L < it && (it = L), L === 0)
          return g[s++] = 20971520, g[s++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < L && J[i] === 0; i++)
          ;
        for (it < i && (it = i), k = F = 1; k <= 15; k++)
          if (F <<= 1, (F -= J[k]) < 0)
            return -1;
        if (0 < F && (m === 0 || L !== 1))
          return -1;
        for (X[1] = 0, k = 1; k < 15; k++)
          X[k + 1] = X[k] + J[k];
        for (V = 0; V < l; V++)
          b[y + V] !== 0 && (d[X[b[y + V]]++] = V);
        if (D = m === 0 ? (I = ct = d, 19) : m === 1 ? (I = a, K -= 257, ct = n, gt -= 257, 256) : (I = o, ct = p, -1), k = i, O = s, N = V = x = 0, T = -1, R = (M = 1 << (S = it)) - 1, m === 1 && 852 < M || m === 2 && 592 < M)
          return 1;
        for (; ; ) {
          for (j = k - N, H = d[V] < D ? (z = 0, d[V]) : d[V] > D ? (z = ct[gt + d[V]], I[K + d[V]]) : (z = 96, 0), w = 1 << k - N, i = C = 1 << S; g[O + (x >> N) + (C -= w)] = j << 24 | z << 16 | H | 0, C !== 0; )
            ;
          for (w = 1 << k - 1; x & w; )
            w >>= 1;
          if (w !== 0 ? (x &= w - 1, x += w) : x = 0, V++, --J[k] == 0) {
            if (k === L)
              break;
            k = b[y + d[V]];
          }
          if (it < k && (x & R) !== T) {
            for (N === 0 && (N = it), O += i, F = 1 << (S = k - N); S + N < L && !((F -= J[S + N]) <= 0); )
              S++, F <<= 1;
            if (M += 1 << S, m === 1 && 852 < M || m === 2 && 592 < M)
              return 1;
            g[T = x & R] = it << 24 | S << 16 | O - s | 0;
          }
        }
        return x !== 0 && (g[O + x] = k - N << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, h, c) {
      h.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, h, c) {
      var r = e("../utils/common"), a = 0, n = 1;
      function o(A) {
        for (var B = A.length; 0 <= --B; )
          A[B] = 0;
      }
      var p = 0, m = 29, b = 256, y = b + 1 + m, l = 30, g = 19, s = 2 * y + 1, d = 15, u = 16, w = 7, C = 256, T = 16, R = 17, O = 18, D = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], j = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], H = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], rt = new Array(2 * (y + 2));
      o(rt);
      var k = new Array(2 * l);
      o(k);
      var V = new Array(512);
      o(V);
      var i = new Array(256);
      o(i);
      var L = new Array(m);
      o(L);
      var it, S, N, F = new Array(l);
      function M(A, B, Q, G, _) {
        this.static_tree = A, this.extra_bits = B, this.extra_base = Q, this.elems = G, this.max_length = _, this.has_stree = A && A.length;
      }
      function x(A, B) {
        this.dyn_tree = A, this.max_code = 0, this.stat_desc = B;
      }
      function I(A) {
        return A < 256 ? V[A] : V[256 + (A >>> 7)];
      }
      function K(A, B) {
        A.pending_buf[A.pending++] = 255 & B, A.pending_buf[A.pending++] = B >>> 8 & 255;
      }
      function J(A, B, Q) {
        A.bi_valid > u - Q ? (A.bi_buf |= B << A.bi_valid & 65535, K(A, A.bi_buf), A.bi_buf = B >> u - A.bi_valid, A.bi_valid += Q - u) : (A.bi_buf |= B << A.bi_valid & 65535, A.bi_valid += Q);
      }
      function X(A, B, Q) {
        J(A, Q[2 * B], Q[2 * B + 1]);
      }
      function ct(A, B) {
        for (var Q = 0; Q |= 1 & A, A >>>= 1, Q <<= 1, 0 < --B; )
          ;
        return Q >>> 1;
      }
      function gt(A, B, Q) {
        var G, _, Z = new Array(d + 1), $ = 0;
        for (G = 1; G <= d; G++)
          Z[G] = $ = $ + Q[G - 1] << 1;
        for (_ = 0; _ <= B; _++) {
          var P = A[2 * _ + 1];
          P !== 0 && (A[2 * _] = ct(Z[P]++, P));
        }
      }
      function ot(A) {
        var B;
        for (B = 0; B < y; B++)
          A.dyn_ltree[2 * B] = 0;
        for (B = 0; B < l; B++)
          A.dyn_dtree[2 * B] = 0;
        for (B = 0; B < g; B++)
          A.bl_tree[2 * B] = 0;
        A.dyn_ltree[2 * C] = 1, A.opt_len = A.static_len = 0, A.last_lit = A.matches = 0;
      }
      function at(A) {
        8 < A.bi_valid ? K(A, A.bi_buf) : 0 < A.bi_valid && (A.pending_buf[A.pending++] = A.bi_buf), A.bi_buf = 0, A.bi_valid = 0;
      }
      function ft(A, B, Q, G) {
        var _ = 2 * B, Z = 2 * Q;
        return A[_] < A[Z] || A[_] === A[Z] && G[B] <= G[Q];
      }
      function ut(A, B, Q) {
        for (var G = A.heap[Q], _ = Q << 1; _ <= A.heap_len && (_ < A.heap_len && ft(B, A.heap[_ + 1], A.heap[_], A.depth) && _++, !ft(B, G, A.heap[_], A.depth)); )
          A.heap[Q] = A.heap[_], Q = _, _ <<= 1;
        A.heap[Q] = G;
      }
      function mt(A, B, Q) {
        var G, _, Z, $, P = 0;
        if (A.last_lit !== 0)
          for (; G = A.pending_buf[A.d_buf + 2 * P] << 8 | A.pending_buf[A.d_buf + 2 * P + 1], _ = A.pending_buf[A.l_buf + P], P++, G === 0 ? X(A, _, B) : (X(A, (Z = i[_]) + b + 1, B), ($ = D[Z]) !== 0 && J(A, _ -= L[Z], $), X(A, Z = I(--G), Q), ($ = j[Z]) !== 0 && J(A, G -= F[Z], $)), P < A.last_lit; )
            ;
        X(A, C, B);
      }
      function yt(A, B) {
        var Q, G, _, Z = B.dyn_tree, $ = B.stat_desc.static_tree, P = B.stat_desc.has_stree, tt = B.stat_desc.elems, ht = -1;
        for (A.heap_len = 0, A.heap_max = s, Q = 0; Q < tt; Q++)
          Z[2 * Q] !== 0 ? (A.heap[++A.heap_len] = ht = Q, A.depth[Q] = 0) : Z[2 * Q + 1] = 0;
        for (; A.heap_len < 2; )
          Z[2 * (_ = A.heap[++A.heap_len] = ht < 2 ? ++ht : 0)] = 1, A.depth[_] = 0, A.opt_len--, P && (A.static_len -= $[2 * _ + 1]);
        for (B.max_code = ht, Q = A.heap_len >> 1; 1 <= Q; Q--)
          ut(A, Z, Q);
        for (_ = tt; Q = A.heap[1], A.heap[1] = A.heap[A.heap_len--], ut(A, Z, 1), G = A.heap[1], A.heap[--A.heap_max] = Q, A.heap[--A.heap_max] = G, Z[2 * _] = Z[2 * Q] + Z[2 * G], A.depth[_] = (A.depth[Q] >= A.depth[G] ? A.depth[Q] : A.depth[G]) + 1, Z[2 * Q + 1] = Z[2 * G + 1] = _, A.heap[1] = _++, ut(A, Z, 1), 2 <= A.heap_len; )
          ;
        A.heap[--A.heap_max] = A.heap[1], function(st, pt) {
          var Ct, Bt, wt, dt, St, It, bt = pt.dyn_tree, Dt = pt.max_code, _t = pt.stat_desc.static_tree, Qt = pt.stat_desc.has_stree, et = pt.stat_desc.extra_bits, vt = pt.stat_desc.extra_base, xt = pt.stat_desc.max_length, At = 0;
          for (dt = 0; dt <= d; dt++)
            st.bl_count[dt] = 0;
          for (bt[2 * st.heap[st.heap_max] + 1] = 0, Ct = st.heap_max + 1; Ct < s; Ct++)
            xt < (dt = bt[2 * bt[2 * (Bt = st.heap[Ct]) + 1] + 1] + 1) && (dt = xt, At++), bt[2 * Bt + 1] = dt, Dt < Bt || (st.bl_count[dt]++, St = 0, vt <= Bt && (St = et[Bt - vt]), It = bt[2 * Bt], st.opt_len += It * (dt + St), Qt && (st.static_len += It * (_t[2 * Bt + 1] + St)));
          if (At !== 0) {
            do {
              for (dt = xt - 1; st.bl_count[dt] === 0; )
                dt--;
              st.bl_count[dt]--, st.bl_count[dt + 1] += 2, st.bl_count[xt]--, At -= 2;
            } while (0 < At);
            for (dt = xt; dt !== 0; dt--)
              for (Bt = st.bl_count[dt]; Bt !== 0; )
                Dt < (wt = st.heap[--Ct]) || (bt[2 * wt + 1] !== dt && (st.opt_len += (dt - bt[2 * wt + 1]) * bt[2 * wt], bt[2 * wt + 1] = dt), Bt--);
          }
        }(A, B), gt(Z, ht, A.bl_count);
      }
      function t(A, B, Q) {
        var G, _, Z = -1, $ = B[1], P = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), B[2 * (Q + 1) + 1] = 65535, G = 0; G <= Q; G++)
          _ = $, $ = B[2 * (G + 1) + 1], ++P < tt && _ === $ || (P < ht ? A.bl_tree[2 * _] += P : _ !== 0 ? (_ !== Z && A.bl_tree[2 * _]++, A.bl_tree[2 * T]++) : P <= 10 ? A.bl_tree[2 * R]++ : A.bl_tree[2 * O]++, Z = _, ht = (P = 0) === $ ? (tt = 138, 3) : _ === $ ? (tt = 6, 3) : (tt = 7, 4));
      }
      function W(A, B, Q) {
        var G, _, Z = -1, $ = B[1], P = 0, tt = 7, ht = 4;
        for ($ === 0 && (tt = 138, ht = 3), G = 0; G <= Q; G++)
          if (_ = $, $ = B[2 * (G + 1) + 1], !(++P < tt && _ === $)) {
            if (P < ht)
              for (; X(A, _, A.bl_tree), --P != 0; )
                ;
            else
              _ !== 0 ? (_ !== Z && (X(A, _, A.bl_tree), P--), X(A, T, A.bl_tree), J(A, P - 3, 2)) : P <= 10 ? (X(A, R, A.bl_tree), J(A, P - 3, 3)) : (X(A, O, A.bl_tree), J(A, P - 11, 7));
            Z = _, ht = (P = 0) === $ ? (tt = 138, 3) : _ === $ ? (tt = 6, 3) : (tt = 7, 4);
          }
      }
      o(F);
      var U = !1;
      function v(A, B, Q, G) {
        J(A, (p << 1) + (G ? 1 : 0), 3), function(_, Z, $, P) {
          at(_), P && (K(_, $), K(_, ~$)), r.arraySet(_.pending_buf, _.window, Z, $, _.pending), _.pending += $;
        }(A, B, Q, !0);
      }
      c._tr_init = function(A) {
        U || (function() {
          var B, Q, G, _, Z, $ = new Array(d + 1);
          for (_ = G = 0; _ < m - 1; _++)
            for (L[_] = G, B = 0; B < 1 << D[_]; B++)
              i[G++] = _;
          for (i[G - 1] = _, _ = Z = 0; _ < 16; _++)
            for (F[_] = Z, B = 0; B < 1 << j[_]; B++)
              V[Z++] = _;
          for (Z >>= 7; _ < l; _++)
            for (F[_] = Z << 7, B = 0; B < 1 << j[_] - 7; B++)
              V[256 + Z++] = _;
          for (Q = 0; Q <= d; Q++)
            $[Q] = 0;
          for (B = 0; B <= 143; )
            rt[2 * B + 1] = 8, B++, $[8]++;
          for (; B <= 255; )
            rt[2 * B + 1] = 9, B++, $[9]++;
          for (; B <= 279; )
            rt[2 * B + 1] = 7, B++, $[7]++;
          for (; B <= 287; )
            rt[2 * B + 1] = 8, B++, $[8]++;
          for (gt(rt, y + 1, $), B = 0; B < l; B++)
            k[2 * B + 1] = 5, k[2 * B] = ct(B, 5);
          it = new M(rt, D, b + 1, y, d), S = new M(k, j, 0, l, d), N = new M(new Array(0), z, 0, g, w);
        }(), U = !0), A.l_desc = new x(A.dyn_ltree, it), A.d_desc = new x(A.dyn_dtree, S), A.bl_desc = new x(A.bl_tree, N), A.bi_buf = 0, A.bi_valid = 0, ot(A);
      }, c._tr_stored_block = v, c._tr_flush_block = function(A, B, Q, G) {
        var _, Z, $ = 0;
        0 < A.level ? (A.strm.data_type === 2 && (A.strm.data_type = function(P) {
          var tt, ht = 4093624447;
          for (tt = 0; tt <= 31; tt++, ht >>>= 1)
            if (1 & ht && P.dyn_ltree[2 * tt] !== 0)
              return a;
          if (P.dyn_ltree[18] !== 0 || P.dyn_ltree[20] !== 0 || P.dyn_ltree[26] !== 0)
            return n;
          for (tt = 32; tt < b; tt++)
            if (P.dyn_ltree[2 * tt] !== 0)
              return n;
          return a;
        }(A)), yt(A, A.l_desc), yt(A, A.d_desc), $ = function(P) {
          var tt;
          for (t(P, P.dyn_ltree, P.l_desc.max_code), t(P, P.dyn_dtree, P.d_desc.max_code), yt(P, P.bl_desc), tt = g - 1; 3 <= tt && P.bl_tree[2 * H[tt] + 1] === 0; tt--)
            ;
          return P.opt_len += 3 * (tt + 1) + 5 + 5 + 4, tt;
        }(A), _ = A.opt_len + 3 + 7 >>> 3, (Z = A.static_len + 3 + 7 >>> 3) <= _ && (_ = Z)) : _ = Z = Q + 5, Q + 4 <= _ && B !== -1 ? v(A, B, Q, G) : A.strategy === 4 || Z === _ ? (J(A, 2 + (G ? 1 : 0), 3), mt(A, rt, k)) : (J(A, 4 + (G ? 1 : 0), 3), function(P, tt, ht, st) {
          var pt;
          for (J(P, tt - 257, 5), J(P, ht - 1, 5), J(P, st - 4, 4), pt = 0; pt < st; pt++)
            J(P, P.bl_tree[2 * H[pt] + 1], 3);
          W(P, P.dyn_ltree, tt - 1), W(P, P.dyn_dtree, ht - 1);
        }(A, A.l_desc.max_code + 1, A.d_desc.max_code + 1, $ + 1), mt(A, A.dyn_ltree, A.dyn_dtree)), ot(A), G && at(A);
      }, c._tr_tally = function(A, B, Q) {
        return A.pending_buf[A.d_buf + 2 * A.last_lit] = B >>> 8 & 255, A.pending_buf[A.d_buf + 2 * A.last_lit + 1] = 255 & B, A.pending_buf[A.l_buf + A.last_lit] = 255 & Q, A.last_lit++, B === 0 ? A.dyn_ltree[2 * Q]++ : (A.matches++, B--, A.dyn_ltree[2 * (i[Q] + b + 1)]++, A.dyn_dtree[2 * I(B)]++), A.last_lit === A.lit_bufsize - 1;
      }, c._tr_align = function(A) {
        J(A, 2, 3), X(A, C, rt), function(B) {
          B.bi_valid === 16 ? (K(B, B.bi_buf), B.bi_buf = 0, B.bi_valid = 0) : 8 <= B.bi_valid && (B.pending_buf[B.pending++] = 255 & B.bi_buf, B.bi_buf >>= 8, B.bi_valid -= 8);
        }(A);
      };
    }, { "../utils/common": 41 }], 53: [function(e, h, c) {
      h.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, h, c) {
      (function(r) {
        (function(a, n) {
          if (!a.setImmediate) {
            var o, p, m, b, y = 1, l = {}, g = !1, s = a.document, d = Object.getPrototypeOf && Object.getPrototypeOf(a);
            d = d && d.setTimeout ? d : a, o = {}.toString.call(a.process) === "[object process]" ? function(T) {
              process.nextTick(function() {
                w(T);
              });
            } : function() {
              if (a.postMessage && !a.importScripts) {
                var T = !0, R = a.onmessage;
                return a.onmessage = function() {
                  T = !1;
                }, a.postMessage("", "*"), a.onmessage = R, T;
              }
            }() ? (b = "setImmediate$" + Math.random() + "$", a.addEventListener ? a.addEventListener("message", C, !1) : a.attachEvent("onmessage", C), function(T) {
              a.postMessage(b + T, "*");
            }) : a.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(T) {
              w(T.data);
            }, function(T) {
              m.port2.postMessage(T);
            }) : s && "onreadystatechange" in s.createElement("script") ? (p = s.documentElement, function(T) {
              var R = s.createElement("script");
              R.onreadystatechange = function() {
                w(T), R.onreadystatechange = null, p.removeChild(R), R = null;
              }, p.appendChild(R);
            }) : function(T) {
              setTimeout(w, 0, T);
            }, d.setImmediate = function(T) {
              typeof T != "function" && (T = new Function("" + T));
              for (var R = new Array(arguments.length - 1), O = 0; O < R.length; O++)
                R[O] = arguments[O + 1];
              var D = { callback: T, args: R };
              return l[y] = D, o(y), y++;
            }, d.clearImmediate = u;
          }
          function u(T) {
            delete l[T];
          }
          function w(T) {
            if (g)
              setTimeout(w, 0, T);
            else {
              var R = l[T];
              if (R) {
                g = !0;
                try {
                  (function(O) {
                    var D = O.callback, j = O.args;
                    switch (j.length) {
                      case 0:
                        D();
                        break;
                      case 1:
                        D(j[0]);
                        break;
                      case 2:
                        D(j[0], j[1]);
                        break;
                      case 3:
                        D(j[0], j[1], j[2]);
                        break;
                      default:
                        D.apply(n, j);
                    }
                  })(R);
                } finally {
                  u(T), g = !1;
                }
              }
            }
          }
          function C(T) {
            T.source === a && typeof T.data == "string" && T.data.indexOf(b) === 0 && w(+T.data.slice(b.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof Tt < "u" ? Tt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(ve);
var Qe = ve.exports;
const Me = /* @__PURE__ */ be(Qe);
var ye = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h();
  })(Tt, function() {
    function e(p, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type) ? new Blob(["\uFEFF", p], { type: p.type }) : p;
    }
    function h(p, m, b) {
      var y = new XMLHttpRequest();
      y.open("GET", p), y.responseType = "blob", y.onload = function() {
        o(y.response, m, b);
      }, y.onerror = function() {
        console.error("could not download file");
      }, y.send();
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
    var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Tt == "object" && Tt.global === Tt ? Tt : void 0, n = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), o = a.saveAs || (typeof window != "object" || window !== a ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(p, m, b) {
      var y = a.URL || a.webkitURL, l = document.createElement("a");
      m = m || p.name || "download", l.download = m, l.rel = "noopener", typeof p == "string" ? (l.href = p, l.origin === location.origin ? r(l) : c(l.href) ? h(p, m, b) : r(l, l.target = "_blank")) : (l.href = y.createObjectURL(p), setTimeout(function() {
        y.revokeObjectURL(l.href);
      }, 4e4), setTimeout(function() {
        r(l);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(p, m, b) {
      if (m = m || p.name || "download", typeof p != "string")
        navigator.msSaveOrOpenBlob(e(p, b), m);
      else if (c(p))
        h(p, m, b);
      else {
        var y = document.createElement("a");
        y.href = p, y.target = "_blank", setTimeout(function() {
          r(y);
        });
      }
    } : function(p, m, b, y) {
      if (y = y || open("", "_blank"), y && (y.document.title = y.document.body.innerText = "downloading..."), typeof p == "string")
        return h(p, m, b);
      var l = p.type === "application/octet-stream", g = /constructor/i.test(a.HTMLElement) || a.safari, s = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((s || l && g || n) && typeof FileReader < "u") {
        var d = new FileReader();
        d.onloadend = function() {
          var C = d.result;
          C = s ? C : C.replace(/^data:[^;]*;/, "data:attachment/file;"), y ? y.location.href = C : location = C, y = null;
        }, d.readAsDataURL(p);
      } else {
        var u = a.URL || a.webkitURL, w = u.createObjectURL(p);
        y ? y.location = w : location.href = w, y = null, setTimeout(function() {
          u.revokeObjectURL(w);
        }, 4e4);
      }
    });
    a.saveAs = o.saveAs = o, E.exports = o;
  });
})(ye);
var je = ye.exports;
const Pe = /* @__PURE__ */ be(je);
function Pt(E) {
  for (var f = globalThis.atob(E), e = f.length, h = new Uint8Array(e), c = 0; c < e; c++)
    h[c] = f.charCodeAt(c);
  return h.buffer;
}
const Je = `#!/bin/sh

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
#       https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt
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
`, Ze = `@rem\r
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
`, Ye = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-9.2.1-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Xe = "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", we = `# gradle

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
    runs-on: ubuntu-24.04
    steps:
      - name: checkout repository
        uses: actions/checkout@v4
      - name: validate gradle wrapper
        uses: gradle/actions/wrapper-validation@v4
      - name: setup jdk
        uses: actions/setup-java@v4
        with:
          java-version: '21'
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: Artifacts
          path: build/libs/`;
async function He({ writer: E }) {
  await E.write("gradlew", Je, {
    executable: !0
  }), await E.write("gradlew.bat", Ze), await E.write("gradle/wrapper/gradle-wrapper.properties", Ye), await E.write("gradle/wrapper/gradle-wrapper.jar", Pt(Xe)), await E.write(".gitignore", we), await E.write(".github/workflows/build.yml", ke);
}
var Xt = { exports: {} };
(function(E, f) {
  (function(e, h) {
    h(f);
  })(Tt, function(e) {
    function h() {
      return h = Object.assign ? Object.assign.bind() : function(S) {
        for (var N = 1; N < arguments.length; N++) {
          var F = arguments[N];
          for (var M in F)
            Object.prototype.hasOwnProperty.call(F, M) && (S[M] = F[M]);
        }
        return S;
      }, h.apply(this, arguments);
    }
    function c(S, N) {
      S.prototype = Object.create(N.prototype), S.prototype.constructor = S, a(S, N);
    }
    function r(S) {
      return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(N) {
        return N.__proto__ || Object.getPrototypeOf(N);
      }, r(S);
    }
    function a(S, N) {
      return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, M) {
        return F.__proto__ = M, F;
      }, a(S, N);
    }
    function n(S, N, F) {
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
      }() ? Reflect.construct.bind() : function(M, x, I) {
        var K = [null];
        K.push.apply(K, x);
        var J = new (Function.bind.apply(M, K))();
        return I && a(J, I.prototype), J;
      }, n.apply(null, arguments);
    }
    function o(S) {
      var N = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return o = function(F) {
        if (F === null || Function.toString.call(F).indexOf("[native code]") === -1)
          return F;
        if (typeof F != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (N !== void 0) {
          if (N.has(F))
            return N.get(F);
          N.set(F, M);
        }
        function M() {
          return n(F, arguments, r(this).constructor);
        }
        return M.prototype = Object.create(F.prototype, { constructor: { value: M, enumerable: !1, writable: !0, configurable: !0 } }), a(M, F);
      }, o(S);
    }
    var p = /* @__PURE__ */ function() {
      function S(F) {
        this.cache = void 0, this.cache = F;
      }
      var N = S.prototype;
      return N.define = function(F, M) {
        this.cache[F] = M;
      }, N.get = function(F) {
        return this.cache[F];
      }, N.remove = function(F) {
        delete this.cache[F];
      }, N.reset = function() {
        this.cache = {};
      }, N.load = function(F) {
        this.cache = h({}, this.cache, F);
      }, S;
    }(), m = /* @__PURE__ */ function(S) {
      function N(F) {
        var M;
        return (M = S.call(this, F) || this).name = "Eta Error", M;
      }
      return c(N, S), N;
    }(/* @__PURE__ */ o(Error));
    function b(S, N, F) {
      var M = N.slice(0, F).split(/\n/), x = M.length, I = M[x - 1].length + 1;
      throw S += " at line " + x + " col " + I + `:

  ` + N.split(/\n/)[x - 1] + `
  ` + Array(I).join(" ") + "^", new m(S);
    }
    function y(S, N, F, M) {
      var x = N.split(`
`), I = Math.max(F - 3, 0), K = Math.min(x.length, F + 3), J = M, X = x.slice(I, K).map(function(gt, ot) {
        var at = ot + I + 1;
        return (at == F ? " >> " : "    ") + at + "| " + gt;
      }).join(`
`), ct = new m((J ? J + ":" + F + `
` : "line " + F + `
`) + X + `

` + S.message);
      throw ct.name = S.name, ct;
    }
    var l = function() {
      return Promise.resolve();
    }.constructor;
    function g(S, N) {
      var F = this.config, M = N && N.async ? l : Function;
      try {
        return new M(F.varName, "options", this.compileToString.call(this, S, N));
      } catch (x) {
        throw x instanceof SyntaxError ? new m(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, S, N) + `
`) : x;
      }
    }
    function s(S, N) {
      var F = this.config, M = N && N.async, x = this.parse.call(this, S), I = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + d.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (M ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var K = 0; K < F.plugins.length; K++) {
          var J = F.plugins[K];
          J.processFnString && (I = J.processFnString(I, F));
        }
      return I;
    }
    function d(S) {
      for (var N = this.config, F = 0, M = S.length, x = ""; F < M; F++) {
        var I = S[F];
        if (typeof I == "string")
          x += "__eta.res+='" + I + `'
`;
        else {
          var K = I.t, J = I.val || "";
          N.debug && (x += "__eta.line=" + I.lineNo + `
`), K === "r" ? (N.autoFilter && (J = "__eta.f(" + J + ")"), x += "__eta.res+=" + J + `
`) : K === "i" ? (N.autoFilter && (J = "__eta.f(" + J + ")"), N.autoEscape && (J = "__eta.e(" + J + ")"), x += "__eta.res+=" + J + `
`) : K === "e" && (x += J + `
`);
        }
      }
      return x;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(S) {
      return u[S];
    }
    var C = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(S) {
      var N = String(S);
      return /[&<>"']/.test(N) ? N.replace(/[&<>"']/g, w) : N;
    }, filterFunction: function(S) {
      return String(S);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, T = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, R = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, O = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function D(S) {
      return S.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function j(S, N) {
      return S.slice(0, N).split(`
`).length;
    }
    function z(S) {
      var N = this.config, F = [], M = !1, x = 0, I = N.parse;
      if (N.plugins)
        for (var K = 0; K < N.plugins.length; K++) {
          var J = N.plugins[K];
          J.processTemplate && (S = J.processTemplate(S, N));
        }
      function X(B, Q) {
        B && (B = function(G, _, Z, $) {
          var P, tt;
          return Array.isArray(_.autoTrim) ? (P = _.autoTrim[1], tt = _.autoTrim[0]) : P = tt = _.autoTrim, (Z || Z === !1) && (P = Z), ($ || $ === !1) && (tt = $), tt || P ? P === "slurp" && tt === "slurp" ? G.trim() : (P === "_" || P === "slurp" ? G = G.trimStart() : P !== "-" && P !== "nl" || (G = G.replace(/^(?:\r\n|\n|\r)/, "")), tt === "_" || tt === "slurp" ? G = G.trimEnd() : tt !== "-" && tt !== "nl" || (G = G.replace(/(?:\r\n|\n|\r)$/, "")), G) : G;
        }(B, N, M, Q), B && (B = B.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(B)));
      }
      N.rmWhitespace && (S = S.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), T.lastIndex = 0, R.lastIndex = 0, O.lastIndex = 0;
      for (var ct, gt = [I.exec, I.interpolate, I.raw].reduce(function(B, Q) {
        return B && Q ? B + "|" + D(Q) : Q ? D(Q) : B;
      }, ""), ot = new RegExp(D(N.tags[0]) + "(-|_)?\\s*(" + gt + ")?\\s*", "g"), at = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + D(N.tags[1]) + ")", "g"); ct = ot.exec(S); ) {
        var ft = S.slice(x, ct.index);
        x = ct[0].length + ct.index;
        var ut = ct[2] || "";
        X(ft, ct[1]), at.lastIndex = x;
        for (var mt = void 0, yt = !1; mt = at.exec(S); ) {
          if (mt[1]) {
            var t = S.slice(x, mt.index);
            ot.lastIndex = x = at.lastIndex, M = mt[2], yt = { t: ut === I.exec ? "e" : ut === I.raw ? "r" : ut === I.interpolate ? "i" : "", val: t };
            break;
          }
          var W = mt[0];
          if (W === "/*") {
            var U = S.indexOf("*/", at.lastIndex);
            U === -1 && b("unclosed comment", S, mt.index), at.lastIndex = U;
          } else
            W === "'" ? (R.lastIndex = mt.index, R.exec(S) ? at.lastIndex = R.lastIndex : b("unclosed string", S, mt.index)) : W === '"' ? (O.lastIndex = mt.index, O.exec(S) ? at.lastIndex = O.lastIndex : b("unclosed string", S, mt.index)) : W === "`" && (T.lastIndex = mt.index, T.exec(S) ? at.lastIndex = T.lastIndex : b("unclosed string", S, mt.index));
        }
        yt ? (N.debug && (yt.lineNo = j(S, ct.index)), F.push(yt)) : b("unclosed tag", S, ct.index);
      }
      if (X(S.slice(x, S.length), !1), N.plugins)
        for (var v = 0; v < N.plugins.length; v++) {
          var A = N.plugins[v];
          A.processAST && (F = A.processAST(F, N));
        }
      return F;
    }
    function H(S, N) {
      var F = N && N.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !S.startsWith("@")) {
        var M = N.filepath, x = F.get(M);
        if (this.config.cache && x)
          return x;
        var I = this.readFile(M), K = this.compile(I, N);
        return this.config.cache && F.define(M, K), K;
      }
      var J = F.get(S);
      if (J)
        return J;
      throw new m("Failed to get template '" + S + "'");
    }
    function rt(S, N, F) {
      var M, x = h({}, F, { async: !1 });
      return typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), M = H.call(this, S, x)) : M = S, M.call(this, N, x);
    }
    function k(S, N, F) {
      var M, x = h({}, F, { async: !0 });
      typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (x.filepath = this.resolvePath(S, x)), M = H.call(this, S, x)) : M = S;
      var I = M.call(this, N, x);
      return Promise.resolve(I);
    }
    function V(S, N) {
      var F = this.compile(S, { async: !1 });
      return rt.call(this, F, N);
    }
    function i(S, N) {
      var F = this.compile(S, { async: !0 });
      return k.call(this, F, N);
    }
    var L = /* @__PURE__ */ function() {
      function S(F) {
        this.config = void 0, this.RuntimeErr = y, this.compile = g, this.compileToString = s, this.parse = z, this.render = rt, this.renderAsync = k, this.renderString = V, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new p({}), this.templatesAsync = new p({}), this.resolvePath = null, this.readFile = null, this.config = F ? h({}, C, F) : h({}, C);
      }
      var N = S.prototype;
      return N.configure = function(F) {
        this.config = h({}, this.config, F);
      }, N.withConfig = function(F) {
        return h({}, this, { config: h({}, this.config, F) });
      }, N.loadTemplate = function(F, M, x) {
        if (typeof M == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(M, x));
        else {
          var I = this.templatesSync;
          (M.constructor.name === "AsyncFunction" || x && x.async) && (I = this.templatesAsync), I.define(F, M);
        }
      }, S;
    }(), it = /* @__PURE__ */ function(S) {
      function N() {
        return S.apply(this, arguments) || this;
      }
      return c(N, S), N;
    }(L);
    e.Eta = it;
  });
})(Xt, Xt.exports);
var Ke = Xt.exports;
const qe = new Ke.Eta({
  autoTrim: !1
});
function Vt(E, f) {
  return qe.renderString(E, f);
}
const $e = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# IntelliJ IDEA is not yet fully compatible with configuration cache, see: https://github.com/FabricMC/fabric-loom/issues/1349
org.gradle.configuration-cache=false

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
<% if (!it.mojmap) { %>yarn_mappings=<%= it.yarnVersion %>
<% } %>loader_version=<%= it.loaderVersion %>
loom_version=1.14-SNAPSHOT
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, tn = `plugins {
	id 'net.fabricmc.fabric-loom-remap' version "\${loom_version}"
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
	mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>"net.fabricmc:yarn:\${project.yarn_mappings}:v2"<% } %>
	modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
	<% if (it.kotlin) { %>modImplementation "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
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
	inputs.property "archivesName", project.base.archivesName

	from("LICENSE") {
		rename { "\${it}_\${inputs.properties.archivesName}"}
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
  return Zt(E) >= 17;
}
function rn(E) {
  return Zt(E) >= 19;
}
function Zt(E) {
  return Ee(E)[1];
}
function an(E) {
  return Ee(E)[2];
}
function Ee(E) {
  return E.split("-")[0].split(".").map((e) => parseInt(e));
}
function Ce(E, f) {
  let e = [];
  const h = f ? "Modid" : "Mod Name";
  return E.length == 0 ? [`${h} is empty!`] : (E.length == 1 ? e.push(`${h} is only a single character! (It must be at least 2 characters long)!`) : E.length > 64 && e.push(`${h} has more than 64 characters!`), E.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function sn(E) {
  if (E === void 0)
    return;
  let f = Ce(E, !0) ?? [];
  const e = E.charAt(0);
  (e < "a" || e > "z") && f.push("Modid starts with an invalid character '" + e + "' (it must belowercase a-z)");
  let h = null;
  for (let c = 1; c < E.length; c++) {
    let r = E.charAt(c);
    r == "-" || r == "_" || "0" <= r && r <= "9" || "a" <= r && r <= "z" || (h == null && (h = []), h.push(r));
  }
  if (h != null) {
    let c = "Modid contains invalid characters: " + h.map((r) => "'" + r + "'").join(", ") + "!";
    f.push(c + "!");
  }
  if (f.length != 0)
    return f;
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
}, qt = {
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
  const f = Zt(E);
  return f <= 16 ? cn : f == 17 ? un : f <= 19 || f == 20 && an(E) <= 4 ? qt : hn;
}
const An = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, dn = `
	abstract continue for new switch assert default goto package synchronized
	boolean do if private this break double implements protected throw byte else
	import public throws case enum instanceof return transient catch extends int
	short try char final interface static void class finally long strictfp
	volatile const float native super while _ true false null
`.trim().split(/\s+/), fn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function pn(E) {
  let f = [];
  An.test(E.toLowerCase()) || f.push("Package name is not a valid Java package name!");
  const e = E.split(".").filter((h) => dn.includes(h));
  e.length != 0 && f.push(`Package name contains illegal component: '${e[0]}'`);
  for (let h of fn)
    E.toLowerCase().startsWith(h) ? f.push(`Package name starts with '${h}', which is reserved!`) : E.toLowerCase() + "." == h && f.push(`Package name is '${h}', which is reserved!`);
  return f;
}
async function mn(E, f) {
  await E.write("gradle.properties", Vt($e, f)), await E.write("build.gradle", Vt(tn, { ...f, java: Yt(f.minecraftVersion) })), await E.write("settings.gradle", en);
}
const Se = `package <%= it.packageName %>;

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
async function gn(E, f) {
  const e = f.packageName + ".mixin", h = "ExampleMixin", c = "MinecraftServer", r = "net.minecraft.server.MinecraftServer", a = f.mojmap ? "loadLevel" : "loadWorld", n = {
    required: !0,
    package: e,
    compatibilityLevel: Yt(f.minecraftVersion).mixin,
    mixins: [
      h
    ],
    injectors: {
      defaultRequire: 1
    },
    overwrites: {
      requireAnnotations: !0
    }
  }, o = `${f.modid}.mixins.json`;
  return await E.write(`src/main/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/main/java/${e.replaceAll(".", "/")}/${h}.java`, Vt(Se, {
    className: h,
    packageName: e,
    targetClass: c,
    targetClassFull: r,
    targetMethod: a
  })), [o];
}
async function bn(E, f) {
  const e = f.packageName + ".mixin.client", h = "ExampleClientMixin", c = f.mojmap ? "Minecraft" : "MinecraftClient", r = `net.minecraft.client.${c}`, a = "run", n = {
    required: !0,
    package: e,
    compatibilityLevel: Yt(f.minecraftVersion).mixin,
    client: [
      h
    ],
    injectors: {
      defaultRequire: 1
    }
  }, o = `${f.modid}.client.mixins.json`;
  return await E.write(`src/client/resources/${o}`, JSON.stringify(n, null, "	")), await E.write(`src/client/java/${e.replaceAll(".", "/")}/${h}.java`, Vt(Se, {
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
}`, yn = `package <%= it.package %>

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
}`, kn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, En = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, Cn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function Sn(E, f) {
  const e = xn(f.projectName), h = {
    package: f.packageName,
    className: e,
    classFullName: f.packageName + "." + e,
    path: f.packageName.replaceAll(".", "/") + "/" + e,
    modid: f.modid,
    slf4j: Zt(f.minecraftVersion) >= 18,
    clientEntrypoint: f.splitSources,
    dataEntrypoint: f.dataGeneration
  };
  return f.kotlin ? await Bn(E, h) : await In(E, h);
}
function xn(E) {
  return E.split(" ").map((f) => f[0].toUpperCase() + f.slice(1)).join("").replace(/\W+/g, "");
}
async function In(E, f) {
  var e = {
    main: [
      f.classFullName
    ]
  };
  if (await E.write(`src/main/java/${f.path}.java`, Vt(vn, f)), f.clientEntrypoint && (await E.write(`src/client/java/${f.path}Client.java`, Vt(wn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      f.classFullName + "Client"
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/java/${f.path}DataGenerator.java`, Vt(En, { ...f, className: f.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        f.classFullName + "DataGenerator"
      ]
    };
  }
  return e;
}
async function Bn(E, f) {
  var e = {
    main: [
      {
        value: f.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  if (await E.write(`src/main/kotlin/${f.path}.kt`, Vt(yn, f)), f.clientEntrypoint && (await E.write(`src/client/kotlin/${f.path}Client.kt`, Vt(kn, { ...f, className: f.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: f.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), f.dataEntrypoint) {
    const h = f.clientEntrypoint ? "client" : "main";
    await E.write(`src/${h}/kotlin/${f.path}DataGenerator.kt`, Vt(Cn, { ...f, className: f.className + "DataGenerator" })), e = {
      ...e,
      "fabric-datagen": [
        {
          value: f.classFullName + "DataGenerator",
          adapter: "kotlin"
        }
      ]
    };
  }
  return e;
}
const $t = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Fn(E, f, e) {
  if (!f)
    return Pt($t);
  const h = e.create(128, 128);
  return h != null && Rn(h, E) ? h.getPng() : Pt($t);
}
function Rn(E, f) {
  const e = E.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const h = f.split(/\s+/);
  let c = 0, r = Array(h.length), a = 65;
  for (; ; ) {
    c = 0;
    for (const o of h) {
      let p = a;
      do
        p--, e.font = `${p}px ${Ot}`;
      while (e.measureText(o).width > 124);
      a = Math.min(a, p);
    }
    for (let o = 0; o < h.length; o++) {
      const p = h[o];
      e.font = `${a}px ${Ot}`;
      const m = E.measureText(e, p);
      r[o] = m.ascent + m.descent, c += r[o];
    }
    if (c += (h.length - 1) * 2, c <= 124)
      break;
  }
  const n = (128 - c) / 2;
  for (let o = 0; o < h.length; o++) {
    let p = 0;
    for (const y of r.slice(0, o))
      p += y + 2;
    const m = h[o];
    e.font = `${a}px ${Ot}`, e.fillStyle = "#000000", e.textAlign = "center";
    const b = E.measureText(e, m);
    e.fillText(m, 64, n + p + b.ascent);
  }
  return !0;
}
function _n(E) {
  return Number(E.split(".")[1]) >= 59;
}
async function Tn(E, f, e) {
  const h = [
    ...await gn(E, e),
    ...e.splitSources ? await bn(E, e) : []
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
    entrypoints: await Sn(E, e),
    mixins: h,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + r,
      java: ">=" + Yt(e.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  a.depends[_n(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (a.depends = {
    ...a.depends,
    "fabric-language-kotlin": "*"
  }), await E.write("src/main/resources/fabric.mod.json", JSON.stringify(a, null, "	")), await E.write(`src/main/resources/assets/${e.modid}/icon.png`, Fn(e.projectName, e.uniqueModIcon, f));
}
const Un = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Vn = `Creative Commons Legal Code

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
async function Nn(E, f) {
  await E.write(".gitattributes", Un), await E.write(".gitignore", we), await E.write(".github/workflows/build.yml", ke), await E.write("LICENSE", Vn);
}
const Ot = "Comic Relief";
async function zn(E) {
  const f = await Dn(E.config);
  await He(E), await mn(E.writer, f), await Tn(E.writer, E.canvas, f), await Nn(E.writer);
}
async function xe() {
  let E = await De();
  return E.filter((f) => {
    const e = f.version;
    if (e.startsWith("1.14") && e != "1.14.4")
      return !1;
    if (!f.stable) {
      const h = E[0].version == e, c = e.includes("-pre") || e.includes("-rc");
      return h && c;
    }
    return !0;
  });
}
async function Dn(E) {
  return {
    ...E,
    loaderVersion: (await Ge()).find((f) => f.stable).version,
    fabricVersion: await Oe(E.minecraftVersion),
    yarnVersion: (await We(E.minecraftVersion))[0].version,
    kotlin: await Gn(E)
  };
}
async function Gn(E) {
  if (!E.useKotlin)
    return;
  const e = (await Le()).pop(), h = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: h
  };
}
const On = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Ot,
  generateTemplate: zn,
  getTemplateGameVersions: xe
}, Symbol.toStringTag, { value: "Module" }));
function te(E, f, e) {
  const h = E.slice();
  return h[31] = f[e], h;
}
function ee(E, f, e) {
  const h = E.slice();
  return h[34] = f[e], h;
}
function ne(E, f, e) {
  const h = E.slice();
  return h[34] = f[e], h;
}
function re(E, f, e) {
  const h = E.slice();
  return h[34] = f[e], h;
}
function Wn(E) {
  let f, e, h = (
    /*error*/
    E[34].message + ""
  ), c, r, a;
  return {
    c() {
      f = nt("p"), e = Ft("Error: "), c = Ft(h), r = lt(), a = nt("p"), a.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, zt(f, "color", "red");
    },
    m(n, o) {
      kt(n, f, o), Y(f, e), Y(f, c), kt(n, r, o), kt(n, a, o);
    },
    p: Ut,
    i: Ut,
    o: Ut,
    d(n) {
      n && Et(f), n && Et(r), n && Et(a);
    }
  };
}
function Ln(E) {
  let f, e, h, c, r, a, n, o, p, m, b, y, l, g, s, d, u, w, C, T, R, O, D, j, z, H, rt, k, V, i, L, it, S, N, F, M, x, I, K, J, X, ct, gt, ot, at, ft, ut, mt, yt, t, W, U, v, A, B, Q, G, _, Z, $, P;
  function tt(et, vt) {
    return (
      /*customModId*/
      et[3] != null ? Mn : Qn
    );
  }
  let ht = tt(E), st = ht(E), pt = (
    /*modIdErrors*/
    E[14] != null && ie(E)
  ), Ct = (
    /*customModId*/
    E[3] != null && se(E)
  ), Bt = (
    /*packageNameErrors*/
    E[12]
  ), wt = [];
  for (let et = 0; et < Bt.length; et += 1)
    wt[et] = ce(ee(E, Bt, et));
  let dt = (
    /*data*/
    E[30].game
  ), St = [];
  for (let et = 0; et < dt.length; et += 1)
    St[et] = ue(te(E, dt, et));
  let It = (
    /*supportsDataGen*/
    E[11] && he(E)
  ), bt = (
    /*supportsSplitSources*/
    E[10] && Ae(E)
  );
  const Dt = [Pn, jn], _t = [];
  function Qt(et, vt) {
    return (
      /*loading*/
      et[9] ? 0 : 1
    );
  }
  return G = Qt(E), _ = _t[G] = Dt[G](E), {
    c() {
      f = nt("div"), e = nt("div"), h = nt("h3"), h.textContent = "Mod Name:", c = lt(), r = nt("hr"), a = lt(), st.c(), n = lt(), o = nt("input"), p = lt(), pt && pt.c(), m = lt(), Ct && Ct.c(), b = lt(), y = nt("div"), l = nt("h3"), l.textContent = "Package Name:", g = lt(), s = nt("hr"), d = lt(), u = nt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, w = lt(), C = nt("input"), T = lt();
      for (let et = 0; et < wt.length; et += 1)
        wt[et].c();
      R = lt(), O = nt("div"), D = nt("h3"), D.textContent = "Minecraft Version:", j = lt(), z = nt("hr"), H = lt(), rt = nt("p"), rt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = lt(), V = nt("select");
      for (let et = 0; et < St.length; et += 1)
        St[et].c();
      i = lt(), L = nt("hr"), it = lt(), S = nt("br"), N = lt(), F = nt("h4"), F.textContent = "Advanced Options:", M = lt(), x = nt("div"), I = nt("div"), K = nt("input"), J = lt(), X = nt("label"), X.textContent = "Kotlin Programming Language", ct = lt(), gt = nt("p"), gt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = lt(), at = nt("div"), ft = nt("div"), ut = nt("input"), mt = lt(), yt = nt("label"), yt.textContent = "Mojang Mappings", t = lt(), W = nt("p"), W.textContent = "Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.", U = lt(), It && It.c(), v = lt(), bt && bt.c(), A = lt(), B = nt("br"), Q = lt(), _.c(), q(h, "class", "svelte-c4460r"), q(r, "class", "svelte-c4460r"), q(o, "id", "project-name"), q(o, "class", "svelte-c4460r"), q(e, "class", "form-line svelte-c4460r"), q(l, "class", "svelte-c4460r"), q(s, "class", "svelte-c4460r"), q(u, "class", "svelte-c4460r"), q(C, "id", "package-name"), q(C, "class", "svelte-c4460r"), q(y, "class", "form-line svelte-c4460r"), q(D, "class", "svelte-c4460r"), q(z, "class", "svelte-c4460r"), q(rt, "class", "svelte-c4460r"), q(V, "id", "minecraft-version"), zt(V, "min-width", "200px"), q(V, "class", "svelte-c4460r"), /*minecraftVersion*/
      E[0] === void 0 && Ve(() => (
        /*select_change_handler*/
        E[24].call(V)
      )), q(O, "class", "form-line svelte-c4460r"), q(L, "class", "svelte-c4460r"), q(S, "class", "svelte-c4460r"), q(F, "class", "svelte-c4460r"), q(K, "id", "kotlin"), q(K, "type", "checkbox"), q(K, "class", "option-input svelte-c4460r"), q(X, "for", "kotlin"), q(X, "class", "option-label svelte-c4460r"), q(I, "class", "option-container svelte-c4460r"), q(gt, "class", "option-body svelte-c4460r"), q(x, "class", "svelte-c4460r"), q(ut, "id", "mojmap"), q(ut, "type", "checkbox"), q(ut, "class", "option-input svelte-c4460r"), q(yt, "for", "mojmap"), q(yt, "class", "option-label svelte-c4460r"), q(ft, "class", "option-container svelte-c4460r"), q(W, "class", "option-body svelte-c4460r"), q(at, "class", "svelte-c4460r"), q(B, "class", "svelte-c4460r"), q(f, "class", "template svelte-c4460r");
    },
    m(et, vt) {
      kt(et, f, vt), Y(f, e), Y(e, h), Y(e, c), Y(e, r), Y(e, a), st.m(e, null), Y(e, n), Y(e, o), Nt(
        o,
        /*projectName*/
        E[1]
      ), Y(e, p), pt && pt.m(e, null), Y(f, m), Ct && Ct.m(f, null), Y(f, b), Y(f, y), Y(y, l), Y(y, g), Y(y, s), Y(y, d), Y(y, u), Y(y, w), Y(y, C), Nt(
        C,
        /*packageName*/
        E[2]
      ), Y(y, T);
      for (let xt = 0; xt < wt.length; xt += 1)
        wt[xt] && wt[xt].m(y, null);
      Y(f, R), Y(f, O), Y(O, D), Y(O, j), Y(O, z), Y(O, H), Y(O, rt), Y(O, k), Y(O, V);
      for (let xt = 0; xt < St.length; xt += 1)
        St[xt] && St[xt].m(V, null);
      Kt(
        V,
        /*minecraftVersion*/
        E[0],
        !0
      ), Y(f, i), Y(f, L), Y(f, it), Y(f, S), Y(f, N), Y(f, F), Y(f, M), Y(f, x), Y(x, I), Y(I, K), K.checked = /*useKotlin*/
      E[5], Y(I, J), Y(I, X), Y(x, ct), Y(x, gt), Y(f, ot), Y(f, at), Y(at, ft), Y(ft, ut), ut.checked = /*mojmap*/
      E[6], Y(ft, mt), Y(ft, yt), Y(at, t), Y(at, W), Y(f, U), It && It.m(f, null), Y(f, v), bt && bt.m(f, null), Y(f, A), Y(f, B), Y(f, Q), _t[G].m(f, null), Z = !0, $ || (P = [
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
          C,
          "keyup",
          /*doFormatPackageName*/
          E[18]
        ),
        Rt(
          C,
          "input",
          /*input1_input_handler*/
          E[23]
        ),
        Rt(
          V,
          "change",
          /*select_change_handler*/
          E[24]
        ),
        Rt(
          K,
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
    p(et, vt) {
      if (ht === (ht = tt(et)) && st ? st.p(et, vt) : (st.d(1), st = ht(et), st && (st.c(), st.m(e, n))), vt[0] & /*projectName*/
      2 && o.value !== /*projectName*/
      et[1] && Nt(
        o,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[14] != null ? pt ? pt.p(et, vt) : (pt = ie(et), pt.c(), pt.m(e, null)) : pt && (pt.d(1), pt = null), /*customModId*/
      et[3] != null ? Ct ? Ct.p(et, vt) : (Ct = se(et), Ct.c(), Ct.m(f, b)) : Ct && (Ct.d(1), Ct = null), vt[0] & /*packageName*/
      4 && C.value !== /*packageName*/
      et[2] && Nt(
        C,
        /*packageName*/
        et[2]
      ), vt[0] & /*packageNameErrors*/
      4096) {
        Bt = /*packageNameErrors*/
        et[12];
        let At;
        for (At = 0; At < Bt.length; At += 1) {
          const Gt = ee(et, Bt, At);
          wt[At] ? wt[At].p(Gt, vt) : (wt[At] = ce(Gt), wt[At].c(), wt[At].m(y, null));
        }
        for (; At < wt.length; At += 1)
          wt[At].d(1);
        wt.length = Bt.length;
      }
      if (vt[0] & /*versions*/
      32768) {
        dt = /*data*/
        et[30].game;
        let At;
        for (At = 0; At < dt.length; At += 1) {
          const Gt = te(et, dt, At);
          St[At] ? St[At].p(Gt, vt) : (St[At] = ue(Gt), St[At].c(), St[At].m(V, null));
        }
        for (; At < St.length; At += 1)
          St[At].d(1);
        St.length = dt.length;
      }
      vt[0] & /*minecraftVersion, versions*/
      32769 && Kt(
        V,
        /*minecraftVersion*/
        et[0]
      ), vt[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      et[5]), vt[0] & /*mojmap*/
      64 && (ut.checked = /*mojmap*/
      et[6]), /*supportsDataGen*/
      et[11] ? It ? It.p(et, vt) : (It = he(et), It.c(), It.m(f, v)) : It && (It.d(1), It = null), /*supportsSplitSources*/
      et[10] ? bt ? bt.p(et, vt) : (bt = Ae(et), bt.c(), bt.m(f, A)) : bt && (bt.d(1), bt = null);
      let xt = G;
      G = Qt(et), G === xt ? _t[G].p(et, vt) : (Ne(), Lt(_t[xt], 1, 1, () => {
        _t[xt] = null;
      }), ze(), _ = _t[G], _ ? _.p(et, vt) : (_ = _t[G] = Dt[G](et), _.c()), Wt(_, 1), _.m(f, null));
    },
    i(et) {
      Z || (Wt(_), Z = !0);
    },
    o(et) {
      Lt(_), Z = !1;
    },
    d(et) {
      et && Et(f), st.d(), pt && pt.d(), Ct && Ct.d(), jt(wt, et), jt(St, et), It && It.d(), bt && bt.d(), _t[G].d(), $ = !1, de(P);
    }
  };
}
function Qn(E) {
  let f, e, h, c, r, a, n, o;
  return {
    c() {
      f = nt("p"), e = Ft("Choose a name for your new mod. The mod ID will be "), h = nt("code"), c = Ft(
        /*modid*/
        E[4]
      ), r = Ft(". "), a = nt("a"), a.textContent = "Use custom id", q(h, "class", "svelte-c4460r"), q(a, "href", ""), q(a, "class", "svelte-c4460r"), q(f, "class", "svelte-c4460r");
    },
    m(p, m) {
      kt(p, f, m), Y(f, e), Y(f, h), Y(h, c), Y(f, r), Y(f, a), n || (o = Rt(a, "click", Ht(
        /*useCustomModId*/
        E[19]
      )), n = !0);
    },
    p(p, m) {
      m[0] & /*modid*/
      16 && Jt(
        c,
        /*modid*/
        p[4]
      );
    },
    d(p) {
      p && Et(f), n = !1, o();
    }
  };
}
function Mn(E) {
  let f;
  return {
    c() {
      f = nt("p"), f.textContent = "Choose a name for your new mod.", q(f, "class", "svelte-c4460r");
    },
    m(e, h) {
      kt(e, f, h);
    },
    p: Ut,
    d(e) {
      e && Et(f);
    }
  };
}
function ie(E) {
  let f, e, h = (
    /*modIdErrors*/
    E[14]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = ae(re(E, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      f = lt(), e = nt("br"), q(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, f, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*modIdErrors*/
      16384) {
        h = /*modIdErrors*/
        r[14];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = re(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = ae(o), c[n].c(), c[n].m(f.parentNode, f));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      jt(c, r), r && Et(f), r && Et(e);
    }
  };
}
function ae(E) {
  let f, e = (
    /*error*/
    E[34] + ""
  ), h;
  return {
    c() {
      f = nt("li"), h = Ft(e), zt(f, "color", "red"), q(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p(c, r) {
      r[0] & /*modIdErrors*/
      16384 && e !== (e = /*error*/
      c[34] + "") && Jt(h, e);
    },
    d(c) {
      c && Et(f);
    }
  };
}
function se(E) {
  let f, e, h, c, r, a, n, o, p, m, b, y, l, g = (
    /*customIdErrors*/
    E[13] != null && oe(E)
  );
  return {
    c() {
      f = nt("div"), e = nt("h3"), e.textContent = "Mod ID:", h = lt(), c = nt("hr"), r = lt(), a = nt("p"), n = Ft("Enter the modid you wish to use for your mod. "), o = nt("a"), o.textContent = "Use default", p = lt(), g && g.c(), m = lt(), b = nt("input"), q(e, "class", "svelte-c4460r"), q(c, "class", "svelte-c4460r"), q(o, "href", ""), q(o, "class", "svelte-c4460r"), q(a, "class", "svelte-c4460r"), q(b, "id", "mod-id"), q(b, "class", "svelte-c4460r"), q(f, "class", "form-line svelte-c4460r");
    },
    m(s, d) {
      kt(s, f, d), Y(f, e), Y(f, h), Y(f, c), Y(f, r), Y(f, a), Y(a, n), Y(a, o), Y(f, p), g && g.m(f, null), Y(f, m), Y(f, b), Nt(
        b,
        /*customModId*/
        E[3]
      ), y || (l = [
        Rt(o, "click", Ht(
          /*useDefaultModId*/
          E[20]
        )),
        Rt(
          b,
          "input",
          /*input_input_handler*/
          E[22]
        )
      ], y = !0);
    },
    p(s, d) {
      /*customIdErrors*/
      s[13] != null ? g ? g.p(s, d) : (g = oe(s), g.c(), g.m(f, m)) : g && (g.d(1), g = null), d[0] & /*customModId*/
      8 && b.value !== /*customModId*/
      s[3] && Nt(
        b,
        /*customModId*/
        s[3]
      );
    },
    d(s) {
      s && Et(f), g && g.d(), y = !1, de(l);
    }
  };
}
function oe(E) {
  let f, e, h = (
    /*customIdErrors*/
    E[13]
  ), c = [];
  for (let r = 0; r < h.length; r += 1)
    c[r] = le(ne(E, h, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      f = lt(), e = nt("br"), q(e, "class", "svelte-c4460r");
    },
    m(r, a) {
      for (let n = 0; n < c.length; n += 1)
        c[n] && c[n].m(r, a);
      kt(r, f, a), kt(r, e, a);
    },
    p(r, a) {
      if (a[0] & /*customIdErrors*/
      8192) {
        h = /*customIdErrors*/
        r[13];
        let n;
        for (n = 0; n < h.length; n += 1) {
          const o = ne(r, h, n);
          c[n] ? c[n].p(o, a) : (c[n] = le(o), c[n].c(), c[n].m(f.parentNode, f));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = h.length;
      }
    },
    d(r) {
      jt(c, r), r && Et(f), r && Et(e);
    }
  };
}
function le(E) {
  let f, e = (
    /*error*/
    E[34] + ""
  ), h;
  return {
    c() {
      f = nt("li"), h = Ft(e), zt(f, "color", "red"), q(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p(c, r) {
      r[0] & /*customIdErrors*/
      8192 && e !== (e = /*error*/
      c[34] + "") && Jt(h, e);
    },
    d(c) {
      c && Et(f);
    }
  };
}
function ce(E) {
  let f, e = (
    /*error*/
    E[34] + ""
  ), h;
  return {
    c() {
      f = nt("li"), h = Ft(e), zt(f, "color", "red"), q(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p(c, r) {
      r[0] & /*packageNameErrors*/
      4096 && e !== (e = /*error*/
      c[34] + "") && Jt(h, e);
    },
    d(c) {
      c && Et(f);
    }
  };
}
function ue(E) {
  let f, e = (
    /*version*/
    E[31].version + ""
  ), h;
  return {
    c() {
      f = nt("option"), h = Ft(e), f.__value = /*version*/
      E[31].version, f.value = f.__value, q(f, "class", "svelte-c4460r");
    },
    m(c, r) {
      kt(c, f, r), Y(f, h);
    },
    p: Ut,
    d(c) {
      c && Et(f);
    }
  };
}
function he(E) {
  let f, e, h, c, r, a, n, o, p;
  return {
    c() {
      f = nt("div"), e = nt("div"), h = nt("input"), c = lt(), r = nt("label"), r.textContent = "Data Generation", a = lt(), n = nt("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', q(h, "id", "datagen"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "datagen"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(f, "class", "svelte-c4460r");
    },
    m(m, b) {
      kt(m, f, b), Y(f, e), Y(e, h), h.checked = /*dataGeneration*/
      E[7], Y(e, c), Y(e, r), Y(f, a), Y(f, n), o || (p = Rt(
        h,
        "change",
        /*input_change_handler*/
        E[27]
      ), o = !0);
    },
    p(m, b) {
      b[0] & /*dataGeneration*/
      128 && (h.checked = /*dataGeneration*/
      m[7]);
    },
    d(m) {
      m && Et(f), o = !1, p();
    }
  };
}
function Ae(E) {
  let f, e, h, c, r, a, n, o, p;
  return {
    c() {
      f = nt("div"), e = nt("div"), h = nt("input"), c = lt(), r = nt("label"), r.textContent = "Split client and common sources", a = lt(), n = nt("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, q(h, "id", "splitSources"), q(h, "type", "checkbox"), q(h, "class", "option-input svelte-c4460r"), q(r, "for", "splitSources"), q(r, "class", "option-label svelte-c4460r"), q(e, "class", "option-container svelte-c4460r"), q(n, "class", "option-body svelte-c4460r"), q(f, "class", "svelte-c4460r");
    },
    m(m, b) {
      kt(m, f, b), Y(f, e), Y(e, h), h.checked = /*splitSources*/
      E[8], Y(e, c), Y(e, r), Y(f, a), Y(f, n), o || (p = Rt(
        h,
        "change",
        /*input_change_handler_1*/
        E[28]
      ), o = !0);
    },
    p(m, b) {
      b[0] & /*splitSources*/
      256 && (h.checked = /*splitSources*/
      m[8]);
    },
    d(m) {
      m && Et(f), o = !1, p();
    }
  };
}
function jn(E) {
  let f, e, h, c, r, a;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Ft(" Download Template (.ZIP)"), q(f, "class", "button primary large download-button svelte-c4460r"), q(f, "href", "");
    },
    m(n, o) {
      kt(n, f, o), pe(e, f, null), Y(f, h), c = !0, r || (a = Rt(f, "click", Ht(
        /*generate*/
        E[16]
      )), r = !0);
    },
    p: Ut,
    i(n) {
      c || (Wt(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Lt(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && Et(f), me(e), r = !1, a();
    }
  };
}
function Pn(E) {
  let f, e, h, c;
  return e = new ge({}), {
    c() {
      f = nt("a"), fe(e.$$.fragment), h = Ft(" Generating..."), q(f, "class", "button primary download-button svelte-c4460r"), q(f, "href", "");
    },
    m(r, a) {
      kt(r, f, a), pe(e, f, null), Y(f, h), c = !0;
    },
    p: Ut,
    i(r) {
      c || (Wt(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Lt(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && Et(f), me(e);
    }
  };
}
function Jn(E) {
  let f, e, h, c;
  return {
    c() {
      f = nt("p"), e = Ft(`Loading data
    
        
        `), h = nt("span"), c = Ft("..."), zt(h, "font-family", Ot);
    },
    m(r, a) {
      kt(r, f, a), Y(f, e), Y(f, h), Y(h, c);
    },
    p: Ut,
    i: Ut,
    o: Ut,
    d(r) {
      r && Et(f);
    }
  };
}
function Zn(E) {
  let f, e, h = {
    ctx: E,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Jn,
    then: Ln,
    catch: Wn,
    value: 30,
    error: 34,
    blocks: [, , ,]
  };
  return Re(
    /*versions*/
    E[15],
    h
  ), {
    c() {
      f = _e(), h.block.c();
    },
    m(c, r) {
      kt(c, f, r), h.block.m(c, h.anchor = r), h.mount = () => f.parentNode, h.anchor = f, e = !0;
    },
    p(c, r) {
      E = c, Te(h, E, r);
    },
    i(c) {
      e || (Wt(h.block), e = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const a = h.blocks[r];
        Lt(a);
      }
      e = !1;
    },
    d(c) {
      c && Et(f), h.block.d(c), h.token = null, h = null;
    }
  };
}
function Yn(E, f, e) {
  let h, c, r, a, n, o, p, m = "Template Mod", b = "com.example", y = !1, l = !0, g = !1, s = !0, d, u = !1;
  const w = Promise.all([xe()]).then(([S]) => (e(0, p = S.find((N) => N.stable).version), { game: S }));
  function C(S) {
    if (S !== void 0)
      return Ce(S, d === void 0);
  }
  async function T() {
    if (a !== void 0 || d !== void 0 && n !== void 0 || o.length > 0)
      return;
    e(9, u = !0);
    const S = await Promise.resolve().then(() => On), N = {
      modid: d ?? h,
      minecraftVersion: p,
      projectName: m,
      packageName: b,
      useKotlin: y,
      mojmap: l,
      dataGeneration: g && c,
      splitSources: s && r,
      uniqueModIcon: !0
    }, F = new Me();
    await S.generateTemplate({
      config: N,
      writer: {
        write: async (M, x, I) => {
          F.file(M, x, {
            unixPermissions: I != null && I.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(M, x) {
          const I = document.createElement("canvas");
          return I.width = M, I.height = x, {
            getContext: (K) => I.getContext(K),
            getPng: () => Pt(I.toDataURL().split(";base64,")[1]),
            measureText(K, J) {
              const X = K.measureText(J);
              return {
                width: X.width,
                ascent: X.actualBoundingBoxAscent,
                descent: X.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Pe.saveAs(await F.generateAsync({ type: "blob", platform: "UNIX" }), `${h}-template-${N.minecraftVersion}.zip`), e(9, u = !1);
  }
  function R() {
    e(1, m = m.trim());
  }
  function O() {
    e(2, b = on(b));
  }
  function D() {
    e(3, d = h);
  }
  function j() {
    e(3, d = void 0);
  }
  function z() {
    m = this.value, e(1, m);
  }
  function H() {
    d = this.value, e(3, d);
  }
  function rt() {
    b = this.value, e(2, b);
  }
  function k() {
    p = Ue(this), e(0, p), e(15, w);
  }
  function V() {
    y = this.checked, e(5, y);
  }
  function i() {
    l = this.checked, e(6, l);
  }
  function L() {
    g = this.checked, e(7, g);
  }
  function it() {
    s = this.checked, e(8, s);
  }
  return E.$$.update = () => {
    E.$$.dirty[0] & /*projectName*/
    2 && e(4, h = ln(m)), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(11, c = nn(p || "1.99")), E.$$.dirty[0] & /*minecraftVersion*/
    1 && e(10, r = rn(p || "1.99")), E.$$.dirty[0] & /*modid*/
    16 && e(14, a = C(h)), E.$$.dirty[0] & /*customModId*/
    8 && e(13, n = sn(d)), E.$$.dirty[0] & /*packageName*/
    4 && e(12, o = pn(b));
  }, [
    p,
    m,
    b,
    d,
    h,
    y,
    l,
    g,
    s,
    u,
    r,
    c,
    o,
    n,
    a,
    w,
    T,
    R,
    O,
    D,
    j,
    z,
    H,
    rt,
    k,
    V,
    i,
    L,
    it
  ];
}
class qn extends Ie {
  constructor(f) {
    super(), Be(this, f, Yn, Zn, Fe, {}, null, [-1, -1]);
  }
}
export {
  qn as default
};
