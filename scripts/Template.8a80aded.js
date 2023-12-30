import { S as we, i as ke, s as Ee, h as Ce, b as Se, c as bt, u as xe, r as It, v as Tt, d as vt, f as Be, e as rt, t as xt, a as ht, g as Ot, j as q, n as Nt, o as tt, m as Ne, C as _t, p as Wt, q as St, D as Fe, E as _e, l as Lt, B as ae, k as Ut, z as jt, w as se, x as oe, y as le } from "./index.61dc58cf.js";
import ce from "./DownloadIcon.214b8f5e.js";
import { d as Re, b as Ie, h as Te, i as Oe, j as ze } from "./Api.eb915771.js";
var Bt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ue(B) {
  return B && B.__esModule && Object.prototype.hasOwnProperty.call(B, "default") ? B.default : B;
}
function Vt(B) {
  throw new Error('Could not dynamically require "' + B + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var he = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(B, A) {
  (function(r) {
    B.exports = r();
  })(function() {
    return function r(b, c, n) {
      function s(f, v) {
        if (!c[f]) {
          if (!b[f]) {
            var m = typeof Vt == "function" && Vt;
            if (!v && m)
              return m(f, !0);
            if (e)
              return e(f, !0);
            var y = new Error("Cannot find module '" + f + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var o = c[f] = { exports: {} };
          b[f][0].call(o.exports, function(p) {
            var a = b[f][1][p];
            return s(a || p);
          }, o, o.exports, r, b, c, n);
        }
        return c[f].exports;
      }
      for (var e = typeof Vt == "function" && Vt, l = 0; l < n.length; l++)
        s(n[l]);
      return s;
    }({ 1: [function(r, b, c) {
      var n = r("./utils"), s = r("./support"), e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var f, v, m, y, o, p, a, d = [], u = 0, w = l.length, E = w, I = n.getTypeOf(l) !== "string"; u < l.length; )
          E = w - u, m = I ? (f = l[u++], v = u < w ? l[u++] : 0, u < w ? l[u++] : 0) : (f = l.charCodeAt(u++), v = u < w ? l.charCodeAt(u++) : 0, u < w ? l.charCodeAt(u++) : 0), y = f >> 2, o = (3 & f) << 4 | v >> 4, p = 1 < E ? (15 & v) << 2 | m >> 6 : 64, a = 2 < E ? 63 & m : 64, d.push(e.charAt(y) + e.charAt(o) + e.charAt(p) + e.charAt(a));
        return d.join("");
      }, c.decode = function(l) {
        var f, v, m, y, o, p, a = 0, d = 0, u = "data:";
        if (l.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, E = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === e.charAt(64) && E--, l.charAt(l.length - 2) === e.charAt(64) && E--, E % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); a < l.length; )
          f = e.indexOf(l.charAt(a++)) << 2 | (y = e.indexOf(l.charAt(a++))) >> 4, v = (15 & y) << 4 | (o = e.indexOf(l.charAt(a++))) >> 2, m = (3 & o) << 6 | (p = e.indexOf(l.charAt(a++))), w[d++] = f, o !== 64 && (w[d++] = v), p !== 64 && (w[d++] = m);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(r, b, c) {
      var n = r("./external"), s = r("./stream/DataWorker"), e = r("./stream/Crc32Probe"), l = r("./stream/DataLengthProbe");
      function f(v, m, y, o, p) {
        this.compressedSize = v, this.uncompressedSize = m, this.crc32 = y, this.compression = o, this.compressedContent = p;
      }
      f.prototype = { getContentWorker: function() {
        var v = new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), m = this;
        return v.on("end", function() {
          if (this.streamInfo.data_length !== m.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), v;
      }, getCompressedWorker: function() {
        return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, f.createWorkerFrom = function(v, m, y) {
        return v.pipe(new e()).pipe(new l("uncompressedSize")).pipe(m.compressWorker(y)).pipe(new l("compressedSize")).withStreamInfo("compression", m);
      }, b.exports = f;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(r, b, c) {
      var n = r("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, c.DEFLATE = r("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(r, b, c) {
      var n = r("./utils"), s = function() {
        for (var e, l = [], f = 0; f < 256; f++) {
          e = f;
          for (var v = 0; v < 8; v++)
            e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
          l[f] = e;
        }
        return l;
      }();
      b.exports = function(e, l) {
        return e !== void 0 && e.length ? n.getTypeOf(e) !== "string" ? function(f, v, m, y) {
          var o = s, p = y + m;
          f ^= -1;
          for (var a = y; a < p; a++)
            f = f >>> 8 ^ o[255 & (f ^ v[a])];
          return -1 ^ f;
        }(0 | l, e, e.length, 0) : function(f, v, m, y) {
          var o = s, p = y + m;
          f ^= -1;
          for (var a = y; a < p; a++)
            f = f >>> 8 ^ o[255 & (f ^ v.charCodeAt(a))];
          return -1 ^ f;
        }(0 | l, e, e.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(r, b, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(r, b, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : r("lie"), b.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(r, b, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = r("pako"), e = r("./utils"), l = r("./stream/GenericWorker"), f = n ? "uint8array" : "array";
      function v(m, y) {
        l.call(this, "FlateWorker/" + m), this._pako = null, this._pakoAction = m, this._pakoOptions = y, this.meta = {};
      }
      c.magic = "\b\0", e.inherits(v, l), v.prototype.processChunk = function(m) {
        this.meta = m.meta, this._pako === null && this._createPako(), this._pako.push(e.transformTo(f, m.data), !1);
      }, v.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, v.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, v.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var m = this;
        this._pako.onData = function(y) {
          m.push({ data: y, meta: m.meta });
        };
      }, c.compressWorker = function(m) {
        return new v("Deflate", m);
      }, c.uncompressWorker = function() {
        return new v("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(r, b, c) {
      function n(o, p) {
        var a, d = "";
        for (a = 0; a < p; a++)
          d += String.fromCharCode(255 & o), o >>>= 8;
        return d;
      }
      function s(o, p, a, d, u, w) {
        var E, I, R = o.file, M = o.compression, V = w !== f.utf8encode, W = e.transformTo("string", w(R.name)), z = e.transformTo("string", f.utf8encode(R.name)), J = R.comment, nt = e.transformTo("string", w(J)), k = e.transformTo("string", f.utf8encode(J)), O = z.length !== R.name.length, i = k.length !== J.length, j = "", it = "", C = "", L = R.dir, F = R.date, P = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        p && !a || (P.crc32 = o.crc32, P.compressedSize = o.compressedSize, P.uncompressedSize = o.uncompressedSize);
        var x = 0;
        p && (x |= 8), V || !O && !i || (x |= 2048);
        var N = 0, K = 0;
        L && (N |= 16), u === "UNIX" ? (K = 798, N |= function(H, ut) {
          var mt = H;
          return H || (mt = ut ? 16893 : 33204), (65535 & mt) << 16;
        }(R.unixPermissions, L)) : (K = 20, N |= function(H) {
          return 63 & (H || 0);
        }(R.dosPermissions)), E = F.getUTCHours(), E <<= 6, E |= F.getUTCMinutes(), E <<= 5, E |= F.getUTCSeconds() / 2, I = F.getUTCFullYear() - 1980, I <<= 4, I |= F.getUTCMonth() + 1, I <<= 5, I |= F.getUTCDate(), O && (it = n(1, 1) + n(v(W), 4) + z, j += "up" + n(it.length, 2) + it), i && (C = n(1, 1) + n(v(nt), 4) + k, j += "uc" + n(C.length, 2) + C);
        var Y = "";
        return Y += `
\0`, Y += n(x, 2), Y += M.magic, Y += n(E, 2), Y += n(I, 2), Y += n(P.crc32, 4), Y += n(P.compressedSize, 4), Y += n(P.uncompressedSize, 4), Y += n(W.length, 2), Y += n(j.length, 2), { fileRecord: m.LOCAL_FILE_HEADER + Y + W + j, dirRecord: m.CENTRAL_FILE_HEADER + n(K, 2) + Y + n(nt.length, 2) + "\0\0\0\0" + n(N, 4) + n(d, 4) + W + j + nt };
      }
      var e = r("../utils"), l = r("../stream/GenericWorker"), f = r("../utf8"), v = r("../crc32"), m = r("../signature");
      function y(o, p, a, d) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = p, this.zipPlatform = a, this.encodeFileName = d, this.streamFiles = o, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      e.inherits(y, l), y.prototype.push = function(o) {
        var p = o.meta.percent || 0, a = this.entriesCount, d = this._sources.length;
        this.accumulate ? this.contentBuffer.push(o) : (this.bytesWritten += o.data.length, l.prototype.push.call(this, { data: o.data, meta: { currentFile: this.currentFile, percent: a ? (p + 100 * (a - d - 1)) / a : 100 } }));
      }, y.prototype.openedSource = function(o) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = o.file.name;
        var p = this.streamFiles && !o.file.dir;
        if (p) {
          var a = s(o, p, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: a.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, y.prototype.closedSource = function(o) {
        this.accumulate = !1;
        var p = this.streamFiles && !o.file.dir, a = s(o, p, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(a.dirRecord), p)
          this.push({ data: function(d) {
            return m.DATA_DESCRIPTOR + n(d.crc32, 4) + n(d.compressedSize, 4) + n(d.uncompressedSize, 4);
          }(o), meta: { percent: 100 } });
        else
          for (this.push({ data: a.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, y.prototype.flush = function() {
        for (var o = this.bytesWritten, p = 0; p < this.dirRecords.length; p++)
          this.push({ data: this.dirRecords[p], meta: { percent: 100 } });
        var a = this.bytesWritten - o, d = function(u, w, E, I, R) {
          var M = e.transformTo("string", R(I));
          return m.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(u, 2) + n(u, 2) + n(w, 4) + n(E, 4) + n(M.length, 2) + M;
        }(this.dirRecords.length, a, o, this.zipComment, this.encodeFileName);
        this.push({ data: d, meta: { percent: 100 } });
      }, y.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, y.prototype.registerPrevious = function(o) {
        this._sources.push(o);
        var p = this;
        return o.on("data", function(a) {
          p.processChunk(a);
        }), o.on("end", function() {
          p.closedSource(p.previous.streamInfo), p._sources.length ? p.prepareNextSource() : p.end();
        }), o.on("error", function(a) {
          p.error(a);
        }), this;
      }, y.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, y.prototype.error = function(o) {
        var p = this._sources;
        if (!l.prototype.error.call(this, o))
          return !1;
        for (var a = 0; a < p.length; a++)
          try {
            p[a].error(o);
          } catch {
          }
        return !0;
      }, y.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var o = this._sources, p = 0; p < o.length; p++)
          o[p].lock();
      }, b.exports = y;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(r, b, c) {
      var n = r("../compressions"), s = r("./ZipFileWorker");
      c.generateWorker = function(e, l, f) {
        var v = new s(l.streamFiles, f, l.platform, l.encodeFileName), m = 0;
        try {
          e.forEach(function(y, o) {
            m++;
            var p = function(w, E) {
              var I = w || E, R = n[I];
              if (!R)
                throw new Error(I + " is not a valid compression method !");
              return R;
            }(o.options.compression, l.compression), a = o.options.compressionOptions || l.compressionOptions || {}, d = o.dir, u = o.date;
            o._compressWorker(p, a).withStreamInfo("file", { name: y, dir: d, date: u, comment: o.comment || "", unixPermissions: o.unixPermissions, dosPermissions: o.dosPermissions }).pipe(v);
          }), v.entriesCount = m;
        } catch (y) {
          v.error(y);
        }
        return v;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(r, b, c) {
      function n() {
        if (!(this instanceof n))
          return new n();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new n();
          for (var e in this)
            typeof this[e] != "function" && (s[e] = this[e]);
          return s;
        };
      }
      (n.prototype = r("./object")).loadAsync = r("./load"), n.support = r("./support"), n.defaults = r("./defaults"), n.version = "3.10.1", n.loadAsync = function(s, e) {
        return new n().loadAsync(s, e);
      }, n.external = r("./external"), b.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(r, b, c) {
      var n = r("./utils"), s = r("./external"), e = r("./utf8"), l = r("./zipEntries"), f = r("./stream/Crc32Probe"), v = r("./nodejsUtils");
      function m(y) {
        return new s.Promise(function(o, p) {
          var a = y.decompressed.getContentWorker().pipe(new f());
          a.on("error", function(d) {
            p(d);
          }).on("end", function() {
            a.streamInfo.crc32 !== y.decompressed.crc32 ? p(new Error("Corrupted zip : CRC32 mismatch")) : o();
          }).resume();
        });
      }
      b.exports = function(y, o) {
        var p = this;
        return o = n.extend(o || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: e.utf8decode }), v.isNode && v.isStream(y) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", y, !0, o.optimizedBinaryString, o.base64).then(function(a) {
          var d = new l(o);
          return d.load(a), d;
        }).then(function(a) {
          var d = [s.Promise.resolve(a)], u = a.files;
          if (o.checkCRC32)
            for (var w = 0; w < u.length; w++)
              d.push(m(u[w]));
          return s.Promise.all(d);
        }).then(function(a) {
          for (var d = a.shift(), u = d.files, w = 0; w < u.length; w++) {
            var E = u[w], I = E.fileNameStr, R = n.resolve(E.fileNameStr);
            p.file(R, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: o.createFolders }), E.dir || (p.file(R).unsafeOriginalName = I);
          }
          return d.zipComment.length && (p.comment = d.zipComment), p;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(r, b, c) {
      var n = r("../utils"), s = r("../stream/GenericWorker");
      function e(l, f) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(f);
      }
      n.inherits(e, s), e.prototype._bindStream = function(l) {
        var f = this;
        (this._stream = l).pause(), l.on("data", function(v) {
          f.push({ data: v, meta: { percent: 0 } });
        }).on("error", function(v) {
          f.isPaused ? this.generatedError = v : f.error(v);
        }).on("end", function() {
          f.isPaused ? f._upstreamEnded = !0 : f.end();
        });
      }, e.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, e.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, b.exports = e;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(r, b, c) {
      var n = r("readable-stream").Readable;
      function s(e, l, f) {
        n.call(this, l), this._helper = e;
        var v = this;
        e.on("data", function(m, y) {
          v.push(m) || v._helper.pause(), f && f(y);
        }).on("error", function(m) {
          v.emit("error", m);
        }).on("end", function() {
          v.push(null);
        });
      }
      r("../utils").inherits(s, n), s.prototype._read = function() {
        this._helper.resume();
      }, b.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(r, b, c) {
      b.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(n, s);
        if (typeof n == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(n, s);
      }, allocBuffer: function(n) {
        if (Buffer.alloc)
          return Buffer.alloc(n);
        var s = new Buffer(n);
        return s.fill(0), s;
      }, isBuffer: function(n) {
        return Buffer.isBuffer(n);
      }, isStream: function(n) {
        return n && typeof n.on == "function" && typeof n.pause == "function" && typeof n.resume == "function";
      } };
    }, {}], 15: [function(r, b, c) {
      function n(R, M, V) {
        var W, z = e.getTypeOf(M), J = e.extend(V || {}, v);
        J.date = J.date || /* @__PURE__ */ new Date(), J.compression !== null && (J.compression = J.compression.toUpperCase()), typeof J.unixPermissions == "string" && (J.unixPermissions = parseInt(J.unixPermissions, 8)), J.unixPermissions && 16384 & J.unixPermissions && (J.dir = !0), J.dosPermissions && 16 & J.dosPermissions && (J.dir = !0), J.dir && (R = u(R)), J.createFolders && (W = d(R)) && w.call(this, W, !0);
        var nt = z === "string" && J.binary === !1 && J.base64 === !1;
        V && V.binary !== void 0 || (J.binary = !nt), (M instanceof m && M.uncompressedSize === 0 || J.dir || !M || M.length === 0) && (J.base64 = !1, J.binary = !0, M = "", J.compression = "STORE", z = "string");
        var k = null;
        k = M instanceof m || M instanceof l ? M : p.isNode && p.isStream(M) ? new a(R, M) : e.prepareContent(R, M, J.binary, J.optimizedBinaryString, J.base64);
        var O = new y(R, k, J);
        this.files[R] = O;
      }
      var s = r("./utf8"), e = r("./utils"), l = r("./stream/GenericWorker"), f = r("./stream/StreamHelper"), v = r("./defaults"), m = r("./compressedObject"), y = r("./zipObject"), o = r("./generate"), p = r("./nodejsUtils"), a = r("./nodejs/NodejsStreamInputAdapter"), d = function(R) {
        R.slice(-1) === "/" && (R = R.substring(0, R.length - 1));
        var M = R.lastIndexOf("/");
        return 0 < M ? R.substring(0, M) : "";
      }, u = function(R) {
        return R.slice(-1) !== "/" && (R += "/"), R;
      }, w = function(R, M) {
        return M = M !== void 0 ? M : v.createFolders, R = u(R), this.files[R] || n.call(this, R, null, { dir: !0, createFolders: M }), this.files[R];
      };
      function E(R) {
        return Object.prototype.toString.call(R) === "[object RegExp]";
      }
      var I = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(R) {
        var M, V, W;
        for (M in this.files)
          W = this.files[M], (V = M.slice(this.root.length, M.length)) && M.slice(0, this.root.length) === this.root && R(V, W);
      }, filter: function(R) {
        var M = [];
        return this.forEach(function(V, W) {
          R(V, W) && M.push(W);
        }), M;
      }, file: function(R, M, V) {
        if (arguments.length !== 1)
          return R = this.root + R, n.call(this, R, M, V), this;
        if (E(R)) {
          var W = R;
          return this.filter(function(J, nt) {
            return !nt.dir && W.test(J);
          });
        }
        var z = this.files[this.root + R];
        return z && !z.dir ? z : null;
      }, folder: function(R) {
        if (!R)
          return this;
        if (E(R))
          return this.filter(function(z, J) {
            return J.dir && R.test(z);
          });
        var M = this.root + R, V = w.call(this, M), W = this.clone();
        return W.root = V.name, W;
      }, remove: function(R) {
        R = this.root + R;
        var M = this.files[R];
        if (M || (R.slice(-1) !== "/" && (R += "/"), M = this.files[R]), M && !M.dir)
          delete this.files[R];
        else
          for (var V = this.filter(function(z, J) {
            return J.name.slice(0, R.length) === R;
          }), W = 0; W < V.length; W++)
            delete this.files[V[W].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(R) {
        var M, V = {};
        try {
          if ((V = e.extend(R || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = V.type.toLowerCase(), V.compression = V.compression.toUpperCase(), V.type === "binarystring" && (V.type = "string"), !V.type)
            throw new Error("No output type specified.");
          e.checkSupport(V.type), V.platform !== "darwin" && V.platform !== "freebsd" && V.platform !== "linux" && V.platform !== "sunos" || (V.platform = "UNIX"), V.platform === "win32" && (V.platform = "DOS");
          var W = V.comment || this.comment || "";
          M = o.generateWorker(this, V, W);
        } catch (z) {
          (M = new l("error")).error(z);
        }
        return new f(M, V.type || "string", V.mimeType);
      }, generateAsync: function(R, M) {
        return this.generateInternalStream(R).accumulate(M);
      }, generateNodeStream: function(R, M) {
        return (R = R || {}).type || (R.type = "nodebuffer"), this.generateInternalStream(R).toNodejsStream(M);
      } };
      b.exports = I;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(r, b, c) {
      b.exports = r("stream");
    }, { stream: void 0 }], 17: [function(r, b, c) {
      var n = r("./DataReader");
      function s(e) {
        n.call(this, e);
        for (var l = 0; l < this.data.length; l++)
          e[l] = 255 & e[l];
      }
      r("../utils").inherits(s, n), s.prototype.byteAt = function(e) {
        return this.data[this.zero + e];
      }, s.prototype.lastIndexOfSignature = function(e) {
        for (var l = e.charCodeAt(0), f = e.charCodeAt(1), v = e.charCodeAt(2), m = e.charCodeAt(3), y = this.length - 4; 0 <= y; --y)
          if (this.data[y] === l && this.data[y + 1] === f && this.data[y + 2] === v && this.data[y + 3] === m)
            return y - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(e) {
        var l = e.charCodeAt(0), f = e.charCodeAt(1), v = e.charCodeAt(2), m = e.charCodeAt(3), y = this.readData(4);
        return l === y[0] && f === y[1] && v === y[2] && m === y[3];
      }, s.prototype.readData = function(e) {
        if (this.checkOffset(e), e === 0)
          return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, b.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(r, b, c) {
      var n = r("../utils");
      function s(e) {
        this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(e) {
        this.checkIndex(this.index + e);
      }, checkIndex: function(e) {
        if (this.length < this.zero + e || e < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
      }, setIndex: function(e) {
        this.checkIndex(e), this.index = e;
      }, skip: function(e) {
        this.setIndex(this.index + e);
      }, byteAt: function() {
      }, readInt: function(e) {
        var l, f = 0;
        for (this.checkOffset(e), l = this.index + e - 1; l >= this.index; l--)
          f = (f << 8) + this.byteAt(l);
        return this.index += e, f;
      }, readString: function(e) {
        return n.transformTo("string", this.readData(e));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var e = this.readInt(4);
        return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
      } }, b.exports = s;
    }, { "../utils": 32 }], 19: [function(r, b, c) {
      var n = r("./Uint8ArrayReader");
      function s(e) {
        n.call(this, e);
      }
      r("../utils").inherits(s, n), s.prototype.readData = function(e) {
        this.checkOffset(e);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, b.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(r, b, c) {
      var n = r("./DataReader");
      function s(e) {
        n.call(this, e);
      }
      r("../utils").inherits(s, n), s.prototype.byteAt = function(e) {
        return this.data.charCodeAt(this.zero + e);
      }, s.prototype.lastIndexOfSignature = function(e) {
        return this.data.lastIndexOf(e) - this.zero;
      }, s.prototype.readAndCheckSignature = function(e) {
        return e === this.readData(4);
      }, s.prototype.readData = function(e) {
        this.checkOffset(e);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, b.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(r, b, c) {
      var n = r("./ArrayReader");
      function s(e) {
        n.call(this, e);
      }
      r("../utils").inherits(s, n), s.prototype.readData = function(e) {
        if (this.checkOffset(e), e === 0)
          return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
        return this.index += e, l;
      }, b.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(r, b, c) {
      var n = r("../utils"), s = r("../support"), e = r("./ArrayReader"), l = r("./StringReader"), f = r("./NodeBufferReader"), v = r("./Uint8ArrayReader");
      b.exports = function(m) {
        var y = n.getTypeOf(m);
        return n.checkSupport(y), y !== "string" || s.uint8array ? y === "nodebuffer" ? new f(m) : s.uint8array ? new v(n.transformTo("uint8array", m)) : new e(n.transformTo("array", m)) : new l(m);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(r, b, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(r, b, c) {
      var n = r("./GenericWorker"), s = r("../utils");
      function e(l) {
        n.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(e, n), e.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, b.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(r, b, c) {
      var n = r("./GenericWorker"), s = r("../crc32");
      function e() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      r("../utils").inherits(e, n), e.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, b.exports = e;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(r, b, c) {
      var n = r("../utils"), s = r("./GenericWorker");
      function e(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      n.inherits(e, s), e.prototype.processChunk = function(l) {
        if (l) {
          var f = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = f + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, b.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(r, b, c) {
      var n = r("../utils"), s = r("./GenericWorker");
      function e(l) {
        s.call(this, "DataWorker");
        var f = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(v) {
          f.dataIsReady = !0, f.data = v, f.max = v && v.length || 0, f.type = n.getTypeOf(v), f.isPaused || f._tickAndRepeat();
        }, function(v) {
          f.error(v);
        });
      }
      n.inherits(e, s), e.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, e.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
      }, e.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, e.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var l = null, f = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, f);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, f);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, f);
        }
        return this.index = f, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, b.exports = e;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(r, b, c) {
      function n(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      n.prototype = { push: function(s) {
        this.emit("data", s);
      }, end: function() {
        if (this.isFinished)
          return !1;
        this.flush();
        try {
          this.emit("end"), this.cleanUp(), this.isFinished = !0;
        } catch (s) {
          this.emit("error", s);
        }
        return !0;
      }, error: function(s) {
        return !this.isFinished && (this.isPaused ? this.generatedError = s : (this.isFinished = !0, this.emit("error", s), this.previous && this.previous.error(s), this.cleanUp()), !0);
      }, on: function(s, e) {
        return this._listeners[s].push(e), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, e) {
        if (this._listeners[s])
          for (var l = 0; l < this._listeners[s].length; l++)
            this._listeners[s][l].call(this, e);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var e = this;
        return s.on("data", function(l) {
          e.processChunk(l);
        }), s.on("end", function() {
          e.end();
        }), s.on("error", function(l) {
          e.error(l);
        }), this;
      }, pause: function() {
        return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
      }, resume: function() {
        if (!this.isPaused || this.isFinished)
          return !1;
        var s = this.isPaused = !1;
        return this.generatedError && (this.error(this.generatedError), s = !0), this.previous && this.previous.resume(), !s;
      }, flush: function() {
      }, processChunk: function(s) {
        this.push(s);
      }, withStreamInfo: function(s, e) {
        return this.extraStreamInfo[s] = e, this.mergeStreamInfo(), this;
      }, mergeStreamInfo: function() {
        for (var s in this.extraStreamInfo)
          Object.prototype.hasOwnProperty.call(this.extraStreamInfo, s) && (this.streamInfo[s] = this.extraStreamInfo[s]);
      }, lock: function() {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.isLocked = !0, this.previous && this.previous.lock();
      }, toString: function() {
        var s = "Worker " + this.name;
        return this.previous ? this.previous + " -> " + s : s;
      } }, b.exports = n;
    }, {}], 29: [function(r, b, c) {
      var n = r("../utils"), s = r("./ConvertWorker"), e = r("./GenericWorker"), l = r("../base64"), f = r("../support"), v = r("../external"), m = null;
      if (f.nodestream)
        try {
          m = r("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function y(p, a) {
        return new v.Promise(function(d, u) {
          var w = [], E = p._internalType, I = p._outputType, R = p._mimeType;
          p.on("data", function(M, V) {
            w.push(M), a && a(V);
          }).on("error", function(M) {
            w = [], u(M);
          }).on("end", function() {
            try {
              var M = function(V, W, z) {
                switch (V) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", W), z);
                  case "base64":
                    return l.encode(W);
                  default:
                    return n.transformTo(V, W);
                }
              }(I, function(V, W) {
                var z, J = 0, nt = null, k = 0;
                for (z = 0; z < W.length; z++)
                  k += W[z].length;
                switch (V) {
                  case "string":
                    return W.join("");
                  case "array":
                    return Array.prototype.concat.apply([], W);
                  case "uint8array":
                    for (nt = new Uint8Array(k), z = 0; z < W.length; z++)
                      nt.set(W[z], J), J += W[z].length;
                    return nt;
                  case "nodebuffer":
                    return Buffer.concat(W);
                  default:
                    throw new Error("concat : unsupported type '" + V + "'");
                }
              }(E, w), R);
              d(M);
            } catch (V) {
              u(V);
            }
            w = [];
          }).resume();
        });
      }
      function o(p, a, d) {
        var u = a;
        switch (a) {
          case "blob":
          case "arraybuffer":
            u = "uint8array";
            break;
          case "base64":
            u = "string";
        }
        try {
          this._internalType = u, this._outputType = a, this._mimeType = d, n.checkSupport(u), this._worker = p.pipe(new s(u)), p.lock();
        } catch (w) {
          this._worker = new e("error"), this._worker.error(w);
        }
      }
      o.prototype = { accumulate: function(p) {
        return y(this, p);
      }, on: function(p, a) {
        var d = this;
        return p === "data" ? this._worker.on(p, function(u) {
          a.call(d, u.data, u.meta);
        }) : this._worker.on(p, function() {
          n.delay(a, arguments, d);
        }), this;
      }, resume: function() {
        return n.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(p) {
        if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new m(this, { objectMode: this._outputType !== "nodebuffer" }, p);
      } }, b.exports = o;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(r, b, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        c.blob = !1;
      else {
        var n = new ArrayBuffer(0);
        try {
          c.blob = new Blob([n], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(n), c.blob = s.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!r("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(r, b, c) {
      for (var n = r("./utils"), s = r("./support"), e = r("./nodejsUtils"), l = r("./stream/GenericWorker"), f = new Array(256), v = 0; v < 256; v++)
        f[v] = 252 <= v ? 6 : 248 <= v ? 5 : 240 <= v ? 4 : 224 <= v ? 3 : 192 <= v ? 2 : 1;
      f[254] = f[254] = 1;
      function m() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function y() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(o) {
        return s.nodebuffer ? e.newBufferFrom(o, "utf-8") : function(p) {
          var a, d, u, w, E, I = p.length, R = 0;
          for (w = 0; w < I; w++)
            (64512 & (d = p.charCodeAt(w))) == 55296 && w + 1 < I && (64512 & (u = p.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), R += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (a = s.uint8array ? new Uint8Array(R) : new Array(R), w = E = 0; E < R; w++)
            (64512 & (d = p.charCodeAt(w))) == 55296 && w + 1 < I && (64512 & (u = p.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (u - 56320), w++), d < 128 ? a[E++] = d : (d < 2048 ? a[E++] = 192 | d >>> 6 : (d < 65536 ? a[E++] = 224 | d >>> 12 : (a[E++] = 240 | d >>> 18, a[E++] = 128 | d >>> 12 & 63), a[E++] = 128 | d >>> 6 & 63), a[E++] = 128 | 63 & d);
          return a;
        }(o);
      }, c.utf8decode = function(o) {
        return s.nodebuffer ? n.transformTo("nodebuffer", o).toString("utf-8") : function(p) {
          var a, d, u, w, E = p.length, I = new Array(2 * E);
          for (a = d = 0; a < E; )
            if ((u = p[a++]) < 128)
              I[d++] = u;
            else if (4 < (w = f[u]))
              I[d++] = 65533, a += w - 1;
            else {
              for (u &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && a < E; )
                u = u << 6 | 63 & p[a++], w--;
              1 < w ? I[d++] = 65533 : u < 65536 ? I[d++] = u : (u -= 65536, I[d++] = 55296 | u >> 10 & 1023, I[d++] = 56320 | 1023 & u);
            }
          return I.length !== d && (I.subarray ? I = I.subarray(0, d) : I.length = d), n.applyFromCharCode(I);
        }(o = n.transformTo(s.uint8array ? "uint8array" : "array", o));
      }, n.inherits(m, l), m.prototype.processChunk = function(o) {
        var p = n.transformTo(s.uint8array ? "uint8array" : "array", o.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var a = p;
            (p = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), p.set(a, this.leftOver.length);
          } else
            p = this.leftOver.concat(p);
          this.leftOver = null;
        }
        var d = function(w, E) {
          var I;
          for ((E = E || w.length) > w.length && (E = w.length), I = E - 1; 0 <= I && (192 & w[I]) == 128; )
            I--;
          return I < 0 || I === 0 ? E : I + f[w[I]] > E ? I : E;
        }(p), u = p;
        d !== p.length && (s.uint8array ? (u = p.subarray(0, d), this.leftOver = p.subarray(d, p.length)) : (u = p.slice(0, d), this.leftOver = p.slice(d, p.length))), this.push({ data: c.utf8decode(u), meta: o.meta });
      }, m.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = m, n.inherits(y, l), y.prototype.processChunk = function(o) {
        this.push({ data: c.utf8encode(o.data), meta: o.meta });
      }, c.Utf8EncodeWorker = y;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(r, b, c) {
      var n = r("./support"), s = r("./base64"), e = r("./nodejsUtils"), l = r("./external");
      function f(a) {
        return a;
      }
      function v(a, d) {
        for (var u = 0; u < a.length; ++u)
          d[u] = 255 & a.charCodeAt(u);
        return d;
      }
      r("setimmediate"), c.newBlob = function(a, d) {
        c.checkSupport("blob");
        try {
          return new Blob([a], { type: d });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(a), u.getBlob(d);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var m = { stringifyByChunk: function(a, d, u) {
        var w = [], E = 0, I = a.length;
        if (I <= u)
          return String.fromCharCode.apply(null, a);
        for (; E < I; )
          d === "array" || d === "nodebuffer" ? w.push(String.fromCharCode.apply(null, a.slice(E, Math.min(E + u, I)))) : w.push(String.fromCharCode.apply(null, a.subarray(E, Math.min(E + u, I)))), E += u;
        return w.join("");
      }, stringifyByChar: function(a) {
        for (var d = "", u = 0; u < a.length; u++)
          d += String.fromCharCode(a[u]);
        return d;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return n.nodebuffer && String.fromCharCode.apply(null, e.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function y(a) {
        var d = 65536, u = c.getTypeOf(a), w = !0;
        if (u === "uint8array" ? w = m.applyCanBeUsed.uint8array : u === "nodebuffer" && (w = m.applyCanBeUsed.nodebuffer), w)
          for (; 1 < d; )
            try {
              return m.stringifyByChunk(a, u, d);
            } catch {
              d = Math.floor(d / 2);
            }
        return m.stringifyByChar(a);
      }
      function o(a, d) {
        for (var u = 0; u < a.length; u++)
          d[u] = a[u];
        return d;
      }
      c.applyFromCharCode = y;
      var p = {};
      p.string = { string: f, array: function(a) {
        return v(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return p.string.uint8array(a).buffer;
      }, uint8array: function(a) {
        return v(a, new Uint8Array(a.length));
      }, nodebuffer: function(a) {
        return v(a, e.allocBuffer(a.length));
      } }, p.array = { string: y, array: f, arraybuffer: function(a) {
        return new Uint8Array(a).buffer;
      }, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return e.newBufferFrom(a);
      } }, p.arraybuffer = { string: function(a) {
        return y(new Uint8Array(a));
      }, array: function(a) {
        return o(new Uint8Array(a), new Array(a.byteLength));
      }, arraybuffer: f, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return e.newBufferFrom(new Uint8Array(a));
      } }, p.uint8array = { string: y, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return a.buffer;
      }, uint8array: f, nodebuffer: function(a) {
        return e.newBufferFrom(a);
      } }, p.nodebuffer = { string: y, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return p.nodebuffer.uint8array(a).buffer;
      }, uint8array: function(a) {
        return o(a, new Uint8Array(a.length));
      }, nodebuffer: f }, c.transformTo = function(a, d) {
        if (d = d || "", !a)
          return d;
        c.checkSupport(a);
        var u = c.getTypeOf(d);
        return p[u][a](d);
      }, c.resolve = function(a) {
        for (var d = a.split("/"), u = [], w = 0; w < d.length; w++) {
          var E = d[w];
          E === "." || E === "" && w !== 0 && w !== d.length - 1 || (E === ".." ? u.pop() : u.push(E));
        }
        return u.join("/");
      }, c.getTypeOf = function(a) {
        return typeof a == "string" ? "string" : Object.prototype.toString.call(a) === "[object Array]" ? "array" : n.nodebuffer && e.isBuffer(a) ? "nodebuffer" : n.uint8array && a instanceof Uint8Array ? "uint8array" : n.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(a) {
        if (!n[a.toLowerCase()])
          throw new Error(a + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(a) {
        var d, u, w = "";
        for (u = 0; u < (a || "").length; u++)
          w += "\\x" + ((d = a.charCodeAt(u)) < 16 ? "0" : "") + d.toString(16).toUpperCase();
        return w;
      }, c.delay = function(a, d, u) {
        setImmediate(function() {
          a.apply(u || null, d || []);
        });
      }, c.inherits = function(a, d) {
        function u() {
        }
        u.prototype = d.prototype, a.prototype = new u();
      }, c.extend = function() {
        var a, d, u = {};
        for (a = 0; a < arguments.length; a++)
          for (d in arguments[a])
            Object.prototype.hasOwnProperty.call(arguments[a], d) && u[d] === void 0 && (u[d] = arguments[a][d]);
        return u;
      }, c.prepareContent = function(a, d, u, w, E) {
        return l.Promise.resolve(d).then(function(I) {
          return n.blob && (I instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(I)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(R, M) {
            var V = new FileReader();
            V.onload = function(W) {
              R(W.target.result);
            }, V.onerror = function(W) {
              M(W.target.error);
            }, V.readAsArrayBuffer(I);
          }) : I;
        }).then(function(I) {
          var R = c.getTypeOf(I);
          return R ? (R === "arraybuffer" ? I = c.transformTo("uint8array", I) : R === "string" && (E ? I = s.decode(I) : u && w !== !0 && (I = function(M) {
            return v(M, n.uint8array ? new Uint8Array(M.length) : new Array(M.length));
          }(I))), I) : l.Promise.reject(new Error("Can't read the data of '" + a + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(r, b, c) {
      var n = r("./reader/readerFor"), s = r("./utils"), e = r("./signature"), l = r("./zipEntry"), f = r("./support");
      function v(m) {
        this.files = [], this.loadOptions = m;
      }
      v.prototype = { checkSignature: function(m) {
        if (!this.reader.readAndCheckSignature(m)) {
          this.reader.index -= 4;
          var y = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(y) + ", expected " + s.pretty(m) + ")");
        }
      }, isSignature: function(m, y) {
        var o = this.reader.index;
        this.reader.setIndex(m);
        var p = this.reader.readString(4) === y;
        return this.reader.setIndex(o), p;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var m = this.reader.readData(this.zipCommentLength), y = f.uint8array ? "uint8array" : "array", o = s.transformTo(y, m);
        this.zipComment = this.loadOptions.decodeFileName(o);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var m, y, o, p = this.zip64EndOfCentralSize - 44; 0 < p; )
          m = this.reader.readInt(2), y = this.reader.readInt(4), o = this.reader.readData(y), this.zip64ExtensibleData[m] = { id: m, length: y, value: o };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var m, y;
        for (m = 0; m < this.files.length; m++)
          y = this.files[m], this.reader.setIndex(y.localHeaderOffset), this.checkSignature(e.LOCAL_FILE_HEADER), y.readLocalPart(this.reader), y.handleUTF8(), y.processAttributes();
      }, readCentralDir: function() {
        var m;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(e.CENTRAL_FILE_HEADER); )
          (m = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(m);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var m = this.reader.lastIndexOfSignature(e.CENTRAL_DIRECTORY_END);
        if (m < 0)
          throw this.isSignature(0, e.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(m);
        var y = m;
        if (this.checkSignature(e.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (m = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(m), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, e.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(e.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var o = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (o += 20, o += 12 + this.zip64EndOfCentralSize);
        var p = y - o;
        if (0 < p)
          this.isSignature(y, e.CENTRAL_FILE_HEADER) || (this.reader.zero = p);
        else if (p < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(p) + " bytes.");
      }, prepareReader: function(m) {
        this.reader = n(m);
      }, load: function(m) {
        this.prepareReader(m), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, b.exports = v;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(r, b, c) {
      var n = r("./reader/readerFor"), s = r("./utils"), e = r("./compressedObject"), l = r("./crc32"), f = r("./utf8"), v = r("./compressions"), m = r("./support");
      function y(o, p) {
        this.options = o, this.loadOptions = p;
      }
      y.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(o) {
        var p, a;
        if (o.skip(22), this.fileNameLength = o.readInt(2), a = o.readInt(2), this.fileName = o.readData(this.fileNameLength), o.skip(a), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((p = function(d) {
          for (var u in v)
            if (Object.prototype.hasOwnProperty.call(v, u) && v[u].magic === d)
              return v[u];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new e(this.compressedSize, this.uncompressedSize, this.crc32, p, o.readData(this.compressedSize));
      }, readCentralPart: function(o) {
        this.versionMadeBy = o.readInt(2), o.skip(2), this.bitFlag = o.readInt(2), this.compressionMethod = o.readString(2), this.date = o.readDate(), this.crc32 = o.readInt(4), this.compressedSize = o.readInt(4), this.uncompressedSize = o.readInt(4);
        var p = o.readInt(2);
        if (this.extraFieldsLength = o.readInt(2), this.fileCommentLength = o.readInt(2), this.diskNumberStart = o.readInt(2), this.internalFileAttributes = o.readInt(2), this.externalFileAttributes = o.readInt(4), this.localHeaderOffset = o.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        o.skip(p), this.readExtraFields(o), this.parseZIP64ExtraField(o), this.fileComment = o.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var o = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), o == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), o == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var o = n(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = o.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = o.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = o.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = o.readInt(4));
        }
      }, readExtraFields: function(o) {
        var p, a, d, u = o.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); o.index + 4 < u; )
          p = o.readInt(2), a = o.readInt(2), d = o.readData(a), this.extraFields[p] = { id: p, length: a, value: d };
        o.setIndex(u);
      }, handleUTF8: function() {
        var o = m.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = f.utf8decode(this.fileName), this.fileCommentStr = f.utf8decode(this.fileComment);
        else {
          var p = this.findExtraFieldUnicodePath();
          if (p !== null)
            this.fileNameStr = p;
          else {
            var a = s.transformTo(o, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(a);
          }
          var d = this.findExtraFieldUnicodeComment();
          if (d !== null)
            this.fileCommentStr = d;
          else {
            var u = s.transformTo(o, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var o = this.extraFields[28789];
        if (o) {
          var p = n(o.value);
          return p.readInt(1) !== 1 || l(this.fileName) !== p.readInt(4) ? null : f.utf8decode(p.readData(o.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var o = this.extraFields[25461];
        if (o) {
          var p = n(o.value);
          return p.readInt(1) !== 1 || l(this.fileComment) !== p.readInt(4) ? null : f.utf8decode(p.readData(o.length - 5));
        }
        return null;
      } }, b.exports = y;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(r, b, c) {
      function n(p, a, d) {
        this.name = p, this.dir = d.dir, this.date = d.date, this.comment = d.comment, this.unixPermissions = d.unixPermissions, this.dosPermissions = d.dosPermissions, this._data = a, this._dataBinary = d.binary, this.options = { compression: d.compression, compressionOptions: d.compressionOptions };
      }
      var s = r("./stream/StreamHelper"), e = r("./stream/DataWorker"), l = r("./utf8"), f = r("./compressedObject"), v = r("./stream/GenericWorker");
      n.prototype = { internalStream: function(p) {
        var a = null, d = "string";
        try {
          if (!p)
            throw new Error("No output type specified.");
          var u = (d = p.toLowerCase()) === "string" || d === "text";
          d !== "binarystring" && d !== "text" || (d = "string"), a = this._decompressWorker();
          var w = !this._dataBinary;
          w && !u && (a = a.pipe(new l.Utf8EncodeWorker())), !w && u && (a = a.pipe(new l.Utf8DecodeWorker()));
        } catch (E) {
          (a = new v("error")).error(E);
        }
        return new s(a, d, "");
      }, async: function(p, a) {
        return this.internalStream(p).accumulate(a);
      }, nodeStream: function(p, a) {
        return this.internalStream(p || "nodebuffer").toNodejsStream(a);
      }, _compressWorker: function(p, a) {
        if (this._data instanceof f && this._data.compression.magic === p.magic)
          return this._data.getCompressedWorker();
        var d = this._decompressWorker();
        return this._dataBinary || (d = d.pipe(new l.Utf8EncodeWorker())), f.createWorkerFrom(d, p, a);
      }, _decompressWorker: function() {
        return this._data instanceof f ? this._data.getContentWorker() : this._data instanceof v ? this._data : new e(this._data);
      } };
      for (var m = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], y = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, o = 0; o < m.length; o++)
        n.prototype[m[o]] = y;
      b.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(r, b, c) {
      (function(n) {
        var s, e, l = n.MutationObserver || n.WebKitMutationObserver;
        if (l) {
          var f = 0, v = new l(p), m = n.document.createTextNode("");
          v.observe(m, { characterData: !0 }), s = function() {
            m.data = f = ++f % 2;
          };
        } else if (n.setImmediate || n.MessageChannel === void 0)
          s = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
            var a = n.document.createElement("script");
            a.onreadystatechange = function() {
              p(), a.onreadystatechange = null, a.parentNode.removeChild(a), a = null;
            }, n.document.documentElement.appendChild(a);
          } : function() {
            setTimeout(p, 0);
          };
        else {
          var y = new n.MessageChannel();
          y.port1.onmessage = p, s = function() {
            y.port2.postMessage(0);
          };
        }
        var o = [];
        function p() {
          var a, d;
          e = !0;
          for (var u = o.length; u; ) {
            for (d = o, o = [], a = -1; ++a < u; )
              d[a]();
            u = o.length;
          }
          e = !1;
        }
        b.exports = function(a) {
          o.push(a) !== 1 || e || s();
        };
      }).call(this, typeof Bt < "u" ? Bt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(r, b, c) {
      var n = r("immediate");
      function s() {
      }
      var e = {}, l = ["REJECTED"], f = ["FULFILLED"], v = ["PENDING"];
      function m(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = v, this.queue = [], this.outcome = void 0, u !== s && a(this, u);
      }
      function y(u, w, E) {
        this.promise = u, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function o(u, w, E) {
        n(function() {
          var I;
          try {
            I = w(E);
          } catch (R) {
            return e.reject(u, R);
          }
          I === u ? e.reject(u, new TypeError("Cannot resolve promise with itself")) : e.resolve(u, I);
        });
      }
      function p(u) {
        var w = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof w == "function")
          return function() {
            w.apply(u, arguments);
          };
      }
      function a(u, w) {
        var E = !1;
        function I(V) {
          E || (E = !0, e.reject(u, V));
        }
        function R(V) {
          E || (E = !0, e.resolve(u, V));
        }
        var M = d(function() {
          w(R, I);
        });
        M.status === "error" && I(M.value);
      }
      function d(u, w) {
        var E = {};
        try {
          E.value = u(w), E.status = "success";
        } catch (I) {
          E.status = "error", E.value = I;
        }
        return E;
      }
      (b.exports = m).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var w = this.constructor;
        return this.then(function(E) {
          return w.resolve(u()).then(function() {
            return E;
          });
        }, function(E) {
          return w.resolve(u()).then(function() {
            throw E;
          });
        });
      }, m.prototype.catch = function(u) {
        return this.then(null, u);
      }, m.prototype.then = function(u, w) {
        if (typeof u != "function" && this.state === f || typeof w != "function" && this.state === l)
          return this;
        var E = new this.constructor(s);
        return this.state !== v ? o(E, this.state === f ? u : w, this.outcome) : this.queue.push(new y(E, u, w)), E;
      }, y.prototype.callFulfilled = function(u) {
        e.resolve(this.promise, u);
      }, y.prototype.otherCallFulfilled = function(u) {
        o(this.promise, this.onFulfilled, u);
      }, y.prototype.callRejected = function(u) {
        e.reject(this.promise, u);
      }, y.prototype.otherCallRejected = function(u) {
        o(this.promise, this.onRejected, u);
      }, e.resolve = function(u, w) {
        var E = d(p, w);
        if (E.status === "error")
          return e.reject(u, E.value);
        var I = E.value;
        if (I)
          a(u, I);
        else {
          u.state = f, u.outcome = w;
          for (var R = -1, M = u.queue.length; ++R < M; )
            u.queue[R].callFulfilled(w);
        }
        return u;
      }, e.reject = function(u, w) {
        u.state = l, u.outcome = w;
        for (var E = -1, I = u.queue.length; ++E < I; )
          u.queue[E].callRejected(w);
        return u;
      }, m.resolve = function(u) {
        return u instanceof this ? u : e.resolve(new this(s), u);
      }, m.reject = function(u) {
        var w = new this(s);
        return e.reject(w, u);
      }, m.all = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, I = !1;
        if (!E)
          return this.resolve([]);
        for (var R = new Array(E), M = 0, V = -1, W = new this(s); ++V < E; )
          z(u[V], V);
        return W;
        function z(J, nt) {
          w.resolve(J).then(function(k) {
            R[nt] = k, ++M !== E || I || (I = !0, e.resolve(W, R));
          }, function(k) {
            I || (I = !0, e.reject(W, k));
          });
        }
      }, m.race = function(u) {
        var w = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, I = !1;
        if (!E)
          return this.resolve([]);
        for (var R = -1, M = new this(s); ++R < E; )
          V = u[R], w.resolve(V).then(function(W) {
            I || (I = !0, e.resolve(M, W));
          }, function(W) {
            I || (I = !0, e.reject(M, W));
          });
        var V;
        return M;
      };
    }, { immediate: 36 }], 38: [function(r, b, c) {
      var n = {};
      (0, r("./lib/utils/common").assign)(n, r("./lib/deflate"), r("./lib/inflate"), r("./lib/zlib/constants")), b.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(r, b, c) {
      var n = r("./zlib/deflate"), s = r("./utils/common"), e = r("./utils/strings"), l = r("./zlib/messages"), f = r("./zlib/zstream"), v = Object.prototype.toString, m = 0, y = -1, o = 0, p = 8;
      function a(u) {
        if (!(this instanceof a))
          return new a(u);
        this.options = s.assign({ level: y, method: p, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: o, to: "" }, u || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new f(), this.strm.avail_out = 0;
        var E = n.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (E !== m)
          throw new Error(l[E]);
        if (w.header && n.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var I;
          if (I = typeof w.dictionary == "string" ? e.string2buf(w.dictionary) : v.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (E = n.deflateSetDictionary(this.strm, I)) !== m)
            throw new Error(l[E]);
          this._dict_set = !0;
        }
      }
      function d(u, w) {
        var E = new a(w);
        if (E.push(u, !0), E.err)
          throw E.msg || l[E.err];
        return E.result;
      }
      a.prototype.push = function(u, w) {
        var E, I, R = this.strm, M = this.options.chunkSize;
        if (this.ended)
          return !1;
        I = w === ~~w ? w : w === !0 ? 4 : 0, typeof u == "string" ? R.input = e.string2buf(u) : v.call(u) === "[object ArrayBuffer]" ? R.input = new Uint8Array(u) : R.input = u, R.next_in = 0, R.avail_in = R.input.length;
        do {
          if (R.avail_out === 0 && (R.output = new s.Buf8(M), R.next_out = 0, R.avail_out = M), (E = n.deflate(R, I)) !== 1 && E !== m)
            return this.onEnd(E), !(this.ended = !0);
          R.avail_out !== 0 && (R.avail_in !== 0 || I !== 4 && I !== 2) || (this.options.to === "string" ? this.onData(e.buf2binstring(s.shrinkBuf(R.output, R.next_out))) : this.onData(s.shrinkBuf(R.output, R.next_out)));
        } while ((0 < R.avail_in || R.avail_out === 0) && E !== 1);
        return I === 4 ? (E = n.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === m) : I !== 2 || (this.onEnd(m), !(R.avail_out = 0));
      }, a.prototype.onData = function(u) {
        this.chunks.push(u);
      }, a.prototype.onEnd = function(u) {
        u === m && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = a, c.deflate = d, c.deflateRaw = function(u, w) {
        return (w = w || {}).raw = !0, d(u, w);
      }, c.gzip = function(u, w) {
        return (w = w || {}).gzip = !0, d(u, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(r, b, c) {
      var n = r("./zlib/inflate"), s = r("./utils/common"), e = r("./utils/strings"), l = r("./zlib/constants"), f = r("./zlib/messages"), v = r("./zlib/zstream"), m = r("./zlib/gzheader"), y = Object.prototype.toString;
      function o(a) {
        if (!(this instanceof o))
          return new o(a);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, a || {});
        var d = this.options;
        d.raw && 0 <= d.windowBits && d.windowBits < 16 && (d.windowBits = -d.windowBits, d.windowBits === 0 && (d.windowBits = -15)), !(0 <= d.windowBits && d.windowBits < 16) || a && a.windowBits || (d.windowBits += 32), 15 < d.windowBits && d.windowBits < 48 && !(15 & d.windowBits) && (d.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new v(), this.strm.avail_out = 0;
        var u = n.inflateInit2(this.strm, d.windowBits);
        if (u !== l.Z_OK)
          throw new Error(f[u]);
        this.header = new m(), n.inflateGetHeader(this.strm, this.header);
      }
      function p(a, d) {
        var u = new o(d);
        if (u.push(a, !0), u.err)
          throw u.msg || f[u.err];
        return u.result;
      }
      o.prototype.push = function(a, d) {
        var u, w, E, I, R, M, V = this.strm, W = this.options.chunkSize, z = this.options.dictionary, J = !1;
        if (this.ended)
          return !1;
        w = d === ~~d ? d : d === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof a == "string" ? V.input = e.binstring2buf(a) : y.call(a) === "[object ArrayBuffer]" ? V.input = new Uint8Array(a) : V.input = a, V.next_in = 0, V.avail_in = V.input.length;
        do {
          if (V.avail_out === 0 && (V.output = new s.Buf8(W), V.next_out = 0, V.avail_out = W), (u = n.inflate(V, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && z && (M = typeof z == "string" ? e.string2buf(z) : y.call(z) === "[object ArrayBuffer]" ? new Uint8Array(z) : z, u = n.inflateSetDictionary(this.strm, M)), u === l.Z_BUF_ERROR && J === !0 && (u = l.Z_OK, J = !1), u !== l.Z_STREAM_END && u !== l.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          V.next_out && (V.avail_out !== 0 && u !== l.Z_STREAM_END && (V.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = e.utf8border(V.output, V.next_out), I = V.next_out - E, R = e.buf2string(V.output, E), V.next_out = I, V.avail_out = W - I, I && s.arraySet(V.output, V.output, E, I, 0), this.onData(R)) : this.onData(s.shrinkBuf(V.output, V.next_out)))), V.avail_in === 0 && V.avail_out === 0 && (J = !0);
        } while ((0 < V.avail_in || V.avail_out === 0) && u !== l.Z_STREAM_END);
        return u === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (u = n.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(V.avail_out = 0));
      }, o.prototype.onData = function(a) {
        this.chunks.push(a);
      }, o.prototype.onEnd = function(a) {
        a === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg;
      }, c.Inflate = o, c.inflate = p, c.inflateRaw = function(a, d) {
        return (d = d || {}).raw = !0, p(a, d);
      }, c.ungzip = p;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(r, b, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var f = Array.prototype.slice.call(arguments, 1); f.length; ) {
          var v = f.shift();
          if (v) {
            if (typeof v != "object")
              throw new TypeError(v + "must be non-object");
            for (var m in v)
              v.hasOwnProperty(m) && (l[m] = v[m]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, f) {
        return l.length === f ? l : l.subarray ? l.subarray(0, f) : (l.length = f, l);
      };
      var s = { arraySet: function(l, f, v, m, y) {
        if (f.subarray && l.subarray)
          l.set(f.subarray(v, v + m), y);
        else
          for (var o = 0; o < m; o++)
            l[y + o] = f[v + o];
      }, flattenChunks: function(l) {
        var f, v, m, y, o, p;
        for (f = m = 0, v = l.length; f < v; f++)
          m += l[f].length;
        for (p = new Uint8Array(m), f = y = 0, v = l.length; f < v; f++)
          o = l[f], p.set(o, y), y += o.length;
        return p;
      } }, e = { arraySet: function(l, f, v, m, y) {
        for (var o = 0; o < m; o++)
          l[y + o] = f[v + o];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, s)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, e));
      }, c.setTyped(n);
    }, {}], 42: [function(r, b, c) {
      var n = r("./common"), s = !0, e = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        e = !1;
      }
      for (var l = new n.Buf8(256), f = 0; f < 256; f++)
        l[f] = 252 <= f ? 6 : 248 <= f ? 5 : 240 <= f ? 4 : 224 <= f ? 3 : 192 <= f ? 2 : 1;
      function v(m, y) {
        if (y < 65537 && (m.subarray && e || !m.subarray && s))
          return String.fromCharCode.apply(null, n.shrinkBuf(m, y));
        for (var o = "", p = 0; p < y; p++)
          o += String.fromCharCode(m[p]);
        return o;
      }
      l[254] = l[254] = 1, c.string2buf = function(m) {
        var y, o, p, a, d, u = m.length, w = 0;
        for (a = 0; a < u; a++)
          (64512 & (o = m.charCodeAt(a))) == 55296 && a + 1 < u && (64512 & (p = m.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (p - 56320), a++), w += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
        for (y = new n.Buf8(w), a = d = 0; d < w; a++)
          (64512 & (o = m.charCodeAt(a))) == 55296 && a + 1 < u && (64512 & (p = m.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (p - 56320), a++), o < 128 ? y[d++] = o : (o < 2048 ? y[d++] = 192 | o >>> 6 : (o < 65536 ? y[d++] = 224 | o >>> 12 : (y[d++] = 240 | o >>> 18, y[d++] = 128 | o >>> 12 & 63), y[d++] = 128 | o >>> 6 & 63), y[d++] = 128 | 63 & o);
        return y;
      }, c.buf2binstring = function(m) {
        return v(m, m.length);
      }, c.binstring2buf = function(m) {
        for (var y = new n.Buf8(m.length), o = 0, p = y.length; o < p; o++)
          y[o] = m.charCodeAt(o);
        return y;
      }, c.buf2string = function(m, y) {
        var o, p, a, d, u = y || m.length, w = new Array(2 * u);
        for (o = p = 0; o < u; )
          if ((a = m[o++]) < 128)
            w[p++] = a;
          else if (4 < (d = l[a]))
            w[p++] = 65533, o += d - 1;
          else {
            for (a &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && o < u; )
              a = a << 6 | 63 & m[o++], d--;
            1 < d ? w[p++] = 65533 : a < 65536 ? w[p++] = a : (a -= 65536, w[p++] = 55296 | a >> 10 & 1023, w[p++] = 56320 | 1023 & a);
          }
        return v(w, p);
      }, c.utf8border = function(m, y) {
        var o;
        for ((y = y || m.length) > m.length && (y = m.length), o = y - 1; 0 <= o && (192 & m[o]) == 128; )
          o--;
        return o < 0 || o === 0 ? y : o + l[m[o]] > y ? o : y;
      };
    }, { "./common": 41 }], 43: [function(r, b, c) {
      b.exports = function(n, s, e, l) {
        for (var f = 65535 & n | 0, v = n >>> 16 & 65535 | 0, m = 0; e !== 0; ) {
          for (e -= m = 2e3 < e ? 2e3 : e; v = v + (f = f + s[l++] | 0) | 0, --m; )
            ;
          f %= 65521, v %= 65521;
        }
        return f | v << 16 | 0;
      };
    }, {}], 44: [function(r, b, c) {
      b.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(r, b, c) {
      var n = function() {
        for (var s, e = [], l = 0; l < 256; l++) {
          s = l;
          for (var f = 0; f < 8; f++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          e[l] = s;
        }
        return e;
      }();
      b.exports = function(s, e, l, f) {
        var v = n, m = f + l;
        s ^= -1;
        for (var y = f; y < m; y++)
          s = s >>> 8 ^ v[255 & (s ^ e[y])];
        return -1 ^ s;
      };
    }, {}], 46: [function(r, b, c) {
      var n, s = r("../utils/common"), e = r("./trees"), l = r("./adler32"), f = r("./crc32"), v = r("./messages"), m = 0, y = 4, o = 0, p = -2, a = -1, d = 4, u = 2, w = 8, E = 9, I = 286, R = 30, M = 19, V = 2 * I + 1, W = 15, z = 3, J = 258, nt = J + z + 1, k = 42, O = 113, i = 1, j = 2, it = 3, C = 4;
      function L(t, D) {
        return t.msg = v[D], D;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function P(t) {
        for (var D = t.length; 0 <= --D; )
          t[D] = 0;
      }
      function x(t) {
        var D = t.state, T = D.pending;
        T > t.avail_out && (T = t.avail_out), T !== 0 && (s.arraySet(t.output, D.pending_buf, D.pending_out, T, t.next_out), t.next_out += T, D.pending_out += T, t.total_out += T, t.avail_out -= T, D.pending -= T, D.pending === 0 && (D.pending_out = 0));
      }
      function N(t, D) {
        e._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, D), t.block_start = t.strstart, x(t.strm);
      }
      function K(t, D) {
        t.pending_buf[t.pending++] = D;
      }
      function Y(t, D) {
        t.pending_buf[t.pending++] = D >>> 8 & 255, t.pending_buf[t.pending++] = 255 & D;
      }
      function H(t, D) {
        var T, g, h = t.max_chain_length, S = t.strstart, G = t.prev_length, U = t.nice_match, _ = t.strstart > t.w_size - nt ? t.strstart - (t.w_size - nt) : 0, Z = t.window, X = t.w_mask, Q = t.prev, $ = t.strstart + J, lt = Z[S + G - 1], at = Z[S + G];
        t.prev_length >= t.good_match && (h >>= 2), U > t.lookahead && (U = t.lookahead);
        do
          if (Z[(T = D) + G] === at && Z[T + G - 1] === lt && Z[T] === Z[S] && Z[++T] === Z[S + 1]) {
            S += 2, T++;
            do
              ;
            while (Z[++S] === Z[++T] && Z[++S] === Z[++T] && Z[++S] === Z[++T] && Z[++S] === Z[++T] && Z[++S] === Z[++T] && Z[++S] === Z[++T] && Z[++S] === Z[++T] && Z[++S] === Z[++T] && S < $);
            if (g = J - ($ - S), S = $ - J, G < g) {
              if (t.match_start = D, U <= (G = g))
                break;
              lt = Z[S + G - 1], at = Z[S + G];
            }
          }
        while ((D = Q[D & X]) > _ && --h != 0);
        return G <= t.lookahead ? G : t.lookahead;
      }
      function ut(t) {
        var D, T, g, h, S, G, U, _, Z, X, Q = t.w_size;
        do {
          if (h = t.window_size - t.lookahead - t.strstart, t.strstart >= Q + (Q - nt)) {
            for (s.arraySet(t.window, t.window, Q, Q, 0), t.match_start -= Q, t.strstart -= Q, t.block_start -= Q, D = T = t.hash_size; g = t.head[--D], t.head[D] = Q <= g ? g - Q : 0, --T; )
              ;
            for (D = T = Q; g = t.prev[--D], t.prev[D] = Q <= g ? g - Q : 0, --T; )
              ;
            h += Q;
          }
          if (t.strm.avail_in === 0)
            break;
          if (G = t.strm, U = t.window, _ = t.strstart + t.lookahead, Z = h, X = void 0, X = G.avail_in, Z < X && (X = Z), T = X === 0 ? 0 : (G.avail_in -= X, s.arraySet(U, G.input, G.next_in, X, _), G.state.wrap === 1 ? G.adler = l(G.adler, U, X, _) : G.state.wrap === 2 && (G.adler = f(G.adler, U, X, _)), G.next_in += X, G.total_in += X, X), t.lookahead += T, t.lookahead + t.insert >= z)
            for (S = t.strstart - t.insert, t.ins_h = t.window[S], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[S + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[S + z - 1]) & t.hash_mask, t.prev[S & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = S, S++, t.insert--, !(t.lookahead + t.insert < z)); )
              ;
        } while (t.lookahead < nt && t.strm.avail_in !== 0);
      }
      function mt(t, D) {
        for (var T, g; ; ) {
          if (t.lookahead < nt) {
            if (ut(t), t.lookahead < nt && D === m)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), T !== 0 && t.strstart - T <= t.w_size - nt && (t.match_length = H(t, T)), t.match_length >= z)
            if (g = e._tr_tally(t, t.strstart - t.match_start, t.match_length - z), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= z) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            g = e._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (g && (N(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < z - 1 ? t.strstart : z - 1, D === y ? (N(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (N(t, !1), t.strm.avail_out === 0) ? i : j;
      }
      function ot(t, D) {
        for (var T, g, h; ; ) {
          if (t.lookahead < nt) {
            if (ut(t), t.lookahead < nt && D === m)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= z && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = z - 1, T !== 0 && t.prev_length < t.max_lazy_match && t.strstart - T <= t.w_size - nt && (t.match_length = H(t, T), t.match_length <= 5 && (t.strategy === 1 || t.match_length === z && 4096 < t.strstart - t.match_start) && (t.match_length = z - 1)), t.prev_length >= z && t.match_length <= t.prev_length) {
            for (h = t.strstart + t.lookahead - z, g = e._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - z), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= h && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + z - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = z - 1, t.strstart++, g && (N(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((g = e._tr_tally(t, 0, t.window[t.strstart - 1])) && N(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (g = e._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < z - 1 ? t.strstart : z - 1, D === y ? (N(t, !0), t.strm.avail_out === 0 ? it : C) : t.last_lit && (N(t, !1), t.strm.avail_out === 0) ? i : j;
      }
      function st(t, D, T, g, h) {
        this.good_length = t, this.max_lazy = D, this.nice_length = T, this.max_chain = g, this.func = h;
      }
      function gt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * V), this.dyn_dtree = new s.Buf16(2 * (2 * R + 1)), this.bl_tree = new s.Buf16(2 * (2 * M + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(W + 1), this.heap = new s.Buf16(2 * I + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * I + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function At(t) {
        var D;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (D = t.state).pending = 0, D.pending_out = 0, D.wrap < 0 && (D.wrap = -D.wrap), D.status = D.wrap ? k : O, t.adler = D.wrap === 2 ? 0 : 1, D.last_flush = m, e._tr_init(D), o) : L(t, p);
      }
      function pt(t) {
        var D = At(t);
        return D === o && function(T) {
          T.window_size = 2 * T.w_size, P(T.head), T.max_lazy_match = n[T.level].max_lazy, T.good_match = n[T.level].good_length, T.nice_match = n[T.level].nice_length, T.max_chain_length = n[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = z - 1, T.match_available = 0, T.ins_h = 0;
        }(t.state), D;
      }
      function dt(t, D, T, g, h, S) {
        if (!t)
          return p;
        var G = 1;
        if (D === a && (D = 6), g < 0 ? (G = 0, g = -g) : 15 < g && (G = 2, g -= 16), h < 1 || E < h || T !== w || g < 8 || 15 < g || D < 0 || 9 < D || S < 0 || d < S)
          return L(t, p);
        g === 8 && (g = 9);
        var U = new gt();
        return (t.state = U).strm = t, U.wrap = G, U.gzhead = null, U.w_bits = g, U.w_size = 1 << U.w_bits, U.w_mask = U.w_size - 1, U.hash_bits = h + 7, U.hash_size = 1 << U.hash_bits, U.hash_mask = U.hash_size - 1, U.hash_shift = ~~((U.hash_bits + z - 1) / z), U.window = new s.Buf8(2 * U.w_size), U.head = new s.Buf16(U.hash_size), U.prev = new s.Buf16(U.w_size), U.lit_bufsize = 1 << h + 6, U.pending_buf_size = 4 * U.lit_bufsize, U.pending_buf = new s.Buf8(U.pending_buf_size), U.d_buf = 1 * U.lit_bufsize, U.l_buf = 3 * U.lit_bufsize, U.level = D, U.strategy = S, U.method = T, pt(t);
      }
      n = [new st(0, 0, 0, 0, function(t, D) {
        var T = 65535;
        for (T > t.pending_buf_size - 5 && (T = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ut(t), t.lookahead === 0 && D === m)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var g = t.block_start + T;
          if ((t.strstart === 0 || t.strstart >= g) && (t.lookahead = t.strstart - g, t.strstart = g, N(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - nt && (N(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, D === y ? (N(t, !0), t.strm.avail_out === 0 ? it : C) : (t.strstart > t.block_start && (N(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, mt), new st(4, 5, 16, 8, mt), new st(4, 6, 32, 32, mt), new st(4, 4, 16, 16, ot), new st(8, 16, 32, 32, ot), new st(8, 16, 128, 128, ot), new st(8, 32, 128, 256, ot), new st(32, 128, 258, 1024, ot), new st(32, 258, 258, 4096, ot)], c.deflateInit = function(t, D) {
        return dt(t, D, w, 15, 8, 0);
      }, c.deflateInit2 = dt, c.deflateReset = pt, c.deflateResetKeep = At, c.deflateSetHeader = function(t, D) {
        return t && t.state ? t.state.wrap !== 2 ? p : (t.state.gzhead = D, o) : p;
      }, c.deflate = function(t, D) {
        var T, g, h, S;
        if (!t || !t.state || 5 < D || D < 0)
          return t ? L(t, p) : p;
        if (g = t.state, !t.output || !t.input && t.avail_in !== 0 || g.status === 666 && D !== y)
          return L(t, t.avail_out === 0 ? -5 : p);
        if (g.strm = t, T = g.last_flush, g.last_flush = D, g.status === k)
          if (g.wrap === 2)
            t.adler = 0, K(g, 31), K(g, 139), K(g, 8), g.gzhead ? (K(g, (g.gzhead.text ? 1 : 0) + (g.gzhead.hcrc ? 2 : 0) + (g.gzhead.extra ? 4 : 0) + (g.gzhead.name ? 8 : 0) + (g.gzhead.comment ? 16 : 0)), K(g, 255 & g.gzhead.time), K(g, g.gzhead.time >> 8 & 255), K(g, g.gzhead.time >> 16 & 255), K(g, g.gzhead.time >> 24 & 255), K(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), K(g, 255 & g.gzhead.os), g.gzhead.extra && g.gzhead.extra.length && (K(g, 255 & g.gzhead.extra.length), K(g, g.gzhead.extra.length >> 8 & 255)), g.gzhead.hcrc && (t.adler = f(t.adler, g.pending_buf, g.pending, 0)), g.gzindex = 0, g.status = 69) : (K(g, 0), K(g, 0), K(g, 0), K(g, 0), K(g, 0), K(g, g.level === 9 ? 2 : 2 <= g.strategy || g.level < 2 ? 4 : 0), K(g, 3), g.status = O);
          else {
            var G = w + (g.w_bits - 8 << 4) << 8;
            G |= (2 <= g.strategy || g.level < 2 ? 0 : g.level < 6 ? 1 : g.level === 6 ? 2 : 3) << 6, g.strstart !== 0 && (G |= 32), G += 31 - G % 31, g.status = O, Y(g, G), g.strstart !== 0 && (Y(g, t.adler >>> 16), Y(g, 65535 & t.adler)), t.adler = 1;
          }
        if (g.status === 69)
          if (g.gzhead.extra) {
            for (h = g.pending; g.gzindex < (65535 & g.gzhead.extra.length) && (g.pending !== g.pending_buf_size || (g.gzhead.hcrc && g.pending > h && (t.adler = f(t.adler, g.pending_buf, g.pending - h, h)), x(t), h = g.pending, g.pending !== g.pending_buf_size)); )
              K(g, 255 & g.gzhead.extra[g.gzindex]), g.gzindex++;
            g.gzhead.hcrc && g.pending > h && (t.adler = f(t.adler, g.pending_buf, g.pending - h, h)), g.gzindex === g.gzhead.extra.length && (g.gzindex = 0, g.status = 73);
          } else
            g.status = 73;
        if (g.status === 73)
          if (g.gzhead.name) {
            h = g.pending;
            do {
              if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > h && (t.adler = f(t.adler, g.pending_buf, g.pending - h, h)), x(t), h = g.pending, g.pending === g.pending_buf_size)) {
                S = 1;
                break;
              }
              S = g.gzindex < g.gzhead.name.length ? 255 & g.gzhead.name.charCodeAt(g.gzindex++) : 0, K(g, S);
            } while (S !== 0);
            g.gzhead.hcrc && g.pending > h && (t.adler = f(t.adler, g.pending_buf, g.pending - h, h)), S === 0 && (g.gzindex = 0, g.status = 91);
          } else
            g.status = 91;
        if (g.status === 91)
          if (g.gzhead.comment) {
            h = g.pending;
            do {
              if (g.pending === g.pending_buf_size && (g.gzhead.hcrc && g.pending > h && (t.adler = f(t.adler, g.pending_buf, g.pending - h, h)), x(t), h = g.pending, g.pending === g.pending_buf_size)) {
                S = 1;
                break;
              }
              S = g.gzindex < g.gzhead.comment.length ? 255 & g.gzhead.comment.charCodeAt(g.gzindex++) : 0, K(g, S);
            } while (S !== 0);
            g.gzhead.hcrc && g.pending > h && (t.adler = f(t.adler, g.pending_buf, g.pending - h, h)), S === 0 && (g.status = 103);
          } else
            g.status = 103;
        if (g.status === 103 && (g.gzhead.hcrc ? (g.pending + 2 > g.pending_buf_size && x(t), g.pending + 2 <= g.pending_buf_size && (K(g, 255 & t.adler), K(g, t.adler >> 8 & 255), t.adler = 0, g.status = O)) : g.status = O), g.pending !== 0) {
          if (x(t), t.avail_out === 0)
            return g.last_flush = -1, o;
        } else if (t.avail_in === 0 && F(D) <= F(T) && D !== y)
          return L(t, -5);
        if (g.status === 666 && t.avail_in !== 0)
          return L(t, -5);
        if (t.avail_in !== 0 || g.lookahead !== 0 || D !== m && g.status !== 666) {
          var U = g.strategy === 2 ? function(_, Z) {
            for (var X; ; ) {
              if (_.lookahead === 0 && (ut(_), _.lookahead === 0)) {
                if (Z === m)
                  return i;
                break;
              }
              if (_.match_length = 0, X = e._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++, X && (N(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Z === y ? (N(_, !0), _.strm.avail_out === 0 ? it : C) : _.last_lit && (N(_, !1), _.strm.avail_out === 0) ? i : j;
          }(g, D) : g.strategy === 3 ? function(_, Z) {
            for (var X, Q, $, lt, at = _.window; ; ) {
              if (_.lookahead <= J) {
                if (ut(_), _.lookahead <= J && Z === m)
                  return i;
                if (_.lookahead === 0)
                  break;
              }
              if (_.match_length = 0, _.lookahead >= z && 0 < _.strstart && (Q = at[$ = _.strstart - 1]) === at[++$] && Q === at[++$] && Q === at[++$]) {
                lt = _.strstart + J;
                do
                  ;
                while (Q === at[++$] && Q === at[++$] && Q === at[++$] && Q === at[++$] && Q === at[++$] && Q === at[++$] && Q === at[++$] && Q === at[++$] && $ < lt);
                _.match_length = J - (lt - $), _.match_length > _.lookahead && (_.match_length = _.lookahead);
              }
              if (_.match_length >= z ? (X = e._tr_tally(_, 1, _.match_length - z), _.lookahead -= _.match_length, _.strstart += _.match_length, _.match_length = 0) : (X = e._tr_tally(_, 0, _.window[_.strstart]), _.lookahead--, _.strstart++), X && (N(_, !1), _.strm.avail_out === 0))
                return i;
            }
            return _.insert = 0, Z === y ? (N(_, !0), _.strm.avail_out === 0 ? it : C) : _.last_lit && (N(_, !1), _.strm.avail_out === 0) ? i : j;
          }(g, D) : n[g.level].func(g, D);
          if (U !== it && U !== C || (g.status = 666), U === i || U === it)
            return t.avail_out === 0 && (g.last_flush = -1), o;
          if (U === j && (D === 1 ? e._tr_align(g) : D !== 5 && (e._tr_stored_block(g, 0, 0, !1), D === 3 && (P(g.head), g.lookahead === 0 && (g.strstart = 0, g.block_start = 0, g.insert = 0))), x(t), t.avail_out === 0))
            return g.last_flush = -1, o;
        }
        return D !== y ? o : g.wrap <= 0 ? 1 : (g.wrap === 2 ? (K(g, 255 & t.adler), K(g, t.adler >> 8 & 255), K(g, t.adler >> 16 & 255), K(g, t.adler >> 24 & 255), K(g, 255 & t.total_in), K(g, t.total_in >> 8 & 255), K(g, t.total_in >> 16 & 255), K(g, t.total_in >> 24 & 255)) : (Y(g, t.adler >>> 16), Y(g, 65535 & t.adler)), x(t), 0 < g.wrap && (g.wrap = -g.wrap), g.pending !== 0 ? o : 1);
      }, c.deflateEnd = function(t) {
        var D;
        return t && t.state ? (D = t.state.status) !== k && D !== 69 && D !== 73 && D !== 91 && D !== 103 && D !== O && D !== 666 ? L(t, p) : (t.state = null, D === O ? L(t, -3) : o) : p;
      }, c.deflateSetDictionary = function(t, D) {
        var T, g, h, S, G, U, _, Z, X = D.length;
        if (!t || !t.state || (S = (T = t.state).wrap) === 2 || S === 1 && T.status !== k || T.lookahead)
          return p;
        for (S === 1 && (t.adler = l(t.adler, D, X, 0)), T.wrap = 0, X >= T.w_size && (S === 0 && (P(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), Z = new s.Buf8(T.w_size), s.arraySet(Z, D, X - T.w_size, T.w_size, 0), D = Z, X = T.w_size), G = t.avail_in, U = t.next_in, _ = t.input, t.avail_in = X, t.next_in = 0, t.input = D, ut(T); T.lookahead >= z; ) {
          for (g = T.strstart, h = T.lookahead - (z - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[g + z - 1]) & T.hash_mask, T.prev[g & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = g, g++, --h; )
            ;
          T.strstart = g, T.lookahead = z - 1, ut(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = z - 1, T.match_available = 0, t.next_in = U, t.input = _, t.avail_in = G, T.wrap = S, o;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(r, b, c) {
      b.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(r, b, c) {
      b.exports = function(n, s) {
        var e, l, f, v, m, y, o, p, a, d, u, w, E, I, R, M, V, W, z, J, nt, k, O, i, j;
        e = n.state, l = n.next_in, i = n.input, f = l + (n.avail_in - 5), v = n.next_out, j = n.output, m = v - (s - n.avail_out), y = v + (n.avail_out - 257), o = e.dmax, p = e.wsize, a = e.whave, d = e.wnext, u = e.window, w = e.hold, E = e.bits, I = e.lencode, R = e.distcode, M = (1 << e.lenbits) - 1, V = (1 << e.distbits) - 1;
        t:
          do {
            E < 15 && (w += i[l++] << E, E += 8, w += i[l++] << E, E += 8), W = I[w & M];
            e:
              for (; ; ) {
                if (w >>>= z = W >>> 24, E -= z, (z = W >>> 16 & 255) === 0)
                  j[v++] = 65535 & W;
                else {
                  if (!(16 & z)) {
                    if (!(64 & z)) {
                      W = I[(65535 & W) + (w & (1 << z) - 1)];
                      continue e;
                    }
                    if (32 & z) {
                      e.mode = 12;
                      break t;
                    }
                    n.msg = "invalid literal/length code", e.mode = 30;
                    break t;
                  }
                  J = 65535 & W, (z &= 15) && (E < z && (w += i[l++] << E, E += 8), J += w & (1 << z) - 1, w >>>= z, E -= z), E < 15 && (w += i[l++] << E, E += 8, w += i[l++] << E, E += 8), W = R[w & V];
                  n:
                    for (; ; ) {
                      if (w >>>= z = W >>> 24, E -= z, !(16 & (z = W >>> 16 & 255))) {
                        if (!(64 & z)) {
                          W = R[(65535 & W) + (w & (1 << z) - 1)];
                          continue n;
                        }
                        n.msg = "invalid distance code", e.mode = 30;
                        break t;
                      }
                      if (nt = 65535 & W, E < (z &= 15) && (w += i[l++] << E, (E += 8) < z && (w += i[l++] << E, E += 8)), o < (nt += w & (1 << z) - 1)) {
                        n.msg = "invalid distance too far back", e.mode = 30;
                        break t;
                      }
                      if (w >>>= z, E -= z, (z = v - m) < nt) {
                        if (a < (z = nt - z) && e.sane) {
                          n.msg = "invalid distance too far back", e.mode = 30;
                          break t;
                        }
                        if (O = u, (k = 0) === d) {
                          if (k += p - z, z < J) {
                            for (J -= z; j[v++] = u[k++], --z; )
                              ;
                            k = v - nt, O = j;
                          }
                        } else if (d < z) {
                          if (k += p + d - z, (z -= d) < J) {
                            for (J -= z; j[v++] = u[k++], --z; )
                              ;
                            if (k = 0, d < J) {
                              for (J -= z = d; j[v++] = u[k++], --z; )
                                ;
                              k = v - nt, O = j;
                            }
                          }
                        } else if (k += d - z, z < J) {
                          for (J -= z; j[v++] = u[k++], --z; )
                            ;
                          k = v - nt, O = j;
                        }
                        for (; 2 < J; )
                          j[v++] = O[k++], j[v++] = O[k++], j[v++] = O[k++], J -= 3;
                        J && (j[v++] = O[k++], 1 < J && (j[v++] = O[k++]));
                      } else {
                        for (k = v - nt; j[v++] = j[k++], j[v++] = j[k++], j[v++] = j[k++], 2 < (J -= 3); )
                          ;
                        J && (j[v++] = j[k++], 1 < J && (j[v++] = j[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < f && v < y);
        l -= J = E >> 3, w &= (1 << (E -= J << 3)) - 1, n.next_in = l, n.next_out = v, n.avail_in = l < f ? f - l + 5 : 5 - (l - f), n.avail_out = v < y ? y - v + 257 : 257 - (v - y), e.hold = w, e.bits = E;
      };
    }, {}], 49: [function(r, b, c) {
      var n = r("../utils/common"), s = r("./adler32"), e = r("./crc32"), l = r("./inffast"), f = r("./inftrees"), v = 1, m = 2, y = 0, o = -2, p = 1, a = 852, d = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(k) {
        var O;
        return k && k.state ? (O = k.state, k.total_in = k.total_out = O.total = 0, k.msg = "", O.wrap && (k.adler = 1 & O.wrap), O.mode = p, O.last = 0, O.havedict = 0, O.dmax = 32768, O.head = null, O.hold = 0, O.bits = 0, O.lencode = O.lendyn = new n.Buf32(a), O.distcode = O.distdyn = new n.Buf32(d), O.sane = 1, O.back = -1, y) : o;
      }
      function I(k) {
        var O;
        return k && k.state ? ((O = k.state).wsize = 0, O.whave = 0, O.wnext = 0, E(k)) : o;
      }
      function R(k, O) {
        var i, j;
        return k && k.state ? (j = k.state, O < 0 ? (i = 0, O = -O) : (i = 1 + (O >> 4), O < 48 && (O &= 15)), O && (O < 8 || 15 < O) ? o : (j.window !== null && j.wbits !== O && (j.window = null), j.wrap = i, j.wbits = O, I(k))) : o;
      }
      function M(k, O) {
        var i, j;
        return k ? (j = new w(), (k.state = j).window = null, (i = R(k, O)) !== y && (k.state = null), i) : o;
      }
      var V, W, z = !0;
      function J(k) {
        if (z) {
          var O;
          for (V = new n.Buf32(512), W = new n.Buf32(32), O = 0; O < 144; )
            k.lens[O++] = 8;
          for (; O < 256; )
            k.lens[O++] = 9;
          for (; O < 280; )
            k.lens[O++] = 7;
          for (; O < 288; )
            k.lens[O++] = 8;
          for (f(v, k.lens, 0, 288, V, 0, k.work, { bits: 9 }), O = 0; O < 32; )
            k.lens[O++] = 5;
          f(m, k.lens, 0, 32, W, 0, k.work, { bits: 5 }), z = !1;
        }
        k.lencode = V, k.lenbits = 9, k.distcode = W, k.distbits = 5;
      }
      function nt(k, O, i, j) {
        var it, C = k.state;
        return C.window === null && (C.wsize = 1 << C.wbits, C.wnext = 0, C.whave = 0, C.window = new n.Buf8(C.wsize)), j >= C.wsize ? (n.arraySet(C.window, O, i - C.wsize, C.wsize, 0), C.wnext = 0, C.whave = C.wsize) : (j < (it = C.wsize - C.wnext) && (it = j), n.arraySet(C.window, O, i - j, it, C.wnext), (j -= it) ? (n.arraySet(C.window, O, i - j, j, 0), C.wnext = j, C.whave = C.wsize) : (C.wnext += it, C.wnext === C.wsize && (C.wnext = 0), C.whave < C.wsize && (C.whave += it))), 0;
      }
      c.inflateReset = I, c.inflateReset2 = R, c.inflateResetKeep = E, c.inflateInit = function(k) {
        return M(k, 15);
      }, c.inflateInit2 = M, c.inflate = function(k, O) {
        var i, j, it, C, L, F, P, x, N, K, Y, H, ut, mt, ot, st, gt, At, pt, dt, t, D, T, g, h = 0, S = new n.Buf8(4), G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return o;
        (i = k.state).mode === 12 && (i.mode = 13), L = k.next_out, it = k.output, P = k.avail_out, C = k.next_in, j = k.input, F = k.avail_in, x = i.hold, N = i.bits, K = F, Y = P, D = y;
        t:
          for (; ; )
            switch (i.mode) {
              case p:
                if (i.wrap === 0) {
                  i.mode = 13;
                  break;
                }
                for (; N < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                if (2 & i.wrap && x === 35615) {
                  S[i.check = 0] = 255 & x, S[1] = x >>> 8 & 255, i.check = e(i.check, S, 2, 0), N = x = 0, i.mode = 2;
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
                if (N -= 4, t = 8 + (15 & (x >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  k.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, k.adler = i.check = 1, i.mode = 512 & x ? 10 : 12, N = x = 0;
                break;
              case 2:
                for (; N < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                if (i.flags = x, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = x >> 8 & 1), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, i.check = e(i.check, S, 2, 0)), N = x = 0, i.mode = 3;
              case 3:
                for (; N < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                i.head && (i.head.time = x), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, S[2] = x >>> 16 & 255, S[3] = x >>> 24 & 255, i.check = e(i.check, S, 4, 0)), N = x = 0, i.mode = 4;
              case 4:
                for (; N < 16; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                i.head && (i.head.xflags = 255 & x, i.head.os = x >> 8), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, i.check = e(i.check, S, 2, 0)), N = x = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; N < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  i.length = x, i.head && (i.head.extra_len = x), 512 & i.flags && (S[0] = 255 & x, S[1] = x >>> 8 & 255, i.check = e(i.check, S, 2, 0)), N = x = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (H = i.length) && (H = F), H && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), n.arraySet(i.head.extra, j, C, H, t)), 512 & i.flags && (i.check = e(i.check, j, H, C)), F -= H, C += H, i.length -= H), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (H = 0; t = j[C + H++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && H < F; )
                    ;
                  if (512 & i.flags && (i.check = e(i.check, j, H, C)), F -= H, C += H, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (H = 0; t = j[C + H++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && H < F; )
                    ;
                  if (512 & i.flags && (i.check = e(i.check, j, H, C)), F -= H, C += H, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; N < 16; ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  if (x !== (65535 & i.check)) {
                    k.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  N = x = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), k.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; N < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                k.adler = i.check = u(x), N = x = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = L, k.avail_out = P, k.next_in = C, k.avail_in = F, i.hold = x, i.bits = N, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (O === 5 || O === 6)
                  break t;
              case 13:
                if (i.last) {
                  x >>>= 7 & N, N -= 7 & N, i.mode = 27;
                  break;
                }
                for (; N < 3; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                switch (i.last = 1 & x, N -= 1, 3 & (x >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (J(i), i.mode = 20, O !== 6)
                      break;
                    x >>>= 2, N -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", i.mode = 30;
                }
                x >>>= 2, N -= 2;
                break;
              case 14:
                for (x >>>= 7 & N, N -= 7 & N; N < 32; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                if ((65535 & x) != (x >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & x, N = x = 0, i.mode = 15, O === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (H = i.length) {
                  if (F < H && (H = F), P < H && (H = P), H === 0)
                    break t;
                  n.arraySet(it, j, C, H, L), F -= H, C += H, P -= H, L += H, i.length -= H;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; N < 14; ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                if (i.nlen = 257 + (31 & x), x >>>= 5, N -= 5, i.ndist = 1 + (31 & x), x >>>= 5, N -= 5, i.ncode = 4 + (15 & x), x >>>= 4, N -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; N < 3; ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  i.lens[G[i.have++]] = 7 & x, x >>>= 3, N -= 3;
                }
                for (; i.have < 19; )
                  i.lens[G[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, T = { bits: i.lenbits }, D = f(0, i.lens, 0, 19, i.lencode, 0, i.work, T), i.lenbits = T.bits, D) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (h = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, gt = 65535 & h, !((ot = h >>> 24) <= N); ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  if (gt < 16)
                    x >>>= ot, N -= ot, i.lens[i.have++] = gt;
                  else {
                    if (gt === 16) {
                      for (g = ot + 2; N < g; ) {
                        if (F === 0)
                          break t;
                        F--, x += j[C++] << N, N += 8;
                      }
                      if (x >>>= ot, N -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], H = 3 + (3 & x), x >>>= 2, N -= 2;
                    } else if (gt === 17) {
                      for (g = ot + 3; N < g; ) {
                        if (F === 0)
                          break t;
                        F--, x += j[C++] << N, N += 8;
                      }
                      N -= ot, t = 0, H = 3 + (7 & (x >>>= ot)), x >>>= 3, N -= 3;
                    } else {
                      for (g = ot + 7; N < g; ) {
                        if (F === 0)
                          break t;
                        F--, x += j[C++] << N, N += 8;
                      }
                      N -= ot, t = 0, H = 11 + (127 & (x >>>= ot)), x >>>= 7, N -= 7;
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
                if (i.lenbits = 9, T = { bits: i.lenbits }, D = f(v, i.lens, 0, i.nlen, i.lencode, 0, i.work, T), i.lenbits = T.bits, D) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, T = { bits: i.distbits }, D = f(m, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, T), i.distbits = T.bits, D) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, O === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= P) {
                  k.next_out = L, k.avail_out = P, k.next_in = C, k.avail_in = F, i.hold = x, i.bits = N, l(k, Y), L = k.next_out, it = k.output, P = k.avail_out, C = k.next_in, j = k.input, F = k.avail_in, x = i.hold, N = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (h = i.lencode[x & (1 << i.lenbits) - 1]) >>> 16 & 255, gt = 65535 & h, !((ot = h >>> 24) <= N); ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                if (st && !(240 & st)) {
                  for (At = ot, pt = st, dt = gt; st = (h = i.lencode[dt + ((x & (1 << At + pt) - 1) >> At)]) >>> 16 & 255, gt = 65535 & h, !(At + (ot = h >>> 24) <= N); ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  x >>>= At, N -= At, i.back += At;
                }
                if (x >>>= ot, N -= ot, i.back += ot, i.length = gt, st === 0) {
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
                  for (g = i.extra; N < g; ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  i.length += x & (1 << i.extra) - 1, x >>>= i.extra, N -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (h = i.distcode[x & (1 << i.distbits) - 1]) >>> 16 & 255, gt = 65535 & h, !((ot = h >>> 24) <= N); ) {
                  if (F === 0)
                    break t;
                  F--, x += j[C++] << N, N += 8;
                }
                if (!(240 & st)) {
                  for (At = ot, pt = st, dt = gt; st = (h = i.distcode[dt + ((x & (1 << At + pt) - 1) >> At)]) >>> 16 & 255, gt = 65535 & h, !(At + (ot = h >>> 24) <= N); ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  x >>>= At, N -= At, i.back += At;
                }
                if (x >>>= ot, N -= ot, i.back += ot, 64 & st) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = gt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (g = i.extra; N < g; ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  i.offset += x & (1 << i.extra) - 1, x >>>= i.extra, N -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (P === 0)
                  break t;
                if (H = Y - P, i.offset > H) {
                  if ((H = i.offset - H) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ut = H > i.wnext ? (H -= i.wnext, i.wsize - H) : i.wnext - H, H > i.length && (H = i.length), mt = i.window;
                } else
                  mt = it, ut = L - i.offset, H = i.length;
                for (P < H && (H = P), P -= H, i.length -= H; it[L++] = mt[ut++], --H; )
                  ;
                i.length === 0 && (i.mode = 21);
                break;
              case 26:
                if (P === 0)
                  break t;
                it[L++] = i.length, P--, i.mode = 21;
                break;
              case 27:
                if (i.wrap) {
                  for (; N < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x |= j[C++] << N, N += 8;
                  }
                  if (Y -= P, k.total_out += Y, i.total += Y, Y && (k.adler = i.check = i.flags ? e(i.check, it, Y, L - Y) : s(i.check, it, Y, L - Y)), Y = P, (i.flags ? x : u(x)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  N = x = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; N < 32; ) {
                    if (F === 0)
                      break t;
                    F--, x += j[C++] << N, N += 8;
                  }
                  if (x !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  N = x = 0;
                }
                i.mode = 29;
              case 29:
                D = 1;
                break t;
              case 30:
                D = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return o;
            }
        return k.next_out = L, k.avail_out = P, k.next_in = C, k.avail_in = F, i.hold = x, i.bits = N, (i.wsize || Y !== k.avail_out && i.mode < 30 && (i.mode < 27 || O !== 4)) && nt(k, k.output, k.next_out, Y - k.avail_out) ? (i.mode = 31, -4) : (K -= k.avail_in, Y -= k.avail_out, k.total_in += K, k.total_out += Y, i.total += Y, i.wrap && Y && (k.adler = i.check = i.flags ? e(i.check, it, Y, k.next_out - Y) : s(i.check, it, Y, k.next_out - Y)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && Y === 0 || O === 4) && D === y && (D = -5), D);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return o;
        var O = k.state;
        return O.window && (O.window = null), k.state = null, y;
      }, c.inflateGetHeader = function(k, O) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = O).done = !1, y) : o;
      }, c.inflateSetDictionary = function(k, O) {
        var i, j = O.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? o : i.mode === 11 && s(1, O, j, 0) !== i.check ? -3 : nt(k, O, j, j) ? (i.mode = 31, -4) : (i.havedict = 1, y) : o;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(r, b, c) {
      var n = r("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], e = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], f = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      b.exports = function(v, m, y, o, p, a, d, u) {
        var w, E, I, R, M, V, W, z, J, nt = u.bits, k = 0, O = 0, i = 0, j = 0, it = 0, C = 0, L = 0, F = 0, P = 0, x = 0, N = null, K = 0, Y = new n.Buf16(16), H = new n.Buf16(16), ut = null, mt = 0;
        for (k = 0; k <= 15; k++)
          Y[k] = 0;
        for (O = 0; O < o; O++)
          Y[m[y + O]]++;
        for (it = nt, j = 15; 1 <= j && Y[j] === 0; j--)
          ;
        if (j < it && (it = j), j === 0)
          return p[a++] = 20971520, p[a++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < j && Y[i] === 0; i++)
          ;
        for (it < i && (it = i), k = F = 1; k <= 15; k++)
          if (F <<= 1, (F -= Y[k]) < 0)
            return -1;
        if (0 < F && (v === 0 || j !== 1))
          return -1;
        for (H[1] = 0, k = 1; k < 15; k++)
          H[k + 1] = H[k] + Y[k];
        for (O = 0; O < o; O++)
          m[y + O] !== 0 && (d[H[m[y + O]]++] = O);
        if (V = v === 0 ? (N = ut = d, 19) : v === 1 ? (N = s, K -= 257, ut = e, mt -= 257, 256) : (N = l, ut = f, -1), k = i, M = a, L = O = x = 0, I = -1, R = (P = 1 << (C = it)) - 1, v === 1 && 852 < P || v === 2 && 592 < P)
          return 1;
        for (; ; ) {
          for (W = k - L, J = d[O] < V ? (z = 0, d[O]) : d[O] > V ? (z = ut[mt + d[O]], N[K + d[O]]) : (z = 96, 0), w = 1 << k - L, i = E = 1 << C; p[M + (x >> L) + (E -= w)] = W << 24 | z << 16 | J | 0, E !== 0; )
            ;
          for (w = 1 << k - 1; x & w; )
            w >>= 1;
          if (w !== 0 ? (x &= w - 1, x += w) : x = 0, O++, --Y[k] == 0) {
            if (k === j)
              break;
            k = m[y + d[O]];
          }
          if (it < k && (x & R) !== I) {
            for (L === 0 && (L = it), M += i, F = 1 << (C = k - L); C + L < j && !((F -= Y[C + L]) <= 0); )
              C++, F <<= 1;
            if (P += 1 << C, v === 1 && 852 < P || v === 2 && 592 < P)
              return 1;
            p[I = x & R] = it << 24 | C << 16 | M - a | 0;
          }
        }
        return x !== 0 && (p[M + x] = k - L << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(r, b, c) {
      b.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(r, b, c) {
      var n = r("../utils/common"), s = 0, e = 1;
      function l(h) {
        for (var S = h.length; 0 <= --S; )
          h[S] = 0;
      }
      var f = 0, v = 29, m = 256, y = m + 1 + v, o = 30, p = 19, a = 2 * y + 1, d = 15, u = 16, w = 7, E = 256, I = 16, R = 17, M = 18, V = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], W = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], z = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], J = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], nt = new Array(2 * (y + 2));
      l(nt);
      var k = new Array(2 * o);
      l(k);
      var O = new Array(512);
      l(O);
      var i = new Array(256);
      l(i);
      var j = new Array(v);
      l(j);
      var it, C, L, F = new Array(o);
      function P(h, S, G, U, _) {
        this.static_tree = h, this.extra_bits = S, this.extra_base = G, this.elems = U, this.max_length = _, this.has_stree = h && h.length;
      }
      function x(h, S) {
        this.dyn_tree = h, this.max_code = 0, this.stat_desc = S;
      }
      function N(h) {
        return h < 256 ? O[h] : O[256 + (h >>> 7)];
      }
      function K(h, S) {
        h.pending_buf[h.pending++] = 255 & S, h.pending_buf[h.pending++] = S >>> 8 & 255;
      }
      function Y(h, S, G) {
        h.bi_valid > u - G ? (h.bi_buf |= S << h.bi_valid & 65535, K(h, h.bi_buf), h.bi_buf = S >> u - h.bi_valid, h.bi_valid += G - u) : (h.bi_buf |= S << h.bi_valid & 65535, h.bi_valid += G);
      }
      function H(h, S, G) {
        Y(h, G[2 * S], G[2 * S + 1]);
      }
      function ut(h, S) {
        for (var G = 0; G |= 1 & h, h >>>= 1, G <<= 1, 0 < --S; )
          ;
        return G >>> 1;
      }
      function mt(h, S, G) {
        var U, _, Z = new Array(d + 1), X = 0;
        for (U = 1; U <= d; U++)
          Z[U] = X = X + G[U - 1] << 1;
        for (_ = 0; _ <= S; _++) {
          var Q = h[2 * _ + 1];
          Q !== 0 && (h[2 * _] = ut(Z[Q]++, Q));
        }
      }
      function ot(h) {
        var S;
        for (S = 0; S < y; S++)
          h.dyn_ltree[2 * S] = 0;
        for (S = 0; S < o; S++)
          h.dyn_dtree[2 * S] = 0;
        for (S = 0; S < p; S++)
          h.bl_tree[2 * S] = 0;
        h.dyn_ltree[2 * E] = 1, h.opt_len = h.static_len = 0, h.last_lit = h.matches = 0;
      }
      function st(h) {
        8 < h.bi_valid ? K(h, h.bi_buf) : 0 < h.bi_valid && (h.pending_buf[h.pending++] = h.bi_buf), h.bi_buf = 0, h.bi_valid = 0;
      }
      function gt(h, S, G, U) {
        var _ = 2 * S, Z = 2 * G;
        return h[_] < h[Z] || h[_] === h[Z] && U[S] <= U[G];
      }
      function At(h, S, G) {
        for (var U = h.heap[G], _ = G << 1; _ <= h.heap_len && (_ < h.heap_len && gt(S, h.heap[_ + 1], h.heap[_], h.depth) && _++, !gt(S, U, h.heap[_], h.depth)); )
          h.heap[G] = h.heap[_], G = _, _ <<= 1;
        h.heap[G] = U;
      }
      function pt(h, S, G) {
        var U, _, Z, X, Q = 0;
        if (h.last_lit !== 0)
          for (; U = h.pending_buf[h.d_buf + 2 * Q] << 8 | h.pending_buf[h.d_buf + 2 * Q + 1], _ = h.pending_buf[h.l_buf + Q], Q++, U === 0 ? H(h, _, S) : (H(h, (Z = i[_]) + m + 1, S), (X = V[Z]) !== 0 && Y(h, _ -= j[Z], X), H(h, Z = N(--U), G), (X = W[Z]) !== 0 && Y(h, U -= F[Z], X)), Q < h.last_lit; )
            ;
        H(h, E, S);
      }
      function dt(h, S) {
        var G, U, _, Z = S.dyn_tree, X = S.stat_desc.static_tree, Q = S.stat_desc.has_stree, $ = S.stat_desc.elems, lt = -1;
        for (h.heap_len = 0, h.heap_max = a, G = 0; G < $; G++)
          Z[2 * G] !== 0 ? (h.heap[++h.heap_len] = lt = G, h.depth[G] = 0) : Z[2 * G + 1] = 0;
        for (; h.heap_len < 2; )
          Z[2 * (_ = h.heap[++h.heap_len] = lt < 2 ? ++lt : 0)] = 1, h.depth[_] = 0, h.opt_len--, Q && (h.static_len -= X[2 * _ + 1]);
        for (S.max_code = lt, G = h.heap_len >> 1; 1 <= G; G--)
          At(h, Z, G);
        for (_ = $; G = h.heap[1], h.heap[1] = h.heap[h.heap_len--], At(h, Z, 1), U = h.heap[1], h.heap[--h.heap_max] = G, h.heap[--h.heap_max] = U, Z[2 * _] = Z[2 * G] + Z[2 * U], h.depth[_] = (h.depth[G] >= h.depth[U] ? h.depth[G] : h.depth[U]) + 1, Z[2 * G + 1] = Z[2 * U + 1] = _, h.heap[1] = _++, At(h, Z, 1), 2 <= h.heap_len; )
          ;
        h.heap[--h.heap_max] = h.heap[1], function(at, wt) {
          var Et, Ct, et, ct, yt, ft, kt = wt.dyn_tree, Pt = wt.max_code, be = wt.stat_desc.static_tree, ve = wt.stat_desc.has_stree, ye = wt.stat_desc.extra_bits, Qt = wt.stat_desc.extra_base, Rt = wt.stat_desc.max_length, zt = 0;
          for (ct = 0; ct <= d; ct++)
            at.bl_count[ct] = 0;
          for (kt[2 * at.heap[at.heap_max] + 1] = 0, Et = at.heap_max + 1; Et < a; Et++)
            Rt < (ct = kt[2 * kt[2 * (Ct = at.heap[Et]) + 1] + 1] + 1) && (ct = Rt, zt++), kt[2 * Ct + 1] = ct, Pt < Ct || (at.bl_count[ct]++, yt = 0, Qt <= Ct && (yt = ye[Ct - Qt]), ft = kt[2 * Ct], at.opt_len += ft * (ct + yt), ve && (at.static_len += ft * (be[2 * Ct + 1] + yt)));
          if (zt !== 0) {
            do {
              for (ct = Rt - 1; at.bl_count[ct] === 0; )
                ct--;
              at.bl_count[ct]--, at.bl_count[ct + 1] += 2, at.bl_count[Rt]--, zt -= 2;
            } while (0 < zt);
            for (ct = Rt; ct !== 0; ct--)
              for (Ct = at.bl_count[ct]; Ct !== 0; )
                Pt < (et = at.heap[--Et]) || (kt[2 * et + 1] !== ct && (at.opt_len += (ct - kt[2 * et + 1]) * kt[2 * et], kt[2 * et + 1] = ct), Ct--);
          }
        }(h, S), mt(Z, lt, h.bl_count);
      }
      function t(h, S, G) {
        var U, _, Z = -1, X = S[1], Q = 0, $ = 7, lt = 4;
        for (X === 0 && ($ = 138, lt = 3), S[2 * (G + 1) + 1] = 65535, U = 0; U <= G; U++)
          _ = X, X = S[2 * (U + 1) + 1], ++Q < $ && _ === X || (Q < lt ? h.bl_tree[2 * _] += Q : _ !== 0 ? (_ !== Z && h.bl_tree[2 * _]++, h.bl_tree[2 * I]++) : Q <= 10 ? h.bl_tree[2 * R]++ : h.bl_tree[2 * M]++, Z = _, lt = (Q = 0) === X ? ($ = 138, 3) : _ === X ? ($ = 6, 3) : ($ = 7, 4));
      }
      function D(h, S, G) {
        var U, _, Z = -1, X = S[1], Q = 0, $ = 7, lt = 4;
        for (X === 0 && ($ = 138, lt = 3), U = 0; U <= G; U++)
          if (_ = X, X = S[2 * (U + 1) + 1], !(++Q < $ && _ === X)) {
            if (Q < lt)
              for (; H(h, _, h.bl_tree), --Q != 0; )
                ;
            else
              _ !== 0 ? (_ !== Z && (H(h, _, h.bl_tree), Q--), H(h, I, h.bl_tree), Y(h, Q - 3, 2)) : Q <= 10 ? (H(h, R, h.bl_tree), Y(h, Q - 3, 3)) : (H(h, M, h.bl_tree), Y(h, Q - 11, 7));
            Z = _, lt = (Q = 0) === X ? ($ = 138, 3) : _ === X ? ($ = 6, 3) : ($ = 7, 4);
          }
      }
      l(F);
      var T = !1;
      function g(h, S, G, U) {
        Y(h, (f << 1) + (U ? 1 : 0), 3), function(_, Z, X, Q) {
          st(_), Q && (K(_, X), K(_, ~X)), n.arraySet(_.pending_buf, _.window, Z, X, _.pending), _.pending += X;
        }(h, S, G, !0);
      }
      c._tr_init = function(h) {
        T || (function() {
          var S, G, U, _, Z, X = new Array(d + 1);
          for (_ = U = 0; _ < v - 1; _++)
            for (j[_] = U, S = 0; S < 1 << V[_]; S++)
              i[U++] = _;
          for (i[U - 1] = _, _ = Z = 0; _ < 16; _++)
            for (F[_] = Z, S = 0; S < 1 << W[_]; S++)
              O[Z++] = _;
          for (Z >>= 7; _ < o; _++)
            for (F[_] = Z << 7, S = 0; S < 1 << W[_] - 7; S++)
              O[256 + Z++] = _;
          for (G = 0; G <= d; G++)
            X[G] = 0;
          for (S = 0; S <= 143; )
            nt[2 * S + 1] = 8, S++, X[8]++;
          for (; S <= 255; )
            nt[2 * S + 1] = 9, S++, X[9]++;
          for (; S <= 279; )
            nt[2 * S + 1] = 7, S++, X[7]++;
          for (; S <= 287; )
            nt[2 * S + 1] = 8, S++, X[8]++;
          for (mt(nt, y + 1, X), S = 0; S < o; S++)
            k[2 * S + 1] = 5, k[2 * S] = ut(S, 5);
          it = new P(nt, V, m + 1, y, d), C = new P(k, W, 0, o, d), L = new P(new Array(0), z, 0, p, w);
        }(), T = !0), h.l_desc = new x(h.dyn_ltree, it), h.d_desc = new x(h.dyn_dtree, C), h.bl_desc = new x(h.bl_tree, L), h.bi_buf = 0, h.bi_valid = 0, ot(h);
      }, c._tr_stored_block = g, c._tr_flush_block = function(h, S, G, U) {
        var _, Z, X = 0;
        0 < h.level ? (h.strm.data_type === 2 && (h.strm.data_type = function(Q) {
          var $, lt = 4093624447;
          for ($ = 0; $ <= 31; $++, lt >>>= 1)
            if (1 & lt && Q.dyn_ltree[2 * $] !== 0)
              return s;
          if (Q.dyn_ltree[18] !== 0 || Q.dyn_ltree[20] !== 0 || Q.dyn_ltree[26] !== 0)
            return e;
          for ($ = 32; $ < m; $++)
            if (Q.dyn_ltree[2 * $] !== 0)
              return e;
          return s;
        }(h)), dt(h, h.l_desc), dt(h, h.d_desc), X = function(Q) {
          var $;
          for (t(Q, Q.dyn_ltree, Q.l_desc.max_code), t(Q, Q.dyn_dtree, Q.d_desc.max_code), dt(Q, Q.bl_desc), $ = p - 1; 3 <= $ && Q.bl_tree[2 * J[$] + 1] === 0; $--)
            ;
          return Q.opt_len += 3 * ($ + 1) + 5 + 5 + 4, $;
        }(h), _ = h.opt_len + 3 + 7 >>> 3, (Z = h.static_len + 3 + 7 >>> 3) <= _ && (_ = Z)) : _ = Z = G + 5, G + 4 <= _ && S !== -1 ? g(h, S, G, U) : h.strategy === 4 || Z === _ ? (Y(h, 2 + (U ? 1 : 0), 3), pt(h, nt, k)) : (Y(h, 4 + (U ? 1 : 0), 3), function(Q, $, lt, at) {
          var wt;
          for (Y(Q, $ - 257, 5), Y(Q, lt - 1, 5), Y(Q, at - 4, 4), wt = 0; wt < at; wt++)
            Y(Q, Q.bl_tree[2 * J[wt] + 1], 3);
          D(Q, Q.dyn_ltree, $ - 1), D(Q, Q.dyn_dtree, lt - 1);
        }(h, h.l_desc.max_code + 1, h.d_desc.max_code + 1, X + 1), pt(h, h.dyn_ltree, h.dyn_dtree)), ot(h), U && st(h);
      }, c._tr_tally = function(h, S, G) {
        return h.pending_buf[h.d_buf + 2 * h.last_lit] = S >>> 8 & 255, h.pending_buf[h.d_buf + 2 * h.last_lit + 1] = 255 & S, h.pending_buf[h.l_buf + h.last_lit] = 255 & G, h.last_lit++, S === 0 ? h.dyn_ltree[2 * G]++ : (h.matches++, S--, h.dyn_ltree[2 * (i[G] + m + 1)]++, h.dyn_dtree[2 * N(S)]++), h.last_lit === h.lit_bufsize - 1;
      }, c._tr_align = function(h) {
        Y(h, 2, 3), H(h, E, nt), function(S) {
          S.bi_valid === 16 ? (K(S, S.bi_buf), S.bi_buf = 0, S.bi_valid = 0) : 8 <= S.bi_valid && (S.pending_buf[S.pending++] = 255 & S.bi_buf, S.bi_buf >>= 8, S.bi_valid -= 8);
        }(h);
      };
    }, { "../utils/common": 41 }], 53: [function(r, b, c) {
      b.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(r, b, c) {
      (function(n) {
        (function(s, e) {
          if (!s.setImmediate) {
            var l, f, v, m, y = 1, o = {}, p = !1, a = s.document, d = Object.getPrototypeOf && Object.getPrototypeOf(s);
            d = d && d.setTimeout ? d : s, l = {}.toString.call(s.process) === "[object process]" ? function(I) {
              process.nextTick(function() {
                w(I);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var I = !0, R = s.onmessage;
                return s.onmessage = function() {
                  I = !1;
                }, s.postMessage("", "*"), s.onmessage = R, I;
              }
            }() ? (m = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", E, !1) : s.attachEvent("onmessage", E), function(I) {
              s.postMessage(m + I, "*");
            }) : s.MessageChannel ? ((v = new MessageChannel()).port1.onmessage = function(I) {
              w(I.data);
            }, function(I) {
              v.port2.postMessage(I);
            }) : a && "onreadystatechange" in a.createElement("script") ? (f = a.documentElement, function(I) {
              var R = a.createElement("script");
              R.onreadystatechange = function() {
                w(I), R.onreadystatechange = null, f.removeChild(R), R = null;
              }, f.appendChild(R);
            }) : function(I) {
              setTimeout(w, 0, I);
            }, d.setImmediate = function(I) {
              typeof I != "function" && (I = new Function("" + I));
              for (var R = new Array(arguments.length - 1), M = 0; M < R.length; M++)
                R[M] = arguments[M + 1];
              var V = { callback: I, args: R };
              return o[y] = V, l(y), y++;
            }, d.clearImmediate = u;
          }
          function u(I) {
            delete o[I];
          }
          function w(I) {
            if (p)
              setTimeout(w, 0, I);
            else {
              var R = o[I];
              if (R) {
                p = !0;
                try {
                  (function(M) {
                    var V = M.callback, W = M.args;
                    switch (W.length) {
                      case 0:
                        V();
                        break;
                      case 1:
                        V(W[0]);
                        break;
                      case 2:
                        V(W[0], W[1]);
                        break;
                      case 3:
                        V(W[0], W[1], W[2]);
                        break;
                      default:
                        V.apply(e, W);
                    }
                  })(R);
                } finally {
                  u(I), p = !1;
                }
              }
            }
          }
          function E(I) {
            I.source === s && typeof I.data == "string" && I.data.indexOf(m) === 0 && w(+I.data.slice(m.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof Bt < "u" ? Bt : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(he);
var Ve = he.exports;
const Le = /* @__PURE__ */ ue(Ve);
var Ae = { exports: {} };
(function(B, A) {
  (function(r, b) {
    b();
  })(Bt, function() {
    function r(f, v) {
      return typeof v > "u" ? v = { autoBom: !1 } : typeof v != "object" && (console.warn("Deprecated: Expected third argument to be a object"), v = { autoBom: !v }), v.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type) ? new Blob(["\uFEFF", f], { type: f.type }) : f;
    }
    function b(f, v, m) {
      var y = new XMLHttpRequest();
      y.open("GET", f), y.responseType = "blob", y.onload = function() {
        l(y.response, v, m);
      }, y.onerror = function() {
        console.error("could not download file");
      }, y.send();
    }
    function c(f) {
      var v = new XMLHttpRequest();
      v.open("HEAD", f, !1);
      try {
        v.send();
      } catch {
      }
      return 200 <= v.status && 299 >= v.status;
    }
    function n(f) {
      try {
        f.dispatchEvent(new MouseEvent("click"));
      } catch {
        var v = document.createEvent("MouseEvents");
        v.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), f.dispatchEvent(v);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Bt == "object" && Bt.global === Bt ? Bt : void 0, e = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !e ? function(f, v, m) {
      var y = s.URL || s.webkitURL, o = document.createElement("a");
      v = v || f.name || "download", o.download = v, o.rel = "noopener", typeof f == "string" ? (o.href = f, o.origin === location.origin ? n(o) : c(o.href) ? b(f, v, m) : n(o, o.target = "_blank")) : (o.href = y.createObjectURL(f), setTimeout(function() {
        y.revokeObjectURL(o.href);
      }, 4e4), setTimeout(function() {
        n(o);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(f, v, m) {
      if (v = v || f.name || "download", typeof f != "string")
        navigator.msSaveOrOpenBlob(r(f, m), v);
      else if (c(f))
        b(f, v, m);
      else {
        var y = document.createElement("a");
        y.href = f, y.target = "_blank", setTimeout(function() {
          n(y);
        });
      }
    } : function(f, v, m, y) {
      if (y = y || open("", "_blank"), y && (y.document.title = y.document.body.innerText = "downloading..."), typeof f == "string")
        return b(f, v, m);
      var o = f.type === "application/octet-stream", p = /constructor/i.test(s.HTMLElement) || s.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((a || o && p || e) && typeof FileReader < "u") {
        var d = new FileReader();
        d.onloadend = function() {
          var E = d.result;
          E = a ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), y ? y.location.href = E : location = E, y = null;
        }, d.readAsDataURL(f);
      } else {
        var u = s.URL || s.webkitURL, w = u.createObjectURL(f);
        y ? y.location = w : location.href = w, y = null, setTimeout(function() {
          u.revokeObjectURL(w);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, B.exports = l;
  });
})(Ae);
var Ue = Ae.exports;
const Me = /* @__PURE__ */ ue(Ue);
function de(B) {
  for (var A = window.atob(B), r = A.length, b = new Uint8Array(r), c = 0; c < r; c++)
    b[c] = A.charCodeAt(c);
  return b.buffer;
}
const De = `#!/bin/sh

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
`, Ge = `@rem\r
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
echo.\r
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.\r
echo.\r
echo Please set the JAVA_HOME variable in your environment to match the\r
echo location of your Java installation.\r
\r
goto fail\r
\r
:findJavaFromJavaHome\r
set JAVA_HOME=%JAVA_HOME:"=%\r
set JAVA_EXE=%JAVA_HOME%/bin/java.exe\r
\r
if exist "%JAVA_EXE%" goto execute\r
\r
echo.\r
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%\r
echo.\r
echo Please set the JAVA_HOME variable in your environment to match the\r
echo location of your Java installation.\r
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
`, je = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.5-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Pe = "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L2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQWZ0ZXJPcHRpb25zLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAB9e8LctAwAAXQcAADwACQAAAAAAAAAAAAAA1hUAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEJlZm9yZUZpcnN0U3ViQ29tbWFuZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBYgpgP2AYAAGIOAAA9AAkAAAAAAAAAAAAAAHYZAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRLbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhANImcdNMAgAAlwQAADwACQAAAAAAAAAAAAAAwiAAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE1pc3NpbmdPcHRpb25BcmdTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAvy2DF1wIAAEoFAAA9AAkAAAAAAAAAAAAAAIEjAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAAb4QlWkAQAAfQIAADgACQAAAAAAAAAAAAAAzCYAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAIETaMkNAgAAQwMAADMACQAAAAAAAAAAAAAA3ygAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblN0cmluZy5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDZoNqjpwEAAM4CAAAyAAkAAAAAAAAAAAAAAFYrAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAAjGddcwIAAMcEAAA/AAkAAAAAAAAAAAAAAGYtAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRVbmtub3duT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAxbgfPrEEAABjCAAAJgAJAAAAAAAAAAAAAABPMAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA829HuTsEAADhBwAAJgAJAAAAAAAAAAAAAABdNQAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAyioNQVMBAACsAQAALAAJAAAAAAAAAAAAAAD1OQAAb3JnL2dyYWRsZS9jbGkvUGFyc2VkQ29tbWFuZExpbmVPcHRpb24uY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA2JZpfgEDAACcBAAAMwAJAAAAAAAAAAAAAACrOwAAb3JnL2dyYWRsZS9pbnRlcm5hbC9maWxlL1BhdGhUcmF2ZXJzYWxDaGVja2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFAafz3CAQAAowIAAD4ACQAAAAAAAAAAAAAAFj8AAG9yZy9ncmFkbGUvdXRpbC9pbnRlcm5hbC9XcmFwcGVyRGlzdHJpYnV0aW9uVXJsQ29udmVydGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAM8OjbmPAQAAHgIAAC8ACQAAAAAAAAAAAAAATUEAAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlciQxLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACZHXY8pAwAA5AQAAEEACQAAAAAAAAAAAAAAQkMAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCREZWZhdWx0RG93bmxvYWRQcm9ncmVzc0xpc3RlbmVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFSneKkfAwAAowUAADQACQAAAAAAAAAAAAAA40YAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCRQcm94eUF1dGhlbnRpY2F0b3IuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAjLvDsGYJAAA1EgAAIQAJAAAAAAAAAAAAAABtSgAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAPGMLh9/AQAA9QEAADMACQAAAAAAAAAAAAAAK1QAAG9yZy9ncmFkbGUvd3JhcHBlci9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQALfn7P2QEAALICAAAtAAkAAAAAAAAAAAAAABRWAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlVXNlckhvbWVMb29rdXAuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAq+86IP8UAACNKQAAKgAJAAAAAAAAAAAAAABRWAAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVdyYXBwZXJNYWluLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhADThlEzDCwAAuhUAACIACQAAAAAAAAAAAAAAsW0AAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJDEuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAkyTtAGoBAADnAQAALQAJAAAAAAAAAAAAAADNeQAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwkSW5zdGFsbENoZWNrLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAEtDILafDgAAvhsAACAACQAAAAAAAAAAAAAAm3sAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOqbsNk8AgAAHgQAAB8ACQAAAAAAAAAAAAAAkYoAAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAp18O2iQBAABqAQAAJgAJAAAAAAAAAAAAAAAjjQAAb3JnL2dyYWRsZS93cmFwcGVyL1BhdGhBc3NlbWJsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAeqxO8JwDAABOBgAAMAAJAAAAAAAAAAAAAACkjgAAb3JnL2dyYWRsZS93cmFwcGVyL1N5c3RlbVByb3BlcnRpZXNIYW5kbGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAGni1S3vAgAAUAYAAC0ACQAAAAAAAAAAAAAAp5IAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyQ29uZmlndXJhdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCuENrgUwYAAMUMAAAoAAkAAAAAAAAAAAAAAPqVAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckV4ZWN1dG9yLmNsYXNzVVQFAAEAAAAAUEsFBgAAAAAhACEABA0AAKycAAAAAA==", fe = `# gradle

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
`, pe = `# Automatically build the project and run any configured tests for every push
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
          17,    # Current Java LTS & minimum supported by Minecraft
          21,    # Current Java LTS
        ]
        # and run on both Linux and Windows
        os: [ubuntu-22.04, windows-2022]
    runs-on: \${{ matrix.os }}
    steps:
      - name: checkout repository
        uses: actions/checkout@v4
      - name: validate gradle wrapper
        uses: gradle/wrapper-validation-action@v1
      - name: setup jdk \${{ matrix.java }}
        uses: actions/setup-java@v4
        with:
          java-version: \${{ matrix.java }}
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        if: \${{ runner.os != 'Windows' }}
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        if: \${{ runner.os == 'Linux' && matrix.java == '21' }} # Only upload artifacts built from latest java on one OS
        uses: actions/upload-artifact@v3
        with:
          name: Artifacts
          path: build/libs/`;
async function Qe({ writer: B }) {
  await B.write("gradlew", De, {
    executable: !0
  }), await B.write("gradlew.bat", Ge), await B.write("gradle/wrapper/gradle-wrapper.properties", je), await B.write("gradle/wrapper/gradle-wrapper.jar", de(Pe)), await B.write(".gitignore", fe), await B.write(".github/workflows/build.yml", pe);
}
var Gt = { exports: {} };
(function(B, A) {
  (function(r, b) {
    b(A);
  })(Bt, function(r) {
    function b() {
      return b = Object.assign ? Object.assign.bind() : function(C) {
        for (var L = 1; L < arguments.length; L++) {
          var F = arguments[L];
          for (var P in F)
            Object.prototype.hasOwnProperty.call(F, P) && (C[P] = F[P]);
        }
        return C;
      }, b.apply(this, arguments);
    }
    function c(C, L) {
      C.prototype = Object.create(L.prototype), C.prototype.constructor = C, s(C, L);
    }
    function n(C) {
      return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(L) {
        return L.__proto__ || Object.getPrototypeOf(L);
      }, n(C);
    }
    function s(C, L) {
      return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, P) {
        return F.__proto__ = P, F;
      }, s(C, L);
    }
    function e(C, L, F) {
      return e = function() {
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
      }() ? Reflect.construct.bind() : function(P, x, N) {
        var K = [null];
        K.push.apply(K, x);
        var Y = new (Function.bind.apply(P, K))();
        return N && s(Y, N.prototype), Y;
      }, e.apply(null, arguments);
    }
    function l(C) {
      var L = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return l = function(F) {
        if (F === null || Function.toString.call(F).indexOf("[native code]") === -1)
          return F;
        if (typeof F != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (L !== void 0) {
          if (L.has(F))
            return L.get(F);
          L.set(F, P);
        }
        function P() {
          return e(F, arguments, n(this).constructor);
        }
        return P.prototype = Object.create(F.prototype, { constructor: { value: P, enumerable: !1, writable: !0, configurable: !0 } }), s(P, F);
      }, l(C);
    }
    var f = /* @__PURE__ */ function() {
      function C(F) {
        this.cache = void 0, this.cache = F;
      }
      var L = C.prototype;
      return L.define = function(F, P) {
        this.cache[F] = P;
      }, L.get = function(F) {
        return this.cache[F];
      }, L.remove = function(F) {
        delete this.cache[F];
      }, L.reset = function() {
        this.cache = {};
      }, L.load = function(F) {
        this.cache = b({}, this.cache, F);
      }, C;
    }(), v = /* @__PURE__ */ function(C) {
      function L(F) {
        var P;
        return (P = C.call(this, F) || this).name = "Eta Error", P;
      }
      return c(L, C), L;
    }(/* @__PURE__ */ l(Error));
    function m(C, L, F) {
      var P = L.slice(0, F).split(/\n/), x = P.length, N = P[x - 1].length + 1;
      throw C += " at line " + x + " col " + N + `:

  ` + L.split(/\n/)[x - 1] + `
  ` + Array(N).join(" ") + "^", new v(C);
    }
    function y(C, L, F, P) {
      var x = L.split(`
`), N = Math.max(F - 3, 0), K = Math.min(x.length, F + 3), Y = P, H = x.slice(N, K).map(function(mt, ot) {
        var st = ot + N + 1;
        return (st == F ? " >> " : "    ") + st + "| " + mt;
      }).join(`
`), ut = new v((Y ? Y + ":" + F + `
` : "line " + F + `
`) + H + `

` + C.message);
      throw ut.name = C.name, ut;
    }
    var o = function() {
      return Promise.resolve();
    }.constructor;
    function p(C, L) {
      var F = this.config, P = L && L.async ? o : Function;
      try {
        return new P(F.varName, "options", this.compileToString.call(this, C, L));
      } catch (x) {
        throw x instanceof SyntaxError ? new v(`Bad template syntax

` + x.message + `
` + Array(x.message.length + 1).join("=") + `
` + this.compileToString.call(this, C, L) + `
`) : x;
      }
    }
    function a(C, L) {
      var F = this.config, P = L && L.async, x = this.parse.call(this, C), N = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + C.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + d.call(this, x) + `
if (__eta.layout) {
  __eta.res = ` + (P ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var K = 0; K < F.plugins.length; K++) {
          var Y = F.plugins[K];
          Y.processFnString && (N = Y.processFnString(N, F));
        }
      return N;
    }
    function d(C) {
      for (var L = this.config, F = 0, P = C.length, x = ""; F < P; F++) {
        var N = C[F];
        if (typeof N == "string")
          x += "__eta.res+='" + N + `'
`;
        else {
          var K = N.t, Y = N.val || "";
          L.debug && (x += "__eta.line=" + N.lineNo + `
`), K === "r" ? (L.autoFilter && (Y = "__eta.f(" + Y + ")"), x += "__eta.res+=" + Y + `
`) : K === "i" ? (L.autoFilter && (Y = "__eta.f(" + Y + ")"), L.autoEscape && (Y = "__eta.e(" + Y + ")"), x += "__eta.res+=" + Y + `
`) : K === "e" && (x += Y + `
`);
        }
      }
      return x;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function w(C) {
      return u[C];
    }
    var E = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(C) {
      var L = String(C);
      return /[&<>"']/.test(L) ? L.replace(/[&<>"']/g, w) : L;
    }, filterFunction: function(C) {
      return String(C);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, I = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, R = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, M = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function V(C) {
      return C.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function W(C, L) {
      return C.slice(0, L).split(`
`).length;
    }
    function z(C) {
      var L = this.config, F = [], P = !1, x = 0, N = L.parse;
      if (L.plugins)
        for (var K = 0; K < L.plugins.length; K++) {
          var Y = L.plugins[K];
          Y.processTemplate && (C = Y.processTemplate(C, L));
        }
      function H(S, G) {
        S && (S = function(U, _, Z, X) {
          var Q, $;
          return Array.isArray(_.autoTrim) ? (Q = _.autoTrim[1], $ = _.autoTrim[0]) : Q = $ = _.autoTrim, (Z || Z === !1) && (Q = Z), (X || X === !1) && ($ = X), $ || Q ? Q === "slurp" && $ === "slurp" ? U.trim() : (Q === "_" || Q === "slurp" ? U = U.trimStart() : Q !== "-" && Q !== "nl" || (U = U.replace(/^(?:\r\n|\n|\r)/, "")), $ === "_" || $ === "slurp" ? U = U.trimEnd() : $ !== "-" && $ !== "nl" || (U = U.replace(/(?:\r\n|\n|\r)$/, "")), U) : U;
        }(S, L, P, G), S && (S = S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(S)));
      }
      L.rmWhitespace && (C = C.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), I.lastIndex = 0, R.lastIndex = 0, M.lastIndex = 0;
      for (var ut, mt = [N.exec, N.interpolate, N.raw].reduce(function(S, G) {
        return S && G ? S + "|" + V(G) : G ? V(G) : S;
      }, ""), ot = new RegExp(V(L.tags[0]) + "(-|_)?\\s*(" + mt + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + V(L.tags[1]) + ")", "g"); ut = ot.exec(C); ) {
        var gt = C.slice(x, ut.index);
        x = ut[0].length + ut.index;
        var At = ut[2] || "";
        H(gt, ut[1]), st.lastIndex = x;
        for (var pt = void 0, dt = !1; pt = st.exec(C); ) {
          if (pt[1]) {
            var t = C.slice(x, pt.index);
            ot.lastIndex = x = st.lastIndex, P = pt[2], dt = { t: At === N.exec ? "e" : At === N.raw ? "r" : At === N.interpolate ? "i" : "", val: t };
            break;
          }
          var D = pt[0];
          if (D === "/*") {
            var T = C.indexOf("*/", st.lastIndex);
            T === -1 && m("unclosed comment", C, pt.index), st.lastIndex = T;
          } else
            D === "'" ? (R.lastIndex = pt.index, R.exec(C) ? st.lastIndex = R.lastIndex : m("unclosed string", C, pt.index)) : D === '"' ? (M.lastIndex = pt.index, M.exec(C) ? st.lastIndex = M.lastIndex : m("unclosed string", C, pt.index)) : D === "`" && (I.lastIndex = pt.index, I.exec(C) ? st.lastIndex = I.lastIndex : m("unclosed string", C, pt.index));
        }
        dt ? (L.debug && (dt.lineNo = W(C, ut.index)), F.push(dt)) : m("unclosed tag", C, ut.index);
      }
      if (H(C.slice(x, C.length), !1), L.plugins)
        for (var g = 0; g < L.plugins.length; g++) {
          var h = L.plugins[g];
          h.processAST && (F = h.processAST(F, L));
        }
      return F;
    }
    function J(C, L) {
      var F = L && L.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !C.startsWith("@")) {
        var P = L.filepath, x = F.get(P);
        if (this.config.cache && x)
          return x;
        var N = this.readFile(P), K = this.compile(N, L);
        return this.config.cache && F.define(P, K), K;
      }
      var Y = F.get(C);
      if (Y)
        return Y;
      throw new v("Failed to get template '" + C + "'");
    }
    function nt(C, L, F) {
      var P, x = b({}, F, { async: !1 });
      return typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (x.filepath = this.resolvePath(C, x)), P = J.call(this, C, x)) : P = C, P.call(this, L, x);
    }
    function k(C, L, F) {
      var P, x = b({}, F, { async: !0 });
      typeof C == "string" ? (this.resolvePath && this.readFile && !C.startsWith("@") && (x.filepath = this.resolvePath(C, x)), P = J.call(this, C, x)) : P = C;
      var N = P.call(this, L, x);
      return Promise.resolve(N);
    }
    function O(C, L) {
      var F = this.compile(C, { async: !1 });
      return nt.call(this, F, L);
    }
    function i(C, L) {
      var F = this.compile(C, { async: !0 });
      return k.call(this, F, L);
    }
    var j = /* @__PURE__ */ function() {
      function C(F) {
        this.config = void 0, this.RuntimeErr = y, this.compile = p, this.compileToString = a, this.parse = z, this.render = nt, this.renderAsync = k, this.renderString = O, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new f({}), this.templatesAsync = new f({}), this.resolvePath = null, this.readFile = null, this.config = F ? b({}, E, F) : b({}, E);
      }
      var L = C.prototype;
      return L.configure = function(F) {
        this.config = b({}, this.config, F);
      }, L.withConfig = function(F) {
        return b({}, this, { config: b({}, this.config, F) });
      }, L.loadTemplate = function(F, P, x) {
        if (typeof P == "string")
          (x && x.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(P, x));
        else {
          var N = this.templatesSync;
          (P.constructor.name === "AsyncFunction" || x && x.async) && (N = this.templatesAsync), N.define(F, P);
        }
      }, C;
    }(), it = /* @__PURE__ */ function(C) {
      function L() {
        return C.apply(this, arguments) || this;
      }
      return c(L, C), L;
    }(j);
    r.Eta = it;
  });
})(Gt, Gt.exports);
var We = Gt.exports;
const Ze = new We.Eta({
  autoTrim: !1
});
function Ft(B, A) {
  return Ze.renderString(B, A);
}
const Ye = `# Done to increase the memory available to gradle.
org.gradle.jvmargs=-Xmx1G
org.gradle.parallel=true

# Fabric Properties
# check these on https://fabricmc.net/develop
minecraft_version=<%= it.minecraftVersion %>
yarn_mappings=<%= it.yarnVersion %>
loader_version=<%= it.loaderVersion %>
<% if (it.kotlin) { %>fabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>
<% } %>
# Mod Properties
mod_version=1.0.0
maven_group=<%= it.packageName %>
archives_base_name=<%= it.modid %>

# Dependencies
fabric_version=<%= it.fabricVersion %>`, Je = `plugins {
	id 'fabric-loom' version '1.4-SNAPSHOT'
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
	mappings "net.fabricmc:yarn:\${project.yarn_mappings}:v2"
	modImplementation "net.fabricmc:fabric-loader:\${project.loader_version}"

	// Fabric API. This is technically optional, but you probably want it anyway.
	modImplementation "net.fabricmc.fabric-api:fabric-api:\${project.fabric_version}"
	<% if (it.kotlin) { %>modImplementation "net.fabricmc:fabric-language-kotlin:\${project.fabric_kotlin_version}"<% } %>
	// Uncomment the following line to enable the deprecated Fabric API modules. 
	// These are included in the Fabric API production distribution and allow you to update your mod to the latest modules at a later more convenient time.

	// modImplementation "net.fabricmc.fabric-api:fabric-api-deprecated:\${project.fabric_version}"
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
		mavenJava(MavenPublication) {
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
}`, He = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`;
function Xe(B) {
  return Mt(B) >= 17;
}
function qe(B) {
  return Mt(B) >= 19;
}
function Mt(B) {
  return Number(B.split(".")[1]);
}
function me(B, A) {
  let r = [];
  const b = A ? "Modid" : "Mod Name";
  return B.length == 0 ? [`${b} is empty!`] : (B.length == 1 ? r.push(`${b} is only a single character! (It must be at least 2 characters long)!`) : B.length > 64 && r.push(`${b} has more than 64 characters!`), B.toLocaleLowerCase().startsWith("fabric") && r.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), r.length === 0 ? void 0 : r);
}
function Ke(B) {
  if (B === void 0)
    return;
  let A = me(B, !0) ?? [];
  const r = B.charAt(0);
  (r < "a" || r > "z") && A.push("Modid starts with an invalid character '" + r + "' (it must belowercase a-z)");
  let b = null;
  for (let c = 1; c < B.length; c++) {
    let n = B.charAt(c);
    n == "-" || n == "_" || "0" <= n && n <= "9" || "a" <= n && n <= "z" || (b == null && (b = []), b.push(n));
  }
  if (b != null) {
    let c = "Modid contains invalid characters: " + b.map((n) => "'" + n + "'").join(", ") + "!";
    A.push(c + "!");
  }
  if (A.length != 0)
    return A;
}
function $e(B) {
  return B.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function tn(B) {
  return B.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
const en = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, nn = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, rn = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
};
function Dt(B) {
  const A = Mt(B);
  return A < 16 ? en : A == 16 ? nn : rn;
}
const an = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/, sn = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function on(B) {
  let A = [];
  an.test(B.toLowerCase()) || A.push("Package name is not a valid Java package name!");
  for (let r of sn)
    B.toLowerCase().startsWith(r) ? A.push(`Package name starts with '${r}', which is reserved!`) : B.toLowerCase() + "." == r && A.push(`Package name is '${r}', which is reserved!`);
  return A;
}
async function ln(B, A) {
  await B.write("gradle.properties", Ft(Ye, A)), await B.write("build.gradle", Ft(Je, { ...A, java: Dt(A.minecraftVersion) })), await B.write("settings.gradle", He);
}
const cn = `package <%= it.packageName %>;

import net.minecraft.server.MinecraftServer;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(MinecraftServer.class)
public class <%= it.className %> {
	@Inject(at = @At("HEAD"), method = "loadWorld")
	private void init(CallbackInfo info) {
		// This code is injected into the start of MinecraftServer.loadWorld()V
	}
}`, un = `package <%= it.packageName %>;

import net.minecraft.client.MinecraftClient;
import org.spongepowered.asm.mixin.Mixin;
import org.spongepowered.asm.mixin.injection.At;
import org.spongepowered.asm.mixin.injection.Inject;
import org.spongepowered.asm.mixin.injection.callback.CallbackInfo;

@Mixin(MinecraftClient.class)
public class <%= it.className %> {
	@Inject(at = @At("HEAD"), method = "run")
	private void run(CallbackInfo info) {
		// This code is injected into the start of MinecraftClient.run()V
	}
}`;
async function hn(B, A) {
  const r = A.packageName + ".mixin", b = "ExampleMixin", c = {
    required: !0,
    package: r,
    compatibilityLevel: Dt(A.minecraftVersion).mixin,
    mixins: [
      b
    ],
    injectors: {
      defaultRequire: 1
    }
  }, n = `${A.modid}.mixins.json`;
  return await B.write(`src/main/resources/${n}`, JSON.stringify(c, null, "	")), await B.write(`src/main/java/${r.replaceAll(".", "/")}/${b}.java`, Ft(cn, {
    className: b,
    packageName: r
  })), [n];
}
async function An(B, A) {
  const r = A.packageName + ".mixin.client", b = "ExampleClientMixin", c = {
    required: !0,
    package: r,
    compatibilityLevel: Dt(A.minecraftVersion).mixin,
    client: [
      b
    ],
    injectors: {
      defaultRequire: 1
    }
  }, n = `${A.modid}.client.mixins.json`;
  return await B.write(`src/client/resources/${n}`, JSON.stringify(c, null, "	")), await B.write(`src/client/java/${r.replaceAll(".", "/")}/${b}.java`, Ft(un, {
    className: b,
    packageName: r
  })), [
    {
      config: n,
      environment: "client"
    }
  ];
}
const dn = `package <%= it.package %>;

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
}`, fn = `package <%= it.package %>

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
}`, pn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, mn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, gn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, bn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function vn(B, A) {
  const r = yn(A.projectName), b = {
    package: A.packageName,
    className: r,
    classFullName: A.packageName + "." + r,
    path: A.packageName.replaceAll(".", "/") + "/" + r,
    modid: A.modid,
    slf4j: Mt(A.minecraftVersion) >= 18,
    clientEntrypoint: A.splitSources,
    dataEntrypoint: A.dataGeneration
  };
  return A.kotlin ? await kn(B, b) : await wn(B, b);
}
function yn(B) {
  return B.split(" ").map((A) => A[0].toUpperCase() + A.slice(1)).join("").replace(/\W+/g, "");
}
async function wn(B, A) {
  var r = {
    main: [
      A.classFullName
    ]
  };
  return await B.write(`src/main/java/${A.path}.java`, Ft(dn, A)), A.clientEntrypoint && (await B.write(`src/client/java/${A.path}Client.java`, Ft(pn, { ...A, className: A.className + "Client" })), r = {
    ...r,
    client: [
      A.classFullName + "Client"
    ]
  }), A.dataEntrypoint && (await B.write(`src/main/java/${A.path}DataGenerator.java`, Ft(gn, { ...A, className: A.className + "DataGenerator" })), r = {
    ...r,
    "fabric-datagen": [
      A.classFullName + "DataGenerator"
    ]
  }), r;
}
async function kn(B, A) {
  var r = {
    main: [
      {
        value: A.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  return await B.write(`src/main/kotlin/${A.path}.kt`, Ft(fn, A)), A.clientEntrypoint && (await B.write(`src/client/kotlin/${A.path}Client.kt`, Ft(mn, { ...A, className: A.className + "Client" })), r = {
    ...r,
    client: [
      {
        value: A.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), A.dataEntrypoint && (await B.write(`src/main/kotlin/${A.path}DataGenerator.kt`, Ft(bn, { ...A, className: A.className + "DataGenerator" })), r = {
    ...r,
    "fabric-datagen": [
      {
        value: A.classFullName + "DataGenerator",
        adapter: "kotlin"
      }
    ]
  }), r;
}
function En(B) {
  return Number(B.split(".")[1]) >= 59;
}
async function Cn(B, A) {
  var r = [
    ...await hn(B, A),
    ...A.splitSources ? await An(B, A) : []
  ], b = {
    schemaVersion: 1,
    id: A.modid,
    version: "${version}",
    name: A.projectName,
    description: "This is an example description! Tell everyone what your mod is about!",
    authors: [
      "Me!"
    ],
    contact: {
      homepage: "https://fabricmc.net/",
      sources: "https://github.com/FabricMC/fabric-example-mod"
    },
    license: "CC0-1.0",
    icon: `assets/${A.modid}/icon.png`,
    environment: "*",
    entrypoints: await vn(B, A),
    mixins: r,
    depends: {
      fabricloader: ">=" + A.loaderVersion,
      minecraft: "~" + A.minecraftVersion,
      java: ">=" + Dt(A.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  b.depends[En(A.fabricVersion) ? "fabric-api" : "fabric"] = "*", A.kotlin && (b.depends = {
    ...b.depends,
    "fabric-language-kotlin": ">=" + A.kotlin.kotlinVersion
  }), await B.write("src/main/resources/fabric.mod.json", JSON.stringify(b, null, "	")), await B.write(`src/main/resources/assets/${A.modid}/icon.png`, de(Sn));
}
const Sn = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC", xn = `Creative Commons Legal Code

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
async function Bn(B, A) {
  await B.write(".gitignore", fe), await B.write(".github/workflows/build.yml", pe), await B.write("LICENSE", xn);
}
async function Nn(B) {
  const A = await Fn(B.config);
  await Qe(B), await ln(B.writer, A), await Cn(B.writer, A), await Bn(B.writer);
}
async function ge() {
  return (await Re()).filter((A) => A.stable).filter((A) => {
    const r = A.version;
    return !(r.startsWith("1.14") && r != "1.14.4");
  });
}
async function Fn(B) {
  return {
    ...B,
    loaderVersion: (await Ie()).find((A) => A.stable).version,
    fabricVersion: await Te(B.minecraftVersion),
    yarnVersion: (await Oe(B.minecraftVersion))[0].version,
    kotlin: await _n(B)
  };
}
async function _n(B) {
  if (!B.useKotlin)
    return;
  const r = (await ze()).pop(), b = r.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: r,
    kotlinVersion: b
  };
}
const Rn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateTemplate: Nn,
  getTemplateGameVersions: ge
}, Symbol.toStringTag, { value: "Module" }));
function Zt(B, A, r) {
  const b = B.slice();
  return b[29] = A[r], b;
}
function Yt(B, A, r) {
  const b = B.slice();
  return b[32] = A[r], b;
}
function Jt(B, A, r) {
  const b = B.slice();
  return b[32] = A[r], b;
}
function Ht(B, A, r) {
  const b = B.slice();
  return b[32] = A[r], b;
}
function In(B) {
  let A, r, b = (
    /*error*/
    B[32].message + ""
  ), c, n, s;
  return {
    c() {
      A = rt("p"), r = xt("Error: "), c = xt(b), n = ht(), s = rt("p"), s.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, Ot(A, "color", "red");
    },
    m(e, l) {
      bt(e, A, l), q(A, r), q(A, c), bt(e, n, l), bt(e, s, l);
    },
    p: Nt,
    i: Nt,
    o: Nt,
    d(e) {
      e && vt(A), e && vt(n), e && vt(s);
    }
  };
}
function Tn(B) {
  let A, r, b, c, n, s, e, l, f, v, m, y, o, p, a, d, u, w, E, I, R, M, V, W, z, J, nt, k, O, i, j, it, C, L, F, P, x, N, K, Y, H, ut, mt, ot, st, gt, At, pt, dt, t, D, T, g;
  function h(et, ct) {
    return (
      /*customModId*/
      et[3] != null ? zn : On
    );
  }
  let S = h(B), G = S(B), U = (
    /*modIdErrors*/
    B[13] != null && Xt(B)
  ), _ = (
    /*customModId*/
    B[3] != null && Kt(B)
  ), Z = (
    /*packageNameErrors*/
    B[11]
  ), X = [];
  for (let et = 0; et < Z.length; et += 1)
    X[et] = ee(Yt(B, Z, et));
  let Q = (
    /*data*/
    B[28].game
  ), $ = [];
  for (let et = 0; et < Q.length; et += 1)
    $[et] = ne(Zt(B, Q, et));
  let lt = (
    /*supportsDataGen*/
    B[10] && re(B)
  ), at = (
    /*supportsSplitSources*/
    B[9] && ie(B)
  );
  const wt = [Ln, Vn], Et = [];
  function Ct(et, ct) {
    return (
      /*loading*/
      et[8] ? 0 : 1
    );
  }
  return dt = Ct(B), t = Et[dt] = wt[dt](B), {
    c() {
      A = rt("div"), r = rt("div"), b = rt("h3"), b.textContent = "Mod Name:", c = ht(), n = rt("hr"), s = ht(), G.c(), e = ht(), l = rt("input"), f = ht(), U && U.c(), v = ht(), _ && _.c(), m = ht(), y = rt("div"), o = rt("h3"), o.textContent = "Package Name:", p = ht(), a = rt("hr"), d = ht(), u = rt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-1sr08ub">name.modid</code>.`, w = ht(), E = rt("input"), I = ht();
      for (let et = 0; et < X.length; et += 1)
        X[et].c();
      R = ht(), M = rt("div"), V = rt("h3"), V.textContent = "Minecraft Version:", W = ht(), z = rt("hr"), J = ht(), nt = rt("p"), nt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = ht(), O = rt("select");
      for (let et = 0; et < $.length; et += 1)
        $[et].c();
      i = ht(), j = rt("hr"), it = ht(), C = rt("br"), L = ht(), F = rt("h4"), F.textContent = "Advanced Options:", P = ht(), x = rt("div"), N = rt("div"), K = rt("input"), Y = ht(), H = rt("label"), H.textContent = "Kotlin Programming Language", ut = ht(), mt = rt("p"), mt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-1sr08ub">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-1sr08ub">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = ht(), lt && lt.c(), st = ht(), at && at.c(), gt = ht(), At = rt("br"), pt = ht(), t.c(), tt(b, "class", "svelte-1sr08ub"), tt(n, "class", "svelte-1sr08ub"), tt(l, "id", "project-name"), tt(l, "class", "svelte-1sr08ub"), tt(r, "class", "form-line svelte-1sr08ub"), tt(o, "class", "svelte-1sr08ub"), tt(a, "class", "svelte-1sr08ub"), tt(u, "class", "svelte-1sr08ub"), tt(E, "id", "package-name"), tt(E, "class", "svelte-1sr08ub"), tt(y, "class", "form-line svelte-1sr08ub"), tt(V, "class", "svelte-1sr08ub"), tt(z, "class", "svelte-1sr08ub"), tt(nt, "class", "svelte-1sr08ub"), tt(O, "id", "minecraft-version"), Ot(O, "min-width", "200px"), tt(O, "class", "svelte-1sr08ub"), /*minecraftVersion*/
      B[0] === void 0 && Ne(() => (
        /*select_change_handler*/
        B[23].call(O)
      )), tt(M, "class", "form-line svelte-1sr08ub"), tt(j, "class", "svelte-1sr08ub"), tt(C, "class", "svelte-1sr08ub"), tt(F, "class", "svelte-1sr08ub"), tt(K, "id", "kotlin"), tt(K, "type", "checkbox"), tt(K, "class", "option-input svelte-1sr08ub"), tt(H, "for", "kotlin"), tt(H, "class", "option-label svelte-1sr08ub"), tt(N, "class", "option-container svelte-1sr08ub"), tt(mt, "class", "option-body svelte-1sr08ub"), tt(x, "class", "svelte-1sr08ub"), tt(At, "class", "svelte-1sr08ub"), tt(A, "class", "template svelte-1sr08ub");
    },
    m(et, ct) {
      bt(et, A, ct), q(A, r), q(r, b), q(r, c), q(r, n), q(r, s), G.m(r, null), q(r, e), q(r, l), _t(
        l,
        /*projectName*/
        B[1]
      ), q(r, f), U && U.m(r, null), q(A, v), _ && _.m(A, null), q(A, m), q(A, y), q(y, o), q(y, p), q(y, a), q(y, d), q(y, u), q(y, w), q(y, E), _t(
        E,
        /*packageName*/
        B[2]
      ), q(y, I);
      for (let yt = 0; yt < X.length; yt += 1)
        X[yt] && X[yt].m(y, null);
      q(A, R), q(A, M), q(M, V), q(M, W), q(M, z), q(M, J), q(M, nt), q(M, k), q(M, O);
      for (let yt = 0; yt < $.length; yt += 1)
        $[yt] && $[yt].m(O, null);
      Wt(
        O,
        /*minecraftVersion*/
        B[0],
        !0
      ), q(A, i), q(A, j), q(A, it), q(A, C), q(A, L), q(A, F), q(A, P), q(A, x), q(x, N), q(N, K), K.checked = /*useKotlin*/
      B[5], q(N, Y), q(N, H), q(x, ut), q(x, mt), q(A, ot), lt && lt.m(A, null), q(A, st), at && at.m(A, null), q(A, gt), q(A, At), q(A, pt), Et[dt].m(A, null), D = !0, T || (g = [
        St(
          l,
          "input",
          /*input0_input_handler*/
          B[20]
        ),
        St(
          l,
          "keyup",
          /*doFormatProjectName*/
          B[16]
        ),
        St(
          E,
          "keyup",
          /*doFormatPackageName*/
          B[17]
        ),
        St(
          E,
          "input",
          /*input1_input_handler*/
          B[22]
        ),
        St(
          O,
          "change",
          /*select_change_handler*/
          B[23]
        ),
        St(
          K,
          "change",
          /*input2_change_handler*/
          B[24]
        )
      ], T = !0);
    },
    p(et, ct) {
      if (S === (S = h(et)) && G ? G.p(et, ct) : (G.d(1), G = S(et), G && (G.c(), G.m(r, e))), ct[0] & /*projectName*/
      2 && l.value !== /*projectName*/
      et[1] && _t(
        l,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[13] != null ? U ? U.p(et, ct) : (U = Xt(et), U.c(), U.m(r, null)) : U && (U.d(1), U = null), /*customModId*/
      et[3] != null ? _ ? _.p(et, ct) : (_ = Kt(et), _.c(), _.m(A, m)) : _ && (_.d(1), _ = null), ct[0] & /*packageName*/
      4 && E.value !== /*packageName*/
      et[2] && _t(
        E,
        /*packageName*/
        et[2]
      ), ct[0] & /*packageNameErrors*/
      2048) {
        Z = /*packageNameErrors*/
        et[11];
        let ft;
        for (ft = 0; ft < Z.length; ft += 1) {
          const kt = Yt(et, Z, ft);
          X[ft] ? X[ft].p(kt, ct) : (X[ft] = ee(kt), X[ft].c(), X[ft].m(y, null));
        }
        for (; ft < X.length; ft += 1)
          X[ft].d(1);
        X.length = Z.length;
      }
      if (ct[0] & /*versions*/
      16384) {
        Q = /*data*/
        et[28].game;
        let ft;
        for (ft = 0; ft < Q.length; ft += 1) {
          const kt = Zt(et, Q, ft);
          $[ft] ? $[ft].p(kt, ct) : ($[ft] = ne(kt), $[ft].c(), $[ft].m(O, null));
        }
        for (; ft < $.length; ft += 1)
          $[ft].d(1);
        $.length = Q.length;
      }
      ct[0] & /*minecraftVersion, versions*/
      16385 && Wt(
        O,
        /*minecraftVersion*/
        et[0]
      ), ct[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      et[5]), /*supportsDataGen*/
      et[10] ? lt ? lt.p(et, ct) : (lt = re(et), lt.c(), lt.m(A, st)) : lt && (lt.d(1), lt = null), /*supportsSplitSources*/
      et[9] ? at ? at.p(et, ct) : (at = ie(et), at.c(), at.m(A, gt)) : at && (at.d(1), at = null);
      let yt = dt;
      dt = Ct(et), dt === yt ? Et[dt].p(et, ct) : (Fe(), Tt(Et[yt], 1, 1, () => {
        Et[yt] = null;
      }), _e(), t = Et[dt], t ? t.p(et, ct) : (t = Et[dt] = wt[dt](et), t.c()), It(t, 1), t.m(A, null));
    },
    i(et) {
      D || (It(t), D = !0);
    },
    o(et) {
      Tt(t), D = !1;
    },
    d(et) {
      et && vt(A), G.d(), U && U.d(), _ && _.d(), Lt(X, et), Lt($, et), lt && lt.d(), at && at.d(), Et[dt].d(), T = !1, ae(g);
    }
  };
}
function On(B) {
  let A, r, b, c, n, s, e, l;
  return {
    c() {
      A = rt("p"), r = xt("Choose a name for your new mod. The mod ID will be "), b = rt("code"), c = xt(
        /*modid*/
        B[4]
      ), n = xt(". "), s = rt("a"), s.textContent = "Use custom id", tt(b, "class", "svelte-1sr08ub"), tt(s, "href", ""), tt(s, "class", "svelte-1sr08ub"), tt(A, "class", "svelte-1sr08ub");
    },
    m(f, v) {
      bt(f, A, v), q(A, r), q(A, b), q(b, c), q(A, n), q(A, s), e || (l = St(s, "click", jt(
        /*useCustomModId*/
        B[18]
      )), e = !0);
    },
    p(f, v) {
      v[0] & /*modid*/
      16 && Ut(
        c,
        /*modid*/
        f[4]
      );
    },
    d(f) {
      f && vt(A), e = !1, l();
    }
  };
}
function zn(B) {
  let A;
  return {
    c() {
      A = rt("p"), A.textContent = "Choose a name for your new mod.", tt(A, "class", "svelte-1sr08ub");
    },
    m(r, b) {
      bt(r, A, b);
    },
    p: Nt,
    d(r) {
      r && vt(A);
    }
  };
}
function Xt(B) {
  let A, r, b = (
    /*modIdErrors*/
    B[13]
  ), c = [];
  for (let n = 0; n < b.length; n += 1)
    c[n] = qt(Ht(B, b, n));
  return {
    c() {
      for (let n = 0; n < c.length; n += 1)
        c[n].c();
      A = ht(), r = rt("br"), tt(r, "class", "svelte-1sr08ub");
    },
    m(n, s) {
      for (let e = 0; e < c.length; e += 1)
        c[e] && c[e].m(n, s);
      bt(n, A, s), bt(n, r, s);
    },
    p(n, s) {
      if (s[0] & /*modIdErrors*/
      8192) {
        b = /*modIdErrors*/
        n[13];
        let e;
        for (e = 0; e < b.length; e += 1) {
          const l = Ht(n, b, e);
          c[e] ? c[e].p(l, s) : (c[e] = qt(l), c[e].c(), c[e].m(A.parentNode, A));
        }
        for (; e < c.length; e += 1)
          c[e].d(1);
        c.length = b.length;
      }
    },
    d(n) {
      Lt(c, n), n && vt(A), n && vt(r);
    }
  };
}
function qt(B) {
  let A, r = (
    /*error*/
    B[32] + ""
  ), b;
  return {
    c() {
      A = rt("li"), b = xt(r), Ot(A, "color", "red"), tt(A, "class", "svelte-1sr08ub");
    },
    m(c, n) {
      bt(c, A, n), q(A, b);
    },
    p(c, n) {
      n[0] & /*modIdErrors*/
      8192 && r !== (r = /*error*/
      c[32] + "") && Ut(b, r);
    },
    d(c) {
      c && vt(A);
    }
  };
}
function Kt(B) {
  let A, r, b, c, n, s, e, l, f, v, m, y, o, p = (
    /*customIdErrors*/
    B[12] != null && $t(B)
  );
  return {
    c() {
      A = rt("div"), r = rt("h3"), r.textContent = "Mod ID:", b = ht(), c = rt("hr"), n = ht(), s = rt("p"), e = xt("Enter the modid you wish to use for your mod. "), l = rt("a"), l.textContent = "Use default", f = ht(), p && p.c(), v = ht(), m = rt("input"), tt(r, "class", "svelte-1sr08ub"), tt(c, "class", "svelte-1sr08ub"), tt(l, "href", ""), tt(l, "class", "svelte-1sr08ub"), tt(s, "class", "svelte-1sr08ub"), tt(m, "id", "mod-id"), tt(m, "class", "svelte-1sr08ub"), tt(A, "class", "form-line svelte-1sr08ub");
    },
    m(a, d) {
      bt(a, A, d), q(A, r), q(A, b), q(A, c), q(A, n), q(A, s), q(s, e), q(s, l), q(A, f), p && p.m(A, null), q(A, v), q(A, m), _t(
        m,
        /*customModId*/
        B[3]
      ), y || (o = [
        St(l, "click", jt(
          /*useDefaultModId*/
          B[19]
        )),
        St(
          m,
          "input",
          /*input_input_handler*/
          B[21]
        )
      ], y = !0);
    },
    p(a, d) {
      /*customIdErrors*/
      a[12] != null ? p ? p.p(a, d) : (p = $t(a), p.c(), p.m(A, v)) : p && (p.d(1), p = null), d[0] & /*customModId*/
      8 && m.value !== /*customModId*/
      a[3] && _t(
        m,
        /*customModId*/
        a[3]
      );
    },
    d(a) {
      a && vt(A), p && p.d(), y = !1, ae(o);
    }
  };
}
function $t(B) {
  let A, r, b = (
    /*customIdErrors*/
    B[12]
  ), c = [];
  for (let n = 0; n < b.length; n += 1)
    c[n] = te(Jt(B, b, n));
  return {
    c() {
      for (let n = 0; n < c.length; n += 1)
        c[n].c();
      A = ht(), r = rt("br"), tt(r, "class", "svelte-1sr08ub");
    },
    m(n, s) {
      for (let e = 0; e < c.length; e += 1)
        c[e] && c[e].m(n, s);
      bt(n, A, s), bt(n, r, s);
    },
    p(n, s) {
      if (s[0] & /*customIdErrors*/
      4096) {
        b = /*customIdErrors*/
        n[12];
        let e;
        for (e = 0; e < b.length; e += 1) {
          const l = Jt(n, b, e);
          c[e] ? c[e].p(l, s) : (c[e] = te(l), c[e].c(), c[e].m(A.parentNode, A));
        }
        for (; e < c.length; e += 1)
          c[e].d(1);
        c.length = b.length;
      }
    },
    d(n) {
      Lt(c, n), n && vt(A), n && vt(r);
    }
  };
}
function te(B) {
  let A, r = (
    /*error*/
    B[32] + ""
  ), b;
  return {
    c() {
      A = rt("li"), b = xt(r), Ot(A, "color", "red"), tt(A, "class", "svelte-1sr08ub");
    },
    m(c, n) {
      bt(c, A, n), q(A, b);
    },
    p(c, n) {
      n[0] & /*customIdErrors*/
      4096 && r !== (r = /*error*/
      c[32] + "") && Ut(b, r);
    },
    d(c) {
      c && vt(A);
    }
  };
}
function ee(B) {
  let A, r = (
    /*error*/
    B[32] + ""
  ), b;
  return {
    c() {
      A = rt("li"), b = xt(r), Ot(A, "color", "red"), tt(A, "class", "svelte-1sr08ub");
    },
    m(c, n) {
      bt(c, A, n), q(A, b);
    },
    p(c, n) {
      n[0] & /*packageNameErrors*/
      2048 && r !== (r = /*error*/
      c[32] + "") && Ut(b, r);
    },
    d(c) {
      c && vt(A);
    }
  };
}
function ne(B) {
  let A, r = (
    /*version*/
    B[29].version + ""
  ), b;
  return {
    c() {
      A = rt("option"), b = xt(r), A.__value = /*version*/
      B[29].version, A.value = A.__value, tt(A, "class", "svelte-1sr08ub");
    },
    m(c, n) {
      bt(c, A, n), q(A, b);
    },
    p: Nt,
    d(c) {
      c && vt(A);
    }
  };
}
function re(B) {
  let A, r, b, c, n, s, e, l, f;
  return {
    c() {
      A = rt("div"), r = rt("div"), b = rt("input"), c = ht(), n = rt("label"), n.textContent = "Data Generation", s = ht(), e = rt("p"), e.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-1sr08ub">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', tt(b, "id", "datagen"), tt(b, "type", "checkbox"), tt(b, "class", "option-input svelte-1sr08ub"), tt(n, "for", "datagen"), tt(n, "class", "option-label svelte-1sr08ub"), tt(r, "class", "option-container svelte-1sr08ub"), tt(e, "class", "option-body svelte-1sr08ub"), tt(A, "class", "svelte-1sr08ub");
    },
    m(v, m) {
      bt(v, A, m), q(A, r), q(r, b), b.checked = /*dataGeneration*/
      B[6], q(r, c), q(r, n), q(A, s), q(A, e), l || (f = St(
        b,
        "change",
        /*input_change_handler*/
        B[25]
      ), l = !0);
    },
    p(v, m) {
      m[0] & /*dataGeneration*/
      64 && (b.checked = /*dataGeneration*/
      v[6]);
    },
    d(v) {
      v && vt(A), l = !1, f();
    }
  };
}
function ie(B) {
  let A, r, b, c, n, s, e, l, f;
  return {
    c() {
      A = rt("div"), r = rt("div"), b = rt("input"), c = ht(), n = rt("label"), n.textContent = "Split client and common sources", s = ht(), e = rt("p"), e.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, tt(b, "id", "splitSources"), tt(b, "type", "checkbox"), tt(b, "class", "option-input svelte-1sr08ub"), tt(n, "for", "splitSources"), tt(n, "class", "option-label svelte-1sr08ub"), tt(r, "class", "option-container svelte-1sr08ub"), tt(e, "class", "option-body svelte-1sr08ub"), tt(A, "class", "svelte-1sr08ub");
    },
    m(v, m) {
      bt(v, A, m), q(A, r), q(r, b), b.checked = /*splitSources*/
      B[7], q(r, c), q(r, n), q(A, s), q(A, e), l || (f = St(
        b,
        "change",
        /*input_change_handler_1*/
        B[26]
      ), l = !0);
    },
    p(v, m) {
      m[0] & /*splitSources*/
      128 && (b.checked = /*splitSources*/
      v[7]);
    },
    d(v) {
      v && vt(A), l = !1, f();
    }
  };
}
function Vn(B) {
  let A, r, b, c, n, s;
  return r = new ce({}), {
    c() {
      A = rt("a"), se(r.$$.fragment), b = xt(" Download Template (.ZIP)"), tt(A, "class", "button primary large download-button svelte-1sr08ub"), tt(A, "href", "");
    },
    m(e, l) {
      bt(e, A, l), oe(r, A, null), q(A, b), c = !0, n || (s = St(A, "click", jt(
        /*generate*/
        B[15]
      )), n = !0);
    },
    p: Nt,
    i(e) {
      c || (It(r.$$.fragment, e), c = !0);
    },
    o(e) {
      Tt(r.$$.fragment, e), c = !1;
    },
    d(e) {
      e && vt(A), le(r), n = !1, s();
    }
  };
}
function Ln(B) {
  let A, r, b, c;
  return r = new ce({}), {
    c() {
      A = rt("a"), se(r.$$.fragment), b = xt(" Generating..."), tt(A, "class", "button primary download-button svelte-1sr08ub"), tt(A, "href", "");
    },
    m(n, s) {
      bt(n, A, s), oe(r, A, null), q(A, b), c = !0;
    },
    p: Nt,
    i(n) {
      c || (It(r.$$.fragment, n), c = !0);
    },
    o(n) {
      Tt(r.$$.fragment, n), c = !1;
    },
    d(n) {
      n && vt(A), le(r);
    }
  };
}
function Un(B) {
  let A;
  return {
    c() {
      A = rt("p"), A.textContent = "Loading data..";
    },
    m(r, b) {
      bt(r, A, b);
    },
    p: Nt,
    i: Nt,
    o: Nt,
    d(r) {
      r && vt(A);
    }
  };
}
function Mn(B) {
  let A, r, b = {
    ctx: B,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Un,
    then: Tn,
    catch: In,
    value: 28,
    error: 32,
    blocks: [, , ,]
  };
  return Ce(
    /*versions*/
    B[14],
    b
  ), {
    c() {
      A = Se(), b.block.c();
    },
    m(c, n) {
      bt(c, A, n), b.block.m(c, b.anchor = n), b.mount = () => A.parentNode, b.anchor = A, r = !0;
    },
    p(c, n) {
      B = c, xe(b, B, n);
    },
    i(c) {
      r || (It(b.block), r = !0);
    },
    o(c) {
      for (let n = 0; n < 3; n += 1) {
        const s = b.blocks[n];
        Tt(s);
      }
      r = !1;
    },
    d(c) {
      c && vt(A), b.block.d(c), b.token = null, b = null;
    }
  };
}
function Dn(B, A, r) {
  let b, c, n, s, e, l, f, v = "Template Mod", m = "com.example", y = !1, o = !1, p = !0, a, d = !1;
  const u = Promise.all([ge()]).then(([j]) => {
    const it = j;
    return r(0, f = it[0].version), { game: it };
  });
  function w(j) {
    if (j !== void 0)
      return me(j, a === void 0);
  }
  async function E() {
    if (s !== void 0 || a !== void 0 && e !== void 0 || l.length > 0)
      return;
    r(8, d = !0);
    const j = await Promise.resolve().then(() => Rn), it = {
      modid: a ?? b,
      minecraftVersion: f,
      projectName: v,
      packageName: m,
      useKotlin: y,
      dataGeneration: o && c,
      splitSources: p && n
    }, C = new Le();
    await j.generateTemplate({
      config: it,
      writer: {
        write: async (L, F, P) => {
          C.file(L, F, {
            unixPermissions: P != null && P.executable ? "774" : void 0
          });
        }
      }
    }), Me.saveAs(await C.generateAsync({ type: "blob", platform: "UNIX" }), `${b}-template-${it.minecraftVersion}.zip`), r(8, d = !1);
  }
  function I() {
    r(1, v = v.trim());
  }
  function R() {
    r(2, m = $e(m));
  }
  function M() {
    r(3, a = b);
  }
  function V() {
    r(3, a = void 0);
  }
  function W() {
    v = this.value, r(1, v);
  }
  function z() {
    a = this.value, r(3, a);
  }
  function J() {
    m = this.value, r(2, m);
  }
  function nt() {
    f = Be(this), r(0, f), r(14, u);
  }
  function k() {
    y = this.checked, r(5, y);
  }
  function O() {
    o = this.checked, r(6, o);
  }
  function i() {
    p = this.checked, r(7, p);
  }
  return B.$$.update = () => {
    B.$$.dirty[0] & /*projectName*/
    2 && r(4, b = tn(v)), B.$$.dirty[0] & /*minecraftVersion*/
    1 && r(10, c = Xe(f || "1.99")), B.$$.dirty[0] & /*minecraftVersion*/
    1 && r(9, n = qe(f || "1.99")), B.$$.dirty[0] & /*modid*/
    16 && r(13, s = w(b)), B.$$.dirty[0] & /*customModId*/
    8 && r(12, e = Ke(a)), B.$$.dirty[0] & /*packageName*/
    4 && r(11, l = on(m));
  }, [
    f,
    v,
    m,
    a,
    b,
    y,
    o,
    p,
    d,
    n,
    c,
    l,
    e,
    s,
    u,
    E,
    I,
    R,
    M,
    V,
    W,
    z,
    J,
    nt,
    k,
    O,
    i
  ];
}
class Qn extends we {
  constructor(A) {
    super(), ke(this, A, Dn, Mn, Ee, {}, null, [-1, -1]);
  }
}
export {
  Qn as default
};
