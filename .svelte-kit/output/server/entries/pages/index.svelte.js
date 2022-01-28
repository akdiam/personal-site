import { c as create_ssr_component } from "../../chunks/index-2dc61825.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-1o517n3{padding:20px;font-size:xx-large}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}`, ""}

<section><p class="${"svelte-1o517n3"}">Hi! I&#39;m Adam.
	</p>
	<p class="${"svelte-1o517n3"}">I&#39;m a <b>senior</b> at the University of Michigan studying <b>computer science engineering</b>.
	</p>
	<p class="${"svelte-1o517n3"}">I&#39;m always pushing myself to build <i>clean, maintainable,</i> and <i>extensible</i> software that works.
	</p>
	<p class="${"svelte-1o517n3"}">I also enjoy making music with friends (I&#39;ve played the double bass for ~11 years), listening to music, being active, and watching films.
	</p>
	<p class="${"svelte-1o517n3"}">If you&#39;re interested in my experiences, here&#39;s my resume. You can also poke around the &#39;experiences&#39; page.
	</p>
</section>`;
});
export { Routes as default, prerender };
