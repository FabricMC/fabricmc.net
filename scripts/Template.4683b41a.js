import { S as be, i as ve, s as ye, h as we, b as ke, c as bt, u as Ee, r as Rt, v as Nt, d as vt, f as Se, e as it, t as Et, a as ct, g as Zt, j as P, n as xt, o as K, m as xe, C as Ft, p as Jt, q as kt, D as Ce, E as Ie, l as Qt, B as re, k as Dt, z as Mt, w as ie, x as ae, y as se } from "./index.1b882cd4.js";
import { b as Fe, h as Be, i as Re, j as Ne, d as Oe } from "./Api.93a83966.js";
import oe from "./DownloadIcon.81b5365d.js";
var St = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function zt(B) {
  throw new Error('Could not dynamically require "' + B + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var le = { exports: {} };
(function(B, m) {
  (function(i) {
    B.exports = i();
  })(function() {
    return function i(y, c, r) {
      function s(h, v) {
        if (!c[h]) {
          if (!y[h]) {
            var p = typeof zt == "function" && zt;
            if (!v && p)
              return p(h, !0);
            if (n)
              return n(h, !0);
            var g = new Error("Cannot find module '" + h + "'");
            throw g.code = "MODULE_NOT_FOUND", g;
          }
          var o = c[h] = { exports: {} };
          y[h][0].call(o.exports, function(f) {
            var a = y[h][1][f];
            return s(a || f);
          }, o, o.exports, i, y, c, r);
        }
        return c[h].exports;
      }
      for (var n = typeof zt == "function" && zt, l = 0; l < r.length; l++)
        s(r[l]);
      return s;
    }({ 1: [function(i, y, c) {
      var r = i("./utils"), s = i("./support"), n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      c.encode = function(l) {
        for (var h, v, p, g, o, f, a, d = [], A = 0, w = l.length, S = w, F = r.getTypeOf(l) !== "string"; A < l.length; )
          S = w - A, p = F ? (h = l[A++], v = A < w ? l[A++] : 0, A < w ? l[A++] : 0) : (h = l.charCodeAt(A++), v = A < w ? l.charCodeAt(A++) : 0, A < w ? l.charCodeAt(A++) : 0), g = h >> 2, o = (3 & h) << 4 | v >> 4, f = 1 < S ? (15 & v) << 2 | p >> 6 : 64, a = 2 < S ? 63 & p : 64, d.push(n.charAt(g) + n.charAt(o) + n.charAt(f) + n.charAt(a));
        return d.join("");
      }, c.decode = function(l) {
        var h, v, p, g, o, f, a = 0, d = 0, A = "data:";
        if (l.substr(0, A.length) === A)
          throw new Error("Invalid base64 input, it looks like a data url.");
        var w, S = 3 * (l = l.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
        if (l.charAt(l.length - 1) === n.charAt(64) && S--, l.charAt(l.length - 2) === n.charAt(64) && S--, S % 1 != 0)
          throw new Error("Invalid base64 input, bad content length.");
        for (w = s.uint8array ? new Uint8Array(0 | S) : new Array(0 | S); a < l.length; )
          h = n.indexOf(l.charAt(a++)) << 2 | (g = n.indexOf(l.charAt(a++))) >> 4, v = (15 & g) << 4 | (o = n.indexOf(l.charAt(a++))) >> 2, p = (3 & o) << 6 | (f = n.indexOf(l.charAt(a++))), w[d++] = h, o !== 64 && (w[d++] = v), f !== 64 && (w[d++] = p);
        return w;
      };
    }, { "./support": 30, "./utils": 32 }], 2: [function(i, y, c) {
      var r = i("./external"), s = i("./stream/DataWorker"), n = i("./stream/Crc32Probe"), l = i("./stream/DataLengthProbe");
      function h(v, p, g, o, f) {
        this.compressedSize = v, this.uncompressedSize = p, this.crc32 = g, this.compression = o, this.compressedContent = f;
      }
      h.prototype = { getContentWorker: function() {
        var v = new s(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new l("data_length")), p = this;
        return v.on("end", function() {
          if (this.streamInfo.data_length !== p.uncompressedSize)
            throw new Error("Bug : uncompressed data size mismatch");
        }), v;
      }, getCompressedWorker: function() {
        return new s(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      } }, h.createWorkerFrom = function(v, p, g) {
        return v.pipe(new n()).pipe(new l("uncompressedSize")).pipe(p.compressWorker(g)).pipe(new l("compressedSize")).withStreamInfo("compression", p);
      }, y.exports = h;
    }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(i, y, c) {
      var r = i("./stream/GenericWorker");
      c.STORE = { magic: "\0\0", compressWorker: function() {
        return new r("STORE compression");
      }, uncompressWorker: function() {
        return new r("STORE decompression");
      } }, c.DEFLATE = i("./flate");
    }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(i, y, c) {
      var r = i("./utils"), s = function() {
        for (var n, l = [], h = 0; h < 256; h++) {
          n = h;
          for (var v = 0; v < 8; v++)
            n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
          l[h] = n;
        }
        return l;
      }();
      y.exports = function(n, l) {
        return n !== void 0 && n.length ? r.getTypeOf(n) !== "string" ? function(h, v, p, g) {
          var o = s, f = g + p;
          h ^= -1;
          for (var a = g; a < f; a++)
            h = h >>> 8 ^ o[255 & (h ^ v[a])];
          return -1 ^ h;
        }(0 | l, n, n.length, 0) : function(h, v, p, g) {
          var o = s, f = g + p;
          h ^= -1;
          for (var a = g; a < f; a++)
            h = h >>> 8 ^ o[255 & (h ^ v.charCodeAt(a))];
          return -1 ^ h;
        }(0 | l, n, n.length, 0) : 0;
      };
    }, { "./utils": 32 }], 5: [function(i, y, c) {
      c.base64 = !1, c.binary = !1, c.dir = !1, c.createFolders = !0, c.date = null, c.compression = null, c.compressionOptions = null, c.comment = null, c.unixPermissions = null, c.dosPermissions = null;
    }, {}], 6: [function(i, y, c) {
      var r = null;
      r = typeof Promise < "u" ? Promise : i("lie"), y.exports = { Promise: r };
    }, { lie: 37 }], 7: [function(i, y, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", s = i("pako"), n = i("./utils"), l = i("./stream/GenericWorker"), h = r ? "uint8array" : "array";
      function v(p, g) {
        l.call(this, "FlateWorker/" + p), this._pako = null, this._pakoAction = p, this._pakoOptions = g, this.meta = {};
      }
      c.magic = "\b\0", n.inherits(v, l), v.prototype.processChunk = function(p) {
        this.meta = p.meta, this._pako === null && this._createPako(), this._pako.push(n.transformTo(h, p.data), !1);
      }, v.prototype.flush = function() {
        l.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
      }, v.prototype.cleanUp = function() {
        l.prototype.cleanUp.call(this), this._pako = null;
      }, v.prototype._createPako = function() {
        this._pako = new s[this._pakoAction]({ raw: !0, level: this._pakoOptions.level || -1 });
        var p = this;
        this._pako.onData = function(g) {
          p.push({ data: g, meta: p.meta });
        };
      }, c.compressWorker = function(p) {
        return new v("Deflate", p);
      }, c.uncompressWorker = function() {
        return new v("Inflate", {});
      };
    }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(i, y, c) {
      function r(o, f) {
        var a, d = "";
        for (a = 0; a < f; a++)
          d += String.fromCharCode(255 & o), o >>>= 8;
        return d;
      }
      function s(o, f, a, d, A, w) {
        var S, F, k = o.file, x = o.compression, I = w !== h.utf8encode, U = n.transformTo("string", w(k.name)), N = n.transformTo("string", h.utf8encode(k.name)), M = k.comment, _ = n.transformTo("string", w(M)), E = n.transformTo("string", h.utf8encode(M)), T = N.length !== k.name.length, e = E.length !== M.length, Z = "", $ = "", D = "", et = k.dir, J = k.date, q = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
        f && !a || (q.crc32 = o.crc32, q.compressedSize = o.compressedSize, q.uncompressedSize = o.uncompressedSize);
        var G = 0;
        f && (G |= 8), I || !T && !e || (G |= 2048);
        var O = 0, nt = 0;
        et && (O |= 16), A === "UNIX" ? (nt = 798, O |= function(j, dt) {
          var ut = j;
          return j || (ut = dt ? 16893 : 33204), (65535 & ut) << 16;
        }(k.unixPermissions, et)) : (nt = 20, O |= function(j) {
          return 63 & (j || 0);
        }(k.dosPermissions)), S = J.getUTCHours(), S <<= 6, S |= J.getUTCMinutes(), S <<= 5, S |= J.getUTCSeconds() / 2, F = J.getUTCFullYear() - 1980, F <<= 4, F |= J.getUTCMonth() + 1, F <<= 5, F |= J.getUTCDate(), T && ($ = r(1, 1) + r(v(U), 4) + N, Z += "up" + r($.length, 2) + $), e && (D = r(1, 1) + r(v(_), 4) + E, Z += "uc" + r(D.length, 2) + D);
        var H = "";
        return H += `
\0`, H += r(G, 2), H += x.magic, H += r(S, 2), H += r(F, 2), H += r(q.crc32, 4), H += r(q.compressedSize, 4), H += r(q.uncompressedSize, 4), H += r(U.length, 2), H += r(Z.length, 2), { fileRecord: p.LOCAL_FILE_HEADER + H + U + Z, dirRecord: p.CENTRAL_FILE_HEADER + r(nt, 2) + H + r(_.length, 2) + "\0\0\0\0" + r(O, 4) + r(d, 4) + U + Z + _ };
      }
      var n = i("../utils"), l = i("../stream/GenericWorker"), h = i("../utf8"), v = i("../crc32"), p = i("../signature");
      function g(o, f, a, d) {
        l.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = f, this.zipPlatform = a, this.encodeFileName = d, this.streamFiles = o, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
      }
      n.inherits(g, l), g.prototype.push = function(o) {
        var f = o.meta.percent || 0, a = this.entriesCount, d = this._sources.length;
        this.accumulate ? this.contentBuffer.push(o) : (this.bytesWritten += o.data.length, l.prototype.push.call(this, { data: o.data, meta: { currentFile: this.currentFile, percent: a ? (f + 100 * (a - d - 1)) / a : 100 } }));
      }, g.prototype.openedSource = function(o) {
        this.currentSourceOffset = this.bytesWritten, this.currentFile = o.file.name;
        var f = this.streamFiles && !o.file.dir;
        if (f) {
          var a = s(o, f, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
          this.push({ data: a.fileRecord, meta: { percent: 0 } });
        } else
          this.accumulate = !0;
      }, g.prototype.closedSource = function(o) {
        this.accumulate = !1;
        var f = this.streamFiles && !o.file.dir, a = s(o, f, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        if (this.dirRecords.push(a.dirRecord), f)
          this.push({ data: function(d) {
            return p.DATA_DESCRIPTOR + r(d.crc32, 4) + r(d.compressedSize, 4) + r(d.uncompressedSize, 4);
          }(o), meta: { percent: 100 } });
        else
          for (this.push({ data: a.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; )
            this.push(this.contentBuffer.shift());
        this.currentFile = null;
      }, g.prototype.flush = function() {
        for (var o = this.bytesWritten, f = 0; f < this.dirRecords.length; f++)
          this.push({ data: this.dirRecords[f], meta: { percent: 100 } });
        var a = this.bytesWritten - o, d = function(A, w, S, F, k) {
          var x = n.transformTo("string", k(F));
          return p.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(A, 2) + r(A, 2) + r(w, 4) + r(S, 4) + r(x.length, 2) + x;
        }(this.dirRecords.length, a, o, this.zipComment, this.encodeFileName);
        this.push({ data: d, meta: { percent: 100 } });
      }, g.prototype.prepareNextSource = function() {
        this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
      }, g.prototype.registerPrevious = function(o) {
        this._sources.push(o);
        var f = this;
        return o.on("data", function(a) {
          f.processChunk(a);
        }), o.on("end", function() {
          f.closedSource(f.previous.streamInfo), f._sources.length ? f.prepareNextSource() : f.end();
        }), o.on("error", function(a) {
          f.error(a);
        }), this;
      }, g.prototype.resume = function() {
        return !!l.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
      }, g.prototype.error = function(o) {
        var f = this._sources;
        if (!l.prototype.error.call(this, o))
          return !1;
        for (var a = 0; a < f.length; a++)
          try {
            f[a].error(o);
          } catch {
          }
        return !0;
      }, g.prototype.lock = function() {
        l.prototype.lock.call(this);
        for (var o = this._sources, f = 0; f < o.length; f++)
          o[f].lock();
      }, y.exports = g;
    }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(i, y, c) {
      var r = i("../compressions"), s = i("./ZipFileWorker");
      c.generateWorker = function(n, l, h) {
        var v = new s(l.streamFiles, h, l.platform, l.encodeFileName), p = 0;
        try {
          n.forEach(function(g, o) {
            p++;
            var f = function(w, S) {
              var F = w || S, k = r[F];
              if (!k)
                throw new Error(F + " is not a valid compression method !");
              return k;
            }(o.options.compression, l.compression), a = o.options.compressionOptions || l.compressionOptions || {}, d = o.dir, A = o.date;
            o._compressWorker(f, a).withStreamInfo("file", { name: g, dir: d, date: A, comment: o.comment || "", unixPermissions: o.unixPermissions, dosPermissions: o.dosPermissions }).pipe(v);
          }), v.entriesCount = p;
        } catch (g) {
          v.error(g);
        }
        return v;
      };
    }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(i, y, c) {
      function r() {
        if (!(this instanceof r))
          return new r();
        if (arguments.length)
          throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
        this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
          var s = new r();
          for (var n in this)
            typeof this[n] != "function" && (s[n] = this[n]);
          return s;
        };
      }
      (r.prototype = i("./object")).loadAsync = i("./load"), r.support = i("./support"), r.defaults = i("./defaults"), r.version = "3.10.1", r.loadAsync = function(s, n) {
        return new r().loadAsync(s, n);
      }, r.external = i("./external"), y.exports = r;
    }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(i, y, c) {
      var r = i("./utils"), s = i("./external"), n = i("./utf8"), l = i("./zipEntries"), h = i("./stream/Crc32Probe"), v = i("./nodejsUtils");
      function p(g) {
        return new s.Promise(function(o, f) {
          var a = g.decompressed.getContentWorker().pipe(new h());
          a.on("error", function(d) {
            f(d);
          }).on("end", function() {
            a.streamInfo.crc32 !== g.decompressed.crc32 ? f(new Error("Corrupted zip : CRC32 mismatch")) : o();
          }).resume();
        });
      }
      y.exports = function(g, o) {
        var f = this;
        return o = r.extend(o || {}, { base64: !1, checkCRC32: !1, optimizedBinaryString: !1, createFolders: !1, decodeFileName: n.utf8decode }), v.isNode && v.isStream(g) ? s.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", g, !0, o.optimizedBinaryString, o.base64).then(function(a) {
          var d = new l(o);
          return d.load(a), d;
        }).then(function(a) {
          var d = [s.Promise.resolve(a)], A = a.files;
          if (o.checkCRC32)
            for (var w = 0; w < A.length; w++)
              d.push(p(A[w]));
          return s.Promise.all(d);
        }).then(function(a) {
          for (var d = a.shift(), A = d.files, w = 0; w < A.length; w++) {
            var S = A[w], F = S.fileNameStr, k = r.resolve(S.fileNameStr);
            f.file(k, S.decompressed, { binary: !0, optimizedBinaryString: !0, date: S.date, dir: S.dir, comment: S.fileCommentStr.length ? S.fileCommentStr : null, unixPermissions: S.unixPermissions, dosPermissions: S.dosPermissions, createFolders: o.createFolders }), S.dir || (f.file(k).unsafeOriginalName = F);
          }
          return d.zipComment.length && (f.comment = d.zipComment), f;
        });
      };
    }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(i, y, c) {
      var r = i("../utils"), s = i("../stream/GenericWorker");
      function n(l, h) {
        s.call(this, "Nodejs stream input adapter for " + l), this._upstreamEnded = !1, this._bindStream(h);
      }
      r.inherits(n, s), n.prototype._bindStream = function(l) {
        var h = this;
        (this._stream = l).pause(), l.on("data", function(v) {
          h.push({ data: v, meta: { percent: 0 } });
        }).on("error", function(v) {
          h.isPaused ? this.generatedError = v : h.error(v);
        }).on("end", function() {
          h.isPaused ? h._upstreamEnded = !0 : h.end();
        });
      }, n.prototype.pause = function() {
        return !!s.prototype.pause.call(this) && (this._stream.pause(), !0);
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
      }, y.exports = n;
    }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(i, y, c) {
      var r = i("readable-stream").Readable;
      function s(n, l, h) {
        r.call(this, l), this._helper = n;
        var v = this;
        n.on("data", function(p, g) {
          v.push(p) || v._helper.pause(), h && h(g);
        }).on("error", function(p) {
          v.emit("error", p);
        }).on("end", function() {
          v.push(null);
        });
      }
      i("../utils").inherits(s, r), s.prototype._read = function() {
        this._helper.resume();
      }, y.exports = s;
    }, { "../utils": 32, "readable-stream": 16 }], 14: [function(i, y, c) {
      y.exports = { isNode: typeof Buffer < "u", newBufferFrom: function(r, s) {
        if (Buffer.from && Buffer.from !== Uint8Array.from)
          return Buffer.from(r, s);
        if (typeof r == "number")
          throw new Error('The "data" argument must not be a number');
        return new Buffer(r, s);
      }, allocBuffer: function(r) {
        if (Buffer.alloc)
          return Buffer.alloc(r);
        var s = new Buffer(r);
        return s.fill(0), s;
      }, isBuffer: function(r) {
        return Buffer.isBuffer(r);
      }, isStream: function(r) {
        return r && typeof r.on == "function" && typeof r.pause == "function" && typeof r.resume == "function";
      } };
    }, {}], 15: [function(i, y, c) {
      function r(k, x, I) {
        var U, N = n.getTypeOf(x), M = n.extend(I || {}, v);
        M.date = M.date || new Date(), M.compression !== null && (M.compression = M.compression.toUpperCase()), typeof M.unixPermissions == "string" && (M.unixPermissions = parseInt(M.unixPermissions, 8)), M.unixPermissions && 16384 & M.unixPermissions && (M.dir = !0), M.dosPermissions && 16 & M.dosPermissions && (M.dir = !0), M.dir && (k = A(k)), M.createFolders && (U = d(k)) && w.call(this, U, !0);
        var _ = N === "string" && M.binary === !1 && M.base64 === !1;
        I && I.binary !== void 0 || (M.binary = !_), (x instanceof p && x.uncompressedSize === 0 || M.dir || !x || x.length === 0) && (M.base64 = !1, M.binary = !0, x = "", M.compression = "STORE", N = "string");
        var E = null;
        E = x instanceof p || x instanceof l ? x : f.isNode && f.isStream(x) ? new a(k, x) : n.prepareContent(k, x, M.binary, M.optimizedBinaryString, M.base64);
        var T = new g(k, E, M);
        this.files[k] = T;
      }
      var s = i("./utf8"), n = i("./utils"), l = i("./stream/GenericWorker"), h = i("./stream/StreamHelper"), v = i("./defaults"), p = i("./compressedObject"), g = i("./zipObject"), o = i("./generate"), f = i("./nodejsUtils"), a = i("./nodejs/NodejsStreamInputAdapter"), d = function(k) {
        k.slice(-1) === "/" && (k = k.substring(0, k.length - 1));
        var x = k.lastIndexOf("/");
        return 0 < x ? k.substring(0, x) : "";
      }, A = function(k) {
        return k.slice(-1) !== "/" && (k += "/"), k;
      }, w = function(k, x) {
        return x = x !== void 0 ? x : v.createFolders, k = A(k), this.files[k] || r.call(this, k, null, { dir: !0, createFolders: x }), this.files[k];
      };
      function S(k) {
        return Object.prototype.toString.call(k) === "[object RegExp]";
      }
      var F = { load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, forEach: function(k) {
        var x, I, U;
        for (x in this.files)
          U = this.files[x], (I = x.slice(this.root.length, x.length)) && x.slice(0, this.root.length) === this.root && k(I, U);
      }, filter: function(k) {
        var x = [];
        return this.forEach(function(I, U) {
          k(I, U) && x.push(U);
        }), x;
      }, file: function(k, x, I) {
        if (arguments.length !== 1)
          return k = this.root + k, r.call(this, k, x, I), this;
        if (S(k)) {
          var U = k;
          return this.filter(function(M, _) {
            return !_.dir && U.test(M);
          });
        }
        var N = this.files[this.root + k];
        return N && !N.dir ? N : null;
      }, folder: function(k) {
        if (!k)
          return this;
        if (S(k))
          return this.filter(function(N, M) {
            return M.dir && k.test(N);
          });
        var x = this.root + k, I = w.call(this, x), U = this.clone();
        return U.root = I.name, U;
      }, remove: function(k) {
        k = this.root + k;
        var x = this.files[k];
        if (x || (k.slice(-1) !== "/" && (k += "/"), x = this.files[k]), x && !x.dir)
          delete this.files[k];
        else
          for (var I = this.filter(function(N, M) {
            return M.name.slice(0, k.length) === k;
          }), U = 0; U < I.length; U++)
            delete this.files[I[U].name];
        return this;
      }, generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, generateInternalStream: function(k) {
        var x, I = {};
        try {
          if ((I = n.extend(k || {}, { streamFiles: !1, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: s.utf8encode })).type = I.type.toLowerCase(), I.compression = I.compression.toUpperCase(), I.type === "binarystring" && (I.type = "string"), !I.type)
            throw new Error("No output type specified.");
          n.checkSupport(I.type), I.platform !== "darwin" && I.platform !== "freebsd" && I.platform !== "linux" && I.platform !== "sunos" || (I.platform = "UNIX"), I.platform === "win32" && (I.platform = "DOS");
          var U = I.comment || this.comment || "";
          x = o.generateWorker(this, I, U);
        } catch (N) {
          (x = new l("error")).error(N);
        }
        return new h(x, I.type || "string", I.mimeType);
      }, generateAsync: function(k, x) {
        return this.generateInternalStream(k).accumulate(x);
      }, generateNodeStream: function(k, x) {
        return (k = k || {}).type || (k.type = "nodebuffer"), this.generateInternalStream(k).toNodejsStream(x);
      } };
      y.exports = F;
    }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(i, y, c) {
      y.exports = i("stream");
    }, { stream: void 0 }], 17: [function(i, y, c) {
      var r = i("./DataReader");
      function s(n) {
        r.call(this, n);
        for (var l = 0; l < this.data.length; l++)
          n[l] = 255 & n[l];
      }
      i("../utils").inherits(s, r), s.prototype.byteAt = function(n) {
        return this.data[this.zero + n];
      }, s.prototype.lastIndexOfSignature = function(n) {
        for (var l = n.charCodeAt(0), h = n.charCodeAt(1), v = n.charCodeAt(2), p = n.charCodeAt(3), g = this.length - 4; 0 <= g; --g)
          if (this.data[g] === l && this.data[g + 1] === h && this.data[g + 2] === v && this.data[g + 3] === p)
            return g - this.zero;
        return -1;
      }, s.prototype.readAndCheckSignature = function(n) {
        var l = n.charCodeAt(0), h = n.charCodeAt(1), v = n.charCodeAt(2), p = n.charCodeAt(3), g = this.readData(4);
        return l === g[0] && h === g[1] && v === g[2] && p === g[3];
      }, s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return [];
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, y.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 18: [function(i, y, c) {
      var r = i("../utils");
      function s(n) {
        this.data = n, this.length = n.length, this.index = 0, this.zero = 0;
      }
      s.prototype = { checkOffset: function(n) {
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
        var l, h = 0;
        for (this.checkOffset(n), l = this.index + n - 1; l >= this.index; l--)
          h = (h << 8) + this.byteAt(l);
        return this.index += n, h;
      }, readString: function(n) {
        return r.transformTo("string", this.readData(n));
      }, readData: function() {
      }, lastIndexOfSignature: function() {
      }, readAndCheckSignature: function() {
      }, readDate: function() {
        var n = this.readInt(4);
        return new Date(Date.UTC(1980 + (n >> 25 & 127), (n >> 21 & 15) - 1, n >> 16 & 31, n >> 11 & 31, n >> 5 & 63, (31 & n) << 1));
      } }, y.exports = s;
    }, { "../utils": 32 }], 19: [function(i, y, c) {
      var r = i("./Uint8ArrayReader");
      function s(n) {
        r.call(this, n);
      }
      i("../utils").inherits(s, r), s.prototype.readData = function(n) {
        this.checkOffset(n);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, y.exports = s;
    }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(i, y, c) {
      var r = i("./DataReader");
      function s(n) {
        r.call(this, n);
      }
      i("../utils").inherits(s, r), s.prototype.byteAt = function(n) {
        return this.data.charCodeAt(this.zero + n);
      }, s.prototype.lastIndexOfSignature = function(n) {
        return this.data.lastIndexOf(n) - this.zero;
      }, s.prototype.readAndCheckSignature = function(n) {
        return n === this.readData(4);
      }, s.prototype.readData = function(n) {
        this.checkOffset(n);
        var l = this.data.slice(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, y.exports = s;
    }, { "../utils": 32, "./DataReader": 18 }], 21: [function(i, y, c) {
      var r = i("./ArrayReader");
      function s(n) {
        r.call(this, n);
      }
      i("../utils").inherits(s, r), s.prototype.readData = function(n) {
        if (this.checkOffset(n), n === 0)
          return new Uint8Array(0);
        var l = this.data.subarray(this.zero + this.index, this.zero + this.index + n);
        return this.index += n, l;
      }, y.exports = s;
    }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(i, y, c) {
      var r = i("../utils"), s = i("../support"), n = i("./ArrayReader"), l = i("./StringReader"), h = i("./NodeBufferReader"), v = i("./Uint8ArrayReader");
      y.exports = function(p) {
        var g = r.getTypeOf(p);
        return r.checkSupport(g), g !== "string" || s.uint8array ? g === "nodebuffer" ? new h(p) : s.uint8array ? new v(r.transformTo("uint8array", p)) : new n(r.transformTo("array", p)) : new l(p);
      };
    }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(i, y, c) {
      c.LOCAL_FILE_HEADER = "PK", c.CENTRAL_FILE_HEADER = "PK", c.CENTRAL_DIRECTORY_END = "PK", c.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", c.ZIP64_CENTRAL_DIRECTORY_END = "PK", c.DATA_DESCRIPTOR = "PK\x07\b";
    }, {}], 24: [function(i, y, c) {
      var r = i("./GenericWorker"), s = i("../utils");
      function n(l) {
        r.call(this, "ConvertWorker to " + l), this.destType = l;
      }
      s.inherits(n, r), n.prototype.processChunk = function(l) {
        this.push({ data: s.transformTo(this.destType, l.data), meta: l.meta });
      }, y.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(i, y, c) {
      var r = i("./GenericWorker"), s = i("../crc32");
      function n() {
        r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
      }
      i("../utils").inherits(n, r), n.prototype.processChunk = function(l) {
        this.streamInfo.crc32 = s(l.data, this.streamInfo.crc32 || 0), this.push(l);
      }, y.exports = n;
    }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(i, y, c) {
      var r = i("../utils"), s = i("./GenericWorker");
      function n(l) {
        s.call(this, "DataLengthProbe for " + l), this.propName = l, this.withStreamInfo(l, 0);
      }
      r.inherits(n, s), n.prototype.processChunk = function(l) {
        if (l) {
          var h = this.streamInfo[this.propName] || 0;
          this.streamInfo[this.propName] = h + l.data.length;
        }
        s.prototype.processChunk.call(this, l);
      }, y.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(i, y, c) {
      var r = i("../utils"), s = i("./GenericWorker");
      function n(l) {
        s.call(this, "DataWorker");
        var h = this;
        this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, l.then(function(v) {
          h.dataIsReady = !0, h.data = v, h.max = v && v.length || 0, h.type = r.getTypeOf(v), h.isPaused || h._tickAndRepeat();
        }, function(v) {
          h.error(v);
        });
      }
      r.inherits(n, s), n.prototype.cleanUp = function() {
        s.prototype.cleanUp.call(this), this.data = null;
      }, n.prototype.resume = function() {
        return !!s.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
      }, n.prototype._tickAndRepeat = function() {
        this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
      }, n.prototype._tick = function() {
        if (this.isPaused || this.isFinished)
          return !1;
        var l = null, h = Math.min(this.max, this.index + 16384);
        if (this.index >= this.max)
          return this.end();
        switch (this.type) {
          case "string":
            l = this.data.substring(this.index, h);
            break;
          case "uint8array":
            l = this.data.subarray(this.index, h);
            break;
          case "array":
          case "nodebuffer":
            l = this.data.slice(this.index, h);
        }
        return this.index = h, this.push({ data: l, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
      }, y.exports = n;
    }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(i, y, c) {
      function r(s) {
        this.name = s || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
      }
      r.prototype = { push: function(s) {
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
      }, on: function(s, n) {
        return this._listeners[s].push(n), this;
      }, cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
      }, emit: function(s, n) {
        if (this._listeners[s])
          for (var l = 0; l < this._listeners[s].length; l++)
            this._listeners[s][l].call(this, n);
      }, pipe: function(s) {
        return s.registerPrevious(this);
      }, registerPrevious: function(s) {
        if (this.isLocked)
          throw new Error("The stream '" + this + "' has already been used.");
        this.streamInfo = s.streamInfo, this.mergeStreamInfo(), this.previous = s;
        var n = this;
        return s.on("data", function(l) {
          n.processChunk(l);
        }), s.on("end", function() {
          n.end();
        }), s.on("error", function(l) {
          n.error(l);
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
      }, withStreamInfo: function(s, n) {
        return this.extraStreamInfo[s] = n, this.mergeStreamInfo(), this;
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
      } }, y.exports = r;
    }, {}], 29: [function(i, y, c) {
      var r = i("../utils"), s = i("./ConvertWorker"), n = i("./GenericWorker"), l = i("../base64"), h = i("../support"), v = i("../external"), p = null;
      if (h.nodestream)
        try {
          p = i("../nodejs/NodejsStreamOutputAdapter");
        } catch {
        }
      function g(f, a) {
        return new v.Promise(function(d, A) {
          var w = [], S = f._internalType, F = f._outputType, k = f._mimeType;
          f.on("data", function(x, I) {
            w.push(x), a && a(I);
          }).on("error", function(x) {
            w = [], A(x);
          }).on("end", function() {
            try {
              var x = function(I, U, N) {
                switch (I) {
                  case "blob":
                    return r.newBlob(r.transformTo("arraybuffer", U), N);
                  case "base64":
                    return l.encode(U);
                  default:
                    return r.transformTo(I, U);
                }
              }(F, function(I, U) {
                var N, M = 0, _ = null, E = 0;
                for (N = 0; N < U.length; N++)
                  E += U[N].length;
                switch (I) {
                  case "string":
                    return U.join("");
                  case "array":
                    return Array.prototype.concat.apply([], U);
                  case "uint8array":
                    for (_ = new Uint8Array(E), N = 0; N < U.length; N++)
                      _.set(U[N], M), M += U[N].length;
                    return _;
                  case "nodebuffer":
                    return Buffer.concat(U);
                  default:
                    throw new Error("concat : unsupported type '" + I + "'");
                }
              }(S, w), k);
              d(x);
            } catch (I) {
              A(I);
            }
            w = [];
          }).resume();
        });
      }
      function o(f, a, d) {
        var A = a;
        switch (a) {
          case "blob":
          case "arraybuffer":
            A = "uint8array";
            break;
          case "base64":
            A = "string";
        }
        try {
          this._internalType = A, this._outputType = a, this._mimeType = d, r.checkSupport(A), this._worker = f.pipe(new s(A)), f.lock();
        } catch (w) {
          this._worker = new n("error"), this._worker.error(w);
        }
      }
      o.prototype = { accumulate: function(f) {
        return g(this, f);
      }, on: function(f, a) {
        var d = this;
        return f === "data" ? this._worker.on(f, function(A) {
          a.call(d, A.data, A.meta);
        }) : this._worker.on(f, function() {
          r.delay(a, arguments, d);
        }), this;
      }, resume: function() {
        return r.delay(this._worker.resume, [], this._worker), this;
      }, pause: function() {
        return this._worker.pause(), this;
      }, toNodejsStream: function(f) {
        if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer")
          throw new Error(this._outputType + " is not supported by this method");
        return new p(this, { objectMode: this._outputType !== "nodebuffer" }, f);
      } }, y.exports = o;
    }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(i, y, c) {
      if (c.base64 = !0, c.array = !0, c.string = !0, c.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", c.nodebuffer = typeof Buffer < "u", c.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u")
        c.blob = !1;
      else {
        var r = new ArrayBuffer(0);
        try {
          c.blob = new Blob([r], { type: "application/zip" }).size === 0;
        } catch {
          try {
            var s = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            s.append(r), c.blob = s.getBlob("application/zip").size === 0;
          } catch {
            c.blob = !1;
          }
        }
      }
      try {
        c.nodestream = !!i("readable-stream").Readable;
      } catch {
        c.nodestream = !1;
      }
    }, { "readable-stream": 16 }], 31: [function(i, y, c) {
      for (var r = i("./utils"), s = i("./support"), n = i("./nodejsUtils"), l = i("./stream/GenericWorker"), h = new Array(256), v = 0; v < 256; v++)
        h[v] = 252 <= v ? 6 : 248 <= v ? 5 : 240 <= v ? 4 : 224 <= v ? 3 : 192 <= v ? 2 : 1;
      h[254] = h[254] = 1;
      function p() {
        l.call(this, "utf-8 decode"), this.leftOver = null;
      }
      function g() {
        l.call(this, "utf-8 encode");
      }
      c.utf8encode = function(o) {
        return s.nodebuffer ? n.newBufferFrom(o, "utf-8") : function(f) {
          var a, d, A, w, S, F = f.length, k = 0;
          for (w = 0; w < F; w++)
            (64512 & (d = f.charCodeAt(w))) == 55296 && w + 1 < F && (64512 & (A = f.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (A - 56320), w++), k += d < 128 ? 1 : d < 2048 ? 2 : d < 65536 ? 3 : 4;
          for (a = s.uint8array ? new Uint8Array(k) : new Array(k), w = S = 0; S < k; w++)
            (64512 & (d = f.charCodeAt(w))) == 55296 && w + 1 < F && (64512 & (A = f.charCodeAt(w + 1))) == 56320 && (d = 65536 + (d - 55296 << 10) + (A - 56320), w++), d < 128 ? a[S++] = d : (d < 2048 ? a[S++] = 192 | d >>> 6 : (d < 65536 ? a[S++] = 224 | d >>> 12 : (a[S++] = 240 | d >>> 18, a[S++] = 128 | d >>> 12 & 63), a[S++] = 128 | d >>> 6 & 63), a[S++] = 128 | 63 & d);
          return a;
        }(o);
      }, c.utf8decode = function(o) {
        return s.nodebuffer ? r.transformTo("nodebuffer", o).toString("utf-8") : function(f) {
          var a, d, A, w, S = f.length, F = new Array(2 * S);
          for (a = d = 0; a < S; )
            if ((A = f[a++]) < 128)
              F[d++] = A;
            else if (4 < (w = h[A]))
              F[d++] = 65533, a += w - 1;
            else {
              for (A &= w === 2 ? 31 : w === 3 ? 15 : 7; 1 < w && a < S; )
                A = A << 6 | 63 & f[a++], w--;
              1 < w ? F[d++] = 65533 : A < 65536 ? F[d++] = A : (A -= 65536, F[d++] = 55296 | A >> 10 & 1023, F[d++] = 56320 | 1023 & A);
            }
          return F.length !== d && (F.subarray ? F = F.subarray(0, d) : F.length = d), r.applyFromCharCode(F);
        }(o = r.transformTo(s.uint8array ? "uint8array" : "array", o));
      }, r.inherits(p, l), p.prototype.processChunk = function(o) {
        var f = r.transformTo(s.uint8array ? "uint8array" : "array", o.data);
        if (this.leftOver && this.leftOver.length) {
          if (s.uint8array) {
            var a = f;
            (f = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), f.set(a, this.leftOver.length);
          } else
            f = this.leftOver.concat(f);
          this.leftOver = null;
        }
        var d = function(w, S) {
          var F;
          for ((S = S || w.length) > w.length && (S = w.length), F = S - 1; 0 <= F && (192 & w[F]) == 128; )
            F--;
          return F < 0 || F === 0 ? S : F + h[w[F]] > S ? F : S;
        }(f), A = f;
        d !== f.length && (s.uint8array ? (A = f.subarray(0, d), this.leftOver = f.subarray(d, f.length)) : (A = f.slice(0, d), this.leftOver = f.slice(d, f.length))), this.push({ data: c.utf8decode(A), meta: o.meta });
      }, p.prototype.flush = function() {
        this.leftOver && this.leftOver.length && (this.push({ data: c.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
      }, c.Utf8DecodeWorker = p, r.inherits(g, l), g.prototype.processChunk = function(o) {
        this.push({ data: c.utf8encode(o.data), meta: o.meta });
      }, c.Utf8EncodeWorker = g;
    }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(i, y, c) {
      var r = i("./support"), s = i("./base64"), n = i("./nodejsUtils"), l = i("./external");
      function h(a) {
        return a;
      }
      function v(a, d) {
        for (var A = 0; A < a.length; ++A)
          d[A] = 255 & a.charCodeAt(A);
        return d;
      }
      i("setimmediate"), c.newBlob = function(a, d) {
        c.checkSupport("blob");
        try {
          return new Blob([a], { type: d });
        } catch {
          try {
            var A = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
            return A.append(a), A.getBlob(d);
          } catch {
            throw new Error("Bug : can't construct the Blob.");
          }
        }
      };
      var p = { stringifyByChunk: function(a, d, A) {
        var w = [], S = 0, F = a.length;
        if (F <= A)
          return String.fromCharCode.apply(null, a);
        for (; S < F; )
          d === "array" || d === "nodebuffer" ? w.push(String.fromCharCode.apply(null, a.slice(S, Math.min(S + A, F)))) : w.push(String.fromCharCode.apply(null, a.subarray(S, Math.min(S + A, F)))), S += A;
        return w.join("");
      }, stringifyByChar: function(a) {
        for (var d = "", A = 0; A < a.length; A++)
          d += String.fromCharCode(a[A]);
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
      function g(a) {
        var d = 65536, A = c.getTypeOf(a), w = !0;
        if (A === "uint8array" ? w = p.applyCanBeUsed.uint8array : A === "nodebuffer" && (w = p.applyCanBeUsed.nodebuffer), w)
          for (; 1 < d; )
            try {
              return p.stringifyByChunk(a, A, d);
            } catch {
              d = Math.floor(d / 2);
            }
        return p.stringifyByChar(a);
      }
      function o(a, d) {
        for (var A = 0; A < a.length; A++)
          d[A] = a[A];
        return d;
      }
      c.applyFromCharCode = g;
      var f = {};
      f.string = { string: h, array: function(a) {
        return v(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return f.string.uint8array(a).buffer;
      }, uint8array: function(a) {
        return v(a, new Uint8Array(a.length));
      }, nodebuffer: function(a) {
        return v(a, n.allocBuffer(a.length));
      } }, f.array = { string: g, array: h, arraybuffer: function(a) {
        return new Uint8Array(a).buffer;
      }, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return n.newBufferFrom(a);
      } }, f.arraybuffer = { string: function(a) {
        return g(new Uint8Array(a));
      }, array: function(a) {
        return o(new Uint8Array(a), new Array(a.byteLength));
      }, arraybuffer: h, uint8array: function(a) {
        return new Uint8Array(a);
      }, nodebuffer: function(a) {
        return n.newBufferFrom(new Uint8Array(a));
      } }, f.uint8array = { string: g, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return a.buffer;
      }, uint8array: h, nodebuffer: function(a) {
        return n.newBufferFrom(a);
      } }, f.nodebuffer = { string: g, array: function(a) {
        return o(a, new Array(a.length));
      }, arraybuffer: function(a) {
        return f.nodebuffer.uint8array(a).buffer;
      }, uint8array: function(a) {
        return o(a, new Uint8Array(a.length));
      }, nodebuffer: h }, c.transformTo = function(a, d) {
        if (d = d || "", !a)
          return d;
        c.checkSupport(a);
        var A = c.getTypeOf(d);
        return f[A][a](d);
      }, c.resolve = function(a) {
        for (var d = a.split("/"), A = [], w = 0; w < d.length; w++) {
          var S = d[w];
          S === "." || S === "" && w !== 0 && w !== d.length - 1 || (S === ".." ? A.pop() : A.push(S));
        }
        return A.join("/");
      }, c.getTypeOf = function(a) {
        return typeof a == "string" ? "string" : Object.prototype.toString.call(a) === "[object Array]" ? "array" : r.nodebuffer && n.isBuffer(a) ? "nodebuffer" : r.uint8array && a instanceof Uint8Array ? "uint8array" : r.arraybuffer && a instanceof ArrayBuffer ? "arraybuffer" : void 0;
      }, c.checkSupport = function(a) {
        if (!r[a.toLowerCase()])
          throw new Error(a + " is not supported by this platform");
      }, c.MAX_VALUE_16BITS = 65535, c.MAX_VALUE_32BITS = -1, c.pretty = function(a) {
        var d, A, w = "";
        for (A = 0; A < (a || "").length; A++)
          w += "\\x" + ((d = a.charCodeAt(A)) < 16 ? "0" : "") + d.toString(16).toUpperCase();
        return w;
      }, c.delay = function(a, d, A) {
        setImmediate(function() {
          a.apply(A || null, d || []);
        });
      }, c.inherits = function(a, d) {
        function A() {
        }
        A.prototype = d.prototype, a.prototype = new A();
      }, c.extend = function() {
        var a, d, A = {};
        for (a = 0; a < arguments.length; a++)
          for (d in arguments[a])
            Object.prototype.hasOwnProperty.call(arguments[a], d) && A[d] === void 0 && (A[d] = arguments[a][d]);
        return A;
      }, c.prepareContent = function(a, d, A, w, S) {
        return l.Promise.resolve(d).then(function(F) {
          return r.blob && (F instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(F)) !== -1) && typeof FileReader < "u" ? new l.Promise(function(k, x) {
            var I = new FileReader();
            I.onload = function(U) {
              k(U.target.result);
            }, I.onerror = function(U) {
              x(U.target.error);
            }, I.readAsArrayBuffer(F);
          }) : F;
        }).then(function(F) {
          var k = c.getTypeOf(F);
          return k ? (k === "arraybuffer" ? F = c.transformTo("uint8array", F) : k === "string" && (S ? F = s.decode(F) : A && w !== !0 && (F = function(x) {
            return v(x, r.uint8array ? new Uint8Array(x.length) : new Array(x.length));
          }(F))), F) : l.Promise.reject(new Error("Can't read the data of '" + a + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
        });
      };
    }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(i, y, c) {
      var r = i("./reader/readerFor"), s = i("./utils"), n = i("./signature"), l = i("./zipEntry"), h = i("./support");
      function v(p) {
        this.files = [], this.loadOptions = p;
      }
      v.prototype = { checkSignature: function(p) {
        if (!this.reader.readAndCheckSignature(p)) {
          this.reader.index -= 4;
          var g = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + s.pretty(g) + ", expected " + s.pretty(p) + ")");
        }
      }, isSignature: function(p, g) {
        var o = this.reader.index;
        this.reader.setIndex(p);
        var f = this.reader.readString(4) === g;
        return this.reader.setIndex(o), f;
      }, readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
        var p = this.reader.readData(this.zipCommentLength), g = h.uint8array ? "uint8array" : "array", o = s.transformTo(g, p);
        this.zipComment = this.loadOptions.decodeFileName(o);
      }, readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
        for (var p, g, o, f = this.zip64EndOfCentralSize - 44; 0 < f; )
          p = this.reader.readInt(2), g = this.reader.readInt(4), o = this.reader.readData(g), this.zip64ExtensibleData[p] = { id: p, length: g, value: o };
      }, readBlockZip64EndOfCentralLocator: function() {
        if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount)
          throw new Error("Multi-volumes zip are not supported");
      }, readLocalFiles: function() {
        var p, g;
        for (p = 0; p < this.files.length; p++)
          g = this.files[p], this.reader.setIndex(g.localHeaderOffset), this.checkSignature(n.LOCAL_FILE_HEADER), g.readLocalPart(this.reader), g.handleUTF8(), g.processAttributes();
      }, readCentralDir: function() {
        var p;
        for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER); )
          (p = new l({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(p);
        if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0)
          throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
      }, readEndOfCentral: function() {
        var p = this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);
        if (p < 0)
          throw this.isSignature(0, n.LOCAL_FILE_HEADER) ? new Error("Corrupted zip: can't find end of central directory") : new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
        this.reader.setIndex(p);
        var g = p;
        if (this.checkSignature(n.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === s.MAX_VALUE_16BITS || this.diskWithCentralDirStart === s.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS || this.centralDirRecords === s.MAX_VALUE_16BITS || this.centralDirSize === s.MAX_VALUE_32BITS || this.centralDirOffset === s.MAX_VALUE_32BITS) {
          if (this.zip64 = !0, (p = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0)
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          if (this.reader.setIndex(p), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, n.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0))
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
        }
        var o = this.centralDirOffset + this.centralDirSize;
        this.zip64 && (o += 20, o += 12 + this.zip64EndOfCentralSize);
        var f = g - o;
        if (0 < f)
          this.isSignature(g, n.CENTRAL_FILE_HEADER) || (this.reader.zero = f);
        else if (f < 0)
          throw new Error("Corrupted zip: missing " + Math.abs(f) + " bytes.");
      }, prepareReader: function(p) {
        this.reader = r(p);
      }, load: function(p) {
        this.prepareReader(p), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
      } }, y.exports = v;
    }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(i, y, c) {
      var r = i("./reader/readerFor"), s = i("./utils"), n = i("./compressedObject"), l = i("./crc32"), h = i("./utf8"), v = i("./compressions"), p = i("./support");
      function g(o, f) {
        this.options = o, this.loadOptions = f;
      }
      g.prototype = { isEncrypted: function() {
        return (1 & this.bitFlag) == 1;
      }, useUTF8: function() {
        return (2048 & this.bitFlag) == 2048;
      }, readLocalPart: function(o) {
        var f, a;
        if (o.skip(22), this.fileNameLength = o.readInt(2), a = o.readInt(2), this.fileName = o.readData(this.fileNameLength), o.skip(a), this.compressedSize === -1 || this.uncompressedSize === -1)
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        if ((f = function(d) {
          for (var A in v)
            if (Object.prototype.hasOwnProperty.call(v, A) && v[A].magic === d)
              return v[A];
          return null;
        }(this.compressionMethod)) === null)
          throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
        this.decompressed = new n(this.compressedSize, this.uncompressedSize, this.crc32, f, o.readData(this.compressedSize));
      }, readCentralPart: function(o) {
        this.versionMadeBy = o.readInt(2), o.skip(2), this.bitFlag = o.readInt(2), this.compressionMethod = o.readString(2), this.date = o.readDate(), this.crc32 = o.readInt(4), this.compressedSize = o.readInt(4), this.uncompressedSize = o.readInt(4);
        var f = o.readInt(2);
        if (this.extraFieldsLength = o.readInt(2), this.fileCommentLength = o.readInt(2), this.diskNumberStart = o.readInt(2), this.internalFileAttributes = o.readInt(2), this.externalFileAttributes = o.readInt(4), this.localHeaderOffset = o.readInt(4), this.isEncrypted())
          throw new Error("Encrypted zip are not supported");
        o.skip(f), this.readExtraFields(o), this.parseZIP64ExtraField(o), this.fileComment = o.readData(this.fileCommentLength);
      }, processAttributes: function() {
        this.unixPermissions = null, this.dosPermissions = null;
        var o = this.versionMadeBy >> 8;
        this.dir = !!(16 & this.externalFileAttributes), o == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), o == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
      }, parseZIP64ExtraField: function() {
        if (this.extraFields[1]) {
          var o = r(this.extraFields[1].value);
          this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = o.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = o.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = o.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = o.readInt(4));
        }
      }, readExtraFields: function(o) {
        var f, a, d, A = o.index + this.extraFieldsLength;
        for (this.extraFields || (this.extraFields = {}); o.index + 4 < A; )
          f = o.readInt(2), a = o.readInt(2), d = o.readData(a), this.extraFields[f] = { id: f, length: a, value: d };
        o.setIndex(A);
      }, handleUTF8: function() {
        var o = p.uint8array ? "uint8array" : "array";
        if (this.useUTF8())
          this.fileNameStr = h.utf8decode(this.fileName), this.fileCommentStr = h.utf8decode(this.fileComment);
        else {
          var f = this.findExtraFieldUnicodePath();
          if (f !== null)
            this.fileNameStr = f;
          else {
            var a = s.transformTo(o, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(a);
          }
          var d = this.findExtraFieldUnicodeComment();
          if (d !== null)
            this.fileCommentStr = d;
          else {
            var A = s.transformTo(o, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(A);
          }
        }
      }, findExtraFieldUnicodePath: function() {
        var o = this.extraFields[28789];
        if (o) {
          var f = r(o.value);
          return f.readInt(1) !== 1 || l(this.fileName) !== f.readInt(4) ? null : h.utf8decode(f.readData(o.length - 5));
        }
        return null;
      }, findExtraFieldUnicodeComment: function() {
        var o = this.extraFields[25461];
        if (o) {
          var f = r(o.value);
          return f.readInt(1) !== 1 || l(this.fileComment) !== f.readInt(4) ? null : h.utf8decode(f.readData(o.length - 5));
        }
        return null;
      } }, y.exports = g;
    }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(i, y, c) {
      function r(f, a, d) {
        this.name = f, this.dir = d.dir, this.date = d.date, this.comment = d.comment, this.unixPermissions = d.unixPermissions, this.dosPermissions = d.dosPermissions, this._data = a, this._dataBinary = d.binary, this.options = { compression: d.compression, compressionOptions: d.compressionOptions };
      }
      var s = i("./stream/StreamHelper"), n = i("./stream/DataWorker"), l = i("./utf8"), h = i("./compressedObject"), v = i("./stream/GenericWorker");
      r.prototype = { internalStream: function(f) {
        var a = null, d = "string";
        try {
          if (!f)
            throw new Error("No output type specified.");
          var A = (d = f.toLowerCase()) === "string" || d === "text";
          d !== "binarystring" && d !== "text" || (d = "string"), a = this._decompressWorker();
          var w = !this._dataBinary;
          w && !A && (a = a.pipe(new l.Utf8EncodeWorker())), !w && A && (a = a.pipe(new l.Utf8DecodeWorker()));
        } catch (S) {
          (a = new v("error")).error(S);
        }
        return new s(a, d, "");
      }, async: function(f, a) {
        return this.internalStream(f).accumulate(a);
      }, nodeStream: function(f, a) {
        return this.internalStream(f || "nodebuffer").toNodejsStream(a);
      }, _compressWorker: function(f, a) {
        if (this._data instanceof h && this._data.compression.magic === f.magic)
          return this._data.getCompressedWorker();
        var d = this._decompressWorker();
        return this._dataBinary || (d = d.pipe(new l.Utf8EncodeWorker())), h.createWorkerFrom(d, f, a);
      }, _decompressWorker: function() {
        return this._data instanceof h ? this._data.getContentWorker() : this._data instanceof v ? this._data : new n(this._data);
      } };
      for (var p = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], g = function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      }, o = 0; o < p.length; o++)
        r.prototype[p[o]] = g;
      y.exports = r;
    }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(i, y, c) {
      (function(r) {
        var s, n, l = r.MutationObserver || r.WebKitMutationObserver;
        if (l) {
          var h = 0, v = new l(f), p = r.document.createTextNode("");
          v.observe(p, { characterData: !0 }), s = function() {
            p.data = h = ++h % 2;
          };
        } else if (r.setImmediate || r.MessageChannel === void 0)
          s = "document" in r && "onreadystatechange" in r.document.createElement("script") ? function() {
            var a = r.document.createElement("script");
            a.onreadystatechange = function() {
              f(), a.onreadystatechange = null, a.parentNode.removeChild(a), a = null;
            }, r.document.documentElement.appendChild(a);
          } : function() {
            setTimeout(f, 0);
          };
        else {
          var g = new r.MessageChannel();
          g.port1.onmessage = f, s = function() {
            g.port2.postMessage(0);
          };
        }
        var o = [];
        function f() {
          var a, d;
          n = !0;
          for (var A = o.length; A; ) {
            for (d = o, o = [], a = -1; ++a < A; )
              d[a]();
            A = o.length;
          }
          n = !1;
        }
        y.exports = function(a) {
          o.push(a) !== 1 || n || s();
        };
      }).call(this, typeof St < "u" ? St : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}], 37: [function(i, y, c) {
      var r = i("immediate");
      function s() {
      }
      var n = {}, l = ["REJECTED"], h = ["FULFILLED"], v = ["PENDING"];
      function p(A) {
        if (typeof A != "function")
          throw new TypeError("resolver must be a function");
        this.state = v, this.queue = [], this.outcome = void 0, A !== s && a(this, A);
      }
      function g(A, w, S) {
        this.promise = A, typeof w == "function" && (this.onFulfilled = w, this.callFulfilled = this.otherCallFulfilled), typeof S == "function" && (this.onRejected = S, this.callRejected = this.otherCallRejected);
      }
      function o(A, w, S) {
        r(function() {
          var F;
          try {
            F = w(S);
          } catch (k) {
            return n.reject(A, k);
          }
          F === A ? n.reject(A, new TypeError("Cannot resolve promise with itself")) : n.resolve(A, F);
        });
      }
      function f(A) {
        var w = A && A.then;
        if (A && (typeof A == "object" || typeof A == "function") && typeof w == "function")
          return function() {
            w.apply(A, arguments);
          };
      }
      function a(A, w) {
        var S = !1;
        function F(I) {
          S || (S = !0, n.reject(A, I));
        }
        function k(I) {
          S || (S = !0, n.resolve(A, I));
        }
        var x = d(function() {
          w(k, F);
        });
        x.status === "error" && F(x.value);
      }
      function d(A, w) {
        var S = {};
        try {
          S.value = A(w), S.status = "success";
        } catch (F) {
          S.status = "error", S.value = F;
        }
        return S;
      }
      (y.exports = p).prototype.finally = function(A) {
        if (typeof A != "function")
          return this;
        var w = this.constructor;
        return this.then(function(S) {
          return w.resolve(A()).then(function() {
            return S;
          });
        }, function(S) {
          return w.resolve(A()).then(function() {
            throw S;
          });
        });
      }, p.prototype.catch = function(A) {
        return this.then(null, A);
      }, p.prototype.then = function(A, w) {
        if (typeof A != "function" && this.state === h || typeof w != "function" && this.state === l)
          return this;
        var S = new this.constructor(s);
        return this.state !== v ? o(S, this.state === h ? A : w, this.outcome) : this.queue.push(new g(S, A, w)), S;
      }, g.prototype.callFulfilled = function(A) {
        n.resolve(this.promise, A);
      }, g.prototype.otherCallFulfilled = function(A) {
        o(this.promise, this.onFulfilled, A);
      }, g.prototype.callRejected = function(A) {
        n.reject(this.promise, A);
      }, g.prototype.otherCallRejected = function(A) {
        o(this.promise, this.onRejected, A);
      }, n.resolve = function(A, w) {
        var S = d(f, w);
        if (S.status === "error")
          return n.reject(A, S.value);
        var F = S.value;
        if (F)
          a(A, F);
        else {
          A.state = h, A.outcome = w;
          for (var k = -1, x = A.queue.length; ++k < x; )
            A.queue[k].callFulfilled(w);
        }
        return A;
      }, n.reject = function(A, w) {
        A.state = l, A.outcome = w;
        for (var S = -1, F = A.queue.length; ++S < F; )
          A.queue[S].callRejected(w);
        return A;
      }, p.resolve = function(A) {
        return A instanceof this ? A : n.resolve(new this(s), A);
      }, p.reject = function(A) {
        var w = new this(s);
        return n.reject(w, A);
      }, p.all = function(A) {
        var w = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = A.length, F = !1;
        if (!S)
          return this.resolve([]);
        for (var k = new Array(S), x = 0, I = -1, U = new this(s); ++I < S; )
          N(A[I], I);
        return U;
        function N(M, _) {
          w.resolve(M).then(function(E) {
            k[_] = E, ++x !== S || F || (F = !0, n.resolve(U, k));
          }, function(E) {
            F || (F = !0, n.reject(U, E));
          });
        }
      }, p.race = function(A) {
        var w = this;
        if (Object.prototype.toString.call(A) !== "[object Array]")
          return this.reject(new TypeError("must be an array"));
        var S = A.length, F = !1;
        if (!S)
          return this.resolve([]);
        for (var k = -1, x = new this(s); ++k < S; )
          I = A[k], w.resolve(I).then(function(U) {
            F || (F = !0, n.resolve(x, U));
          }, function(U) {
            F || (F = !0, n.reject(x, U));
          });
        var I;
        return x;
      };
    }, { immediate: 36 }], 38: [function(i, y, c) {
      var r = {};
      (0, i("./lib/utils/common").assign)(r, i("./lib/deflate"), i("./lib/inflate"), i("./lib/zlib/constants")), y.exports = r;
    }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(i, y, c) {
      var r = i("./zlib/deflate"), s = i("./utils/common"), n = i("./utils/strings"), l = i("./zlib/messages"), h = i("./zlib/zstream"), v = Object.prototype.toString, p = 0, g = -1, o = 0, f = 8;
      function a(A) {
        if (!(this instanceof a))
          return new a(A);
        this.options = s.assign({ level: g, method: f, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: o, to: "" }, A || {});
        var w = this.options;
        w.raw && 0 < w.windowBits ? w.windowBits = -w.windowBits : w.gzip && 0 < w.windowBits && w.windowBits < 16 && (w.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new h(), this.strm.avail_out = 0;
        var S = r.deflateInit2(this.strm, w.level, w.method, w.windowBits, w.memLevel, w.strategy);
        if (S !== p)
          throw new Error(l[S]);
        if (w.header && r.deflateSetHeader(this.strm, w.header), w.dictionary) {
          var F;
          if (F = typeof w.dictionary == "string" ? n.string2buf(w.dictionary) : v.call(w.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(w.dictionary) : w.dictionary, (S = r.deflateSetDictionary(this.strm, F)) !== p)
            throw new Error(l[S]);
          this._dict_set = !0;
        }
      }
      function d(A, w) {
        var S = new a(w);
        if (S.push(A, !0), S.err)
          throw S.msg || l[S.err];
        return S.result;
      }
      a.prototype.push = function(A, w) {
        var S, F, k = this.strm, x = this.options.chunkSize;
        if (this.ended)
          return !1;
        F = w === ~~w ? w : w === !0 ? 4 : 0, typeof A == "string" ? k.input = n.string2buf(A) : v.call(A) === "[object ArrayBuffer]" ? k.input = new Uint8Array(A) : k.input = A, k.next_in = 0, k.avail_in = k.input.length;
        do {
          if (k.avail_out === 0 && (k.output = new s.Buf8(x), k.next_out = 0, k.avail_out = x), (S = r.deflate(k, F)) !== 1 && S !== p)
            return this.onEnd(S), !(this.ended = !0);
          k.avail_out !== 0 && (k.avail_in !== 0 || F !== 4 && F !== 2) || (this.options.to === "string" ? this.onData(n.buf2binstring(s.shrinkBuf(k.output, k.next_out))) : this.onData(s.shrinkBuf(k.output, k.next_out)));
        } while ((0 < k.avail_in || k.avail_out === 0) && S !== 1);
        return F === 4 ? (S = r.deflateEnd(this.strm), this.onEnd(S), this.ended = !0, S === p) : F !== 2 || (this.onEnd(p), !(k.avail_out = 0));
      }, a.prototype.onData = function(A) {
        this.chunks.push(A);
      }, a.prototype.onEnd = function(A) {
        A === p && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = A, this.msg = this.strm.msg;
      }, c.Deflate = a, c.deflate = d, c.deflateRaw = function(A, w) {
        return (w = w || {}).raw = !0, d(A, w);
      }, c.gzip = function(A, w) {
        return (w = w || {}).gzip = !0, d(A, w);
      };
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(i, y, c) {
      var r = i("./zlib/inflate"), s = i("./utils/common"), n = i("./utils/strings"), l = i("./zlib/constants"), h = i("./zlib/messages"), v = i("./zlib/zstream"), p = i("./zlib/gzheader"), g = Object.prototype.toString;
      function o(a) {
        if (!(this instanceof o))
          return new o(a);
        this.options = s.assign({ chunkSize: 16384, windowBits: 0, to: "" }, a || {});
        var d = this.options;
        d.raw && 0 <= d.windowBits && d.windowBits < 16 && (d.windowBits = -d.windowBits, d.windowBits === 0 && (d.windowBits = -15)), !(0 <= d.windowBits && d.windowBits < 16) || a && a.windowBits || (d.windowBits += 32), 15 < d.windowBits && d.windowBits < 48 && !(15 & d.windowBits) && (d.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new v(), this.strm.avail_out = 0;
        var A = r.inflateInit2(this.strm, d.windowBits);
        if (A !== l.Z_OK)
          throw new Error(h[A]);
        this.header = new p(), r.inflateGetHeader(this.strm, this.header);
      }
      function f(a, d) {
        var A = new o(d);
        if (A.push(a, !0), A.err)
          throw A.msg || h[A.err];
        return A.result;
      }
      o.prototype.push = function(a, d) {
        var A, w, S, F, k, x, I = this.strm, U = this.options.chunkSize, N = this.options.dictionary, M = !1;
        if (this.ended)
          return !1;
        w = d === ~~d ? d : d === !0 ? l.Z_FINISH : l.Z_NO_FLUSH, typeof a == "string" ? I.input = n.binstring2buf(a) : g.call(a) === "[object ArrayBuffer]" ? I.input = new Uint8Array(a) : I.input = a, I.next_in = 0, I.avail_in = I.input.length;
        do {
          if (I.avail_out === 0 && (I.output = new s.Buf8(U), I.next_out = 0, I.avail_out = U), (A = r.inflate(I, l.Z_NO_FLUSH)) === l.Z_NEED_DICT && N && (x = typeof N == "string" ? n.string2buf(N) : g.call(N) === "[object ArrayBuffer]" ? new Uint8Array(N) : N, A = r.inflateSetDictionary(this.strm, x)), A === l.Z_BUF_ERROR && M === !0 && (A = l.Z_OK, M = !1), A !== l.Z_STREAM_END && A !== l.Z_OK)
            return this.onEnd(A), !(this.ended = !0);
          I.next_out && (I.avail_out !== 0 && A !== l.Z_STREAM_END && (I.avail_in !== 0 || w !== l.Z_FINISH && w !== l.Z_SYNC_FLUSH) || (this.options.to === "string" ? (S = n.utf8border(I.output, I.next_out), F = I.next_out - S, k = n.buf2string(I.output, S), I.next_out = F, I.avail_out = U - F, F && s.arraySet(I.output, I.output, S, F, 0), this.onData(k)) : this.onData(s.shrinkBuf(I.output, I.next_out)))), I.avail_in === 0 && I.avail_out === 0 && (M = !0);
        } while ((0 < I.avail_in || I.avail_out === 0) && A !== l.Z_STREAM_END);
        return A === l.Z_STREAM_END && (w = l.Z_FINISH), w === l.Z_FINISH ? (A = r.inflateEnd(this.strm), this.onEnd(A), this.ended = !0, A === l.Z_OK) : w !== l.Z_SYNC_FLUSH || (this.onEnd(l.Z_OK), !(I.avail_out = 0));
      }, o.prototype.onData = function(a) {
        this.chunks.push(a);
      }, o.prototype.onEnd = function(a) {
        a === l.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = s.flattenChunks(this.chunks)), this.chunks = [], this.err = a, this.msg = this.strm.msg;
      }, c.Inflate = o, c.inflate = f, c.inflateRaw = function(a, d) {
        return (d = d || {}).raw = !0, f(a, d);
      }, c.ungzip = f;
    }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(i, y, c) {
      var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
      c.assign = function(l) {
        for (var h = Array.prototype.slice.call(arguments, 1); h.length; ) {
          var v = h.shift();
          if (v) {
            if (typeof v != "object")
              throw new TypeError(v + "must be non-object");
            for (var p in v)
              v.hasOwnProperty(p) && (l[p] = v[p]);
          }
        }
        return l;
      }, c.shrinkBuf = function(l, h) {
        return l.length === h ? l : l.subarray ? l.subarray(0, h) : (l.length = h, l);
      };
      var s = { arraySet: function(l, h, v, p, g) {
        if (h.subarray && l.subarray)
          l.set(h.subarray(v, v + p), g);
        else
          for (var o = 0; o < p; o++)
            l[g + o] = h[v + o];
      }, flattenChunks: function(l) {
        var h, v, p, g, o, f;
        for (h = p = 0, v = l.length; h < v; h++)
          p += l[h].length;
        for (f = new Uint8Array(p), h = g = 0, v = l.length; h < v; h++)
          o = l[h], f.set(o, g), g += o.length;
        return f;
      } }, n = { arraySet: function(l, h, v, p, g) {
        for (var o = 0; o < p; o++)
          l[g + o] = h[v + o];
      }, flattenChunks: function(l) {
        return [].concat.apply([], l);
      } };
      c.setTyped = function(l) {
        l ? (c.Buf8 = Uint8Array, c.Buf16 = Uint16Array, c.Buf32 = Int32Array, c.assign(c, s)) : (c.Buf8 = Array, c.Buf16 = Array, c.Buf32 = Array, c.assign(c, n));
      }, c.setTyped(r);
    }, {}], 42: [function(i, y, c) {
      var r = i("./common"), s = !0, n = !0;
      try {
        String.fromCharCode.apply(null, [0]);
      } catch {
        s = !1;
      }
      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch {
        n = !1;
      }
      for (var l = new r.Buf8(256), h = 0; h < 256; h++)
        l[h] = 252 <= h ? 6 : 248 <= h ? 5 : 240 <= h ? 4 : 224 <= h ? 3 : 192 <= h ? 2 : 1;
      function v(p, g) {
        if (g < 65537 && (p.subarray && n || !p.subarray && s))
          return String.fromCharCode.apply(null, r.shrinkBuf(p, g));
        for (var o = "", f = 0; f < g; f++)
          o += String.fromCharCode(p[f]);
        return o;
      }
      l[254] = l[254] = 1, c.string2buf = function(p) {
        var g, o, f, a, d, A = p.length, w = 0;
        for (a = 0; a < A; a++)
          (64512 & (o = p.charCodeAt(a))) == 55296 && a + 1 < A && (64512 & (f = p.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), a++), w += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
        for (g = new r.Buf8(w), a = d = 0; d < w; a++)
          (64512 & (o = p.charCodeAt(a))) == 55296 && a + 1 < A && (64512 & (f = p.charCodeAt(a + 1))) == 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), a++), o < 128 ? g[d++] = o : (o < 2048 ? g[d++] = 192 | o >>> 6 : (o < 65536 ? g[d++] = 224 | o >>> 12 : (g[d++] = 240 | o >>> 18, g[d++] = 128 | o >>> 12 & 63), g[d++] = 128 | o >>> 6 & 63), g[d++] = 128 | 63 & o);
        return g;
      }, c.buf2binstring = function(p) {
        return v(p, p.length);
      }, c.binstring2buf = function(p) {
        for (var g = new r.Buf8(p.length), o = 0, f = g.length; o < f; o++)
          g[o] = p.charCodeAt(o);
        return g;
      }, c.buf2string = function(p, g) {
        var o, f, a, d, A = g || p.length, w = new Array(2 * A);
        for (o = f = 0; o < A; )
          if ((a = p[o++]) < 128)
            w[f++] = a;
          else if (4 < (d = l[a]))
            w[f++] = 65533, o += d - 1;
          else {
            for (a &= d === 2 ? 31 : d === 3 ? 15 : 7; 1 < d && o < A; )
              a = a << 6 | 63 & p[o++], d--;
            1 < d ? w[f++] = 65533 : a < 65536 ? w[f++] = a : (a -= 65536, w[f++] = 55296 | a >> 10 & 1023, w[f++] = 56320 | 1023 & a);
          }
        return v(w, f);
      }, c.utf8border = function(p, g) {
        var o;
        for ((g = g || p.length) > p.length && (g = p.length), o = g - 1; 0 <= o && (192 & p[o]) == 128; )
          o--;
        return o < 0 || o === 0 ? g : o + l[p[o]] > g ? o : g;
      };
    }, { "./common": 41 }], 43: [function(i, y, c) {
      y.exports = function(r, s, n, l) {
        for (var h = 65535 & r | 0, v = r >>> 16 & 65535 | 0, p = 0; n !== 0; ) {
          for (n -= p = 2e3 < n ? 2e3 : n; v = v + (h = h + s[l++] | 0) | 0, --p; )
            ;
          h %= 65521, v %= 65521;
        }
        return h | v << 16 | 0;
      };
    }, {}], 44: [function(i, y, c) {
      y.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
    }, {}], 45: [function(i, y, c) {
      var r = function() {
        for (var s, n = [], l = 0; l < 256; l++) {
          s = l;
          for (var h = 0; h < 8; h++)
            s = 1 & s ? 3988292384 ^ s >>> 1 : s >>> 1;
          n[l] = s;
        }
        return n;
      }();
      y.exports = function(s, n, l, h) {
        var v = r, p = h + l;
        s ^= -1;
        for (var g = h; g < p; g++)
          s = s >>> 8 ^ v[255 & (s ^ n[g])];
        return -1 ^ s;
      };
    }, {}], 46: [function(i, y, c) {
      var r, s = i("../utils/common"), n = i("./trees"), l = i("./adler32"), h = i("./crc32"), v = i("./messages"), p = 0, g = 4, o = 0, f = -2, a = -1, d = 4, A = 2, w = 8, S = 9, F = 286, k = 30, x = 19, I = 2 * F + 1, U = 15, N = 3, M = 258, _ = M + N + 1, E = 42, T = 113, e = 1, Z = 2, $ = 3, D = 4;
      function et(t, L) {
        return t.msg = v[L], L;
      }
      function J(t) {
        return (t << 1) - (4 < t ? 9 : 0);
      }
      function q(t) {
        for (var L = t.length; 0 <= --L; )
          t[L] = 0;
      }
      function G(t) {
        var L = t.state, z = L.pending;
        z > t.avail_out && (z = t.avail_out), z !== 0 && (s.arraySet(t.output, L.pending_buf, L.pending_out, z, t.next_out), t.next_out += z, L.pending_out += z, t.total_out += z, t.avail_out -= z, L.pending -= z, L.pending === 0 && (L.pending_out = 0));
      }
      function O(t, L) {
        n._tr_flush_block(t, 0 <= t.block_start ? t.block_start : -1, t.strstart - t.block_start, L), t.block_start = t.strstart, G(t.strm);
      }
      function nt(t, L) {
        t.pending_buf[t.pending++] = L;
      }
      function H(t, L) {
        t.pending_buf[t.pending++] = L >>> 8 & 255, t.pending_buf[t.pending++] = 255 & L;
      }
      function j(t, L) {
        var z, b, u = t.max_chain_length, C = t.strstart, V = t.prev_length, Q = t.nice_match, R = t.strstart > t.w_size - _ ? t.strstart - (t.w_size - _) : 0, W = t.window, X = t.w_mask, Y = t.prev, rt = t.strstart + M, lt = W[C + V - 1], ot = W[C + V];
        t.prev_length >= t.good_match && (u >>= 2), Q > t.lookahead && (Q = t.lookahead);
        do
          if (W[(z = L) + V] === ot && W[z + V - 1] === lt && W[z] === W[C] && W[++z] === W[C + 1]) {
            C += 2, z++;
            do
              ;
            while (W[++C] === W[++z] && W[++C] === W[++z] && W[++C] === W[++z] && W[++C] === W[++z] && W[++C] === W[++z] && W[++C] === W[++z] && W[++C] === W[++z] && W[++C] === W[++z] && C < rt);
            if (b = M - (rt - C), C = rt - M, V < b) {
              if (t.match_start = L, Q <= (V = b))
                break;
              lt = W[C + V - 1], ot = W[C + V];
            }
          }
        while ((L = Y[L & X]) > R && --u != 0);
        return V <= t.lookahead ? V : t.lookahead;
      }
      function dt(t) {
        var L, z, b, u, C, V, Q, R, W, X, Y = t.w_size;
        do {
          if (u = t.window_size - t.lookahead - t.strstart, t.strstart >= Y + (Y - _)) {
            for (s.arraySet(t.window, t.window, Y, Y, 0), t.match_start -= Y, t.strstart -= Y, t.block_start -= Y, L = z = t.hash_size; b = t.head[--L], t.head[L] = Y <= b ? b - Y : 0, --z; )
              ;
            for (L = z = Y; b = t.prev[--L], t.prev[L] = Y <= b ? b - Y : 0, --z; )
              ;
            u += Y;
          }
          if (t.strm.avail_in === 0)
            break;
          if (V = t.strm, Q = t.window, R = t.strstart + t.lookahead, W = u, X = void 0, X = V.avail_in, W < X && (X = W), z = X === 0 ? 0 : (V.avail_in -= X, s.arraySet(Q, V.input, V.next_in, X, R), V.state.wrap === 1 ? V.adler = l(V.adler, Q, X, R) : V.state.wrap === 2 && (V.adler = h(V.adler, Q, X, R)), V.next_in += X, V.total_in += X, X), t.lookahead += z, t.lookahead + t.insert >= N)
            for (C = t.strstart - t.insert, t.ins_h = t.window[C], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[C + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[C + N - 1]) & t.hash_mask, t.prev[C & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = C, C++, t.insert--, !(t.lookahead + t.insert < N)); )
              ;
        } while (t.lookahead < _ && t.strm.avail_in !== 0);
      }
      function ut(t, L) {
        for (var z, b; ; ) {
          if (t.lookahead < _) {
            if (dt(t), t.lookahead < _ && L === p)
              return e;
            if (t.lookahead === 0)
              break;
          }
          if (z = 0, t.lookahead >= N && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + N - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), z !== 0 && t.strstart - z <= t.w_size - _ && (t.match_length = j(t, z)), t.match_length >= N)
            if (b = n._tr_tally(t, t.strstart - t.match_start, t.match_length - N), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= N) {
              for (t.match_length--; t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + N - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart, --t.match_length != 0; )
                ;
              t.strstart++;
            } else
              t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
          else
            b = n._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
          if (b && (O(t, !1), t.strm.avail_out === 0))
            return e;
        }
        return t.insert = t.strstart < N - 1 ? t.strstart : N - 1, L === g ? (O(t, !0), t.strm.avail_out === 0 ? $ : D) : t.last_lit && (O(t, !1), t.strm.avail_out === 0) ? e : Z;
      }
      function st(t, L) {
        for (var z, b, u; ; ) {
          if (t.lookahead < _) {
            if (dt(t), t.lookahead < _ && L === p)
              return e;
            if (t.lookahead === 0)
              break;
          }
          if (z = 0, t.lookahead >= N && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + N - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = N - 1, z !== 0 && t.prev_length < t.max_lazy_match && t.strstart - z <= t.w_size - _ && (t.match_length = j(t, z), t.match_length <= 5 && (t.strategy === 1 || t.match_length === N && 4096 < t.strstart - t.match_start) && (t.match_length = N - 1)), t.prev_length >= N && t.match_length <= t.prev_length) {
            for (u = t.strstart + t.lookahead - N, b = n._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - N), t.lookahead -= t.prev_length - 1, t.prev_length -= 2; ++t.strstart <= u && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + N - 1]) & t.hash_mask, z = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), --t.prev_length != 0; )
              ;
            if (t.match_available = 0, t.match_length = N - 1, t.strstart++, b && (O(t, !1), t.strm.avail_out === 0))
              return e;
          } else if (t.match_available) {
            if ((b = n._tr_tally(t, 0, t.window[t.strstart - 1])) && O(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
              return e;
          } else
            t.match_available = 1, t.strstart++, t.lookahead--;
        }
        return t.match_available && (b = n._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < N - 1 ? t.strstart : N - 1, L === g ? (O(t, !0), t.strm.avail_out === 0 ? $ : D) : t.last_lit && (O(t, !1), t.strm.avail_out === 0) ? e : Z;
      }
      function at(t, L, z, b, u) {
        this.good_length = t, this.max_lazy = L, this.nice_length = z, this.max_chain = b, this.func = u;
      }
      function ft() {
        this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = w, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(2 * I), this.dyn_dtree = new s.Buf16(2 * (2 * k + 1)), this.bl_tree = new s.Buf16(2 * (2 * x + 1)), q(this.dyn_ltree), q(this.dyn_dtree), q(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(U + 1), this.heap = new s.Buf16(2 * F + 1), q(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * F + 1), q(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
      }
      function ht(t) {
        var L;
        return t && t.state ? (t.total_in = t.total_out = 0, t.data_type = A, (L = t.state).pending = 0, L.pending_out = 0, L.wrap < 0 && (L.wrap = -L.wrap), L.status = L.wrap ? E : T, t.adler = L.wrap === 2 ? 0 : 1, L.last_flush = p, n._tr_init(L), o) : et(t, f);
      }
      function pt(t) {
        var L = ht(t);
        return L === o && function(z) {
          z.window_size = 2 * z.w_size, q(z.head), z.max_lazy_match = r[z.level].max_lazy, z.good_match = r[z.level].good_length, z.nice_match = r[z.level].nice_length, z.max_chain_length = r[z.level].max_chain, z.strstart = 0, z.block_start = 0, z.lookahead = 0, z.insert = 0, z.match_length = z.prev_length = N - 1, z.match_available = 0, z.ins_h = 0;
        }(t.state), L;
      }
      function At(t, L, z, b, u, C) {
        if (!t)
          return f;
        var V = 1;
        if (L === a && (L = 6), b < 0 ? (V = 0, b = -b) : 15 < b && (V = 2, b -= 16), u < 1 || S < u || z !== w || b < 8 || 15 < b || L < 0 || 9 < L || C < 0 || d < C)
          return et(t, f);
        b === 8 && (b = 9);
        var Q = new ft();
        return (t.state = Q).strm = t, Q.wrap = V, Q.gzhead = null, Q.w_bits = b, Q.w_size = 1 << Q.w_bits, Q.w_mask = Q.w_size - 1, Q.hash_bits = u + 7, Q.hash_size = 1 << Q.hash_bits, Q.hash_mask = Q.hash_size - 1, Q.hash_shift = ~~((Q.hash_bits + N - 1) / N), Q.window = new s.Buf8(2 * Q.w_size), Q.head = new s.Buf16(Q.hash_size), Q.prev = new s.Buf16(Q.w_size), Q.lit_bufsize = 1 << u + 6, Q.pending_buf_size = 4 * Q.lit_bufsize, Q.pending_buf = new s.Buf8(Q.pending_buf_size), Q.d_buf = 1 * Q.lit_bufsize, Q.l_buf = 3 * Q.lit_bufsize, Q.level = L, Q.strategy = C, Q.method = z, pt(t);
      }
      r = [new at(0, 0, 0, 0, function(t, L) {
        var z = 65535;
        for (z > t.pending_buf_size - 5 && (z = t.pending_buf_size - 5); ; ) {
          if (t.lookahead <= 1) {
            if (dt(t), t.lookahead === 0 && L === p)
              return e;
            if (t.lookahead === 0)
              break;
          }
          t.strstart += t.lookahead, t.lookahead = 0;
          var b = t.block_start + z;
          if ((t.strstart === 0 || t.strstart >= b) && (t.lookahead = t.strstart - b, t.strstart = b, O(t, !1), t.strm.avail_out === 0) || t.strstart - t.block_start >= t.w_size - _ && (O(t, !1), t.strm.avail_out === 0))
            return e;
        }
        return t.insert = 0, L === g ? (O(t, !0), t.strm.avail_out === 0 ? $ : D) : (t.strstart > t.block_start && (O(t, !1), t.strm.avail_out), e);
      }), new at(4, 4, 8, 4, ut), new at(4, 5, 16, 8, ut), new at(4, 6, 32, 32, ut), new at(4, 4, 16, 16, st), new at(8, 16, 32, 32, st), new at(8, 16, 128, 128, st), new at(8, 32, 128, 256, st), new at(32, 128, 258, 1024, st), new at(32, 258, 258, 4096, st)], c.deflateInit = function(t, L) {
        return At(t, L, w, 15, 8, 0);
      }, c.deflateInit2 = At, c.deflateReset = pt, c.deflateResetKeep = ht, c.deflateSetHeader = function(t, L) {
        return t && t.state ? t.state.wrap !== 2 ? f : (t.state.gzhead = L, o) : f;
      }, c.deflate = function(t, L) {
        var z, b, u, C;
        if (!t || !t.state || 5 < L || L < 0)
          return t ? et(t, f) : f;
        if (b = t.state, !t.output || !t.input && t.avail_in !== 0 || b.status === 666 && L !== g)
          return et(t, t.avail_out === 0 ? -5 : f);
        if (b.strm = t, z = b.last_flush, b.last_flush = L, b.status === E)
          if (b.wrap === 2)
            t.adler = 0, nt(b, 31), nt(b, 139), nt(b, 8), b.gzhead ? (nt(b, (b.gzhead.text ? 1 : 0) + (b.gzhead.hcrc ? 2 : 0) + (b.gzhead.extra ? 4 : 0) + (b.gzhead.name ? 8 : 0) + (b.gzhead.comment ? 16 : 0)), nt(b, 255 & b.gzhead.time), nt(b, b.gzhead.time >> 8 & 255), nt(b, b.gzhead.time >> 16 & 255), nt(b, b.gzhead.time >> 24 & 255), nt(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), nt(b, 255 & b.gzhead.os), b.gzhead.extra && b.gzhead.extra.length && (nt(b, 255 & b.gzhead.extra.length), nt(b, b.gzhead.extra.length >> 8 & 255)), b.gzhead.hcrc && (t.adler = h(t.adler, b.pending_buf, b.pending, 0)), b.gzindex = 0, b.status = 69) : (nt(b, 0), nt(b, 0), nt(b, 0), nt(b, 0), nt(b, 0), nt(b, b.level === 9 ? 2 : 2 <= b.strategy || b.level < 2 ? 4 : 0), nt(b, 3), b.status = T);
          else {
            var V = w + (b.w_bits - 8 << 4) << 8;
            V |= (2 <= b.strategy || b.level < 2 ? 0 : b.level < 6 ? 1 : b.level === 6 ? 2 : 3) << 6, b.strstart !== 0 && (V |= 32), V += 31 - V % 31, b.status = T, H(b, V), b.strstart !== 0 && (H(b, t.adler >>> 16), H(b, 65535 & t.adler)), t.adler = 1;
          }
        if (b.status === 69)
          if (b.gzhead.extra) {
            for (u = b.pending; b.gzindex < (65535 & b.gzhead.extra.length) && (b.pending !== b.pending_buf_size || (b.gzhead.hcrc && b.pending > u && (t.adler = h(t.adler, b.pending_buf, b.pending - u, u)), G(t), u = b.pending, b.pending !== b.pending_buf_size)); )
              nt(b, 255 & b.gzhead.extra[b.gzindex]), b.gzindex++;
            b.gzhead.hcrc && b.pending > u && (t.adler = h(t.adler, b.pending_buf, b.pending - u, u)), b.gzindex === b.gzhead.extra.length && (b.gzindex = 0, b.status = 73);
          } else
            b.status = 73;
        if (b.status === 73)
          if (b.gzhead.name) {
            u = b.pending;
            do {
              if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > u && (t.adler = h(t.adler, b.pending_buf, b.pending - u, u)), G(t), u = b.pending, b.pending === b.pending_buf_size)) {
                C = 1;
                break;
              }
              C = b.gzindex < b.gzhead.name.length ? 255 & b.gzhead.name.charCodeAt(b.gzindex++) : 0, nt(b, C);
            } while (C !== 0);
            b.gzhead.hcrc && b.pending > u && (t.adler = h(t.adler, b.pending_buf, b.pending - u, u)), C === 0 && (b.gzindex = 0, b.status = 91);
          } else
            b.status = 91;
        if (b.status === 91)
          if (b.gzhead.comment) {
            u = b.pending;
            do {
              if (b.pending === b.pending_buf_size && (b.gzhead.hcrc && b.pending > u && (t.adler = h(t.adler, b.pending_buf, b.pending - u, u)), G(t), u = b.pending, b.pending === b.pending_buf_size)) {
                C = 1;
                break;
              }
              C = b.gzindex < b.gzhead.comment.length ? 255 & b.gzhead.comment.charCodeAt(b.gzindex++) : 0, nt(b, C);
            } while (C !== 0);
            b.gzhead.hcrc && b.pending > u && (t.adler = h(t.adler, b.pending_buf, b.pending - u, u)), C === 0 && (b.status = 103);
          } else
            b.status = 103;
        if (b.status === 103 && (b.gzhead.hcrc ? (b.pending + 2 > b.pending_buf_size && G(t), b.pending + 2 <= b.pending_buf_size && (nt(b, 255 & t.adler), nt(b, t.adler >> 8 & 255), t.adler = 0, b.status = T)) : b.status = T), b.pending !== 0) {
          if (G(t), t.avail_out === 0)
            return b.last_flush = -1, o;
        } else if (t.avail_in === 0 && J(L) <= J(z) && L !== g)
          return et(t, -5);
        if (b.status === 666 && t.avail_in !== 0)
          return et(t, -5);
        if (t.avail_in !== 0 || b.lookahead !== 0 || L !== p && b.status !== 666) {
          var Q = b.strategy === 2 ? function(R, W) {
            for (var X; ; ) {
              if (R.lookahead === 0 && (dt(R), R.lookahead === 0)) {
                if (W === p)
                  return e;
                break;
              }
              if (R.match_length = 0, X = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++, X && (O(R, !1), R.strm.avail_out === 0))
                return e;
            }
            return R.insert = 0, W === g ? (O(R, !0), R.strm.avail_out === 0 ? $ : D) : R.last_lit && (O(R, !1), R.strm.avail_out === 0) ? e : Z;
          }(b, L) : b.strategy === 3 ? function(R, W) {
            for (var X, Y, rt, lt, ot = R.window; ; ) {
              if (R.lookahead <= M) {
                if (dt(R), R.lookahead <= M && W === p)
                  return e;
                if (R.lookahead === 0)
                  break;
              }
              if (R.match_length = 0, R.lookahead >= N && 0 < R.strstart && (Y = ot[rt = R.strstart - 1]) === ot[++rt] && Y === ot[++rt] && Y === ot[++rt]) {
                lt = R.strstart + M;
                do
                  ;
                while (Y === ot[++rt] && Y === ot[++rt] && Y === ot[++rt] && Y === ot[++rt] && Y === ot[++rt] && Y === ot[++rt] && Y === ot[++rt] && Y === ot[++rt] && rt < lt);
                R.match_length = M - (lt - rt), R.match_length > R.lookahead && (R.match_length = R.lookahead);
              }
              if (R.match_length >= N ? (X = n._tr_tally(R, 1, R.match_length - N), R.lookahead -= R.match_length, R.strstart += R.match_length, R.match_length = 0) : (X = n._tr_tally(R, 0, R.window[R.strstart]), R.lookahead--, R.strstart++), X && (O(R, !1), R.strm.avail_out === 0))
                return e;
            }
            return R.insert = 0, W === g ? (O(R, !0), R.strm.avail_out === 0 ? $ : D) : R.last_lit && (O(R, !1), R.strm.avail_out === 0) ? e : Z;
          }(b, L) : r[b.level].func(b, L);
          if (Q !== $ && Q !== D || (b.status = 666), Q === e || Q === $)
            return t.avail_out === 0 && (b.last_flush = -1), o;
          if (Q === Z && (L === 1 ? n._tr_align(b) : L !== 5 && (n._tr_stored_block(b, 0, 0, !1), L === 3 && (q(b.head), b.lookahead === 0 && (b.strstart = 0, b.block_start = 0, b.insert = 0))), G(t), t.avail_out === 0))
            return b.last_flush = -1, o;
        }
        return L !== g ? o : b.wrap <= 0 ? 1 : (b.wrap === 2 ? (nt(b, 255 & t.adler), nt(b, t.adler >> 8 & 255), nt(b, t.adler >> 16 & 255), nt(b, t.adler >> 24 & 255), nt(b, 255 & t.total_in), nt(b, t.total_in >> 8 & 255), nt(b, t.total_in >> 16 & 255), nt(b, t.total_in >> 24 & 255)) : (H(b, t.adler >>> 16), H(b, 65535 & t.adler)), G(t), 0 < b.wrap && (b.wrap = -b.wrap), b.pending !== 0 ? o : 1);
      }, c.deflateEnd = function(t) {
        var L;
        return t && t.state ? (L = t.state.status) !== E && L !== 69 && L !== 73 && L !== 91 && L !== 103 && L !== T && L !== 666 ? et(t, f) : (t.state = null, L === T ? et(t, -3) : o) : f;
      }, c.deflateSetDictionary = function(t, L) {
        var z, b, u, C, V, Q, R, W, X = L.length;
        if (!t || !t.state || (C = (z = t.state).wrap) === 2 || C === 1 && z.status !== E || z.lookahead)
          return f;
        for (C === 1 && (t.adler = l(t.adler, L, X, 0)), z.wrap = 0, X >= z.w_size && (C === 0 && (q(z.head), z.strstart = 0, z.block_start = 0, z.insert = 0), W = new s.Buf8(z.w_size), s.arraySet(W, L, X - z.w_size, z.w_size, 0), L = W, X = z.w_size), V = t.avail_in, Q = t.next_in, R = t.input, t.avail_in = X, t.next_in = 0, t.input = L, dt(z); z.lookahead >= N; ) {
          for (b = z.strstart, u = z.lookahead - (N - 1); z.ins_h = (z.ins_h << z.hash_shift ^ z.window[b + N - 1]) & z.hash_mask, z.prev[b & z.w_mask] = z.head[z.ins_h], z.head[z.ins_h] = b, b++, --u; )
            ;
          z.strstart = b, z.lookahead = N - 1, dt(z);
        }
        return z.strstart += z.lookahead, z.block_start = z.strstart, z.insert = z.lookahead, z.lookahead = 0, z.match_length = z.prev_length = N - 1, z.match_available = 0, t.next_in = Q, t.input = R, t.avail_in = V, z.wrap = C, o;
      }, c.deflateInfo = "pako deflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(i, y, c) {
      y.exports = function() {
        this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
      };
    }, {}], 48: [function(i, y, c) {
      y.exports = function(r, s) {
        var n, l, h, v, p, g, o, f, a, d, A, w, S, F, k, x, I, U, N, M, _, E, T, e, Z;
        n = r.state, l = r.next_in, e = r.input, h = l + (r.avail_in - 5), v = r.next_out, Z = r.output, p = v - (s - r.avail_out), g = v + (r.avail_out - 257), o = n.dmax, f = n.wsize, a = n.whave, d = n.wnext, A = n.window, w = n.hold, S = n.bits, F = n.lencode, k = n.distcode, x = (1 << n.lenbits) - 1, I = (1 << n.distbits) - 1;
        t:
          do {
            S < 15 && (w += e[l++] << S, S += 8, w += e[l++] << S, S += 8), U = F[w & x];
            e:
              for (; ; ) {
                if (w >>>= N = U >>> 24, S -= N, (N = U >>> 16 & 255) === 0)
                  Z[v++] = 65535 & U;
                else {
                  if (!(16 & N)) {
                    if (!(64 & N)) {
                      U = F[(65535 & U) + (w & (1 << N) - 1)];
                      continue e;
                    }
                    if (32 & N) {
                      n.mode = 12;
                      break t;
                    }
                    r.msg = "invalid literal/length code", n.mode = 30;
                    break t;
                  }
                  M = 65535 & U, (N &= 15) && (S < N && (w += e[l++] << S, S += 8), M += w & (1 << N) - 1, w >>>= N, S -= N), S < 15 && (w += e[l++] << S, S += 8, w += e[l++] << S, S += 8), U = k[w & I];
                  n:
                    for (; ; ) {
                      if (w >>>= N = U >>> 24, S -= N, !(16 & (N = U >>> 16 & 255))) {
                        if (!(64 & N)) {
                          U = k[(65535 & U) + (w & (1 << N) - 1)];
                          continue n;
                        }
                        r.msg = "invalid distance code", n.mode = 30;
                        break t;
                      }
                      if (_ = 65535 & U, S < (N &= 15) && (w += e[l++] << S, (S += 8) < N && (w += e[l++] << S, S += 8)), o < (_ += w & (1 << N) - 1)) {
                        r.msg = "invalid distance too far back", n.mode = 30;
                        break t;
                      }
                      if (w >>>= N, S -= N, (N = v - p) < _) {
                        if (a < (N = _ - N) && n.sane) {
                          r.msg = "invalid distance too far back", n.mode = 30;
                          break t;
                        }
                        if (T = A, (E = 0) === d) {
                          if (E += f - N, N < M) {
                            for (M -= N; Z[v++] = A[E++], --N; )
                              ;
                            E = v - _, T = Z;
                          }
                        } else if (d < N) {
                          if (E += f + d - N, (N -= d) < M) {
                            for (M -= N; Z[v++] = A[E++], --N; )
                              ;
                            if (E = 0, d < M) {
                              for (M -= N = d; Z[v++] = A[E++], --N; )
                                ;
                              E = v - _, T = Z;
                            }
                          }
                        } else if (E += d - N, N < M) {
                          for (M -= N; Z[v++] = A[E++], --N; )
                            ;
                          E = v - _, T = Z;
                        }
                        for (; 2 < M; )
                          Z[v++] = T[E++], Z[v++] = T[E++], Z[v++] = T[E++], M -= 3;
                        M && (Z[v++] = T[E++], 1 < M && (Z[v++] = T[E++]));
                      } else {
                        for (E = v - _; Z[v++] = Z[E++], Z[v++] = Z[E++], Z[v++] = Z[E++], 2 < (M -= 3); )
                          ;
                        M && (Z[v++] = Z[E++], 1 < M && (Z[v++] = Z[E++]));
                      }
                      break;
                    }
                }
                break;
              }
          } while (l < h && v < g);
        l -= M = S >> 3, w &= (1 << (S -= M << 3)) - 1, r.next_in = l, r.next_out = v, r.avail_in = l < h ? h - l + 5 : 5 - (l - h), r.avail_out = v < g ? g - v + 257 : 257 - (v - g), n.hold = w, n.bits = S;
      };
    }, {}], 49: [function(i, y, c) {
      var r = i("../utils/common"), s = i("./adler32"), n = i("./crc32"), l = i("./inffast"), h = i("./inftrees"), v = 1, p = 2, g = 0, o = -2, f = 1, a = 852, d = 592;
      function A(E) {
        return (E >>> 24 & 255) + (E >>> 8 & 65280) + ((65280 & E) << 8) + ((255 & E) << 24);
      }
      function w() {
        this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
      }
      function S(E) {
        var T;
        return E && E.state ? (T = E.state, E.total_in = E.total_out = T.total = 0, E.msg = "", T.wrap && (E.adler = 1 & T.wrap), T.mode = f, T.last = 0, T.havedict = 0, T.dmax = 32768, T.head = null, T.hold = 0, T.bits = 0, T.lencode = T.lendyn = new r.Buf32(a), T.distcode = T.distdyn = new r.Buf32(d), T.sane = 1, T.back = -1, g) : o;
      }
      function F(E) {
        var T;
        return E && E.state ? ((T = E.state).wsize = 0, T.whave = 0, T.wnext = 0, S(E)) : o;
      }
      function k(E, T) {
        var e, Z;
        return E && E.state ? (Z = E.state, T < 0 ? (e = 0, T = -T) : (e = 1 + (T >> 4), T < 48 && (T &= 15)), T && (T < 8 || 15 < T) ? o : (Z.window !== null && Z.wbits !== T && (Z.window = null), Z.wrap = e, Z.wbits = T, F(E))) : o;
      }
      function x(E, T) {
        var e, Z;
        return E ? (Z = new w(), (E.state = Z).window = null, (e = k(E, T)) !== g && (E.state = null), e) : o;
      }
      var I, U, N = !0;
      function M(E) {
        if (N) {
          var T;
          for (I = new r.Buf32(512), U = new r.Buf32(32), T = 0; T < 144; )
            E.lens[T++] = 8;
          for (; T < 256; )
            E.lens[T++] = 9;
          for (; T < 280; )
            E.lens[T++] = 7;
          for (; T < 288; )
            E.lens[T++] = 8;
          for (h(v, E.lens, 0, 288, I, 0, E.work, { bits: 9 }), T = 0; T < 32; )
            E.lens[T++] = 5;
          h(p, E.lens, 0, 32, U, 0, E.work, { bits: 5 }), N = !1;
        }
        E.lencode = I, E.lenbits = 9, E.distcode = U, E.distbits = 5;
      }
      function _(E, T, e, Z) {
        var $, D = E.state;
        return D.window === null && (D.wsize = 1 << D.wbits, D.wnext = 0, D.whave = 0, D.window = new r.Buf8(D.wsize)), Z >= D.wsize ? (r.arraySet(D.window, T, e - D.wsize, D.wsize, 0), D.wnext = 0, D.whave = D.wsize) : (Z < ($ = D.wsize - D.wnext) && ($ = Z), r.arraySet(D.window, T, e - Z, $, D.wnext), (Z -= $) ? (r.arraySet(D.window, T, e - Z, Z, 0), D.wnext = Z, D.whave = D.wsize) : (D.wnext += $, D.wnext === D.wsize && (D.wnext = 0), D.whave < D.wsize && (D.whave += $))), 0;
      }
      c.inflateReset = F, c.inflateReset2 = k, c.inflateResetKeep = S, c.inflateInit = function(E) {
        return x(E, 15);
      }, c.inflateInit2 = x, c.inflate = function(E, T) {
        var e, Z, $, D, et, J, q, G, O, nt, H, j, dt, ut, st, at, ft, ht, pt, At, t, L, z, b, u = 0, C = new r.Buf8(4), V = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
        if (!E || !E.state || !E.output || !E.input && E.avail_in !== 0)
          return o;
        (e = E.state).mode === 12 && (e.mode = 13), et = E.next_out, $ = E.output, q = E.avail_out, D = E.next_in, Z = E.input, J = E.avail_in, G = e.hold, O = e.bits, nt = J, H = q, L = g;
        t:
          for (; ; )
            switch (e.mode) {
              case f:
                if (e.wrap === 0) {
                  e.mode = 13;
                  break;
                }
                for (; O < 16; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                if (2 & e.wrap && G === 35615) {
                  C[e.check = 0] = 255 & G, C[1] = G >>> 8 & 255, e.check = n(e.check, C, 2, 0), O = G = 0, e.mode = 2;
                  break;
                }
                if (e.flags = 0, e.head && (e.head.done = !1), !(1 & e.wrap) || (((255 & G) << 8) + (G >> 8)) % 31) {
                  E.msg = "incorrect header check", e.mode = 30;
                  break;
                }
                if ((15 & G) != 8) {
                  E.msg = "unknown compression method", e.mode = 30;
                  break;
                }
                if (O -= 4, t = 8 + (15 & (G >>>= 4)), e.wbits === 0)
                  e.wbits = t;
                else if (t > e.wbits) {
                  E.msg = "invalid window size", e.mode = 30;
                  break;
                }
                e.dmax = 1 << t, E.adler = e.check = 1, e.mode = 512 & G ? 10 : 12, O = G = 0;
                break;
              case 2:
                for (; O < 16; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                if (e.flags = G, (255 & e.flags) != 8) {
                  E.msg = "unknown compression method", e.mode = 30;
                  break;
                }
                if (57344 & e.flags) {
                  E.msg = "unknown header flags set", e.mode = 30;
                  break;
                }
                e.head && (e.head.text = G >> 8 & 1), 512 & e.flags && (C[0] = 255 & G, C[1] = G >>> 8 & 255, e.check = n(e.check, C, 2, 0)), O = G = 0, e.mode = 3;
              case 3:
                for (; O < 32; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                e.head && (e.head.time = G), 512 & e.flags && (C[0] = 255 & G, C[1] = G >>> 8 & 255, C[2] = G >>> 16 & 255, C[3] = G >>> 24 & 255, e.check = n(e.check, C, 4, 0)), O = G = 0, e.mode = 4;
              case 4:
                for (; O < 16; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                e.head && (e.head.xflags = 255 & G, e.head.os = G >> 8), 512 & e.flags && (C[0] = 255 & G, C[1] = G >>> 8 & 255, e.check = n(e.check, C, 2, 0)), O = G = 0, e.mode = 5;
              case 5:
                if (1024 & e.flags) {
                  for (; O < 16; ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  e.length = G, e.head && (e.head.extra_len = G), 512 & e.flags && (C[0] = 255 & G, C[1] = G >>> 8 & 255, e.check = n(e.check, C, 2, 0)), O = G = 0;
                } else
                  e.head && (e.head.extra = null);
                e.mode = 6;
              case 6:
                if (1024 & e.flags && (J < (j = e.length) && (j = J), j && (e.head && (t = e.head.extra_len - e.length, e.head.extra || (e.head.extra = new Array(e.head.extra_len)), r.arraySet(e.head.extra, Z, D, j, t)), 512 & e.flags && (e.check = n(e.check, Z, j, D)), J -= j, D += j, e.length -= j), e.length))
                  break t;
                e.length = 0, e.mode = 7;
              case 7:
                if (2048 & e.flags) {
                  if (J === 0)
                    break t;
                  for (j = 0; t = Z[D + j++], e.head && t && e.length < 65536 && (e.head.name += String.fromCharCode(t)), t && j < J; )
                    ;
                  if (512 & e.flags && (e.check = n(e.check, Z, j, D)), J -= j, D += j, t)
                    break t;
                } else
                  e.head && (e.head.name = null);
                e.length = 0, e.mode = 8;
              case 8:
                if (4096 & e.flags) {
                  if (J === 0)
                    break t;
                  for (j = 0; t = Z[D + j++], e.head && t && e.length < 65536 && (e.head.comment += String.fromCharCode(t)), t && j < J; )
                    ;
                  if (512 & e.flags && (e.check = n(e.check, Z, j, D)), J -= j, D += j, t)
                    break t;
                } else
                  e.head && (e.head.comment = null);
                e.mode = 9;
              case 9:
                if (512 & e.flags) {
                  for (; O < 16; ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  if (G !== (65535 & e.check)) {
                    E.msg = "header crc mismatch", e.mode = 30;
                    break;
                  }
                  O = G = 0;
                }
                e.head && (e.head.hcrc = e.flags >> 9 & 1, e.head.done = !0), E.adler = e.check = 0, e.mode = 12;
                break;
              case 10:
                for (; O < 32; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                E.adler = e.check = A(G), O = G = 0, e.mode = 11;
              case 11:
                if (e.havedict === 0)
                  return E.next_out = et, E.avail_out = q, E.next_in = D, E.avail_in = J, e.hold = G, e.bits = O, 2;
                E.adler = e.check = 1, e.mode = 12;
              case 12:
                if (T === 5 || T === 6)
                  break t;
              case 13:
                if (e.last) {
                  G >>>= 7 & O, O -= 7 & O, e.mode = 27;
                  break;
                }
                for (; O < 3; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                switch (e.last = 1 & G, O -= 1, 3 & (G >>>= 1)) {
                  case 0:
                    e.mode = 14;
                    break;
                  case 1:
                    if (M(e), e.mode = 20, T !== 6)
                      break;
                    G >>>= 2, O -= 2;
                    break t;
                  case 2:
                    e.mode = 17;
                    break;
                  case 3:
                    E.msg = "invalid block type", e.mode = 30;
                }
                G >>>= 2, O -= 2;
                break;
              case 14:
                for (G >>>= 7 & O, O -= 7 & O; O < 32; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                if ((65535 & G) != (G >>> 16 ^ 65535)) {
                  E.msg = "invalid stored block lengths", e.mode = 30;
                  break;
                }
                if (e.length = 65535 & G, O = G = 0, e.mode = 15, T === 6)
                  break t;
              case 15:
                e.mode = 16;
              case 16:
                if (j = e.length) {
                  if (J < j && (j = J), q < j && (j = q), j === 0)
                    break t;
                  r.arraySet($, Z, D, j, et), J -= j, D += j, q -= j, et += j, e.length -= j;
                  break;
                }
                e.mode = 12;
                break;
              case 17:
                for (; O < 14; ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                if (e.nlen = 257 + (31 & G), G >>>= 5, O -= 5, e.ndist = 1 + (31 & G), G >>>= 5, O -= 5, e.ncode = 4 + (15 & G), G >>>= 4, O -= 4, 286 < e.nlen || 30 < e.ndist) {
                  E.msg = "too many length or distance symbols", e.mode = 30;
                  break;
                }
                e.have = 0, e.mode = 18;
              case 18:
                for (; e.have < e.ncode; ) {
                  for (; O < 3; ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  e.lens[V[e.have++]] = 7 & G, G >>>= 3, O -= 3;
                }
                for (; e.have < 19; )
                  e.lens[V[e.have++]] = 0;
                if (e.lencode = e.lendyn, e.lenbits = 7, z = { bits: e.lenbits }, L = h(0, e.lens, 0, 19, e.lencode, 0, e.work, z), e.lenbits = z.bits, L) {
                  E.msg = "invalid code lengths set", e.mode = 30;
                  break;
                }
                e.have = 0, e.mode = 19;
              case 19:
                for (; e.have < e.nlen + e.ndist; ) {
                  for (; at = (u = e.lencode[G & (1 << e.lenbits) - 1]) >>> 16 & 255, ft = 65535 & u, !((st = u >>> 24) <= O); ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  if (ft < 16)
                    G >>>= st, O -= st, e.lens[e.have++] = ft;
                  else {
                    if (ft === 16) {
                      for (b = st + 2; O < b; ) {
                        if (J === 0)
                          break t;
                        J--, G += Z[D++] << O, O += 8;
                      }
                      if (G >>>= st, O -= st, e.have === 0) {
                        E.msg = "invalid bit length repeat", e.mode = 30;
                        break;
                      }
                      t = e.lens[e.have - 1], j = 3 + (3 & G), G >>>= 2, O -= 2;
                    } else if (ft === 17) {
                      for (b = st + 3; O < b; ) {
                        if (J === 0)
                          break t;
                        J--, G += Z[D++] << O, O += 8;
                      }
                      O -= st, t = 0, j = 3 + (7 & (G >>>= st)), G >>>= 3, O -= 3;
                    } else {
                      for (b = st + 7; O < b; ) {
                        if (J === 0)
                          break t;
                        J--, G += Z[D++] << O, O += 8;
                      }
                      O -= st, t = 0, j = 11 + (127 & (G >>>= st)), G >>>= 7, O -= 7;
                    }
                    if (e.have + j > e.nlen + e.ndist) {
                      E.msg = "invalid bit length repeat", e.mode = 30;
                      break;
                    }
                    for (; j--; )
                      e.lens[e.have++] = t;
                  }
                }
                if (e.mode === 30)
                  break;
                if (e.lens[256] === 0) {
                  E.msg = "invalid code -- missing end-of-block", e.mode = 30;
                  break;
                }
                if (e.lenbits = 9, z = { bits: e.lenbits }, L = h(v, e.lens, 0, e.nlen, e.lencode, 0, e.work, z), e.lenbits = z.bits, L) {
                  E.msg = "invalid literal/lengths set", e.mode = 30;
                  break;
                }
                if (e.distbits = 6, e.distcode = e.distdyn, z = { bits: e.distbits }, L = h(p, e.lens, e.nlen, e.ndist, e.distcode, 0, e.work, z), e.distbits = z.bits, L) {
                  E.msg = "invalid distances set", e.mode = 30;
                  break;
                }
                if (e.mode = 20, T === 6)
                  break t;
              case 20:
                e.mode = 21;
              case 21:
                if (6 <= J && 258 <= q) {
                  E.next_out = et, E.avail_out = q, E.next_in = D, E.avail_in = J, e.hold = G, e.bits = O, l(E, H), et = E.next_out, $ = E.output, q = E.avail_out, D = E.next_in, Z = E.input, J = E.avail_in, G = e.hold, O = e.bits, e.mode === 12 && (e.back = -1);
                  break;
                }
                for (e.back = 0; at = (u = e.lencode[G & (1 << e.lenbits) - 1]) >>> 16 & 255, ft = 65535 & u, !((st = u >>> 24) <= O); ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                if (at && !(240 & at)) {
                  for (ht = st, pt = at, At = ft; at = (u = e.lencode[At + ((G & (1 << ht + pt) - 1) >> ht)]) >>> 16 & 255, ft = 65535 & u, !(ht + (st = u >>> 24) <= O); ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  G >>>= ht, O -= ht, e.back += ht;
                }
                if (G >>>= st, O -= st, e.back += st, e.length = ft, at === 0) {
                  e.mode = 26;
                  break;
                }
                if (32 & at) {
                  e.back = -1, e.mode = 12;
                  break;
                }
                if (64 & at) {
                  E.msg = "invalid literal/length code", e.mode = 30;
                  break;
                }
                e.extra = 15 & at, e.mode = 22;
              case 22:
                if (e.extra) {
                  for (b = e.extra; O < b; ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  e.length += G & (1 << e.extra) - 1, G >>>= e.extra, O -= e.extra, e.back += e.extra;
                }
                e.was = e.length, e.mode = 23;
              case 23:
                for (; at = (u = e.distcode[G & (1 << e.distbits) - 1]) >>> 16 & 255, ft = 65535 & u, !((st = u >>> 24) <= O); ) {
                  if (J === 0)
                    break t;
                  J--, G += Z[D++] << O, O += 8;
                }
                if (!(240 & at)) {
                  for (ht = st, pt = at, At = ft; at = (u = e.distcode[At + ((G & (1 << ht + pt) - 1) >> ht)]) >>> 16 & 255, ft = 65535 & u, !(ht + (st = u >>> 24) <= O); ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  G >>>= ht, O -= ht, e.back += ht;
                }
                if (G >>>= st, O -= st, e.back += st, 64 & at) {
                  E.msg = "invalid distance code", e.mode = 30;
                  break;
                }
                e.offset = ft, e.extra = 15 & at, e.mode = 24;
              case 24:
                if (e.extra) {
                  for (b = e.extra; O < b; ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  e.offset += G & (1 << e.extra) - 1, G >>>= e.extra, O -= e.extra, e.back += e.extra;
                }
                if (e.offset > e.dmax) {
                  E.msg = "invalid distance too far back", e.mode = 30;
                  break;
                }
                e.mode = 25;
              case 25:
                if (q === 0)
                  break t;
                if (j = H - q, e.offset > j) {
                  if ((j = e.offset - j) > e.whave && e.sane) {
                    E.msg = "invalid distance too far back", e.mode = 30;
                    break;
                  }
                  dt = j > e.wnext ? (j -= e.wnext, e.wsize - j) : e.wnext - j, j > e.length && (j = e.length), ut = e.window;
                } else
                  ut = $, dt = et - e.offset, j = e.length;
                for (q < j && (j = q), q -= j, e.length -= j; $[et++] = ut[dt++], --j; )
                  ;
                e.length === 0 && (e.mode = 21);
                break;
              case 26:
                if (q === 0)
                  break t;
                $[et++] = e.length, q--, e.mode = 21;
                break;
              case 27:
                if (e.wrap) {
                  for (; O < 32; ) {
                    if (J === 0)
                      break t;
                    J--, G |= Z[D++] << O, O += 8;
                  }
                  if (H -= q, E.total_out += H, e.total += H, H && (E.adler = e.check = e.flags ? n(e.check, $, H, et - H) : s(e.check, $, H, et - H)), H = q, (e.flags ? G : A(G)) !== e.check) {
                    E.msg = "incorrect data check", e.mode = 30;
                    break;
                  }
                  O = G = 0;
                }
                e.mode = 28;
              case 28:
                if (e.wrap && e.flags) {
                  for (; O < 32; ) {
                    if (J === 0)
                      break t;
                    J--, G += Z[D++] << O, O += 8;
                  }
                  if (G !== (4294967295 & e.total)) {
                    E.msg = "incorrect length check", e.mode = 30;
                    break;
                  }
                  O = G = 0;
                }
                e.mode = 29;
              case 29:
                L = 1;
                break t;
              case 30:
                L = -3;
                break t;
              case 31:
                return -4;
              case 32:
              default:
                return o;
            }
        return E.next_out = et, E.avail_out = q, E.next_in = D, E.avail_in = J, e.hold = G, e.bits = O, (e.wsize || H !== E.avail_out && e.mode < 30 && (e.mode < 27 || T !== 4)) && _(E, E.output, E.next_out, H - E.avail_out) ? (e.mode = 31, -4) : (nt -= E.avail_in, H -= E.avail_out, E.total_in += nt, E.total_out += H, e.total += H, e.wrap && H && (E.adler = e.check = e.flags ? n(e.check, $, H, E.next_out - H) : s(e.check, $, H, E.next_out - H)), E.data_type = e.bits + (e.last ? 64 : 0) + (e.mode === 12 ? 128 : 0) + (e.mode === 20 || e.mode === 15 ? 256 : 0), (nt == 0 && H === 0 || T === 4) && L === g && (L = -5), L);
      }, c.inflateEnd = function(E) {
        if (!E || !E.state)
          return o;
        var T = E.state;
        return T.window && (T.window = null), E.state = null, g;
      }, c.inflateGetHeader = function(E, T) {
        var e;
        return E && E.state && 2 & (e = E.state).wrap ? ((e.head = T).done = !1, g) : o;
      }, c.inflateSetDictionary = function(E, T) {
        var e, Z = T.length;
        return E && E.state ? (e = E.state).wrap !== 0 && e.mode !== 11 ? o : e.mode === 11 && s(1, T, Z, 0) !== e.check ? -3 : _(E, T, Z, Z) ? (e.mode = 31, -4) : (e.havedict = 1, g) : o;
      }, c.inflateInfo = "pako inflate (from Nodeca project)";
    }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(i, y, c) {
      var r = i("../utils/common"), s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], n = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], l = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], h = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
      y.exports = function(v, p, g, o, f, a, d, A) {
        var w, S, F, k, x, I, U, N, M, _ = A.bits, E = 0, T = 0, e = 0, Z = 0, $ = 0, D = 0, et = 0, J = 0, q = 0, G = 0, O = null, nt = 0, H = new r.Buf16(16), j = new r.Buf16(16), dt = null, ut = 0;
        for (E = 0; E <= 15; E++)
          H[E] = 0;
        for (T = 0; T < o; T++)
          H[p[g + T]]++;
        for ($ = _, Z = 15; 1 <= Z && H[Z] === 0; Z--)
          ;
        if (Z < $ && ($ = Z), Z === 0)
          return f[a++] = 20971520, f[a++] = 20971520, A.bits = 1, 0;
        for (e = 1; e < Z && H[e] === 0; e++)
          ;
        for ($ < e && ($ = e), E = J = 1; E <= 15; E++)
          if (J <<= 1, (J -= H[E]) < 0)
            return -1;
        if (0 < J && (v === 0 || Z !== 1))
          return -1;
        for (j[1] = 0, E = 1; E < 15; E++)
          j[E + 1] = j[E] + H[E];
        for (T = 0; T < o; T++)
          p[g + T] !== 0 && (d[j[p[g + T]]++] = T);
        if (I = v === 0 ? (O = dt = d, 19) : v === 1 ? (O = s, nt -= 257, dt = n, ut -= 257, 256) : (O = l, dt = h, -1), E = e, x = a, et = T = G = 0, F = -1, k = (q = 1 << (D = $)) - 1, v === 1 && 852 < q || v === 2 && 592 < q)
          return 1;
        for (; ; ) {
          for (U = E - et, M = d[T] < I ? (N = 0, d[T]) : d[T] > I ? (N = dt[ut + d[T]], O[nt + d[T]]) : (N = 96, 0), w = 1 << E - et, e = S = 1 << D; f[x + (G >> et) + (S -= w)] = U << 24 | N << 16 | M | 0, S !== 0; )
            ;
          for (w = 1 << E - 1; G & w; )
            w >>= 1;
          if (w !== 0 ? (G &= w - 1, G += w) : G = 0, T++, --H[E] == 0) {
            if (E === Z)
              break;
            E = p[g + d[T]];
          }
          if ($ < E && (G & k) !== F) {
            for (et === 0 && (et = $), x += e, J = 1 << (D = E - et); D + et < Z && !((J -= H[D + et]) <= 0); )
              D++, J <<= 1;
            if (q += 1 << D, v === 1 && 852 < q || v === 2 && 592 < q)
              return 1;
            f[F = G & k] = $ << 24 | D << 16 | x - a | 0;
          }
        }
        return G !== 0 && (f[x + G] = E - et << 24 | 64 << 16 | 0), A.bits = $, 0;
      };
    }, { "../utils/common": 41 }], 51: [function(i, y, c) {
      y.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
    }, {}], 52: [function(i, y, c) {
      var r = i("../utils/common"), s = 0, n = 1;
      function l(u) {
        for (var C = u.length; 0 <= --C; )
          u[C] = 0;
      }
      var h = 0, v = 29, p = 256, g = p + 1 + v, o = 30, f = 19, a = 2 * g + 1, d = 15, A = 16, w = 7, S = 256, F = 16, k = 17, x = 18, I = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], U = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], N = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], _ = new Array(2 * (g + 2));
      l(_);
      var E = new Array(2 * o);
      l(E);
      var T = new Array(512);
      l(T);
      var e = new Array(256);
      l(e);
      var Z = new Array(v);
      l(Z);
      var $, D, et, J = new Array(o);
      function q(u, C, V, Q, R) {
        this.static_tree = u, this.extra_bits = C, this.extra_base = V, this.elems = Q, this.max_length = R, this.has_stree = u && u.length;
      }
      function G(u, C) {
        this.dyn_tree = u, this.max_code = 0, this.stat_desc = C;
      }
      function O(u) {
        return u < 256 ? T[u] : T[256 + (u >>> 7)];
      }
      function nt(u, C) {
        u.pending_buf[u.pending++] = 255 & C, u.pending_buf[u.pending++] = C >>> 8 & 255;
      }
      function H(u, C, V) {
        u.bi_valid > A - V ? (u.bi_buf |= C << u.bi_valid & 65535, nt(u, u.bi_buf), u.bi_buf = C >> A - u.bi_valid, u.bi_valid += V - A) : (u.bi_buf |= C << u.bi_valid & 65535, u.bi_valid += V);
      }
      function j(u, C, V) {
        H(u, V[2 * C], V[2 * C + 1]);
      }
      function dt(u, C) {
        for (var V = 0; V |= 1 & u, u >>>= 1, V <<= 1, 0 < --C; )
          ;
        return V >>> 1;
      }
      function ut(u, C, V) {
        var Q, R, W = new Array(d + 1), X = 0;
        for (Q = 1; Q <= d; Q++)
          W[Q] = X = X + V[Q - 1] << 1;
        for (R = 0; R <= C; R++) {
          var Y = u[2 * R + 1];
          Y !== 0 && (u[2 * R] = dt(W[Y]++, Y));
        }
      }
      function st(u) {
        var C;
        for (C = 0; C < g; C++)
          u.dyn_ltree[2 * C] = 0;
        for (C = 0; C < o; C++)
          u.dyn_dtree[2 * C] = 0;
        for (C = 0; C < f; C++)
          u.bl_tree[2 * C] = 0;
        u.dyn_ltree[2 * S] = 1, u.opt_len = u.static_len = 0, u.last_lit = u.matches = 0;
      }
      function at(u) {
        8 < u.bi_valid ? nt(u, u.bi_buf) : 0 < u.bi_valid && (u.pending_buf[u.pending++] = u.bi_buf), u.bi_buf = 0, u.bi_valid = 0;
      }
      function ft(u, C, V, Q) {
        var R = 2 * C, W = 2 * V;
        return u[R] < u[W] || u[R] === u[W] && Q[C] <= Q[V];
      }
      function ht(u, C, V) {
        for (var Q = u.heap[V], R = V << 1; R <= u.heap_len && (R < u.heap_len && ft(C, u.heap[R + 1], u.heap[R], u.depth) && R++, !ft(C, Q, u.heap[R], u.depth)); )
          u.heap[V] = u.heap[R], V = R, R <<= 1;
        u.heap[V] = Q;
      }
      function pt(u, C, V) {
        var Q, R, W, X, Y = 0;
        if (u.last_lit !== 0)
          for (; Q = u.pending_buf[u.d_buf + 2 * Y] << 8 | u.pending_buf[u.d_buf + 2 * Y + 1], R = u.pending_buf[u.l_buf + Y], Y++, Q === 0 ? j(u, R, C) : (j(u, (W = e[R]) + p + 1, C), (X = I[W]) !== 0 && H(u, R -= Z[W], X), j(u, W = O(--Q), V), (X = U[W]) !== 0 && H(u, Q -= J[W], X)), Y < u.last_lit; )
            ;
        j(u, S, C);
      }
      function At(u, C) {
        var V, Q, R, W = C.dyn_tree, X = C.stat_desc.static_tree, Y = C.stat_desc.has_stree, rt = C.stat_desc.elems, lt = -1;
        for (u.heap_len = 0, u.heap_max = a, V = 0; V < rt; V++)
          W[2 * V] !== 0 ? (u.heap[++u.heap_len] = lt = V, u.depth[V] = 0) : W[2 * V + 1] = 0;
        for (; u.heap_len < 2; )
          W[2 * (R = u.heap[++u.heap_len] = lt < 2 ? ++lt : 0)] = 1, u.depth[R] = 0, u.opt_len--, Y && (u.static_len -= X[2 * R + 1]);
        for (C.max_code = lt, V = u.heap_len >> 1; 1 <= V; V--)
          ht(u, W, V);
        for (R = rt; V = u.heap[1], u.heap[1] = u.heap[u.heap_len--], ht(u, W, 1), Q = u.heap[1], u.heap[--u.heap_max] = V, u.heap[--u.heap_max] = Q, W[2 * R] = W[2 * V] + W[2 * Q], u.depth[R] = (u.depth[V] >= u.depth[Q] ? u.depth[V] : u.depth[Q]) + 1, W[2 * V + 1] = W[2 * Q + 1] = R, u.heap[1] = R++, ht(u, W, 1), 2 <= u.heap_len; )
          ;
        u.heap[--u.heap_max] = u.heap[1], function(ot, tt) {
          var gt, yt, wt, mt, Ot, Vt, It = tt.dyn_tree, Wt = tt.max_code, pe = tt.stat_desc.static_tree, me = tt.stat_desc.has_stree, ge = tt.stat_desc.extra_bits, Yt = tt.stat_desc.extra_base, Bt = tt.stat_desc.max_length, Gt = 0;
          for (mt = 0; mt <= d; mt++)
            ot.bl_count[mt] = 0;
          for (It[2 * ot.heap[ot.heap_max] + 1] = 0, gt = ot.heap_max + 1; gt < a; gt++)
            Bt < (mt = It[2 * It[2 * (yt = ot.heap[gt]) + 1] + 1] + 1) && (mt = Bt, Gt++), It[2 * yt + 1] = mt, Wt < yt || (ot.bl_count[mt]++, Ot = 0, Yt <= yt && (Ot = ge[yt - Yt]), Vt = It[2 * yt], ot.opt_len += Vt * (mt + Ot), me && (ot.static_len += Vt * (pe[2 * yt + 1] + Ot)));
          if (Gt !== 0) {
            do {
              for (mt = Bt - 1; ot.bl_count[mt] === 0; )
                mt--;
              ot.bl_count[mt]--, ot.bl_count[mt + 1] += 2, ot.bl_count[Bt]--, Gt -= 2;
            } while (0 < Gt);
            for (mt = Bt; mt !== 0; mt--)
              for (yt = ot.bl_count[mt]; yt !== 0; )
                Wt < (wt = ot.heap[--gt]) || (It[2 * wt + 1] !== mt && (ot.opt_len += (mt - It[2 * wt + 1]) * It[2 * wt], It[2 * wt + 1] = mt), yt--);
          }
        }(u, C), ut(W, lt, u.bl_count);
      }
      function t(u, C, V) {
        var Q, R, W = -1, X = C[1], Y = 0, rt = 7, lt = 4;
        for (X === 0 && (rt = 138, lt = 3), C[2 * (V + 1) + 1] = 65535, Q = 0; Q <= V; Q++)
          R = X, X = C[2 * (Q + 1) + 1], ++Y < rt && R === X || (Y < lt ? u.bl_tree[2 * R] += Y : R !== 0 ? (R !== W && u.bl_tree[2 * R]++, u.bl_tree[2 * F]++) : Y <= 10 ? u.bl_tree[2 * k]++ : u.bl_tree[2 * x]++, W = R, lt = (Y = 0) === X ? (rt = 138, 3) : R === X ? (rt = 6, 3) : (rt = 7, 4));
      }
      function L(u, C, V) {
        var Q, R, W = -1, X = C[1], Y = 0, rt = 7, lt = 4;
        for (X === 0 && (rt = 138, lt = 3), Q = 0; Q <= V; Q++)
          if (R = X, X = C[2 * (Q + 1) + 1], !(++Y < rt && R === X)) {
            if (Y < lt)
              for (; j(u, R, u.bl_tree), --Y != 0; )
                ;
            else
              R !== 0 ? (R !== W && (j(u, R, u.bl_tree), Y--), j(u, F, u.bl_tree), H(u, Y - 3, 2)) : Y <= 10 ? (j(u, k, u.bl_tree), H(u, Y - 3, 3)) : (j(u, x, u.bl_tree), H(u, Y - 11, 7));
            W = R, lt = (Y = 0) === X ? (rt = 138, 3) : R === X ? (rt = 6, 3) : (rt = 7, 4);
          }
      }
      l(J);
      var z = !1;
      function b(u, C, V, Q) {
        H(u, (h << 1) + (Q ? 1 : 0), 3), function(R, W, X, Y) {
          at(R), Y && (nt(R, X), nt(R, ~X)), r.arraySet(R.pending_buf, R.window, W, X, R.pending), R.pending += X;
        }(u, C, V, !0);
      }
      c._tr_init = function(u) {
        z || (function() {
          var C, V, Q, R, W, X = new Array(d + 1);
          for (R = Q = 0; R < v - 1; R++)
            for (Z[R] = Q, C = 0; C < 1 << I[R]; C++)
              e[Q++] = R;
          for (e[Q - 1] = R, R = W = 0; R < 16; R++)
            for (J[R] = W, C = 0; C < 1 << U[R]; C++)
              T[W++] = R;
          for (W >>= 7; R < o; R++)
            for (J[R] = W << 7, C = 0; C < 1 << U[R] - 7; C++)
              T[256 + W++] = R;
          for (V = 0; V <= d; V++)
            X[V] = 0;
          for (C = 0; C <= 143; )
            _[2 * C + 1] = 8, C++, X[8]++;
          for (; C <= 255; )
            _[2 * C + 1] = 9, C++, X[9]++;
          for (; C <= 279; )
            _[2 * C + 1] = 7, C++, X[7]++;
          for (; C <= 287; )
            _[2 * C + 1] = 8, C++, X[8]++;
          for (ut(_, g + 1, X), C = 0; C < o; C++)
            E[2 * C + 1] = 5, E[2 * C] = dt(C, 5);
          $ = new q(_, I, p + 1, g, d), D = new q(E, U, 0, o, d), et = new q(new Array(0), N, 0, f, w);
        }(), z = !0), u.l_desc = new G(u.dyn_ltree, $), u.d_desc = new G(u.dyn_dtree, D), u.bl_desc = new G(u.bl_tree, et), u.bi_buf = 0, u.bi_valid = 0, st(u);
      }, c._tr_stored_block = b, c._tr_flush_block = function(u, C, V, Q) {
        var R, W, X = 0;
        0 < u.level ? (u.strm.data_type === 2 && (u.strm.data_type = function(Y) {
          var rt, lt = 4093624447;
          for (rt = 0; rt <= 31; rt++, lt >>>= 1)
            if (1 & lt && Y.dyn_ltree[2 * rt] !== 0)
              return s;
          if (Y.dyn_ltree[18] !== 0 || Y.dyn_ltree[20] !== 0 || Y.dyn_ltree[26] !== 0)
            return n;
          for (rt = 32; rt < p; rt++)
            if (Y.dyn_ltree[2 * rt] !== 0)
              return n;
          return s;
        }(u)), At(u, u.l_desc), At(u, u.d_desc), X = function(Y) {
          var rt;
          for (t(Y, Y.dyn_ltree, Y.l_desc.max_code), t(Y, Y.dyn_dtree, Y.d_desc.max_code), At(Y, Y.bl_desc), rt = f - 1; 3 <= rt && Y.bl_tree[2 * M[rt] + 1] === 0; rt--)
            ;
          return Y.opt_len += 3 * (rt + 1) + 5 + 5 + 4, rt;
        }(u), R = u.opt_len + 3 + 7 >>> 3, (W = u.static_len + 3 + 7 >>> 3) <= R && (R = W)) : R = W = V + 5, V + 4 <= R && C !== -1 ? b(u, C, V, Q) : u.strategy === 4 || W === R ? (H(u, 2 + (Q ? 1 : 0), 3), pt(u, _, E)) : (H(u, 4 + (Q ? 1 : 0), 3), function(Y, rt, lt, ot) {
          var tt;
          for (H(Y, rt - 257, 5), H(Y, lt - 1, 5), H(Y, ot - 4, 4), tt = 0; tt < ot; tt++)
            H(Y, Y.bl_tree[2 * M[tt] + 1], 3);
          L(Y, Y.dyn_ltree, rt - 1), L(Y, Y.dyn_dtree, lt - 1);
        }(u, u.l_desc.max_code + 1, u.d_desc.max_code + 1, X + 1), pt(u, u.dyn_ltree, u.dyn_dtree)), st(u), Q && at(u);
      }, c._tr_tally = function(u, C, V) {
        return u.pending_buf[u.d_buf + 2 * u.last_lit] = C >>> 8 & 255, u.pending_buf[u.d_buf + 2 * u.last_lit + 1] = 255 & C, u.pending_buf[u.l_buf + u.last_lit] = 255 & V, u.last_lit++, C === 0 ? u.dyn_ltree[2 * V]++ : (u.matches++, C--, u.dyn_ltree[2 * (e[V] + p + 1)]++, u.dyn_dtree[2 * O(C)]++), u.last_lit === u.lit_bufsize - 1;
      }, c._tr_align = function(u) {
        H(u, 2, 3), j(u, S, _), function(C) {
          C.bi_valid === 16 ? (nt(C, C.bi_buf), C.bi_buf = 0, C.bi_valid = 0) : 8 <= C.bi_valid && (C.pending_buf[C.pending++] = 255 & C.bi_buf, C.bi_buf >>= 8, C.bi_valid -= 8);
        }(u);
      };
    }, { "../utils/common": 41 }], 53: [function(i, y, c) {
      y.exports = function() {
        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
      };
    }, {}], 54: [function(i, y, c) {
      (function(r) {
        (function(s, n) {
          if (!s.setImmediate) {
            var l, h, v, p, g = 1, o = {}, f = !1, a = s.document, d = Object.getPrototypeOf && Object.getPrototypeOf(s);
            d = d && d.setTimeout ? d : s, l = {}.toString.call(s.process) === "[object process]" ? function(F) {
              process.nextTick(function() {
                w(F);
              });
            } : function() {
              if (s.postMessage && !s.importScripts) {
                var F = !0, k = s.onmessage;
                return s.onmessage = function() {
                  F = !1;
                }, s.postMessage("", "*"), s.onmessage = k, F;
              }
            }() ? (p = "setImmediate$" + Math.random() + "$", s.addEventListener ? s.addEventListener("message", S, !1) : s.attachEvent("onmessage", S), function(F) {
              s.postMessage(p + F, "*");
            }) : s.MessageChannel ? ((v = new MessageChannel()).port1.onmessage = function(F) {
              w(F.data);
            }, function(F) {
              v.port2.postMessage(F);
            }) : a && "onreadystatechange" in a.createElement("script") ? (h = a.documentElement, function(F) {
              var k = a.createElement("script");
              k.onreadystatechange = function() {
                w(F), k.onreadystatechange = null, h.removeChild(k), k = null;
              }, h.appendChild(k);
            }) : function(F) {
              setTimeout(w, 0, F);
            }, d.setImmediate = function(F) {
              typeof F != "function" && (F = new Function("" + F));
              for (var k = new Array(arguments.length - 1), x = 0; x < k.length; x++)
                k[x] = arguments[x + 1];
              var I = { callback: F, args: k };
              return o[g] = I, l(g), g++;
            }, d.clearImmediate = A;
          }
          function A(F) {
            delete o[F];
          }
          function w(F) {
            if (f)
              setTimeout(w, 0, F);
            else {
              var k = o[F];
              if (k) {
                f = !0;
                try {
                  (function(x) {
                    var I = x.callback, U = x.args;
                    switch (U.length) {
                      case 0:
                        I();
                        break;
                      case 1:
                        I(U[0]);
                        break;
                      case 2:
                        I(U[0], U[1]);
                        break;
                      case 3:
                        I(U[0], U[1], U[2]);
                        break;
                      default:
                        I.apply(n, U);
                    }
                  })(k);
                } finally {
                  A(F), f = !1;
                }
              }
            }
          }
          function S(F) {
            F.source === s && typeof F.data == "string" && F.data.indexOf(p) === 0 && w(+F.data.slice(p.length));
          }
        })(typeof self > "u" ? r === void 0 ? this : r : self);
      }).call(this, typeof St < "u" ? St : typeof self < "u" ? self : typeof window < "u" ? window : {});
    }, {}] }, {}, [10])(10);
  });
})(le);
const Ge = le.exports;
var ce = { exports: {} };
(function(B, m) {
  (function(i, y) {
    y();
  })(St, function() {
    function i(h, v) {
      return typeof v > "u" ? v = { autoBom: !1 } : typeof v != "object" && (console.warn("Deprecated: Expected third argument to be a object"), v = { autoBom: !v }), v.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(h.type) ? new Blob(["\uFEFF", h], { type: h.type }) : h;
    }
    function y(h, v, p) {
      var g = new XMLHttpRequest();
      g.open("GET", h), g.responseType = "blob", g.onload = function() {
        l(g.response, v, p);
      }, g.onerror = function() {
        console.error("could not download file");
      }, g.send();
    }
    function c(h) {
      var v = new XMLHttpRequest();
      v.open("HEAD", h, !1);
      try {
        v.send();
      } catch {
      }
      return 200 <= v.status && 299 >= v.status;
    }
    function r(h) {
      try {
        h.dispatchEvent(new MouseEvent("click"));
      } catch {
        var v = document.createEvent("MouseEvents");
        v.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), h.dispatchEvent(v);
      }
    }
    var s = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof St == "object" && St.global === St ? St : void 0, n = s.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), l = s.saveAs || (typeof window != "object" || window !== s ? function() {
    } : "download" in HTMLAnchorElement.prototype && !n ? function(h, v, p) {
      var g = s.URL || s.webkitURL, o = document.createElement("a");
      v = v || h.name || "download", o.download = v, o.rel = "noopener", typeof h == "string" ? (o.href = h, o.origin === location.origin ? r(o) : c(o.href) ? y(h, v, p) : r(o, o.target = "_blank")) : (o.href = g.createObjectURL(h), setTimeout(function() {
        g.revokeObjectURL(o.href);
      }, 4e4), setTimeout(function() {
        r(o);
      }, 0));
    } : "msSaveOrOpenBlob" in navigator ? function(h, v, p) {
      if (v = v || h.name || "download", typeof h != "string")
        navigator.msSaveOrOpenBlob(i(h, p), v);
      else if (c(h))
        y(h, v, p);
      else {
        var g = document.createElement("a");
        g.href = h, g.target = "_blank", setTimeout(function() {
          r(g);
        });
      }
    } : function(h, v, p, g) {
      if (g = g || open("", "_blank"), g && (g.document.title = g.document.body.innerText = "downloading..."), typeof h == "string")
        return y(h, v, p);
      var o = h.type === "application/octet-stream", f = /constructor/i.test(s.HTMLElement) || s.safari, a = /CriOS\/[\d]+/.test(navigator.userAgent);
      if ((a || o && f || n) && typeof FileReader < "u") {
        var d = new FileReader();
        d.onloadend = function() {
          var S = d.result;
          S = a ? S : S.replace(/^data:[^;]*;/, "data:attachment/file;"), g ? g.location.href = S : location = S, g = null;
        }, d.readAsDataURL(h);
      } else {
        var A = s.URL || s.webkitURL, w = A.createObjectURL(h);
        g ? g.location = w : location.href = w, g = null, setTimeout(function() {
          A.revokeObjectURL(w);
        }, 4e4);
      }
    });
    s.saveAs = l.saveAs = l, B.exports = l;
  });
})(ce);
const ze = ce.exports;
function Ae(B) {
  for (var m = window.atob(B), i = m.length, y = new Uint8Array(i), c = 0; c < i; c++)
    y[c] = m.charCodeAt(c);
  return y.buffer;
}
const Te = `#!/bin/sh

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
APP_HOME=$( cd "\${APP_HOME:-./}" && pwd -P ) || exit

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
    which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi

# Increase the maximum file descriptors if we can.
if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC3045
        MAX_FD=$( ulimit -H -n ) ||
            warn "Could not query maximum file descriptor limit"
    esac
    case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC3045
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

# Collect all arguments for the java command;
#   * $DEFAULT_JVM_OPTS, $JAVA_OPTS, and $GRADLE_OPTS can contain fragments of
#     shell script including quotes and variable substitutions, so put them in
#     double quotes to make sure that they get re-expanded; and
#   * put everything else in single quotes, so that it's not re-expanded.

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
`, Le = `distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\\://services.gradle.org/distributions/gradle-8.1.1-bin.zip
networkTimeout=10000
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
`, Ue = "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c3NwYXRoLnByb3BlcnRpZXNQSwECFAMUAAAICAAAAEEAAAAAAAIAAAAAAAAAKQAAAAAAAAAAAAAApIH8CwAAZ3JhZGxlLXdyYXBwZXItcGFyYW1ldGVyLW5hbWVzLnByb3BlcnRpZXNQSwECFAMUAAAICAAAAEEAAAAAAAIAAAAAAAAADwAAAAAAAAAAABAA7UFFDAAAb3JnL2dyYWRsZS9jbGkvUEsBAhQDFAAACAgAAABBANXcP648AgAAUwUAADEAAAAAAAAAAAAAAKSBdAwAAG9yZy9ncmFkbGUvY2xpL0Fic3RyYWN0Q29tbWFuZExpbmVDb252ZXJ0ZXIuY2xhc3NQSwECFAMUAAAICAAAAEEA14O1s1gEAADsCgAAOwAAAAAAAAAAAAAApIH/DgAAb3JnL2dyYWRsZS9jbGkvQWJzdHJhY3RQcm9wZXJ0aWVzQ29tbWFuZExpbmVDb252ZXJ0ZXIuY2xhc3NQSwECFAMUAAAICAAAAEEAfa3OeUcBAABLAgAAMQAAAAAAAAAAAAAApIGwEwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVBcmd1bWVudEV4Y2VwdGlvbi5jbGFzc1BLAQIUAxQAAAgIAAAAQQCz3+L6GQEAAGcCAAApAAAAAAAAAAAAAACkgUYVAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZUNvbnZlcnRlci5jbGFzc1BLAQIUAxQAAAgIAAAAQQBTZgrVAgYAAGcOAAAmAAAAAAAAAAAAAACkgaYWAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZU9wdGlvbi5jbGFzc1BLAQIUAxQAAAgIAAAAQQD87YqvpQAAAOUAAAAoAAAAAAAAAAAAAACkgewcAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciQxLmNsYXNzUEsBAhQDFAAACAgAAABBAOj4ab9LAwAAvwkAADsAAAAAAAAAAAAAAKSB1x0AAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEFmdGVyRmlyc3RTdWJDb21tYW5kLmNsYXNzUEsBAhQDFAAACAgAAABBALh1YJ+iAgAAJgcAADMAAAAAAAAAAAAAAKSBeyEAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJEFmdGVyT3B0aW9ucy5jbGFzc1BLAQIUAxQAAAgIAAAAQQAHK78k/QMAAHULAAA8AAAAAAAAAAAAAACkgW4kAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRCZWZvcmVGaXJzdFN1YkNvbW1hbmQuY2xhc3NQSwECFAMUAAAICAAAAEEA8G3wEksCAADvBAAARgAAAAAAAAAAAAAApIHFKAAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkQ2FzZUluc2Vuc2l0aXZlU3RyaW5nQ29tcGFyYXRvci5jbGFzc1BLAQIUAxQAAAgIAAAAQQA8pwtLCgcAAHgRAAA9AAAAAAAAAAAAAACkgXQrAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRLbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzUEsBAhQDFAAACAgAAABBAKs9AeKkAgAA9AYAADwAAAAAAAAAAAAAAKSB2TIAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE1pc3NpbmdPcHRpb25BcmdTdGF0ZS5jbGFzc1BLAQIUAxQAAAgIAAAAQQCHXgJhqgIAAMQGAAA9AAAAAAAAAAAAAACkgdc1AABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25Bd2FyZVBhcnNlclN0YXRlLmNsYXNzUEsBAhQDFAAACAgAAABBAAyyk167AgAAqgYAADcAAAAAAAAAAAAAAKSB3DgAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvbkNvbXBhcmF0b3IuY2xhc3NQSwECFAMUAAAICAAAAEEAmSy/46cBAACjAwAAOAAAAAAAAAAAAAAApIHsOwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uUGFyc2VyU3RhdGUuY2xhc3NQSwECFAMUAAAICAAAAEEAOSwn7KkCAAC2BQAAMwAAAAAAAAAAAAAApIHpPQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkT3B0aW9uU3RyaW5nLmNsYXNzUEsBAhQDFAAACAgAAABBAIT/UXGVAgAAeAUAAD0AAAAAAAAAAAAAAKSB40AAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyJE9wdGlvblN0cmluZ0NvbXBhcmF0b3IuY2xhc3NQSwECFAMUAAAICAAAAEEArAzGHAUCAAC4BAAAMgAAAAAAAAAAAAAApIHTQwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NQSwECFAMUAAAICAAAAEEA25X/gd0CAABrBwAAPwAAAAAAAAAAAAAApIEoRgAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzUEsBAhQDFAAACAgAAABBAKL6vu5fEgAA6SkAACYAAAAAAAAAAAAAAKSBYkkAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzUEsBAhQDFAAACAgAAABBABqL5T7JBwAAABIAACYAAAAAAAAAAAAAAKSBBVwAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzUEsBAhQDFAAACAgAAABBAHnfBXTaAgAARQUAACwAAAAAAAAAAAAAAKSBEmQAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzUEsBAhQDFAAACAgAAABBAFx2xkJ8AQAACwMAADoAAAAAAAAAAAAAAKSBNmcAAG9yZy9ncmFkbGUvY2xpL1Byb2plY3RQcm9wZXJ0aWVzQ29tbWFuZExpbmVDb252ZXJ0ZXIuY2xhc3NQSwECFAMUAAAICAAAAEEACs84PXwBAAD8AgAAOQAAAAAAAAAAAAAApIEKaQAAb3JnL2dyYWRsZS9jbGkvU3lzdGVtUHJvcGVydGllc0NvbW1hbmRMaW5lQ29udmVydGVyLmNsYXNzUEsBAhQDFAAACAgAAABBAAAAAAACAAAAAAAAABAAAAAAAAAAAAAQAO1B3WoAAG9yZy9ncmFkbGUvdXRpbC9QSwECFAMUAAAICAAAAEEAAAAAAAIAAAAAAAAAGQAAAAAAAAAAABAA7UENawAAb3JnL2dyYWRsZS91dGlsL2ludGVybmFsL1BLAQIUAxQAAAgIAAAAQQC8uxVofgMAABgGAAAmAAAAAAAAAAAAAACkgUZrAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvWmlwU2xpcC5jbGFzc1BLAQIUAxQAAAgIAAAAQQC/sNKpugEAABkDAAAvAAAAAAAAAAAAAACkgQhvAABvcmcvZ3JhZGxlL3dyYXBwZXIvQm9vdHN0cmFwTWFpblN0YXJ0ZXIkMS5jbGFzc1BLAQIUAxQAAAgIAAAAQQDKcid9CQUAAAwKAAAtAAAAAAAAAAAAAACkgQ9xAABvcmcvZ3JhZGxlL3dyYXBwZXIvQm9vdHN0cmFwTWFpblN0YXJ0ZXIuY2xhc3NQSwECFAMUAAAICAAAAEEAaFH+faIAAADSAAAAIwAAAAAAAAAAAAAApIFjdgAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJDEuY2xhc3NQSwECFAMUAAAICAAAAEEAIMsUlTIEAADYBwAAQQAAAAAAAAAAAAAApIFGdwAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJERlZmF1bHREb3dubG9hZFByb2dyZXNzTGlzdGVuZXIuY2xhc3NQSwECFAMUAAAICAAAAEEARmpRyKIDAAB+BwAANAAAAAAAAAAAAAAApIHXewAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkJFByb3h5QXV0aGVudGljYXRvci5jbGFzc1BLAQIUAxQAAAgIAAAAQQCHsFT63RIAAIApAAAhAAAAAAAAAAAAAACkgct/AABvcmcvZ3JhZGxlL3dyYXBwZXIvRG93bmxvYWQuY2xhc3NQSwECFAMUAAAICAAAAEEAeYFMoqEAAADKAAAAMQAAAAAAAAAAAAAApIHnkgAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkUHJvZ3Jlc3NMaXN0ZW5lci5jbGFzc1BLAQIUAxQAAAgIAAAAQQAhOXwItgYAAIQMAAAzAAAAAAAAAAAAAACkgdeTAABvcmcvZ3JhZGxlL3dyYXBwZXIvRXhjbHVzaXZlRmlsZUFjY2Vzc01hbmFnZXIuY2xhc3NQSwECFAMUAAAICAAAAEEAkOyELHkCAACGBAAALQAAAAAAAAAAAAAApIHemgAAb3JnL2dyYWRsZS93cmFwcGVyL0dyYWRsZVVzZXJIb21lTG9va3VwLmNsYXNzUEsBAhQDFAAACAgAAABBAPriGOaqAAAA2wAAACIAAAAAAAAAAAAAAKSBop0AAG9yZy9ncmFkbGUvd3JhcHBlci9JRG93bmxvYWQuY2xhc3NQSwECFAMUAAAICAAAAEEAcL8tMjUFAACXCwAAIgAAAAAAAAAAAAAApIGMngAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwkMS5jbGFzc1BLAQIUAxQAAAgIAAAAQQCxZKfTegIAABcGAAAtAAAAAAAAAAAAAACkgQGkAABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbCRJbnN0YWxsQ2hlY2suY2xhc3NQSwECFAMUAAAICAAAAEEA52k4QdUZAADrNQAAIAAAAAAAAAAAAAAApIHGpgAAb3JnL2dyYWRsZS93cmFwcGVyL0luc3RhbGwuY2xhc3NQSwECFAMUAAAICAAAAEEA8L869m8CAAA0BQAAHwAAAAAAAAAAAAAApIHZwAAAb3JnL2dyYWRsZS93cmFwcGVyL0xvZ2dlci5jbGFzc1BLAQIUAxQAAAgIAAAAQQDpEmCYjgEAAO8CAAA4AAAAAAAAAAAAAACkgYXDAABvcmcvZ3JhZGxlL3dyYXBwZXIvUGF0aEFzc2VtYmxlciRMb2NhbERpc3RyaWJ1dGlvbi5jbGFzc1BLAQIUAxQAAAgIAAAAQQCg4bY7BAcAACsOAAAmAAAAAAAAAAAAAACkgWnFAABvcmcvZ3JhZGxlL3dyYXBwZXIvUGF0aEFzc2VtYmxlci5jbGFzc1BLAQIUAxQAAAgIAAAAQQCEf83rwgQAAHwJAAAwAAAAAAAAAAAAAACkgbHMAABvcmcvZ3JhZGxlL3dyYXBwZXIvU3lzdGVtUHJvcGVydGllc0hhbmRsZXIuY2xhc3NQSwECFAMUAAAICAAAAEEAF4GXWRYDAABQCAAALQAAAAAAAAAAAAAApIHB0QAAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJDb25maWd1cmF0aW9uLmNsYXNzUEsBAhQDFAAACAgAAABBALdYnHnbCQAArBUAACgAAAAAAAAAAAAAAKSBItUAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyRXhlY3V0b3IuY2xhc3NQSwUGAAAAADcANwAjEwAAQ98AAAAA", ue = `# gradle

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
`, de = `# Automatically build the project and run any configured tests for every push
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
        ]
        # and run on both Linux and Windows
        os: [ubuntu-22.04, windows-2022]
    runs-on: \${{ matrix.os }}
    steps:
      - name: checkout repository
        uses: actions/checkout@v3
      - name: validate gradle wrapper
        uses: gradle/wrapper-validation-action@v1
      - name: setup jdk \${{ matrix.java }}
        uses: actions/setup-java@v3
        with:
          java-version: \${{ matrix.java }}
          distribution: 'microsoft'
      - name: make gradle wrapper executable
        if: \${{ runner.os != 'Windows' }}
        run: chmod +x ./gradlew
      - name: build
        run: ./gradlew build
      - name: capture build artifacts
        if: \${{ runner.os == 'Linux' && matrix.java == '17' }} # Only upload artifacts built from latest java on one OS
        uses: actions/upload-artifact@v3
        with:
          name: Artifacts
          path: build/libs/`;
async function Ve({ writer: B }) {
  await B.write("gradlew", Te, {
    unixPermissions: "774"
  }), await B.write("gradlew.bat", Ze), await B.write("gradle/wrapper/gradle-wrapper.properties", Le), await B.write("gradle/wrapper/gradle-wrapper.jar", Ae(Ue)), await B.write(".gitignore", ue), await B.write(".github/workflows/build.yml", de);
}
var Tt = { exports: {} };
(function(B, m) {
  (function(i, y) {
    y(m);
  })(St, function(i) {
    function y(k) {
      var x, I, U = new Error(k);
      return x = U, I = y.prototype, Object.setPrototypeOf ? Object.setPrototypeOf(x, I) : x.__proto__ = I, U;
    }
    function c(k, x, I) {
      var U = x.slice(0, I).split(/\n/), N = U.length, M = U[N - 1].length + 1;
      throw y(k += " at line " + N + " col " + M + `:

  ` + x.split(/\n/)[N - 1] + `
  ` + Array(M).join(" ") + "^");
    }
    y.prototype = Object.create(Error.prototype, { name: { value: "Eta Error", enumerable: !1 } });
    var r = new Function("return this")().Promise;
    function s(k, x) {
      for (var I in x)
        Object.prototype.hasOwnProperty.call(x, I) && (k[I] = x[I]);
      return k;
    }
    var n = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    function l(k) {
      return n[k];
    }
    var h = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, v = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, p = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
    function g(k) {
      return k.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
    }
    function o(k, x) {
      var I = [], U = !1, N = 0, M = x.parse;
      if (x.plugins)
        for (var _ = 0; _ < x.plugins.length; _++) {
          var E = x.plugins[_];
          E.processTemplate && (k = E.processTemplate(k, x));
        }
      function T(ut, st) {
        ut && (ut = function(at, ft, ht, pt) {
          var At, t;
          return Array.isArray(ft.autoTrim) ? (At = ft.autoTrim[1], t = ft.autoTrim[0]) : At = t = ft.autoTrim, (ht || ht === !1) && (At = ht), (pt || pt === !1) && (t = pt), t || At ? At === "slurp" && t === "slurp" ? at.trim() : (At === "_" || At === "slurp" ? at = function(L) {
            return String.prototype.trimLeft ? L.trimLeft() : L.replace(/^\s+/, "");
          }(at) : At !== "-" && At !== "nl" || (at = at.replace(/^(?:\r\n|\n|\r)/, "")), t === "_" || t === "slurp" ? at = function(L) {
            return String.prototype.trimRight ? L.trimRight() : L.replace(/\s+$/, "");
          }(at) : t !== "-" && t !== "nl" || (at = at.replace(/(?:\r\n|\n|\r)$/, "")), at) : at;
        }(ut, x, U, st)) && (ut = ut.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), I.push(ut));
      }
      x.rmWhitespace && (k = k.replace(/[\r\n]+/g, `
`).replace(/^\s+|\s+$/gm, "")), h.lastIndex = 0, v.lastIndex = 0, p.lastIndex = 0;
      for (var e, Z = [M.exec, M.interpolate, M.raw].reduce(function(ut, st) {
        return ut && st ? ut + "|" + g(st) : st ? g(st) : ut;
      }, ""), $ = new RegExp("([^]*?)" + g(x.tags[0]) + "(-|_)?\\s*(" + Z + ")?\\s*", "g"), D = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + g(x.tags[1]) + ")", "g"); e = $.exec(k); ) {
        N = e[0].length + e.index;
        var et = e[1], J = e[3] || "";
        T(et, e[2]), D.lastIndex = N;
        for (var q = void 0, G = !1; q = D.exec(k); ) {
          if (q[1]) {
            var O = k.slice(N, q.index);
            $.lastIndex = N = D.lastIndex, U = q[2], G = { t: J === M.exec ? "e" : J === M.raw ? "r" : J === M.interpolate ? "i" : "", val: O };
            break;
          }
          var nt = q[0];
          if (nt === "/*") {
            var H = k.indexOf("*/", D.lastIndex);
            H === -1 && c("unclosed comment", k, q.index), D.lastIndex = H;
          } else
            nt === "'" ? (v.lastIndex = q.index, v.exec(k) ? D.lastIndex = v.lastIndex : c("unclosed string", k, q.index)) : nt === '"' ? (p.lastIndex = q.index, p.exec(k) ? D.lastIndex = p.lastIndex : c("unclosed string", k, q.index)) : nt === "`" && (h.lastIndex = q.index, h.exec(k) ? D.lastIndex = h.lastIndex : c("unclosed string", k, q.index));
        }
        G ? I.push(G) : c("unclosed tag", k, e.index + et.length);
      }
      if (T(k.slice(N, k.length), !1), x.plugins)
        for (var j = 0; j < x.plugins.length; j++) {
          var dt = x.plugins[j];
          dt.processAST && (I = dt.processAST(I, x));
        }
      return I;
    }
    function f(k, x) {
      var I = o(k, x), U = "var tR='',__l,__lP" + (x.include ? ",include=E.include.bind(E)" : "") + (x.includeFile ? ",includeFile=E.includeFile.bind(E)" : "") + `
function layout(p,d){__l=p;__lP=d}
` + (x.useWith ? "with(" + x.varName + "||{}){" : "") + function(_, E) {
        for (var T = 0, e = _.length, Z = ""; T < e; T++) {
          var $ = _[T];
          if (typeof $ == "string")
            Z += "tR+='" + $ + `'
`;
          else {
            var D = $.t, et = $.val || "";
            D === "r" ? (E.filter && (et = "E.filter(" + et + ")"), Z += "tR+=" + et + `
`) : D === "i" ? (E.filter && (et = "E.filter(" + et + ")"), E.autoEscape && (et = "E.e(" + et + ")"), Z += "tR+=" + et + `
`) : D === "e" && (Z += et + `
`);
          }
        }
        return Z;
      }(I, x) + (x.includeFile ? "if(__l)tR=" + (x.async ? "await " : "") + "includeFile(__l,Object.assign(" + x.varName + `,{body:tR},__lP))
` : x.include ? "if(__l)tR=" + (x.async ? "await " : "") + "include(__l,Object.assign(" + x.varName + `,{body:tR},__lP))
` : "") + "if(cb){cb(null,tR)} return tR" + (x.useWith ? "}" : "");
      if (x.plugins)
        for (var N = 0; N < x.plugins.length; N++) {
          var M = x.plugins[N];
          M.processFnString && (U = M.processFnString(U, x));
        }
      return U;
    }
    var a = new (/* @__PURE__ */ function() {
      function k(I) {
        this.cache = void 0, this.cache = I;
      }
      var x = k.prototype;
      return x.define = function(I, U) {
        this.cache[I] = U;
      }, x.get = function(I) {
        return this.cache[I];
      }, x.remove = function(I) {
        delete this.cache[I];
      }, x.reset = function() {
        this.cache = {};
      }, x.load = function(I) {
        s(this.cache, I);
      }, k;
    }())({}), d = { async: !1, autoEscape: !0, autoTrim: [!1, "nl"], cache: !1, e: function(k) {
      var x = String(k);
      return /[&<>"']/.test(x) ? x.replace(/[&<>"']/g, l) : x;
    }, include: function(k, x) {
      var I = this.templates.get(k);
      if (!I)
        throw y('Could not fetch template "' + k + '"');
      return I(x, this);
    }, parse: { exec: "", interpolate: "=", raw: "~" }, plugins: [], rmWhitespace: !1, tags: ["<%", "%>"], templates: a, useWith: !1, varName: "it" };
    function A(k, x) {
      var I = {};
      return s(I, d), x && s(I, x), k && s(I, k), I;
    }
    function w(k, x) {
      var I = A(x || {}), U = I.async ? function() {
        try {
          return new Function("return (async function(){}).constructor")();
        } catch (N) {
          throw N instanceof SyntaxError ? y("This environment doesn't support async/await") : N;
        }
      }() : Function;
      try {
        return new U(I.varName, "E", "cb", f(k, I));
      } catch (N) {
        throw N instanceof SyntaxError ? y(`Bad template syntax

` + N.message + `
` + Array(N.message.length + 1).join("=") + `
` + f(k, I) + `
`) : N;
      }
    }
    function S(k, x) {
      if (x.cache && x.name && x.templates.get(x.name))
        return x.templates.get(x.name);
      var I = typeof k == "function" ? k : w(k, x);
      return x.cache && x.name && x.templates.define(x.name, I), I;
    }
    function F(k, x, I, U) {
      var N = A(I || {});
      if (!N.async)
        return S(k, N)(x, N);
      if (!U) {
        if (typeof r == "function")
          return new r(function(M, _) {
            try {
              M(S(k, N)(x, N));
            } catch (E) {
              _(E);
            }
          });
        throw y("Please provide a callback function, this env doesn't support Promises");
      }
      try {
        S(k, N)(x, N, U);
      } catch (M) {
        return U(M);
      }
    }
    i.compile = w, i.compileToString = f, i.config = d, i.configure = function(k) {
      return s(d, k);
    }, i.defaultConfig = d, i.getConfig = A, i.parse = o, i.render = F, i.renderAsync = function(k, x, I, U) {
      return F(k, x, Object.assign({}, I, { async: !0 }), U);
    }, i.templates = a;
  });
})(Tt, Tt.exports);
function Ct(B, m) {
  return Tt.exports.configure({
    autoTrim: !1
  }), Tt.exports.render(B, m);
}
const Qe = `# Done to increase the memory available to gradle.
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
fabric_version=<%= it.fabricVersion %>`, De = `plugins {
	id 'fabric-loom' version '1.2-SNAPSHOT'
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
<% if (it.dataGeneration || it.splitSources) { %>
loom {
<% if (it.splitSources) { %>    splitEnvironmentSourceSets()

	mods {
		"<%= it.modid %>" {
			sourceSet sourceSets.main
			sourceSet sourceSets.client
		}
	}
<% } %><% if (it.dataGeneration) { %>    runs {
		// This adds a new gradle task that runs the datagen API: "gradlew runDatagen"
		datagen {
			inherit server
			name "Data Generation"
			vmArg "-Dfabric-api.datagen"
			vmArg "-Dfabric-api.datagen.output-dir=\${file("src/main/generated")}"
			vmArg "-Dfabric-api.datagen.modid=<%= it.modid %>"
 
			runDir "build/datagen"
		}
	}<% } %>
}
<% } %><% if (it.dataGeneration) { %>
// Add the generated resources to the main source set
sourceSets {
	main {
		resources {
			srcDirs += [
					'src/main/generated'
			]
		}
	}
}<% } %>
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
		rename { "\${it}_\${project.archivesBaseName}"}
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
}`, Me = `pluginManagement {
	repositories {
		maven {
			name = 'Fabric'
			url = 'https://maven.fabricmc.net/'
		}
		mavenCentral()
		gradlePluginPortal()
	}
}`, We = {
  compatibility: "VERSION_1_8",
  mixin: "JAVA_8",
  release: 8,
  kotlinRelease: "1.8"
}, Ye = {
  compatibility: "VERSION_16",
  mixin: "JAVA_16",
  release: 16,
  kotlinRelease: "16"
}, Je = {
  compatibility: "VERSION_17",
  mixin: "JAVA_17",
  release: 17,
  kotlinRelease: "17"
};
function Lt(B) {
  const m = Ut(B);
  return m < 16 ? We : m == 16 ? Ye : Je;
}
function Ut(B) {
  return Number(B.split(".")[1]);
}
async function je(B, m) {
  await B.write("gradle.properties", Ct(Qe, m)), await B.write("build.gradle", Ct(De, { ...m, java: Lt(m.minecraftVersion) })), await B.write("settings.gradle", Me);
}
const Xe = `package <%= it.packageName %>;

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
}`, Pe = `package <%= it.packageName %>;

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
async function He(B, m) {
  const i = m.packageName + ".mixin", y = "ExampleMixin", c = {
    required: !0,
    package: i,
    compatibilityLevel: Lt(m.minecraftVersion).mixin,
    mixins: [
      y
    ],
    injectors: {
      defaultRequire: 1
    }
  }, r = `${m.modid}.mixins.json`;
  return await B.write(`src/main/resources/${r}`, JSON.stringify(c, null, "	")), await B.write(`src/main/java/${i.replaceAll(".", "/")}/${y}.java`, Ct(Xe, {
    className: y,
    packageName: i
  })), [r];
}
async function Ke(B, m) {
  const i = m.packageName + ".mixin.client", y = "ExampleClientMixin", c = {
    required: !0,
    package: i,
    compatibilityLevel: Lt(m.minecraftVersion).mixin,
    client: [
      y
    ],
    injectors: {
      defaultRequire: 1
    }
  }, r = `${m.modid}.client.mixins.json`;
  return await B.write(`src/client/resources/${r}`, JSON.stringify(c, null, "	")), await B.write(`src/client/java/${i.replaceAll(".", "/")}/${y}.java`, Ct(Pe, {
    className: y,
    packageName: i
  })), [
    {
      config: r,
      environment: "client"
    }
  ];
}
const qe = `package <%= it.package %>;

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
}`, _e = `package <%= it.package %>

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
}`, $e = `package <%= it.package %>;

import net.fabricmc.api.ClientModInitializer;

public class <%= it.className %> implements ClientModInitializer {
	@Override
	public void onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, tn = `package <%= it.package %>

import net.fabricmc.api.ClientModInitializer

object <%= it.className %> : ClientModInitializer {
	override fun onInitializeClient() {
		// This entrypoint is suitable for setting up client-specific logic, such as rendering.
	}
}`, en = `package <%= it.package %>;

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;

public class <%= it.className %> implements DataGeneratorEntrypoint {
	@Override
	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {

	}
}
`, nn = `package <%= it.package %>

import net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint
import net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator

object <%= it.className %> : DataGeneratorEntrypoint {
	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {
	}
}`;
async function rn(B, m) {
  const i = "ExampleMod", y = {
    package: m.packageName,
    className: i,
    classFullName: m.packageName + "." + i,
    path: m.packageName.replaceAll(".", "/") + "/" + i,
    modid: m.modid,
    slf4j: Ut(m.minecraftVersion) >= 18,
    clientEntrypoint: m.splitSources,
    dataEntrypoint: m.dataGeneration
  };
  return m.kotlin ? await sn(B, y) : await an(B, y);
}
async function an(B, m) {
  var i = {
    main: [
      m.classFullName
    ]
  };
  return await B.write(`src/main/java/${m.path}.java`, Ct(qe, m)), m.clientEntrypoint && (await B.write(`src/client/java/${m.path}Client.java`, Ct($e, { ...m, className: m.className + "Client" })), i = {
    ...i,
    client: [
      m.classFullName + "Client"
    ]
  }), m.dataEntrypoint && (await B.write(`src/main/java/${m.path}DataGenerator.java`, Ct(en, { ...m, className: m.className + "DataGenerator" })), i = {
    ...i,
    "fabric-datagen": [
      m.classFullName + "DataGenerator"
    ]
  }), i;
}
async function sn(B, m) {
  var i = {
    main: [
      {
        value: m.classFullName,
        adapter: "kotlin"
      }
    ]
  };
  return await B.write(`src/main/kotlin/${m.path}.kt`, Ct(_e, m)), m.clientEntrypoint && (await B.write(`src/client/kotlin/${m.path}Client.kt`, Ct(tn, { ...m, className: m.className + "Client" })), i = {
    ...i,
    client: [
      {
        value: m.classFullName + "Client",
        adapter: "kotlin"
      }
    ]
  }), m.dataEntrypoint && (await B.write(`src/main/kotlin/${m.path}DataGenerator.kt`, Ct(nn, { ...m, className: m.className + "DataGenerator" })), i = {
    ...i,
    "fabric-datagen": [
      {
        value: m.classFullName + "DataGenerator",
        adapter: "kotlin"
      }
    ]
  }), i;
}
async function on(B, m) {
  var i = [
    ...await He(B, m),
    ...m.splitSources ? await Ke(B, m) : []
  ], y = {
    schemaVersion: 1,
    id: m.modid,
    version: "${version}",
    name: m.projectName,
    description: "This is an example description! Tell everyone what your mod is about!",
    authors: [
      "Me!"
    ],
    contact: {
      homepage: "https://fabricmc.net/",
      sources: "https://github.com/FabricMC/fabric-example-mod"
    },
    license: "CC0-1.0",
    icon: `assets/${m.modid}/icon.png`,
    environment: "*",
    entrypoints: await rn(B, m),
    mixins: i,
    depends: {
      fabricloader: ">=" + m.loaderVersion,
      minecraft: "~" + m.minecraftVersion,
      java: ">=" + Lt(m.minecraftVersion).release
    },
    suggests: {
      "another-mod": "*"
    }
  };
  y.depends[Ut(m.minecraftVersion) >= 16 ? "fabric-api" : "fabric"] = "*", m.kotlin && (y.depends = {
    ...y.depends,
    "fabric-language-kotlin": ">=" + m.kotlin.kotlinVersion
  }), await B.write("src/main/resources/fabric.mod.json", JSON.stringify(y, null, "	")), await B.write(`src/main/resources/assets/${m.modid}/icon.png`, Ae(ln));
}
const ln = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC", cn = `Creative Commons Legal Code

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
async function An(B, m) {
  await B.write(".gitignore", ue), await B.write(".github/workflows/build.yml", de), await B.write("LICENSE", cn);
}
async function un(B) {
  const m = await dn(B.config);
  await Ve(B), await je(B.writer, m), await on(B.writer, m), await An(B.writer);
}
function he(B) {
  return B.toLowerCase().replaceAll(/\s+/g, "-").replaceAll(/[^a-za-z0-9-_]/g, "");
}
async function dn(B) {
  return {
    ...B,
    loaderVersion: (await Fe()).find((m) => m.stable).version,
    fabricVersion: await Be(B.minecraftVersion),
    yarnVersion: (await Re(B.minecraftVersion))[0].version,
    kotlin: await hn(B)
  };
}
async function hn(B) {
  if (!B.useKotlin)
    return;
  const i = (await Ne()).pop(), y = i.split("+kotlin.")[1];
  return {
    fabricKotlinAdapterVersion: i,
    kotlinVersion: y
  };
}
const fn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateTemplate: un,
  nameToModId: he
}, Symbol.toStringTag, { value: "Module" }));
function jt(B, m, i) {
  const y = B.slice();
  return y[28] = m[i], y;
}
function Xt(B, m, i) {
  const y = B.slice();
  return y[31] = m[i], y;
}
function Pt(B, m, i) {
  const y = B.slice();
  return y[31] = m[i], y;
}
function pn(B) {
  let m, i, y = B[31].message + "", c, r, s;
  return {
    c() {
      m = it("p"), i = Et("Error: "), c = Et(y), r = ct(), s = it("p"), s.innerHTML = `For support please visit one of our
        <a href="/discuss">community discussion</a>
        groups.`, Zt(m, "color", "red");
    },
    m(n, l) {
      bt(n, m, l), P(m, i), P(m, c), bt(n, r, l), bt(n, s, l);
    },
    p: xt,
    i: xt,
    o: xt,
    d(n) {
      n && vt(m), n && vt(r), n && vt(s);
    }
  };
}
function mn(B) {
  let m, i, y, c, r, s, n, l, h, v, p, g, o, f, a, d, A, w, S, F, k, x, I, U, N, M, _, E, T, e, Z, $, D, et, J, q, G, O, nt, H, j, dt, ut, st, at, ft, ht, pt, At, t, L, z;
  function b(tt, gt) {
    return tt[2] != null ? bn : gn;
  }
  let u = b(B), C = u(B), V = B[12] != null && Ht(B), Q = B[2] != null && qt(B), R = B[27].game, W = [];
  for (let tt = 0; tt < R.length; tt += 1)
    W[tt] = te(jt(B, R, tt));
  let X = B[10] && ee(B), Y = B[9] && ne(B);
  const rt = [yn, vn], lt = [];
  function ot(tt, gt) {
    return tt[8] ? 0 : 1;
  }
  return pt = ot(B), At = lt[pt] = rt[pt](B), {
    c() {
      m = it("div"), i = it("div"), y = it("h3"), y.textContent = "Mod Name:", c = ct(), r = it("hr"), s = ct(), C.c(), n = ct(), l = it("input"), h = ct(), V && V.c(), v = ct(), Q && Q.c(), p = ct(), g = it("div"), o = it("h3"), o.textContent = "Package Name:", f = ct(), a = it("hr"), d = ct(), A = it("p"), A.innerHTML = `Choose a unique package name for your new mod. The package name
                should be unique to you. If you are unsure about this use <code class="svelte-1sr08ub">name.modid</code>.`, w = ct(), S = it("input"), F = ct(), k = it("div"), x = it("h3"), x.textContent = "Minecraft Version:", I = ct(), U = it("hr"), N = ct(), M = it("p"), M.textContent = `Select the version of Minecraft that you wish to use for your
                mod.`, _ = ct(), E = it("select");
      for (let tt = 0; tt < W.length; tt += 1)
        W[tt].c();
      T = ct(), e = it("hr"), Z = ct(), $ = it("br"), D = ct(), et = it("h4"), et.textContent = "Advanced Options:", J = ct(), q = it("div"), G = it("div"), O = it("input"), nt = ct(), H = it("label"), H.textContent = "Kotlin Programming Language", j = ct(), dt = it("p"), dt.innerHTML = `<a href="https://kotlinlang.org/" class="svelte-1sr08ub">Kotlin</a> is a alternative programming language that can be used to develop mods.
                The <a href="https://github.com/FabricMC/fabric-language-kotlin" class="svelte-1sr08ub">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.`, ut = ct(), X && X.c(), st = ct(), Y && Y.c(), at = ct(), ft = it("br"), ht = ct(), At.c(), K(y, "class", "svelte-1sr08ub"), K(r, "class", "svelte-1sr08ub"), K(l, "id", "project-name"), K(l, "class", "svelte-1sr08ub"), K(i, "class", "form-line svelte-1sr08ub"), K(o, "class", "svelte-1sr08ub"), K(a, "class", "svelte-1sr08ub"), K(A, "class", "svelte-1sr08ub"), K(S, "id", "package-name"), K(S, "class", "svelte-1sr08ub"), K(g, "class", "form-line svelte-1sr08ub"), K(x, "class", "svelte-1sr08ub"), K(U, "class", "svelte-1sr08ub"), K(M, "class", "svelte-1sr08ub"), K(E, "id", "minecraft-version"), Zt(E, "min-width", "200px"), K(E, "class", "svelte-1sr08ub"), B[0] === void 0 && xe(() => B[22].call(E)), K(k, "class", "form-line svelte-1sr08ub"), K(e, "class", "svelte-1sr08ub"), K($, "class", "svelte-1sr08ub"), K(et, "class", "svelte-1sr08ub"), K(O, "id", "kotlin"), K(O, "type", "checkbox"), K(O, "class", "option-input svelte-1sr08ub"), K(H, "for", "kotlin"), K(H, "class", "option-label svelte-1sr08ub"), K(G, "class", "option-container svelte-1sr08ub"), K(dt, "class", "option-body svelte-1sr08ub"), K(q, "class", "svelte-1sr08ub"), K(ft, "class", "svelte-1sr08ub"), K(m, "class", "template svelte-1sr08ub");
    },
    m(tt, gt) {
      bt(tt, m, gt), P(m, i), P(i, y), P(i, c), P(i, r), P(i, s), C.m(i, null), P(i, n), P(i, l), Ft(l, B[1]), P(i, h), V && V.m(i, null), P(m, v), Q && Q.m(m, null), P(m, p), P(m, g), P(g, o), P(g, f), P(g, a), P(g, d), P(g, A), P(g, w), P(g, S), Ft(S, B[4]), P(m, F), P(m, k), P(k, x), P(k, I), P(k, U), P(k, N), P(k, M), P(k, _), P(k, E);
      for (let yt = 0; yt < W.length; yt += 1)
        W[yt].m(E, null);
      Jt(E, B[0]), P(m, T), P(m, e), P(m, Z), P(m, $), P(m, D), P(m, et), P(m, J), P(m, q), P(q, G), P(G, O), O.checked = B[5], P(G, nt), P(G, H), P(q, j), P(q, dt), P(m, ut), X && X.m(m, null), P(m, st), Y && Y.m(m, null), P(m, at), P(m, ft), P(m, ht), lt[pt].m(m, null), t = !0, L || (z = [
        kt(l, "input", B[19]),
        kt(S, "keyup", B[15]),
        kt(S, "input", B[21]),
        kt(E, "change", B[22]),
        kt(O, "change", B[23])
      ], L = !0);
    },
    p(tt, gt) {
      if (u === (u = b(tt)) && C ? C.p(tt, gt) : (C.d(1), C = u(tt), C && (C.c(), C.m(i, n))), gt[0] & 2 && l.value !== tt[1] && Ft(l, tt[1]), tt[12] != null ? V ? V.p(tt, gt) : (V = Ht(tt), V.c(), V.m(i, null)) : V && (V.d(1), V = null), tt[2] != null ? Q ? Q.p(tt, gt) : (Q = qt(tt), Q.c(), Q.m(m, p)) : Q && (Q.d(1), Q = null), gt[0] & 16 && S.value !== tt[4] && Ft(S, tt[4]), gt[0] & 8192) {
        R = tt[27].game;
        let wt;
        for (wt = 0; wt < R.length; wt += 1) {
          const mt = jt(tt, R, wt);
          W[wt] ? W[wt].p(mt, gt) : (W[wt] = te(mt), W[wt].c(), W[wt].m(E, null));
        }
        for (; wt < W.length; wt += 1)
          W[wt].d(1);
        W.length = R.length;
      }
      gt[0] & 8193 && Jt(E, tt[0]), gt[0] & 32 && (O.checked = tt[5]), tt[10] ? X ? X.p(tt, gt) : (X = ee(tt), X.c(), X.m(m, st)) : X && (X.d(1), X = null), tt[9] ? Y ? Y.p(tt, gt) : (Y = ne(tt), Y.c(), Y.m(m, at)) : Y && (Y.d(1), Y = null);
      let yt = pt;
      pt = ot(tt), pt === yt ? lt[pt].p(tt, gt) : (Ce(), Nt(lt[yt], 1, 1, () => {
        lt[yt] = null;
      }), Ie(), At = lt[pt], At ? At.p(tt, gt) : (At = lt[pt] = rt[pt](tt), At.c()), Rt(At, 1), At.m(m, null));
    },
    i(tt) {
      t || (Rt(At), t = !0);
    },
    o(tt) {
      Nt(At), t = !1;
    },
    d(tt) {
      tt && vt(m), C.d(), V && V.d(), Q && Q.d(), Qt(W, tt), X && X.d(), Y && Y.d(), lt[pt].d(), L = !1, re(z);
    }
  };
}
function gn(B) {
  let m, i, y, c, r, s, n, l;
  return {
    c() {
      m = it("p"), i = Et("Choose a name for your new mod. The mod ID will be "), y = it("code"), c = Et(B[3]), r = Et(". "), s = it("a"), s.textContent = "Use custom id", K(y, "class", "svelte-1sr08ub"), K(s, "href", ""), K(s, "class", "svelte-1sr08ub"), K(m, "class", "svelte-1sr08ub");
    },
    m(h, v) {
      bt(h, m, v), P(m, i), P(m, y), P(y, c), P(m, r), P(m, s), n || (l = kt(s, "click", Mt(B[16])), n = !0);
    },
    p(h, v) {
      v[0] & 8 && Dt(c, h[3]);
    },
    d(h) {
      h && vt(m), n = !1, l();
    }
  };
}
function bn(B) {
  let m;
  return {
    c() {
      m = it("p"), m.textContent = "Choose a name for your new mod.", K(m, "class", "svelte-1sr08ub");
    },
    m(i, y) {
      bt(i, m, y);
    },
    p: xt,
    d(i) {
      i && vt(m);
    }
  };
}
function Ht(B) {
  let m, i, y = B[12], c = [];
  for (let r = 0; r < y.length; r += 1)
    c[r] = Kt(Pt(B, y, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      m = ct(), i = it("br"), K(i, "class", "svelte-1sr08ub");
    },
    m(r, s) {
      for (let n = 0; n < c.length; n += 1)
        c[n].m(r, s);
      bt(r, m, s), bt(r, i, s);
    },
    p(r, s) {
      if (s[0] & 4096) {
        y = r[12];
        let n;
        for (n = 0; n < y.length; n += 1) {
          const l = Pt(r, y, n);
          c[n] ? c[n].p(l, s) : (c[n] = Kt(l), c[n].c(), c[n].m(m.parentNode, m));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = y.length;
      }
    },
    d(r) {
      Qt(c, r), r && vt(m), r && vt(i);
    }
  };
}
function Kt(B) {
  let m, i = B[31] + "", y;
  return {
    c() {
      m = it("li"), y = Et(i), Zt(m, "color", "red"), K(m, "class", "svelte-1sr08ub");
    },
    m(c, r) {
      bt(c, m, r), P(m, y);
    },
    p(c, r) {
      r[0] & 4096 && i !== (i = c[31] + "") && Dt(y, i);
    },
    d(c) {
      c && vt(m);
    }
  };
}
function qt(B) {
  let m, i, y, c, r, s, n, l, h, v, p, g, o, f = B[11] != null && _t(B);
  return {
    c() {
      m = it("div"), i = it("h3"), i.textContent = "Mod ID:", y = ct(), c = it("hr"), r = ct(), s = it("p"), n = Et("Enter the modid you wish to use for your mod. "), l = it("a"), l.textContent = "Use default", h = ct(), f && f.c(), v = ct(), p = it("input"), K(i, "class", "svelte-1sr08ub"), K(c, "class", "svelte-1sr08ub"), K(l, "href", ""), K(l, "class", "svelte-1sr08ub"), K(s, "class", "svelte-1sr08ub"), K(p, "id", "mod-id"), K(p, "class", "svelte-1sr08ub"), K(m, "class", "form-line svelte-1sr08ub");
    },
    m(a, d) {
      bt(a, m, d), P(m, i), P(m, y), P(m, c), P(m, r), P(m, s), P(s, n), P(s, l), P(m, h), f && f.m(m, null), P(m, v), P(m, p), Ft(p, B[2]), g || (o = [
        kt(l, "click", Mt(B[17])),
        kt(p, "input", B[20])
      ], g = !0);
    },
    p(a, d) {
      a[11] != null ? f ? f.p(a, d) : (f = _t(a), f.c(), f.m(m, v)) : f && (f.d(1), f = null), d[0] & 4 && p.value !== a[2] && Ft(p, a[2]);
    },
    d(a) {
      a && vt(m), f && f.d(), g = !1, re(o);
    }
  };
}
function _t(B) {
  let m, i, y = B[11], c = [];
  for (let r = 0; r < y.length; r += 1)
    c[r] = $t(Xt(B, y, r));
  return {
    c() {
      for (let r = 0; r < c.length; r += 1)
        c[r].c();
      m = ct(), i = it("br"), K(i, "class", "svelte-1sr08ub");
    },
    m(r, s) {
      for (let n = 0; n < c.length; n += 1)
        c[n].m(r, s);
      bt(r, m, s), bt(r, i, s);
    },
    p(r, s) {
      if (s[0] & 2048) {
        y = r[11];
        let n;
        for (n = 0; n < y.length; n += 1) {
          const l = Xt(r, y, n);
          c[n] ? c[n].p(l, s) : (c[n] = $t(l), c[n].c(), c[n].m(m.parentNode, m));
        }
        for (; n < c.length; n += 1)
          c[n].d(1);
        c.length = y.length;
      }
    },
    d(r) {
      Qt(c, r), r && vt(m), r && vt(i);
    }
  };
}
function $t(B) {
  let m, i = B[31] + "", y;
  return {
    c() {
      m = it("li"), y = Et(i), Zt(m, "color", "red"), K(m, "class", "svelte-1sr08ub");
    },
    m(c, r) {
      bt(c, m, r), P(m, y);
    },
    p(c, r) {
      r[0] & 2048 && i !== (i = c[31] + "") && Dt(y, i);
    },
    d(c) {
      c && vt(m);
    }
  };
}
function te(B) {
  let m, i = B[28].version + "", y;
  return {
    c() {
      m = it("option"), y = Et(i), m.__value = B[28].version, m.value = m.__value, K(m, "class", "svelte-1sr08ub");
    },
    m(c, r) {
      bt(c, m, r), P(m, y);
    },
    p: xt,
    d(c) {
      c && vt(m);
    }
  };
}
function ee(B) {
  let m, i, y, c, r, s, n, l, h;
  return {
    c() {
      m = it("div"), i = it("div"), y = it("input"), c = ct(), r = it("label"), r.textContent = "Data Generation", s = ct(), n = it("p"), n.innerHTML = 'This option configures the <a href="https://fabricmc.net/wiki/tutorial:datagen_setup" class="svelte-1sr08ub">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.', K(y, "id", "datagen"), K(y, "type", "checkbox"), K(y, "class", "option-input svelte-1sr08ub"), K(r, "for", "datagen"), K(r, "class", "option-label svelte-1sr08ub"), K(i, "class", "option-container svelte-1sr08ub"), K(n, "class", "option-body svelte-1sr08ub"), K(m, "class", "svelte-1sr08ub");
    },
    m(v, p) {
      bt(v, m, p), P(m, i), P(i, y), y.checked = B[6], P(i, c), P(i, r), P(m, s), P(m, n), l || (h = kt(y, "change", B[24]), l = !0);
    },
    p(v, p) {
      p[0] & 64 && (y.checked = v[6]);
    },
    d(v) {
      v && vt(m), l = !1, h();
    }
  };
}
function ne(B) {
  let m, i, y, c, r, s, n, l, h;
  return {
    c() {
      m = it("div"), i = it("div"), y = it("input"), c = ct(), r = it("label"), r.textContent = "Split client and common sources", s = ct(), n = it("p"), n.textContent = `A common source of server crashes comes from calling client only code when installed on a server.
                This option configures your mod to be built from two source sets, client and main.
                This enforces a clear separation between the client and server code.`, K(y, "id", "splitSources"), K(y, "type", "checkbox"), K(y, "class", "option-input svelte-1sr08ub"), K(r, "for", "splitSources"), K(r, "class", "option-label svelte-1sr08ub"), K(i, "class", "option-container svelte-1sr08ub"), K(n, "class", "option-body svelte-1sr08ub"), K(m, "class", "svelte-1sr08ub");
    },
    m(v, p) {
      bt(v, m, p), P(m, i), P(i, y), y.checked = B[7], P(i, c), P(i, r), P(m, s), P(m, n), l || (h = kt(y, "change", B[25]), l = !0);
    },
    p(v, p) {
      p[0] & 128 && (y.checked = v[7]);
    },
    d(v) {
      v && vt(m), l = !1, h();
    }
  };
}
function vn(B) {
  let m, i, y, c, r, s;
  return i = new oe({}), {
    c() {
      m = it("a"), ie(i.$$.fragment), y = Et(" Download Template (.ZIP)"), K(m, "class", "button download-button svelte-1sr08ub"), K(m, "href", "");
    },
    m(n, l) {
      bt(n, m, l), ae(i, m, null), P(m, y), c = !0, r || (s = kt(m, "click", Mt(B[14])), r = !0);
    },
    p: xt,
    i(n) {
      c || (Rt(i.$$.fragment, n), c = !0);
    },
    o(n) {
      Nt(i.$$.fragment, n), c = !1;
    },
    d(n) {
      n && vt(m), se(i), r = !1, s();
    }
  };
}
function yn(B) {
  let m, i, y, c;
  return i = new oe({}), {
    c() {
      m = it("a"), ie(i.$$.fragment), y = Et(" Generating..."), K(m, "class", "button download-button svelte-1sr08ub"), K(m, "href", "");
    },
    m(r, s) {
      bt(r, m, s), ae(i, m, null), P(m, y), c = !0;
    },
    p: xt,
    i(r) {
      c || (Rt(i.$$.fragment, r), c = !0);
    },
    o(r) {
      Nt(i.$$.fragment, r), c = !1;
    },
    d(r) {
      r && vt(m), se(i);
    }
  };
}
function wn(B) {
  let m;
  return {
    c() {
      m = it("p"), m.textContent = "Loading data..";
    },
    m(i, y) {
      bt(i, m, y);
    },
    p: xt,
    i: xt,
    o: xt,
    d(i) {
      i && vt(m);
    }
  };
}
function kn(B) {
  let m, i, y = {
    ctx: B,
    current: null,
    token: null,
    hasCatch: !0,
    pending: wn,
    then: mn,
    catch: pn,
    value: 27,
    error: 31,
    blocks: [, , ,]
  };
  return we(B[13], y), {
    c() {
      m = ke(), y.block.c();
    },
    m(c, r) {
      bt(c, m, r), y.block.m(c, y.anchor = r), y.mount = () => m.parentNode, y.anchor = m, i = !0;
    },
    p(c, r) {
      B = c, Ee(y, B, r);
    },
    i(c) {
      i || (Rt(y.block), i = !0);
    },
    o(c) {
      for (let r = 0; r < 3; r += 1) {
        const s = y.blocks[r];
        Nt(s);
      }
      i = !1;
    },
    d(c) {
      c && vt(m), y.block.d(c), y.token = null, y = null;
    }
  };
}
function fe(B, m) {
  let i = [];
  const y = m ? "Modid" : "Mod Name";
  return B.length == 0 ? [`${y} is empty!`] : (B.length == 1 ? i.push(`${y} is only a single character! (It must be at least 2 characters long)!`) : B.length > 64 && i.push(`${y} has more than 64 characters!`), i.length === 0 ? void 0 : i);
}
function En(B) {
  if (B === void 0)
    return;
  let m = fe(B, !0) ?? [];
  const i = B.charAt(0);
  (i < "a" || i > "z") && m.push("Modid starts with an invalid character '" + i + "' (it must belowercase a-z)");
  let y = null;
  for (let c = 1; c < B.length; c++) {
    let r = B.charAt(c);
    r == "-" || r == "_" || "0" <= r && r <= "9" || "a" <= r && r <= "z" || (y == null && (y = []), y.push(r));
  }
  if (y != null) {
    let c = "Modid contains invalid characters: " + y.map((r) => "'" + r + "'").join(", ") + "!";
    m.push(c + "!");
  }
  if (m.length != 0)
    return m;
}
function Sn(B, m, i) {
  let y, c, r, s, n, l, h, v = "Template Mod", p = "com.example", g = !1, o = !1, f = !0, a, d = !1;
  const A = Promise.all([Oe()]).then(([e]) => {
    const Z = e.filter(($) => $.stable).filter(($) => {
      const D = $.version;
      return !(D.startsWith("1.14") && D != "1.14.4");
    });
    return i(0, h = Z[0].version), { game: Z };
  });
  function w(e) {
    if (e !== void 0)
      return fe(e, a === void 0);
  }
  async function S() {
    if (n !== void 0 || a !== void 0 && l !== void 0)
      return;
    i(8, d = !0);
    const e = await Promise.resolve().then(() => fn), Z = {
      modid: a ?? y,
      minecraftVersion: h,
      projectName: v,
      packageName: p,
      useKotlin: g,
      dataGeneration: o && r,
      splitSources: f && s
    }, $ = new Ge();
    await e.generateTemplate({
      config: Z,
      writer: {
        write: async (D, et, J) => {
          $.file(D, et, J);
        }
      }
    }), ze.saveAs(await $.generateAsync({ type: "blob", platform: "UNIX" }), `${y}-template-${Z.minecraftVersion}.zip`), i(8, d = !1);
  }
  function F() {
    i(4, p = p.toLocaleLowerCase().replace(/\s+/g, "_").replace(/[^a-za-z0-9_\.]/, ""));
  }
  function k() {
    i(2, a = y);
  }
  function x() {
    i(2, a = void 0);
  }
  function I() {
    v = this.value, i(1, v);
  }
  function U() {
    a = this.value, i(2, a);
  }
  function N() {
    p = this.value, i(4, p);
  }
  function M() {
    h = Se(this), i(0, h), i(13, A);
  }
  function _() {
    g = this.checked, i(5, g);
  }
  function E() {
    o = this.checked, i(6, o);
  }
  function T() {
    f = this.checked, i(7, f);
  }
  return B.$$.update = () => {
    B.$$.dirty[0] & 2 && i(3, y = he(v)), B.$$.dirty[0] & 1 && i(18, c = Ut(h || "1.99")), B.$$.dirty[0] & 262144 && i(10, r = c >= 17), B.$$.dirty[0] & 262144 && i(9, s = c >= 19), B.$$.dirty[0] & 8 && i(12, n = w(y)), B.$$.dirty[0] & 4 && i(11, l = En(a));
  }, [
    h,
    v,
    a,
    y,
    p,
    g,
    o,
    f,
    d,
    s,
    r,
    l,
    n,
    A,
    S,
    F,
    k,
    x,
    c,
    I,
    U,
    N,
    M,
    _,
    E,
    T
  ];
}
class Fn extends be {
  constructor(m) {
    super(), ve(this, m, Sn, kn, ye, {}, null, [-1, -1]);
  }
}
export {
  Fn as default
};
