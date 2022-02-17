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
  default: () => Routes
});
var import_index_4ef0e261 = __toModule(require("../../chunks/index-4ef0e261.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1rk2txf{font-size:xx-large}",
  map: null
};
const Routes = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><p class="${"svelte-1rk2txf"}">Hi! I&#39;m Adam.
	</p>
	<p class="${"svelte-1rk2txf"}">I&#39;m a <strong>senior</strong> at the University of Michigan studying <strong>computer science</strong>.
	</p>
	<p class="${"svelte-1rk2txf"}">I&#39;m interested in <strong>modern web development</strong>.
	</p>
	<p class="${"svelte-1rk2txf"}">My goals are to build <i>clean, maintainable,</i> and <i>extensible</i> software that works.
	</p>
	<p class="${"svelte-1rk2txf"}">If you&#39;re interested in my experiences, here&#39;s <a href="${"someresume"}">my resume</a>.
	</p>
	<p class="${"svelte-1rk2txf"}">If you&#39;d like to get in touch, please <a href="${"mailto:adamkkim00@gmail.com"}">email me</a> at adamkkim00@gmail.com :)
	</p>
</section>`;
});
