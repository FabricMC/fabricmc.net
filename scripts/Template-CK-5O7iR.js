import { A as e, B as t, C as n, D as r, E as i, F as a, I as o, L as s, M as c, N as l, O as u, P as d, T as f, a as p, b as m, c as h, f as g, g as _, h as v, j as y, k as b, l as x, m as S, n as C, o as w, p as T, s as E, t as D, u as O, v as k, w as A, x as j, y as M, z as N } from "./index-client-C1cRk3Js.js";
import "./legacy-BXS2B6ev.js";
import { c as P, l as F, o as I, r as L, t as R } from "./Api-D_d2Iuos.js";
import z from "./DownloadIcon-Dx6AF_oA.js";
import { a as B, c as V, i as H, l as U, n as W, o as G, r as K, s as q, t as ee, u as te } from "./minecraft-BzvMyynV.js";
//#region \0rolldown/runtime.js
var J = Object.create, Y = Object.defineProperty, ne = Object.getOwnPropertyDescriptor, re = Object.getOwnPropertyNames, ie = Object.getPrototypeOf, ae = Object.prototype.hasOwnProperty, oe = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), X = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = re(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !ae.call(e, s) && s !== n && Y(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = ne(t, s)) || r.enumerable
	});
	return e;
}, se = (e, t, n) => (n = e == null ? {} : J(ie(e)), X(t || !e || !e.__esModule || !ae.call(e, "default") ? Y(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Z = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), ce = /* @__PURE__ */ oe(((e, t) => {
	(function(n) {
		typeof e == "object" && t !== void 0 ? t.exports = n() : typeof define == "function" && define.amd ? define([], n) : (typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : this).JSZip = n();
	})(function() {
		return function e(t, n, r) {
			function i(o, s) {
				if (!n[o]) {
					if (!t[o]) {
						var c = typeof Z == "function" && Z;
						if (!s && c) return c(o, !0);
						if (a) return a(o, !0);
						var l = /* @__PURE__ */ Error("Cannot find module '" + o + "'");
						throw l.code = "MODULE_NOT_FOUND", l;
					}
					var u = n[o] = { exports: {} };
					t[o][0].call(u.exports, function(e) {
						var n = t[o][1][e];
						return i(n || e);
					}, u, u.exports, e, t, n, r);
				}
				return n[o].exports;
			}
			for (var a = typeof Z == "function" && Z, o = 0; o < r.length; o++) i(r[o]);
			return i;
		}({
			1: [function(e, t, n) {
				var r = e("./utils"), i = e("./support"), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				n.encode = function(e) {
					for (var t, n, i, o, s, c, l, u = [], d = 0, f = e.length, p = f, m = r.getTypeOf(e) !== "string"; d < e.length;) p = f - d, i = m ? (t = e[d++], n = d < f ? e[d++] : 0, d < f ? e[d++] : 0) : (t = e.charCodeAt(d++), n = d < f ? e.charCodeAt(d++) : 0, d < f ? e.charCodeAt(d++) : 0), o = t >> 2, s = (3 & t) << 4 | n >> 4, c = 1 < p ? (15 & n) << 2 | i >> 6 : 64, l = 2 < p ? 63 & i : 64, u.push(a.charAt(o) + a.charAt(s) + a.charAt(c) + a.charAt(l));
					return u.join("");
				}, n.decode = function(e) {
					var t, n, r, o, s, c, l = 0, u = 0, d = "data:";
					if (e.substr(0, d.length) === d) throw Error("Invalid base64 input, it looks like a data url.");
					var f, p = 3 * (e = e.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
					if (e.charAt(e.length - 1) === a.charAt(64) && p--, e.charAt(e.length - 2) === a.charAt(64) && p--, p % 1 != 0) throw Error("Invalid base64 input, bad content length.");
					for (f = i.uint8array ? new Uint8Array(0 | p) : Array(0 | p); l < e.length;) t = a.indexOf(e.charAt(l++)) << 2 | (o = a.indexOf(e.charAt(l++))) >> 4, n = (15 & o) << 4 | (s = a.indexOf(e.charAt(l++))) >> 2, r = (3 & s) << 6 | (c = a.indexOf(e.charAt(l++))), f[u++] = t, s !== 64 && (f[u++] = n), c !== 64 && (f[u++] = r);
					return f;
				};
			}, {
				"./support": 30,
				"./utils": 32
			}],
			2: [function(e, t, n) {
				var r = e("./external"), i = e("./stream/DataWorker"), a = e("./stream/Crc32Probe"), o = e("./stream/DataLengthProbe");
				function s(e, t, n, r, i) {
					this.compressedSize = e, this.uncompressedSize = t, this.crc32 = n, this.compression = r, this.compressedContent = i;
				}
				s.prototype = {
					getContentWorker: function() {
						var e = new i(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new o("data_length")), t = this;
						return e.on("end", function() {
							if (this.streamInfo.data_length !== t.uncompressedSize) throw Error("Bug : uncompressed data size mismatch");
						}), e;
					},
					getCompressedWorker: function() {
						return new i(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
					}
				}, s.createWorkerFrom = function(e, t, n) {
					return e.pipe(new a()).pipe(new o("uncompressedSize")).pipe(t.compressWorker(n)).pipe(new o("compressedSize")).withStreamInfo("compression", t);
				}, t.exports = s;
			}, {
				"./external": 6,
				"./stream/Crc32Probe": 25,
				"./stream/DataLengthProbe": 26,
				"./stream/DataWorker": 27
			}],
			3: [function(e, t, n) {
				var r = e("./stream/GenericWorker");
				n.STORE = {
					magic: "\0\0",
					compressWorker: function() {
						return new r("STORE compression");
					},
					uncompressWorker: function() {
						return new r("STORE decompression");
					}
				}, n.DEFLATE = e("./flate");
			}, {
				"./flate": 7,
				"./stream/GenericWorker": 28
			}],
			4: [function(e, t, n) {
				var r = e("./utils"), i = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t) {
					return e !== void 0 && e.length ? r.getTypeOf(e) === "string" ? function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t.charCodeAt(s))];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : function(e, t, n, r) {
						var a = i, o = r + n;
						e ^= -1;
						for (var s = r; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
						return -1 ^ e;
					}(0 | t, e, e.length, 0) : 0;
				};
			}, { "./utils": 32 }],
			5: [function(e, t, n) {
				n.base64 = !1, n.binary = !1, n.dir = !1, n.createFolders = !0, n.date = null, n.compression = null, n.compressionOptions = null, n.comment = null, n.unixPermissions = null, n.dosPermissions = null;
			}, {}],
			6: [function(e, t, n) {
				var r = null;
				r = typeof Promise < "u" ? Promise : e("lie"), t.exports = { Promise: r };
			}, { lie: 37 }],
			7: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Uint32Array < "u", i = e("pako"), a = e("./utils"), o = e("./stream/GenericWorker"), s = r ? "uint8array" : "array";
				function c(e, t) {
					o.call(this, "FlateWorker/" + e), this._pako = null, this._pakoAction = e, this._pakoOptions = t, this.meta = {};
				}
				n.magic = "\b\0", a.inherits(c, o), c.prototype.processChunk = function(e) {
					this.meta = e.meta, this._pako === null && this._createPako(), this._pako.push(a.transformTo(s, e.data), !1);
				}, c.prototype.flush = function() {
					o.prototype.flush.call(this), this._pako === null && this._createPako(), this._pako.push([], !0);
				}, c.prototype.cleanUp = function() {
					o.prototype.cleanUp.call(this), this._pako = null;
				}, c.prototype._createPako = function() {
					this._pako = new i[this._pakoAction]({
						raw: !0,
						level: this._pakoOptions.level || -1
					});
					var e = this;
					this._pako.onData = function(t) {
						e.push({
							data: t,
							meta: e.meta
						});
					};
				}, n.compressWorker = function(e) {
					return new c("Deflate", e);
				}, n.uncompressWorker = function() {
					return new c("Inflate", {});
				};
			}, {
				"./stream/GenericWorker": 28,
				"./utils": 32,
				pako: 38
			}],
			8: [function(e, t, n) {
				function r(e, t) {
					var n, r = "";
					for (n = 0; n < t; n++) r += String.fromCharCode(255 & e), e >>>= 8;
					return r;
				}
				function i(e, t, n, i, o, u) {
					var d, f, p = e.file, m = e.compression, h = u !== s.utf8encode, g = a.transformTo("string", u(p.name)), _ = a.transformTo("string", s.utf8encode(p.name)), v = p.comment, y = a.transformTo("string", u(v)), b = a.transformTo("string", s.utf8encode(v)), x = _.length !== p.name.length, S = b.length !== v.length, C = "", w = "", T = "", E = p.dir, D = p.date, O = {
						crc32: 0,
						compressedSize: 0,
						uncompressedSize: 0
					};
					t && !n || (O.crc32 = e.crc32, O.compressedSize = e.compressedSize, O.uncompressedSize = e.uncompressedSize);
					var k = 0;
					t && (k |= 8), h || !x && !S || (k |= 2048);
					var A = 0, j = 0;
					E && (A |= 16), o === "UNIX" ? (j = 798, A |= function(e, t) {
						var n = e;
						return e || (n = t ? 16893 : 33204), (65535 & n) << 16;
					}(p.unixPermissions, E)) : (j = 20, A |= function(e) {
						return 63 & (e || 0);
					}(p.dosPermissions)), d = D.getUTCHours(), d <<= 6, d |= D.getUTCMinutes(), d <<= 5, d |= D.getUTCSeconds() / 2, f = D.getUTCFullYear() - 1980, f <<= 4, f |= D.getUTCMonth() + 1, f <<= 5, f |= D.getUTCDate(), x && (w = r(1, 1) + r(c(g), 4) + _, C += "up" + r(w.length, 2) + w), S && (T = r(1, 1) + r(c(y), 4) + b, C += "uc" + r(T.length, 2) + T);
					var M = "";
					return M += "\n\0", M += r(k, 2), M += m.magic, M += r(d, 2), M += r(f, 2), M += r(O.crc32, 4), M += r(O.compressedSize, 4), M += r(O.uncompressedSize, 4), M += r(g.length, 2), M += r(C.length, 2), {
						fileRecord: l.LOCAL_FILE_HEADER + M + g + C,
						dirRecord: l.CENTRAL_FILE_HEADER + r(j, 2) + M + r(y.length, 2) + "\0\0\0\0" + r(A, 4) + r(i, 4) + g + C + y
					};
				}
				var a = e("../utils"), o = e("../stream/GenericWorker"), s = e("../utf8"), c = e("../crc32"), l = e("../signature");
				function u(e, t, n, r) {
					o.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t, this.zipPlatform = n, this.encodeFileName = r, this.streamFiles = e, this.accumulate = !1, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
				}
				a.inherits(u, o), u.prototype.push = function(e) {
					var t = e.meta.percent || 0, n = this.entriesCount, r = this._sources.length;
					this.accumulate ? this.contentBuffer.push(e) : (this.bytesWritten += e.data.length, o.prototype.push.call(this, {
						data: e.data,
						meta: {
							currentFile: this.currentFile,
							percent: n ? (t + 100 * (n - r - 1)) / n : 100
						}
					}));
				}, u.prototype.openedSource = function(e) {
					this.currentSourceOffset = this.bytesWritten, this.currentFile = e.file.name;
					var t = this.streamFiles && !e.file.dir;
					if (t) {
						var n = i(e, t, !1, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
						this.push({
							data: n.fileRecord,
							meta: { percent: 0 }
						});
					} else this.accumulate = !0;
				}, u.prototype.closedSource = function(e) {
					this.accumulate = !1;
					var t = this.streamFiles && !e.file.dir, n = i(e, t, !0, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
					if (this.dirRecords.push(n.dirRecord), t) this.push({
						data: function(e) {
							return l.DATA_DESCRIPTOR + r(e.crc32, 4) + r(e.compressedSize, 4) + r(e.uncompressedSize, 4);
						}(e),
						meta: { percent: 100 }
					});
					else for (this.push({
						data: n.fileRecord,
						meta: { percent: 0 }
					}); this.contentBuffer.length;) this.push(this.contentBuffer.shift());
					this.currentFile = null;
				}, u.prototype.flush = function() {
					for (var e = this.bytesWritten, t = 0; t < this.dirRecords.length; t++) this.push({
						data: this.dirRecords[t],
						meta: { percent: 100 }
					});
					var n = this.bytesWritten - e, i = function(e, t, n, i, o) {
						var s = a.transformTo("string", o(i));
						return l.CENTRAL_DIRECTORY_END + "\0\0\0\0" + r(e, 2) + r(e, 2) + r(t, 4) + r(n, 4) + r(s.length, 2) + s;
					}(this.dirRecords.length, n, e, this.zipComment, this.encodeFileName);
					this.push({
						data: i,
						meta: { percent: 100 }
					});
				}, u.prototype.prepareNextSource = function() {
					this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
				}, u.prototype.registerPrevious = function(e) {
					this._sources.push(e);
					var t = this;
					return e.on("data", function(e) {
						t.processChunk(e);
					}), e.on("end", function() {
						t.closedSource(t.previous.streamInfo), t._sources.length ? t.prepareNextSource() : t.end();
					}), e.on("error", function(e) {
						t.error(e);
					}), this;
				}, u.prototype.resume = function() {
					return !!o.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), !0) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), !0));
				}, u.prototype.error = function(e) {
					var t = this._sources;
					if (!o.prototype.error.call(this, e)) return !1;
					for (var n = 0; n < t.length; n++) try {
						t[n].error(e);
					} catch {}
					return !0;
				}, u.prototype.lock = function() {
					o.prototype.lock.call(this);
					for (var e = this._sources, t = 0; t < e.length; t++) e[t].lock();
				}, t.exports = u;
			}, {
				"../crc32": 4,
				"../signature": 23,
				"../stream/GenericWorker": 28,
				"../utf8": 31,
				"../utils": 32
			}],
			9: [function(e, t, n) {
				var r = e("../compressions"), i = e("./ZipFileWorker");
				n.generateWorker = function(e, t, n) {
					var a = new i(t.streamFiles, n, t.platform, t.encodeFileName), o = 0;
					try {
						e.forEach(function(e, n) {
							o++;
							var i = function(e, t) {
								var n = e || t, i = r[n];
								if (!i) throw Error(n + " is not a valid compression method !");
								return i;
							}(n.options.compression, t.compression), s = n.options.compressionOptions || t.compressionOptions || {}, c = n.dir, l = n.date;
							n._compressWorker(i, s).withStreamInfo("file", {
								name: e,
								dir: c,
								date: l,
								comment: n.comment || "",
								unixPermissions: n.unixPermissions,
								dosPermissions: n.dosPermissions
							}).pipe(a);
						}), a.entriesCount = o;
					} catch (e) {
						a.error(e);
					}
					return a;
				};
			}, {
				"../compressions": 3,
				"./ZipFileWorker": 8
			}],
			10: [function(e, t, n) {
				function r() {
					if (!(this instanceof r)) return new r();
					if (arguments.length) throw Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
					this.files = Object.create(null), this.comment = null, this.root = "", this.clone = function() {
						var e = new r();
						for (var t in this) typeof this[t] != "function" && (e[t] = this[t]);
						return e;
					};
				}
				(r.prototype = e("./object")).loadAsync = e("./load"), r.support = e("./support"), r.defaults = e("./defaults"), r.version = "3.10.2", r.loadAsync = function(e, t) {
					return new r().loadAsync(e, t);
				}, r.external = e("./external"), t.exports = r;
			}, {
				"./defaults": 5,
				"./external": 6,
				"./load": 11,
				"./object": 15,
				"./support": 30
			}],
			11: [function(e, t, n) {
				var r = e("./utils"), i = e("./external"), a = e("./utf8"), o = e("./zipEntries"), s = e("./stream/Crc32Probe"), c = e("./nodejsUtils");
				function l(e) {
					return new i.Promise(function(t, n) {
						var r = e.decompressed.getContentWorker().pipe(new s());
						r.on("error", function(e) {
							n(e);
						}).on("end", function() {
							r.streamInfo.crc32 === e.decompressed.crc32 ? t() : n(/* @__PURE__ */ Error("Corrupted zip : CRC32 mismatch"));
						}).resume();
					});
				}
				t.exports = function(e, t) {
					var n = this;
					return t = r.extend(t || {}, {
						base64: !1,
						checkCRC32: !1,
						optimizedBinaryString: !1,
						createFolders: !1,
						decodeFileName: a.utf8decode
					}), c.isNode && c.isStream(e) ? i.Promise.reject(/* @__PURE__ */ Error("JSZip can't accept a stream when loading a zip file.")) : r.prepareContent("the loaded zip file", e, !0, t.optimizedBinaryString, t.base64).then(function(e) {
						var n = new o(t);
						return n.load(e), n;
					}).then(function(e) {
						var n = [i.Promise.resolve(e)], r = e.files;
						if (t.checkCRC32) for (var a = 0; a < r.length; a++) n.push(l(r[a]));
						return i.Promise.all(n);
					}).then(function(e) {
						for (var i = e.shift(), a = i.files, o = 0; o < a.length; o++) {
							var s = a[o], c = s.fileNameStr, l = r.resolve(s.fileNameStr);
							n.file(l, s.decompressed, {
								binary: !0,
								optimizedBinaryString: !0,
								date: s.date,
								dir: s.dir,
								comment: s.fileCommentStr.length ? s.fileCommentStr : null,
								unixPermissions: s.unixPermissions,
								dosPermissions: s.dosPermissions,
								createFolders: t.createFolders
							}), s.dir || (n.file(l).unsafeOriginalName = c);
						}
						return i.zipComment.length && (n.comment = i.zipComment), n;
					});
				};
			}, {
				"./external": 6,
				"./nodejsUtils": 14,
				"./stream/Crc32Probe": 25,
				"./utf8": 31,
				"./utils": 32,
				"./zipEntries": 33
			}],
			12: [function(e, t, n) {
				var r = e("../utils"), i = e("../stream/GenericWorker");
				function a(e, t) {
					i.call(this, "Nodejs stream input adapter for " + e), this._upstreamEnded = !1, this._bindStream(t);
				}
				r.inherits(a, i), a.prototype._bindStream = function(e) {
					var t = this;
					(this._stream = e).pause(), e.on("data", function(e) {
						t.push({
							data: e,
							meta: { percent: 0 }
						});
					}).on("error", function(e) {
						t.isPaused ? this.generatedError = e : t.error(e);
					}).on("end", function() {
						t.isPaused ? t._upstreamEnded = !0 : t.end();
					});
				}, a.prototype.pause = function() {
					return !!i.prototype.pause.call(this) && (this._stream.pause(), !0);
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), !0);
				}, t.exports = a;
			}, {
				"../stream/GenericWorker": 28,
				"../utils": 32
			}],
			13: [function(e, t, n) {
				var r = e("readable-stream").Readable;
				function i(e, t, n) {
					r.call(this, t), this._helper = e;
					var i = this;
					e.on("data", function(e, t) {
						i.push(e) || i._helper.pause(), n && n(t);
					}).on("error", function(e) {
						i.emit("error", e);
					}).on("end", function() {
						i.push(null);
					});
				}
				e("../utils").inherits(i, r), i.prototype._read = function() {
					this._helper.resume();
				}, t.exports = i;
			}, {
				"../utils": 32,
				"readable-stream": 16
			}],
			14: [function(e, t, n) {
				t.exports = {
					isNode: typeof Buffer < "u",
					newBufferFrom: function(e, t) {
						if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e, t);
						if (typeof e == "number") throw Error("The \"data\" argument must not be a number");
						return new Buffer(e, t);
					},
					allocBuffer: function(e) {
						if (Buffer.alloc) return Buffer.alloc(e);
						var t = new Buffer(e);
						return t.fill(0), t;
					},
					isBuffer: function(e) {
						return Buffer.isBuffer(e);
					},
					isStream: function(e) {
						return e && typeof e.on == "function" && typeof e.pause == "function" && typeof e.resume == "function";
					}
				};
			}, {}],
			15: [function(e, t, n) {
				function r(e, t, n) {
					var r, i = a.getTypeOf(t), s = a.extend(n || {}, c);
					s.date = s.date || /* @__PURE__ */ new Date(), s.compression !== null && (s.compression = s.compression.toUpperCase()), typeof s.unixPermissions == "string" && (s.unixPermissions = parseInt(s.unixPermissions, 8)), s.unixPermissions && 16384 & s.unixPermissions && (s.dir = !0), s.dosPermissions && 16 & s.dosPermissions && (s.dir = !0), s.dir && (e = h(e)), s.createFolders && (r = m(e)) && g.call(this, r, !0);
					var d = i === "string" && !1 === s.binary && !1 === s.base64;
					n && n.binary !== void 0 || (s.binary = !d), (t instanceof l && t.uncompressedSize === 0 || s.dir || !t || t.length === 0) && (s.base64 = !1, s.binary = !0, t = "", s.compression = "STORE", i = "string");
					var _ = null;
					_ = t instanceof l || t instanceof o ? t : f.isNode && f.isStream(t) ? new p(e, t) : a.prepareContent(e, t, s.binary, s.optimizedBinaryString, s.base64);
					var v = new u(e, _, s);
					this.files[e] = v;
				}
				var i = e("./utf8"), a = e("./utils"), o = e("./stream/GenericWorker"), s = e("./stream/StreamHelper"), c = e("./defaults"), l = e("./compressedObject"), u = e("./zipObject"), d = e("./generate"), f = e("./nodejsUtils"), p = e("./nodejs/NodejsStreamInputAdapter"), m = function(e) {
					e.slice(-1) === "/" && (e = e.substring(0, e.length - 1));
					var t = e.lastIndexOf("/");
					return 0 < t ? e.substring(0, t) : "";
				}, h = function(e) {
					return e.slice(-1) !== "/" && (e += "/"), e;
				}, g = function(e, t) {
					return t = t === void 0 ? c.createFolders : t, e = h(e), this.files[e] || r.call(this, e, null, {
						dir: !0,
						createFolders: t
					}), this.files[e];
				};
				function _(e) {
					return Object.prototype.toString.call(e) === "[object RegExp]";
				}
				t.exports = {
					load: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					forEach: function(e) {
						var t, n, r;
						for (t in this.files) r = this.files[t], (n = t.slice(this.root.length, t.length)) && t.slice(0, this.root.length) === this.root && e(n, r);
					},
					filter: function(e) {
						var t = [];
						return this.forEach(function(n, r) {
							e(n, r) && t.push(r);
						}), t;
					},
					file: function(e, t, n) {
						if (arguments.length !== 1) return e = this.root + e, r.call(this, e, t, n), this;
						if (_(e)) {
							var i = e;
							return this.filter(function(e, t) {
								return !t.dir && i.test(e);
							});
						}
						var a = this.files[this.root + e];
						return a && !a.dir ? a : null;
					},
					folder: function(e) {
						if (!e) return this;
						if (_(e)) return this.filter(function(t, n) {
							return n.dir && e.test(t);
						});
						var t = this.root + e, n = g.call(this, t), r = this.clone();
						return r.root = n.name, r;
					},
					remove: function(e) {
						e = this.root + e;
						var t = this.files[e];
						if (t ||= (e.slice(-1) !== "/" && (e += "/"), this.files[e]), t && !t.dir) delete this.files[e];
						else for (var n = this.filter(function(t, n) {
							return n.name.slice(0, e.length) === e;
						}), r = 0; r < n.length; r++) delete this.files[n[r].name];
						return this;
					},
					generate: function() {
						throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
					},
					generateInternalStream: function(e) {
						var t, n = {};
						try {
							if ((n = a.extend(e || {}, {
								streamFiles: !1,
								compression: "STORE",
								compressionOptions: null,
								type: "",
								platform: "DOS",
								comment: null,
								mimeType: "application/zip",
								encodeFileName: i.utf8encode
							})).type = n.type.toLowerCase(), n.compression = n.compression.toUpperCase(), n.type === "binarystring" && (n.type = "string"), !n.type) throw Error("No output type specified.");
							a.checkSupport(n.type), n.platform !== "darwin" && n.platform !== "freebsd" && n.platform !== "linux" && n.platform !== "sunos" || (n.platform = "UNIX"), n.platform === "win32" && (n.platform = "DOS");
							var r = n.comment || this.comment || "";
							t = d.generateWorker(this, n, r);
						} catch (e) {
							(t = new o("error")).error(e);
						}
						return new s(t, n.type || "string", n.mimeType);
					},
					generateAsync: function(e, t) {
						return this.generateInternalStream(e).accumulate(t);
					},
					generateNodeStream: function(e, t) {
						return (e ||= {}).type || (e.type = "nodebuffer"), this.generateInternalStream(e).toNodejsStream(t);
					}
				};
			}, {
				"./compressedObject": 2,
				"./defaults": 5,
				"./generate": 9,
				"./nodejs/NodejsStreamInputAdapter": 12,
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31,
				"./utils": 32,
				"./zipObject": 35
			}],
			16: [function(e, t, n) {
				t.exports = e("stream");
			}, { stream: void 0 }],
			17: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
					for (var t = 0; t < this.data.length; t++) e[t] = 255 & e[t];
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data[this.zero + e];
				}, i.prototype.lastIndexOfSignature = function(e) {
					for (var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.length - 4; 0 <= a; --a) if (this.data[a] === t && this.data[a + 1] === n && this.data[a + 2] === r && this.data[a + 3] === i) return a - this.zero;
					return -1;
				}, i.prototype.readAndCheckSignature = function(e) {
					var t = e.charCodeAt(0), n = e.charCodeAt(1), r = e.charCodeAt(2), i = e.charCodeAt(3), a = this.readData(4);
					return t === a[0] && n === a[1] && r === a[2] && i === a[3];
				}, i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return [];
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			18: [function(e, t, n) {
				var r = e("../utils");
				function i(e) {
					this.data = e, this.length = e.length, this.index = 0, this.zero = 0;
				}
				i.prototype = {
					checkOffset: function(e) {
						this.checkIndex(this.index + e);
					},
					checkIndex: function(e) {
						if (this.length < this.zero + e || e < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
					},
					setIndex: function(e) {
						this.checkIndex(e), this.index = e;
					},
					skip: function(e) {
						this.setIndex(this.index + e);
					},
					byteAt: function() {},
					readInt: function(e) {
						var t, n = 0;
						for (this.checkOffset(e), t = this.index + e - 1; t >= this.index; t--) n = (n << 8) + this.byteAt(t);
						return this.index += e, n;
					},
					readString: function(e) {
						return r.transformTo("string", this.readData(e));
					},
					readData: function() {},
					lastIndexOfSignature: function() {},
					readAndCheckSignature: function() {},
					readDate: function() {
						var e = this.readInt(4);
						return new Date(Date.UTC(1980 + (e >> 25 & 127), (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1));
					}
				}, t.exports = i;
			}, { "../utils": 32 }],
			19: [function(e, t, n) {
				var r = e("./Uint8ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./Uint8ArrayReader": 21
			}],
			20: [function(e, t, n) {
				var r = e("./DataReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.byteAt = function(e) {
					return this.data.charCodeAt(this.zero + e);
				}, i.prototype.lastIndexOfSignature = function(e) {
					return this.data.lastIndexOf(e) - this.zero;
				}, i.prototype.readAndCheckSignature = function(e) {
					return e === this.readData(4);
				}, i.prototype.readData = function(e) {
					this.checkOffset(e);
					var t = this.data.slice(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./DataReader": 18
			}],
			21: [function(e, t, n) {
				var r = e("./ArrayReader");
				function i(e) {
					r.call(this, e);
				}
				e("../utils").inherits(i, r), i.prototype.readData = function(e) {
					if (this.checkOffset(e), e === 0) return /* @__PURE__ */ new Uint8Array();
					var t = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
					return this.index += e, t;
				}, t.exports = i;
			}, {
				"../utils": 32,
				"./ArrayReader": 17
			}],
			22: [function(e, t, n) {
				var r = e("../utils"), i = e("../support"), a = e("./ArrayReader"), o = e("./StringReader"), s = e("./NodeBufferReader"), c = e("./Uint8ArrayReader");
				t.exports = function(e) {
					var t = r.getTypeOf(e);
					return r.checkSupport(t), t !== "string" || i.uint8array ? t === "nodebuffer" ? new s(e) : i.uint8array ? new c(r.transformTo("uint8array", e)) : new a(r.transformTo("array", e)) : new o(e);
				};
			}, {
				"../support": 30,
				"../utils": 32,
				"./ArrayReader": 17,
				"./NodeBufferReader": 19,
				"./StringReader": 20,
				"./Uint8ArrayReader": 21
			}],
			23: [function(e, t, n) {
				n.LOCAL_FILE_HEADER = "PK", n.CENTRAL_FILE_HEADER = "PK", n.CENTRAL_DIRECTORY_END = "PK", n.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", n.ZIP64_CENTRAL_DIRECTORY_END = "PK", n.DATA_DESCRIPTOR = "PK\x07\b";
			}, {}],
			24: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../utils");
				function a(e) {
					r.call(this, "ConvertWorker to " + e), this.destType = e;
				}
				i.inherits(a, r), a.prototype.processChunk = function(e) {
					this.push({
						data: i.transformTo(this.destType, e.data),
						meta: e.meta
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			25: [function(e, t, n) {
				var r = e("./GenericWorker"), i = e("../crc32");
				function a() {
					r.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
				}
				e("../utils").inherits(a, r), a.prototype.processChunk = function(e) {
					this.streamInfo.crc32 = i(e.data, this.streamInfo.crc32 || 0), this.push(e);
				}, t.exports = a;
			}, {
				"../crc32": 4,
				"../utils": 32,
				"./GenericWorker": 28
			}],
			26: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataLengthProbe for " + e), this.propName = e, this.withStreamInfo(e, 0);
				}
				r.inherits(a, i), a.prototype.processChunk = function(e) {
					if (e) {
						var t = this.streamInfo[this.propName] || 0;
						this.streamInfo[this.propName] = t + e.data.length;
					}
					i.prototype.processChunk.call(this, e);
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			27: [function(e, t, n) {
				var r = e("../utils"), i = e("./GenericWorker");
				function a(e) {
					i.call(this, "DataWorker");
					var t = this;
					this.dataIsReady = !1, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = !1, e.then(function(e) {
						t.dataIsReady = !0, t.data = e, t.max = e && e.length || 0, t.type = r.getTypeOf(e), t.isPaused || t._tickAndRepeat();
					}, function(e) {
						t.error(e);
					});
				}
				r.inherits(a, i), a.prototype.cleanUp = function() {
					i.prototype.cleanUp.call(this), this.data = null;
				}, a.prototype.resume = function() {
					return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = !0, r.delay(this._tickAndRepeat, [], this)), !0);
				}, a.prototype._tickAndRepeat = function() {
					this._tickScheduled = !1, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (r.delay(this._tickAndRepeat, [], this), this._tickScheduled = !0));
				}, a.prototype._tick = function() {
					if (this.isPaused || this.isFinished) return !1;
					var e = null, t = Math.min(this.max, this.index + 16384);
					if (this.index >= this.max) return this.end();
					switch (this.type) {
						case "string":
							e = this.data.substring(this.index, t);
							break;
						case "uint8array":
							e = this.data.subarray(this.index, t);
							break;
						case "array":
						case "nodebuffer": e = this.data.slice(this.index, t);
					}
					return this.index = t, this.push({
						data: e,
						meta: { percent: this.max ? this.index / this.max * 100 : 0 }
					});
				}, t.exports = a;
			}, {
				"../utils": 32,
				"./GenericWorker": 28
			}],
			28: [function(e, t, n) {
				function r(e) {
					this.name = e || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = !0, this.isFinished = !1, this.isLocked = !1, this._listeners = {
						data: [],
						end: [],
						error: []
					}, this.previous = null;
				}
				r.prototype = {
					push: function(e) {
						this.emit("data", e);
					},
					end: function() {
						if (this.isFinished) return !1;
						this.flush();
						try {
							this.emit("end"), this.cleanUp(), this.isFinished = !0;
						} catch (e) {
							this.emit("error", e);
						}
						return !0;
					},
					error: function(e) {
						return !this.isFinished && (this.isPaused ? this.generatedError = e : (this.isFinished = !0, this.emit("error", e), this.previous && this.previous.error(e), this.cleanUp()), !0);
					},
					on: function(e, t) {
						return this._listeners[e].push(t), this;
					},
					cleanUp: function() {
						this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
					},
					emit: function(e, t) {
						if (this._listeners[e]) for (var n = 0; n < this._listeners[e].length; n++) this._listeners[e][n].call(this, t);
					},
					pipe: function(e) {
						return e.registerPrevious(this);
					},
					registerPrevious: function(e) {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.streamInfo = e.streamInfo, this.mergeStreamInfo(), this.previous = e;
						var t = this;
						return e.on("data", function(e) {
							t.processChunk(e);
						}), e.on("end", function() {
							t.end();
						}), e.on("error", function(e) {
							t.error(e);
						}), this;
					},
					pause: function() {
						return !this.isPaused && !this.isFinished && (this.isPaused = !0, this.previous && this.previous.pause(), !0);
					},
					resume: function() {
						if (!this.isPaused || this.isFinished) return !1;
						var e = this.isPaused = !1;
						return this.generatedError && (this.error(this.generatedError), e = !0), this.previous && this.previous.resume(), !e;
					},
					flush: function() {},
					processChunk: function(e) {
						this.push(e);
					},
					withStreamInfo: function(e, t) {
						return this.extraStreamInfo[e] = t, this.mergeStreamInfo(), this;
					},
					mergeStreamInfo: function() {
						for (var e in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e) && (this.streamInfo[e] = this.extraStreamInfo[e]);
					},
					lock: function() {
						if (this.isLocked) throw Error("The stream '" + this + "' has already been used.");
						this.isLocked = !0, this.previous && this.previous.lock();
					},
					toString: function() {
						var e = "Worker " + this.name;
						return this.previous ? this.previous + " -> " + e : e;
					}
				}, t.exports = r;
			}, {}],
			29: [function(e, t, n) {
				var r = e("../utils"), i = e("./ConvertWorker"), a = e("./GenericWorker"), o = e("../base64"), s = e("../support"), c = e("../external"), l = null;
				if (s.nodestream) try {
					l = e("../nodejs/NodejsStreamOutputAdapter");
				} catch {}
				function u(e, t) {
					return new c.Promise(function(n, i) {
						var a = [], s = e._internalType, c = e._outputType, l = e._mimeType;
						e.on("data", function(e, n) {
							a.push(e), t && t(n);
						}).on("error", function(e) {
							a = [], i(e);
						}).on("end", function() {
							try {
								n(function(e, t, n) {
									switch (e) {
										case "blob": return r.newBlob(r.transformTo("arraybuffer", t), n);
										case "base64": return o.encode(t);
										default: return r.transformTo(e, t);
									}
								}(c, function(e, t) {
									var n, r = 0, i = null, a = 0;
									for (n = 0; n < t.length; n++) a += t[n].length;
									switch (e) {
										case "string": return t.join("");
										case "array": return Array.prototype.concat.apply([], t);
										case "uint8array":
											for (i = new Uint8Array(a), n = 0; n < t.length; n++) i.set(t[n], r), r += t[n].length;
											return i;
										case "nodebuffer": return Buffer.concat(t);
										default: throw Error("concat : unsupported type '" + e + "'");
									}
								}(s, a), l));
							} catch (e) {
								i(e);
							}
							a = [];
						}).resume();
					});
				}
				function d(e, t, n) {
					var o = t;
					switch (t) {
						case "blob":
						case "arraybuffer":
							o = "uint8array";
							break;
						case "base64": o = "string";
					}
					try {
						this._internalType = o, this._outputType = t, this._mimeType = n, r.checkSupport(o), this._worker = e.pipe(new i(o)), e.lock();
					} catch (e) {
						this._worker = new a("error"), this._worker.error(e);
					}
				}
				d.prototype = {
					accumulate: function(e) {
						return u(this, e);
					},
					on: function(e, t) {
						var n = this;
						return e === "data" ? this._worker.on(e, function(e) {
							t.call(n, e.data, e.meta);
						}) : this._worker.on(e, function() {
							r.delay(t, arguments, n);
						}), this;
					},
					resume: function() {
						return r.delay(this._worker.resume, [], this._worker), this;
					},
					pause: function() {
						return this._worker.pause(), this;
					},
					toNodejsStream: function(e) {
						if (r.checkSupport("nodestream"), this._outputType !== "nodebuffer") throw Error(this._outputType + " is not supported by this method");
						return new l(this, { objectMode: this._outputType !== "nodebuffer" }, e);
					}
				}, t.exports = d;
			}, {
				"../base64": 1,
				"../external": 6,
				"../nodejs/NodejsStreamOutputAdapter": 13,
				"../support": 30,
				"../utils": 32,
				"./ConvertWorker": 24,
				"./GenericWorker": 28
			}],
			30: [function(e, t, n) {
				if (n.base64 = !0, n.array = !0, n.string = !0, n.arraybuffer = typeof ArrayBuffer < "u" && typeof Uint8Array < "u", n.nodebuffer = typeof Buffer < "u", n.uint8array = typeof Uint8Array < "u", typeof ArrayBuffer > "u") n.blob = !1;
				else {
					var r = /* @__PURE__ */ new ArrayBuffer(0);
					try {
						n.blob = new Blob([r], { type: "application/zip" }).size === 0;
					} catch {
						try {
							var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							i.append(r), n.blob = i.getBlob("application/zip").size === 0;
						} catch {
							n.blob = !1;
						}
					}
				}
				try {
					n.nodestream = !!e("readable-stream").Readable;
				} catch {
					n.nodestream = !1;
				}
			}, { "readable-stream": 16 }],
			31: [function(e, t, n) {
				for (var r = e("./utils"), i = e("./support"), a = e("./nodejsUtils"), o = e("./stream/GenericWorker"), s = Array(256), c = 0; c < 256; c++) s[c] = 252 <= c ? 6 : 248 <= c ? 5 : 240 <= c ? 4 : 224 <= c ? 3 : 192 <= c ? 2 : 1;
				s[254] = s[254] = 1;
				function l() {
					o.call(this, "utf-8 decode"), this.leftOver = null;
				}
				function u() {
					o.call(this, "utf-8 encode");
				}
				n.utf8encode = function(e) {
					return i.nodebuffer ? a.newBufferFrom(e, "utf-8") : function(e) {
						var t, n, r, a, o, s = e.length, c = 0;
						for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
						for (t = i.uint8array ? new Uint8Array(c) : Array(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (r = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (r - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
						return t;
					}(e);
				}, n.utf8decode = function(e) {
					return i.nodebuffer ? r.transformTo("nodebuffer", e).toString("utf-8") : function(e) {
						var t, n, i, a, o = e.length, c = Array(2 * o);
						for (t = n = 0; t < o;) if ((i = e[t++]) < 128) c[n++] = i;
						else if (4 < (a = s[i])) c[n++] = 65533, t += a - 1;
						else {
							for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && t < o;) i = i << 6 | 63 & e[t++], a--;
							1 < a ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, c[n++] = 56320 | 1023 & i);
						}
						return c.length !== n && (c.subarray ? c = c.subarray(0, n) : c.length = n), r.applyFromCharCode(c);
					}(e = r.transformTo(i.uint8array ? "uint8array" : "array", e));
				}, r.inherits(l, o), l.prototype.processChunk = function(e) {
					var t = r.transformTo(i.uint8array ? "uint8array" : "array", e.data);
					if (this.leftOver && this.leftOver.length) {
						if (i.uint8array) {
							var a = t;
							(t = new Uint8Array(a.length + this.leftOver.length)).set(this.leftOver, 0), t.set(a, this.leftOver.length);
						} else t = this.leftOver.concat(t);
						this.leftOver = null;
					}
					var o = function(e, t) {
						var n;
						for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
						return n < 0 || n === 0 ? t : n + s[e[n]] > t ? n : t;
					}(t), c = t;
					o !== t.length && (i.uint8array ? (c = t.subarray(0, o), this.leftOver = t.subarray(o, t.length)) : (c = t.slice(0, o), this.leftOver = t.slice(o, t.length))), this.push({
						data: n.utf8decode(c),
						meta: e.meta
					});
				}, l.prototype.flush = function() {
					this.leftOver && this.leftOver.length && (this.push({
						data: n.utf8decode(this.leftOver),
						meta: {}
					}), this.leftOver = null);
				}, n.Utf8DecodeWorker = l, r.inherits(u, o), u.prototype.processChunk = function(e) {
					this.push({
						data: n.utf8encode(e.data),
						meta: e.meta
					});
				}, n.Utf8EncodeWorker = u;
			}, {
				"./nodejsUtils": 14,
				"./stream/GenericWorker": 28,
				"./support": 30,
				"./utils": 32
			}],
			32: [function(e, t, n) {
				var r = e("./support"), i = e("./base64"), a = e("./nodejsUtils"), o = e("./external");
				function s(e) {
					return e;
				}
				function c(e, t) {
					for (var n = 0; n < e.length; ++n) t[n] = 255 & e.charCodeAt(n);
					return t;
				}
				e("setimmediate"), n.newBlob = function(e, t) {
					n.checkSupport("blob");
					try {
						return new Blob([e], { type: t });
					} catch {
						try {
							var r = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
							return r.append(e), r.getBlob(t);
						} catch {
							throw Error("Bug : can't construct the Blob.");
						}
					}
				};
				var l = {
					stringifyByChunk: function(e, t, n) {
						var r = [], i = 0, a = e.length;
						if (a <= n) return String.fromCharCode.apply(null, e);
						for (; i < a;) t === "array" || t === "nodebuffer" ? r.push(String.fromCharCode.apply(null, e.slice(i, Math.min(i + n, a)))) : r.push(String.fromCharCode.apply(null, e.subarray(i, Math.min(i + n, a)))), i += n;
						return r.join("");
					},
					stringifyByChar: function(e) {
						for (var t = "", n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
						return t;
					},
					applyCanBeUsed: {
						uint8array: function() {
							try {
								return r.uint8array && String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1)).length === 1;
							} catch {
								return !1;
							}
						}(),
						nodebuffer: function() {
							try {
								return r.nodebuffer && String.fromCharCode.apply(null, a.allocBuffer(1)).length === 1;
							} catch {
								return !1;
							}
						}()
					}
				};
				function u(e) {
					var t = 65536, r = n.getTypeOf(e), i = !0;
					if (r === "uint8array" ? i = l.applyCanBeUsed.uint8array : r === "nodebuffer" && (i = l.applyCanBeUsed.nodebuffer), i) for (; 1 < t;) try {
						return l.stringifyByChunk(e, r, t);
					} catch {
						t = Math.floor(t / 2);
					}
					return l.stringifyByChar(e);
				}
				function d(e, t) {
					for (var n = 0; n < e.length; n++) t[n] = e[n];
					return t;
				}
				n.applyFromCharCode = u;
				var f = {};
				f.string = {
					string: s,
					array: function(e) {
						return c(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.string.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return c(e, new Uint8Array(e.length));
					},
					nodebuffer: function(e) {
						return c(e, a.allocBuffer(e.length));
					}
				}, f.array = {
					string: u,
					array: s,
					arraybuffer: function(e) {
						return new Uint8Array(e).buffer;
					},
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.arraybuffer = {
					string: function(e) {
						return u(new Uint8Array(e));
					},
					array: function(e) {
						return d(new Uint8Array(e), Array(e.byteLength));
					},
					arraybuffer: s,
					uint8array: function(e) {
						return new Uint8Array(e);
					},
					nodebuffer: function(e) {
						return a.newBufferFrom(new Uint8Array(e));
					}
				}, f.uint8array = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return e.buffer;
					},
					uint8array: s,
					nodebuffer: function(e) {
						return a.newBufferFrom(e);
					}
				}, f.nodebuffer = {
					string: u,
					array: function(e) {
						return d(e, Array(e.length));
					},
					arraybuffer: function(e) {
						return f.nodebuffer.uint8array(e).buffer;
					},
					uint8array: function(e) {
						return d(e, new Uint8Array(e.length));
					},
					nodebuffer: s
				}, n.transformTo = function(e, t) {
					return t ||= "", e ? (n.checkSupport(e), f[n.getTypeOf(t)][e](t)) : t;
				}, n.resolve = function(e) {
					for (var t = e.split("/"), n = [], r = 0; r < t.length; r++) {
						var i = t[r];
						i === "." || i === "" && r !== 0 && r !== t.length - 1 || (i === ".." ? n.pop() : n.push(i));
					}
					return n.join("/");
				}, n.getTypeOf = function(e) {
					if (typeof e == "string") return "string";
					var t = Object.prototype.toString.call(e);
					return t === "[object Array]" ? "array" : r.nodebuffer && a.isBuffer(e) ? "nodebuffer" : r.uint8array && t === "[object Uint8Array]" ? "uint8array" : r.arraybuffer && t === "[object ArrayBuffer]" ? "arraybuffer" : void 0;
				}, n.checkSupport = function(e) {
					if (!r[e.toLowerCase()]) throw Error(e + " is not supported by this platform");
				}, n.MAX_VALUE_16BITS = 65535, n.MAX_VALUE_32BITS = -1, n.pretty = function(e) {
					var t, n, r = "";
					for (n = 0; n < (e || "").length; n++) r += "\\x" + ((t = e.charCodeAt(n)) < 16 ? "0" : "") + t.toString(16).toUpperCase();
					return r;
				}, n.delay = function(e, t, n) {
					setImmediate(function() {
						e.apply(n || null, t || []);
					});
				}, n.inherits = function(e, t) {
					function n() {}
					n.prototype = t.prototype, e.prototype = new n();
				}, n.extend = function() {
					var e, t, n = {};
					for (e = 0; e < arguments.length; e++) for (t in arguments[e]) Object.prototype.hasOwnProperty.call(arguments[e], t) && n[t] === void 0 && (n[t] = arguments[e][t]);
					return n;
				}, n.prepareContent = function(e, t, a, s, l) {
					return o.Promise.resolve(t).then(function(t) {
						return r.blob && (t instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(t)) !== -1) ? Blob.prototype.arrayBuffer === void 0 ? typeof FileReader < "u" ? new o.Promise(function(e, n) {
							var r = new FileReader();
							r.onload = function(t) {
								e(t.target.result);
							}, r.onerror = function(e) {
								n(e.target.error);
							}, r.readAsArrayBuffer(t);
						}) : o.Promise.reject(/* @__PURE__ */ Error(e + " is a Blob, but we have no way of reading it.")) : t.arrayBuffer() : t;
					}).then(function(t) {
						var u = n.getTypeOf(t);
						return u ? (u === "arraybuffer" ? t = n.transformTo("uint8array", t) : u === "string" && (l ? t = i.decode(t) : a && !0 !== s && (t = function(e) {
							return c(e, r.uint8array ? new Uint8Array(e.length) : Array(e.length));
						}(t))), t) : o.Promise.reject(/* @__PURE__ */ Error("Can't read the data of '" + e + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
					});
				};
			}, {
				"./base64": 1,
				"./external": 6,
				"./nodejsUtils": 14,
				"./support": 30,
				setimmediate: 54
			}],
			33: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./signature"), o = e("./zipEntry"), s = e("./support");
				function c(e) {
					this.files = [], this.loadOptions = e;
				}
				c.prototype = {
					checkSignature: function(e) {
						if (!this.reader.readAndCheckSignature(e)) {
							this.reader.index -= 4;
							var t = this.reader.readString(4);
							throw Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t) + ", expected " + i.pretty(e) + ")");
						}
					},
					isSignature: function(e, t) {
						var n = this.reader.index;
						this.reader.setIndex(e);
						var r = this.reader.readString(4) === t;
						return this.reader.setIndex(n), r;
					},
					readBlockEndOfCentral: function() {
						this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
						var e = this.reader.readData(this.zipCommentLength), t = s.uint8array ? "uint8array" : "array", n = i.transformTo(t, e);
						this.zipComment = this.loadOptions.decodeFileName(n);
					},
					readBlockZip64EndOfCentral: function() {
						this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
						for (var e, t, n, r = this.zip64EndOfCentralSize - 44; 0 < r;) e = this.reader.readInt(2), t = this.reader.readInt(4), n = this.reader.readData(t), this.zip64ExtensibleData[e] = {
							id: e,
							length: t,
							value: n
						};
					},
					readBlockZip64EndOfCentralLocator: function() {
						if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw Error("Multi-volumes zip are not supported");
					},
					readLocalFiles: function() {
						for (var e = 0, t; e < this.files.length; e++) t = this.files[e], this.reader.setIndex(t.localHeaderOffset), this.checkSignature(a.LOCAL_FILE_HEADER), t.readLocalPart(this.reader), t.handleUTF8(), t.processAttributes();
					},
					readCentralDir: function() {
						var e;
						for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);) (e = new o({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e);
						if (this.centralDirRecords !== this.files.length && this.centralDirRecords !== 0 && this.files.length === 0) throw Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
					},
					readEndOfCentral: function() {
						var e = this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);
						if (e < 0) throw this.isSignature(0, a.LOCAL_FILE_HEADER) ? /* @__PURE__ */ Error("Corrupted zip: can't find end of central directory") : /* @__PURE__ */ Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
						this.reader.setIndex(e);
						var t = e;
						if (this.checkSignature(a.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
							if (this.zip64 = !0, (e = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
							if (this.reader.setIndex(e), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, a.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw Error("Corrupted zip: can't find the ZIP64 end of central directory");
							this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
						}
						var n = this.centralDirOffset + this.centralDirSize;
						this.zip64 && (n += 20, n += 12 + this.zip64EndOfCentralSize);
						var r = t - n;
						if (0 < r) this.isSignature(t, a.CENTRAL_FILE_HEADER) || (this.reader.zero = r);
						else if (r < 0) throw Error("Corrupted zip: missing " + Math.abs(r) + " bytes.");
					},
					prepareReader: function(e) {
						this.reader = r(e);
					},
					load: function(e) {
						this.prepareReader(e), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
					}
				}, t.exports = c;
			}, {
				"./reader/readerFor": 22,
				"./signature": 23,
				"./support": 30,
				"./utils": 32,
				"./zipEntry": 34
			}],
			34: [function(e, t, n) {
				var r = e("./reader/readerFor"), i = e("./utils"), a = e("./compressedObject"), o = e("./crc32"), s = e("./utf8"), c = e("./compressions"), l = e("./support");
				function u(e, t) {
					this.options = e, this.loadOptions = t;
				}
				u.prototype = {
					isEncrypted: function() {
						return (1 & this.bitFlag) == 1;
					},
					useUTF8: function() {
						return (2048 & this.bitFlag) == 2048;
					},
					readLocalPart: function(e) {
						var t, n;
						if (e.skip(22), this.fileNameLength = e.readInt(2), n = e.readInt(2), this.fileName = e.readData(this.fileNameLength), e.skip(n), this.compressedSize === -1 || this.uncompressedSize === -1) throw Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
						if ((t = function(e) {
							for (var t in c) if (Object.prototype.hasOwnProperty.call(c, t) && c[t].magic === e) return c[t];
							return null;
						}(this.compressionMethod)) === null) throw Error("Corrupted zip : compression " + i.pretty(this.compressionMethod) + " unknown (inner file : " + i.transformTo("string", this.fileName) + ")");
						this.decompressed = new a(this.compressedSize, this.uncompressedSize, this.crc32, t, e.readData(this.compressedSize));
					},
					readCentralPart: function(e) {
						this.versionMadeBy = e.readInt(2), e.skip(2), this.bitFlag = e.readInt(2), this.compressionMethod = e.readString(2), this.date = e.readDate(), this.crc32 = e.readInt(4), this.compressedSize = e.readInt(4), this.uncompressedSize = e.readInt(4);
						var t = e.readInt(2);
						if (this.extraFieldsLength = e.readInt(2), this.fileCommentLength = e.readInt(2), this.diskNumberStart = e.readInt(2), this.internalFileAttributes = e.readInt(2), this.externalFileAttributes = e.readInt(4), this.localHeaderOffset = e.readInt(4), this.isEncrypted()) throw Error("Encrypted zip are not supported");
						e.skip(t), this.readExtraFields(e), this.parseZIP64ExtraField(e), this.fileComment = e.readData(this.fileCommentLength);
					},
					processAttributes: function() {
						this.unixPermissions = null, this.dosPermissions = null;
						var e = this.versionMadeBy >> 8;
						this.dir = !!(16 & this.externalFileAttributes), e == 0 && (this.dosPermissions = 63 & this.externalFileAttributes), e == 3 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || this.fileNameStr.slice(-1) !== "/" || (this.dir = !0);
					},
					parseZIP64ExtraField: function() {
						if (this.extraFields[1]) {
							var e = r(this.extraFields[1].value);
							this.uncompressedSize === i.MAX_VALUE_32BITS && (this.uncompressedSize = e.readInt(8)), this.compressedSize === i.MAX_VALUE_32BITS && (this.compressedSize = e.readInt(8)), this.localHeaderOffset === i.MAX_VALUE_32BITS && (this.localHeaderOffset = e.readInt(8)), this.diskNumberStart === i.MAX_VALUE_32BITS && (this.diskNumberStart = e.readInt(4));
						}
					},
					readExtraFields: function(e) {
						var t, n, r, i = e.index + this.extraFieldsLength;
						for (this.extraFields ||= {}; e.index + 4 < i;) t = e.readInt(2), n = e.readInt(2), r = e.readData(n), this.extraFields[t] = {
							id: t,
							length: n,
							value: r
						};
						e.setIndex(i);
					},
					handleUTF8: function() {
						var e = l.uint8array ? "uint8array" : "array";
						if (this.useUTF8()) this.fileNameStr = s.utf8decode(this.fileName), this.fileCommentStr = s.utf8decode(this.fileComment);
						else {
							var t = this.findExtraFieldUnicodePath();
							if (t !== null) this.fileNameStr = t;
							else {
								var n = i.transformTo(e, this.fileName);
								this.fileNameStr = this.loadOptions.decodeFileName(n);
							}
							var r = this.findExtraFieldUnicodeComment();
							if (r !== null) this.fileCommentStr = r;
							else {
								var a = i.transformTo(e, this.fileComment);
								this.fileCommentStr = this.loadOptions.decodeFileName(a);
							}
						}
					},
					findExtraFieldUnicodePath: function() {
						var e = this.extraFields[28789];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileName) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					},
					findExtraFieldUnicodeComment: function() {
						var e = this.extraFields[25461];
						if (e) {
							var t = r(e.value);
							return t.readInt(1) === 1 && o(this.fileComment) === t.readInt(4) ? s.utf8decode(t.readData(e.length - 5)) : null;
						}
						return null;
					}
				}, t.exports = u;
			}, {
				"./compressedObject": 2,
				"./compressions": 3,
				"./crc32": 4,
				"./reader/readerFor": 22,
				"./support": 30,
				"./utf8": 31,
				"./utils": 32
			}],
			35: [function(e, t, n) {
				function r(e, t, n) {
					this.name = e, this.dir = n.dir, this.date = n.date, this.comment = n.comment, this.unixPermissions = n.unixPermissions, this.dosPermissions = n.dosPermissions, this._data = t, this._dataBinary = n.binary, this.options = {
						compression: n.compression,
						compressionOptions: n.compressionOptions
					};
				}
				var i = e("./stream/StreamHelper"), a = e("./stream/DataWorker"), o = e("./utf8"), s = e("./compressedObject"), c = e("./stream/GenericWorker");
				r.prototype = {
					internalStream: function(e) {
						var t = null, n = "string";
						try {
							if (!e) throw Error("No output type specified.");
							var r = (n = e.toLowerCase()) === "string" || n === "text";
							n !== "binarystring" && n !== "text" || (n = "string"), t = this._decompressWorker();
							var a = !this._dataBinary;
							a && !r && (t = t.pipe(new o.Utf8EncodeWorker())), !a && r && (t = t.pipe(new o.Utf8DecodeWorker()));
						} catch (e) {
							(t = new c("error")).error(e);
						}
						return new i(t, n, "");
					},
					async: function(e, t) {
						return this.internalStream(e).accumulate(t);
					},
					nodeStream: function(e, t) {
						return this.internalStream(e || "nodebuffer").toNodejsStream(t);
					},
					_compressWorker: function(e, t) {
						if (this._data instanceof s && this._data.compression.magic === e.magic) return this._data.getCompressedWorker();
						var n = this._decompressWorker();
						return this._dataBinary || (n = n.pipe(new o.Utf8EncodeWorker())), s.createWorkerFrom(n, e, t);
					},
					_decompressWorker: function() {
						return this._data instanceof s ? this._data.getContentWorker() : this._data instanceof c ? this._data : new a(this._data);
					}
				};
				for (var l = [
					"asText",
					"asBinary",
					"asNodeBuffer",
					"asUint8Array",
					"asArrayBuffer"
				], u = function() {
					throw Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
				}, d = 0; d < l.length; d++) r.prototype[l[d]] = u;
				t.exports = r;
			}, {
				"./compressedObject": 2,
				"./stream/DataWorker": 27,
				"./stream/GenericWorker": 28,
				"./stream/StreamHelper": 29,
				"./utf8": 31
			}],
			36: [function(e, t, n) {
				(function(e) {
					var n, r, i = e.MutationObserver || e.WebKitMutationObserver;
					if (i) {
						var a = 0, o = new i(u), s = e.document.createTextNode("");
						o.observe(s, { characterData: !0 }), n = function() {
							s.data = a = ++a % 2;
						};
					} else if (e.setImmediate || e.MessageChannel === void 0) n = "document" in e && "onreadystatechange" in e.document.createElement("script") ? function() {
						var t = e.document.createElement("script");
						t.onreadystatechange = function() {
							u(), t.onreadystatechange = null, t.parentNode.removeChild(t), t = null;
						}, e.document.documentElement.appendChild(t);
					} : function() {
						setTimeout(u, 0);
					};
					else {
						var c = new e.MessageChannel();
						c.port1.onmessage = u, n = function() {
							c.port2.postMessage(0);
						};
					}
					var l = [];
					function u() {
						var e, t;
						r = !0;
						for (var n = l.length; n;) {
							for (t = l, l = [], e = -1; ++e < n;) t[e]();
							n = l.length;
						}
						r = !1;
					}
					t.exports = function(e) {
						l.push(e) !== 1 || r || n();
					};
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}],
			37: [function(e, t, n) {
				var r = e("immediate");
				function i() {}
				var a = {}, o = ["REJECTED"], s = ["FULFILLED"], c = ["PENDING"];
				function l(e) {
					if (typeof e != "function") throw TypeError("resolver must be a function");
					this.state = c, this.queue = [], this.outcome = void 0, e !== i && p(this, e);
				}
				function u(e, t, n) {
					this.promise = e, typeof t == "function" && (this.onFulfilled = t, this.callFulfilled = this.otherCallFulfilled), typeof n == "function" && (this.onRejected = n, this.callRejected = this.otherCallRejected);
				}
				function d(e, t, n) {
					r(function() {
						var r;
						try {
							r = t(n);
						} catch (t) {
							return a.reject(e, t);
						}
						r === e ? a.reject(e, /* @__PURE__ */ TypeError("Cannot resolve promise with itself")) : a.resolve(e, r);
					});
				}
				function f(e) {
					var t = e && e.then;
					if (e && (typeof e == "object" || typeof e == "function") && typeof t == "function") return function() {
						t.apply(e, arguments);
					};
				}
				function p(e, t) {
					var n = !1;
					function r(t) {
						n || (n = !0, a.reject(e, t));
					}
					function i(t) {
						n || (n = !0, a.resolve(e, t));
					}
					var o = m(function() {
						t(i, r);
					});
					o.status === "error" && r(o.value);
				}
				function m(e, t) {
					var n = {};
					try {
						n.value = e(t), n.status = "success";
					} catch (e) {
						n.status = "error", n.value = e;
					}
					return n;
				}
				(t.exports = l).prototype.finally = function(e) {
					if (typeof e != "function") return this;
					var t = this.constructor;
					return this.then(function(n) {
						return t.resolve(e()).then(function() {
							return n;
						});
					}, function(n) {
						return t.resolve(e()).then(function() {
							throw n;
						});
					});
				}, l.prototype.catch = function(e) {
					return this.then(null, e);
				}, l.prototype.then = function(e, t) {
					if (typeof e != "function" && this.state === s || typeof t != "function" && this.state === o) return this;
					var n = new this.constructor(i);
					return this.state === c ? this.queue.push(new u(n, e, t)) : d(n, this.state === s ? e : t, this.outcome), n;
				}, u.prototype.callFulfilled = function(e) {
					a.resolve(this.promise, e);
				}, u.prototype.otherCallFulfilled = function(e) {
					d(this.promise, this.onFulfilled, e);
				}, u.prototype.callRejected = function(e) {
					a.reject(this.promise, e);
				}, u.prototype.otherCallRejected = function(e) {
					d(this.promise, this.onRejected, e);
				}, a.resolve = function(e, t) {
					var n = m(f, t);
					if (n.status === "error") return a.reject(e, n.value);
					var r = n.value;
					if (r) p(e, r);
					else {
						e.state = s, e.outcome = t;
						for (var i = -1, o = e.queue.length; ++i < o;) e.queue[i].callFulfilled(t);
					}
					return e;
				}, a.reject = function(e, t) {
					e.state = o, e.outcome = t;
					for (var n = -1, r = e.queue.length; ++n < r;) e.queue[n].callRejected(t);
					return e;
				}, l.resolve = function(e) {
					return e instanceof this ? e : a.resolve(new this(i), e);
				}, l.reject = function(e) {
					var t = new this(i);
					return a.reject(t, e);
				}, l.all = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = Array(n), s = 0, c = -1, l = new this(i); ++c < n;) u(e[c], c);
					return l;
					function u(e, i) {
						t.resolve(e).then(function(e) {
							o[i] = e, ++s !== n || r || (r = !0, a.resolve(l, o));
						}, function(e) {
							r || (r = !0, a.reject(l, e));
						});
					}
				}, l.race = function(e) {
					var t = this;
					if (Object.prototype.toString.call(e) !== "[object Array]") return this.reject(/* @__PURE__ */ TypeError("must be an array"));
					var n = e.length, r = !1;
					if (!n) return this.resolve([]);
					for (var o = -1, s = new this(i); ++o < n;) c = e[o], t.resolve(c).then(function(e) {
						r || (r = !0, a.resolve(s, e));
					}, function(e) {
						r || (r = !0, a.reject(s, e));
					});
					var c;
					return s;
				};
			}, { immediate: 36 }],
			38: [function(e, t, n) {
				var r = {};
				(0, e("./lib/utils/common").assign)(r, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = r;
			}, {
				"./lib/deflate": 39,
				"./lib/inflate": 40,
				"./lib/utils/common": 41,
				"./lib/zlib/constants": 44
			}],
			39: [function(e, t, n) {
				var r = e("./zlib/deflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/messages"), s = e("./zlib/zstream"), c = Object.prototype.toString, l = 0, u = -1, d = 0, f = 8;
				function p(e) {
					if (!(this instanceof p)) return new p(e);
					this.options = i.assign({
						level: u,
						method: f,
						chunkSize: 16384,
						windowBits: 15,
						memLevel: 8,
						strategy: d,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && t.windowBits < 16 && (t.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
					var n = r.deflateInit2(this.strm, t.level, t.method, t.windowBits, t.memLevel, t.strategy);
					if (n !== l) throw Error(o[n]);
					if (t.header && r.deflateSetHeader(this.strm, t.header), t.dictionary) {
						var m = typeof t.dictionary == "string" ? a.string2buf(t.dictionary) : c.call(t.dictionary) === "[object ArrayBuffer]" ? new Uint8Array(t.dictionary) : t.dictionary;
						if ((n = r.deflateSetDictionary(this.strm, m)) !== l) throw Error(o[n]);
						this._dict_set = !0;
					}
				}
				function m(e, t) {
					var n = new p(t);
					if (n.push(e, !0), n.err) throw n.msg || o[n.err];
					return n.result;
				}
				p.prototype.push = function(e, t) {
					var n, o, s = this.strm, u = this.options.chunkSize;
					if (this.ended) return !1;
					o = t === ~~t ? t : !0 === t ? 4 : 0, s.input = typeof e == "string" ? a.string2buf(e) : c.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, s.next_in = 0, s.avail_in = s.input.length;
					do {
						if (s.avail_out === 0 && (s.output = new i.Buf8(u), s.next_out = 0, s.avail_out = u), (n = r.deflate(s, o)) !== 1 && n !== l) return this.onEnd(n), !(this.ended = !0);
						s.avail_out !== 0 && (s.avail_in !== 0 || o !== 4 && o !== 2) || (this.options.to === "string" ? this.onData(a.buf2binstring(i.shrinkBuf(s.output, s.next_out))) : this.onData(i.shrinkBuf(s.output, s.next_out)));
					} while ((0 < s.avail_in || s.avail_out === 0) && n !== 1);
					return o === 4 ? (n = r.deflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === l) : o !== 2 || (this.onEnd(l), !(s.avail_out = 0));
				}, p.prototype.onData = function(e) {
					this.chunks.push(e);
				}, p.prototype.onEnd = function(e) {
					e === l && (this.result = this.options.to === "string" ? this.chunks.join("") : i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Deflate = p, n.deflate = m, n.deflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, m(e, t);
				}, n.gzip = function(e, t) {
					return (t ||= {}).gzip = !0, m(e, t);
				};
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/deflate": 46,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			40: [function(e, t, n) {
				var r = e("./zlib/inflate"), i = e("./utils/common"), a = e("./utils/strings"), o = e("./zlib/constants"), s = e("./zlib/messages"), c = e("./zlib/zstream"), l = e("./zlib/gzheader"), u = Object.prototype.toString;
				function d(e) {
					if (!(this instanceof d)) return new d(e);
					this.options = i.assign({
						chunkSize: 16384,
						windowBits: 0,
						to: ""
					}, e || {});
					var t = this.options;
					t.raw && 0 <= t.windowBits && t.windowBits < 16 && (t.windowBits = -t.windowBits, t.windowBits === 0 && (t.windowBits = -15)), !(0 <= t.windowBits && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), 15 < t.windowBits && t.windowBits < 48 && !(15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new c(), this.strm.avail_out = 0;
					var n = r.inflateInit2(this.strm, t.windowBits);
					if (n !== o.Z_OK) throw Error(s[n]);
					this.header = new l(), r.inflateGetHeader(this.strm, this.header);
				}
				function f(e, t) {
					var n = new d(t);
					if (n.push(e, !0), n.err) throw n.msg || s[n.err];
					return n.result;
				}
				d.prototype.push = function(e, t) {
					var n, s, c, l, d, f, p = this.strm, m = this.options.chunkSize, h = this.options.dictionary, g = !1;
					if (this.ended) return !1;
					s = t === ~~t ? t : !0 === t ? o.Z_FINISH : o.Z_NO_FLUSH, p.input = typeof e == "string" ? a.binstring2buf(e) : u.call(e) === "[object ArrayBuffer]" ? new Uint8Array(e) : e, p.next_in = 0, p.avail_in = p.input.length;
					do {
						if (p.avail_out === 0 && (p.output = new i.Buf8(m), p.next_out = 0, p.avail_out = m), (n = r.inflate(p, o.Z_NO_FLUSH)) === o.Z_NEED_DICT && h && (f = typeof h == "string" ? a.string2buf(h) : u.call(h) === "[object ArrayBuffer]" ? new Uint8Array(h) : h, n = r.inflateSetDictionary(this.strm, f)), n === o.Z_BUF_ERROR && !0 === g && (n = o.Z_OK, g = !1), n !== o.Z_STREAM_END && n !== o.Z_OK) return this.onEnd(n), !(this.ended = !0);
						p.next_out && (p.avail_out !== 0 && n !== o.Z_STREAM_END && (p.avail_in !== 0 || s !== o.Z_FINISH && s !== o.Z_SYNC_FLUSH) || (this.options.to === "string" ? (c = a.utf8border(p.output, p.next_out), l = p.next_out - c, d = a.buf2string(p.output, c), p.next_out = l, p.avail_out = m - l, l && i.arraySet(p.output, p.output, c, l, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out)))), p.avail_in === 0 && p.avail_out === 0 && (g = !0);
					} while ((0 < p.avail_in || p.avail_out === 0) && n !== o.Z_STREAM_END);
					return n === o.Z_STREAM_END && (s = o.Z_FINISH), s === o.Z_FINISH ? (n = r.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, n === o.Z_OK) : s !== o.Z_SYNC_FLUSH || (this.onEnd(o.Z_OK), !(p.avail_out = 0));
				}, d.prototype.onData = function(e) {
					this.chunks.push(e);
				}, d.prototype.onEnd = function(e) {
					e === o.Z_OK && (this.result = this.options.to === "string" ? this.chunks.join("") : i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg;
				}, n.Inflate = d, n.inflate = f, n.inflateRaw = function(e, t) {
					return (t ||= {}).raw = !0, f(e, t);
				}, n.ungzip = f;
			}, {
				"./utils/common": 41,
				"./utils/strings": 42,
				"./zlib/constants": 44,
				"./zlib/gzheader": 47,
				"./zlib/inflate": 49,
				"./zlib/messages": 51,
				"./zlib/zstream": 53
			}],
			41: [function(e, t, n) {
				var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
				n.assign = function(e) {
					for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
						var n = t.shift();
						if (n) {
							if (typeof n != "object") throw TypeError(n + "must be non-object");
							for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r]);
						}
					}
					return e;
				}, n.shrinkBuf = function(e, t) {
					return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e);
				};
				var i = {
					arraySet: function(e, t, n, r, i) {
						if (t.subarray && e.subarray) e.set(t.subarray(n, n + r), i);
						else for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						for (var t = r = 0, n = e.length, r, i, a, o; t < n; t++) r += e[t].length;
						for (o = new Uint8Array(r), t = i = 0, n = e.length; t < n; t++) a = e[t], o.set(a, i), i += a.length;
						return o;
					}
				}, a = {
					arraySet: function(e, t, n, r, i) {
						for (var a = 0; a < r; a++) e[i + a] = t[n + a];
					},
					flattenChunks: function(e) {
						return [].concat.apply([], e);
					}
				};
				n.setTyped = function(e) {
					e ? (n.Buf8 = Uint8Array, n.Buf16 = Uint16Array, n.Buf32 = Int32Array, n.assign(n, i)) : (n.Buf8 = Array, n.Buf16 = Array, n.Buf32 = Array, n.assign(n, a));
				}, n.setTyped(r);
			}, {}],
			42: [function(e, t, n) {
				var r = e("./common"), i = !0, a = !0;
				try {
					String.fromCharCode.apply(null, [0]);
				} catch {
					i = !1;
				}
				try {
					String.fromCharCode.apply(null, /* @__PURE__ */ new Uint8Array(1));
				} catch {
					a = !1;
				}
				for (var o = new r.Buf8(256), s = 0; s < 256; s++) o[s] = 252 <= s ? 6 : 248 <= s ? 5 : 240 <= s ? 4 : 224 <= s ? 3 : 192 <= s ? 2 : 1;
				function c(e, t) {
					if (t < 65537 && (e.subarray && a || !e.subarray && i)) return String.fromCharCode.apply(null, r.shrinkBuf(e, t));
					for (var n = "", o = 0; o < t; o++) n += String.fromCharCode(e[o]);
					return n;
				}
				o[254] = o[254] = 1, n.string2buf = function(e) {
					var t, n, i, a, o, s = e.length, c = 0;
					for (a = 0; a < s; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), c += n < 128 ? 1 : n < 2048 ? 2 : n < 65536 ? 3 : 4;
					for (t = new r.Buf8(c), a = o = 0; o < c; a++) (64512 & (n = e.charCodeAt(a))) == 55296 && a + 1 < s && (64512 & (i = e.charCodeAt(a + 1))) == 56320 && (n = 65536 + (n - 55296 << 10) + (i - 56320), a++), n < 128 ? t[o++] = n : (n < 2048 ? t[o++] = 192 | n >>> 6 : (n < 65536 ? t[o++] = 224 | n >>> 12 : (t[o++] = 240 | n >>> 18, t[o++] = 128 | n >>> 12 & 63), t[o++] = 128 | n >>> 6 & 63), t[o++] = 128 | 63 & n);
					return t;
				}, n.buf2binstring = function(e) {
					return c(e, e.length);
				}, n.binstring2buf = function(e) {
					for (var t = new r.Buf8(e.length), n = 0, i = t.length; n < i; n++) t[n] = e.charCodeAt(n);
					return t;
				}, n.buf2string = function(e, t) {
					var n, r, i, a, s = t || e.length, l = Array(2 * s);
					for (n = r = 0; n < s;) if ((i = e[n++]) < 128) l[r++] = i;
					else if (4 < (a = o[i])) l[r++] = 65533, n += a - 1;
					else {
						for (i &= a === 2 ? 31 : a === 3 ? 15 : 7; 1 < a && n < s;) i = i << 6 | 63 & e[n++], a--;
						1 < a ? l[r++] = 65533 : i < 65536 ? l[r++] = i : (i -= 65536, l[r++] = 55296 | i >> 10 & 1023, l[r++] = 56320 | 1023 & i);
					}
					return c(l, r);
				}, n.utf8border = function(e, t) {
					var n;
					for ((t ||= e.length) > e.length && (t = e.length), n = t - 1; 0 <= n && (192 & e[n]) == 128;) n--;
					return n < 0 || n === 0 ? t : n + o[e[n]] > t ? n : t;
				};
			}, { "./common": 41 }],
			43: [function(e, t, n) {
				t.exports = function(e, t, n, r) {
					for (var i = 65535 & e, a = e >>> 16 & 65535, o = 0; n !== 0;) {
						for (n -= o = 2e3 < n ? 2e3 : n; a = a + (i = i + t[r++] | 0) | 0, --o;);
						i %= 65521, a %= 65521;
					}
					return i | a << 16;
				};
			}, {}],
			44: [function(e, t, n) {
				t.exports = {
					Z_NO_FLUSH: 0,
					Z_PARTIAL_FLUSH: 1,
					Z_SYNC_FLUSH: 2,
					Z_FULL_FLUSH: 3,
					Z_FINISH: 4,
					Z_BLOCK: 5,
					Z_TREES: 6,
					Z_OK: 0,
					Z_STREAM_END: 1,
					Z_NEED_DICT: 2,
					Z_ERRNO: -1,
					Z_STREAM_ERROR: -2,
					Z_DATA_ERROR: -3,
					Z_BUF_ERROR: -5,
					Z_NO_COMPRESSION: 0,
					Z_BEST_SPEED: 1,
					Z_BEST_COMPRESSION: 9,
					Z_DEFAULT_COMPRESSION: -1,
					Z_FILTERED: 1,
					Z_HUFFMAN_ONLY: 2,
					Z_RLE: 3,
					Z_FIXED: 4,
					Z_DEFAULT_STRATEGY: 0,
					Z_BINARY: 0,
					Z_TEXT: 1,
					Z_UNKNOWN: 2,
					Z_DEFLATED: 8
				};
			}, {}],
			45: [function(e, t, n) {
				var r = function() {
					for (var e, t = [], n = 0; n < 256; n++) {
						e = n;
						for (var r = 0; r < 8; r++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
						t[n] = e;
					}
					return t;
				}();
				t.exports = function(e, t, n, i) {
					var a = r, o = i + n;
					e ^= -1;
					for (var s = i; s < o; s++) e = e >>> 8 ^ a[255 & (e ^ t[s])];
					return -1 ^ e;
				};
			}, {}],
			46: [function(e, t, n) {
				var r, i = e("../utils/common"), a = e("./trees"), o = e("./adler32"), s = e("./crc32"), c = e("./messages"), l = 0, u = 4, d = 0, f = -2, p = -1, m = 4, h = 2, g = 8, _ = 9, v = 286, y = 30, b = 19, x = 2 * v + 1, S = 15, C = 3, w = 258, T = w + C + 1, E = 42, D = 113, O = 1, k = 2, A = 3, j = 4;
				function M(e, t) {
					return e.msg = c[t], t;
				}
				function N(e) {
					return (e << 1) - (4 < e ? 9 : 0);
				}
				function P(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				function F(e) {
					var t = e.state, n = t.pending;
					n > e.avail_out && (n = e.avail_out), n !== 0 && (i.arraySet(e.output, t.pending_buf, t.pending_out, n, e.next_out), e.next_out += n, t.pending_out += n, e.total_out += n, e.avail_out -= n, t.pending -= n, t.pending === 0 && (t.pending_out = 0));
				}
				function I(e, t) {
					a._tr_flush_block(e, 0 <= e.block_start ? e.block_start : -1, e.strstart - e.block_start, t), e.block_start = e.strstart, F(e.strm);
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = t;
				}
				function R(e, t) {
					e.pending_buf[e.pending++] = t >>> 8 & 255, e.pending_buf[e.pending++] = 255 & t;
				}
				function z(e, t) {
					var n, r, i = e.max_chain_length, a = e.strstart, o = e.prev_length, s = e.nice_match, c = e.strstart > e.w_size - T ? e.strstart - (e.w_size - T) : 0, l = e.window, u = e.w_mask, d = e.prev, f = e.strstart + w, p = l[a + o - 1], m = l[a + o];
					e.prev_length >= e.good_match && (i >>= 2), s > e.lookahead && (s = e.lookahead);
					do
						if (l[(n = t) + o] === m && l[n + o - 1] === p && l[n] === l[a] && l[++n] === l[a + 1]) {
							a += 2, n++;
							do							;
while (l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && l[++a] === l[++n] && a < f);
							if (r = w - (f - a), a = f - w, o < r) {
								if (e.match_start = t, s <= (o = r)) break;
								p = l[a + o - 1], m = l[a + o];
							}
						}
					while ((t = d[t & u]) > c && --i != 0);
					return o <= e.lookahead ? o : e.lookahead;
				}
				function B(e) {
					var t, n, r, a, c, l, u, d, f, p, m = e.w_size;
					do {
						if (a = e.window_size - e.lookahead - e.strstart, e.strstart >= m + (m - T)) {
							for (i.arraySet(e.window, e.window, m, m, 0), e.match_start -= m, e.strstart -= m, e.block_start -= m, t = n = e.hash_size; r = e.head[--t], e.head[t] = m <= r ? r - m : 0, --n;);
							for (t = n = m; r = e.prev[--t], e.prev[t] = m <= r ? r - m : 0, --n;);
							a += m;
						}
						if (e.strm.avail_in === 0) break;
						if (l = e.strm, u = e.window, d = e.strstart + e.lookahead, f = a, p = void 0, p = l.avail_in, f < p && (p = f), n = p === 0 ? 0 : (l.avail_in -= p, i.arraySet(u, l.input, l.next_in, p, d), l.state.wrap === 1 ? l.adler = o(l.adler, u, p, d) : l.state.wrap === 2 && (l.adler = s(l.adler, u, p, d)), l.next_in += p, l.total_in += p, p), e.lookahead += n, e.lookahead + e.insert >= C) for (c = e.strstart - e.insert, e.ins_h = e.window[c], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + 1]) & e.hash_mask; e.insert && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[c + C - 1]) & e.hash_mask, e.prev[c & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = c, c++, e.insert--, !(e.lookahead + e.insert < C)););
					} while (e.lookahead < T && e.strm.avail_in !== 0);
				}
				function V(e, t) {
					for (var n, r;;) {
						if (e.lookahead < T) {
							if (B(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), n !== 0 && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n)), e.match_length >= C) {
							if (r = a._tr_tally(e, e.strstart - e.match_start, e.match_length - C), e.lookahead -= e.match_length, e.match_length <= e.max_lazy_match && e.lookahead >= C) {
								for (e.match_length--; e.strstart++, e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart, --e.match_length != 0;);
								e.strstart++;
							} else e.strstart += e.match_length, e.match_length = 0, e.ins_h = e.window[e.strstart], e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + 1]) & e.hash_mask;
						} else r = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++;
						if (r && (I(e, !1), e.strm.avail_out === 0)) return O;
					}
					return e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function H(e, t) {
					for (var n, r, i;;) {
						if (e.lookahead < T) {
							if (B(e), e.lookahead < T && t === l) return O;
							if (e.lookahead === 0) break;
						}
						if (n = 0, e.lookahead >= C && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), e.prev_length = e.match_length, e.prev_match = e.match_start, e.match_length = C - 1, n !== 0 && e.prev_length < e.max_lazy_match && e.strstart - n <= e.w_size - T && (e.match_length = z(e, n), e.match_length <= 5 && (e.strategy === 1 || e.match_length === C && 4096 < e.strstart - e.match_start) && (e.match_length = C - 1)), e.prev_length >= C && e.match_length <= e.prev_length) {
							for (i = e.strstart + e.lookahead - C, r = a._tr_tally(e, e.strstart - 1 - e.prev_match, e.prev_length - C), e.lookahead -= e.prev_length - 1, e.prev_length -= 2; ++e.strstart <= i && (e.ins_h = (e.ins_h << e.hash_shift ^ e.window[e.strstart + C - 1]) & e.hash_mask, n = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h], e.head[e.ins_h] = e.strstart), --e.prev_length != 0;);
							if (e.match_available = 0, e.match_length = C - 1, e.strstart++, r && (I(e, !1), e.strm.avail_out === 0)) return O;
						} else if (e.match_available) {
							if ((r = a._tr_tally(e, 0, e.window[e.strstart - 1])) && I(e, !1), e.strstart++, e.lookahead--, e.strm.avail_out === 0) return O;
						} else e.match_available = 1, e.strstart++, e.lookahead--;
					}
					return e.match_available &&= (r = a._tr_tally(e, 0, e.window[e.strstart - 1]), 0), e.insert = e.strstart < C - 1 ? e.strstart : C - 1, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
				}
				function U(e, t, n, r, i) {
					this.good_length = e, this.max_lazy = t, this.nice_length = n, this.max_chain = r, this.func = i;
				}
				function W() {
					this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = g, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new i.Buf16(2 * x), this.dyn_dtree = new i.Buf16(2 * (2 * y + 1)), this.bl_tree = new i.Buf16(2 * (2 * b + 1)), P(this.dyn_ltree), P(this.dyn_dtree), P(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new i.Buf16(S + 1), this.heap = new i.Buf16(2 * v + 1), P(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new i.Buf16(2 * v + 1), P(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
				}
				function G(e) {
					var t;
					return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = h, (t = e.state).pending = 0, t.pending_out = 0, t.wrap < 0 && (t.wrap = -t.wrap), t.status = t.wrap ? E : D, e.adler = t.wrap === 2 ? 0 : 1, t.last_flush = l, a._tr_init(t), d) : M(e, f);
				}
				function K(e) {
					var t = G(e);
					return t === d && function(e) {
						e.window_size = 2 * e.w_size, P(e.head), e.max_lazy_match = r[e.level].max_lazy, e.good_match = r[e.level].good_length, e.nice_match = r[e.level].nice_length, e.max_chain_length = r[e.level].max_chain, e.strstart = 0, e.block_start = 0, e.lookahead = 0, e.insert = 0, e.match_length = e.prev_length = C - 1, e.match_available = 0, e.ins_h = 0;
					}(e.state), t;
				}
				function q(e, t, n, r, a, o) {
					if (!e) return f;
					var s = 1;
					if (t === p && (t = 6), r < 0 ? (s = 0, r = -r) : 15 < r && (s = 2, r -= 16), a < 1 || _ < a || n !== g || r < 8 || 15 < r || t < 0 || 9 < t || o < 0 || m < o) return M(e, f);
					r === 8 && (r = 9);
					var c = new W();
					return (e.state = c).strm = e, c.wrap = s, c.gzhead = null, c.w_bits = r, c.w_size = 1 << c.w_bits, c.w_mask = c.w_size - 1, c.hash_bits = a + 7, c.hash_size = 1 << c.hash_bits, c.hash_mask = c.hash_size - 1, c.hash_shift = ~~((c.hash_bits + C - 1) / C), c.window = new i.Buf8(2 * c.w_size), c.head = new i.Buf16(c.hash_size), c.prev = new i.Buf16(c.w_size), c.lit_bufsize = 1 << a + 6, c.pending_buf_size = 4 * c.lit_bufsize, c.pending_buf = new i.Buf8(c.pending_buf_size), c.d_buf = 1 * c.lit_bufsize, c.l_buf = 3 * c.lit_bufsize, c.level = t, c.strategy = o, c.method = n, K(e);
				}
				r = [
					new U(0, 0, 0, 0, function(e, t) {
						var n = 65535;
						for (n > e.pending_buf_size - 5 && (n = e.pending_buf_size - 5);;) {
							if (e.lookahead <= 1) {
								if (B(e), e.lookahead === 0 && t === l) return O;
								if (e.lookahead === 0) break;
							}
							e.strstart += e.lookahead, e.lookahead = 0;
							var r = e.block_start + n;
							if ((e.strstart === 0 || e.strstart >= r) && (e.lookahead = e.strstart - r, e.strstart = r, I(e, !1), e.strm.avail_out === 0) || e.strstart - e.block_start >= e.w_size - T && (I(e, !1), e.strm.avail_out === 0)) return O;
						}
						return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : (e.strstart > e.block_start && (I(e, !1), e.strm.avail_out), O);
					}),
					new U(4, 4, 8, 4, V),
					new U(4, 5, 16, 8, V),
					new U(4, 6, 32, 32, V),
					new U(4, 4, 16, 16, H),
					new U(8, 16, 32, 32, H),
					new U(8, 16, 128, 128, H),
					new U(8, 32, 128, 256, H),
					new U(32, 128, 258, 1024, H),
					new U(32, 258, 258, 4096, H)
				], n.deflateInit = function(e, t) {
					return q(e, t, g, 15, 8, 0);
				}, n.deflateInit2 = q, n.deflateReset = K, n.deflateResetKeep = G, n.deflateSetHeader = function(e, t) {
					return e && e.state && e.state.wrap === 2 ? (e.state.gzhead = t, d) : f;
				}, n.deflate = function(e, t) {
					var n, i, o, c;
					if (!e || !e.state || 5 < t || t < 0) return e ? M(e, f) : f;
					if (i = e.state, !e.output || !e.input && e.avail_in !== 0 || i.status === 666 && t !== u) return M(e, e.avail_out === 0 ? -5 : f);
					if (i.strm = e, n = i.last_flush, i.last_flush = t, i.status === E) {
						if (i.wrap === 2) e.adler = 0, L(i, 31), L(i, 139), L(i, 8), i.gzhead ? (L(i, +!!i.gzhead.text + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)), L(i, 255 & i.gzhead.time), L(i, i.gzhead.time >> 8 & 255), L(i, i.gzhead.time >> 16 & 255), L(i, i.gzhead.time >> 24 & 255), L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), L(i, 255 & i.gzhead.os), i.gzhead.extra && i.gzhead.extra.length && (L(i, 255 & i.gzhead.extra.length), L(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (e.adler = s(e.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = 69) : (L(i, 0), L(i, 0), L(i, 0), L(i, 0), L(i, 0), L(i, i.level === 9 ? 2 : 2 <= i.strategy || i.level < 2 ? 4 : 0), L(i, 3), i.status = D);
						else {
							var p = g + (i.w_bits - 8 << 4) << 8;
							p |= (2 <= i.strategy || i.level < 2 ? 0 : i.level < 6 ? 1 : i.level === 6 ? 2 : 3) << 6, i.strstart !== 0 && (p |= 32), p += 31 - p % 31, i.status = D, R(i, p), i.strstart !== 0 && (R(i, e.adler >>> 16), R(i, 65535 & e.adler)), e.adler = 1;
						}
					}
					if (i.status === 69) {
						if (i.gzhead.extra) {
							for (o = i.pending; i.gzindex < (65535 & i.gzhead.extra.length) && (i.pending !== i.pending_buf_size || (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending !== i.pending_buf_size));) L(i, 255 & i.gzhead.extra[i.gzindex]), i.gzindex++;
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), i.gzindex === i.gzhead.extra.length && (i.gzindex = 0, i.status = 73);
						} else i.status = 73;
					}
					if (i.status === 73) {
						if (i.gzhead.name) {
							o = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending === i.pending_buf_size)) {
									c = 1;
									break;
								}
								c = i.gzindex < i.gzhead.name.length ? 255 & i.gzhead.name.charCodeAt(i.gzindex++) : 0, L(i, c);
							} while (c !== 0);
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.gzindex = 0, i.status = 91);
						} else i.status = 91;
					}
					if (i.status === 91) {
						if (i.gzhead.comment) {
							o = i.pending;
							do {
								if (i.pending === i.pending_buf_size && (i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), F(e), o = i.pending, i.pending === i.pending_buf_size)) {
									c = 1;
									break;
								}
								c = i.gzindex < i.gzhead.comment.length ? 255 & i.gzhead.comment.charCodeAt(i.gzindex++) : 0, L(i, c);
							} while (c !== 0);
							i.gzhead.hcrc && i.pending > o && (e.adler = s(e.adler, i.pending_buf, i.pending - o, o)), c === 0 && (i.status = 103);
						} else i.status = 103;
					}
					if (i.status === 103 && (i.gzhead.hcrc ? (i.pending + 2 > i.pending_buf_size && F(e), i.pending + 2 <= i.pending_buf_size && (L(i, 255 & e.adler), L(i, e.adler >> 8 & 255), e.adler = 0, i.status = D)) : i.status = D), i.pending !== 0) {
						if (F(e), e.avail_out === 0) return i.last_flush = -1, d;
					} else if (e.avail_in === 0 && N(t) <= N(n) && t !== u) return M(e, -5);
					if (i.status === 666 && e.avail_in !== 0) return M(e, -5);
					if (e.avail_in !== 0 || i.lookahead !== 0 || t !== l && i.status !== 666) {
						var m = i.strategy === 2 ? function(e, t) {
							for (var n;;) {
								if (e.lookahead === 0 && (B(e), e.lookahead === 0)) {
									if (t === l) return O;
									break;
								}
								if (e.match_length = 0, n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++, n && (I(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : i.strategy === 3 ? function(e, t) {
							for (var n, r, i, o, s = e.window;;) {
								if (e.lookahead <= w) {
									if (B(e), e.lookahead <= w && t === l) return O;
									if (e.lookahead === 0) break;
								}
								if (e.match_length = 0, e.lookahead >= C && 0 < e.strstart && (r = s[i = e.strstart - 1]) === s[++i] && r === s[++i] && r === s[++i]) {
									o = e.strstart + w;
									do									;
while (r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && r === s[++i] && i < o);
									e.match_length = w - (o - i), e.match_length > e.lookahead && (e.match_length = e.lookahead);
								}
								if (e.match_length >= C ? (n = a._tr_tally(e, 1, e.match_length - C), e.lookahead -= e.match_length, e.strstart += e.match_length, e.match_length = 0) : (n = a._tr_tally(e, 0, e.window[e.strstart]), e.lookahead--, e.strstart++), n && (I(e, !1), e.strm.avail_out === 0)) return O;
							}
							return e.insert = 0, t === u ? (I(e, !0), e.strm.avail_out === 0 ? A : j) : e.last_lit && (I(e, !1), e.strm.avail_out === 0) ? O : k;
						}(i, t) : r[i.level].func(i, t);
						if (m !== A && m !== j || (i.status = 666), m === O || m === A) return e.avail_out === 0 && (i.last_flush = -1), d;
						if (m === k && (t === 1 ? a._tr_align(i) : t !== 5 && (a._tr_stored_block(i, 0, 0, !1), t === 3 && (P(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), F(e), e.avail_out === 0)) return i.last_flush = -1, d;
					}
					return t === u ? i.wrap <= 0 ? 1 : (i.wrap === 2 ? (L(i, 255 & e.adler), L(i, e.adler >> 8 & 255), L(i, e.adler >> 16 & 255), L(i, e.adler >> 24 & 255), L(i, 255 & e.total_in), L(i, e.total_in >> 8 & 255), L(i, e.total_in >> 16 & 255), L(i, e.total_in >> 24 & 255)) : (R(i, e.adler >>> 16), R(i, 65535 & e.adler)), F(e), 0 < i.wrap && (i.wrap = -i.wrap), i.pending === 0 ? 1 : d) : d;
				}, n.deflateEnd = function(e) {
					var t;
					return e && e.state ? (t = e.state.status) !== E && t !== 69 && t !== 73 && t !== 91 && t !== 103 && t !== D && t !== 666 ? M(e, f) : (e.state = null, t === D ? M(e, -3) : d) : f;
				}, n.deflateSetDictionary = function(e, t) {
					var n, r, a, s, c, l, u, p, m = t.length;
					if (!e || !e.state || (s = (n = e.state).wrap) === 2 || s === 1 && n.status !== E || n.lookahead) return f;
					for (s === 1 && (e.adler = o(e.adler, t, m, 0)), n.wrap = 0, m >= n.w_size && (s === 0 && (P(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), p = new i.Buf8(n.w_size), i.arraySet(p, t, m - n.w_size, n.w_size, 0), t = p, m = n.w_size), c = e.avail_in, l = e.next_in, u = e.input, e.avail_in = m, e.next_in = 0, e.input = t, B(n); n.lookahead >= C;) {
						for (r = n.strstart, a = n.lookahead - (C - 1); n.ins_h = (n.ins_h << n.hash_shift ^ n.window[r + C - 1]) & n.hash_mask, n.prev[r & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = r, r++, --a;);
						n.strstart = r, n.lookahead = C - 1, B(n);
					}
					return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = C - 1, n.match_available = 0, e.next_in = l, e.input = u, e.avail_in = c, n.wrap = s, d;
				}, n.deflateInfo = "pako deflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./messages": 51,
				"./trees": 52
			}],
			47: [function(e, t, n) {
				t.exports = function() {
					this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
				};
			}, {}],
			48: [function(e, t, n) {
				t.exports = function(e, t) {
					var n = e.state, r = e.next_in, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b, x, S, C, w, T = e.input, E;
					i = r + (e.avail_in - 5), a = e.next_out, E = e.output, o = a - (t - e.avail_out), s = a + (e.avail_out - 257), c = n.dmax, l = n.wsize, u = n.whave, d = n.wnext, f = n.window, p = n.hold, m = n.bits, h = n.lencode, g = n.distcode, _ = (1 << n.lenbits) - 1, v = (1 << n.distbits) - 1;
					e: do {
						m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = h[p & _];
						t: for (;;) {
							if (p >>>= b = y >>> 24, m -= b, (b = y >>> 16 & 255) == 0) E[a++] = 65535 & y;
							else {
								if (!(16 & b)) {
									if (!(64 & b)) {
										y = h[(65535 & y) + (p & (1 << b) - 1)];
										continue t;
									}
									if (32 & b) {
										n.mode = 12;
										break e;
									}
									e.msg = "invalid literal/length code", n.mode = 30;
									break e;
								}
								x = 65535 & y, (b &= 15) && (m < b && (p += T[r++] << m, m += 8), x += p & (1 << b) - 1, p >>>= b, m -= b), m < 15 && (p += T[r++] << m, m += 8, p += T[r++] << m, m += 8), y = g[p & v];
								r: for (;;) {
									if (p >>>= b = y >>> 24, m -= b, !(16 & (b = y >>> 16 & 255))) {
										if (!(64 & b)) {
											y = g[(65535 & y) + (p & (1 << b) - 1)];
											continue r;
										}
										e.msg = "invalid distance code", n.mode = 30;
										break e;
									}
									if (S = 65535 & y, m < (b &= 15) && (p += T[r++] << m, (m += 8) < b && (p += T[r++] << m, m += 8)), c < (S += p & (1 << b) - 1)) {
										e.msg = "invalid distance too far back", n.mode = 30;
										break e;
									}
									if (p >>>= b, m -= b, (b = a - o) < S) {
										if (u < (b = S - b) && n.sane) {
											e.msg = "invalid distance too far back", n.mode = 30;
											break e;
										}
										if (w = f, (C = 0) === d) {
											if (C += l - b, b < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												C = a - S, w = E;
											}
										} else if (d < b) {
											if (C += l + d - b, (b -= d) < x) {
												for (x -= b; E[a++] = f[C++], --b;);
												if (C = 0, d < x) {
													for (x -= b = d; E[a++] = f[C++], --b;);
													C = a - S, w = E;
												}
											}
										} else if (C += d - b, b < x) {
											for (x -= b; E[a++] = f[C++], --b;);
											C = a - S, w = E;
										}
										for (; 2 < x;) E[a++] = w[C++], E[a++] = w[C++], E[a++] = w[C++], x -= 3;
										x && (E[a++] = w[C++], 1 < x && (E[a++] = w[C++]));
									} else {
										for (C = a - S; E[a++] = E[C++], E[a++] = E[C++], E[a++] = E[C++], 2 < (x -= 3););
										x && (E[a++] = E[C++], 1 < x && (E[a++] = E[C++]));
									}
									break;
								}
							}
							break;
						}
					} while (r < i && a < s);
					r -= x = m >> 3, p &= (1 << (m -= x << 3)) - 1, e.next_in = r, e.next_out = a, e.avail_in = r < i ? i - r + 5 : 5 - (r - i), e.avail_out = a < s ? s - a + 257 : 257 - (a - s), n.hold = p, n.bits = m;
				};
			}, {}],
			49: [function(e, t, n) {
				var r = e("../utils/common"), i = e("./adler32"), a = e("./crc32"), o = e("./inffast"), s = e("./inftrees"), c = 1, l = 2, u = 0, d = -2, f = 1, p = 852, m = 592;
				function h(e) {
					return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24);
				}
				function g() {
					this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new r.Buf16(320), this.work = new r.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
				}
				function _(e) {
					var t;
					return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = f, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new r.Buf32(p), t.distcode = t.distdyn = new r.Buf32(m), t.sane = 1, t.back = -1, u) : d;
				}
				function v(e) {
					var t;
					return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, _(e)) : d;
				}
				function y(e, t) {
					var n, r;
					return e && e.state ? (r = e.state, t < 0 ? (n = 0, t = -t) : (n = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || 15 < t) ? d : (r.window !== null && r.wbits !== t && (r.window = null), r.wrap = n, r.wbits = t, v(e))) : d;
				}
				function b(e, t) {
					var n, r;
					return e ? (r = new g(), (e.state = r).window = null, (n = y(e, t)) !== u && (e.state = null), n) : d;
				}
				var x, S, C = !0;
				function w(e) {
					if (C) {
						var t;
						for (x = new r.Buf32(512), S = new r.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
						for (; t < 256;) e.lens[t++] = 9;
						for (; t < 280;) e.lens[t++] = 7;
						for (; t < 288;) e.lens[t++] = 8;
						for (s(c, e.lens, 0, 288, x, 0, e.work, { bits: 9 }), t = 0; t < 32;) e.lens[t++] = 5;
						s(l, e.lens, 0, 32, S, 0, e.work, { bits: 5 }), C = !1;
					}
					e.lencode = x, e.lenbits = 9, e.distcode = S, e.distbits = 5;
				}
				function T(e, t, n, i) {
					var a, o = e.state;
					return o.window === null && (o.wsize = 1 << o.wbits, o.wnext = 0, o.whave = 0, o.window = new r.Buf8(o.wsize)), i >= o.wsize ? (r.arraySet(o.window, t, n - o.wsize, o.wsize, 0), o.wnext = 0, o.whave = o.wsize) : (i < (a = o.wsize - o.wnext) && (a = i), r.arraySet(o.window, t, n - i, a, o.wnext), (i -= a) ? (r.arraySet(o.window, t, n - i, i, 0), o.wnext = i, o.whave = o.wsize) : (o.wnext += a, o.wnext === o.wsize && (o.wnext = 0), o.whave < o.wsize && (o.whave += a))), 0;
				}
				n.inflateReset = v, n.inflateReset2 = y, n.inflateResetKeep = _, n.inflateInit = function(e) {
					return b(e, 15);
				}, n.inflateInit2 = b, n.inflate = function(e, t) {
					var n, p, m, g, _, v, y, b, x, S, C, E, D, O, k, A, j, M, N, P, F, I, L, R, z = 0, B = new r.Buf8(4), V = [
						16,
						17,
						18,
						0,
						8,
						7,
						9,
						6,
						10,
						5,
						11,
						4,
						12,
						3,
						13,
						2,
						14,
						1,
						15
					];
					if (!e || !e.state || !e.output || !e.input && e.avail_in !== 0) return d;
					(n = e.state).mode === 12 && (n.mode = 13), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, S = v, C = y, I = u;
					e: for (;;) switch (n.mode) {
						case f:
							if (n.wrap === 0) {
								n.mode = 13;
								break;
							}
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (2 & n.wrap && b === 35615) {
								B[n.check = 0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0), x = b = 0, n.mode = 2;
								break;
							}
							if (n.flags = 0, n.head && (n.head.done = !1), !(1 & n.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
								e.msg = "incorrect header check", n.mode = 30;
								break;
							}
							if ((15 & b) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (x -= 4, F = 8 + (15 & (b >>>= 4)), n.wbits === 0) n.wbits = F;
							else if (F > n.wbits) {
								e.msg = "invalid window size", n.mode = 30;
								break;
							}
							n.dmax = 1 << F, e.adler = n.check = 1, n.mode = 512 & b ? 10 : 12, x = b = 0;
							break;
						case 2:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.flags = b, (255 & n.flags) != 8) {
								e.msg = "unknown compression method", n.mode = 30;
								break;
							}
							if (57344 & n.flags) {
								e.msg = "unknown header flags set", n.mode = 30;
								break;
							}
							n.head && (n.head.text = b >> 8 & 1), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0, n.mode = 3;
						case 3:
							for (; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.time = b), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, B[2] = b >>> 16 & 255, B[3] = b >>> 24 & 255, n.check = a(n.check, B, 4, 0)), x = b = 0, n.mode = 4;
						case 4:
							for (; x < 16;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							n.head && (n.head.xflags = 255 & b, n.head.os = b >> 8), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0, n.mode = 5;
						case 5:
							if (1024 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length = b, n.head && (n.head.extra_len = b), 512 & n.flags && (B[0] = 255 & b, B[1] = b >>> 8 & 255, n.check = a(n.check, B, 2, 0)), x = b = 0;
							} else n.head && (n.head.extra = null);
							n.mode = 6;
						case 6:
							if (1024 & n.flags && (v < (E = n.length) && (E = v), E && (n.head && (F = n.head.extra_len - n.length, n.head.extra || (n.head.extra = Array(n.head.extra_len)), r.arraySet(n.head.extra, p, g, E, F)), 512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, n.length -= E), n.length)) break e;
							n.length = 0, n.mode = 7;
						case 7:
							if (2048 & n.flags) {
								if (v === 0) break e;
								for (E = 0; F = p[g + E++], n.head && F && n.length < 65536 && (n.head.name += String.fromCharCode(F)), F && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, F) break e;
							} else n.head && (n.head.name = null);
							n.length = 0, n.mode = 8;
						case 8:
							if (4096 & n.flags) {
								if (v === 0) break e;
								for (E = 0; F = p[g + E++], n.head && F && n.length < 65536 && (n.head.comment += String.fromCharCode(F)), F && E < v;);
								if (512 & n.flags && (n.check = a(n.check, p, E, g)), v -= E, g += E, F) break e;
							} else n.head && (n.head.comment = null);
							n.mode = 9;
						case 9:
							if (512 & n.flags) {
								for (; x < 16;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (65535 & n.check)) {
									e.msg = "header crc mismatch", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.head && (n.head.hcrc = n.flags >> 9 & 1, n.head.done = !0), e.adler = n.check = 0, n.mode = 12;
							break;
						case 10:
							for (; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							e.adler = n.check = h(b), x = b = 0, n.mode = 11;
						case 11:
							if (n.havedict === 0) return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, 2;
							e.adler = n.check = 1, n.mode = 12;
						case 12: if (t === 5 || t === 6) break e;
						case 13:
							if (n.last) {
								b >>>= 7 & x, x -= 7 & x, n.mode = 27;
								break;
							}
							for (; x < 3;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							switch (n.last = 1 & b, --x, 3 & (b >>>= 1)) {
								case 0:
									n.mode = 14;
									break;
								case 1:
									if (w(n), n.mode = 20, t !== 6) break;
									b >>>= 2, x -= 2;
									break e;
								case 2:
									n.mode = 17;
									break;
								case 3: e.msg = "invalid block type", n.mode = 30;
							}
							b >>>= 2, x -= 2;
							break;
						case 14:
							for (b >>>= 7 & x, x -= 7 & x; x < 32;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if ((65535 & b) != (b >>> 16 ^ 65535)) {
								e.msg = "invalid stored block lengths", n.mode = 30;
								break;
							}
							if (n.length = 65535 & b, x = b = 0, n.mode = 15, t === 6) break e;
						case 15: n.mode = 16;
						case 16:
							if (E = n.length) {
								if (v < E && (E = v), y < E && (E = y), E === 0) break e;
								r.arraySet(m, p, g, E, _), v -= E, g += E, y -= E, _ += E, n.length -= E;
								break;
							}
							n.mode = 12;
							break;
						case 17:
							for (; x < 14;) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (n.nlen = 257 + (31 & b), b >>>= 5, x -= 5, n.ndist = 1 + (31 & b), b >>>= 5, x -= 5, n.ncode = 4 + (15 & b), b >>>= 4, x -= 4, 286 < n.nlen || 30 < n.ndist) {
								e.msg = "too many length or distance symbols", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 18;
						case 18:
							for (; n.have < n.ncode;) {
								for (; x < 3;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.lens[V[n.have++]] = 7 & b, b >>>= 3, x -= 3;
							}
							for (; n.have < 19;) n.lens[V[n.have++]] = 0;
							if (n.lencode = n.lendyn, n.lenbits = 7, L = { bits: n.lenbits }, I = s(0, n.lens, 0, 19, n.lencode, 0, n.work, L), n.lenbits = L.bits, I) {
								e.msg = "invalid code lengths set", n.mode = 30;
								break;
							}
							n.have = 0, n.mode = 19;
						case 19:
							for (; n.have < n.nlen + n.ndist;) {
								for (; A = (z = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (j < 16) b >>>= k, x -= k, n.lens[n.have++] = j;
								else {
									if (j === 16) {
										for (R = k + 2; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										if (b >>>= k, x -= k, n.have === 0) {
											e.msg = "invalid bit length repeat", n.mode = 30;
											break;
										}
										F = n.lens[n.have - 1], E = 3 + (3 & b), b >>>= 2, x -= 2;
									} else if (j === 17) {
										for (R = k + 3; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, F = 0, E = 3 + (7 & (b >>>= k)), b >>>= 3, x -= 3;
									} else {
										for (R = k + 7; x < R;) {
											if (v === 0) break e;
											v--, b += p[g++] << x, x += 8;
										}
										x -= k, F = 0, E = 11 + (127 & (b >>>= k)), b >>>= 7, x -= 7;
									}
									if (n.have + E > n.nlen + n.ndist) {
										e.msg = "invalid bit length repeat", n.mode = 30;
										break;
									}
									for (; E--;) n.lens[n.have++] = F;
								}
							}
							if (n.mode === 30) break;
							if (n.lens[256] === 0) {
								e.msg = "invalid code -- missing end-of-block", n.mode = 30;
								break;
							}
							if (n.lenbits = 9, L = { bits: n.lenbits }, I = s(c, n.lens, 0, n.nlen, n.lencode, 0, n.work, L), n.lenbits = L.bits, I) {
								e.msg = "invalid literal/lengths set", n.mode = 30;
								break;
							}
							if (n.distbits = 6, n.distcode = n.distdyn, L = { bits: n.distbits }, I = s(l, n.lens, n.nlen, n.ndist, n.distcode, 0, n.work, L), n.distbits = L.bits, I) {
								e.msg = "invalid distances set", n.mode = 30;
								break;
							}
							if (n.mode = 20, t === 6) break e;
						case 20: n.mode = 21;
						case 21:
							if (6 <= v && 258 <= y) {
								e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, o(e, C), _ = e.next_out, m = e.output, y = e.avail_out, g = e.next_in, p = e.input, v = e.avail_in, b = n.hold, x = n.bits, n.mode === 12 && (n.back = -1);
								break;
							}
							for (n.back = 0; A = (z = n.lencode[b & (1 << n.lenbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (A && !(240 & A)) {
								for (M = k, N = A, P = j; A = (z = n.lencode[P + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & z, !(M + (k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, n.length = j, A === 0) {
								n.mode = 26;
								break;
							}
							if (32 & A) {
								n.back = -1, n.mode = 12;
								break;
							}
							if (64 & A) {
								e.msg = "invalid literal/length code", n.mode = 30;
								break;
							}
							n.extra = 15 & A, n.mode = 22;
						case 22:
							if (n.extra) {
								for (R = n.extra; x < R;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.length += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							n.was = n.length, n.mode = 23;
						case 23:
							for (; A = (z = n.distcode[b & (1 << n.distbits) - 1]) >>> 16 & 255, j = 65535 & z, !((k = z >>> 24) <= x);) {
								if (v === 0) break e;
								v--, b += p[g++] << x, x += 8;
							}
							if (!(240 & A)) {
								for (M = k, N = A, P = j; A = (z = n.distcode[P + ((b & (1 << M + N) - 1) >> M)]) >>> 16 & 255, j = 65535 & z, !(M + (k = z >>> 24) <= x);) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								b >>>= M, x -= M, n.back += M;
							}
							if (b >>>= k, x -= k, n.back += k, 64 & A) {
								e.msg = "invalid distance code", n.mode = 30;
								break;
							}
							n.offset = j, n.extra = 15 & A, n.mode = 24;
						case 24:
							if (n.extra) {
								for (R = n.extra; x < R;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								n.offset += b & (1 << n.extra) - 1, b >>>= n.extra, x -= n.extra, n.back += n.extra;
							}
							if (n.offset > n.dmax) {
								e.msg = "invalid distance too far back", n.mode = 30;
								break;
							}
							n.mode = 25;
						case 25:
							if (y === 0) break e;
							if (E = C - y, n.offset > E) {
								if ((E = n.offset - E) > n.whave && n.sane) {
									e.msg = "invalid distance too far back", n.mode = 30;
									break;
								}
								D = E > n.wnext ? (E -= n.wnext, n.wsize - E) : n.wnext - E, E > n.length && (E = n.length), O = n.window;
							} else O = m, D = _ - n.offset, E = n.length;
							for (y < E && (E = y), y -= E, n.length -= E; m[_++] = O[D++], --E;);
							n.length === 0 && (n.mode = 21);
							break;
						case 26:
							if (y === 0) break e;
							m[_++] = n.length, y--, n.mode = 21;
							break;
						case 27:
							if (n.wrap) {
								for (; x < 32;) {
									if (v === 0) break e;
									v--, b |= p[g++] << x, x += 8;
								}
								if (C -= y, e.total_out += C, n.total += C, C && (e.adler = n.check = n.flags ? a(n.check, m, C, _ - C) : i(n.check, m, C, _ - C)), C = y, (n.flags ? b : h(b)) !== n.check) {
									e.msg = "incorrect data check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 28;
						case 28:
							if (n.wrap && n.flags) {
								for (; x < 32;) {
									if (v === 0) break e;
									v--, b += p[g++] << x, x += 8;
								}
								if (b !== (0 | n.total)) {
									e.msg = "incorrect length check", n.mode = 30;
									break;
								}
								x = b = 0;
							}
							n.mode = 29;
						case 29:
							I = 1;
							break e;
						case 30:
							I = -3;
							break e;
						case 31: return -4;
						default: return d;
					}
					return e.next_out = _, e.avail_out = y, e.next_in = g, e.avail_in = v, n.hold = b, n.bits = x, (n.wsize || C !== e.avail_out && n.mode < 30 && (n.mode < 27 || t !== 4)) && T(e, e.output, e.next_out, C - e.avail_out) ? (n.mode = 31, -4) : (S -= e.avail_in, C -= e.avail_out, e.total_in += S, e.total_out += C, n.total += C, n.wrap && C && (e.adler = n.check = n.flags ? a(n.check, m, C, e.next_out - C) : i(n.check, m, C, e.next_out - C)), e.data_type = n.bits + (n.last ? 64 : 0) + (n.mode === 12 ? 128 : 0) + (n.mode === 20 || n.mode === 15 ? 256 : 0), (S == 0 && C === 0 || t === 4) && I === u && (I = -5), I);
				}, n.inflateEnd = function(e) {
					if (!e || !e.state) return d;
					var t = e.state;
					return t.window &&= null, e.state = null, u;
				}, n.inflateGetHeader = function(e, t) {
					var n;
					return e && e.state && 2 & (n = e.state).wrap ? ((n.head = t).done = !1, u) : d;
				}, n.inflateSetDictionary = function(e, t) {
					var n, r = t.length;
					return e && e.state ? (n = e.state).wrap !== 0 && n.mode !== 11 ? d : n.mode === 11 && i(1, t, r, 0) !== n.check ? -3 : T(e, t, r, r) ? (n.mode = 31, -4) : (n.havedict = 1, u) : d;
				}, n.inflateInfo = "pako inflate (from Nodeca project)";
			}, {
				"../utils/common": 41,
				"./adler32": 43,
				"./crc32": 45,
				"./inffast": 48,
				"./inftrees": 50
			}],
			50: [function(e, t, n) {
				var r = e("../utils/common"), i = [
					3,
					4,
					5,
					6,
					7,
					8,
					9,
					10,
					11,
					13,
					15,
					17,
					19,
					23,
					27,
					31,
					35,
					43,
					51,
					59,
					67,
					83,
					99,
					115,
					131,
					163,
					195,
					227,
					258,
					0,
					0
				], a = [
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					16,
					17,
					17,
					17,
					17,
					18,
					18,
					18,
					18,
					19,
					19,
					19,
					19,
					20,
					20,
					20,
					20,
					21,
					21,
					21,
					21,
					16,
					72,
					78
				], o = [
					1,
					2,
					3,
					4,
					5,
					7,
					9,
					13,
					17,
					25,
					33,
					49,
					65,
					97,
					129,
					193,
					257,
					385,
					513,
					769,
					1025,
					1537,
					2049,
					3073,
					4097,
					6145,
					8193,
					12289,
					16385,
					24577,
					0,
					0
				], s = [
					16,
					16,
					16,
					16,
					17,
					17,
					18,
					18,
					19,
					19,
					20,
					20,
					21,
					21,
					22,
					22,
					23,
					23,
					24,
					24,
					25,
					25,
					26,
					26,
					27,
					27,
					28,
					28,
					29,
					29,
					64,
					64
				];
				t.exports = function(e, t, n, c, l, u, d, f) {
					var p, m, h, g, _, v, y, b, x, S = f.bits, C = 0, w = 0, T = 0, E = 0, D = 0, O = 0, k = 0, A = 0, j = 0, M = 0, N = null, P = 0, F = new r.Buf16(16), I = new r.Buf16(16), L = null, R = 0;
					for (C = 0; C <= 15; C++) F[C] = 0;
					for (w = 0; w < c; w++) F[t[n + w]]++;
					for (D = S, E = 15; 1 <= E && F[E] === 0; E--);
					if (E < D && (D = E), E === 0) return l[u++] = 20971520, l[u++] = 20971520, f.bits = 1, 0;
					for (T = 1; T < E && F[T] === 0; T++);
					for (D < T && (D = T), C = A = 1; C <= 15; C++) if (A <<= 1, (A -= F[C]) < 0) return -1;
					if (0 < A && (e === 0 || E !== 1)) return -1;
					for (I[1] = 0, C = 1; C < 15; C++) I[C + 1] = I[C] + F[C];
					for (w = 0; w < c; w++) t[n + w] !== 0 && (d[I[t[n + w]]++] = w);
					if (v = e === 0 ? (N = L = d, 19) : e === 1 ? (N = i, P -= 257, L = a, R -= 257, 256) : (N = o, L = s, -1), C = T, _ = u, k = w = M = 0, h = -1, g = (j = 1 << (O = D)) - 1, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
					for (;;) {
						for (y = C - k, x = d[w] < v ? (b = 0, d[w]) : d[w] > v ? (b = L[R + d[w]], N[P + d[w]]) : (b = 96, 0), p = 1 << C - k, T = m = 1 << O; l[_ + (M >> k) + (m -= p)] = y << 24 | b << 16 | x, m !== 0;);
						for (p = 1 << C - 1; M & p;) p >>= 1;
						if (p === 0 ? M = 0 : (M &= p - 1, M += p), w++, --F[C] == 0) {
							if (C === E) break;
							C = t[n + d[w]];
						}
						if (D < C && (M & g) !== h) {
							for (k === 0 && (k = D), _ += T, A = 1 << (O = C - k); O + k < E && !((A -= F[O + k]) <= 0);) O++, A <<= 1;
							if (j += 1 << O, e === 1 && 852 < j || e === 2 && 592 < j) return 1;
							l[h = M & g] = D << 24 | O << 16 | _ - u;
						}
					}
					return M !== 0 && (l[_ + M] = C - k << 24 | 4194304), f.bits = D, 0;
				};
			}, { "../utils/common": 41 }],
			51: [function(e, t, n) {
				t.exports = {
					2: "need dictionary",
					1: "stream end",
					0: "",
					"-1": "file error",
					"-2": "stream error",
					"-3": "data error",
					"-4": "insufficient memory",
					"-5": "buffer error",
					"-6": "incompatible version"
				};
			}, {}],
			52: [function(e, t, n) {
				var r = e("../utils/common"), i = 0, a = 1;
				function o(e) {
					for (var t = e.length; 0 <= --t;) e[t] = 0;
				}
				var s = 0, c = 29, l = 256, u = l + 1 + c, d = 30, f = 19, p = 2 * u + 1, m = 15, h = 16, g = 7, _ = 256, v = 16, y = 17, b = 18, x = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1,
					1,
					1,
					1,
					2,
					2,
					2,
					2,
					3,
					3,
					3,
					3,
					4,
					4,
					4,
					4,
					5,
					5,
					5,
					5,
					0
				], S = [
					0,
					0,
					0,
					0,
					1,
					1,
					2,
					2,
					3,
					3,
					4,
					4,
					5,
					5,
					6,
					6,
					7,
					7,
					8,
					8,
					9,
					9,
					10,
					10,
					11,
					11,
					12,
					12,
					13,
					13
				], C = [
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					2,
					3,
					7
				], w = [
					16,
					17,
					18,
					0,
					8,
					7,
					9,
					6,
					10,
					5,
					11,
					4,
					12,
					3,
					13,
					2,
					14,
					1,
					15
				], T = Array(2 * (u + 2));
				o(T);
				var E = Array(2 * d);
				o(E);
				var D = Array(512);
				o(D);
				var O = Array(256);
				o(O);
				var k = Array(c);
				o(k);
				var A, j, M, N = Array(d);
				function P(e, t, n, r, i) {
					this.static_tree = e, this.extra_bits = t, this.extra_base = n, this.elems = r, this.max_length = i, this.has_stree = e && e.length;
				}
				function F(e, t) {
					this.dyn_tree = e, this.max_code = 0, this.stat_desc = t;
				}
				function I(e) {
					return e < 256 ? D[e] : D[256 + (e >>> 7)];
				}
				function L(e, t) {
					e.pending_buf[e.pending++] = 255 & t, e.pending_buf[e.pending++] = t >>> 8 & 255;
				}
				function R(e, t, n) {
					e.bi_valid > h - n ? (e.bi_buf |= t << e.bi_valid & 65535, L(e, e.bi_buf), e.bi_buf = t >> h - e.bi_valid, e.bi_valid += n - h) : (e.bi_buf |= t << e.bi_valid & 65535, e.bi_valid += n);
				}
				function z(e, t, n) {
					R(e, n[2 * t], n[2 * t + 1]);
				}
				function B(e, t) {
					for (var n = 0; n |= 1 & e, e >>>= 1, n <<= 1, 0 < --t;);
					return n >>> 1;
				}
				function V(e, t, n) {
					var r, i, a = Array(m + 1), o = 0;
					for (r = 1; r <= m; r++) a[r] = o = o + n[r - 1] << 1;
					for (i = 0; i <= t; i++) {
						var s = e[2 * i + 1];
						s !== 0 && (e[2 * i] = B(a[s]++, s));
					}
				}
				function H(e) {
					for (var t = 0; t < u; t++) e.dyn_ltree[2 * t] = 0;
					for (t = 0; t < d; t++) e.dyn_dtree[2 * t] = 0;
					for (t = 0; t < f; t++) e.bl_tree[2 * t] = 0;
					e.dyn_ltree[2 * _] = 1, e.opt_len = e.static_len = 0, e.last_lit = e.matches = 0;
				}
				function U(e) {
					8 < e.bi_valid ? L(e, e.bi_buf) : 0 < e.bi_valid && (e.pending_buf[e.pending++] = e.bi_buf), e.bi_buf = 0, e.bi_valid = 0;
				}
				function W(e, t, n, r) {
					var i = 2 * t, a = 2 * n;
					return e[i] < e[a] || e[i] === e[a] && r[t] <= r[n];
				}
				function G(e, t, n) {
					for (var r = e.heap[n], i = n << 1; i <= e.heap_len && (i < e.heap_len && W(t, e.heap[i + 1], e.heap[i], e.depth) && i++, !W(t, r, e.heap[i], e.depth));) e.heap[n] = e.heap[i], n = i, i <<= 1;
					e.heap[n] = r;
				}
				function K(e, t, n) {
					var r, i, a, o, s = 0;
					if (e.last_lit !== 0) for (; r = e.pending_buf[e.d_buf + 2 * s] << 8 | e.pending_buf[e.d_buf + 2 * s + 1], i = e.pending_buf[e.l_buf + s], s++, r === 0 ? z(e, i, t) : (z(e, (a = O[i]) + l + 1, t), (o = x[a]) !== 0 && R(e, i -= k[a], o), z(e, a = I(--r), n), (o = S[a]) !== 0 && R(e, r -= N[a], o)), s < e.last_lit;);
					z(e, _, t);
				}
				function q(e, t) {
					var n, r, i, a = t.dyn_tree, o = t.stat_desc.static_tree, s = t.stat_desc.has_stree, c = t.stat_desc.elems, l = -1;
					for (e.heap_len = 0, e.heap_max = p, n = 0; n < c; n++) a[2 * n] === 0 ? a[2 * n + 1] = 0 : (e.heap[++e.heap_len] = l = n, e.depth[n] = 0);
					for (; e.heap_len < 2;) a[2 * (i = e.heap[++e.heap_len] = l < 2 ? ++l : 0)] = 1, e.depth[i] = 0, e.opt_len--, s && (e.static_len -= o[2 * i + 1]);
					for (t.max_code = l, n = e.heap_len >> 1; 1 <= n; n--) G(e, a, n);
					for (i = c; n = e.heap[1], e.heap[1] = e.heap[e.heap_len--], G(e, a, 1), r = e.heap[1], e.heap[--e.heap_max] = n, e.heap[--e.heap_max] = r, a[2 * i] = a[2 * n] + a[2 * r], e.depth[i] = (e.depth[n] >= e.depth[r] ? e.depth[n] : e.depth[r]) + 1, a[2 * n + 1] = a[2 * r + 1] = i, e.heap[1] = i++, G(e, a, 1), 2 <= e.heap_len;);
					e.heap[--e.heap_max] = e.heap[1], function(e, t) {
						var n, r, i, a, o, s, c = t.dyn_tree, l = t.max_code, u = t.stat_desc.static_tree, d = t.stat_desc.has_stree, f = t.stat_desc.extra_bits, h = t.stat_desc.extra_base, g = t.stat_desc.max_length, _ = 0;
						for (a = 0; a <= m; a++) e.bl_count[a] = 0;
						for (c[2 * e.heap[e.heap_max] + 1] = 0, n = e.heap_max + 1; n < p; n++) g < (a = c[2 * c[2 * (r = e.heap[n]) + 1] + 1] + 1) && (a = g, _++), c[2 * r + 1] = a, l < r || (e.bl_count[a]++, o = 0, h <= r && (o = f[r - h]), s = c[2 * r], e.opt_len += s * (a + o), d && (e.static_len += s * (u[2 * r + 1] + o)));
						if (_ !== 0) {
							do {
								for (a = g - 1; e.bl_count[a] === 0;) a--;
								e.bl_count[a]--, e.bl_count[a + 1] += 2, e.bl_count[g]--, _ -= 2;
							} while (0 < _);
							for (a = g; a !== 0; a--) for (r = e.bl_count[a]; r !== 0;) l < (i = e.heap[--n]) || (c[2 * i + 1] !== a && (e.opt_len += (a - c[2 * i + 1]) * c[2 * i], c[2 * i + 1] = a), r--);
						}
					}(e, t), V(a, l, e.bl_count);
				}
				function ee(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), t[2 * (n + 1) + 1] = 65535, r = 0; r <= n; r++) i = o, o = t[2 * (r + 1) + 1], ++s < c && i === o || (s < l ? e.bl_tree[2 * i] += s : i === 0 ? s <= 10 ? e.bl_tree[2 * y]++ : e.bl_tree[2 * b]++ : (i !== a && e.bl_tree[2 * i]++, e.bl_tree[2 * v]++), a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4));
				}
				function te(e, t, n) {
					var r, i, a = -1, o = t[1], s = 0, c = 7, l = 4;
					for (o === 0 && (c = 138, l = 3), r = 0; r <= n; r++) if (i = o, o = t[2 * (r + 1) + 1], !(++s < c && i === o)) {
						if (s < l) for (; z(e, i, e.bl_tree), --s != 0;);
						else i === 0 ? s <= 10 ? (z(e, y, e.bl_tree), R(e, s - 3, 3)) : (z(e, b, e.bl_tree), R(e, s - 11, 7)) : (i !== a && (z(e, i, e.bl_tree), s--), z(e, v, e.bl_tree), R(e, s - 3, 2));
						a = i, l = (s = 0) === o ? (c = 138, 3) : i === o ? (c = 6, 3) : (c = 7, 4);
					}
				}
				o(N);
				var J = !1;
				function Y(e, t, n, i) {
					R(e, (s << 1) + +!!i, 3), function(e, t, n, i) {
						U(e), i && (L(e, n), L(e, ~n)), r.arraySet(e.pending_buf, e.window, t, n, e.pending), e.pending += n;
					}(e, t, n, !0);
				}
				n._tr_init = function(e) {
					J ||= (function() {
						var e, t, n, r, i, a = Array(m + 1);
						for (r = n = 0; r < c - 1; r++) for (k[r] = n, e = 0; e < 1 << x[r]; e++) O[n++] = r;
						for (O[n - 1] = r, r = i = 0; r < 16; r++) for (N[r] = i, e = 0; e < 1 << S[r]; e++) D[i++] = r;
						for (i >>= 7; r < d; r++) for (N[r] = i << 7, e = 0; e < 1 << S[r] - 7; e++) D[256 + i++] = r;
						for (t = 0; t <= m; t++) a[t] = 0;
						for (e = 0; e <= 143;) T[2 * e + 1] = 8, e++, a[8]++;
						for (; e <= 255;) T[2 * e + 1] = 9, e++, a[9]++;
						for (; e <= 279;) T[2 * e + 1] = 7, e++, a[7]++;
						for (; e <= 287;) T[2 * e + 1] = 8, e++, a[8]++;
						for (V(T, u + 1, a), e = 0; e < d; e++) E[2 * e + 1] = 5, E[2 * e] = B(e, 5);
						A = new P(T, x, l + 1, u, m), j = new P(E, S, 0, d, m), M = new P([], C, 0, f, g);
					}(), !0), e.l_desc = new F(e.dyn_ltree, A), e.d_desc = new F(e.dyn_dtree, j), e.bl_desc = new F(e.bl_tree, M), e.bi_buf = 0, e.bi_valid = 0, H(e);
				}, n._tr_stored_block = Y, n._tr_flush_block = function(e, t, n, r) {
					var o, s, c = 0;
					0 < e.level ? (e.strm.data_type === 2 && (e.strm.data_type = function(e) {
						var t, n = 4093624447;
						for (t = 0; t <= 31; t++, n >>>= 1) if (1 & n && e.dyn_ltree[2 * t] !== 0) return i;
						if (e.dyn_ltree[18] !== 0 || e.dyn_ltree[20] !== 0 || e.dyn_ltree[26] !== 0) return a;
						for (t = 32; t < l; t++) if (e.dyn_ltree[2 * t] !== 0) return a;
						return i;
					}(e)), q(e, e.l_desc), q(e, e.d_desc), c = function(e) {
						var t;
						for (ee(e, e.dyn_ltree, e.l_desc.max_code), ee(e, e.dyn_dtree, e.d_desc.max_code), q(e, e.bl_desc), t = f - 1; 3 <= t && e.bl_tree[2 * w[t] + 1] === 0; t--);
						return e.opt_len += 3 * (t + 1) + 5 + 5 + 4, t;
					}(e), o = e.opt_len + 3 + 7 >>> 3, (s = e.static_len + 3 + 7 >>> 3) <= o && (o = s)) : o = s = n + 5, n + 4 <= o && t !== -1 ? Y(e, t, n, r) : e.strategy === 4 || s === o ? (R(e, 2 + +!!r, 3), K(e, T, E)) : (R(e, 4 + +!!r, 3), function(e, t, n, r) {
						var i;
						for (R(e, t - 257, 5), R(e, n - 1, 5), R(e, r - 4, 4), i = 0; i < r; i++) R(e, e.bl_tree[2 * w[i] + 1], 3);
						te(e, e.dyn_ltree, t - 1), te(e, e.dyn_dtree, n - 1);
					}(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, c + 1), K(e, e.dyn_ltree, e.dyn_dtree)), H(e), r && U(e);
				}, n._tr_tally = function(e, t, n) {
					return e.pending_buf[e.d_buf + 2 * e.last_lit] = t >>> 8 & 255, e.pending_buf[e.d_buf + 2 * e.last_lit + 1] = 255 & t, e.pending_buf[e.l_buf + e.last_lit] = 255 & n, e.last_lit++, t === 0 ? e.dyn_ltree[2 * n]++ : (e.matches++, t--, e.dyn_ltree[2 * (O[n] + l + 1)]++, e.dyn_dtree[2 * I(t)]++), e.last_lit === e.lit_bufsize - 1;
				}, n._tr_align = function(e) {
					R(e, 2, 3), z(e, _, T), function(e) {
						e.bi_valid === 16 ? (L(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : 8 <= e.bi_valid && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8);
					}(e);
				};
			}, { "../utils/common": 41 }],
			53: [function(e, t, n) {
				t.exports = function() {
					this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
				};
			}, {}],
			54: [function(e, t, n) {
				(function(e) {
					(function(e, t) {
						if (!e.setImmediate) {
							var n, r, i, a, o = 1, s = {}, c = !1, l = e.document, u = Object.getPrototypeOf && Object.getPrototypeOf(e);
							u = u && u.setTimeout ? u : e, n = {}.toString.call(e.process) === "[object process]" ? function(e) {
								process.nextTick(function() {
									f(e);
								});
							} : function() {
								if (e.postMessage && !e.importScripts) {
									var t = !0, n = e.onmessage;
									return e.onmessage = function() {
										t = !1;
									}, e.postMessage("", "*"), e.onmessage = n, t;
								}
							}() ? (a = "setImmediate$" + Math.random() + "$", e.addEventListener ? e.addEventListener("message", p, !1) : e.attachEvent("onmessage", p), function(t) {
								e.postMessage(a + t, "*");
							}) : e.MessageChannel ? ((i = new MessageChannel()).port1.onmessage = function(e) {
								f(e.data);
							}, function(e) {
								i.port2.postMessage(e);
							}) : l && "onreadystatechange" in l.createElement("script") ? (r = l.documentElement, function(e) {
								var t = l.createElement("script");
								t.onreadystatechange = function() {
									f(e), t.onreadystatechange = null, r.removeChild(t), t = null;
								}, r.appendChild(t);
							}) : function(e) {
								setTimeout(f, 0, e);
							}, u.setImmediate = function(e) {
								typeof e != "function" && (e = Function("" + e));
								for (var t = Array(arguments.length - 1), r = 0; r < t.length; r++) t[r] = arguments[r + 1];
								return s[o] = {
									callback: e,
									args: t
								}, n(o), o++;
							}, u.clearImmediate = d;
						}
						function d(e) {
							delete s[e];
						}
						function f(e) {
							if (c) setTimeout(f, 0, e);
							else {
								var n = s[e];
								if (n) {
									c = !0;
									try {
										(function(e) {
											var n = e.callback, r = e.args;
											switch (r.length) {
												case 0:
													n();
													break;
												case 1:
													n(r[0]);
													break;
												case 2:
													n(r[0], r[1]);
													break;
												case 3:
													n(r[0], r[1], r[2]);
													break;
												default: n.apply(t, r);
											}
										})(n);
									} finally {
										d(e), c = !1;
									}
								}
							}
						}
						function p(t) {
							t.source === e && typeof t.data == "string" && t.data.indexOf(a) === 0 && f(+t.data.slice(a.length));
						}
					})(typeof self > "u" ? e === void 0 ? this : e : self);
				}).call(this, typeof global < "u" ? global : typeof self < "u" ? self : typeof window < "u" ? window : {});
			}, {}]
		}, {}, [10])(10);
	});
})), le = /* @__PURE__ */ oe(((e, t) => {
	(function(t, n) {
		typeof define == "function" && define.amd ? define([], n) : e === void 0 ? (n(), t.FileSaver = { exports: {} }.exports) : n();
	})(e, function() {
		function e(e, t) {
			return t === void 0 ? t = { autoBom: !1 } : typeof t != "object" && (console.warn("Deprecated: Expected third argument to be a object"), t = { autoBom: !t }), t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
		}
		function n(e, t, n) {
			var r = new XMLHttpRequest();
			r.open("GET", e), r.responseType = "blob", r.onload = function() {
				s(r.response, t, n);
			}, r.onerror = function() {
				console.error("could not download file");
			}, r.send();
		}
		function r(e) {
			var t = new XMLHttpRequest();
			t.open("HEAD", e, !1);
			try {
				t.send();
			} catch {}
			return 200 <= t.status && 299 >= t.status;
		}
		function i(e) {
			try {
				e.dispatchEvent(new MouseEvent("click"));
			} catch {
				var t = document.createEvent("MouseEvents");
				t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(t);
			}
		}
		var a = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : void 0, o = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent), s = a.saveAs || (typeof window != "object" || window !== a ? function() {} : "download" in HTMLAnchorElement.prototype && !o ? function(e, t, o) {
			var s = a.URL || a.webkitURL, c = document.createElement("a");
			t = t || e.name || "download", c.download = t, c.rel = "noopener", typeof e == "string" ? (c.href = e, c.origin === location.origin ? i(c) : r(c.href) ? n(e, t, o) : i(c, c.target = "_blank")) : (c.href = s.createObjectURL(e), setTimeout(function() {
				s.revokeObjectURL(c.href);
			}, 4e4), setTimeout(function() {
				i(c);
			}, 0));
		} : "msSaveOrOpenBlob" in navigator ? function(t, a, o) {
			if (a = a || t.name || "download", typeof t != "string") navigator.msSaveOrOpenBlob(e(t, o), a);
			else if (r(t)) n(t, a, o);
			else {
				var s = document.createElement("a");
				s.href = t, s.target = "_blank", setTimeout(function() {
					i(s);
				});
			}
		} : function(e, t, r, i) {
			if (i ||= open("", "_blank"), i && (i.document.title = i.document.body.innerText = "downloading..."), typeof e == "string") return n(e, t, r);
			var s = e.type === "application/octet-stream", c = /constructor/i.test(a.HTMLElement) || a.safari, l = /CriOS\/[\d]+/.test(navigator.userAgent);
			if ((l || s && c || o) && typeof FileReader < "u") {
				var u = new FileReader();
				u.onloadend = function() {
					var e = u.result;
					e = l ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), i ? i.location.href = e : location = e, i = null;
				}, u.readAsDataURL(e);
			} else {
				var d = a.URL || a.webkitURL, f = d.createObjectURL(e);
				i ? i.location = f : location.href = f, i = null, setTimeout(function() {
					d.revokeObjectURL(f);
				}, 4e4);
			}
		});
		a.saveAs = s.saveAs = s, t !== void 0 && (t.exports = s);
	});
})), ue = /* @__PURE__ */ se(ce()), de = /* @__PURE__ */ se(le()), fe = class extends Error {
	constructor(e) {
		super(e), this.name = "Eta Error";
	}
}, pe = class extends fe {
	constructor(e) {
		super(e), this.name = "EtaParser Error";
	}
}, me = class extends fe {
	constructor(e) {
		super(e), this.name = "EtaRuntime Error";
	}
}, he = class extends fe {
	constructor(e) {
		super(e), this.name = "EtaNameResolution Error";
	}
};
function Q(e, t, n) {
	let r = t.slice(0, n).split(/\n/), i = r.length, a = r[i - 1].length + 1;
	throw e += " at line " + i + " col " + a + ":\n\n  " + t.split(/\n/)[i - 1] + "\n  " + Array(a).join(" ") + "^", new pe(e);
}
function ge(e, t, n, r) {
	let i = t.split("\n"), a = Math.max(n - 3, 0), o = Math.min(i.length, n + 3), s = r, c = i.slice(a, o).map((e, t) => {
		let r = t + a + 1;
		return (r === n ? " >> " : "    ") + r + "| " + e;
	}).join("\n"), l = new me((s ? s + ":" + n + "\n" : "line " + n + "\n") + c + "\n\n" + e.message);
	throw l.name = e.name, l.cause = e, l;
}
var _e = (async () => {}).constructor;
function ve(e, t) {
	let n = this.config, r = t?.async ? _e : Function;
	try {
		return new r(n.varName, "options", this.compileToString.call(this, e, t));
	} catch (n) {
		throw n instanceof SyntaxError ? new pe("Bad template syntax\n\n" + n.message + "\n" + Array(n.message.length + 1).join("=") + "\n" + this.compileToString.call(this, e, t) + "\n") : n;
	}
}
function ye(e, t) {
	let n = this.config, r = t?.async, i = this.compileBody, a = this.parse.call(this, e), o = `${n.functionHeader}
let include = (__eta_t, __eta_d) => this.render(__eta_t, {...${n.varName}, ...(__eta_d ?? {})}, options);
let includeAsync = (__eta_t, __eta_d) => this.renderAsync(__eta_t, {...${n.varName}, ...(__eta_d ?? {})}, options);

let __eta = {res: "", e: this.config.escapeFunction, f: this.config.filterFunction, blocks: {}${n.debug ? ", line: 1, templateStr: \"" + e.replace(/\\|"/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n") + "\"" : ""}};

function layout(path, data) {
  __eta.layout = path;
  __eta.layoutData = data;
}${n.debug ? "try {" : ""}${n.useWith ? "with(" + n.varName + "||{}){" : ""}

function ${n.outputFunctionName}(s){__eta.res+=s;}
function capture(fn){const s=__eta.res;__eta.res='';try{fn();return __eta.res}finally{__eta.res=s;}}
async function captureAsync(fn){const s=__eta.res;__eta.res='';try{await fn();return __eta.res}finally{__eta.res=s;}}
function block(name,fn){if(__eta.layout){if(fn){__eta.blocks[name]=capture(fn);}return '';}const b=${n.varName}.__blocks||{};if(name in b){return b[name];}return fn?capture(fn):'';}
async function blockAsync(name,fn){if(__eta.layout){if(fn){__eta.blocks[name]=await captureAsync(fn);}return '';}const b=${n.varName}.__blocks||{};if(name in b){return b[name];}return fn?await captureAsync(fn):'';}

${i.call(this, a)}
if (__eta.layout) {
  __eta.res = ${r ? "await includeAsync" : "include"} (__eta.layout, {...${n.varName}, body: __eta.res, ...__eta.layoutData, __blocks: __eta.blocks});
}
${n.useWith ? "}" : ""}${n.debug ? "} catch (e) { this.RuntimeErr(e, __eta.templateStr, __eta.line, options.filepath) }" : ""}
return __eta.res;
`;
	if (n.plugins) for (let e = 0; e < n.plugins.length; e++) {
		let t = n.plugins[e];
		t.processFnString && (o = t.processFnString(o, n));
	}
	return o;
}
function be(e) {
	let t = this.config, n = 0, r = e.length, i = "";
	for (; n < r; n++) {
		let r = e[n];
		if (typeof r == "string") i += "__eta.res+='" + r + "';\n";
		else {
			let e = r.t, n = r.val || "";
			t.debug && (i += "__eta.line=" + r.lineNo + "\n"), e === "r" ? (t.autoFilter && (n = "__eta.f(" + n + ")"), i += "__eta.res+=" + n + ";\n") : e === "i" ? (t.autoFilter && (n = "__eta.f(" + n + ")"), t.autoEscape && (n = "__eta.e(" + n + ")"), i += "__eta.res+=" + n + ";\n") : e === "e" ? i += n + "\n" : Object.hasOwn(t.customTags, e) && (i += `__eta.res+=this.config.customTags[${JSON.stringify(e)}](${JSON.stringify(n)},${t.varName});\n`);
		}
	}
	return i;
}
function xe(e, t, n, r) {
	let i, a;
	return Array.isArray(t.autoTrim) ? (i = t.autoTrim[1], a = t.autoTrim[0]) : i = a = t.autoTrim, (n || n === !1) && (i = n), (r || r === !1) && (a = r), !a && !i ? e : i === "slurp" && a === "slurp" ? e.trim() : (i === "_" || i === "slurp" ? e = e.trimStart() : (i === "-" || i === "nl") && (e = e.replace(/^(?:\r\n|\n|\r)/, "")), a === "_" || a === "slurp" ? e = e.trimEnd() : (a === "-" || a === "nl") && (e = e.replace(/(?:\r\n|\n|\r)$/, "")), e);
}
var Se = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function Ce(e) {
	return Se[e];
}
function we(e) {
	let t = String(e);
	return /[&<>"']/.test(t) ? t.replace(/[&<>"']/g, Ce) : t;
}
var Te = {
	autoEscape: !0,
	autoFilter: !1,
	autoTrim: [!1, "nl"],
	cache: !1,
	cacheFilepaths: !0,
	customTags: {},
	debug: !1,
	escapeFunction: we,
	filterFunction: (e) => String(e),
	outputFunctionName: "output",
	functionHeader: "",
	parse: {
		exec: "",
		interpolate: "=",
		raw: "~"
	},
	plugins: [],
	rmWhitespace: !1,
	tags: ["<%", "%>"],
	useWith: !1,
	varName: "it",
	defaultExtension: ".eta"
}, Ee = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g, De = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g, Oe = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
function ke(e) {
	return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
}
function Ae(e, t) {
	return e.slice(0, t).split("\n").length;
}
function je(e) {
	let t = this.config, n = [], r = !1, i = 0, a = t.parse, o = Object.keys(t.customTags);
	if (t.plugins) for (let n = 0; n < t.plugins.length; n++) {
		let r = t.plugins[n];
		r.processTemplate && (e = r.processTemplate(e, t));
	}
	t.rmWhitespace && (e = e.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "")), Ee.lastIndex = 0, De.lastIndex = 0, Oe.lastIndex = 0;
	function s(e, i) {
		e && (e = xe(e, t, r, i), e && (e = e.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n"), n.push(e)));
	}
	let c = [
		a.exec,
		a.interpolate,
		a.raw,
		...o
	].reduce((e, t) => e && t ? e + "|" + ke(t) : t ? ke(t) : e, ""), l = RegExp(ke(t.tags[0]) + "(-|_)?\\s*(" + c + ")?\\s*", "g"), u = RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + ke(t.tags[1]) + ")", "g"), d;
	for (; d = l.exec(e);) {
		let c = e.slice(i, d.index);
		i = d[0].length + d.index;
		let f = d[1], p = d[2] || "";
		s(c, f), u.lastIndex = i;
		let m, h = !1;
		for (; m = u.exec(e);) if (m[1]) {
			let t = e.slice(i, m.index);
			l.lastIndex = i = u.lastIndex, r = m[2], h = {
				t: p === a.exec ? "e" : p === a.raw ? "r" : p === a.interpolate ? "i" : o.includes(p) ? p : "",
				val: t
			};
			break;
		} else {
			let t = m[0];
			if (t === "/*") {
				let t = e.indexOf("*/", u.lastIndex);
				t === -1 && Q("unclosed comment", e, m.index), u.lastIndex = t;
			} else t === "'" ? (De.lastIndex = m.index, De.exec(e) ? u.lastIndex = De.lastIndex : Q("unclosed string", e, m.index)) : t === "\"" ? (Oe.lastIndex = m.index, Oe.exec(e) ? u.lastIndex = Oe.lastIndex : Q("unclosed string", e, m.index)) : t === "`" && (Ee.lastIndex = m.index, Ee.exec(e) ? u.lastIndex = Ee.lastIndex : Q("unclosed string", e, m.index));
		}
		h ? (t.debug && (h.lineNo = Ae(e, d.index)), n.push(h)) : Q("unclosed tag", e, d.index);
	}
	if (s(e.slice(i, e.length), !1), t.plugins) for (let e = 0; e < t.plugins.length; e++) {
		let r = t.plugins[e];
		r.processAST && (n = r.processAST(n, t));
	}
	return n;
}
function Me(e, t) {
	let n = t?.async ? this.templatesAsync : this.templatesSync;
	if (this.resolvePath && this.readFile && !e.startsWith("@")) {
		let e = t.filepath, r = n.get(e);
		if (this.config.cache && r) return r;
		{
			let r = this.readFile(e), i = this.compile(r, t);
			return this.config.cache && n.define(e, i), i;
		}
	}
	{
		let t = n.get(e);
		if (t) return t;
		throw new he(`Failed to get template '${e}'`);
	}
}
function Ne(e, t, n) {
	let r, i = {
		...n,
		async: !1
	};
	return typeof e == "string" ? (this.resolvePath && this.readFile && !e.startsWith("@") && (i.filepath = this.resolvePath(e, i)), r = Me.call(this, e, i)) : r = e, r.call(this, t, i);
}
function Pe(e, t, n) {
	let r, i = {
		...n,
		async: !0
	};
	typeof e == "string" ? (this.resolvePath && this.readFile && !e.startsWith("@") && (i.filepath = this.resolvePath(e, i)), r = Me.call(this, e, i)) : r = e;
	let a = r.call(this, t, i);
	return Promise.resolve(a);
}
function Fe(e, t) {
	let n = this.compile(e, { async: !1 });
	return Ne.call(this, n, t);
}
function Ie(e, t) {
	let n = this.compile(e, { async: !0 });
	return Pe.call(this, n, t);
}
var Le = class {
	constructor(e) {
		this.cache = e;
	}
	define(e, t) {
		this.cache[e] = t;
	}
	get(e) {
		return this.cache[e];
	}
	remove(e) {
		delete this.cache[e];
	}
	reset() {
		this.cache = {};
	}
	load(e) {
		this.cache = {
			...this.cache,
			...e
		};
	}
}, Re = class {
	constructor(e) {
		this.config = e ? {
			...Te,
			...e
		} : { ...Te };
		let t = [
			this.config.parse.exec,
			this.config.parse.interpolate,
			this.config.parse.raw,
			"-",
			"_"
		];
		for (let e of Object.keys(this.config.customTags)) if (t.includes(e)) throw new fe(`Custom tag prefix "${e}" conflicts with a built-in prefix`);
	}
	config;
	RuntimeErr = ge;
	compile = ve;
	compileToString = ye;
	compileBody = be;
	parse = je;
	render = Ne;
	renderAsync = Pe;
	renderString = Fe;
	renderStringAsync = Ie;
	filepathCache = {};
	templatesSync = new Le({});
	templatesAsync = new Le({});
	resolvePath = null;
	readFile = null;
	configure(e) {
		this.config = {
			...this.config,
			...e
		};
	}
	withConfig(e) {
		return {
			...this,
			config: {
				...this.config,
				...e
			}
		};
	}
	loadTemplate(e, t, n) {
		if (typeof t == "string") (n?.async ? this.templatesAsync : this.templatesSync).define(e, this.compile(t, n));
		else {
			let r = this.templatesSync;
			(t.constructor.name === "AsyncFunction" || n?.async) && (r = this.templatesAsync), r.define(e, t);
		}
	}
}, ze = new class extends Re {}({ autoTrim: !1 });
function $(e, t) {
	return ze.renderString(e, t);
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/groovy/build.gradle.eta?raw
var Be = "<% if (it.kotlin) { -%>\nimport org.jetbrains.kotlin.gradle.dsl.JvmTarget\n\n<% } -%>\nplugins {\n<% const loomSuffix = it.unobfuscated ? '' : '-remap'; -%>\n	id 'net.fabricmc.fabric-loom<%= loomSuffix %>' version \"${loom_version}\"\n	id 'maven-publish'\n<% if (it.kotlin) { -%>\n	id \"org.jetbrains.kotlin.jvm\" version \"<%= it.kotlin.kotlinVersion %>\"\n<% } -%>\n}\n\nrepositories {\n	// Add repositories to retrieve artifacts from in here.\n	// You should only use this when depending on other mods because\n	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.\n	// See https://docs.gradle.org/current/userguide/declaring_repositories.html\n	// for more information about repositories.\n}\n\n<% if (it.splitSources) { -%>\nloom {\n	splitEnvironmentSourceSets()\n\n	mods {\n		\"<%= it.modid %>\" {\n			sourceSet sourceSets.main\n			sourceSet sourceSets.client\n		}\n	}\n}\n\n<% } -%>\n<% if (it.dataGeneration) { -%>\nfabricApi {\n	configureDataGeneration {\n		client = true\n		modId = \"<%= it.modid %>\"\n	}\n}\n\n<% } -%>\ndependencies {\n<% const implementation = it.unobfuscated ? 'implementation' : 'modImplementation' -%>\n	// To change the versions see the gradle.properties file\n	minecraft \"com.mojang:minecraft:${project.minecraft_version}\"\n<% if (!it.unobfuscated) { -%>\n	mappings <% if (it.mojmap) { %>loom.officialMojangMappings()<% } else { %>\"net.fabricmc:yarn:${project.yarn_mappings}:v2\"<% } %>\n<% } -%>\n	<%= implementation %> \"net.fabricmc:fabric-loader:${project.loader_version}\"\n\n	// Fabric API. This is technically optional, but you probably want it anyway.\n	<%= implementation %> \"net.fabricmc.fabric-api:fabric-api:${project.fabric_api_version}\"\n<% if (it.kotlin) { -%>\n    <%= implementation %> \"net.fabricmc:fabric-language-kotlin:${project.fabric_kotlin_version}\"\n<% } -%>\n}\n\nprocessResources {\n	def version = project.version\n	inputs.property \"version\", version\n\n	filesMatching(\"fabric.mod.json\") {\n		expand \"version\": version\n	}\n}\n\ntasks.withType(JavaCompile).configureEach {\n	it.options.release = <%= it.java.release %>\n}\n\n<% if (it.kotlin) { -%>\nkotlin {\n	compilerOptions {\n		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>\n	}\n}\n\n<% } -%>\njava {\n	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the \"build\" task\n	// if it is present.\n	// If you remove this line, sources will not be generated.\n	withSourcesJar()\n\n	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n}\n\njar {\n	def projectName = project.name\n	inputs.property \"projectName\", projectName\n\n	from(\"LICENSE\") {\n		rename { \"${it}_$projectName\"}\n	}\n}\n\n// configure the maven publication\npublishing {\n	publications {\n		create(\"mavenJava\", MavenPublication) {\n			from components.java\n		}\n	}\n\n	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.\n	repositories {\n		// Add repositories to publish to here.\n		// Notice: This block does NOT have the same function as the block in the top level.\n		// The repositories here will be used for publishing your artifact, not for\n		// retrieving dependencies.\n	}\n}\n", Ve = "pluginManagement {\n	repositories {\n		maven {\n			name = 'Fabric'\n			url = 'https://maven.fabricmc.net/'\n		}\n		mavenCentral()\n		gradlePluginPortal()\n	}\n}\n\n// Should match your modid\nrootProject.name = '<%= it.modid %>'\n", He = {
	compatibility: "1_8",
	mixin: "JAVA_8",
	release: 8
}, Ue = {
	compatibility: "16",
	mixin: "JAVA_16",
	release: 16
}, We = {
	compatibility: "17",
	mixin: "JAVA_17",
	release: 17
}, Ge = {
	compatibility: "21",
	mixin: "JAVA_21",
	release: 21
}, Ke = {
	compatibility: "25",
	mixin: "JAVA_25",
	release: 25
};
function qe(e) {
	let t = W(e), n = K(e);
	return t >= 26 ? Ke : n <= 16 ? He : n == 17 ? Ue : n <= 19 || n == 20 && H(e) <= 4 ? We : Ge;
}
var Je = /^[a-z_][a-z0-9_]*(\.[a-z_][a-z0-9_]*)*$/, Ye = "abstract continue for new switch assert default goto package synchronized\n	boolean do if private this break double implements protected throw byte else\n	import public throws case enum instanceof return transient catch extends int\n	short try char final interface static void class finally long strictfp\n	volatile const float native super while _ true false null".split(/\s+/), Xe = [
	"net.minecraft.",
	"com.mojang.",
	"net.fabricmc.",
	"java."
];
function Ze(e) {
	let t = [];
	Je.test(e.toLowerCase()) || t.push("Package name is not a valid Java package name!");
	let n = e.split(".").filter((e) => Ye.includes(e));
	n.length != 0 && t.push(`Package name contains illegal component: '${n[0]}'`);
	for (let n of Xe) e.toLowerCase().startsWith(n) ? t.push(`Package name starts with '${n}', which is reserved!`) : e.toLowerCase() + "." == n && t.push(`Package name is '${n}', which is reserved!`);
	return t;
}
var Qe = [
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
function $e(e) {
	let t = e.match(/^\d+/);
	if (!(t && t[0])) return [e];
	let n = t[0], r = e.substring(n.length);
	return [...n.split("").map((e) => Qe[parseInt(e)]), r];
}
function et(e) {
	return e.filter(Boolean).map((e) => e[0].toUpperCase() + e.slice(1)).join("");
}
function tt(e) {
	return et($e(et(e.split(/\b/).map((e) => e.replaceAll(/\W/g, "")))));
}
function nt(e) {
	return e.toLowerCase().replaceAll(/[\s/]+/g, ".").replaceAll(/[^a-z0-9_\.]/g, "");
}
//#endregion
//#region scripts/src/lib/template/gradlegroovy.ts
async function rt(e, t) {
	await e.write("build.gradle", $(Be, {
		...t,
		java: qe(t.minecraftVersion)
	})), await e.write("settings.gradle", $(Ve, t));
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/kotlin/build.gradle.kts.eta?raw
var it = "<% if (it.kotlin) { -%>\nimport org.jetbrains.kotlin.gradle.dsl.JvmTarget\n\n<% } -%>\nplugins {\n<% const pluginSuffix = it.unobfuscated ? '' : '-remap' -%>\n	id(\"net.fabricmc.fabric-loom<%= pluginSuffix %>\")\n	`maven-publish`\n<% if (it.kotlin) { -%>\n	id(\"org.jetbrains.kotlin.jvm\") version \"<%= it.kotlin.kotlinVersion %>\"\n<% } -%>\n}\n\nrepositories {\n	// Add repositories to retrieve artifacts from in here.\n	// You should only use this when depending on other mods because\n	// Loom adds the essential maven repositories to download Minecraft and libraries from automatically.\n	// See https://docs.gradle.org/current/userguide/declaring_repositories.html\n	// for more information about repositories.\n}\n\n<% if (it.splitSources) { -%>\nloom {\n	splitEnvironmentSourceSets()\n\n	mods {\n		register(\"<%= it.modid %>\") {\n			sourceSet(sourceSets.main.get())\n			sourceSet(sourceSets.getByName(\"client\"))\n		}\n	}\n}\n\n<% } -%>\n<% if (it.dataGeneration) { -%>\nfabricApi {\n	configureDataGeneration {\n		client = true\n		modId = \"<%= it.modid %>\"\n	}\n}\n\n<% } -%>\ndependencies {\n<% const implementation = it.unobfuscated ? 'implementation' : 'modImplementation' -%>\n	// To change the versions see the gradle.properties file\n	minecraft(\"com.mojang:minecraft:${providers.gradleProperty(\"minecraft_version\").get()}\")\n<% if (!it.unobfuscated) { -%>\n    mappings(<% if(it.mojmap) { %>loom.officialMojangMappings()<% } else { %>\"net.fabricmc:yarn:${providers.gradleProperty(\"yarn_mappings\").get()}:v2\"<% } %>)\n<% } -%>\n	<%= implementation %>(\"net.fabricmc:fabric-loader:${providers.gradleProperty(\"loader_version\").get()}\")\n\n	// Fabric API. This is technically optional, but you probably want it anyway.\n	<%= implementation %>(\"net.fabricmc.fabric-api:fabric-api:${providers.gradleProperty(\"fabric_api_version\").get()}\")\n<% if (it.kotlin) { -%>\n    <%= implementation %>(\"net.fabricmc:fabric-language-kotlin:${providers.gradleProperty(\"fabric_kotlin_version\").get()}\")\n<% } -%>\n}\n\ntasks.processResources {\n	val version = version\n	inputs.property(\"version\", version)\n\n	filesMatching(\"fabric.mod.json\") {\n		expand(\"version\" to version)\n	}\n}\n\ntasks.withType<JavaCompile>().configureEach {\n	options.release = <%= it.java.release %>\n}\n\n<% if (it.kotlin) { -%>\nkotlin {\n	compilerOptions {\n		jvmTarget = JvmTarget.JVM_<%= it.java.compatibility %>\n	}\n}\n\n<% } -%>\njava {\n	// Loom will automatically attach sourcesJar to a RemapSourcesJar task and to the \"build\" task\n	// if it is present.\n	// If you remove this line, sources will not be generated.\n	withSourcesJar()\n\n	sourceCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n	targetCompatibility = JavaVersion.VERSION_<%= it.java.compatibility %>\n}\n\ntasks.jar {\n	val projectName = project.name\n	inputs.property(\"projectName\", projectName)\n\n	from(\"LICENSE\") {\n		rename { \"${it}_$projectName\" }\n	}\n}\n\n// configure the maven publication\npublishing {\n	publications {\n		register<MavenPublication>(\"mavenJava\") {\n			from(components[\"java\"])\n		}\n	}\n\n	// See https://docs.gradle.org/current/userguide/publishing_maven.html for information on how to set up publishing.\n	repositories {\n		// Add repositories to publish to here.\n		// Notice: This block does NOT have the same function as the block in the top level.\n		// The repositories here will be used for publishing your artifact, not for\n		// retrieving dependencies.\n	}\n}\n", at = "pluginManagement {\n	repositories {\n		maven {\n			name = \"Fabric\"\n			url = uri(\"https://maven.fabricmc.net/\")\n		}\n		mavenCentral()\n		gradlePluginPortal()\n	}\n\n	plugins {\n<% const pluginSuffix = it.unobfuscated ? '' : '-remap' -%>\n		id(\"net.fabricmc.fabric-loom<%= pluginSuffix %>\") version providers.gradleProperty(\"loom_version\")\n	}\n}\n\n// Should match your modid\nrootProject.name = \"<%= it.modid %>\"\n";
//#endregion
//#region scripts/src/lib/template/gradlekotlin.ts
async function ot(e, t) {
	await e.write("build.gradle.kts", $(it, {
		...t,
		java: qe(t.minecraftVersion)
	})), await e.write("settings.gradle.kts", $(at, t));
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/gradle.properties.eta?raw
var st = "# Done to increase the memory available to gradle.\norg.gradle.jvmargs=-Xmx1G\norg.gradle.parallel=true\norg.gradle.configuration-cache=true\n\n# Fabric Properties\n# check these on https://fabricmc.net/develop\nminecraft_version=<%= it.minecraftVersion %>\n<% if (!it.mojmap && !it.unobfuscated) { -%>\nyarn_mappings=<%= it.yarnVersion %>\n<% } -%>\nloader_version=<%= it.loaderVersion %>\nloom_version=1.18-SNAPSHOT\n<% if (it.kotlin) { -%>\nfabric_kotlin_version=<%= it.kotlin.fabricKotlinAdapterVersion %>\n<% } -%>\n\n# Mod Properties\nversion=1.0.0\ngroup=<%= it.packageName %>\n\n# Dependencies\nfabric_api_version=<%= it.fabricVersion %>\n";
//#endregion
//#region scripts/src/lib/template/gradle.ts
async function ct(e, t) {
	await e.write("gradle.properties", $(st, t)), t.gradleKotlin ? await ot(e, t) : await rt(e, t);
}
//#endregion
//#region scripts/src/lib/template/utils.ts
function lt(e) {
	for (var t = globalThis.atob(e), n = t.length, r = new Uint8Array(n), i = 0; i < n; i++) r[i] = t.charCodeAt(i);
	return r.buffer;
}
//#endregion
//#region scripts/src/lib/template/templates/gradle/wrapper/gradlew?raw
var ut = "#!/bin/sh\n\n#\n# Copyright © 2015 the original authors.\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#      https://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n# SPDX-License-Identifier: Apache-2.0\n#\n\n##############################################################################\n#\n#   gradlew start up script for POSIX generated by Gradle.\n#\n#   Important for running:\n#\n#   (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is\n#       noncompliant, but you have some other compliant shell such as ksh or\n#       bash, then to run this script, type that shell name before the whole\n#       command line, like:\n#\n#           ksh gradlew\n#\n#       Busybox and similar reduced shells will NOT work, because this script\n#       requires all of these POSIX shell features:\n#         * functions;\n#         * expansions «$var», «${var}», «${var:-default}», «${var+SET}»,\n#           «${var#prefix}», «${var%suffix}», and «$( cmd )»;\n#         * compound commands having a testable exit status, especially «case»;\n#         * various built-in commands including «command», «set», and «ulimit».\n#\n#   Important for patching:\n#\n#   (2) This script targets any POSIX shell, so it avoids extensions provided\n#       by Bash, Ksh, etc; in particular arrays are avoided.\n#\n#       The \"traditional\" practice of packing multiple parameters into a\n#       space-separated string is a well documented source of bugs and security\n#       problems, so this is (mostly) avoided, by progressively accumulating\n#       options in \"$@\", and eventually passing that to Java.\n#\n#       Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,\n#       and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;\n#       see the in-line comments for details.\n#\n#       There are tweaks for specific operating systems such as AIX, CygWin,\n#       Darwin, MinGW, and NonStop.\n#\n#   (3) This script is generated from the Groovy template\n#       https://github.com/gradle/gradle/blob/3d91ce3b8caaf77ad09f381f43615b715b53f72c/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt\n#       within the Gradle project.\n#\n#       You can find Gradle at https://github.com/gradle/gradle/.\n#\n##############################################################################\n\n# Attempt to set APP_HOME\n\n# Resolve links: $0 may be a link\napp_path=$0\n\n# Need this for daisy-chained symlinks.\nwhile\n    APP_HOME=${app_path%\"${app_path##*/}\"}  # leaves a trailing /; empty if no leading path\n    [ -h \"$app_path\" ]\ndo\n    ls=$( ls -ld \"$app_path\" )\n    link=${ls#*' -> '}\n    case $link in             #(\n      /*)   app_path=$link ;; #(\n      *)    app_path=$APP_HOME$link ;;\n    esac\ndone\n\n# This is normally unused\n# shellcheck disable=SC2034\nAPP_BASE_NAME=${0##*/}\n# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)\nAPP_HOME=$( cd -P \"${APP_HOME:-./}\" > /dev/null && printf '%s\\n' \"$PWD\" ) || exit\n\n# Use the maximum available, or set MAX_FD != -1 to use that value.\nMAX_FD=maximum\n\nwarn () {\n    echo \"$*\"\n} >&2\n\ndie () {\n    echo\n    echo \"$*\"\n    echo\n    exit 1\n} >&2\n\n# OS specific support (must be 'true' or 'false').\ncygwin=false\nmsys=false\ndarwin=false\nnonstop=false\ncase \"$( uname )\" in                #(\n  CYGWIN* )         cygwin=true  ;; #(\n  Darwin* )         darwin=true  ;; #(\n  MSYS* | MINGW* )  msys=true    ;; #(\n  NONSTOP* )        nonstop=true ;;\nesac\n\n\n\n# Determine the Java command to use to start the JVM.\nif [ -n \"$JAVA_HOME\" ] ; then\n    if [ -x \"$JAVA_HOME/jre/sh/java\" ] ; then\n        # IBM's JDK on AIX uses strange locations for the executables\n        JAVACMD=$JAVA_HOME/jre/sh/java\n    else\n        JAVACMD=$JAVA_HOME/bin/java\n    fi\n    if [ ! -x \"$JAVACMD\" ] ; then\n        die \"ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME\n\nPlease set the JAVA_HOME variable in your environment to match the\nlocation of your Java installation.\"\n    fi\nelse\n    JAVACMD=java\n    if ! command -v java >/dev/null 2>&1\n    then\n        die \"ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.\n\nPlease set the JAVA_HOME variable in your environment to match the\nlocation of your Java installation.\"\n    fi\nfi\n\n# Increase the maximum file descriptors if we can.\nif ! \"$cygwin\" && ! \"$darwin\" && ! \"$nonstop\" ; then\n    case $MAX_FD in #(\n      max*)\n        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.\n        # shellcheck disable=SC2039,SC3045\n        MAX_FD=$( ulimit -H -n ) ||\n            warn \"Could not query maximum file descriptor limit\"\n    esac\n    case $MAX_FD in  #(\n      '' | soft) :;; #(\n      *)\n        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.\n        # shellcheck disable=SC2039,SC3045\n        ulimit -n \"$MAX_FD\" ||\n            warn \"Could not set maximum file descriptor limit to $MAX_FD\"\n    esac\nfi\n\n# Collect all arguments for the java command, stacking in reverse order:\n#   * args from the command line\n#   * the main class name\n#   * -classpath\n#   * -D...appname settings\n#   * --module-path (only if needed)\n#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.\n\n# For Cygwin or MSYS, switch paths to Windows format before running java\nif \"$cygwin\" || \"$msys\" ; then\n    APP_HOME=$( cygpath --path --mixed \"$APP_HOME\" )\n\n    JAVACMD=$( cygpath --unix \"$JAVACMD\" )\n\n    # Now convert the arguments - kludge to limit ourselves to /bin/sh\n    for arg do\n        if\n            case $arg in                                #(\n              -*)   false ;;                            # don't mess with options #(\n              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath\n                    [ -e \"$t\" ] ;;                      #(\n              *)    false ;;\n            esac\n        then\n            arg=$( cygpath --path --ignore --mixed \"$arg\" )\n        fi\n        # Roll the args list around exactly as many times as the number of\n        # args, so each arg winds up back in the position where it started, but\n        # possibly modified.\n        #\n        # NB: a `for` loop captures its iteration list before it begins, so\n        # changing the positional parameters here affects neither the number of\n        # iterations, nor the values presented in `arg`.\n        shift                   # remove old arg\n        set -- \"$@\" \"$arg\"      # push replacement arg\n    done\nfi\n\n\n# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.\nDEFAULT_JVM_OPTS='\"-Xmx64m\" \"-Xms64m\"'\n\n# Collect all arguments for the java command:\n#   * DEFAULT_JVM_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,\n#     and any embedded shellness will be escaped.\n#   * For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be\n#     treated as '${Hostname}' itself on the command line.\n\nset -- \\\n        \"-Dorg.gradle.appname=$APP_BASE_NAME\" \\\n        -jar \"$APP_HOME/gradle/wrapper/gradle-wrapper.jar\" \\\n        \"$@\"\n\n# Stop when \"xargs\" is not available.\nif ! command -v xargs >/dev/null 2>&1\nthen\n    die \"xargs is not available\"\nfi\n\n# Use \"xargs\" to parse quoted args.\n#\n# With -n1 it outputs one arg per line, with the quotes and backslashes removed.\n#\n# In Bash we could simply go:\n#\n#   readarray ARGS < <( xargs -n1 <<<\"$var\" ) &&\n#   set -- \"${ARGS[@]}\" \"$@\"\n#\n# but POSIX shell has neither arrays nor command substitution, so instead we\n# post-process each arg (as a line of input to sed) to backslash-escape any\n# character that might be a shell metacharacter, then use eval to reverse\n# that process (while maintaining the separation between arguments), and wrap\n# the whole thing up as a single \"set\" statement.\n#\n# This will of course break if any of these variables contains a newline or\n# an unmatched quote.\n#\n\neval \"set -- $(\n        printf '%s\\n' \"$DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS\" |\n        xargs -n1 |\n        sed ' s~[^-[:alnum:]+,./:=@_]~\\\\&~g; ' |\n        tr '\\n' ' '\n    )\" '\"$@\"'\n\nexec \"$JAVACMD\" \"$@\"\n", dt = "@rem\r\n@rem Copyright 2015 the original author or authors.\r\n@rem\r\n@rem Licensed under the Apache License, Version 2.0 (the \"License\");\r\n@rem you may not use this file except in compliance with the License.\r\n@rem You may obtain a copy of the License at\r\n@rem\r\n@rem      https://www.apache.org/licenses/LICENSE-2.0\r\n@rem\r\n@rem Unless required by applicable law or agreed to in writing, software\r\n@rem distributed under the License is distributed on an \"AS IS\" BASIS,\r\n@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n@rem See the License for the specific language governing permissions and\r\n@rem limitations under the License.\r\n@rem\r\n@rem SPDX-License-Identifier: Apache-2.0\r\n@rem\r\n\r\n@if \"%DEBUG%\"==\"\" @echo off\r\n@rem ##########################################################################\r\n@rem\r\n@rem  gradlew startup script for Windows\r\n@rem\r\n@rem ##########################################################################\r\n\r\n@rem Set local scope for the variables, and ensure extensions are enabled\r\nsetlocal EnableExtensions\r\n\r\nset DIRNAME=%~dp0\r\nif \"%DIRNAME%\"==\"\" set DIRNAME=.\r\n@rem This is normally unused\r\nset APP_BASE_NAME=%~n0\r\nset APP_HOME=%DIRNAME%\r\n\r\n@rem Resolve any \".\" and \"..\" in APP_HOME to make it shorter.\r\nfor %%i in (\"%APP_HOME%\") do set APP_HOME=%%~fi\r\n\r\n@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.\r\nset DEFAULT_JVM_OPTS=\"-Xmx64m\" \"-Xms64m\"\r\n\r\n@rem Find java.exe\r\nif defined JAVA_HOME goto findJavaFromJavaHome\r\n\r\nset JAVA_EXE=java.exe\r\n%JAVA_EXE% -version >NUL 2>&1\r\nif %ERRORLEVEL% equ 0 goto execute\r\n\r\necho. 1>&2\r\necho ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2\r\necho. 1>&2\r\necho Please set the JAVA_HOME variable in your environment to match the 1>&2\r\necho location of your Java installation. 1>&2\r\n\r\n\"%COMSPEC%\" /c exit 1\r\n\r\n:findJavaFromJavaHome\r\nset JAVA_HOME=%JAVA_HOME:\"=%\r\nset JAVA_EXE=%JAVA_HOME%/bin/java.exe\r\n\r\nif exist \"%JAVA_EXE%\" goto execute\r\n\r\necho. 1>&2\r\necho ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2\r\necho. 1>&2\r\necho Please set the JAVA_HOME variable in your environment to match the 1>&2\r\necho location of your Java installation. 1>&2\r\n\r\n\"%COMSPEC%\" /c exit 1\r\n\r\n:execute\r\n@rem Setup the command line\r\n\r\n\r\n\r\n@rem Execute gradlew\r\n@rem endlocal doesn't take effect until after the line is parsed and variables are expanded\r\n@rem which allows us to clear the local environment before executing the java command\r\nendlocal & \"%JAVA_EXE%\" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% \"-Dorg.gradle.appname=%APP_BASE_NAME%\" -jar \"%APP_HOME%\\gradle\\wrapper\\gradle-wrapper.jar\" %* & call :exitWithErrorLevel\r\n\r\n:exitWithErrorLevel\r\n@rem Use \"%COMSPEC%\" /c exit to allow operators to work properly in scripts\r\n\"%COMSPEC%\" /c exit %ERRORLEVEL%\r\n", ft = "distributionBase=GRADLE_USER_HOME\ndistributionPath=wrapper/dists\ndistributionUrl=https\\://services.gradle.org/distributions/gradle-9.7.1-bin.zip\nnetworkTimeout=10000\nretries=0\nretryBackOffMs=500\nvalidateDistributionUrl=true\nzipStoreBase=GRADLE_USER_HOME\nzipStorePath=wrapper/dists\n", pt = "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AAYnAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25QYXJzZXJTdGF0ZS5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQDXZAGWGAIAAFkDAAAzAAkAAAAAAAAAAAAAAOwoAABvcmcvZ3JhZGxlL2NsaS9Db21tYW5kTGluZVBhcnNlciRPcHRpb25TdHJpbmcuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAlPuVyYEBAACKAgAAMgAJAAAAAAAAAAAAAABuKwAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkUGFyc2VyU3RhdGUuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAXRRUYmcCAAC4BAAAPwAJAAAAAAAAAAAAAABYLQAAb3JnL2dyYWRsZS9jbGkvQ29tbWFuZExpbmVQYXJzZXIkVW5rbm93bk9wdGlvblBhcnNlclN0YXRlLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFouHi0LBQAADAkAACYACQAAAAAAAAAAAAAANTAAAG9yZy9ncmFkbGUvY2xpL0NvbW1hbmRMaW5lUGFyc2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhALn6+5bqBAAAWQkAACYACQAAAAAAAAAAAAAAnTUAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAA7pJ0FDAQAAkwEAACwACQAAAAAAAAAAAAAA5DoAAG9yZy9ncmFkbGUvY2xpL1BhcnNlZENvbW1hbmRMaW5lT3B0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAAtbYOsMBQAANggAADMACQAAAAAAAAAAAAAAijwAAG9yZy9ncmFkbGUvaW50ZXJuYWwvZmlsZS9QYXRoVHJhdmVyc2FsQ2hlY2tlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBYAqd5nwEAACsCAABBAAkAAAAAAAAAAAAAAABCAABvcmcvZ3JhZGxlL2ludGVybmFsL2ZpbGUvbG9ja2luZy9FeGNsdXNpdmVGaWxlQWNjZXNzTWFuYWdlci5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBm8NV8HQYAAHMLAAAxAAkAAAAAAAAAAAAAABdEAABvcmcvZ3JhZGxlL3V0aWwvaW50ZXJuYWwvV3JhcHBlckNyZWRlbnRpYWxzLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhADJF+4p/AQAABQIAAC8ACQAAAAAAAAAAAAAAnEoAAG9yZy9ncmFkbGUvd3JhcHBlci9Cb290c3RyYXBNYWluU3RhcnRlciQxLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAFypJv4/AwAABQUAAEEACQAAAAAAAAAAAAAAgUwAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCREZWZhdWx0RG93bmxvYWRQcm9ncmVzc0xpc3RlbmVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAIrrMYMIAwAASgUAADQACQAAAAAAAAAAAAAAOFAAAG9yZy9ncmFkbGUvd3JhcHBlci9Eb3dubG9hZCRQcm94eUF1dGhlbnRpY2F0b3IuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEAflcy8OEOAACvHAAAIQAJAAAAAAAAAAAAAACrUwAAb3JnL2dyYWRsZS93cmFwcGVyL0Rvd25sb2FkLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAB7ss4XIAQAAmQIAAC0ACQAAAAAAAAAAAAAA5GIAAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVVc2VySG9tZUxvb2t1cC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQB14HY56AAAABMBAAAxAAkAAAAAAAAAAAAAABBlAABvcmcvZ3JhZGxlL3dyYXBwZXIvR3JhZGxlV3JhcHBlck1haW4kQWN0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAHaJ5/mQEgAA+CYAACoACQAAAAAAAAAAAAAAYGYAAG9yZy9ncmFkbGUvd3JhcHBlci9HcmFkbGVXcmFwcGVyTWFpbi5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBmw/m9zQAAAOwAAAAiAAkAAAAAAAAAAAAAAFF5AABvcmcvZ3JhZGxlL3dyYXBwZXIvSURvd25sb2FkLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAMIuXHhaAQAAzgEAAC0ACQAAAAAAAAAAAAAAd3oAAG9yZy9ncmFkbGUvd3JhcHBlci9JbnN0YWxsJEluc3RhbGxDaGVjay5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQAi0v4B9BwAAAM5AAAgAAkAAAAAAAAAAAAAADV8AABvcmcvZ3JhZGxlL3dyYXBwZXIvSW5zdGFsbC5jbGFzc1VUBQABAAAAAFBLAQIUABQACAgIAAAAIQBcWmQFTAIAAEEEAAAfAAkAAAAAAAAAAAAAAICZAABvcmcvZ3JhZGxlL3dyYXBwZXIvTG9nZ2VyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAAGn5EtQAQAAtAEAACYACQAAAAAAAAAAAAAAIpwAAG9yZy9ncmFkbGUvd3JhcHBlci9QYXRoQXNzZW1ibGVyLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhAPz7OpE2BAAAgAcAAC4ACQAAAAAAAAAAAAAAz50AAG9yZy9ncmFkbGUvd3JhcHBlci9Qcm9wZXJ0aWVzRmlsZUhhbmRsZXIuY2xhc3NVVAUAAQAAAABQSwECFAAUAAgICAAAACEA1hi7LhICAAABAwAALQAJAAAAAAAAAAAAAABqogAAb3JnL2dyYWRsZS93cmFwcGVyL1dyYXBwZXJDb25maWd1cmF0aW9uLmNsYXNzVVQFAAEAAAAAUEsBAhQAFAAICAgAAAAhACNhnEDRBgAA/AsAACgACQAAAAAAAAAAAAAA4KQAAG9yZy9ncmFkbGUvd3JhcHBlci9XcmFwcGVyRXhlY3V0b3IuY2xhc3NVVAUAAQAAAABQSwUGAAAAACIAIgBrDQAAEKwAAAAA", mt = "# gradle\n\n.gradle/\nbuild/\nout/\nclasses/\n\n# eclipse\n\n*.launch\n\n# idea\n\n.idea/\n*.iml\n*.ipr\n*.iws\n\n# vscode\n\n.settings/\n.vscode/\nbin/\n.classpath\n.project\n\n# macos\n\n*.DS_Store\n\n# fabric\n\nrun/\n\n# java\n\nhs_err_*.log\nreplay_*.log\n*.hprof\n*.jfr\n", ht = "# Automatically build the project and run any configured tests for every push\n# and submitted pull request. This can help catch issues that only occur on\n# certain platforms or Java versions, and provides a first line of defence\n# against bad commits.\n\nname: build\non: [pull_request, push]\n\njobs:\n  build:\n    runs-on: ubuntu-24.04\n    steps:\n      - name: checkout repository\n        uses: actions/checkout@v6\n      - name: validate gradle wrapper\n        uses: gradle/actions/wrapper-validation@v6\n      - name: setup jdk\n        uses: actions/setup-java@v5\n        with:\n          java-version: '25'\n          distribution: 'microsoft'\n      - name: make gradle wrapper executable\n        run: chmod +x ./gradlew\n      - name: build\n        run: ./gradlew build\n      - name: capture build artifacts\n        uses: actions/upload-artifact@v7\n        with:\n          name: Artifacts\n          path: build/libs/\n";
//#endregion
//#region scripts/src/lib/template/gradlewrapper.ts
async function gt({ writer: e }) {
	await e.write("gradlew", ut, { executable: !0 }), await e.write("gradlew.bat", dt), await e.write("gradle/wrapper/gradle-wrapper.properties", ft), await e.write("gradle/wrapper/gradle-wrapper.jar", lt(pt)), await e.write(".gitignore", mt), await e.write(".github/workflows/build.yml", ht);
}
//#endregion
//#region scripts/src/lib/template/templates/mixin/Mixin.java.eta?raw
var _t = "package <%= it.packageName %>;\n\nimport <%= it.targetClassFull %>;\nimport org.spongepowered.asm.mixin.Mixin;\nimport org.spongepowered.asm.mixin.injection.At;\nimport org.spongepowered.asm.mixin.injection.Inject;\nimport org.spongepowered.asm.mixin.injection.callback.CallbackInfo;\n\n@Mixin(<%= it.targetClass %>.class)\npublic class <%= it.className %> {\n	@Inject(at = @At(\"HEAD\"), method = \"<%= it.targetMethod %>\")\n	private void init(CallbackInfo info) {\n		// This code is injected into the start of <%= it.targetClass %>.<%= it.targetMethod %>()V\n	}\n}";
//#endregion
//#region scripts/src/lib/template/mixin.ts
async function vt(e, t) {
	let n = t.packageName + ".mixin", r = "ExampleMixin", i = t.mojmap ? "loadLevel" : "loadWorld", a = {
		required: !0,
		package: n,
		compatibilityLevel: qe(t.minecraftVersion).mixin,
		mixins: [r],
		injectors: { defaultRequire: 1 },
		overwrites: { requireAnnotations: !0 }
	}, o = `${t.modid}.mixins.json`;
	return await e.write(`src/main/resources/${o}`, JSON.stringify(a, null, "	")), await e.write(`src/main/java/${n.replaceAll(".", "/")}/${r}.java`, $(_t, {
		className: r,
		packageName: n,
		targetClass: "MinecraftServer",
		targetClassFull: "net.minecraft.server.MinecraftServer",
		targetMethod: i
	})), [o];
}
async function yt(e, t) {
	let n = t.packageName + ".client.mixin", r = "ExampleClientMixin", i = t.mojmap ? "Minecraft" : "MinecraftClient", a = `net.minecraft.client.${i}`, o = {
		required: !0,
		package: n,
		compatibilityLevel: qe(t.minecraftVersion).mixin,
		client: [r],
		injectors: { defaultRequire: 1 },
		overwrites: { requireAnnotations: !0 }
	}, s = `${t.modid}.client.mixins.json`;
	return await e.write(`src/client/resources/${s}`, JSON.stringify(o, null, "	")), await e.write(`src/client/java/${n.replaceAll(".", "/")}/${r}.java`, $(_t, {
		className: r,
		packageName: n,
		targetClass: i,
		targetClassFull: a,
		targetMethod: "run"
	})), [{
		config: s,
		environment: "client"
	}];
}
//#endregion
//#region scripts/src/lib/template/templates/entrypoint/Entrypoint.java.eta?raw
var bt = "package <%= it.package %>;\n\nimport net.fabricmc.api.ModInitializer;\n\nimport <%= it.identifier.package %>.<%= it.identifier.class %>;\n\n<% if (it.slf4j) { -%>\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n<% } else { -%>\nimport org.apache.logging.log4j.LogManager;\nimport org.apache.logging.log4j.Logger;\n<% } -%>\n\npublic class <%= it.className %> implements ModInitializer {\n	public static final String MOD_ID = \"<%= it.modid %>\";\n\n	// This logger is used to write text to the console and the log file.\n	// It is considered best practice to use your mod id as the logger's name.\n	// That way, it's clear which mod wrote info, warnings, and errors.\n<% if (it.slf4j) { -%>\n	public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);\n<% } else { -%>\n	public static final Logger LOGGER = LogManager.getLogger(MOD_ID);\n<% } -%>\n\n	@Override\n	public void onInitialize() {\n		// This code runs as soon as Minecraft is in a mod-load-ready state.\n		// However, some things (like resources) may still be uninitialized.\n		// Proceed with mild caution.\n\n		LOGGER.info(\"Hello Fabric world!\");\n	}\n\n<% const idNew = it.identifier.factory.isConstructor ? \"new \" : \"\" -%>\n	public static <%= it.identifier.class %> id(String path) {\n		return <%= idNew %><%= it.identifier.factory.name %>(MOD_ID, path);\n	}\n}\n", xt = "package <%= it.package %>\n\nimport net.fabricmc.api.ModInitializer\nimport <%= it.identifier.package %>.<%= it.identifier.class %>\n<% if (it.slf4j) { -%>\nimport org.slf4j.LoggerFactory\n<% } else { -%>\nimport org.apache.logging.log4j.LogManager\n<% } -%>\n\nobject <%= it.className %> : ModInitializer {\n	const val MOD_ID: String = \"<%= it.modid %>\"\n\n<% if (it.slf4j) { -%>\n	private val LOGGER = LoggerFactory.getLogger(MOD_ID)\n<% } else { -%>\n	private val LOGGER = LogManager.getLogger(MOD_ID)\n<% } -%>\n\n	override fun onInitialize() {\n		// This code runs as soon as Minecraft is in a mod-load-ready state.\n		// However, some things (like resources) may still be uninitialized.\n		// Proceed with mild caution.\n\n		LOGGER.info(\"Hello Fabric world!\")\n	}\n\n	fun id(path: String): <%= it.identifier.class %>\n		= <%= it.identifier.factory.name %>(MOD_ID, path)\n}\n", St = "package <%= it.package %>;\n\nimport net.fabricmc.api.ClientModInitializer;\n\npublic class <%= it.className %> implements ClientModInitializer {\n	@Override\n	public void onInitializeClient() {\n		// This entrypoint is suitable for setting up client-specific logic, such as rendering.\n	}\n}", Ct = "package <%= it.package %>\n\nimport net.fabricmc.api.ClientModInitializer\n\nobject <%= it.className %> : ClientModInitializer {\n	override fun onInitializeClient() {\n		// This entrypoint is suitable for setting up client-specific logic, such as rendering.\n	}\n}", wt = "package <%= it.package %>;\n\nimport net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint;\nimport net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator;\n\npublic class <%= it.className %> implements DataGeneratorEntrypoint {\n	@Override\n	public void onInitializeDataGenerator(FabricDataGenerator fabricDataGenerator) {\n\n	}\n}\n", Tt = "package <%= it.package %>\n\nimport net.fabricmc.fabric.api.datagen.v1.DataGeneratorEntrypoint\nimport net.fabricmc.fabric.api.datagen.v1.FabricDataGenerator\n\nobject <%= it.className %> : DataGeneratorEntrypoint {\n	override fun onInitializeDataGenerator(fabricDataGenerator: FabricDataGenerator) {\n	}\n}";
//#endregion
//#region scripts/src/lib/template/modentrypoint.ts
function Et(e, t) {
	let n = W(t), r = K(t);
	return n > 1 || r > 20 ? {
		name: `${e.class}.${e.factoryName}`,
		isConstructor: !1
	} : {
		name: e.class,
		isConstructor: !0
	};
}
function Dt(e) {
	if (!(e.unobfuscated || e.mojmap)) return {
		package: "net.minecraft.util",
		class: "Identifier",
		factoryName: "of"
	};
	let t = W(e.minecraftVersion), n = K(e.minecraftVersion), r = H(e.minecraftVersion);
	return {
		package: "net.minecraft.resources",
		class: t > 1 || n == 21 && r == 11 ? "Identifier" : "ResourceLocation",
		factoryName: "fromNamespaceAndPath"
	};
}
function Ot(e) {
	let t = Dt(e), n = Et(t, e.minecraftVersion);
	return {
		...t,
		factory: n
	};
}
async function kt(e, t) {
	let n = tt(t.projectName), r = {
		package: t.packageName,
		clientPackage: t.packageName + ".client",
		className: n,
		classFullName: t.packageName + "." + n,
		clientClassFullName: t.packageName + ".client." + n,
		path: t.packageName.replaceAll(".", "/") + "/" + n,
		clientPath: t.packageName.replaceAll(".", "/") + "/client/" + n,
		modid: t.modid,
		slf4j: q(t.minecraftVersion),
		clientEntrypoint: t.splitSources,
		dataEntrypoint: t.dataGeneration,
		identifier: Ot(t)
	};
	return t.kotlin ? await jt(e, r) : await At(e, r);
}
async function At(e, t) {
	var n = { main: [t.classFullName] };
	if (await e.write(`src/main/java/${t.path}.java`, $(bt, t)), t.clientEntrypoint && (await e.write(`src/client/java/${t.clientPath}Client.java`, $(St, {
		...t,
		className: t.className + "Client",
		package: t.clientPackage
	})), n = {
		...n,
		client: [t.clientClassFullName + "Client"]
	}), t.dataEntrypoint) {
		let r = t.clientEntrypoint ? "client" : "main", i = t.clientEntrypoint ? t.clientPath : t.path, a = t.clientEntrypoint ? t.clientClassFullName : t.classFullName;
		await e.write(`src/${r}/java/${i}DataGenerator.java`, $(wt, {
			...t,
			className: t.className + "DataGenerator",
			package: t.clientEntrypoint ? t.clientPackage : t.package
		})), n = {
			...n,
			"fabric-datagen": [a + "DataGenerator"]
		};
	}
	return n;
}
async function jt(e, t) {
	var n = { main: [{
		value: t.classFullName,
		adapter: "kotlin"
	}] };
	if (await e.write(`src/main/kotlin/${t.path}.kt`, $(xt, t)), t.clientEntrypoint && (await e.write(`src/client/kotlin/${t.clientPath}Client.kt`, $(Ct, {
		...t,
		className: t.className + "Client",
		package: t.clientPackage
	})), n = {
		...n,
		client: [{
			value: t.clientClassFullName + "Client",
			adapter: "kotlin"
		}]
	}), t.dataEntrypoint) {
		let r = t.clientEntrypoint ? "client" : "main", i = t.clientEntrypoint ? t.clientPath : t.path, a = t.clientEntrypoint ? t.clientClassFullName : t.classFullName;
		await e.write(`src/${r}/kotlin/${i}DataGenerator.kt`, $(Tt, {
			...t,
			className: t.className + "DataGenerator",
			package: t.clientEntrypoint ? t.clientPackage : t.package
		})), n = {
			...n,
			"fabric-datagen": [{
				value: a + "DataGenerator",
				adapter: "kotlin"
			}]
		};
	}
	return n;
}
//#endregion
//#region scripts/src/lib/template/icon.ts
var Mt = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAABlBMVEUAAAD///+l2Z/dAAABeklEQVRIx9XTsW1cMQwGYAoKIlfWbaAVUroKbxSPcBtIQRaTN9EILFkI+l3ovXuSLvYZCK4wK+IrWBD/T1iGHg41fBUcygwWKY7QLGiCuoLaNoOY+1BnKFfQDUhnyGeZIZ3lNEO+LFBef01gyutlAlvOEzRb6MIDVCskDAD01MEJCTeKjWgHI1wp1A3Ui9Wg5HSHoFaDkN1BgroOzwN4ORkJuQNXX738NsKFAULpEI2wdIhAdRLTCM1JzBIHsMJZokSAkK/ApQMAbMADhCycDzASsoQObwDwR31Sn154AFJHpwPqT6NENACZOgIambYBNrCYAOSQflAcIEDCmPXEDyrQ42GP9wBuBXuAMqBENxBneCGegVNYIPsFygrqFqh2gXYDZoG+j5BuIC6QVyh8D444aPgXBKi/B9XtUD+ANkH9CsAuNz4D/wH8/Rx4gPZIsP8DDlAeHrRBXUFXkCugQ/YLUJhBiCeg3o8JsICdAKm38OhtGio2zveBd37Jm8IEWUmfAAAAAElFTkSuQmCC";
function Nt(e, t, n) {
	if (!t) return lt(Mt);
	let r = n.create(128, 128);
	return r != null && Pt(r, e) ? r.getPng() : lt(Mt);
}
function Pt(e, t) {
	let n = e.getContext("2d");
	if (n == null) return !1;
	n.fillStyle = "#ffffff", n.fillRect(0, 0, 128, 128);
	let r = t.split(/\s+/), i = 0, a = Array(r.length), o = 65;
	for (;;) {
		i = 0;
		for (let e of r) {
			let t = o;
			do
				t--, n.font = `${t}px ${Ht}`;
			while (n.measureText(e).width > 124);
			o = Math.min(o, t);
		}
		for (let t = 0; t < r.length; t++) {
			let s = r[t];
			n.font = `${o}px ${Ht}`;
			let c = e.measureText(n, s);
			a[t] = c.ascent + c.descent, i += a[t];
		}
		if (i += (r.length - 1) * 2, i <= 124) break;
	}
	let s = (128 - i) / 2;
	for (let t = 0; t < r.length; t++) {
		let i = 0;
		for (let e of a.slice(0, t)) i += e + 2;
		let c = r[t];
		n.font = `${o}px ${Ht}`, n.fillStyle = "#000000", n.textAlign = "center";
		let l = e.measureText(n, c);
		n.fillText(c, 64, s + i + l.ascent);
	}
	return !0;
}
//#endregion
//#region scripts/src/lib/template/modjson.ts
function Ft(e) {
	return Number(e.split(".")[1]) >= 59;
}
async function It(e, t, n) {
	let r = [...await vt(e, n), ...n.splitSources ? await yt(e, n) : []], i = n.minecraftVersion.indexOf("-");
	var a = n.minecraftVersion.substring(0, i === -1 ? n.minecraftVersion.length : i + 1);
	let o = {
		schemaVersion: 1,
		id: n.modid,
		version: "${version}",
		name: n.projectName,
		description: "This is an example description! Tell everyone what your mod is about!",
		authors: ["Me!"],
		contact: {
			homepage: "https://fabricmc.net/",
			sources: "https://github.com/FabricMC/fabric-example-mod"
		},
		license: "CC0-1.0",
		icon: `assets/${n.modid}/icon.png`,
		environment: "*",
		entrypoints: await kt(e, n),
		mixins: r,
		depends: {
			fabricloader: ">=" + n.loaderVersion,
			minecraft: "~" + a,
			java: ">=" + qe(n.minecraftVersion).release
		}
	};
	o.depends[Ft(n.fabricVersion) ? "fabric-api" : "fabric"] = "*", n.kotlin && (o.depends = {
		...o.depends,
		"fabric-language-kotlin": "*"
	}), await e.write("src/main/resources/fabric.mod.json", JSON.stringify(o, null, "	")), await e.write(`src/main/resources/assets/${n.modid}/icon.png`, Nt(n.projectName, n.uniqueModIcon, t));
}
//#endregion
//#region scripts/src/lib/template/templates/git/gitattributes?raw
var Lt = "#\n# https://help.github.com/articles/dealing-with-line-endings/\n#\n# Linux start script should use lf\n/gradlew        text eol=lf\n\n# These are Windows script files and should use crlf\n*.bat           text eol=crlf\n\n", Rt = "Creative Commons Legal Code\n\nCC0 1.0 Universal\n\n    CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE\n    LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN\n    ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS\n    INFORMATION ON AN \"AS-IS\" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES\n    REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS\n    PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM\n    THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED\n    HEREUNDER.\n\nStatement of Purpose\n\nThe laws of most jurisdictions throughout the world automatically confer\nexclusive Copyright and Related Rights (defined below) upon the creator\nand subsequent owner(s) (each and all, an \"owner\") of an original work of\nauthorship and/or a database (each, a \"Work\").\n\nCertain owners wish to permanently relinquish those rights to a Work for\nthe purpose of contributing to a commons of creative, cultural and\nscientific works (\"Commons\") that the public can reliably and without fear\nof later claims of infringement build upon, modify, incorporate in other\nworks, reuse and redistribute as freely as possible in any form whatsoever\nand for any purposes, including without limitation commercial purposes.\nThese owners may contribute to the Commons to promote the ideal of a free\nculture and the further production of creative, cultural and scientific\nworks, or to gain reputation or greater distribution for their Work in\npart through the use and efforts of others.\n\nFor these and/or other purposes and motivations, and without any\nexpectation of additional consideration or compensation, the person\nassociating CC0 with a Work (the \"Affirmer\"), to the extent that he or she\nis an owner of Copyright and Related Rights in the Work, voluntarily\nelects to apply CC0 to the Work and publicly distribute the Work under its\nterms, with knowledge of his or her Copyright and Related Rights in the\nWork and the meaning and intended legal effect of CC0 on those rights.\n\n1. Copyright and Related Rights. A Work made available under CC0 may be\nprotected by copyright and related or neighboring rights (\"Copyright and\nRelated Rights\"). Copyright and Related Rights include, but are not\nlimited to, the following:\n\n  i. the right to reproduce, adapt, distribute, perform, display,\n     communicate, and translate a Work;\n ii. moral rights retained by the original author(s) and/or performer(s);\niii. publicity and privacy rights pertaining to a person's image or\n     likeness depicted in a Work;\n iv. rights protecting against unfair competition in regards to a Work,\n     subject to the limitations in paragraph 4(a), below;\n  v. rights protecting the extraction, dissemination, use and reuse of data\n     in a Work;\n vi. database rights (such as those arising under Directive 96/9/EC of the\n     European Parliament and of the Council of 11 March 1996 on the legal\n     protection of databases, and under any national implementation\n     thereof, including any amended or successor version of such\n     directive); and\nvii. other similar, equivalent or corresponding rights throughout the\n     world based on applicable law or treaty, and any national\n     implementations thereof.\n\n2. Waiver. To the greatest extent permitted by, but not in contravention\nof, applicable law, Affirmer hereby overtly, fully, permanently,\nirrevocably and unconditionally waives, abandons, and surrenders all of\nAffirmer's Copyright and Related Rights and associated claims and causes\nof action, whether now known or unknown (including existing as well as\nfuture claims and causes of action), in the Work (i) in all territories\nworldwide, (ii) for the maximum duration provided by applicable law or\ntreaty (including future time extensions), (iii) in any current or future\nmedium and for any number of copies, and (iv) for any purpose whatsoever,\nincluding without limitation commercial, advertising or promotional\npurposes (the \"Waiver\"). Affirmer makes the Waiver for the benefit of each\nmember of the public at large and to the detriment of Affirmer's heirs and\nsuccessors, fully intending that such Waiver shall not be subject to\nrevocation, rescission, cancellation, termination, or any other legal or\nequitable action to disrupt the quiet enjoyment of the Work by the public\nas contemplated by Affirmer's express Statement of Purpose.\n\n3. Public License Fallback. Should any part of the Waiver for any reason\nbe judged legally invalid or ineffective under applicable law, then the\nWaiver shall be preserved to the maximum extent permitted taking into\naccount Affirmer's express Statement of Purpose. In addition, to the\nextent the Waiver is so judged Affirmer hereby grants to each affected\nperson a royalty-free, non transferable, non sublicensable, non exclusive,\nirrevocable and unconditional license to exercise Affirmer's Copyright and\nRelated Rights in the Work (i) in all territories worldwide, (ii) for the\nmaximum duration provided by applicable law or treaty (including future\ntime extensions), (iii) in any current or future medium and for any number\nof copies, and (iv) for any purpose whatsoever, including without\nlimitation commercial, advertising or promotional purposes (the\n\"License\"). The License shall be deemed effective as of the date CC0 was\napplied by Affirmer to the Work. Should any part of the License for any\nreason be judged legally invalid or ineffective under applicable law, such\npartial invalidity or ineffectiveness shall not invalidate the remainder\nof the License, and in such case Affirmer hereby affirms that he or she\nwill not (i) exercise any of his or her remaining Copyright and Related\nRights in the Work or (ii) assert any associated claims and causes of\naction with respect to the Work, in either case contrary to Affirmer's\nexpress Statement of Purpose.\n\n4. Limitations and Disclaimers.\n\n a. No trademark or patent rights held by Affirmer are waived, abandoned,\n    surrendered, licensed or otherwise affected by this document.\n b. Affirmer offers the Work as-is and makes no representations or\n    warranties of any kind concerning the Work, express, implied,\n    statutory or otherwise, including without limitation warranties of\n    title, merchantability, fitness for a particular purpose, non\n    infringement, or the absence of latent or other defects, accuracy, or\n    the present or absence of errors, whether or not discoverable, all to\n    the greatest extent permissible under applicable law.\n c. Affirmer disclaims responsibility for clearing rights of other persons\n    that may apply to the Work or any use thereof, including without\n    limitation any person's Copyright and Related Rights in the Work.\n    Further, Affirmer disclaims responsibility for obtaining any necessary\n    consents, permissions or other rights required for any use of the\n    Work.\n d. Affirmer understands and acknowledges that Creative Commons is not a\n    party to this document and has no duty or obligation with respect to\n    this CC0 or use of the Work.", zt = "# <%= it.projectName %>\n\n## Setup\n\nFor setup instructions, please see the [Fabric Documentation page](https://docs.fabricmc.net/develop/getting-started/creating-a-project#setting-up) related to the IDE that you are using.\n\n## License\n\nThis template is available under the CC0 license. Feel free to learn from it and incorporate it in your own projects.\n";
//#endregion
//#region scripts/src/lib/template/git.ts
async function Bt(e, t) {
	await e.write(".gitattributes", Lt), await e.write(".gitignore", mt), await e.write(".github/workflows/build.yml", ht), await e.write("LICENSE", Rt), await e.write("README.md", $(zt, t));
}
//#endregion
//#region scripts/src/lib/template/versions.ts
async function Vt() {
	let e = await L();
	return e.filter((t) => {
		let n = t.version;
		return n.startsWith("1.14") && n != "1.14.4" ? !1 : t.stable ? !0 : e[0].version == n;
	});
}
//#endregion
//#region scripts/src/lib/template/template.ts
var Ht = "Comic Relief";
async function Ut(e) {
	let t = await Wt(e.config);
	await gt(e), await ct(e.writer, t), await It(e.writer, e.canvas, t), await Bt(e.writer, t);
}
async function Wt(e) {
	let t = B(e.minecraftVersion);
	return {
		...e,
		splitSources: V(e.minecraftVersion) && e.splitSources,
		dataGeneration: G(e.minecraftVersion) && e.dataGeneration,
		loaderVersion: (await P()).find((e) => e.stable).version,
		fabricVersion: await R(e.minecraftVersion),
		yarnVersion: t ? void 0 : (await F(e.minecraftVersion))[0].version,
		kotlin: await Gt(e),
		unobfuscated: t
	};
}
async function Gt(e) {
	if (!e.useKotlin) return;
	let t = (await I()).pop();
	return {
		fabricKotlinAdapterVersion: t,
		kotlinVersion: t.split("+kotlin.")[1]
	};
}
//#endregion
//#region scripts/src/lib/Template.svelte
var Kt = j("<p class=\"svelte-8wpoko\">Choose a name for your new mod.</p>"), qt = j("<p class=\"svelte-8wpoko\">Choose a name for your new mod. The mod ID will be <code class=\"svelte-8wpoko\"> </code>. <a class=\"svelte-8wpoko\">Use custom id</a></p>"), Jt = j("<li style=\"color: red\" class=\"svelte-8wpoko\"> </li>"), Yt = j("<!> <br class=\"svelte-8wpoko\"/>", 1), Xt = j("<div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Mod ID:</h3> <hr class=\"svelte-8wpoko\"/> <p class=\"svelte-8wpoko\">Enter the modid you wish to use for your mod. <a class=\"svelte-8wpoko\">Use default</a></p> <!> <input id=\"mod-id\" class=\"svelte-8wpoko\"/></div>"), Zt = j("<option class=\"svelte-8wpoko\"> </option>"), Qt = j("<div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"mojmap\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"mojmap\" class=\"option-label svelte-8wpoko\">Mojang Mappings</label></div> <p class=\"option-body svelte-8wpoko\">Use Mojang's official mappings rather than Yarn. Note that Mojang's mappings come with a usable yet more restrictive license than Yarn. Use them at your own risk.</p></div>"), $t = j("<div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"datagen\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"datagen\" class=\"option-label svelte-8wpoko\">Data Generation</label></div> <p class=\"option-body svelte-8wpoko\">This option configures the <a href=\"https://docs.fabricmc.net/develop/data-generation/setup\" class=\"svelte-8wpoko\">Fabric Data Generation API</a> in your mod. This allows you to generate resources such as recipes from code at build time.</p></div>"), en = j("<div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"splitSources\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"splitSources\" class=\"option-label svelte-8wpoko\">Split client and common sources</label></div> <p class=\"option-body svelte-8wpoko\">A common source of server crashes comes from calling client only code when installed on a server.\n                This option configures your mod to be built from two source sets, client and main.\n                This enforces a clear separation between the client and server code.</p></div>"), tn = j("<a class=\"button primary download-button svelte-8wpoko\"><!> Generating...</a>"), nn = j("<a class=\"button primary large download-button svelte-8wpoko\"><!> Download Template (.ZIP)</a>"), rn = j("<div class=\"template svelte-8wpoko\"><div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Mod Name:</h3> <hr class=\"svelte-8wpoko\"/> <!> <input id=\"project-name\" class=\"svelte-8wpoko\"/> <!></div> <!> <div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Package Name:</h3> <hr class=\"svelte-8wpoko\"/> <p class=\"svelte-8wpoko\">Choose a unique package name for your new mod. The package name\n                should be unique to you. If you are unsure about this use <code class=\"svelte-8wpoko\">name.modid</code>.</p> <input id=\"package-name\" class=\"svelte-8wpoko\"/> <!></div> <div class=\"form-line svelte-8wpoko\"><h3 class=\"svelte-8wpoko\">Minecraft Version:</h3> <hr class=\"svelte-8wpoko\"/> <p class=\"svelte-8wpoko\">Select the version of Minecraft that you wish to use for your\n                mod.</p> <select id=\"minecraft-version\" style=\"min-width: 200px\" class=\"svelte-8wpoko\"></select></div> <hr class=\"svelte-8wpoko\"/> <br class=\"svelte-8wpoko\"/> <h4 class=\"svelte-8wpoko\">Advanced Options:</h4> <div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"kotlin\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"kotlin\" class=\"option-label svelte-8wpoko\">Kotlin Programming Language</label></div> <p class=\"option-body svelte-8wpoko\"><a href=\"https://kotlinlang.org/\" class=\"svelte-8wpoko\">Kotlin</a> is a alternative programming language that can be used to develop mods.\n                The <a href=\"https://github.com/FabricMC/fabric-language-kotlin\" class=\"svelte-8wpoko\">Fabric Kotlin language adapter</a> is used to enable support for creating Fabric Kotlin mods.</p></div> <!> <!> <!> <div class=\"svelte-8wpoko\"><div class=\"option-container svelte-8wpoko\"><input id=\"gradleKotlin\" type=\"checkbox\" class=\"option-input svelte-8wpoko\"/> <label for=\"gradleKotlin\" class=\"option-label svelte-8wpoko\">Kotlin Build Script</label></div> <p class=\"option-body svelte-8wpoko\">The Gradle build script will use the Kotlin programming language instead of Groovy.</p></div> <br class=\"svelte-8wpoko\"/> <!></div>"), an = j("<p style=\"color: red\"> </p> <p>For support please visit one of our <a href=\"/discuss/\">community discussion</a> groups.</p>", 1), on = j("<p>Loading data <span>...</span></p>");
function sn(j, P) {
	s(P, !1);
	let F = d(), I = d(), L = d(), R = d(), H = d(), W = d(), K = d(), q = d(), J = d("Template Mod"), Y = d("com.example"), ne = d(!1), re = d(!0), ie = d(!1), ae = d(!0), oe = d(!1), X = d(), se = d(!1), Z = Promise.all([Vt()]).then(([e]) => (a(q, e.find((e) => e.stable).version), { game: e }));
	function ce(e) {
		if (e !== void 0) return te(e, f(X) === void 0);
	}
	async function le() {
		if (f(H) !== void 0 || f(X) !== void 0 && f(W) !== void 0 || f(K).length > 0) return;
		a(se, !0);
		let e = {
			modid: f(X) ?? f(F),
			minecraftVersion: f(q),
			projectName: f(J),
			packageName: f(Y),
			useKotlin: f(ne),
			mojmap: f(re) || f(R),
			dataGeneration: f(ie) && f(I),
			splitSources: f(ae) && f(L),
			uniqueModIcon: !0,
			gradleKotlin: f(oe)
		}, t = new ue.default();
		await Ut({
			config: e,
			writer: { write: async (e, n, r) => {
				let i = typeof n == "string" ? n : new Uint8Array(n);
				t.file(e, i, { unixPermissions: r?.executable ? "774" : void 0 });
			} },
			canvas: { create(e, t) {
				let n = document.createElement("canvas");
				return n.width = e, n.height = t, {
					getContext: (e) => n.getContext(e),
					getPng: () => lt(n.toDataURL().split(";base64,")[1]),
					measureText(e, t) {
						let n = e.measureText(t);
						return {
							width: n.width,
							ascent: n.actualBoundingBoxAscent,
							descent: n.actualBoundingBoxDescent
						};
					}
				};
			} }
		}), de.default.saveAs(await t.generateAsync({
			type: "blob",
			platform: "UNIX"
		}), `${f(F)}-template-${e.minecraftVersion}.zip`), a(se, !1);
	}
	function fe() {
		a(J, f(J).trim());
	}
	function pe() {
		a(Y, nt(f(Y)));
	}
	function me() {
		a(X, f(F));
	}
	function he() {
		a(X, void 0);
	}
	r(() => f(J), () => {
		a(F, U(f(J)));
	}), r(() => f(q), () => {
		a(I, G(f(q) || "1.99"));
	}), r(() => f(q), () => {
		a(L, V(f(q) || "1.99"));
	}), r(() => f(q), () => {
		a(R, B(f(q) || "1.99"));
	}), r(() => f(F), () => {
		a(H, ce(f(F)));
	}), r(() => f(X), () => {
		a(W, ee(f(X)));
	}), r(() => f(Y), () => {
		a(K, Ze(f(Y)));
	}), u(), D();
	var Q = m(), ge = y(Q);
	_(ge, () => Z, (n) => {
		var r = on(), i = l(e(r));
		t(r), b(() => g(i, "font-family: Comic Relief;")), M(n, r);
	}, (r, o) => {
		var s = rn(), u = e(s), d = l(e(u), 4), m = (e) => {
			var t = Kt();
			M(e, t);
		}, g = (r) => {
			var i = qt(), a = l(e(i)), o = c(a, !0), s = l(a, 2);
			h(s, "href", ""), t(i), b(() => k(o, f(F))), n("click", s, C(me)), M(r, i);
		};
		v(d, (e) => {
			f(X) == null ? e(g, -1) : e(m);
		});
		var _ = l(d, 2);
		E(_);
		var D = l(_, 2), j = (e) => {
			var t = Yt(), n = y(t);
			T(n, 1, () => f(H), S, (e, t) => {
				var n = Jt(), r = c(n, !0);
				b(() => k(r, f(t))), M(e, n);
			}), N(2), M(e, t);
		};
		v(D, (e) => {
			f(H) != null && e(j);
		}), t(u);
		var P = l(u, 2), B = (r) => {
			var i = Xt(), o = l(e(i), 4), s = l(e(o));
			h(s, "href", ""), t(o);
			var u = l(o, 2), d = (e) => {
				var t = Yt(), n = y(t);
				T(n, 1, () => f(W), S, (e, t) => {
					var n = Jt(), r = c(n, !0);
					b(() => k(r, f(t))), M(e, n);
				}), N(2), M(e, t);
			};
			v(u, (e) => {
				f(W) != null && e(d);
			});
			var p = l(u, 2);
			E(p), t(i), n("click", s, C(he)), w(p, () => f(X), (e) => a(X, e)), M(r, i);
		};
		v(P, (e) => {
			f(X) != null && e(B);
		});
		var V = l(P, 2), U = l(e(V), 6);
		E(U);
		var G = l(U, 2);
		T(G, 1, () => f(K), S, (e, t) => {
			var n = Jt(), r = c(n, !0);
			b(() => k(r, f(t))), M(e, n);
		}), t(V);
		var ee = l(V, 2), te = l(e(ee), 6);
		T(te, 5, () => (A(f(o)), i(() => f(o).game)), S, (e, t) => {
			var n = Zt(), r = c(n, !0), a = {};
			b(() => {
				k(r, (f(t), i(() => f(t).version))), a !== (a = (f(t), i(() => f(t).version))) && (n.value = (n.__value = a) ?? "");
			}), M(e, n);
		}), t(te), O(te), t(ee);
		var Z = l(ee, 8), ce = e(Z), ue = e(ce);
		E(ue), N(2), t(ce), N(2), t(Z);
		var de = l(Z, 2), Q = (n) => {
			var r = Qt(), i = e(r), o = e(i);
			E(o), N(2), t(i), N(2), t(r), p(o, () => f(re), (e) => a(re, e)), M(n, r);
		};
		v(de, (e) => {
			f(R) || e(Q);
		});
		var ge = l(de, 2), _e = (n) => {
			var r = $t(), i = e(r), o = e(i);
			E(o), N(2), t(i), N(2), t(r), p(o, () => f(ie), (e) => a(ie, e)), M(n, r);
		};
		v(ge, (e) => {
			f(I) && e(_e);
		});
		var ve = l(ge, 2), ye = (n) => {
			var r = en(), i = e(r), o = e(i);
			E(o), N(2), t(i), N(2), t(r), p(o, () => f(ae), (e) => a(ae, e)), M(n, r);
		};
		v(ve, (e) => {
			f(L) && e(ye);
		});
		var be = l(ve, 2), xe = e(be), Se = e(xe);
		E(Se), N(2), t(xe), N(2), t(be);
		var Ce = l(be, 4), we = (n) => {
			var r = tn();
			h(r, "href", "");
			var i = e(r);
			z(i, {}), N(), t(r), M(n, r);
		}, Te = (r) => {
			var i = nn();
			h(i, "href", "");
			var a = e(i);
			z(a, {}), N(), t(i), n("click", i, C(le)), M(r, i);
		};
		v(Ce, (e) => {
			f(se) ? e(we) : e(Te, -1);
		}), t(s), w(_, () => f(J), (e) => a(J, e)), n("blur", _, fe), n("keyup", U, pe), w(U, () => f(Y), (e) => a(Y, e)), x(te, () => f(q), (e) => a(q, e)), p(ue, () => f(ne), (e) => a(ne, e)), p(Se, () => f(oe), (e) => a(oe, e)), M(r, s);
	}, (e, t) => {
		var n = an(), r = y(n), a = c(r);
		N(2), b(() => k(a, `Error: ${A(f(t)), i(() => f(t).message) ?? ""}`)), M(e, n);
	}), M(j, Q), o();
}
//#endregion
export { sn as default };
