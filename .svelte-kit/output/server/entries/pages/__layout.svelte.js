import { n as noop, a as safe_not_equal, g as getContext, c as create_ssr_component, b as subscribe, d as add_attribute, v as validate_component } from "../../chunks/index-54ee5aaa.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
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
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
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
  const stores = getContext("__svelte__");
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
var Sidebar_svelte_svelte_type_style_lang = "";
var Spinner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".center.svelte-1qh7jo9.svelte-1qh7jo9{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;color:var(--color-secondary)}.lds-ripple.svelte-1qh7jo9.svelte-1qh7jo9{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple.svelte-1qh7jo9 div.svelte-1qh7jo9{position:absolute;border:4px solid var(--color-secondary);opacity:1;border-radius:50%;animation:svelte-1qh7jo9-lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple.svelte-1qh7jo9 div.svelte-1qh7jo9:nth-child(2){animation-delay:-0.5s}@keyframes svelte-1qh7jo9-lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


<div class="${"center svelte-1qh7jo9"}"><p>Loading...</p>
    <div class="${"lds-ripple svelte-1qh7jo9"}"><div class="${"svelte-1qh7jo9"}"></div></div>
</div>`;
});
var Hamburger_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.background.svelte-1lr6hc8.svelte-1lr6hc8{transition:background-color 0.3s;background-color:var(--color-background)}.content.svelte-1lr6hc8.svelte-1lr6hc8{margin-left:250px;padding:0px 0px;height:100%;flex:1 0 auto;text-align:center}.content-header.svelte-1lr6hc8.svelte-1lr6hc8{transition:background-color 0.3s;position:sticky;top:0;background:var(--color-primary);color:var(--text-primary);padding:3px 8px;z-index:30;display:flex;flex-wrap:nowrap;align-items:center}.shadow.svelte-1lr6hc8.svelte-1lr6hc8{-webkit-box-shadow:0 3px 5px rgba(57, 63, 72, 0.4);-moz-box-shadow:0 3px 5px rgba(57, 63, 72, 0.4);box-shadow:0 3px 5px rgba(57, 63, 72, 0.4)}.content-header.svelte-1lr6hc8 h2.svelte-1lr6hc8{transition:background-color 0.3s;flex-grow:1;color:var(--text-primary)}@media screen and (min-width: 850px){.content-header.svelte-1lr6hc8.svelte-1lr6hc8::after{transition:background-color 0.3s;transition:box-shadow 0.3s;content:"";position:absolute;left:0;background-color:var(--color-primary-transparent);bottom:-50px;height:50px;width:25px;border-top-left-radius:20px;box-shadow:0 -25px 0 0 var(--color-primary)}.hamburger.svelte-1lr6hc8.svelte-1lr6hc8{display:none}}@media screen and (max-width: 850px){.content.svelte-1lr6hc8.svelte-1lr6hc8{margin:auto;padding:0px 0px;height:100%;flex:1 0 auto;text-align:center}}.text.svelte-1lr6hc8.svelte-1lr6hc8{transition:background-color 0.3s;color:var(--text-secondary);padding:25px}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  $$result.css.add(css);
  {
    {
      switch ($page.url.pathname) {
        case "/":
          break;
        case "/experiences":
          break;
        case "/projects":
          break;
        case "/etc":
          break;
        default:
          console.log("unknown page");
      }
      console.log($page.url.pathname);
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}"${add_attribute("href", `theme/${$theme}.css`, 0)} data-svelte="svelte-y9p5fo">${$$result.title = `<title>Adam Kim</title>`, ""}`, ""}


${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
export { _layout as default };
