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
  default: () => _layout
});
var import_index_4ef0e261 = __toModule(require("../../chunks/index-4ef0e261.js"));
const subscriber_queue = [];
function writable(value, start = import_index_4ef0e261.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_4ef0e261.a)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_4ef0e261.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_4ef0e261.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const theme = writable("light");
const getStores = () => {
  const stores = (0, import_index_4ef0e261.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var app = "";
var ActionRow_svelte_svelte_type_style_lang = "";
var Sidebar_svelte_svelte_type_style_lang = "";
var Spinner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".center.svelte-1qh7jo9.svelte-1qh7jo9{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;color:var(--color-secondary)}.lds-ripple.svelte-1qh7jo9.svelte-1qh7jo9{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple.svelte-1qh7jo9 div.svelte-1qh7jo9{position:absolute;border:4px solid var(--color-secondary);opacity:1;border-radius:50%;animation:svelte-1qh7jo9-lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple.svelte-1qh7jo9 div.svelte-1qh7jo9:nth-child(2){animation-delay:-0.5s}@keyframes svelte-1qh7jo9-lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}",
  map: null
};
const Spinner = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


<div class="${"center svelte-1qh7jo9"}"><p>Loading...</p>
    <div class="${"lds-ripple svelte-1qh7jo9"}"><div class="${"svelte-1qh7jo9"}"></div></div>
</div>`;
});
var Hamburger_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.background.svelte-1c08ybd.svelte-1c08ybd{transition:background-color 0.3s;background-color:var(--color-background)}.content.svelte-1c08ybd.svelte-1c08ybd{margin-left:250px;padding:0px 0px;height:100%;flex:1 0 auto;text-align:center}.content-header.svelte-1c08ybd.svelte-1c08ybd{transition:background-color 0.3s;position:sticky;top:0;background:var(--color-primary);color:var(--text-primary);padding:3px 8px;z-index:30;display:flex;flex-wrap:nowrap;align-items:center}.content-header.svelte-1c08ybd h2.svelte-1c08ybd{transition:background-color 0.3s;flex-grow:1;color:var(--text-primary)}@media screen and (min-width: 850px){.content-header.svelte-1c08ybd.svelte-1c08ybd::after{transition:background-color 0.3s;transition:box-shadow 0.3s;content:"";position:absolute;left:0;background-color:var(--color-primary-transparent);bottom:-50px;height:50px;width:25px;border-top-left-radius:20px;box-shadow:0 -25px 0 0 var(--color-primary)}.hamburger.svelte-1c08ybd.svelte-1c08ybd{display:none}}@media screen and (max-width: 850px){.content.svelte-1c08ybd.svelte-1c08ybd{margin:auto;padding:0px 0px;height:100%;flex:1 0 auto;text-align:center}}.text.svelte-1c08ybd.svelte-1c08ybd{transition:background-color 0.3s;color:var(--text-primary);padding:25px}',
  map: null
};
const _layout = (0, import_index_4ef0e261.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = (0, import_index_4ef0e261.b)(page, (value) => $page = value);
  $$unsubscribe_theme = (0, import_index_4ef0e261.b)(theme, (value) => $theme = value);
  $$result.css.add(css);
  {
    {
      let curr_page = $page.url.pathname;
      if (curr_page === "/")
        ;
      else {
        curr_page.replace("/", "");
      }
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}"${(0, import_index_4ef0e261.d)("href", `theme/${$theme}.css`, 0)} data-svelte="svelte-y9p5fo">${$$result.title = `<title>Adam Kim</title>`, ""}`, ""}

${`${(0, import_index_4ef0e261.v)(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
