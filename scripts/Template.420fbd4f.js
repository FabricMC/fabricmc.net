import { S as Ee, i as xe, s as Ce, h as Se, b as Ie, c as vt, u as Be, r as Ot, v as Ut, d as bt, f as Fe, e as rt, t as xt, a as ht, g as _t, j as q, n as Bt, o as tt, m as Re, B as Rt, p as Qt, q as St, C as _e, D as Ne, l as Lt, A as le, k as Dt, E as Pt, w as ce, x as ue, y as he } from "./index.3ed5914c.js";
import Ae from "./DownloadIcon.fd237c91.js";
import { d as Te, b as Oe, h as Ue, i as Ve, j as Ge } from "./Api.4264f72d.js";
var It = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function de(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
function Gt(x) {
  throw new Error('Could not dynamically require "' + x + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fe = { exports: {} };
/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/
(function(x, p) {
  (function(e) {
    x.exports = e();
  })(function() {
    return function e(f, c, n) {
      function s(d, m) {
        if (!c[d]) {
          if (!f[d]) {
            var v = typeof Gt == "function" && Gt;
            if (!m && v)
              return v(d, !0);
            if (r)
              return r(d, !0);
            var w = new Error("Cannot find module '" + d + "'");
            throw w.code = "MODULE_NOT_FOUND", w;
          }
          var o = c[d] = { exports: {} };
          f[d][0].call(o.exports, function(g) {
            var a = f[d][1][g];
            return s(a || g);
          }, o, o.exports, e, f, c, n);
        }
        return c[d].exports;
      }
      for (var r = typeof Gt == "function" && Gt, l = 0; l < n.length; l++)
        s(n[l]);
      return s;
    }({ 1: [function(e, f, c) {
      var n = e("./utils"), s = e("./support"), r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var d, m, v, w, o, g, a, A = [], u = 0, y = l.length, E = y, N = n.getTypeOf(l) !== "string"; u < l.length; )
          E = y - u, v = N ? (d = l[u++], m = u < y ? l[u++] : 0, u < y ? l[u++] : 0) : (d = l.charCodeAt(u++), m = u < y ? l.charCodeAt(u++) : 0, u < y ? l.charCodeAt(u++) : 0), w = d >> 2, o = (3 & d) << 4 | m >> 4, g = 1 < E ? (15 & m) << 2 | v >> 6 : 64, a = 2 < E ? 63 & v : 64, A.push(r.charAt(w) + r.charAt(o) + r.charAt(g) + r.charAt(a));
        return A.join("");
      }, c.decode = function(l) {
        var d, m, v, w, o, g, a = 0, A = 0, u = "data:";
        if (l.substr(0, u.length) === u)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var y, E = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === r.charAt(64) && E--, l.charAt(l.length - 2) === r.charAt(64) && E--, E % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (y = s.uint8array ? new Uint8Array(0 | E) : new Array(0 | E); a < l.length; )
          d = r.indexOf(l.charAt(a++)) << 2 | (w = r.indexOf(l.charAt(a++))) >> 4, m = (15 & w) << 4 | (o = r.indexOf(l.charAt(a++))) >> 2, v = (3 & o) << 6 | (g = r.indexOf(l.charAt(a++))), y[A++] = d, o !== 64 && (y[A++] = m), g !== 64 && (y[A++] = v);
        return y;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(e, f, c) {
      var n = e("./external"), s = e("./stream/DataWorker"), r = e("./stream/Crc32Probe"), l = e("./stream/DataLengthProbe");
      function d(m, v, w, o, g) {
        this.compressedSize = m, this.uncompressedSize = v, this.crc32 = w, this.compression = o, this.compressedContent = g;
      }
      d.prototype = { getContentWorker: function() {
        var m = new s(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), v = this;
        return m.on("end", function() {
          if (this.streamInfo.data_length !== v.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), m;
      }, getCompressedWorker: function() {
        return new s(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, d.createWorkerFrom = function(m, v, w) {
        return m.pipe(new r()).pipe(new l("uncompressedSize")).pipe(v.compressWorker(w)).pipe(new l("compressedSize")).withStreamInfo("compression", v);
      }, f.exports = d;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, f, c) {
      var n = e("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new n("STORE compression");
      }, uncompressWorker: function() {
        return new n("STORE decompression");
      } }, c.DEFLATE = e("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, f, c) {
      var n = e("./utils"), s = function() {
        for (var r, l = [], d = 0; d < 256; d++) {
          r = d;
          for (var m = 0; m < 8; m++)
            r = 1 & r ? 3988292384 ^ r >>> 1 : r >>> 1;
          l[d] = r;
        }
        return l;
      }();
      f.exports = function(r, l) {
        return r !== void 0 && r.length ? n.getTypeOf(r) !== "string" ? function(d, m, v, w) {
          var o = s, g = w + v;
          d ^= -1;
          for (var a = w; a < g; a++)
            d = d >>> 8 ^ o[255 & (d ^ m[a])];
          return -1 ^ d;
        }(0 | l, r, r.length, 0) : function(d, m, v, w) {
          var o = s, g = w + v;
          d ^= -1;
          for (var a = w; a < g; a++)
            d = d >>> 8 ^ o[255 & (d ^ m.charCodeAt(a))];
          return -1 ^ d;
        }(0 | l, r, r.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(e, f, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(e, f, c) {
      var n = null;
      n = typeof Promise < "u" ? Promise : e("lie"), f.exports = { Promise: n };
    }, { lie: 37 }], 7: [function(e, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = e("pako"), r = e("./utils"), l = e("./stream/GenericWorker"), d = n ? "uint8array" : "array";
      function m(v, w) {
        l.call(this, "FlateWorker/" + v), this._pako = null, this._pakoAction = v, this._pakoOptions = w, this.meta = {};
      }
      c.magic = "\b\0", r.inherits(m, l), m.prototype.processChunk = function(v) {
        this.meta = v.meta, this._pako === null && this._createPako(), this._pako.push(r.transformTo(d, v.data), !1);
      }, m.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, m.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, m.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var v = this;
        this._pako.onData = function(w) {
          v.push({ data: w, meta: v.meta });
        };
      }, c.compressWorker = function(v) {
        return new m("Deflate", v);
      }, c.uncompressWorker = function() {
        return new m("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, f, c) {
      function n(o, g) {
        var a, A = "";
        for (a = 0; a < g; a++)
          A += String.fromCharCode(255 & o), o >>>= 8;
        return A;
      }
      function s(o, g, a, A, u, y) {
        var E, N, _ = o.file, z = o.compression, G = y !== d.utf8encode, J = r.transformTo("string", y(_.name)), V = r.transformTo("string", d.utf8encode(_.name)), Y = _.comment, nt = r.transformTo("string", y(Y)), k = r.transformTo("string", d.utf8encode(Y)), O = V.length !== _.name.length, i = k.length !== Y.length, W = "", it = "", S = "", U = _.dir, F = _.date, j = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        g && !a || (j.crc32 = o.crc32, j.compressedSize = o.compressedSize, j.uncompressedSize = o.uncompressedSize);
        var C = 0;
        g && (C |= 8), G || !O && !i || (C |= 2048);
        var B = 0, K = 0;
        U && (B |= 16), u === "UNIX" ? (K = 798, B |= function(X, ut) {
          var mt = X;
          return X || (mt = ut ? 16893 : 33204), (65535 & mt) << 16;
        }(_.unixPermissions, U)) : (K = 20, B |= function(X) {
          return 63 & (X || 0);
        }(_.dosPermissions)), E = F.getUTCHours(), E <<= 6, E |= F.getUTCMinutes(), E <<= 5, E |= F.getUTCSeconds() / 2, N = F.getUTCFullYear() - 1980, N <<= 4, N |= F.getUTCMonth() + 1, N <<= 5, N |= F.getUTCDate(), O && (it = n(1, 1) + n(m(J), 4) + V, W += "up" + n(it.length, 2) + it), i && (S = n(1, 1) + n(m(nt), 4) + k, W += "uc" + n(S.length, 2) + S);
        var Q = "";
        return Q += `
\0`, Q += n(C, 2), Q += z.magic, Q += n(E, 2), Q += n(N, 2), Q += n(j.crc32, 4), Q += n(j.compressedSize, 4), Q += n(j.uncompressedSize, 4), Q += n(J.length, 2), Q += n(W.length, 2), { fileRecord: v.LOCAL_FILE_HEADER + Q + J + W, dirRecord: v.CENTRAL_FILE_HEADER + n(K, 2) + Q + n(nt.length, 2) + "\0\0\0\0" + n(B, 4) + n(A, 4) + J + W + nt };
      }
      var r = e("../utils"), l = e("../stream/GenericWorker"), d = e("../utf8"), m = e("../crc32"), v = e("../signature");
      function w(o, g, a, A) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = g, this.zipPlatform = a, this.encodeFileName = A, this.streamFiles = o, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      r.inherits(w, l), w.prototype.push = function(o) {
        var g = o.meta.percent || 0, a = this.entriesCount, A = this._sources.length;
        this.accumulate ? this.contentBuffer.push(o) : (this.bytesWritten += o.data.length, l.prototype.push.call(this, { data: o.data, meta: { currentFile: this.currentFile, percent: a ? (g + 100 * (a - A - 1)) / a : 100 } }));
      }, w.prototype.openedSource = function(o) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = o.file.name;
        var g = this.streamFiles && !o.file.dir;
        if (g) {
          var a = s(o, g, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: a.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, w.prototype.closedSource = function(o) {
        this.accumulate = !1;
        var g = this.streamFiles && !o.file.dir, a = s(o, g, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(a.dirRecord), g)
          this.push({ data: function(A) {
            return v.DATA_DESCRIPTOR + n(A.crc32, 4) + n(A.compressedSize, 4) + n(A.uncompressedSize, 4);
          }(o), meta: { percent: 100 } });
        else
          for (this.push({ data: a.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, w.prototype.flush = function() {
        for (var o = this.bytesWritten, g = 0; g < this.dirRecords.length; g++)
          this.push({ data: this.dirRecords[g], meta: { percent: 100 } });
        var a = this.bytesWritten - o, A = function(u, y, E, N, _) {
          var z = r.transformTo("string", _(N));
          return v.CENTRAL_DIRECTORY_END + "\0\0\0\0" + n(u, 2) + n(u, 2) + n(y, 4) + n(E, 4) + n(z.length, 2) + z;
        }(this.dirRecords.length, a, o, this.zipComment, this.encodeFileName);
        this.push({ data: A, meta: { percent: 100 } });
      }, w.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, w.prototype.registerPrevious = function(o) {
        this._sources.push(o);
        var g = this;
        return o.on("data", function(a) {
          g.processChunk(a);
        }), o.on("end", function() {
          g.closedSource(g.previous.streamInfo), g._sources.length ? g.prepareNextSource() : g.end();
        }), o.on("error", function(a) {
          g.error(a);
        }), this;
      }, w.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, w.prototype.error = function(o) {
        var g = this._sources;
        if (!l.prototype.error.call(this, o))
          return !1;
        for (var a = 0; a < g.length; a++)
          try {
            g[a].error(o);
          } catch {
          }
        return !0;
      }, w.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var o = this._sources, g = 0; g < o.length; g++)
          o[g].lock();
      }, f.exports = w;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, f, c) {
      var n = e("../compressions"), s = e("./ZipFileWorker");
      c.generateWorker = function(r, l, d) {
        var m = new s(l.streamFiles, d, l.platform, l.encodeFileName), v = 0;
        try {
          r.forEach(function(w, o) {
            v++;
            var g = function(y, E) {
              var N = y || E, _ = n[N];
              if (!_)
                throw new Error(N + " is not a valid compression method !");
              return _;
            }(o.options.compression, l.compression), a = o.options.compressionOptions || l.compressionOptions || {}, A = o.dir, u = o.date;
            o._compressWorker(g, a).withStreamInfo("file", { name: w, dir: A, date: u, comment: o.comment || "", unixPermissions: o.unixPermissions, dosPermissions: o.dosPermissions }).pipe(m);
          }), m.entriesCount = v;
        } catch (w) {
          m.error(w);
        }
        return m;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, f, c) {
      function n() {
        if (!(this instanceof n))
          return new n();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new n();
          for (var r in this)
            typeof this[r] != "function" && (s[r] = this[r]);
          return s;
        };
      }
      (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(s, r) {
        return new n().loadAsync(s, r);
      }, n.external = e("./external"), f.exports = n;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, f, c) {
      var n = e("./utils"), s = e("./external"), r = e("./utf8"), l = e("./zipEntries"), d = e("./stream/Crc32Probe"), m = e("./nodejsUtils");
      function v(w) {
        return new s.Promise(function(o, g) {
          var a = w.decompressed.getContentWorker().pipe(new d());
          a.on("error", function(A) {
            g(A);
          }).on("end", function() {
            a.streamInfo.crc32 !== w.decompressed.crc32 ? g(new Error("Corrupted zip : CRC32 mismatch")) : o();
          }).resume();
        });
      }
      f.exports = function(w, o) {
        var g = this;
        return o = n.extend(o || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: r.utf8decode }), m.isNode && m.isStream(w) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : n.prepareContent("the loaded zip file", w, !0, o.optimizedBinaryString, o.base64).then(function(a) {
          var A = new l(o);
          return A.load(a), A;
        }).then(function(a) {
          var A = [s.Promise.resolve(a)], u = a.files;
          if (o.checkCRC32)
            for (var y = 0; y < u.length; y++)
              A.push(v(u[y]));
          return s.Promise.all(A);
        }).then(function(a) {
          for (var A = a.shift(), u = A.files, y = 0; y < u.length; y++) {
            var E = u[y], N = E.fileNameStr, _ = n.resolve(E.fileNameStr);
            g.file(_, E.decompressed, { binary: !0, optimizedBinaryString: !0, date: E.date, dir: E.dir, comment: E.fileCommentStr.length ? E.fileCommentStr : null, unixPermissions: E.unixPermissions, dosPermissions: E.dosPermissions, createFolders: o.createFolders }), E.dir || (g.file(_).unsafeOriginalName = N);
          }
          return A.zipComment.length && (g.comment = A.zipComment), g;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, f, c) {
      var n = e("../utils"), s = e("../stream/GenericWorker");
      function r(l, d) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(d);
      }
      n.inherits(r, s), r.prototype._bindStream = function(l) {
        var d = this;
        (this._stream = l).pause(), l.on("data", function(m) {
          d.push({ data: m, meta: { percent: 0 } });
        }).on("error", function(m) {
          d.isPaused ? this.generatedError = m : d.error(m);
        }).on("end", function() {
          d.isPaused ? d._upstreamEnded = !0 : d.end();
        });
      }, r.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, r.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, f.exports = r;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, f, c) {
      var n = e("readable-stream").Readable;
      function s(r, l, d) {
        n.call(this, l), this._helper = r;
        var m = this;
        r.on("data", function(v, w) {
          m.push(v) || m._helper.pause(), d && d(w);
        }).on("error", function(v) {
          m.emit("error", v);
        }).on("end", function() {
          m.push(null);
        });
      }
      e("../utils").inherits(s, n), s.prototype._read = function() {
        this._helper.resume();
      }, f.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, f, c) {
      f.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(n, s) {
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
    }, {}], 15: [function(e, f, c) {
      function n(_, z, G) {
        var J, V = r.getTypeOf(z), Y = r.extend(G || {}, m);
        Y.date = Y.date || /* @__PURE__ */ new Date(), Y.compression !== null && (Y.compression = Y.compression.toUpperCase()), typeof Y.unixPermissions == "string" && (Y.unixPermissions = parseInt(Y.unixPermissions, 8)), Y.unixPermissions && 16384 & Y.unixPermissions && (Y.dir = !0), Y.dosPermissions && 16 & Y.dosPermissions && (Y.dir = !0), Y.dir && (_ = u(_)), Y.createFolders && (J = A(_)) && y.call(this, J, !0);
        var nt = V === "string" && Y.binary === !1 && Y.base64 === !1;
        G && G.binary !== void 0 || (Y.binary = !nt), (z instanceof v && z.uncompressedSize === 0 || Y.dir || !z || z.length === 0) && (Y.base64 = !1, Y.binary = !0, z = "", Y.compression = "STORE", V = "string");
        var k = null;
        k = z instanceof v || z instanceof l ? z : g.isNode && g.isStream(z) ? new a(_, z) : r.prepareContent(_, z, Y.binary, Y.optimizedBinaryString, Y.base64);
        var O = new w(_, k, Y);
        this.files[_] = O;
      }
      var s = e("./utf8"), r = e("./utils"), l = e("./stream/GenericWorker"), d = e("./stream/StreamHelper"), m = e("./defaults"), v = e("./compressedObject"), w = e("./zipObject"), o = e("./generate"), g = e("./nodejsUtils"), a = e("./nodejs/NodejsStreamInputAdapter"), A = function(_) {
        _.slice(-1) === "/" && (_ = _.substring(0, _.length - 1));
        var z = _.lastIndexOf("/");
        return 0 < z ? _.substring(0, z) : "";
      }, u = function(_) {
        return _.slice(-1) !== "/" && (_ += "/"), _;
      }, y = function(_, z) {
        return z = z !== void 0 ? z : m.createFolders, _ = u(_), this.files[_] || n.call(this, _, null, { dir: !0, createFolders: z }), this.files[_];
      };
      function E(_) {
        return Object.prototype.toString.call(_) === "[object RegExp]";
      }
      var N = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(_) {
        var z, G, J;
        for (z in this.files)
          J = this.files[z], (G = z.slice(this.root.length, z.length)) && z.slice(0, this.root.length) === this.root && _(G, J);
      }, filter: function(_) {
        var z = [];
        return this.forEach(function(G, J) {
          _(G, J) && z.push(J);
        }), z;
      }, file: function(_, z, G) {
        if (arguments.length !== 1)
          return _ = this.root + _, n.call(this, _, z, G), this;
        if (E(_)) {
          var J = _;
          return this.filter(function(Y, nt) {
            return !nt.dir && J.test(Y);
          });
        }
        var V = this.files[this.root + _];
        return V && !V.dir ? V : null;
      }, folder: function(_) {
        if (!_)
          return this;
        if (E(_))
          return this.filter(function(V, Y) {
            return Y.dir && _.test(V);
          });
        var z = this.root + _, G = y.call(this, z), J = this.clone();
        return J.root = G.name, J;
      }, remove: function(_) {
        _ = this.root + _;
        var z = this.files[_];
        if (z || (_.slice(-1) !== "/" && (_ += "/"), z = this.files[_]), z && !z.dir)
          delete this.files[_];
        else
          for (var G = this.filter(function(V, Y) {
            return Y.name.slice(0, _.length) === _;
          }), J = 0; J < G.length; J++)
            delete this.files[G[J].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(_) {
        var z, G = {};
        try {
          if ((G = r.extend(_ || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = G.type.toLowerCase(), G.compression = G.compression.toUpperCase(), G.type === "binarystring" && (G.type = "string"), !G.type)
            throw new Error("No output type specified.");
          r.checkSupport(G.type), G.platform !== "darwin" && G.platform !== "freebsd" && G.platform !== "linux" && G.platform !== "sunos" || (G.platform = "UNIX"), G.platform === "win32" && (G.platform = "DOS");
          var J = G.comment || this.comment || "";
          z = o.generateWorker(this, G, J);
        } catch (V) {
          (z = new l("error")).error(V);
        }
        return new d(z, G.type || "string", G.mimeType);
      }, generateAsync: function(_, z) {
        return this.generateInternalStream(_).accumulate(z);
      }, generateNodeStream: function(_, z) {
        return (_ = _ || {}).type || (_.type = "nodebuffer"), this.generateInternalStream(_).toNodejsStream(z);
      } };
      f.exports = N;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, f, c) {
      f.exports = e("stream");
    }, { stream: void 0 }], 17: [function(e, f, c) {
      var n = e("./DataReader");
      function s(r) {
        n.call(this, r);
        for (var l = 0; l < this.data.length; l++)
          r[l] = 255 & r[l];
      }
      e("../utils").inherits(s, n), s.prototype.byteAt = function(r) {
        return this.data[this.zero + r];
      }, s.prototype.lastIndexOfSignature = function(r) {
        for (var l = r.charCodeAt(0), d = r.charCodeAt(1), m = r.charCodeAt(2), v = r.charCodeAt(3), w = this.length - 4; 0 <= w; --w)
          if (this.data[w] === l && this.data[w + 1] === d && this.data[w + 2] === m && this.data[w + 3] === v)
            return w - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(r) {
        var l = r.charCodeAt(0), d = r.charCodeAt(1), m = r.charCodeAt(2), v = r.charCodeAt(3), w = this.readData(4);
        return l === w[0] && d === w[1] && m === w[2] && v === w[3];
      }, s.prototype.readData = function(r) {
        if (this.checkOffset(r), r === 0)
          return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, l;
      }, f.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, f, c) {
      var n = e("../utils");
      function s(r) {
        this.data = r, this.length = r.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(r) {
        this.checkIndex(this.index + r);
      }, checkIndex: function(r) {
        if (this.length < this.zero + r || r < 0)
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + r + "). Corrupted zip ?");
      }, setIndex: function(r) {
        this.checkIndex(r), this.index = r;
      }, skip: function(r) {
        this.setIndex(this.index + r);
      }, byteAt: function() {
      }, readInt: function(r) {
        var l, d = 0;
        for (this.checkOffset(r), l = this.index + r - 1; l >= this.index; l--)
          d = (d << 8) + this.byteAt(l);
        return this.index += r, d;
      }, readString: function(r) {
        return n.transformTo("string", this.readData(r));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var r = this.readInt(4);
        return new Date(Date.UTC(1980 + (r >> 25 & 127), (r >> 21 & 15) - 1, r >> 16 & 31, r >> 11 & 31, r >> 5 & 63, (31 & r) << 1));
      } }, f.exports = s;
    }, { "../utils": 32 }], 19: [function(e, f, c) {
      var n = e("./Uint8ArrayReader");
      function s(r) {
        n.call(this, r);
      }
      e("../utils").inherits(s, n), s.prototype.readData = function(r) {
        this.checkOffset(r);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, l;
      }, f.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, f, c) {
      var n = e("./DataReader");
      function s(r) {
        n.call(this, r);
      }
      e("../utils").inherits(s, n), s.prototype.byteAt = function(r) {
        return this.data.charCodeAt(this.zero + r);
      }, s.prototype.lastIndexOfSignature = function(r) {
        return this.data.lastIndexOf(r) - this.zero;
      }, s.prototype.readAndCheckSignature = function(r) {
        return r === this.readData(4);
      }, s.prototype.readData = function(r) {
        this.checkOffset(r);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, l;
      }, f.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, f, c) {
      var n = e("./ArrayReader");
      function s(r) {
        n.call(this, r);
      }
      e("../utils").inherits(s, n), s.prototype.readData = function(r) {
        if (this.checkOffset(r), r === 0)
          return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + r);
        return this.index += r, l;
      }, f.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, f, c) {
      var n = e("../utils"), s = e("../support"), r = e("./ArrayReader"), l = e("./StringReader"), d = e("./NodeBufferReader"), m = e("./Uint8ArrayReader");
      f.exports = function(v) {
        var w = n.getTypeOf(v);
        return n.checkSupport(w), w !== "string" || s.uint8array ? w === "nodebuffer" ? new d(v) : s.uint8array ? new m(n.transformTo("uint8array", v)) : new r(n.transformTo("array", v)) : new l(v);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, f, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(e, f, c) {
      var n = e("./GenericWorker"), s = e("../utils");
      function r(l) {
        n.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(r, n), r.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, f.exports = r;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, f, c) {
      var n = e("./GenericWorker"), s = e("../crc32");
      function r() {
        n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      e("../utils").inherits(r, n), r.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, f.exports = r;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, f, c) {
      var n = e("../utils"), s = e("./GenericWorker");
      function r(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      n.inherits(r, s), r.prototype.processChunk = function(l) {
        if (l) {
          var d = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = d + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, f.exports = r;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, f, c) {
      var n = e("../utils"), s = e("./GenericWorker");
      function r(l) {
        s.call(this, "DataWorker");
        var d = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(m) {
          d.dataIsReady = !0, d.data = m, d.max = m && m.length || 0, d.type = n.getTypeOf(m), d.isPaused || d._tickAndRepeat();
        }, function(m) {
          d.error(m);
        });
      }
      n.inherits(r, s), r.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, r.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, n.delay(this._tickAndRepeat, [], this)), !0);
      }, r.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, r.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var l = null, d = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, d);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, d);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, d);
        }
        return this.index = d, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, f.exports = r;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, f, c) {
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
      }, on: function(s, r) {
        return this._listeners[s].push(r), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, r) {
        if (this._listeners[s])
          for (var l = 0; l < this._listeners[s].length; l++)
            this._listeners[s][l].call(this, r);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var r = this;
        return s.on("data", function(l) {
          r.processChunk(l);
        }), s.on("end", function() {
          r.end();
        }), s.on("error", function(l) {
          r.error(l);
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
      }, withStreamInfo: function(s, r) {
        return this.extraStreamInfo[s] = r, this.mergeStreamInfo(), this;
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
      } }, f.exports = n;
    }, {}], 29: [function(e, f, c) {
      var n = e("../utils"), s = e("./ConvertWorker"), r = e("./GenericWorker"), l = e("../base64"), d = e("../support"), m = e("../external"), v = null;
      if (d.nodestream)
        try {
          v = e("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function w(g, a) {
        return new m.Promise(function(A, u) {
          var y = [], E = g._internalType, N = g._outputType, _ = g._mimeType;
          g.on("data", function(z, G) {
            y.push(z), a && a(G);
          }).on("error", function(z) {
            y = [], u(z);
          }).on("end", function() {
            try {
              var z = function(G, J, V) {
                switch (G) {
                  case "blob":
                    return n.newBlob(n.transformTo("arraybuffer", J), V);
                  case "base64":
                    return l.encode(J);
                  default:
                    return n.transformTo(G, J);
                }
              }(N, function(G, J) {
                var V, Y = 0, nt = null, k = 0;
                for (V = 0; V < J.length; V++)
                  k += J[V].length;
                switch (G) {
                  case "string":
                    return J.join("");
                  case "array":
                    return Array.prototype.concat.apply([], J);
                  case "uint8array":
                    for (nt = new Uint8Array(k), V = 0; V < J.length; V++)
                      nt.set(J[V], Y), Y += J[V].length;
                    return nt;
                  case "nodebuffer":
                    return Buffer.concat(J);
                  default:
                    throw new Error("concat : unsupported type '" + G + "'");
                }
              }(E, y), _);
              A(z);
            } catch (G) {
              u(G);
            }
            y = [];
          }).resume();
        });
      }
      function o(g, a, A) {
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
          this._internalType = u, this._outputType = a, this._mimeType = A, n.checkSupport(u), this._worker = g.pipe(new s(u)), g.lock();
        } catch (y) {
          this._worker = new r("error"), this._worker.error(y);
        }
      }
      o.prototype = { accumulate: function(g) {
        return w(this, g);
      }, on: function(g, a) {
        var A = this;
        return g === "data" ? this._worker.on(g, function(u) {
          a.call(A, u.data, u.meta);
        }) : this._worker.on(g, function() {
          n.delay(a, arguments, A);
        }), this;
      }, resume: function() {
        return n.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(g) {
        if (n.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new v(this, { objectMode: this._outputType !== "nodebuffer" }, g);
      } }, f.exports = o;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, f, c) {
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
        c.nodestream = !!e("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(e, f, c) {
      for (var n = e("./utils"), s = e("./support"), r = e("./nodejsUtils"), l = e("./stream/GenericWorker"), d = new Array(256), m = 0; m < 256; m++)
        d[m] = 252 <= m ? 6 : 248 <= m ? 5 : 240 <= m ? 4 : 224 <= m ? 3 : 192 <= m ? 2 : 1;
      d[254] = d[254] = 1;
      function v() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function w() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(o) {
        return s.nodebuffer ? r.newBufferFrom(o, "utf-8") : function(g) {
          var a, A, u, y, E, N = g.length, _ = 0;
          for (y = 0; y < N; y++)
            (64512 & (A = g.charCodeAt(y))) == 55296 && y + 1 < N && (64512 & (u = g.charCodeAt(y + 1))) == 56320 && (A = 65536 + (A - 55296 << 10) + (u - 56320), y++), _ += A < 128 ? 1 : A < 2048 ? 2 : A < 65536 ? 3 : 4;
          for (a = s.uint8array ? new Uint8Array(_) : new Array(_), y = E = 0; E < _; y++)
            (64512 & (A = g.charCodeAt(y))) == 55296 && y + 1 < N && (64512 & (u = g.charCodeAt(y + 1))) == 56320 && (A = 65536 + (A - 55296 << 10) + (u - 56320), y++), A < 128 ? a[E++] = A : (A < 2048 ? a[E++] = 192 | A >>> 6 : (A < 65536 ? a[E++] = 224 | A >>> 12 : (a[E++] = 240 | A >>> 18, a[E++] = 128 | A >>> 12 & 63), a[E++] = 128 | A >>> 6 & 63), a[E++] = 128 | 63 & A);
          return a;
        }(o);
      }, c.utf8decode = function(o) {
        return s.nodebuffer ? n.transformTo("nodebuffer", o).toString("utf-8") : function(g) {
          var a, A, u, y, E = g.length, N = new Array(2 * E);
          for (a = A = 0; a < E; )
            if ((u = g[a++]) < 128)
              N[A++] = u;
            else if (4 < (y = d[u]))
              N[A++] = 65533, a += y - 1;
            else {
              for (u &= y === 2 ? 31 : y === 3 ? 15 : 7; 1 < y && a < E; )
                u = u << 6 | 63 & g[a++], y--;
              1 < y ? N[A++] = 65533 : u < 65536 ? N[A++] = u : (u -= 65536, N[A++] = 55296 | u >> 10 & 1023, N[A++] = 56320 | 1023 & u);
            }
          return N.length !== A && (N.subarray ? N = N.subarray(0, A) : N.length = A), n.applyFromCharCode(N);
        }(o = n.transformTo(s.uint8array ? "uint8array" : "array", o));
      }, n.inherits(v, l), v.prototype.processChunk = function(o) {
        var g = n.transformTo(s.uint8array ? "uint8array" : "array", o.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var a = g;
            (g = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), g.set(a, this.leftOver.length);
          } else
            g = this.leftOver.concat(g);
          this.leftOver = null;
        }
        var A = function(y, E) {
          var N;
          for ((E = E || y.length) > y.length && (E = y.length), N = E - 1; 0 <= N && (192 & y[N]) == 128; )
            N--;
          return N < 0 || N === 0 ? E : N + d[y[N]] > E ? N : E;
        }(g), u = g;
        A !== g.length && (s.uint8array ? (u = g.subarray(0, A), this.leftOver = g.subarray(A, g.length)) : (u = g.slice(0, A), this.leftOver = g.slice(A, g.length))), this.push({ data: c.utf8decode(u), meta: o.meta });
      }, v.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = v, n.inherits(w, l), w.prototype.processChunk = function(o) {
        this.push({ data: c.utf8encode(o.data), meta: o.meta });
      }, c.Utf8EncodeWorker = w;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, f, c) {
      var n = e("./support"), s = e("./base64"), r = e("./nodejsUtils"), l = e("./external");
      function d(a) {
        return a;
      }
      function m(a, A) {
        for (var u = 0; u < a.length; ++u)
          A[u] = 255 & a.charCodeAt(u);
        return A;
      }
      e("setimmediate"), c.newBlob = function(a, A) {
        c.checkSupport("blob");
        try {
          return new Blob([a], { type: A });
        } catch {
          try {
            var u = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return u.append(a), u.getBlob(A);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var v = { stringifyByChunk: function(a, A, u) {
        var y = [], E = 0, N = a.length;
        if (N <= u)
          return String.fromCharCode.apply(null, a);
        for (; E < N; )
          A === "array" || A === "nodebuffer" ? y.push(String.fromCharCode.apply(null, a.slice(E, Math.min(E + u, N)))) : y.push(String.fromCharCode.apply(null, a.subarray(E, Math.min(E + u, N)))), E += u;
        return y.join("");
      }, stringifyByChar: function(a) {
        for (var A = "", u = 0; u < a.length; u++)
          A += String.fromCharCode(a[u]);
        return A;
      }, applyCanBeUsed: { uint8array: function() {
        try {
          return n.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
        } catch {
          return !1;
        }
      }(), nodebuffer: function() {
        try {
          return n.nodebuffer && String.fromCharCode.apply(null, r.allocBuffer(1)).length === 1;
        } catch {
          return !1;
        }
      }() } };
      function w(a) {
        var A = 65536, u = c.getTypeOf(a), y = !0;
        if (u === "uint8array" ? y = v.applyCanBeUsed.uint8array : u === "nodebuffer" && (y = v.applyCanBeUsed.nodebuffer), y)
          for (; 1 < A; )
            try {
              return v.stringifyByChunk(a, u, A);
            } catch {
              A = Math.floor(A / 2);
            }
        return v.stringifyByChar(a);
      }
      function o(a, A) {
        for (var u = 0; u < a.length; u++)
          A[u] = a[u];
        return A;
      }
      c.applyFromCharCode = w;
      var g = {};
      g.string = { string: d, array: function(a) {
        return m(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return g.string.uint8array(a).buffer;
      }, uint8array: function(a) {
        return m(a, new Uint8Array(a.length));
      }, nodebuffer: function(a) {
        return m(a, r.allocBuffer(a.length));
      } }, g.array = { string: w, array: d, arraybuffer: function(a) {
        return new Uint8Array(a).buffer;
      }, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return r.newBufferFrom(a);
      } }, g.arraybuffer = { string: function(a) {
        return w(new Uint8Array(a));
      }, array: function(a) {
        return o(new Uint8Array(a), new Array(a.byteLength));
      }, arraybuffer: d, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return r.newBufferFrom(new Uint8Array(a));
      } }, g.uint8array = { string: w, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return a.buffer;
      }, uint8array: d, nodebuffer: function(a) {
        return r.newBufferFrom(a);
      } }, g.nodebuffer = { string: w, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return g.nodebuffer.uint8array(a).buffer;
      }, uint8array: function(a) {
        return o(a, new Uint8Array(a.length));
      }, nodebuffer: d }, c.transformTo = function(a, A) {
        if (A = A || "", !a)
          return A;
        c.checkSupport(a);
        var u = c.getTypeOf(A);
        return g[u][a](A);
      }, c.resolve = function(a) {
        for (var A = a.split("/"), u = [], y = 0; y < A.length; y++) {
          var E = A[y];
          E === "." || E === "" && y !== 0 && y !== A.length - 1 || (E === ".." ? u.pop() : u.push(E));
        }
        return u.join("/");
      }, c.getTypeOf = function(a) {
        return typeof a == "string" ? "string" : Object.prototype.toString.call(a) === "[object Array]" ? "array" : n.nodebuffer && r.isBuffer(a) ? "nodebuffer" : n.uint8array && a instanceof Uint8Array ? "uint8array" : n.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(a) {
        if (!n[a.toLowerCase()])
          throw new Error(a + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(a) {
        var A, u, y = "";
        for (u = 0; u < (a || "").length; u++)
          y += "\\x" + ((A = a.charCodeAt(u)) < 16 ? "0" : "") + A.toString(16).toUpperCase();
        return y;
      }, c.delay = function(a, A, u) {
        setImmediate(function() {
          a.apply(u || null, A || []);
        });
      }, c.inherits = function(a, A) {
        function u() {
        }
        u.prototype = A.prototype, a.prototype = new u();
      }, c.extend = function() {
        var a, A, u = {};
        for (a = 0; a < arguments.length; a++)
          for (A in arguments[a])
            Object.prototype.hasOwnProperty.call(arguments[a], A) && u[A] === void 0 && (u[A] = arguments[a][A]);
        return u;
      }, c.prepareContent = function(a, A, u, y, E) {
        return l.Promise.resolve(A).then(function(N) {
          return n.blob && (N instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(N)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(_, z) {
            var G = new FileReader();
            G.onload = function(J) {
              _(J.target.result);
            }, G.onerror = function(J) {
              z(J.target.error);
            }, G.readAsArrayBuffer(N);
          }) : N;
        }).then(function(N) {
          var _ = c.getTypeOf(N);
          return _ ? (_ === "arraybuffer" ? N = c.transformTo("uint8array", N) : _ === "string" && (E ? N = s.decode(N) : u && y !== !0 && (N = function(z) {
            return m(z, n.uint8array ? new Uint8Array(z.length) : new Array(z.length));
          }(N))), N) : l.Promise.reject(new Error("Can't read the data of '" + a + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, f, c) {
      var n = e("./reader/readerFor"), s = e("./utils"), r = e("./signature"), l = e("./zipEntry"), d = e("./support");
      function m(v) {
        this.files = [], this.loadOptions = v;
      }
      m.prototype = { checkSignature: function(v) {
        if (!this.reader.readAndCheckSignature(v)) {
          this.reader.index -= 4;
          var w = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(w) + ", expected " + s.pretty(v) + ")");
        }
      }, isSignature: function(v, w) {
        var o = this.reader.index;
        this.reader.setIndex(v);
        var g = this.reader.readString(4) === w;
        return this.reader.setIndex(o), g;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var v = this.reader.readData(this.zipCommentLength), w = d.uint8array ? "uint8array" : "array", o = s.transformTo(w, v);
        this.zipComment = this.loadOptions.decodeFileName(o);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var v, w, o, g = this.zip64EndOfCentralSize - 44; 0 < g; )
          v = this.reader.readInt(2), w = this.reader.readInt(4), o = this.reader.readData(w), this.zip64ExtensibleData[v] = { id: v, length: w, value: o };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var v, w;
        for (v = 0; v < this.files.length; v++)
          w = this.files[v], this.reader.setIndex(w.localHeaderOffset), this.checkSignature(r.LOCAL_FILE_HEADER), w.readLocalPart(this.reader), w.handleUTF8(), w.processAttributes();
      }, readCentralDir: function() {
        var v;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(r.CENTRAL_FILE_HEADER); )
          (v = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(v);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var v = this.reader.lastIndexOfSignature(r.CENTRAL_DIRECTORY_END);
        if (v < 0)
          throw this.isSignature(0, r.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(v);
        var w = v;
        if (this.checkSignature(r.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (v = this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(v), this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, r.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(r.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(r.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var o = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (o += 20, o += 12 + this.zip64EndOfCentralSize);
        var g = w - o;
        if (0 < g)
          this.isSignature(w, r.CENTRAL_FILE_HEADER) || (this.reader.zero = g);
        else if (g < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(g) + " bytes.");
      }, prepareReader: function(v) {
        this.reader = n(v);
      }, load: function(v) {
        this.prepareReader(v), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, f.exports = m;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, f, c) {
      var n = e("./reader/readerFor"), s = e("./utils"), r = e("./compressedObject"), l = e("./crc32"), d = e("./utf8"), m = e("./compressions"), v = e("./support");
      function w(o, g) {
        this.options = o, this.loadOptions = g;
      }
      w.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(o) {
        var g, a;
        if (o.skip(22), this.fileNameLength = o.readInt(2), a = o.readInt(2), this.fileName = o.readData(this.fileNameLength), o.skip(a), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((g = function(A) {
          for (var u in m)
            if (Object.prototype.hasOwnProperty.call(m, u) && m[u].magic === A)
              return m[u];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new r(this.compressedSize, this.uncompressedSize, this.crc32, g, o.readData(this.compressedSize));
      }, readCentralPart: function(o) {
        this.versionMadeBy = o.readInt(2), o.skip(2), this.bitFlag = o.readInt(2), this.compressionMethod = o.readString(2), this.date = o.readDate(), this.crc32 = o.readInt(4), this.compressedSize = o.readInt(4), this.uncompressedSize = o.readInt(4);
        var g = o.readInt(2);
        if (this.extraFieldsLength = o.readInt(2), this.fileCommentLength = o.readInt(2), this.diskNumberStart = o.readInt(2), this.internalFileAttributes = o.readInt(2), this.externalFileAttributes = o.readInt(4), this.localHeaderOffset = o.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        o.skip(g), this.readExtraFields(o), this.parseZIP64ExtraField(o), this.fileComment = o.readData(this.fileCommentLength);
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
        var g, a, A, u = o.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); o.index + 4 < u; )
          g = o.readInt(2), a = o.readInt(2), A = o.readData(a), this.extraFields[g] = { id: g, length: a, value: A };
        o.setIndex(u);
      }, handleUTF8: function() {
        var o = v.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = d.utf8decode(this.fileName), this.fileCommentStr = d.utf8decode(this.fileComment);
        else {
          var g = this.findExtraFieldUnicodePath();
          if (g !== null)
            this.fileNameStr = g;
          else {
            var a = s.transformTo(o, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(a);
          }
          var A = this.findExtraFieldUnicodeComment();
          if (A !== null)
            this.fileCommentStr = A;
          else {
            var u = s.transformTo(o, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(u);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var o = this.extraFields[28789];
        if (o) {
          var g = n(o.value);
          return g.readInt(1) !== 1 || l(this.fileName) !== g.readInt(4) ? null : d.utf8decode(g.readData(o.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var o = this.extraFields[25461];
        if (o) {
          var g = n(o.value);
          return g.readInt(1) !== 1 || l(this.fileComment) !== g.readInt(4) ? null : d.utf8decode(g.readData(o.length - 5));
        }
        return null;
      } }, f.exports = w;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, f, c) {
      function n(g, a, A) {
        this.name = g, this.dir = A.dir, this.date = A.date, this.comment = A.comment, this.unixPermissions = A.unixPermissions, this.dosPermissions = A.dosPermissions, this._data = a, this._dataBinary = A.binary, this.options = { compression: A.compression, compressionOptions: A.compressionOptions };
      }
      var s = e("./stream/StreamHelper"), r = e("./stream/DataWorker"), l = e("./utf8"), d = e("./compressedObject"), m = e("./stream/GenericWorker");
      n.prototype = { internalStream: function(g) {
        var a = null, A = "string";
        try {
          if (!g)
            throw new Error("No output type specified.");
          var u = (A = g.toLowerCase()) === "string" || A === "text";
          A !== "binarystring" && A !== "text" || (A = "string"), a = this._decompressWorker();
          var y = !this._dataBinary;
          y && !u && (a = a.pipe(new l.Utf8EncodeWorker())), !y && u && (a = a.pipe(new l.Utf8DecodeWorker()));
        } catch (E) {
          (a = new m("error")).error(E);
        }
        return new s(a, A, "");
      }, async: function(g, a) {
        return this.internalStream(g).accumulate(a);
      }, nodeStream: function(g, a) {
        return this.internalStream(g || "nodebuffer").toNodejsStream(a);
      }, _compressWorker: function(g, a) {
        if (this._data instanceof d && this._data.compression.magic === g.magic)
          return this._data.getCompressedWorker();
        var A = this._decompressWorker();
        return this._dataBinary || (A = A.pipe(new l.Utf8EncodeWorker())), d.createWorkerFrom(A, g, a);
      }, _decompressWorker: function() {
        return this._data instanceof d ? this._data.getContentWorker() : this._data instanceof m ? this._data : new r(this._data);
      } };
      for (var v = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], w = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, o = 0; o < v.length; o++)
        n.prototype[v[o]] = w;
      f.exports = n;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, f, c) {
      (function(n) {
        var s, r, l = n.MutationObserver || n.WebKitMutationObserver;
        if (l) {
          var d = 0, m = new l(g), v = n.document.createTextNode("");
          m.observe(v, { characterData: !0 }), s = function() {
            v.data = d = ++d % 2;
          };
        } else if (n.setImmediate || n.MessageChannel === void 0)
          s = "document" in n && "onreadystatechange" in n.document.createElement("script") ? function() {
            var a = n.document.createElement("script");
            a.onreadystatechange = function() {
              g(), a.onreadystatechange = null, a.parentNode.removeChild(a), a = null;
            }, n.document.documentElement.appendChild(a);
          } : function() {
            setTimeout(g, 0);
          };
        else {
          var w = new n.MessageChannel();
          w.port1.onmessage = g, s = function() {
            w.port2.postMessage(0);
          };
        }
        var o = [];
        function g() {
          var a, A;
          r = !0;
          for (var u = o.length; u; ) {
            for (A = o, o = [], a = -1; ++a < u; )
              A[a]();
            u = o.length;
          }
          r = !1;
        }
        f.exports = function(a) {
          o.push(a) !== 1 || r || s();
        };
      }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(e, f, c) {
      var n = e("immediate");
      function s() {
      }
      var r = {}, l = ["REJECTED"], d = ["FULFILLED"], m = ["PENDING"];
      function v(u) {
        if (typeof u != "function")
          throw new TypeError("resolver must be a function");
        this.state = m, this.queue = [], this.outcome = void 0, u !== s && a(this, u);
      }
      function w(u, y, E) {
        this.promise = u, typeof y == "function" && (this.onFulfilled = y, this.callFulfilled = this.otherCallFulfilled), typeof E == "function" && (this.onRejected = E, this.callRejected = this.otherCallRejected);
      }
      function o(u, y, E) {
        n(function() {
          var N;
          try {
            N = y(E);
          } catch (_) {
            return r.reject(u, _);
          }
          N === u ? r.reject(u, new TypeError("Cannot resolve promise with itself")) : r.resolve(u, N);
        });
      }
      function g(u) {
        var y = u && u.then;
        if (u && (typeof u == "object" || typeof u == "function") && typeof y == "function")
          return function() {
            y.apply(u, arguments);
          };
      }
      function a(u, y) {
        var E = !1;
        function N(G) {
          E || (E = !0, r.reject(u, G));
        }
        function _(G) {
          E || (E = !0, r.resolve(u, G));
        }
        var z = A(function() {
          y(_, N);
        });
        z.status === "error" && N(z.value);
      }
      function A(u, y) {
        var E = {};
        try {
          E.value = u(y), E.status = "success";
        } catch (N) {
          E.status = "error", E.value = N;
        }
        return E;
      }
      (f.exports = v).prototype.finally = function(u) {
        if (typeof u != "function")
          return this;
        var y = this.constructor;
        return this.then(function(E) {
          return y.resolve(u()).then(function() {
            return E;
          });
        }, function(E) {
          return y.resolve(u()).then(function() {
            throw E;
          });
        });
      }, v.prototype.catch = function(u) {
        return this.then(null, u);
      }, v.prototype.then = function(u, y) {
        if (typeof u != "function" && this.state === d || typeof y != "function" && this.state === l)
          return this;
        var E = new this.constructor(s);
        return this.state !== m ? o(E, this.state === d ? u : y, this.outcome) : this.queue.push(new w(E, u, y)), E;
      }, w.prototype.callFulfilled = function(u) {
        r.resolve(this.promise, u);
      }, w.prototype.otherCallFulfilled = function(u) {
        o(this.promise, this.onFulfilled, u);
      }, w.prototype.callRejected = function(u) {
        r.reject(this.promise, u);
      }, w.prototype.otherCallRejected = function(u) {
        o(this.promise, this.onRejected, u);
      }, r.resolve = function(u, y) {
        var E = A(g, y);
        if (E.status === "error")
          return r.reject(u, E.value);
        var N = E.value;
        if (N)
          a(u, N);
        else {
          u.state = d, u.outcome = y;
          for (var _ = -1, z = u.queue.length; ++_ < z; )
            u.queue[_].callFulfilled(y);
        }
        return u;
      }, r.reject = function(u, y) {
        u.state = l, u.outcome = y;
        for (var E = -1, N = u.queue.length; ++E < N; )
          u.queue[E].callRejected(y);
        return u;
      }, v.resolve = function(u) {
        return u instanceof this ? u : r.resolve(new this(s), u);
      }, v.reject = function(u) {
        var y = new this(s);
        return r.reject(y, u);
      }, v.all = function(u) {
        var y = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, N = !1;
        if (!E)
          return this.resolve([]);
        for (var _ = new Array(E), z = 0, G = -1, J = new this(s); ++G < E; )
          V(u[G], G);
        return J;
        function V(Y, nt) {
          y.resolve(Y).then(function(k) {
            _[nt] = k, ++z !== E || N || (N = !0, r.resolve(J, _));
          }, function(k) {
            N || (N = !0, r.reject(J, k));
          });
        }
      }, v.race = function(u) {
        var y = this;
        if (Object.prototype.toString.call(u) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var E = u.length, N = !1;
        if (!E)
          return this.resolve([]);
        for (var _ = -1, z = new this(s); ++_ < E; )
          G = u[_], y.resolve(G).then(function(J) {
            N || (N = !0, r.resolve(z, J));
          }, function(J) {
            N || (N = !0, r.reject(z, J));
          });
        var G;
        return z;
      };
    }, { immediate: 36 }], 38: [function(e, f, c) {
      var n = {};
      (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), f.exports = n;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, f, c) {
      var n = e("./zlib/deflate"), s = e("./utils/common"), r = e("./utils/strings"), l = e("./zlib/messages"), d = e("./zlib/zstream"), m = Object.prototype.toString, v = 0, w = -1, o = 0, g = 8;
      function a(u) {
        if (!(this instanceof a))
          return new a(u);
        this.options = s.assign({ level: w, method: g, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: o, to: "" }, u || {});
        var y = this.options;
        y.raw && 0 < y.windowBits ? y.windowBits = -y.windowBits : y.gzip && 0 < y.windowBits && y.windowBits < 16 && (y.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new d(), this.strm.avail_out = 0;
        var E = n.deflateInit2(this.strm, y.level, y.method, y.windowBits, y.memLevel, y.strategy);
        if (E !== v)
          throw new Error(l[E]);
        if (y.header && n.deflateSetHeader(this.strm, y.header), y.dictionary) {
          var N;
          if (N = typeof y.dictionary == "string" ? r.string2buf(y.dictionary) : m.call(y.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(y.dictionary) : y.dictionary, (E = n.deflateSetDictionary(this.strm, N)) !== v)
            throw new Error(l[E]);
          this._dict_set = !0;
        }
      }
      function A(u, y) {
        var E = new a(y);
        if (E.push(u, !0), E.err)
          throw E.msg || l[E.err];
        return E.result;
      }
      a.prototype.push = function(u, y) {
        var E, N, _ = this.strm, z = this.options.chunkSize;
        if (this.ended)
          return !1;
        N = y === ~~y ? y : y === !0 ? 4 : 0, typeof u == "string" ? _.input = r.string2buf(u) : m.call(u) === "[object ArrayBuffer]" ? _.input = new Uint8Array(u) : _.input = u, _.next_in = 0, _.avail_in = _.input.length;
        do {
          if (_.avail_out === 0 && (_.output = new s.Buf8(z), _.next_out = 0, _.avail_out = z), (E = n.deflate(_, N)) !== 1 && E !== v)
            return this.onEnd(E), !(this.ended = !0);
          _.avail_out !== 0 && (_.avail_in !== 0 || N !== 4 && N !== 2) || (this.options.to === "string" ? this.onData(r.buf2binstring(s.shrinkBuf(_.output, _.next_out))) : this.onData(s.shrinkBuf(_.output, _.next_out)));
        } while ((0 < _.avail_in || _.avail_out === 0) && E !== 1);
        return N === 4 ? (E = n.deflateEnd(this.strm), this.onEnd(E), this.ended = !0, E === v) : N !== 2 || (this.onEnd(v), !(_.avail_out = 0));
      }, a.prototype.onData = function(u) {
        this.chunks.push(u);
      }, a.prototype.onEnd = function(u) {
        u === v && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = u, this.msg = this.strm.msg;
      }, c.Deflate = a, c.deflate = A, c.deflateRaw = function(u, y) {
        return (y = y || {}).raw = !0, A(u, y);
      }, c.gzip = function(u, y) {
        return (y = y || {}).gzip = !0, A(u, y);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, f, c) {
      var n = e("./zlib/inflate"), s = e("./utils/common"), r = e("./utils/strings"), l = e("./zlib/constants"), d = e("./zlib/messages"), m = e("./zlib/zstream"), v = e("./zlib/gzheader"), w = Object.prototype.toString;
      function o(a) {
        if (!(this instanceof o))
          return new o(a);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, a || {});
        var A = this.options;
        A.raw && 0 <= A.windowBits && A.windowBits < 16 && (A.windowBits = -A.windowBits, A.windowBits === 0 && (A.windowBits = -15)), !(0 <= A.windowBits && A.windowBits < 16) || a && a.windowBits || (A.windowBits += 32), 15 < A.windowBits && A.windowBits < 48 && !(15 & A.windowBits) && (A.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new m(), this.strm.avail_out = 0;
        var u = n.inflateInit2(this.strm, A.windowBits);
        if (u !== l.Z_OK)
          throw new Error(d[u]);
        this.header = new v(), n.inflateGetHeader(this.strm, this.header);
      }
      function g(a, A) {
        var u = new o(A);
        if (u.push(a, !0), u.err)
          throw u.msg || d[u.err];
        return u.result;
      }
      o.prototype.push = function(a, A) {
        var u, y, E, N, _, z, G = this.strm, J = this.options.chunkSize, V = this.options.dictionary, Y = !1;
        if (this.ended)
          return !1;
        y = A === ~~A ? A : A === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof a == "string" ? G.input = r.binstring2buf(a) : w.call(a) === "[object ArrayBuffer]" ? G.input = new Uint8Array(a) : G.input = a, G.next_in = 0, G.avail_in = G.input.length;
        do {
          if (G.avail_out === 0 && (G.output = new s.Buf8(J), G.next_out = 0, G.avail_out = J), (u = n.inflate(G, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && V && (z = typeof V == "string" ? r.string2buf(V) : w.call(V) === "[object ArrayBuffer]" ? new Uint8Array(V) : V, u = n.inflateSetDictionary(this.strm, z)), u === l.Z_BUF_ERROR && Y === !0 && (u = l.Z_OK, Y = !1), u !== l.Z_STREAM_END && u !== l.Z_OK)
            return this.onEnd(u), !(this.ended = !0);
          G.next_out && (G.avail_out !== 0 && u !== l.Z_STREAM_END && (G.avail_in !== 0 || y !== l.Z_FINISH && y !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (E = r.utf8border(G.output, G.next_out), N = G.next_out - E, _ = r.buf2string(G.output, E), G.next_out = N, G.avail_out = J - N, N && s.arraySet(G.output, G.output, E, N, 0), this.onData(_)) : this.onData(s.shrinkBuf(G.output, G.next_out)))), G.avail_in === 0 && G.avail_out === 0 && (Y = !0);
        } while ((0 < G.avail_in || G.avail_out === 0) && u !== l.Z_STREAM_END);
        return u === l.Z_STREAM_END && (y = l.Z_FINISH), y === l.Z_FINISH ? (u = n.inflateEnd(this.strm), this.onEnd(u), this.ended = !0, u === l.Z_OK) : y !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(G.avail_out = 0));
      }, o.prototype.onData = function(a) {
        this.chunks.push(a);
      }, o.prototype.onEnd = function(a) {
        a === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg;
      }, c.Inflate = o, c.inflate = g, c.inflateRaw = function(a, A) {
        return (A = A || {}).raw = !0, g(a, A);
      }, c.ungzip = g;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, f, c) {
      var n = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var d = Array.prototype.slice.call(arguments, 1); d.length; ) {
          var m = d.shift();
          if (m) {
            if (typeof m != "object")
              throw new TypeError(m + "must be non-object");
            for (var v in m)
              m.hasOwnProperty(v) && (l[v] = m[v]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, d) {
        return l.length === d ? l : l.subarray ? l.subarray(0, d) : (l.length = d, l);
      };
      var s = { arraySet: function(l, d, m, v, w) {
        if (d.subarray && l.subarray)
          l.set(d.subarray(m, m + v), w);
        else
          for (var o = 0; o < v; o++)
            l[w + o] = d[m + o];
      }, flattenChunks: function(l) {
        var d, m, v, w, o, g;
        for (d = v = 0, m = l.length; d < m; d++)
          v += l[d].length;
        for (g = new Uint8Array(v), d = w = 0, m = l.length; d < m; d++)
          o = l[d], g.set(o, w), w += o.length;
        return g;
      } }, r = { arraySet: function(l, d, m, v, w) {
        for (var o = 0; o < v; o++)
          l[w + o] = d[m + o];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, s)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, r));
      }, c.setTyped(n);
    }, {}], 42: [function(e, f, c) {
      var n = e("./common"), s = !0, r = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        r = !1;
      }
      for (var l = new n.Buf8(256), d = 0; d < 256; d++)
        l[d] = 252 <= d ? 6 : 248 <= d ? 5 : 240 <= d ? 4 : 224 <= d ? 3 : 192 <= d ? 2 : 1;
      function m(v, w) {
        if (w < 65537 && (v.subarray && r || !v.subarray && s))
          return String.fromCharCode.apply(null, n.shrinkBuf(v, w));
        for (var o = "", g = 0; g < w; g++)
          o += String.fromCharCode(v[g]);
        return o;
      }
      l[254] = l[254] = 1, c.string2buf = function(v) {
        var w, o, g, a, A, u = v.length, y = 0;
        for (a = 0; a < u; a++)
          (64512 & (o = v.charCodeAt(a))) == 55296 && a + 1 < u && (64512 & (g = v.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (g - 56320), a++), y += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
        for (w = new n.Buf8(y), a = A = 0; A < y; a++)
          (64512 & (o = v.charCodeAt(a))) == 55296 && a + 1 < u && (64512 & (g = v.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (g - 56320), a++), o < 128 ? w[A++] = o : (o < 2048 ? w[A++] = 192 | o >>> 6 : (o < 65536 ? w[A++] = 224 | o >>> 12 : (w[A++] = 240 | o >>> 18, w[A++] = 128 | o >>> 12 & 63), w[A++] = 128 | o >>> 6 & 63), w[A++] = 128 | 63 & o);
        return w;
      }, c.buf2binstring = function(v) {
        return m(v, v.length);
      }, c.binstring2buf = function(v) {
        for (var w = new n.Buf8(v.length), o = 0, g = w.length; o < g; o++)
          w[o] = v.charCodeAt(o);
        return w;
      }, c.buf2string = function(v, w) {
        var o, g, a, A, u = w || v.length, y = new Array(2 * u);
        for (o = g = 0; o < u; )
          if ((a = v[o++]) < 128)
            y[g++] = a;
          else if (4 < (A = l[a]))
            y[g++] = 65533, o += A - 1;
          else {
            for (a &= A === 2 ? 31 : A === 3 ? 15 : 7; 1 < A && o < u; )
              a = a << 6 | 63 & v[o++], A--;
            1 < A ? y[g++] = 65533 : a < 65536 ? y[g++] = a : (a -= 65536, y[g++] = 55296 | a >> 10 & 1023, y[g++] = 56320 | 1023 & a);
          }
        return m(y, g);
      }, c.utf8border = function(v, w) {
        var o;
        for ((w = w || v.length) > v.length && (w = v.length), o = w - 1; 0 <= o && (192 & v[o]) == 128; )
          o--;
        return o < 0 || o === 0 ? w : o + l[v[o]] > w ? o : w;
      };
    }, { "./common": 41 }], 43: [function(e, f, c) {
      f.exports = function(n, s, r, l) {
        for (var d = 65535 & n | 0, m = n >>> 16 & 65535 | 0, v = 0; r !== 0; ) {
          for (r -= v = 2e3 < r ? 2e3 : r; m = m + (d = d + s[l++] | 0) | 0, --v; )
            ;
          d %= 65521, m %= 65521;
        }
        return d | m << 16 | 0;
      };
    }, {}], 44: [function(e, f, c) {
      f.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(e, f, c) {
      var n = function() {
        for (var s, r = [], l = 0; l < 256; l++) {
          s = l;
          for (var d = 0; d < 8; d++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          r[l] = s;
        }
        return r;
      }();
      f.exports = function(s, r, l, d) {
        var m = n, v = d + l;
        s ^= -1;
        for (var w = d; w < v; w++)
          s = s >>> 8 ^ m[255 & (s ^ r[w])];
        return -1 ^ s;
      };
    }, {}], 46: [function(e, f, c) {
      var n, s = e("../utils/common"), r = e("./trees"), l = e("./adler32"), d = e("./crc32"), m = e("./messages"), v = 0, w = 4, o = 0, g = -2, a = -1, A = 4, u = 2, y = 8, E = 9, N = 286, _ = 30, z = 19, G = 2 * N + 1, J = 15, V = 3, Y = 258, nt = Y + V + 1, k = 42, O = 113, i = 1, W = 2, it = 3, S = 4;
      function U(t, D) {
        return t.msg = m[D], D;
      }
      function F(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function j(t) {
        for (var D = t.length; 0 <= --D; )
          t[D] = 0;
      }
      function C(t) {
        var D = t.state, T = D.pending;
        T > t.avail_out && (T = t.avail_out), T !== 0 && (s.arraySet(t.output, D.pending_buf, D.pending_out, T, t.next_out), t.next_out += T, D.pending_out += T, t.total_out += T, t.avail_out -= T, D.pending -= T, D.pending === 0 && (D.pending_out = 0));
      }
      function B(t, D) {
        r._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, D), t.block_start = t.strstart, C(t.strm);
      }
      function K(t, D) {
        t.pending_buf[t.pending++] = D;
      }
      function Q(t, D) {
        t.pending_buf[t.pending++] = D >>> 8 & 255, t.pending_buf[t.pending++] = 255 & D;
      }
      function X(t, D) {
        var T, b, h = t.max_chain_length, I = t.strstart, M = t.prev_length, L = t.nice_match, R = t.strstart > t.w_size - nt ? t.strstart - (t.w_size - nt) : 0, Z = t.window, H = t.w_mask, P = t.prev, $ = t.strstart + Y, lt = Z[I + M - 1], at = Z[I + M];
        t.prev_length >= t.good_match && (h >>= 2), L > t.lookahead && (L = t.lookahead);
        do
          if (Z[(T = D) + M] === at && Z[T + M - 1] === lt && Z[T] === Z[I] && Z[++T] === Z[I + 1]) {
            I += 2, T++;
            do
              ;
            while (Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && Z[++I] === Z[++T] && I < $);
            if (b = Y - ($ - I), I = $ - Y, M < b) {
              if (t.match_start = D, L <= (M = b))
                break;
              lt = Z[I + M - 1], at = Z[I + M];
            }
          }
        while ((D = P[D & H]) > R && --h != 0);
        return M <= t.lookahead ? M : t.lookahead;
      }
      function ut(t) {
        var D, T, b, h, I, M, L, R, Z, H, P = t.w_size;
        do {
          if (h = t.window_size - t.lookahead - t.strstart, t.strstart >= P + (P - nt)) {
            for (s.arraySet(t.window, t.window, P, P, 0), t.match_start -= P, t.strstart -= P, t.block_start -= P, D = T = t.hash_size; b = t.head[--D], t.head[D] = P <= b ? b - P : 0, --T; )
              ;
            for (D = T = P; b = t.prev[--D], t.prev[D] = P <= b ? b - P : 0, --T; )
              ;
            h += P;
          }
          if (t.strm.avail_in === 0)
            break;
          if (M = t.strm, L = t.window, R = t.strstart + t.lookahead, Z = h, H = void 0, H = M.avail_in, Z < H && (H = Z), T = H === 0 ? 0 : (M.avail_in -= H, s.arraySet(L, M.input, M.next_in, H, R), M.state.wrap === 1 ? M.adler = l(M.adler, L, H, R) : M.state.wrap === 2 && (M.adler = d(M.adler, L, H, R)), M.next_in += H, M.total_in += H, H), t.lookahead += T, t.lookahead + t.insert >= V)
            for (I = t.strstart - t.insert, t.ins_h = t.window[I], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[I + V - 1]) & t.hash_mask, t.prev[I & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = I, I++, t.insert--, !(t.lookahead + t.insert < V)); )
              ;
        } while (t.lookahead < nt && t.strm.avail_in !== 0);
      }
      function mt(t, D) {
        for (var T, b; ; ) {
          if (t.lookahead < nt) {
            if (ut(t), t.lookahead < nt && D === v)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= V && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), T !== 0 && t.strstart - T <= t.w_size - nt && (t.match_length = X(t, T)), t.match_length >= V)
            if (b = r._tr_tally(t, t.strstart - t.match_start, t.match_length - V), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= V) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            b = r._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (b && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = t.strstart < V - 1 ? t.strstart : V - 1, D === w ? (B(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : W;
      }
      function ot(t, D) {
        for (var T, b, h; ; ) {
          if (t.lookahead < nt) {
            if (ut(t), t.lookahead < nt && D === v)
              return i;
            if (t.lookahead === 0)
              break;
          }
          if (T = 0, t.lookahead >= V && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = V - 1, T !== 0 && t.prev_length < t.max_lazy_match && t.strstart - T <= t.w_size - nt && (t.match_length = X(t, T), t.match_length <= 5 && (t.strategy === 1 || t.match_length === V && 4096 < t.strstart - t.match_start) && (t.match_length = V - 1)), t.prev_length >= V && t.match_length <= t.prev_length) {
            for (h = t.strstart + t.lookahead - V, b = r._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - V), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= h && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + V - 1]) & t.hash_mask, T = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = V - 1, t.strstart++, b && (B(t, !1), t.strm.avail_out === 0))
              return i;
          } else if (t.match_available) {
            if ((b = r._tr_tally(t, 0, t.window[t.strstart - 1])) && B(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return i;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (b = r._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < V - 1 ? t.strstart : V - 1, D === w ? (B(t, !0), t.strm.avail_out === 0 ? it : S) : t.last_lit && (B(t, !1), t.strm.avail_out === 0) ? i : W;
      }
      function st(t, D, T, b, h) {
        this.good_length = t, this.max_lazy = D, this.nice_length = T, this.max_chain = b, this.func = h;
      }
      function gt() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = y, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * G), this.dyn_dtree = new s.Buf16(2 * (2 * _ + 1)), this.bl_tree = new s.Buf16(2 * (2 * z + 1)), j(this.dyn_ltree), j(this.dyn_dtree), j(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(J + 1), this.heap = new s.Buf16(2 * N + 1), j(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * N + 1), j(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function At(t) {
        var D;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = u, (D = t.state).pending = 0, D.pending_out = 0, D.wrap < 0 && (D.wrap = -D.wrap), D.status = D.wrap ? k : O, t.adler = D.wrap === 2 ? 0 : 1, D.last_flush = v, r._tr_init(D), o) : U(t, g);
      }
      function pt(t) {
        var D = At(t);
        return D === o && function(T) {
          T.window_size = 2 * T.w_size, j(T.head), T.max_lazy_match = n[T.level].max_lazy, T.good_match = n[T.level].good_length, T.nice_match = n[T.level].nice_length, T.max_chain_length = n[T.level].max_chain, T.strstart = 0, T.block_start = 0, T.lookahead = 0, T.insert = 0, T.match_length = T.prev_length = V - 1, T.match_available = 0, T.ins_h = 0;
        }(t.state), D;
      }
      function dt(t, D, T, b, h, I) {
        if (!t)
          return g;
        var M = 1;
        if (D === a && (D = 6), b < 0 ? (M = 0, b = -b) : 15 < b && (M = 2, b -= 16), h < 1 || E < h || T !== y || b < 8 || 15 < b || D < 0 || 9 < D || I < 0 || A < I)
          return U(t, g);
        b === 8 && (b = 9);
        var L = new gt();
        return (t.state = L).strm = t, L.wrap = M, L.gzhead = null, L.w_bits = b, L.w_size = 1 << L.w_bits, L.w_mask = L.w_size - 1, L.hash_bits = h + 7, L.hash_size = 1 << L.hash_bits, L.hash_mask = L.hash_size - 1, L.hash_shift = ~~((L.hash_bits + V - 1) / V), L.window = new s.Buf8(2 * L.w_size), L.head = new s.Buf16(L.hash_size), L.prev = new s.Buf16(L.w_size), L.lit_bufsize = 1 << h + 6, L.pending_buf_size = 4 * L.lit_bufsize, L.pending_buf = new s.Buf8(L.pending_buf_size), L.d_buf = 1 * L.lit_bufsize, L.l_buf = 3 * L.lit_bufsize, L.level = D, L.strategy = I, L.method = T, pt(t);
      }
      n = [new st(0, 0, 0, 0, function(t, D) {
        var T = 65535;
        for (T > t.pending_buf_size - 5 && (T = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (ut(t), t.lookahead === 0 && D === v)
              return i;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var b = t.block_start + T;
          if ((t.strstart === 0 || t.strstart >= b) && (t.lookahead = t.strstart - b, t.strstart = b, B(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - nt && (B(t, !1), t.strm.avail_out === 0))
            return i;
        }
        return t.insert = 0, D === w ? (B(t, !0), t.strm.avail_out === 0 ? it : S) : (t.strstart > t.block_start && (B(t, !1), t.strm.avail_out), i);
      }), new st(4, 4, 8, 4, mt), new st(4, 5, 16, 8, mt), new st(4, 6, 32, 32, mt), new st(4, 4, 16, 16, ot), new st(8, 16, 32, 32, ot), new st(8, 16, 128, 128, ot), new st(8, 32, 128, 256, ot), new st(32, 128, 258, 1024, ot), new st(32, 258, 258, 4096, ot)], c.deflateInit = function(t, D) {
        return dt(t, D, y, 15, 8, 0);
      }, c.deflateInit2 = dt, c.deflateReset = pt, c.deflateResetKeep = At, c.deflateSetHeader = function(t, D) {
        return t && t.state ? t.state.wrap !== 2 ? g : (t.state.gzhead = D, o) : g;
      }, c.deflate = function(t, D) {
        var T, b, h, I;
        if (!t || !t.state || 5 < D || D < 0)
          return t ? U(t, g) : g;
        if (b = t.state, !t.output || !t.input && t.avail_in !== 0 || b.status === 666 && D !== w)
          return U(t, t.avail_out === 0 ? -5 : g);
        if (b.strm = t, T = b.last_flush, b.last_flush = D, b.status === k)
          if (b.wrap === 2)
            t.adler = 0, K(b, 31), K(b, 139), K(b, 8), b.gzhead ? (K(b, (b.gzhead.text ? 1 : 0) + (b.gzhead.hcrc ? 2 : 0) + (b.gzhead.extra ? 4 : 0) + (b.gzhead.name ? 8 : 0) + (b.gzhead.comment ? 16 : 0)), K(b, 255 & b.gzhead.time), K(b, b.gzhead.time >> 8 & 255), K(b, b.gzhead.time >> 16 & 255), K(b, b.gzhead.time >> 24 & 255), K(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), K(b, 255 & b.gzhead.os), b.gzhead.extra && b.gzhead.extra.length && (K(b, 255 & b.gzhead.extra.length), K(b, b.gzhead.extra.length >> 8 & 255)), b.gzhead.hcrc && (t.adler = d(t.adler, b.pending_buf, b.pending, 0)), b.gzindex = 0, b.status = 69) : (K(b, 0), K(b, 0), K(b, 0), K(b, 0), K(b, 0), K(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), K(b, 3), b.status = O);
          else {
            var M = y + (b.w_bits - 8 << 4) << 8;
            M |= (2 <= b.strategy || b.level < 2 ? 0 : b.level < 6 ? 1 : b.level === 6 ? 2 : 3) << 6, b.strstart !== 0 && (M |= 32), M += 31 - M % 31, b.status = O, Q(b, M), b.strstart !== 0 && (Q(b, t.adler >>> 16), Q(b, 65535 & t.adler)), t.adler = 1;
          }
        if (b.status === 69)
          if (b.gzhead.extra) {
            for (h = b.pending; b.gzindex < (65535 & b.gzhead.extra.length) && (b.pending !== b.pending_buf_size || (b.gzhead.hcrc && b.pending > h && (t.adler = d(t.adler, b.pending_buf, b.pending - h, h)), C(t), h = b.pending, b.pending !== b.pending_buf_size)); )
              K(b, 255 & b.gzhead.extra[b.gzindex]), b.gzindex++;
            b.gzhead.hcrc && b.pending > h && (t.adler = d(t.adler, b.pending_buf, b.pending - h, h)), b.gzindex === b.gzhead.extra.length && (b.gzindex = 0, b.status = 73);
          } else
            b.status = 73;
        if (b.status === 73)
          if (b.gzhead.name) {
            h = b.pending;
            do {
              if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > h && (t.adler = d(t.adler, b.pending_buf, b.pending - h, h)), C(t), h = b.pending, b.pending === b.pending_buf_size)) {
                I = 1;
                break;
              }
              I = b.gzindex < b.gzhead.name.length ? 255 & b.gzhead.name.charCodeAt(b.gzindex++) : 0, K(b, I);
            } while (I !== 0);
            b.gzhead.hcrc && b.pending > h && (t.adler = d(t.adler, b.pending_buf, b.pending - h, h)), I === 0 && (b.gzindex = 0, b.status = 91);
          } else
            b.status = 91;
        if (b.status === 91)
          if (b.gzhead.comment) {
            h = b.pending;
            do {
              if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > h && (t.adler = d(t.adler, b.pending_buf, b.pending - h, h)), C(t), h = b.pending, b.pending === b.pending_buf_size)) {
                I = 1;
                break;
              }
              I = b.gzindex < b.gzhead.comment.length ? 255 & b.gzhead.comment.charCodeAt(b.gzindex++) : 0, K(b, I);
            } while (I !== 0);
            b.gzhead.hcrc && b.pending > h && (t.adler = d(t.adler, b.pending_buf, b.pending - h, h)), I === 0 && (b.status = 103);
          } else
            b.status = 103;
        if (b.status === 103 && (b.gzhead.hcrc ? (b.pending + 2 > b.pending_buf_size && C(t), b.pending + 2 <= b.pending_buf_size && (K(b, 255 & t.adler), K(b, t.adler >> 8 & 255), t.adler = 0, b.status = O)) : b.status = O), b.pending !== 0) {
          if (C(t), t.avail_out === 0)
            return b.last_flush = -1, o;
        } else if (t.avail_in === 0 && F(D) <= F(T) && D !== w)
          return U(t, -5);
        if (b.status === 666 && t.avail_in !== 0)
          return U(t, -5);
        if (t.avail_in !== 0 || b.lookahead !== 0 || D !== v && b.status !== 666) {
          var L = b.strategy === 2 ? function(R, Z) {
            for (var H; ; ) {
              if (R.lookahead === 0 && (ut(R), R.lookahead === 0)) {
                if (Z === v)
                  return i;
                break;
              }
              if (R.match_length = 0, H = r._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, H && (B(R, !1), R.strm.avail_out === 0))
                return i;
            }
            return R.insert = 0, Z === w ? (B(R, !0), R.strm.avail_out === 0 ? it : S) : R.last_lit && (B(R, !1), R.strm.avail_out === 0) ? i : W;
          }(b, D) : b.strategy === 3 ? function(R, Z) {
            for (var H, P, $, lt, at = R.window; ; ) {
              if (R.lookahead <= Y) {
                if (ut(R), R.lookahead <= Y && Z === v)
                  return i;
                if (R.lookahead === 0)
                  break;
              }
              if (R.match_length = 0, R.lookahead >= V && 0 < R.strstart && (P = at[$ = R.strstart - 1]) === at[++$] && P === at[++$] && P === at[++$]) {
                lt = R.strstart + Y;
                do
                  ;
                while (P === at[++$] && P === at[++$] && P === at[++$] && P === at[++$] && P === at[++$] && P === at[++$] && P === at[++$] && P === at[++$] && $ < lt);
                R.match_length = Y - (lt - $), R.match_length > R.lookahead && (R.match_length = R.lookahead);
              }
              if (R.match_length >= V ? (H = r._tr_tally(R, 1, R.match_length - V), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (H = r._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), H && (B(R, !1), R.strm.avail_out === 0))
                return i;
            }
            return R.insert = 0, Z === w ? (B(R, !0), R.strm.avail_out === 0 ? it : S) : R.last_lit && (B(R, !1), R.strm.avail_out === 0) ? i : W;
          }(b, D) : n[b.level].func(b, D);
          if (L !== it && L !== S || (b.status = 666), L === i || L === it)
            return t.avail_out === 0 && (b.last_flush = -1), o;
          if (L === W && (D === 1 ? r._tr_align(b) : D !== 5 && (r._tr_stored_block(b, 0, 0, !1), D === 3 && (j(b.head), b.lookahead === 0 && (b.strstart = 0, b.block_start = 0, b.insert = 0))), C(t), t.avail_out === 0))
            return b.last_flush = -1, o;
        }
        return D !== w ? o : b.wrap <= 0 ? 1 : (b.wrap === 2 ? (K(b, 255 & t.adler), K(b, t.adler >> 8 & 255), K(b, t.adler >> 16 & 255), K(b, t.adler >> 24 & 255), K(b, 255 & t.total_in), K(b, t.total_in >> 8 & 255), K(b, t.total_in >> 16 & 255), K(b, t.total_in >> 24 & 255)) : (Q(b, t.adler >>> 16), Q(b, 65535 & t.adler)), C(t), 0 < b.wrap && (b.wrap = -b.wrap), b.pending !== 0 ? o : 1);
      }, c.deflateEnd = function(t) {
        var D;
        return t && t.state ? (D = t.state.status) !== k && D !== 69 && D !== 73 && D !== 91 && D !== 103 && D !== O && D !== 666 ? U(t, g) : (t.state = null, D === O ? U(t, -3) : o) : g;
      }, c.deflateSetDictionary = function(t, D) {
        var T, b, h, I, M, L, R, Z, H = D.length;
        if (!t || !t.state || (I = (T = t.state).wrap) === 2 || I === 1 && T.status !== k || T.lookahead)
          return g;
        for (I === 1 && (t.adler = l(t.adler, D, H, 0)), T.wrap = 0, H >= T.w_size && (I === 0 && (j(T.head), T.strstart = 0, T.block_start = 0, T.insert = 0), Z = new s.Buf8(T.w_size), s.arraySet(Z, D, H - T.w_size, T.w_size, 0), D = Z, H = T.w_size), M = t.avail_in, L = t.next_in, R = t.input, t.avail_in = H, t.next_in = 0, t.input = D, ut(T); T.lookahead >= V; ) {
          for (b = T.strstart, h = T.lookahead - (V - 1); T.ins_h = (T.ins_h << T.hash_shift ^ T.window[b + V - 1]) & T.hash_mask, T.prev[b & T.w_mask] = T.head[T.ins_h], T.head[T.ins_h] = b, b++, --h; )
            ;
          T.strstart = b, T.lookahead = V - 1, ut(T);
        }
        return T.strstart += T.lookahead, T.block_start = T.strstart, T.insert = T.lookahead, T.lookahead = 0, T.match_length = T.prev_length = V - 1, T.match_available = 0, t.next_in = L, t.input = R, t.avail_in = M, T.wrap = I, o;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, f, c) {
      f.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(e, f, c) {
      f.exports = function(n, s) {
        var r, l, d, m, v, w, o, g, a, A, u, y, E, N, _, z, G, J, V, Y, nt, k, O, i, W;
        r = n.state, l = n.next_in, i = n.input, d = l + (n.avail_in - 5), m = n.next_out, W = n.output, v = m - (s - n.avail_out), w = m + (n.avail_out - 257), o = r.dmax, g = r.wsize, a = r.whave, A = r.wnext, u = r.window, y = r.hold, E = r.bits, N = r.lencode, _ = r.distcode, z = (1 << r.lenbits) - 1, G = (1 << r.distbits) - 1;
        t:
          do {
            E < 15 && (y += i[l++] << E, E += 8, y += i[l++] << E, E += 8), J = N[y & z];
            e:
              for (; ; ) {
                if (y >>>= V = J >>> 24, E -= V, (V = J >>> 16 & 255) === 0)
                  W[m++] = 65535 & J;
                else {
                  if (!(16 & V)) {
                    if (!(64 & V)) {
                      J = N[(65535 & J) + (y & (1 << V) - 1)];
                      continue e;
                    }
                    if (32 & V) {
                      r.mode = 12;
                      break t;
                    }
                    n.msg = "invalid literal/length code", r.mode = 30;
                    break t;
                  }
                  Y = 65535 & J, (V &= 15) && (E < V && (y += i[l++] << E, E += 8), Y += y & (1 << V) - 1, y >>>= V, E -= V), E < 15 && (y += i[l++] << E, E += 8, y += i[l++] << E, E += 8), J = _[y & G];
                  n:
                    for (; ; ) {
                      if (y >>>= V = J >>> 24, E -= V, !(16 & (V = J >>> 16 & 255))) {
                        if (!(64 & V)) {
                          J = _[(65535 & J) + (y & (1 << V) - 1)];
                          continue n;
                        }
                        n.msg = "invalid distance code", r.mode = 30;
                        break t;
                      }
                      if (nt = 65535 & J, E < (V &= 15) && (y += i[l++] << E, (E += 8) < V && (y += i[l++] << E, E += 8)), o < (nt += y & (1 << V) - 1)) {
                        n.msg = "invalid distance too far back", r.mode = 30;
                        break t;
                      }
                      if (y >>>= V, E -= V, (V = m - v) < nt) {
                        if (a < (V = nt - V) && r.sane) {
                          n.msg = "invalid distance too far back", r.mode = 30;
                          break t;
                        }
                        if (O = u, (k = 0) === A) {
                          if (k += g - V, V < Y) {
                            for (Y -= V; W[m++] = u[k++], --V; )
                              ;
                            k = m - nt, O = W;
                          }
                        } else if (A < V) {
                          if (k += g + A - V, (V -= A) < Y) {
                            for (Y -= V; W[m++] = u[k++], --V; )
                              ;
                            if (k = 0, A < Y) {
                              for (Y -= V = A; W[m++] = u[k++], --V; )
                                ;
                              k = m - nt, O = W;
                            }
                          }
                        } else if (k += A - V, V < Y) {
                          for (Y -= V; W[m++] = u[k++], --V; )
                            ;
                          k = m - nt, O = W;
                        }
                        for (; 2 < Y; )
                          W[m++] = O[k++], W[m++] = O[k++], W[m++] = O[k++], Y -= 3;
                        Y && (W[m++] = O[k++], 1 < Y && (W[m++] = O[k++]));
                      } else {
                        for (k = m - nt; W[m++] = W[k++], W[m++] = W[k++], W[m++] = W[k++], 2 < (Y -= 3); )
                          ;
                        Y && (W[m++] = W[k++], 1 < Y && (W[m++] = W[k++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < d && m < w);
        l -= Y = E >> 3, y &= (1 << (E -= Y << 3)) - 1, n.next_in = l, n.next_out = m, n.avail_in = l < d ? d - l + 5 : 5 - (l - d), n.avail_out = m < w ? w - m + 257 : 257 - (m - w), r.hold = y, r.bits = E;
      };
    }, {}], 49: [function(e, f, c) {
      var n = e("../utils/common"), s = e("./adler32"), r = e("./crc32"), l = e("./inffast"), d = e("./inftrees"), m = 1, v = 2, w = 0, o = -2, g = 1, a = 852, A = 592;
      function u(k) {
        return (k >>> 24 & 255) + (k >>> 8 & 65280) + ((65280 & k) << 8) + ((255 & k) << 24);
      }
      function y() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function E(k) {
        var O;
        return k && k.state ? (O = k.state, k.total_in = k.total_out = O.total = 0, k.msg = "", O.wrap && (k.adler = 1 & O.wrap), O.mode = g, O.last = 0, O.havedict = 0, O.dmax = 32768, O.head = null, O.hold = 0, O.bits = 0, O.lencode = O.lendyn = new n.Buf32(a), O.distcode = O.distdyn = new n.Buf32(A), O.sane = 1, O.back = -1, w) : o;
      }
      function N(k) {
        var O;
        return k && k.state ? ((O = k.state).wsize = 0, O.whave = 0, O.wnext = 0, E(k)) : o;
      }
      function _(k, O) {
        var i, W;
        return k && k.state ? (W = k.state, O < 0 ? (i = 0, O = -O) : (i = 1 + (O >> 4), O < 48 && (O &= 15)), O && (O < 8 || 15 < O) ? o : (W.window !== null && W.wbits !== O && (W.window = null), W.wrap = i, W.wbits = O, N(k))) : o;
      }
      function z(k, O) {
        var i, W;
        return k ? (W = new y(), (k.state = W).window = null, (i = _(k, O)) !== w && (k.state = null), i) : o;
      }
      var G, J, V = !0;
      function Y(k) {
        if (V) {
          var O;
          for (G = new n.Buf32(512), J = new n.Buf32(32), O = 0; O < 144; )
            k.lens[O++] = 8;
          for (; O < 256; )
            k.lens[O++] = 9;
          for (; O < 280; )
            k.lens[O++] = 7;
          for (; O < 288; )
            k.lens[O++] = 8;
          for (d(m, k.lens, 0, 288, G, 0, k.work, { bits: 9 }), O = 0; O < 32; )
            k.lens[O++] = 5;
          d(v, k.lens, 0, 32, J, 0, k.work, { bits: 5 }), V = !1;
        }
        k.lencode = G, k.lenbits = 9, k.distcode = J, k.distbits = 5;
      }
      function nt(k, O, i, W) {
        var it, S = k.state;
        return S.window === null && (S.wsize = 1 << S.wbits, S.wnext = 0, S.whave = 0, S.window = new n.Buf8(S.wsize)), W >= S.wsize ? (n.arraySet(S.window, O, i - S.wsize, S.wsize, 0), S.wnext = 0, S.whave = S.wsize) : (W < (it = S.wsize - S.wnext) && (it = W), n.arraySet(S.window, O, i - W, it, S.wnext), (W -= it) ? (n.arraySet(S.window, O, i - W, W, 0), S.wnext = W, S.whave = S.wsize) : (S.wnext += it, S.wnext === S.wsize && (S.wnext = 0), S.whave < S.wsize && (S.whave += it))), 0;
      }
      c.inflateReset = N, c.inflateReset2 = _, c.inflateResetKeep = E, c.inflateInit = function(k) {
        return z(k, 15);
      }, c.inflateInit2 = z, c.inflate = function(k, O) {
        var i, W, it, S, U, F, j, C, B, K, Q, X, ut, mt, ot, st, gt, At, pt, dt, t, D, T, b, h = 0, I = new n.Buf8(4), M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!k || !k.state || !k.output || !k.input && k.avail_in !== 0)
          return o;
        (i = k.state).mode === 12 && (i.mode = 13), U = k.next_out, it = k.output, j = k.avail_out, S = k.next_in, W = k.input, F = k.avail_in, C = i.hold, B = i.bits, K = F, Q = j, D = w;
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
                  F--, C += W[S++] << B, B += 8;
                }
                if (2 & i.wrap && C === 35615) {
                  I[i.check = 0] = 255 & C, I[1] = C >>> 8 & 255, i.check = r(i.check, I, 2, 0), B = C = 0, i.mode = 2;
                  break;
                }
                if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & C) << 8) + (C >> 8)) % 31) {
                  k.msg = "incorrect header check", i.mode = 30;
                  break;
                }
                if ((15 & C) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (B -= 4, t = 8 + (15 & (C >>>= 4)), i.wbits === 0)
                  i.wbits = t;
                else if (t > i.wbits) {
                  k.msg = "invalid window size", i.mode = 30;
                  break;
                }
                i.dmax = 1 << t, k.adler = i.check = 1, i.mode = 512 & C ? 10 : 12, B = C = 0;
                break;
              case 2:
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                if (i.flags = C, (255 & i.flags) != 8) {
                  k.msg = "unknown compression method", i.mode = 30;
                  break;
                }
                if (57344 & i.flags) {
                  k.msg = "unknown header flags set", i.mode = 30;
                  break;
                }
                i.head && (i.head.text = C >> 8 & 1), 512 & i.flags && (I[0] = 255 & C, I[1] = C >>> 8 & 255, i.check = r(i.check, I, 2, 0)), B = C = 0, i.mode = 3;
              case 3:
                for (; B < 32; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                i.head && (i.head.time = C), 512 & i.flags && (I[0] = 255 & C, I[1] = C >>> 8 & 255, I[2] = C >>> 16 & 255, I[3] = C >>> 24 & 255, i.check = r(i.check, I, 4, 0)), B = C = 0, i.mode = 4;
              case 4:
                for (; B < 16; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                i.head && (i.head.xflags = 255 & C, i.head.os = C >> 8), 512 & i.flags && (I[0] = 255 & C, I[1] = C >>> 8 & 255, i.check = r(i.check, I, 2, 0)), B = C = 0, i.mode = 5;
              case 5:
                if (1024 & i.flags) {
                  for (; B < 16; ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  i.length = C, i.head && (i.head.extra_len = C), 512 & i.flags && (I[0] = 255 & C, I[1] = C >>> 8 & 255, i.check = r(i.check, I, 2, 0)), B = C = 0;
                } else
                  i.head && (i.head.extra = null);
                i.mode = 6;
              case 6:
                if (1024 & i.flags && (F < (X = i.length) && (X = F), X && (i.head && (t = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), n.arraySet(i.head.extra, W, S, X, t)), 512 & i.flags && (i.check = r(i.check, W, X, S)), F -= X, S += X, i.length -= X), i.length))
                  break t;
                i.length = 0, i.mode = 7;
              case 7:
                if (2048 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = W[S + X++], i.head && t && i.length < 65536 && (i.head.name += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = r(i.check, W, X, S)), F -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.name = null);
                i.length = 0, i.mode = 8;
              case 8:
                if (4096 & i.flags) {
                  if (F === 0)
                    break t;
                  for (X = 0; t = W[S + X++], i.head && t && i.length < 65536 && (i.head.comment += String.fromCharCode(t)), t && X < F; )
                    ;
                  if (512 & i.flags && (i.check = r(i.check, W, X, S)), F -= X, S += X, t)
                    break t;
                } else
                  i.head && (i.head.comment = null);
                i.mode = 9;
              case 9:
                if (512 & i.flags) {
                  for (; B < 16; ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  if (C !== (65535 & i.check)) {
                    k.msg = "header crc mismatch", i.mode = 30;
                    break;
                  }
                  B = C = 0;
                }
                i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), k.adler = i.check = 0, i.mode = 12;
                break;
              case 10:
                for (; B < 32; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                k.adler = i.check = u(C), B = C = 0, i.mode = 11;
              case 11:
                if (i.havedict === 0)
                  return k.next_out = U, k.avail_out = j, k.next_in = S, k.avail_in = F, i.hold = C, i.bits = B, 2;
                k.adler = i.check = 1, i.mode = 12;
              case 12:
                if (O === 5 || O === 6)
                  break t;
              case 13:
                if (i.last) {
                  C >>>= 7 & B, B -= 7 & B, i.mode = 27;
                  break;
                }
                for (; B < 3; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                switch (i.last = 1 & C, B -= 1, 3 & (C >>>= 1)) {
                  case 0:
                    i.mode = 14;
                    break;
                  case 1:
                    if (Y(i), i.mode = 20, O !== 6)
                      break;
                    C >>>= 2, B -= 2;
                    break t;
                  case 2:
                    i.mode = 17;
                    break;
                  case 3:
                    k.msg = "invalid block type", i.mode = 30;
                }
                C >>>= 2, B -= 2;
                break;
              case 14:
                for (C >>>= 7 & B, B -= 7 & B; B < 32; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                if ((65535 & C) != (C >>> 16 ^ 65535)) {
                  k.msg = "invalid stored block lengths", i.mode = 30;
                  break;
                }
                if (i.length = 65535 & C, B = C = 0, i.mode = 15, O === 6)
                  break t;
              case 15:
                i.mode = 16;
              case 16:
                if (X = i.length) {
                  if (F < X && (X = F), j < X && (X = j), X === 0)
                    break t;
                  n.arraySet(it, W, S, X, U), F -= X, S += X, j -= X, U += X, i.length -= X;
                  break;
                }
                i.mode = 12;
                break;
              case 17:
                for (; B < 14; ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                if (i.nlen = 257 + (31 & C), C >>>= 5, B -= 5, i.ndist = 1 + (31 & C), C >>>= 5, B -= 5, i.ncode = 4 + (15 & C), C >>>= 4, B -= 4, 286 < i.nlen || 30 < i.ndist) {
                  k.msg = "too many length or distance symbols", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 18;
              case 18:
                for (; i.have < i.ncode; ) {
                  for (; B < 3; ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  i.lens[M[i.have++]] = 7 & C, C >>>= 3, B -= 3;
                }
                for (; i.have < 19; )
                  i.lens[M[i.have++]] = 0;
                if (i.lencode = i.lendyn, i.lenbits = 7, T = { bits: i.lenbits }, D = d(0, i.lens, 0, 19, i.lencode, 0, i.work, T), i.lenbits = T.bits, D) {
                  k.msg = "invalid code lengths set", i.mode = 30;
                  break;
                }
                i.have = 0, i.mode = 19;
              case 19:
                for (; i.have < i.nlen + i.ndist; ) {
                  for (; st = (h = i.lencode[C & (1 << i.lenbits) - 1]) >>> 16 & 255, gt = 65535 & h, !((ot = h >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  if (gt < 16)
                    C >>>= ot, B -= ot, i.lens[i.have++] = gt;
                  else {
                    if (gt === 16) {
                      for (b = ot + 2; B < b; ) {
                        if (F === 0)
                          break t;
                        F--, C += W[S++] << B, B += 8;
                      }
                      if (C >>>= ot, B -= ot, i.have === 0) {
                        k.msg = "invalid bit length repeat", i.mode = 30;
                        break;
                      }
                      t = i.lens[i.have - 1], X = 3 + (3 & C), C >>>= 2, B -= 2;
                    } else if (gt === 17) {
                      for (b = ot + 3; B < b; ) {
                        if (F === 0)
                          break t;
                        F--, C += W[S++] << B, B += 8;
                      }
                      B -= ot, t = 0, X = 3 + (7 & (C >>>= ot)), C >>>= 3, B -= 3;
                    } else {
                      for (b = ot + 7; B < b; ) {
                        if (F === 0)
                          break t;
                        F--, C += W[S++] << B, B += 8;
                      }
                      B -= ot, t = 0, X = 11 + (127 & (C >>>= ot)), C >>>= 7, B -= 7;
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
                if (i.lenbits = 9, T = { bits: i.lenbits }, D = d(m, i.lens, 0, i.nlen, i.lencode, 0, i.work, T), i.lenbits = T.bits, D) {
                  k.msg = "invalid literal/lengths set", i.mode = 30;
                  break;
                }
                if (i.distbits = 6, i.distcode = i.distdyn, T = { bits: i.distbits }, D = d(v, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, T), i.distbits = T.bits, D) {
                  k.msg = "invalid distances set", i.mode = 30;
                  break;
                }
                if (i.mode = 20, O === 6)
                  break t;
              case 20:
                i.mode = 21;
              case 21:
                if (6 <= F && 258 <= j) {
                  k.next_out = U, k.avail_out = j, k.next_in = S, k.avail_in = F, i.hold = C, i.bits = B, l(k, Q), U = k.next_out, it = k.output, j = k.avail_out, S = k.next_in, W = k.input, F = k.avail_in, C = i.hold, B = i.bits, i.mode === 12 && (i.back = -1);
                  break;
                }
                for (i.back = 0; st = (h = i.lencode[C & (1 << i.lenbits) - 1]) >>> 16 & 255, gt = 65535 & h, !((ot = h >>> 24) <= B); ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                if (st && !(240 & st)) {
                  for (At = ot, pt = st, dt = gt; st = (h = i.lencode[dt + ((C & (1 << At + pt) - 1) >> At)]) >>> 16 & 255, gt = 65535 & h, !(At + (ot = h >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  C >>>= At, B -= At, i.back += At;
                }
                if (C >>>= ot, B -= ot, i.back += ot, i.length = gt, st === 0) {
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
                  for (b = i.extra; B < b; ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  i.length += C & (1 << i.extra) - 1, C >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                i.was = i.length, i.mode = 23;
              case 23:
                for (; st = (h = i.distcode[C & (1 << i.distbits) - 1]) >>> 16 & 255, gt = 65535 & h, !((ot = h >>> 24) <= B); ) {
                  if (F === 0)
                    break t;
                  F--, C += W[S++] << B, B += 8;
                }
                if (!(240 & st)) {
                  for (At = ot, pt = st, dt = gt; st = (h = i.distcode[dt + ((C & (1 << At + pt) - 1) >> At)]) >>> 16 & 255, gt = 65535 & h, !(At + (ot = h >>> 24) <= B); ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  C >>>= At, B -= At, i.back += At;
                }
                if (C >>>= ot, B -= ot, i.back += ot, 64 & st) {
                  k.msg = "invalid distance code", i.mode = 30;
                  break;
                }
                i.offset = gt, i.extra = 15 & st, i.mode = 24;
              case 24:
                if (i.extra) {
                  for (b = i.extra; B < b; ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  i.offset += C & (1 << i.extra) - 1, C >>>= i.extra, B -= i.extra, i.back += i.extra;
                }
                if (i.offset > i.dmax) {
                  k.msg = "invalid distance too far back", i.mode = 30;
                  break;
                }
                i.mode = 25;
              case 25:
                if (j === 0)
                  break t;
                if (X = Q - j, i.offset > X) {
                  if ((X = i.offset - X) > i.whave && i.sane) {
                    k.msg = "invalid distance too far back", i.mode = 30;
                    break;
                  }
                  ut = X > i.wnext ? (X -= i.wnext, i.wsize - X) : i.wnext - X, X > i.length && (X = i.length), mt = i.window;
                } else
                  mt = it, ut = U - i.offset, X = i.length;
                for (j < X && (X = j), j -= X, i.length -= X; it[U++] = mt[ut++], --X; )
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
                    F--, C |= W[S++] << B, B += 8;
                  }
                  if (Q -= j, k.total_out += Q, i.total += Q, Q && (k.adler = i.check = i.flags ? r(i.check, it, Q, U - Q) : s(i.check, it, Q, U - Q)), Q = j, (i.flags ? C : u(C)) !== i.check) {
                    k.msg = "incorrect data check", i.mode = 30;
                    break;
                  }
                  B = C = 0;
                }
                i.mode = 28;
              case 28:
                if (i.wrap && i.flags) {
                  for (; B < 32; ) {
                    if (F === 0)
                      break t;
                    F--, C += W[S++] << B, B += 8;
                  }
                  if (C !== (4294967295 & i.total)) {
                    k.msg = "incorrect length check", i.mode = 30;
                    break;
                  }
                  B = C = 0;
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
        return k.next_out = U, k.avail_out = j, k.next_in = S, k.avail_in = F, i.hold = C, i.bits = B, (i.wsize || Q !== k.avail_out && i.mode < 30 && (i.mode < 27 || O !== 4)) && nt(k, k.output, k.next_out, Q - k.avail_out) ? (i.mode = 31, -4) : (K -= k.avail_in, Q -= k.avail_out, k.total_in += K, k.total_out += Q, i.total += Q, i.wrap && Q && (k.adler = i.check = i.flags ? r(i.check, it, Q, k.next_out - Q) : s(i.check, it, Q, k.next_out - Q)), k.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === 12 ? 128 : 0) + (i.mode === 20 || i.mode === 15 ? 256 : 0), (K == 0 && Q === 0 || O === 4) && D === w && (D = -5), D);
      }, c.inflateEnd = function(k) {
        if (!k || !k.state)
          return o;
        var O = k.state;
        return O.window && (O.window = null), k.state = null, w;
      }, c.inflateGetHeader = function(k, O) {
        var i;
        return k && k.state && 2 & (i = k.state).wrap ? ((i.head = O).done = !1, w) : o;
      }, c.inflateSetDictionary = function(k, O) {
        var i, W = O.length;
        return k && k.state ? (i = k.state).wrap !== 0 && i.mode !== 11 ? o : i.mode === 11 && s(1, O, W, 0) !== i.check ? -3 : nt(k, O, W, W) ? (i.mode = 31, -4) : (i.havedict = 1, w) : o;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, f, c) {
      var n = e("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], r = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], d = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      f.exports = function(m, v, w, o, g, a, A, u) {
        var y, E, N, _, z, G, J, V, Y, nt = u.bits, k = 0, O = 0, i = 0, W = 0, it = 0, S = 0, U = 0, F = 0, j = 0, C = 0, B = null, K = 0, Q = new n.Buf16(16), X = new n.Buf16(16), ut = null, mt = 0;
        for (k = 0; k <= 15; k++)
          Q[k] = 0;
        for (O = 0; O < o; O++)
          Q[v[w + O]]++;
        for (it = nt, W = 15; 1 <= W && Q[W] === 0; W--)
          ;
        if (W < it && (it = W), W === 0)
          return g[a++] = 20971520, g[a++] = 20971520, u.bits = 1, 0;
        for (i = 1; i < W && Q[i] === 0; i++)
          ;
        for (it < i && (it = i), k = F = 1; k <= 15; k++)
          if (F <<= 1, (F -= Q[k]) < 0)
            return -1;
        if (0 < F && (m === 0 || W !== 1))
          return -1;
        for (X[1] = 0, k = 1; k < 15; k++)
          X[k + 1] = X[k] + Q[k];
        for (O = 0; O < o; O++)
          v[w + O] !== 0 && (A[X[v[w + O]]++] = O);
        if (G = m === 0 ? (B = ut = A, 19) : m === 1 ? (B = s, K -= 257, ut = r, mt -= 257, 256) : (B = l, ut = d, -1), k = i, z = a, U = O = C = 0, N = -1, _ = (j = 1 << (S = it)) - 1, m === 1 && 852 < j || m === 2 && 592 < j)
          return 1;
        for (; ; ) {
          for (J = k - U, Y = A[O] < G ? (V = 0, A[O]) : A[O] > G ? (V = ut[mt + A[O]], B[K + A[O]]) : (V = 96, 0), y = 1 << k - U, i = E = 1 << S; g[z + (C >> U) + (E -= y)] = J << 24 | V << 16 | Y | 0, E !== 0; )
            ;
          for (y = 1 << k - 1; C & y; )
            y >>= 1;
          if (y !== 0 ? (C &= y - 1, C += y) : C = 0, O++, --Q[k] == 0) {
            if (k === W)
              break;
            k = v[w + A[O]];
          }
          if (it < k && (C & _) !== N) {
            for (U === 0 && (U = it), z += i, F = 1 << (S = k - U); S + U < W && !((F -= Q[S + U]) <= 0); )
              S++, F <<= 1;
            if (j += 1 << S, m === 1 && 852 < j || m === 2 && 592 < j)
              return 1;
            g[N = C & _] = it << 24 | S << 16 | z - a | 0;
          }
        }
        return C !== 0 && (g[z + C] = k - U << 24 | 64 << 16 | 0), u.bits = it, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(e, f, c) {
      f.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(e, f, c) {
      var n = e("../utils/common"), s = 0, r = 1;
      function l(h) {
        for (var I = h.length; 0 <= --I; )
          h[I] = 0;
      }
      var d = 0, m = 29, v = 256, w = v + 1 + m, o = 30, g = 19, a = 2 * w + 1, A = 15, u = 16, y = 7, E = 256, N = 16, _ = 17, z = 18, G = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], J = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], V = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], Y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], nt = new Array(2 * (w + 2));
      l(nt);
      var k = new Array(2 * o);
      l(k);
      var O = new Array(512);
      l(O);
      var i = new Array(256);
      l(i);
      var W = new Array(m);
      l(W);
      var it, S, U, F = new Array(o);
      function j(h, I, M, L, R) {
        this.static_tree = h, this.extra_bits = I, this.extra_base = M, this.elems = L, this.max_length = R, this.has_stree = h && h.length;
      }
      function C(h, I) {
        this.dyn_tree = h, this.max_code = 0, this.stat_desc = I;
      }
      function B(h) {
        return h < 256 ? O[h] : O[256 + (h >>> 7)];
      }
      function K(h, I) {
        h.pending_buf[h.pending++] = 255 & I, h.pending_buf[h.pending++] = I >>> 8 & 255;
      }
      function Q(h, I, M) {
        h.bi_valid > u - M ? (h.bi_buf |= I << h.bi_valid & 65535, K(h, h.bi_buf), h.bi_buf = I >> u - h.bi_valid, h.bi_valid += M - u) : (h.bi_buf |= I << h.bi_valid & 65535, h.bi_valid += M);
      }
      function X(h, I, M) {
        Q(h, M[2 * I], M[2 * I + 1]);
      }
      function ut(h, I) {
        for (var M = 0; M |= 1 & h, h >>>= 1, M <<= 1, 0 < --I; )
          ;
        return M >>> 1;
      }
      function mt(h, I, M) {
        var L, R, Z = new Array(A + 1), H = 0;
        for (L = 1; L <= A; L++)
          Z[L] = H = H + M[L - 1] << 1;
        for (R = 0; R <= I; R++) {
          var P = h[2 * R + 1];
          P !== 0 && (h[2 * R] = ut(Z[P]++, P));
        }
      }
      function ot(h) {
        var I;
        for (I = 0; I < w; I++)
          h.dyn_ltree[2 * I] = 0;
        for (I = 0; I < o; I++)
          h.dyn_dtree[2 * I] = 0;
        for (I = 0; I < g; I++)
          h.bl_tree[2 * I] = 0;
        h.dyn_ltree[2 * E] = 1, h.opt_len = h.static_len = 0, h.last_lit = h.matches = 0;
      }
      function st(h) {
        8 < h.bi_valid ? K(h, h.bi_buf) : 0 < h.bi_valid && (h.pending_buf[h.pending++] = h.bi_buf), h.bi_buf = 0, h.bi_valid = 0;
      }
      function gt(h, I, M, L) {
        var R = 2 * I, Z = 2 * M;
        return h[R] < h[Z] || h[R] === h[Z] && L[I] <= L[M];
      }
      function At(h, I, M) {
        for (var L = h.heap[M], R = M << 1; R <= h.heap_len && (R < h.heap_len && gt(I, h.heap[R + 1], h.heap[R], h.depth) && R++, !gt(I, L, h.heap[R], h.depth)); )
          h.heap[M] = h.heap[R], M = R, R <<= 1;
        h.heap[M] = L;
      }
      function pt(h, I, M) {
        var L, R, Z, H, P = 0;
        if (h.last_lit !== 0)
          for (; L = h.pending_buf[h.d_buf + 2 * P] << 8 | h.pending_buf[h.d_buf + 2 * P + 1], R = h.pending_buf[h.l_buf + P], P++, L === 0 ? X(h, R, I) : (X(h, (Z = i[R]) + v + 1, I), (H = G[Z]) !== 0 && Q(h, R -= W[Z], H), X(h, Z = B(--L), M), (H = J[Z]) !== 0 && Q(h, L -= F[Z], H)), P < h.last_lit; )
            ;
        X(h, E, I);
      }
      function dt(h, I) {
        var M, L, R, Z = I.dyn_tree, H = I.stat_desc.static_tree, P = I.stat_desc.has_stree, $ = I.stat_desc.elems, lt = -1;
        for (h.heap_len = 0, h.heap_max = a, M = 0; M < $; M++)
          Z[2 * M] !== 0 ? (h.heap[++h.heap_len] = lt = M, h.depth[M] = 0) : Z[2 * M + 1] = 0;
        for (; h.heap_len < 2; )
          Z[2 * (R = h.heap[++h.heap_len] = lt < 2 ? ++lt : 0)] = 1, h.depth[R] = 0, h.opt_len--, P && (h.static_len -= H[2 * R + 1]);
        for (I.max_code = lt, M = h.heap_len >> 1; 1 <= M; M--)
          At(h, Z, M);
        for (R = $; M = h.heap[1], h.heap[1] = h.heap[h.heap_len--], At(h, Z, 1), L = h.heap[1], h.heap[--h.heap_max] = M, h.heap[--h.heap_max] = L, Z[2 * R] = Z[2 * M] + Z[2 * L], h.depth[R] = (h.depth[M] >= h.depth[L] ? h.depth[M] : h.depth[L]) + 1, Z[2 * M + 1] = Z[2 * L + 1] = R, h.heap[1] = R++, At(h, Z, 1), 2 <= h.heap_len; )
          ;
        h.heap[--h.heap_max] = h.heap[1], function(at, yt) {
          var Et, Ct, et, ct, wt, ft, kt = yt.dyn_tree, Jt = yt.max_code, we = yt.stat_desc.static_tree, ye = yt.stat_desc.has_stree, ke = yt.stat_desc.extra_bits, Zt = yt.stat_desc.extra_base, Nt = yt.stat_desc.max_length, Vt = 0;
          for (ct = 0; ct <= A; ct++)
            at.bl_count[ct] = 0;
          for (kt[2 * at.heap[at.heap_max] + 1] = 0, Et = at.heap_max + 1; Et < a; Et++)
            Nt < (ct = kt[2 * kt[2 * (Ct = at.heap[Et]) + 1] + 1] + 1) && (ct = Nt, Vt++), kt[2 * Ct + 1] = ct, Jt < Ct || (at.bl_count[ct]++, wt = 0, Zt <= Ct && (wt = ke[Ct - Zt]), ft = kt[2 * Ct], at.opt_len += ft * (ct + wt), ye && (at.static_len += ft * (we[2 * Ct + 1] + wt)));
          if (Vt !== 0) {
            do {
              for (ct = Nt - 1; at.bl_count[ct] === 0; )
                ct--;
              at.bl_count[ct]--, at.bl_count[ct + 1] += 2, at.bl_count[Nt]--, Vt -= 2;
            } while (0 < Vt);
            for (ct = Nt; ct !== 0; ct--)
              for (Ct = at.bl_count[ct]; Ct !== 0; )
                Jt < (et = at.heap[--Et]) || (kt[2 * et + 1] !== ct && (at.opt_len += (ct - kt[2 * et + 1]) * kt[2 * et], kt[2 * et + 1] = ct), Ct--);
          }
        }(h, I), mt(Z, lt, h.bl_count);
      }
      function t(h, I, M) {
        var L, R, Z = -1, H = I[1], P = 0, $ = 7, lt = 4;
        for (H === 0 && ($ = 138, lt = 3), I[2 * (M + 1) + 1] = 65535, L = 0; L <= M; L++)
          R = H, H = I[2 * (L + 1) + 1], ++P < $ && R === H || (P < lt ? h.bl_tree[2 * R] += P : R !== 0 ? (R !== Z && h.bl_tree[2 * R]++, h.bl_tree[2 * N]++) : P <= 10 ? h.bl_tree[2 * _]++ : h.bl_tree[2 * z]++, Z = R, lt = (P = 0) === H ? ($ = 138, 3) : R === H ? ($ = 6, 3) : ($ = 7, 4));
      }
      function D(h, I, M) {
        var L, R, Z = -1, H = I[1], P = 0, $ = 7, lt = 4;
        for (H === 0 && ($ = 138, lt = 3), L = 0; L <= M; L++)
          if (R = H, H = I[2 * (L + 1) + 1], !(++P < $ && R === H)) {
            if (P < lt)
              for (; X(h, R, h.bl_tree), --P != 0; )
                ;
            else
              R !== 0 ? (R !== Z && (X(h, R, h.bl_tree), P--), X(h, N, h.bl_tree), Q(h, P - 3, 2)) : P <= 10 ? (X(h, _, h.bl_tree), Q(h, P - 3, 3)) : (X(h, z, h.bl_tree), Q(h, P - 11, 7));
            Z = R, lt = (P = 0) === H ? ($ = 138, 3) : R === H ? ($ = 6, 3) : ($ = 7, 4);
          }
      }
      l(F);
      var T = !1;
      function b(h, I, M, L) {
        Q(h, (d << 1) + (L ? 1 : 0), 3), function(R, Z, H, P) {
          st(R), P && (K(R, H), K(R, ~H)), n.arraySet(R.pending_buf, R.window, Z, H, R.pending), R.pending += H;
        }(h, I, M, !0);
      }
      c._tr_init = function(h) {
        T || (function() {
          var I, M, L, R, Z, H = new Array(A + 1);
          for (R = L = 0; R < m - 1; R++)
            for (W[R] = L, I = 0; I < 1 << G[R]; I++)
              i[L++] = R;
          for (i[L - 1] = R, R = Z = 0; R < 16; R++)
            for (F[R] = Z, I = 0; I < 1 << J[R]; I++)
              O[Z++] = R;
          for (Z >>= 7; R < o; R++)
            for (F[R] = Z << 7, I = 0; I < 1 << J[R] - 7; I++)
              O[256 + Z++] = R;
          for (M = 0; M <= A; M++)
            H[M] = 0;
          for (I = 0; I <= 143; )
            nt[2 * I + 1] = 8, I++, H[8]++;
          for (; I <= 255; )
            nt[2 * I + 1] = 9, I++, H[9]++;
          for (; I <= 279; )
            nt[2 * I + 1] = 7, I++, H[7]++;
          for (; I <= 287; )
            nt[2 * I + 1] = 8, I++, H[8]++;
          for (mt(nt, w + 1, H), I = 0; I < o; I++)
            k[2 * I + 1] = 5, k[2 * I] = ut(I, 5);
          it = new j(nt, G, v + 1, w, A), S = new j(k, J, 0, o, A), U = new j(new Array(0), V, 0, g, y);
        }(), T = !0), h.l_desc = new C(h.dyn_ltree, it), h.d_desc = new C(h.dyn_dtree, S), h.bl_desc = new C(h.bl_tree, U), h.bi_buf = 0, h.bi_valid = 0, ot(h);
      }, c._tr_stored_block = b, c._tr_flush_block = function(h, I, M, L) {
        var R, Z, H = 0;
        0 < h.level ? (h.strm.data_type === 2 && (h.strm.data_type = function(P) {
          var $, lt = 4093624447;
          for ($ = 0; $ <= 31; $++, lt >>>= 1)
            if (1 & lt && P.dyn_ltree[2 * $] !== 0)
              return s;
          if (P.dyn_ltree[18] !== 0 || P.dyn_ltree[20] !== 0 || P.dyn_ltree[26] !== 0)
            return r;
          for ($ = 32; $ < v; $++)
            if (P.dyn_ltree[2 * $] !== 0)
              return r;
          return s;
        }(h)), dt(h, h.l_desc), dt(h, h.d_desc), H = function(P) {
          var $;
          for (t(P, P.dyn_ltree, P.l_desc.max_code), t(P, P.dyn_dtree, P.d_desc.max_code), dt(P, P.bl_desc), $ = g - 1; 3 <= $ && P.bl_tree[2 * Y[$] + 1] === 0; $--)
            ;
          return P.opt_len += 3 * ($ + 1) + 5 + 5 + 4, $;
        }(h), R = h.opt_len + 3 + 7 >>> 3, (Z = h.static_len + 3 + 7 >>> 3) <= R && (R = Z)) : R = Z = M + 5, M + 4 <= R && I !== -1 ? b(h, I, M, L) : h.strategy === 4 || Z === R ? (Q(h, 2 + (L ? 1 : 0), 3), pt(h, nt, k)) : (Q(h, 4 + (L ? 1 : 0), 3), function(P, $, lt, at) {
          var yt;
          for (Q(P, $ - 257, 5), Q(P, lt - 1, 5), Q(P, at - 4, 4), yt = 0; yt < at; yt++)
            Q(P, P.bl_tree[2 * Y[yt] + 1], 3);
          D(P, P.dyn_ltree, $ - 1), D(P, P.dyn_dtree, lt - 1);
        }(h, h.l_desc.max_code + 1, h.d_desc.max_code + 1, H + 1), pt(h, h.dyn_ltree, h.dyn_dtree)), ot(h), L && st(h);
      }, c._tr_tally = function(h, I, M) {
        return h.pending_buf[h.d_buf + 2 * h.last_lit] = I >>> 8 & 255, h.pending_buf[h.d_buf + 2 * h.last_lit + 1] = 255 & I, h.pending_buf[h.l_buf + h.last_lit] = 255 & M, h.last_lit++, I === 0 ? h.dyn_ltree[2 * M]++ : (h.matches++, I--, h.dyn_ltree[2 * (i[M] + v + 1)]++, h.dyn_dtree[2 * B(I)]++), h.last_lit === h.lit_bufsize - 1;
      }, c._tr_align = function(h) {
        Q(h, 2, 3), X(h, E, nt), function(I) {
          I.bi_valid === 16 ? (K(I, I.bi_buf), I.bi_buf = 0, I.bi_valid = 0) : 8 <= I.bi_valid && (I.pending_buf[I.pending++] = 255 & I.bi_buf, I.bi_buf >>= 8, I.bi_valid -= 8);
        }(h);
      };
    }, { "../utils/common": 41 }], 53: [function(e, f, c) {
      f.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(e, f, c) {
      (function(n) {
        (function(s, r) {
          if (!s.setImmediate) {
            var l, d, m, v, w = 1, o = {}, g = !1, a = s.document, A = Object.getPrototypeOf && Object.getPrototypeOf(s);
            A = A && A.setTimeout ? A : s, l = {}.toString.call(s.process) === "[object process]" ? function(N) {
              process.nextTick(function() {
                y(N);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var N = !0, _ = s.onmessage;
                return s.onmessage = function() {
                  N = !1;
                }, s.postMessage("", "*"), s.onmessage = _, N;
              }
            }() ? (v = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", E, !1) : s.attachEvent("onmessage", E), function(N) {
              s.postMessage(v + N, "*");
            }) : s.MessageChannel ? ((m = new MessageChannel()).port1.onmessage = function(N) {
              y(N.data);
            }, function(N) {
              m.port2.postMessage(N);
            }) : a && "onreadystatechange" in a.createElement("script") ? (d = a.documentElement, function(N) {
              var _ = a.createElement("script");
              _.onreadystatechange = function() {
                y(N), _.onreadystatechange = null, d.removeChild(_), _ = null;
              }, d.appendChild(_);
            }) : function(N) {
              setTimeout(y, 0, N);
            }, A.setImmediate = function(N) {
              typeof N != "function" && (N = new Function("" + N));
              for (var _ = new Array(arguments.length - 1), z = 0; z < _.length; z++)
                _[z] = arguments[z + 1];
              var G = { callback: N, args: _ };
              return o[w] = G, l(w), w++;
            }, A.clearImmediate = u;
          }
          function u(N) {
            delete o[N];
          }
          function y(N) {
            if (g)
              setTimeout(y, 0, N);
            else {
              var _ = o[N];
              if (_) {
                g = !0;
                try {
                  (function(z) {
                    var G = z.callback, J = z.args;
                    switch (J.length) {
                      case 0:
                        G();
                        break;
                      case 1:
                        G(J[0]);
                        break;
                      case 2:
                        G(J[0], J[1]);
                        break;
                      case 3:
                        G(J[0], J[1], J[2]);
                        break;
                      default:
                        G.apply(r, J);
                    }
                  })(_);
                } finally {
                  u(N), g = !1;
                }
              }
            }
          }
          function E(N) {
            N.source === s && typeof N.data == "string" && N.data.indexOf(v) === 0 && y(+N.data.slice(v.length));
          }
        })(typeof self > "u" ? n === void 0 ? this : n : self);
      }).call(this, typeof It < "u" ? It : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(fe);
var Le = fe.exports;
const ze = /* @__PURE__ */ de(Le);
var pe = { exports: {} };
(function(x, p) {
  (function(e, f) {
    f();
  })(It, function() {
    function e(d, m) {
      return typeof m > "u" ? m = { autoBom: !1 } : typeof m != "object" && (console.warn("Deprecated: Expected third argument to be a object"), m = { autoBom: !m }), m.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(d.type) ? new Blob(["\uFEFF", d], { type: d.type }) : d;
    }
    function f(d, m, v) {
      var w = new XMLHttpRequest();
      w.open("GET", d), w.responseType = "blob", w.onload = function() {
        l(w.response, m, v);
      }, w.onerror = function() {
        console.error("could not download file");
      }, w.send();
    }
    function c(d) {
      var m = new XMLHttpRequest();
      m.open("HEAD", d, !1);
      try {
        m.send();
      } catch {
      }
      return 200 <= m.status && 299 >= m.status;
    }
    function n(d) {
      try {
        d.dispatchEvent(new MouseEvent("click"));
      } catch {
        var m = document.createEvent("MouseEvents");
        m.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), d.dispatchEvent(m);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof It == "object" && It.global === It ? It : void 0, r = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !r ? function(d, m, v) {
      var w = s.URL || s.webkitURL, o = document.createElement("a");
      m = m || d.name || "download", o.download = m, o.rel = "noopener", typeof d == "string" ? (o.href = d, o.origin === location.origin ? n(o) : c(o.href) ? f(d, m, v) : n(o, o.target = "_blank")) : (o.href = w.createObjectURL(d), setTimeout(function() {
        w.revokeObjectURL(o.href);
      }, 4e4), setTimeout(function() {
        n(o);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(d, m, v) {
      if (m = m || d.name || "download", typeof d != "string")
        navigator.msSaveOrOpenBlob(e(d, v), m);
      else if (c(d))
        f(d, m, v);
      else {
        var w = document.createElement("a");
        w.href = d, w.target = "_blank", setTimeout(function() {
          n(w);
        });
      }
    } : function(d, m, v, w) {
      if (w = w || open("", "_blank"), w && (w.document.title = w.document.body.innerText = "downloading..."), typeof d == "string")
        return f(d, m, v);
      var o = d.type === "application/octet-stream", g = /constructor/i.test(s.HTMLElement) || s.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((a || o && g || r) && typeof FileReader < "u") {
        var A = new FileReader();
        A.onloadend = function() {
          var E = A.result;
          E = a ? E : E.replace(/^data:[^;]*;/, "data:attachment/file;"), w ? w.location.href = E : location = E, w = null;
        }, A.readAsDataURL(d);
      } else {
        var u = s.URL || s.webkitURL, y = u.createObjectURL(d);
        w ? w.location = y : location.href = y, w = null, setTimeout(function() {
          u.revokeObjectURL(y);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, x.exports = l;
  });
})(pe);
var De = pe.exports;
const Me = /* @__PURE__ */ de(De);
function zt(x) {
  for (var p = window.atob(x), e = p.length, f = new Uint8Array(e), c = 0; c < e; c++)
    f[c] = p.charCodeAt(c);
  return f.buffer;
}
const We = `#!/bin/sh

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
`, je = `@rem\r
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
`, Pe = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.7-bin.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Je = "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UGFyc2VyJEFmdGVyT3B0aW9ucy5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCL4zEXLAMAAF0HAAA8AAkAAAAAAAAAAAAAANMVAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRCZWZvcmVGaXJzdFN1YkNvbW1hbmQuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA6doPs98GAABiDgAAPQAJAAAAAAAAAAAAAAByGQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkS25vd25PcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBDJ3yiTAIAAJcEAAA8AAkAAAAAAAAAAAAAAMUgAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRNaXNzaW5nT3B0aW9uQXJnU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAtJRbo9cCAABKBQAAPQAJAAAAAAAAAAAAAACEIwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uQXdhcmVQYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB1W3o/ogEAAH0CAAA4AAkAAAAAAAAAAAAAAM8mAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAW1+kcDQIAAEMDAAAzAAkAAAAAAAAAAAAAAOAoAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAkMnJiacBAADOAgAAMgAJAAAAAAAAAAAAAABXKwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAS8+WoHMCAADHBAAAPwAJAAAAAAAAAAAAAABnLQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAB2MmemvBAAAYwgAACYACQAAAAAAAAAAAAAAUDAAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOsyd406BAAA4QcAACYACQAAAAAAAAAAAAAAXDUAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFrddm1UAQAArAEAACwACQAAAAAAAAAAAAAA8zkAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAPkkTxT/AgAAnAQAADMACQAAAAAAAAAAAAAAqjsAAG9yZy9ncmFkbGUvaW50ZXJuYWwvZmlsZS9QYXRoVHJhdmVyc2FsQ2hlY2tlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB5tXfKhwEAAAMCAABBAAkAAAAAAAAAAAAAABM/AABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBipwaKwQEAAKMCAAA+AAkAAAAAAAAAAAAAABJBAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvV3JhcHBlckRpc3RyaWJ1dGlvblVybENvbnZlcnRlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCcRdKajgEAAB4CAAAvAAkAAAAAAAAAAAAAAEhDAABvcmcvZ3JhZGxlL3dyYXBwZXIvQm9vdHN0cmFwTWFpblN0YXJ0ZXIkMS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQCA0yUGKQMAAOQEAABBAAkAAAAAAAAAAAAAADxFAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkRGVmYXVsdERvd25sb2FkUHJvZ3Jlc3NMaXN0ZW5lci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB3o7Ym5QIAABEFAAA0AAkAAAAAAAAAAAAAAN1IAABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQkUHJveHlBdXRoZW50aWNhdG9yLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhABgEsAxlCQAAKhIAACEACQAAAAAAAAAAAAAALUwAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBBcxcJ2QEAALICAAAtAAkAAAAAAAAAAAAAAOpVAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlVXNlckhvbWVMb29rdXAuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA3RS7hw0VAACpKQAAKgAJAAAAAAAAAAAAAAAnWAAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVdyYXBwZXJNYWluLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACKYkR7DCwAAuhUAACIACQAAAAAAAAAAAAAAlW0AAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJDEuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAqgSTSmoBAADnAQAALQAJAAAAAAAAAAAAAACxeQAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwkSW5zdGFsbENoZWNrLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAD8+qWeoDgAA2hsAACAACQAAAAAAAAAAAAAAf3sAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAF32tW87AgAAHgQAAB8ACQAAAAAAAAAAAAAAfooAAG9yZy9ncmFkbGUvd3JhcHBlci9Mb2dnZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA6imTPiQBAABqAQAAJgAJAAAAAAAAAAAAAAAPjQAAb3JnL2dyYWRsZS93cmFwcGVyL1BhdGhBc3NlbWJsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA1uMlrJoDAABOBgAAMAAJAAAAAAAAAAAAAACQjgAAb3JnL2dyYWRsZS93cmFwcGVyL1N5c3RlbVByb3BlcnRpZXNIYW5kbGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAOYRBMnuAgAAUAYAAC0ACQAAAAAAAAAAAAAAkZIAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyQ29uZmlndXJhdGlvbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQARWWHoUwYAAMUMAAAoAAkAAAAAAAAAAAAAAOOVAABvcmcvZ3JhZGxlL3dyYXBwZXIvV3JhcHBlckV4ZWN1dG9yLmNsYXNzVVQFAAEAAAAAUEsFBgAAAAAhACEAEg0AAJWcAAAAAA==", me = `# gradle

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
`, ge = `# Automatically build the project and run any configured tests for every push
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
async function Ze({ writer: x }) {
  await x.write("gradlew", We, {
    executable: !0
  }), await x.write("gradlew.bat", je), await x.write("gradle/wrapper/gradle-wrapper.properties", Pe), await x.write("gradle/wrapper/gradle-wrapper.jar", zt(Je)), await x.write(".gitignore", me), await x.write(".github/workflows/build.yml", ge);
}
var jt = { exports: {} };
(function(x, p) {
  (function(e, f) {
    f(p);
  })(It, function(e) {
    function f() {
      return f = Object.assign ? Object.assign.bind() : function(S) {
        for (var U = 1; U < arguments.length; U++) {
          var F = arguments[U];
          for (var j in F)
            Object.prototype.hasOwnProperty.call(F, j) && (S[j] = F[j]);
        }
        return S;
      }, f.apply(this, arguments);
    }
    function c(S, U) {
      S.prototype = Object.create(U.prototype), S.prototype.constructor = S, s(S, U);
    }
    function n(S) {
      return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(U) {
        return U.__proto__ || Object.getPrototypeOf(U);
      }, n(S);
    }
    function s(S, U) {
      return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(F, j) {
        return F.__proto__ = j, F;
      }, s(S, U);
    }
    function r(S, U, F) {
      return r = function() {
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
      }() ? Reflect.construct.bind() : function(j, C, B) {
        var K = [null];
        K.push.apply(K, C);
        var Q = new (Function.bind.apply(j, K))();
        return B && s(Q, B.prototype), Q;
      }, r.apply(null, arguments);
    }
    function l(S) {
      var U = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return l = function(F) {
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
          return r(F, arguments, n(this).constructor);
        }
        return j.prototype = Object.create(F.prototype, { constructor: { value: j, enumerable: !1, writable: !0, configurable: !0 } }), s(j, F);
      }, l(S);
    }
    var d = /* @__PURE__ */ function() {
      function S(F) {
        this.cache = void 0, this.cache = F;
      }
      var U = S.prototype;
      return U.define = function(F, j) {
        this.cache[F] = j;
      }, U.get = function(F) {
        return this.cache[F];
      }, U.remove = function(F) {
        delete this.cache[F];
      }, U.reset = function() {
        this.cache = {};
      }, U.load = function(F) {
        this.cache = f({}, this.cache, F);
      }, S;
    }(), m = /* @__PURE__ */ function(S) {
      function U(F) {
        var j;
        return (j = S.call(this, F) || this).name = "Eta Error", j;
      }
      return c(U, S), U;
    }(/* @__PURE__ */ l(Error));
    function v(S, U, F) {
      var j = U.slice(0, F).split(/\n/), C = j.length, B = j[C - 1].length + 1;
      throw S += " at line " + C + " col " + B + `:

  ` + U.split(/\n/)[C - 1] + `
  ` + Array(B).join(" ") + "^", new m(S);
    }
    function w(S, U, F, j) {
      var C = U.split(`
`), B = Math.max(F - 3, 0), K = Math.min(C.length, F + 3), Q = j, X = C.slice(B, K).map(function(mt, ot) {
        var st = ot + B + 1;
        return (st == F ? " >> " : "    ") + st + "| " + mt;
      }).join(`
`), ut = new m((Q ? Q + ":" + F + `
` : "line " + F + `
`) + X + `

` + S.message);
      throw ut.name = S.name, ut;
    }
    var o = function() {
      return Promise.resolve();
    }.constructor;
    function g(S, U) {
      var F = this.config, j = U && U.async ? o : Function;
      try {
        return new j(F.varName, "options", this.compileToString.call(this, S, U));
      } catch (C) {
        throw C instanceof SyntaxError ? new m(`Bad template syntax

` + C.message + `
` + Array(C.message.length + 1).join("=") + `
` + this.compileToString.call(this, S, U) + `
`) : C;
      }
    }
    function a(S, U) {
      var F = this.config, j = U && U.async, C = this.parse.call(this, S), B = F.functionHeader + `
let include = (template, data) => this.render(template, data, options);
let includeAsync = (template, data) => this.renderAsync(template, data, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction` + (F.debug ? ', line: 1, templateStr: "' + S.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + '"' : "") + `};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}` + (F.debug ? "try {" : "") + (F.useWith ? "with(" + F.varName + "||{}){" : "") + `

` + A.call(this, C) + `
if (__eta.layout) {
  __eta.res = ` + (j ? "await includeAsync" : "include") + " (__eta.layout, {..." + F.varName + `, body: __eta.res, ...__eta.layoutData});
}
` + (F.useWith ? "}" : "") + (F.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : "") + `
return __eta.res;
`;
      if (F.plugins)
        for (var K = 0; K < F.plugins.length; K++) {
          var Q = F.plugins[K];
          Q.processFnString && (B = Q.processFnString(B, F));
        }
      return B;
    }
    function A(S) {
      for (var U = this.config, F = 0, j = S.length, C = ""; F < j; F++) {
        var B = S[F];
        if (typeof B == "string")
          C += "__eta.res+='" + B + `'
`;
        else {
          var K = B.t, Q = B.val || "";
          U.debug && (C += "__eta.line=" + B.lineNo + `
`), K === "r" ? (U.autoFilter && (Q = "__eta.f(" + Q + ")"), C += "__eta.res+=" + Q + `
`) : K === "i" ? (U.autoFilter && (Q = "__eta.f(" + Q + ")"), U.autoEscape && (Q = "__eta.e(" + Q + ")"), C += "__eta.res+=" + Q + `
`) : K === "e" && (C += Q + `
`);
        }
      }
      return C;
    }
    var u = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function y(S) {
      return u[S];
    }
    var E = { autoEscape: !0, autoFilter: !1, autoTrim: [!1, "nl"], cache: !1, cacheFilepaths: !0, debug: !1, escapeFunction: function(S) {
      var U = String(S);
      return /[&<>"']/.test(U) ? U.replace(/[&<>"']/g, y) : U;
    }, filterFunction: function(S) {
      return String(S);
    }, functionHeader: "", parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], useWith: !1, varName: "it" }, N = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, _ = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, z = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function G(S) {
      return S.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function J(S, U) {
      return S.slice(0, U).split(`
`).length;
    }
    function V(S) {
      var U = this.config, F = [], j = !1, C = 0, B = U.parse;
      if (U.plugins)
        for (var K = 0; K < U.plugins.length; K++) {
          var Q = U.plugins[K];
          Q.processTemplate && (S = Q.processTemplate(S, U));
        }
      function X(I, M) {
        I && (I = function(L, R, Z, H) {
          var P, $;
          return Array.isArray(R.autoTrim) ? (P = R.autoTrim[1], $ = R.autoTrim[0]) : P = $ = R.autoTrim, (Z || Z === !1) && (P = Z), (H || H === !1) && ($ = H), $ || P ? P === "slurp" && $ === "slurp" ? L.trim() : (P === "_" || P === "slurp" ? L = L.trimStart() : P !== "-" && P !== "nl" || (L = L.replace(/^(?:\r\n|\n|\r)/, "")), $ === "_" || $ === "slurp" ? L = L.trimEnd() : $ !== "-" && $ !== "nl" || (L = L.replace(/(?:\r\n|\n|\r)$/, "")), L) : L;
        }(I, U, j, M), I && (I = I.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), F.push(I)));
      }
      U.rmWhitespace && (S = S.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), N.lastIndex = 0, _.lastIndex = 0, z.lastIndex = 0;
      for (var ut, mt = [B.exec, B.interpolate, B.raw].reduce(function(I, M) {
        return I && M ? I + "|" + G(M) : M ? G(M) : I;
      }, ""), ot = new RegExp(G(U.tags[0]) + "(-|_)?\\s*(" + mt + ")?\\s*", "g"), st = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + G(U.tags[1]) + ")", "g"); ut = ot.exec(S); ) {
        var gt = S.slice(C, ut.index);
        C = ut[0].length + ut.index;
        var At = ut[2] || "";
        X(gt, ut[1]), st.lastIndex = C;
        for (var pt = void 0, dt = !1; pt = st.exec(S); ) {
          if (pt[1]) {
            var t = S.slice(C, pt.index);
            ot.lastIndex = C = st.lastIndex, j = pt[2], dt = { t: At === B.exec ? "e" : At === B.raw ? "r" : At === B.interpolate ? "i" : "", val: t };
            break;
          }
          var D = pt[0];
          if (D === "/*") {
            var T = S.indexOf("*/", st.lastIndex);
            T === -1 && v("unclosed comment", S, pt.index), st.lastIndex = T;
          } else
            D === "'" ? (_.lastIndex = pt.index, _.exec(S) ? st.lastIndex = _.lastIndex : v("unclosed string", S, pt.index)) : D === '"' ? (z.lastIndex = pt.index, z.exec(S) ? st.lastIndex = z.lastIndex : v("unclosed string", S, pt.index)) : D === "`" && (N.lastIndex = pt.index, N.exec(S) ? st.lastIndex = N.lastIndex : v("unclosed string", S, pt.index));
        }
        dt ? (U.debug && (dt.lineNo = J(S, ut.index)), F.push(dt)) : v("unclosed tag", S, ut.index);
      }
      if (X(S.slice(C, S.length), !1), U.plugins)
        for (var b = 0; b < U.plugins.length; b++) {
          var h = U.plugins[b];
          h.processAST && (F = h.processAST(F, U));
        }
      return F;
    }
    function Y(S, U) {
      var F = U && U.async ? this.templatesAsync : this.templatesSync;
      if (this.resolvePath && this.readFile && !S.startsWith("@")) {
        var j = U.filepath, C = F.get(j);
        if (this.config.cache && C)
          return C;
        var B = this.readFile(j), K = this.compile(B, U);
        return this.config.cache && F.define(j, K), K;
      }
      var Q = F.get(S);
      if (Q)
        return Q;
      throw new m("Failed to get template '" + S + "'");
    }
    function nt(S, U, F) {
      var j, C = f({}, F, { async: !1 });
      return typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (C.filepath = this.resolvePath(S, C)), j = Y.call(this, S, C)) : j = S, j.call(this, U, C);
    }
    function k(S, U, F) {
      var j, C = f({}, F, { async: !0 });
      typeof S == "string" ? (this.resolvePath && this.readFile && !S.startsWith("@") && (C.filepath = this.resolvePath(S, C)), j = Y.call(this, S, C)) : j = S;
      var B = j.call(this, U, C);
      return Promise.resolve(B);
    }
    function O(S, U) {
      var F = this.compile(S, { async: !1 });
      return nt.call(this, F, U);
    }
    function i(S, U) {
      var F = this.compile(S, { async: !0 });
      return k.call(this, F, U);
    }
    var W = /* @__PURE__ */ function() {
      function S(F) {
        this.config = void 0, this.RuntimeErr = w, this.compile = g, this.compileToString = a, this.parse = V, this.render = nt, this.renderAsync = k, this.renderString = O, this.renderStringAsync = i, this.filepathCache = {}, this.templatesSync = new d({}), this.templatesAsync = new d({}), this.resolvePath = null, this.readFile = null, this.config = F ? f({}, E, F) : f({}, E);
      }
      var U = S.prototype;
      return U.configure = function(F) {
        this.config = f({}, this.config, F);
      }, U.withConfig = function(F) {
        return f({}, this, { config: f({}, this.config, F) });
      }, U.loadTemplate = function(F, j, C) {
        if (typeof j == "string")
          (C && C.async ? this.templatesAsync : this.templatesSync).define(F, this.compile(j, C));
        else {
          var B = this.templatesSync;
          (j.constructor.name === "AsyncFunction" || C && C.async) && (B = this.templatesAsync), B.define(F, j);
        }
      }, S;
    }(), it = /* @__PURE__ */ function(S) {
      function U() {
        return S.apply(this, arguments) || this;
      }
      return c(U, S), U;
    }(W);
    e.Eta = it;
  });
})(jt, jt.exports);
var Qe = jt.exports;
const Ye = new Qe.Eta({
  autoTrim: !1
});
function Ft(x, p) {
  return Ye.renderString(x, p);
}
const Xe = `# Done to increase the memory available to gradle.
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
fabric_version=<%= it.fabricVersion %>`, He = `plugins {
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
	mappings "net.fabricmc:yarn:\${project.yarn_mappings}:v2"
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
}`, qe = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`;
function Ke(x) {
  return Mt(x) >= 17;
}
function $e(x) {
  return Mt(x) >= 19;
}
function Mt(x) {
  return Number(x.split(".")[1]);
}
function ve(x, p) {
  let e = [];
  const f = p ? "Modid" : "Mod Name";
  return x.length == 0 ? [`${f} is empty!`] : (x.length == 1 ? e.push(`${f} is only a single character! (It must be at least 2 characters long)!`) : x.length > 64 && e.push(`${f} has more than 64 characters!`), x.toLocaleLowerCase().startsWith("fabric") && e.push("Mod id starts with 'fabric', which is generally reserved for Fabric itself."), e.length === 0 ? void 0 : e);
}
function tn(x) {
  if (x === void 0)
    return;
  let p = ve(x, !0) ?? [];
  const e = x.charAt(0);
  (e < "a" || e > "z") && p.push("Modid starts with an invalid character '" + e + "' (it must belowercase a-z)");
  let f = null;
  for (let c = 1; c < x.length; c++) {
    let n = x.charAt(c);
    n == "-" || n == "_" || "0" <= n && n <= "9" || "a" <= n && n <= "z" || (f == null && (f = []), f.push(n));
  }
  if (f != null) {
    let c = "Modid contains invalid characters: " + f.map((n) => "'" + n + "'").join(", ") + "!";
    p.push(c + "!");
  }
  if (p.length != 0)
    return p;
}
function en(x) {
  return x.toLocaleLowerCase().replace(/\s+/g, ".").replace(/[^a-za-z0-9_\.]/, "");
}
function nn(x) {
  return x.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
const rn = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, an = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, sn = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
};
function Wt(x) {
  const p = Mt(x);
  return p <= 16 ? rn : p == 17 ? an : sn;
}
const on = /^[a-z][a-z0-9_]*(\.[a-z0-9_]+)+[0-9a-z_]$/, ln = ["net.minecraft.", "com.mojang.", "net.fabricmc.", "java."];
function cn(x) {
  let p = [];
  on.test(x.toLowerCase()) || p.push("Package name is not a valid Java package name!");
  for (let e of ln)
    x.toLowerCase().startsWith(e) ? p.push(`Package name starts with '${e}', which is reserved!`) : x.toLowerCase() + "." == e && p.push(`Package name is '${e}', which is reserved!`);
  return p;
}
async function un(x, p) {
  await x.write("gradle.properties", Ft(Xe, p)), await x.write("build.gradle", Ft(He, { ...p, java: Wt(p.minecraftVersion) })), await x.write("settings.gradle", qe);
}
const hn = `package <%= it.packageName %>;

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
}`, An = `package <%= it.packageName %>;

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
async function dn(x, p) {
  const e = p.packageName + ".mixin", f = "ExampleMixin", c = {
    required: !0,
    package: e,
    compatibilityLevel: Wt(p.minecraftVersion).mixin,
    mixins: [
      f
    ],
    injectors: {
      defaultRequire: 1
    }
  }, n = `${p.modid}.mixins.json`;
  return await x.write(`src/main/resources/${n}`, JSON.stringify(c, null, "	")), await x.write(`src/main/java/${e.replaceAll(".", "/")}/${f}.java`, Ft(hn, {
    className: f,
    packageName: e
  })), [n];
}
async function fn(x, p) {
  const e = p.packageName + ".mixin.client", f = "ExampleClientMixin", c = {
    required: !0,
    package: e,
    compatibilityLevel: Wt(p.minecraftVersion).mixin,
    client: [
      f
    ],
    injectors: {
      defaultRequire: 1
    }
  }, n = `${p.modid}.client.mixins.json`;
  return await x.write(`src/client/resources/${n}`, JSON.stringify(c, null, "	")), await x.write(`src/client/java/${e.replaceAll(".", "/")}/${f}.java`, Ft(An, {
    className: f,
    packageName: e
  })), [
    {
      config: n,
      environment: "client"
    }
  ];
}
const pn = `package <%= it.package %>;

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
}`, mn = `package <%= it.package %>

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
}`, gn = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, vn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, bn = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, wn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function yn(x, p) {
  const e = kn(p.projectName), f = {
    package: p.packageName,
    className: e,
    classFullName: p.packageName + "." + e,
    path: p.packageName.replaceAll(".", "/") + "/" + e,
    modid: p.modid,
    slf4j: Mt(p.minecraftVersion) >= 18,
    clientEntrypoint: p.splitSources,
    dataEntrypoint: p.dataGeneration
  };
  return p.kotlin ? await xn(x, f) : await En(x, f);
}
function kn(x) {
  return x.split(" ").map((p) => p[0].toUpperCase() + p.slice(1)).join("").replace(/\W+/g, "");
}
async function En(x, p) {
  var e = {
    main: [
      p.classFullName
    ]
  };
  return await x.write(`src/main/java/${p.path}.java`, Ft(pn, p)), p.clientEntrypoint && (await x.write(`src/client/java/${p.path}Client.java`, Ft(gn, { ...p, className: p.className + "Client" })), e = {
    ...e,
    client: [
      p.classFullName + "Client"
    ]
  }), p.dataEntrypoint && (await x.write(`src/main/java/${p.path}DataGenerator.java`, Ft(bn, { ...p, className: p.className + "DataGenerator" })), e = {
    ...e,
    "fabric-datagen": [
      p.classFullName + "DataGenerator"
    ]
  }), e;
}
async function xn(x, p) {
  var e = {
    main: [
      {
        value: p.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  return await x.write(`src/main/kotlin/${p.path}.kt`, Ft(mn, p)), p.clientEntrypoint && (await x.write(`src/client/kotlin/${p.path}Client.kt`, Ft(vn, { ...p, className: p.className + "Client" })), e = {
    ...e,
    client: [
      {
        value: p.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), p.dataEntrypoint && (await x.write(`src/main/kotlin/${p.path}DataGenerator.kt`, Ft(wn, { ...p, className: p.className + "DataGenerator" })), e = {
    ...e,
    "fabric-datagen": [
      {
        value: p.classFullName + "DataGenerator",
        adapter: "kotlin"
      }
    ]
  }), e;
}
const Yt = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Cn(x, p, e) {
  if (!p)
    return zt(Yt);
  const f = e.create(128, 128);
  return f != null && Sn(f, x) ? f.getPng() : zt(Yt);
}
function Sn(x, p) {
  const e = x.getContext("2d");
  if (e == null)
    return !1;
  e.fillStyle = "#ffffff", e.fillRect(0, 0, 128, 128);
  const f = p.split(/\s+/);
  let c = 0, n = Array(f.length), s = 65;
  for (; ; ) {
    c = 0;
    for (const l of f) {
      let d = s;
      do
        d--, e.font = `${d}px ${Tt}`;
      while (e.measureText(l).width > 124);
      s = Math.min(s, d);
    }
    for (let l = 0; l < f.length; l++) {
      const d = f[l];
      e.font = `${s}px ${Tt}`;
      const m = x.measureText(e, d);
      n[l] = m.ascent + m.descent, c += n[l];
    }
    if (c += (f.length - 1) * 2, c <= 124)
      break;
  }
  const r = (128 - c) / 2;
  for (let l = 0; l < f.length; l++) {
    let d = 0;
    for (const w of n.slice(0, l))
      d += w + 2;
    const m = f[l];
    e.font = `${s}px ${Tt}`, e.fillStyle = "#000000", e.textAlign = "center";
    const v = x.measureText(e, m);
    e.fillText(m, 64, r + d + v.ascent);
  }
  return !0;
}
function In(x) {
  return Number(x.split(".")[1]) >= 59;
}
async function Bn(x, p, e) {
  const f = [
    ...await dn(x, e),
    ...e.splitSources ? await fn(x, e) : []
  ], c = {
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
    entrypoints: await yn(x, e),
    mixins: f,
    depends: {
      fabricloader: ">=" + e.loaderVersion,
      minecraft: "~" + e.minecraftVersion,
      java: ">=" + Wt(e.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  c.depends[In(e.fabricVersion) ? "fabric-api" : "fabric"] = "*", e.kotlin && (c.depends = {
    ...c.depends,
    "fabric-language-kotlin": ">=" + e.kotlin.kotlinVersion
  }), await x.write("src/main/resources/fabric.mod.json", JSON.stringify(c, null, "	")), await x.write(`src/main/resources/assets/${e.modid}/icon.png`, Cn(e.projectName, e.uniqueModIcon, p));
}
const Fn = `#
# https://help.github.com/articles/dealing-with-line-endings/
#
# Linux start script should use lf
/gradlew        text eol=lf

# These are Windows script files and should use crlf
*.bat           text eol=crlf

`, Rn = `Creative Commons Legal Code

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
async function _n(x, p) {
  await x.write(".gitattributes", Fn), await x.write(".gitignore", me), await x.write(".github/workflows/build.yml", ge), await x.write("LICENSE", Rn);
}
const Tt = "Comic Relief";
async function Nn(x) {
  const p = await Tn(x.config);
  await Ze(x), await un(x.writer, p), await Bn(x.writer, x.canvas, p), await _n(x.writer);
}
async function be() {
  return (await Te()).filter((p) => p.stable).filter((p) => {
    const e = p.version;
    return !(e.startsWith("1.14") && e != "1.14.4");
  });
}
async function Tn(x) {
  return {
    ...x,
    loaderVersion: (await Oe()).find((p) => p.stable).version,
    fabricVersion: await Ue(x.minecraftVersion),
    yarnVersion: (await Ve(x.minecraftVersion))[0].version,
    kotlin: await On(x)
  };
}
async function On(x) {
  if (!x.useKotlin)
    return;
  const e = (await Ge()).pop(), f = e.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: e,
    kotlinVersion: f
  };
}
const Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ICON_FONT: Tt,
  generateTemplate: Nn,
  getTemplateGameVersions: be
}, Symbol.toStringTag, { value: "Module" }));
function Xt(x, p, e) {
  const f = x.slice();
  return f[29] = p[e], f;
}
function Ht(x, p, e) {
  const f = x.slice();
  return f[32] = p[e], f;
}
function qt(x, p, e) {
  const f = x.slice();
  return f[32] = p[e], f;
}
function Kt(x, p, e) {
  const f = x.slice();
  return f[32] = p[e], f;
}
function Vn(x) {
  let p, e, f = (
    /*error*/
    x[32].message + ""
  ), c, n, s;
  return {
    c() {
      p = rt("p"), e = xt("Error: "), c = xt(f), n = ht(), s = rt("p"), s.innerHTML = `For support please visit one of our
        <a href="/discuss/">community discussion</a>
        groups.`, _t(p, "color", "red");
    },
    m(r, l) {
      vt(r, p, l), q(p, e), q(p, c), vt(r, n, l), vt(r, s, l);
    },
    p: Bt,
    i: Bt,
    o: Bt,
    d(r) {
      r && bt(p), r && bt(n), r && bt(s);
    }
  };
}
function Gn(x) {
  let p, e, f, c, n, s, r, l, d, m, v, w, o, g, a, A, u, y, E, N, _, z, G, J, V, Y, nt, k, O, i, W, it, S, U, F, j, C, B, K, Q, X, ut, mt, ot, st, gt, At, pt, dt, t, D, T, b;
  function h(et, ct) {
    return (
      /*customModId*/
      et[3] != null ? zn : Ln
    );
  }
  let I = h(x), M = I(x), L = (
    /*modIdErrors*/
    x[13] != null && $t(x)
  ), R = (
    /*customModId*/
    x[3] != null && ee(x)
  ), Z = (
    /*packageNameErrors*/
    x[11]
  ), H = [];
  for (let et = 0; et < Z.length; et += 1)
    H[et] = ie(Ht(x, Z, et));
  let P = (
    /*data*/
    x[28].game
  ), $ = [];
  for (let et = 0; et < P.length; et += 1)
    $[et] = ae(Xt(x, P, et));
  let lt = (
    /*supportsDataGen*/
    x[10] && se(x)
  ), at = (
    /*supportsSplitSources*/
    x[9] && oe(x)
  );
  const yt = [Mn, Dn], Et = [];
  function Ct(et, ct) {
    return (
      /*loading*/
      et[8] ? 0 : 1
    );
  }
  return dt = Ct(x), t = Et[dt] = yt[dt](x), {
    c() {
      p = rt("div"), e = rt("div"), f = rt("h3"), f.textContent = "Mod Name:", c = ht(), n = rt("hr"), s = ht(), M.c(), r = ht(), l = rt("input"), d = ht(), L && L.c(), m = ht(), R && R.c(), v = ht(), w = rt("div"), o = rt("h3"), o.textContent = "Package Name:", g = ht(), a = rt("hr"), A = ht(), u = rt("p"), u.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-c4460r">name.modid</code>.`, y = ht(), E = rt("input"), N = ht();
      for (let et = 0; et < H.length; et += 1)
        H[et].c();
      _ = ht(), z = rt("div"), G = rt("h3"), G.textContent = "Minecraft Version:", J = ht(), V = rt("hr"), Y = ht(), nt = rt("p"), nt.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, k = ht(), O = rt("select");
      for (let et = 0; et < $.length; et += 1)
        $[et].c();
      i = ht(), W = rt("hr"), it = ht(), S = rt("br"), U = ht(), F = rt("h4"), F.textContent = "Advanced Options:", j = ht(), C = rt("div"), B = rt("div"), K = rt("input"), Q = ht(), X = rt("label"), X.textContent = "Kotlin Programming Language", ut = ht(), mt = rt("p"), mt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-c4460r">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-c4460r">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ot = ht(), lt && lt.c(), st = ht(), at && at.c(), gt = ht(), At = rt("br"), pt = ht(), t.c(), tt(f, "class", "svelte-c4460r"), tt(n, "class", "svelte-c4460r"), tt(l, "id", "project-name"), tt(l, "class", "svelte-c4460r"), tt(e, "class", "form-line svelte-c4460r"), tt(o, "class", "svelte-c4460r"), tt(a, "class", "svelte-c4460r"), tt(u, "class", "svelte-c4460r"), tt(E, "id", "package-name"), tt(E, "class", "svelte-c4460r"), tt(w, "class", "form-line svelte-c4460r"), tt(G, "class", "svelte-c4460r"), tt(V, "class", "svelte-c4460r"), tt(nt, "class", "svelte-c4460r"), tt(O, "id", "minecraft-version"), _t(O, "min-width", "200px"), tt(O, "class", "svelte-c4460r"), /*minecraftVersion*/
      x[0] === void 0 && Re(() => (
        /*select_change_handler*/
        x[23].call(O)
      )), tt(z, "class", "form-line svelte-c4460r"), tt(W, "class", "svelte-c4460r"), tt(S, "class", "svelte-c4460r"), tt(F, "class", "svelte-c4460r"), tt(K, "id", "kotlin"), tt(K, "type", "checkbox"), tt(K, "class", "option-input svelte-c4460r"), tt(X, "for", "kotlin"), tt(X, "class", "option-label svelte-c4460r"), tt(B, "class", "option-container svelte-c4460r"), tt(mt, "class", "option-body svelte-c4460r"), tt(C, "class", "svelte-c4460r"), tt(At, "class", "svelte-c4460r"), tt(p, "class", "template svelte-c4460r");
    },
    m(et, ct) {
      vt(et, p, ct), q(p, e), q(e, f), q(e, c), q(e, n), q(e, s), M.m(e, null), q(e, r), q(e, l), Rt(
        l,
        /*projectName*/
        x[1]
      ), q(e, d), L && L.m(e, null), q(p, m), R && R.m(p, null), q(p, v), q(p, w), q(w, o), q(w, g), q(w, a), q(w, A), q(w, u), q(w, y), q(w, E), Rt(
        E,
        /*packageName*/
        x[2]
      ), q(w, N);
      for (let wt = 0; wt < H.length; wt += 1)
        H[wt] && H[wt].m(w, null);
      q(p, _), q(p, z), q(z, G), q(z, J), q(z, V), q(z, Y), q(z, nt), q(z, k), q(z, O);
      for (let wt = 0; wt < $.length; wt += 1)
        $[wt] && $[wt].m(O, null);
      Qt(
        O,
        /*minecraftVersion*/
        x[0],
        !0
      ), q(p, i), q(p, W), q(p, it), q(p, S), q(p, U), q(p, F), q(p, j), q(p, C), q(C, B), q(B, K), K.checked = /*useKotlin*/
      x[5], q(B, Q), q(B, X), q(C, ut), q(C, mt), q(p, ot), lt && lt.m(p, null), q(p, st), at && at.m(p, null), q(p, gt), q(p, At), q(p, pt), Et[dt].m(p, null), D = !0, T || (b = [
        St(
          l,
          "input",
          /*input0_input_handler*/
          x[20]
        ),
        St(
          l,
          "blur",
          /*doFormatProjectName*/
          x[16]
        ),
        St(
          E,
          "keyup",
          /*doFormatPackageName*/
          x[17]
        ),
        St(
          E,
          "input",
          /*input1_input_handler*/
          x[22]
        ),
        St(
          O,
          "change",
          /*select_change_handler*/
          x[23]
        ),
        St(
          K,
          "change",
          /*input2_change_handler*/
          x[24]
        )
      ], T = !0);
    },
    p(et, ct) {
      if (I === (I = h(et)) && M ? M.p(et, ct) : (M.d(1), M = I(et), M && (M.c(), M.m(e, r))), ct[0] & /*projectName*/
      2 && l.value !== /*projectName*/
      et[1] && Rt(
        l,
        /*projectName*/
        et[1]
      ), /*modIdErrors*/
      et[13] != null ? L ? L.p(et, ct) : (L = $t(et), L.c(), L.m(e, null)) : L && (L.d(1), L = null), /*customModId*/
      et[3] != null ? R ? R.p(et, ct) : (R = ee(et), R.c(), R.m(p, v)) : R && (R.d(1), R = null), ct[0] & /*packageName*/
      4 && E.value !== /*packageName*/
      et[2] && Rt(
        E,
        /*packageName*/
        et[2]
      ), ct[0] & /*packageNameErrors*/
      2048) {
        Z = /*packageNameErrors*/
        et[11];
        let ft;
        for (ft = 0; ft < Z.length; ft += 1) {
          const kt = Ht(et, Z, ft);
          H[ft] ? H[ft].p(kt, ct) : (H[ft] = ie(kt), H[ft].c(), H[ft].m(w, null));
        }
        for (; ft < H.length; ft += 1)
          H[ft].d(1);
        H.length = Z.length;
      }
      if (ct[0] & /*versions*/
      16384) {
        P = /*data*/
        et[28].game;
        let ft;
        for (ft = 0; ft < P.length; ft += 1) {
          const kt = Xt(et, P, ft);
          $[ft] ? $[ft].p(kt, ct) : ($[ft] = ae(kt), $[ft].c(), $[ft].m(O, null));
        }
        for (; ft < $.length; ft += 1)
          $[ft].d(1);
        $.length = P.length;
      }
      ct[0] & /*minecraftVersion, versions*/
      16385 && Qt(
        O,
        /*minecraftVersion*/
        et[0]
      ), ct[0] & /*useKotlin*/
      32 && (K.checked = /*useKotlin*/
      et[5]), /*supportsDataGen*/
      et[10] ? lt ? lt.p(et, ct) : (lt = se(et), lt.c(), lt.m(p, st)) : lt && (lt.d(1), lt = null), /*supportsSplitSources*/
      et[9] ? at ? at.p(et, ct) : (at = oe(et), at.c(), at.m(p, gt)) : at && (at.d(1), at = null);
      let wt = dt;
      dt = Ct(et), dt === wt ? Et[dt].p(et, ct) : (_e(), Ut(Et[wt], 1, 1, () => {
        Et[wt] = null;
      }), Ne(), t = Et[dt], t ? t.p(et, ct) : (t = Et[dt] = yt[dt](et), t.c()), Ot(t, 1), t.m(p, null));
    },
    i(et) {
      D || (Ot(t), D = !0);
    },
    o(et) {
      Ut(t), D = !1;
    },
    d(et) {
      et && bt(p), M.d(), L && L.d(), R && R.d(), Lt(H, et), Lt($, et), lt && lt.d(), at && at.d(), Et[dt].d(), T = !1, le(b);
    }
  };
}
function Ln(x) {
  let p, e, f, c, n, s, r, l;
  return {
    c() {
      p = rt("p"), e = xt("Choose a name for your new mod. The mod ID will be "), f = rt("code"), c = xt(
        /*modid*/
        x[4]
      ), n = xt(". "), s = rt("a"), s.textContent = "Use custom id", tt(f, "class", "svelte-c4460r"), tt(s, "href", ""), tt(s, "class", "svelte-c4460r"), tt(p, "class", "svelte-c4460r");
    },
    m(d, m) {
      vt(d, p, m), q(p, e), q(p, f), q(f, c), q(p, n), q(p, s), r || (l = St(s, "click", Pt(
        /*useCustomModId*/
        x[18]
      )), r = !0);
    },
    p(d, m) {
      m[0] & /*modid*/
      16 && Dt(
        c,
        /*modid*/
        d[4]
      );
    },
    d(d) {
      d && bt(p), r = !1, l();
    }
  };
}
function zn(x) {
  let p;
  return {
    c() {
      p = rt("p"), p.textContent = "Choose a name for your new mod.", tt(p, "class", "svelte-c4460r");
    },
    m(e, f) {
      vt(e, p, f);
    },
    p: Bt,
    d(e) {
      e && bt(p);
    }
  };
}
function $t(x) {
  let p, e, f = (
    /*modIdErrors*/
    x[13]
  ), c = [];
  for (let n = 0; n < f.length; n += 1)
    c[n] = te(Kt(x, f, n));
  return {
    c() {
      for (let n = 0; n < c.length; n += 1)
        c[n].c();
      p = ht(), e = rt("br"), tt(e, "class", "svelte-c4460r");
    },
    m(n, s) {
      for (let r = 0; r < c.length; r += 1)
        c[r] && c[r].m(n, s);
      vt(n, p, s), vt(n, e, s);
    },
    p(n, s) {
      if (s[0] & /*modIdErrors*/
      8192) {
        f = /*modIdErrors*/
        n[13];
        let r;
        for (r = 0; r < f.length; r += 1) {
          const l = Kt(n, f, r);
          c[r] ? c[r].p(l, s) : (c[r] = te(l), c[r].c(), c[r].m(p.parentNode, p));
        }
        for (; r < c.length; r += 1)
          c[r].d(1);
        c.length = f.length;
      }
    },
    d(n) {
      Lt(c, n), n && bt(p), n && bt(e);
    }
  };
}
function te(x) {
  let p, e = (
    /*error*/
    x[32] + ""
  ), f;
  return {
    c() {
      p = rt("li"), f = xt(e), _t(p, "color", "red"), tt(p, "class", "svelte-c4460r");
    },
    m(c, n) {
      vt(c, p, n), q(p, f);
    },
    p(c, n) {
      n[0] & /*modIdErrors*/
      8192 && e !== (e = /*error*/
      c[32] + "") && Dt(f, e);
    },
    d(c) {
      c && bt(p);
    }
  };
}
function ee(x) {
  let p, e, f, c, n, s, r, l, d, m, v, w, o, g = (
    /*customIdErrors*/
    x[12] != null && ne(x)
  );
  return {
    c() {
      p = rt("div"), e = rt("h3"), e.textContent = "Mod ID:", f = ht(), c = rt("hr"), n = ht(), s = rt("p"), r = xt("Enter the modid you wish to use for your mod. "), l = rt("a"), l.textContent = "Use default", d = ht(), g && g.c(), m = ht(), v = rt("input"), tt(e, "class", "svelte-c4460r"), tt(c, "class", "svelte-c4460r"), tt(l, "href", ""), tt(l, "class", "svelte-c4460r"), tt(s, "class", "svelte-c4460r"), tt(v, "id", "mod-id"), tt(v, "class", "svelte-c4460r"), tt(p, "class", "form-line svelte-c4460r");
    },
    m(a, A) {
      vt(a, p, A), q(p, e), q(p, f), q(p, c), q(p, n), q(p, s), q(s, r), q(s, l), q(p, d), g && g.m(p, null), q(p, m), q(p, v), Rt(
        v,
        /*customModId*/
        x[3]
      ), w || (o = [
        St(l, "click", Pt(
          /*useDefaultModId*/
          x[19]
        )),
        St(
          v,
          "input",
          /*input_input_handler*/
          x[21]
        )
      ], w = !0);
    },
    p(a, A) {
      /*customIdErrors*/
      a[12] != null ? g ? g.p(a, A) : (g = ne(a), g.c(), g.m(p, m)) : g && (g.d(1), g = null), A[0] & /*customModId*/
      8 && v.value !== /*customModId*/
      a[3] && Rt(
        v,
        /*customModId*/
        a[3]
      );
    },
    d(a) {
      a && bt(p), g && g.d(), w = !1, le(o);
    }
  };
}
function ne(x) {
  let p, e, f = (
    /*customIdErrors*/
    x[12]
  ), c = [];
  for (let n = 0; n < f.length; n += 1)
    c[n] = re(qt(x, f, n));
  return {
    c() {
      for (let n = 0; n < c.length; n += 1)
        c[n].c();
      p = ht(), e = rt("br"), tt(e, "class", "svelte-c4460r");
    },
    m(n, s) {
      for (let r = 0; r < c.length; r += 1)
        c[r] && c[r].m(n, s);
      vt(n, p, s), vt(n, e, s);
    },
    p(n, s) {
      if (s[0] & /*customIdErrors*/
      4096) {
        f = /*customIdErrors*/
        n[12];
        let r;
        for (r = 0; r < f.length; r += 1) {
          const l = qt(n, f, r);
          c[r] ? c[r].p(l, s) : (c[r] = re(l), c[r].c(), c[r].m(p.parentNode, p));
        }
        for (; r < c.length; r += 1)
          c[r].d(1);
        c.length = f.length;
      }
    },
    d(n) {
      Lt(c, n), n && bt(p), n && bt(e);
    }
  };
}
function re(x) {
  let p, e = (
    /*error*/
    x[32] + ""
  ), f;
  return {
    c() {
      p = rt("li"), f = xt(e), _t(p, "color", "red"), tt(p, "class", "svelte-c4460r");
    },
    m(c, n) {
      vt(c, p, n), q(p, f);
    },
    p(c, n) {
      n[0] & /*customIdErrors*/
      4096 && e !== (e = /*error*/
      c[32] + "") && Dt(f, e);
    },
    d(c) {
      c && bt(p);
    }
  };
}
function ie(x) {
  let p, e = (
    /*error*/
    x[32] + ""
  ), f;
  return {
    c() {
      p = rt("li"), f = xt(e), _t(p, "color", "red"), tt(p, "class", "svelte-c4460r");
    },
    m(c, n) {
      vt(c, p, n), q(p, f);
    },
    p(c, n) {
      n[0] & /*packageNameErrors*/
      2048 && e !== (e = /*error*/
      c[32] + "") && Dt(f, e);
    },
    d(c) {
      c && bt(p);
    }
  };
}
function ae(x) {
  let p, e = (
    /*version*/
    x[29].version + ""
  ), f;
  return {
    c() {
      p = rt("option"), f = xt(e), p.__value = /*version*/
      x[29].version, p.value = p.__value, tt(p, "class", "svelte-c4460r");
    },
    m(c, n) {
      vt(c, p, n), q(p, f);
    },
    p: Bt,
    d(c) {
      c && bt(p);
    }
  };
}
function se(x) {
  let p, e, f, c, n, s, r, l, d;
  return {
    c() {
      p = rt("div"), e = rt("div"), f = rt("input"), c = ht(), n = rt("label"), n.textContent = "Data Generation", s = ht(), r = rt("p"), r.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-c4460r">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', tt(f, "id", "datagen"), tt(f, "type", "checkbox"), tt(f, "class", "option-input svelte-c4460r"), tt(n, "for", "datagen"), tt(n, "class", "option-label svelte-c4460r"), tt(e, "class", "option-container svelte-c4460r"), tt(r, "class", "option-body svelte-c4460r"), tt(p, "class", "svelte-c4460r");
    },
    m(m, v) {
      vt(m, p, v), q(p, e), q(e, f), f.checked = /*dataGeneration*/
      x[6], q(e, c), q(e, n), q(p, s), q(p, r), l || (d = St(
        f,
        "change",
        /*input_change_handler*/
        x[25]
      ), l = !0);
    },
    p(m, v) {
      v[0] & /*dataGeneration*/
      64 && (f.checked = /*dataGeneration*/
      m[6]);
    },
    d(m) {
      m && bt(p), l = !1, d();
    }
  };
}
function oe(x) {
  let p, e, f, c, n, s, r, l, d;
  return {
    c() {
      p = rt("div"), e = rt("div"), f = rt("input"), c = ht(), n = rt("label"), n.textContent = "Split client and common sources", s = ht(), r = rt("p"), r.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, tt(f, "id", "splitSources"), tt(f, "type", "checkbox"), tt(f, "class", "option-input svelte-c4460r"), tt(n, "for", "splitSources"), tt(n, "class", "option-label svelte-c4460r"), tt(e, "class", "option-container svelte-c4460r"), tt(r, "class", "option-body svelte-c4460r"), tt(p, "class", "svelte-c4460r");
    },
    m(m, v) {
      vt(m, p, v), q(p, e), q(e, f), f.checked = /*splitSources*/
      x[7], q(e, c), q(e, n), q(p, s), q(p, r), l || (d = St(
        f,
        "change",
        /*input_change_handler_1*/
        x[26]
      ), l = !0);
    },
    p(m, v) {
      v[0] & /*splitSources*/
      128 && (f.checked = /*splitSources*/
      m[7]);
    },
    d(m) {
      m && bt(p), l = !1, d();
    }
  };
}
function Dn(x) {
  let p, e, f, c, n, s;
  return e = new Ae({}), {
    c() {
      p = rt("a"), ce(e.$$.fragment), f = xt(" Download Template (.ZIP)"), tt(p, "class", "button primary large download-button svelte-c4460r"), tt(p, "href", "");
    },
    m(r, l) {
      vt(r, p, l), ue(e, p, null), q(p, f), c = !0, n || (s = St(p, "click", Pt(
        /*generate*/
        x[15]
      )), n = !0);
    },
    p: Bt,
    i(r) {
      c || (Ot(e.$$.fragment, r), c = !0);
    },
    o(r) {
      Ut(e.$$.fragment, r), c = !1;
    },
    d(r) {
      r && bt(p), he(e), n = !1, s();
    }
  };
}
function Mn(x) {
  let p, e, f, c;
  return e = new Ae({}), {
    c() {
      p = rt("a"), ce(e.$$.fragment), f = xt(" Generating..."), tt(p, "class", "button primary download-button svelte-c4460r"), tt(p, "href", "");
    },
    m(n, s) {
      vt(n, p, s), ue(e, p, null), q(p, f), c = !0;
    },
    p: Bt,
    i(n) {
      c || (Ot(e.$$.fragment, n), c = !0);
    },
    o(n) {
      Ut(e.$$.fragment, n), c = !1;
    },
    d(n) {
      n && bt(p), he(e);
    }
  };
}
function Wn(x) {
  let p, e, f, c;
  return {
    c() {
      p = rt("p"), e = xt(`Loading data
    
        
        `), f = rt("span"), c = xt("..."), _t(f, "font-family", Tt);
    },
    m(n, s) {
      vt(n, p, s), q(p, e), q(p, f), q(f, c);
    },
    p: Bt,
    i: Bt,
    o: Bt,
    d(n) {
      n && bt(p);
    }
  };
}
function jn(x) {
  let p, e, f = {
    ctx: x,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Wn,
    then: Gn,
    catch: Vn,
    value: 28,
    error: 32,
    blocks: [, , ,]
  };
  return Se(
    /*versions*/
    x[14],
    f
  ), {
    c() {
      p = Ie(), f.block.c();
    },
    m(c, n) {
      vt(c, p, n), f.block.m(c, f.anchor = n), f.mount = () => p.parentNode, f.anchor = p, e = !0;
    },
    p(c, n) {
      x = c, Be(f, x, n);
    },
    i(c) {
      e || (Ot(f.block), e = !0);
    },
    o(c) {
      for (let n = 0; n < 3; n += 1) {
        const s = f.blocks[n];
        Ut(s);
      }
      e = !1;
    },
    d(c) {
      c && bt(p), f.block.d(c), f.token = null, f = null;
    }
  };
}
function Pn(x, p, e) {
  let f, c, n, s, r, l, d, m = "Template Mod", v = "com.example", w = !1, o = !1, g = !0, a, A = !1;
  const u = Promise.all([be()]).then(([W]) => {
    const it = W;
    return e(0, d = it[0].version), { game: it };
  });
  function y(W) {
    if (W !== void 0)
      return ve(W, a === void 0);
  }
  async function E() {
    if (s !== void 0 || a !== void 0 && r !== void 0 || l.length > 0)
      return;
    e(8, A = !0);
    const W = await Promise.resolve().then(() => Un), it = {
      modid: a ?? f,
      minecraftVersion: d,
      projectName: m,
      packageName: v,
      useKotlin: w,
      dataGeneration: o && c,
      splitSources: g && n,
      uniqueModIcon: !0
    }, S = new ze();
    await W.generateTemplate({
      config: it,
      writer: {
        write: async (U, F, j) => {
          S.file(U, F, {
            unixPermissions: j != null && j.executable ? "774" : void 0
          });
        }
      },
      canvas: {
        create(U, F) {
          const j = document.createElement("canvas");
          return j.width = U, j.height = F, {
            getContext: (C) => j.getContext(C),
            getPng: () => zt(j.toDataURL().split(";base64,")[1]),
            measureText(C, B) {
              const K = C.measureText(B);
              return {
                width: K.width,
                ascent: K.actualBoundingBoxAscent,
                descent: K.actualBoundingBoxDescent
              };
            }
          };
        }
      }
    }), Me.saveAs(await S.generateAsync({ type: "blob", platform: "UNIX" }), `${f}-template-${it.minecraftVersion}.zip`), e(8, A = !1);
  }
  function N() {
    e(1, m = m.trim());
  }
  function _() {
    e(2, v = en(v));
  }
  function z() {
    e(3, a = f);
  }
  function G() {
    e(3, a = void 0);
  }
  function J() {
    m = this.value, e(1, m);
  }
  function V() {
    a = this.value, e(3, a);
  }
  function Y() {
    v = this.value, e(2, v);
  }
  function nt() {
    d = Fe(this), e(0, d), e(14, u);
  }
  function k() {
    w = this.checked, e(5, w);
  }
  function O() {
    o = this.checked, e(6, o);
  }
  function i() {
    g = this.checked, e(7, g);
  }
  return x.$$.update = () => {
    x.$$.dirty[0] & /*projectName*/
    2 && e(4, f = nn(m)), x.$$.dirty[0] & /*minecraftVersion*/
    1 && e(10, c = Ke(d || "1.99")), x.$$.dirty[0] & /*minecraftVersion*/
    1 && e(9, n = $e(d || "1.99")), x.$$.dirty[0] & /*modid*/
    16 && e(13, s = y(f)), x.$$.dirty[0] & /*customModId*/
    8 && e(12, r = tn(a)), x.$$.dirty[0] & /*packageName*/
    4 && e(11, l = cn(v));
  }, [
    d,
    m,
    v,
    a,
    f,
    w,
    o,
    g,
    A,
    n,
    c,
    l,
    r,
    s,
    u,
    E,
    N,
    _,
    z,
    G,
    J,
    V,
    Y,
    nt,
    k,
    O,
    i
  ];
}
class Yn extends Ee {
  constructor(p) {
    super(), xe(this, p, Pn, jn, Ce, {}, null, [-1, -1]);
  }
}
export {
  Yn as default
};
