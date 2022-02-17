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
  default: () => Wpm
});
var import_index_54ee5aaa = __toModule(require("../../../chunks/index-54ee5aaa.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-cfzzaq{outline:0;height:100%;border-radius:3px;cursor:text;font-size:20px}.racetext.svelte-cfzzaq{padding:20px;letter-spacing:.7px;font-size:xx-large;border:1px solid black;border-radius:20px}.correcttext.svelte-cfzzaq{color:rgb(146, 207, 138)}.incorrecttext.svelte-cfzzaq{color:rgba(223, 110, 110, 0.884)}.unfinishedtext.svelte-cfzzaq{color:gray;height:100%;position:relative;z-index:10}.unfinishedtext.svelte-cfzzaq::before{content:"";width:1.5px;height:27px;background:black;display:inline-block;animation:svelte-cfzzaq-cursor-blink 1.5s steps(2) infinite}@keyframes svelte-cfzzaq-cursor-blink{0%{opacity:0}}',
  map: null
};
const Wpm = (0, import_index_54ee5aaa.c)(($$result, $$props, $$bindings, slots) => {
  let inputField;
  let userText = "";
  let unfinishedText = "";
  let incorrectText = "";
  let correctText = "";
  $$result.css.add(css);
  return `<section class="${"svelte-cfzzaq"}"><div class="${"racetext svelte-cfzzaq"}"><span class="${"correcttext svelte-cfzzaq"}">${(0, import_index_54ee5aaa.e)(correctText)}</span>
        <span class="${"incorrecttext svelte-cfzzaq"}">${(0, import_index_54ee5aaa.e)(incorrectText)}</span>
        <span class="${"unfinishedtext svelte-cfzzaq"}">${(0, import_index_54ee5aaa.e)(unfinishedText)}</span></div>
    <input type="${"text"}" class="${"user-input"}" id="${"user-input"}"${(0, import_index_54ee5aaa.d)("this", inputField, 0)}${(0, import_index_54ee5aaa.d)("value", userText, 0)}>
</section>`;
});
