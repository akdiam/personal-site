import { c as create_ssr_component, v as validate_component } from "../../chunks/index-2dc61825.js";
var app = "";
var Sidebar_svelte_svelte_type_style_lang = "";
var Spinner_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".center.svelte-qp7170.svelte-qp7170{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%)}.lds-ripple.svelte-qp7170.svelte-qp7170{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple.svelte-qp7170 div.svelte-qp7170{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;animation:svelte-qp7170-lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple.svelte-qp7170 div.svelte-qp7170:nth-child(2){animation-delay:-0.5s}@keyframes svelte-qp7170-lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}",
  map: null
};
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


<div class="${"center svelte-qp7170"}"><div class="${"lds-ripple svelte-qp7170"}"><div class="${"svelte-qp7170"}"></div></div>
</div>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.content.svelte-1l486y3{margin-left:250px;padding:0px 0px;height:100%;flex:1 0 auto;text-align:center}.content-header.svelte-1l486y3{position:sticky;top:0;background:rgb(54,54,54);color:white;padding:3px 8px;z-index:10}.content-header.svelte-1l486y3::after{content:"";position:absolute;left:0;background-color:rgba(161, 157, 157, 0);bottom:-50px;height:50px;width:25px;border-top-left-radius:20px;box-shadow:0 -25px 0 0 rgb(54,54,54)}.text.svelte-1l486y3{color:white;padding:25px}',
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}`}`;
});
export { _layout as default };
