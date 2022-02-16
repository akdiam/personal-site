var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["img/headshot.jpeg", "svg/fclef.svg", "svg/github.svg", "svg/linkedin.svg", "svg/spotify.svg", "theme/dark.css", "theme/light.css"]),
  _: {
    mime: { ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".css": "text/css" },
    entry: { "file": "start-9133aed1.js", "js": ["start-9133aed1.js", "chunks/vendor-823cca4d.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/6.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/experiences\/?$/,
        params: null,
        path: "/experiences",
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/projects\/?$/,
        params: null,
        path: "/projects",
        a: [0, 4],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/etc\/?$/,
        params: null,
        path: "/etc",
        a: [0, 5],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/wpm\/?$/,
        params: null,
        path: "/wpm",
        a: [0, 6],
        b: [1]
      }
    ]
  }
};
