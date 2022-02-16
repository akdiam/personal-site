import { c as create_ssr_component, e as escape, d as add_attribute } from "../../../chunks/index-54ee5aaa.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: 'section.svelte-cfzzaq{outline:0;height:100%;border-radius:3px;cursor:text;font-size:20px}.racetext.svelte-cfzzaq{padding:20px;letter-spacing:.7px;font-size:xx-large;border:1px solid black;border-radius:20px}.correcttext.svelte-cfzzaq{color:rgb(146, 207, 138)}.incorrecttext.svelte-cfzzaq{color:rgba(223, 110, 110, 0.884)}.unfinishedtext.svelte-cfzzaq{color:gray;height:100%;position:relative;z-index:10}.unfinishedtext.svelte-cfzzaq::before{content:"";width:1.5px;height:27px;background:black;display:inline-block;animation:svelte-cfzzaq-cursor-blink 1.5s steps(2) infinite}@keyframes svelte-cfzzaq-cursor-blink{0%{opacity:0}}',
  map: null
};
const Wpm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let inputField;
  let userText = "";
  let unfinishedText = "";
  let incorrectText = "";
  let correctText = "";
  $$result.css.add(css);
  return `<section class="${"svelte-cfzzaq"}"><div class="${"racetext svelte-cfzzaq"}"><span class="${"correcttext svelte-cfzzaq"}">${escape(correctText)}</span>
        <span class="${"incorrecttext svelte-cfzzaq"}">${escape(incorrectText)}</span>
        <span class="${"unfinishedtext svelte-cfzzaq"}">${escape(unfinishedText)}</span></div>
    <input type="${"text"}" class="${"user-input"}" id="${"user-input"}"${add_attribute("this", inputField, 0)}${add_attribute("value", userText, 0)}>
</section>`;
});
export { Wpm as default };
