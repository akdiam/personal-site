import { c as create_ssr_component } from "../../chunks/index-08869495.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "p.svelte-13tcdad{padding:20px;font-size:xx-large}a.svelte-13tcdad{color:rgb(8, 177, 255)}",
  map: null
};
const prerender = true;
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section><p class="${"svelte-13tcdad"}">Hi! I&#39;m Adam.
	</p>
	<p class="${"svelte-13tcdad"}">I&#39;m a <strong>senior</strong> at the University of Michigan studying <strong>computer science</strong>.
	</p>
	<p class="${"svelte-13tcdad"}">I&#39;m interested in <strong>modern web development</strong>.
	</p>
	<p class="${"svelte-13tcdad"}">My goals are to build <i>clean, maintainable,</i> and <i>extensible</i> software that works.
	</p>
	<p class="${"svelte-13tcdad"}">If you&#39;re interested in my experiences, here&#39;s <a href="${"someresume"}" class="${"svelte-13tcdad"}">my resume</a>.
	</p>
	<p class="${"svelte-13tcdad"}">If you&#39;d like to get in touch, please <a href="${"mailto:adamkkim00@gmail.com"}" class="${"svelte-13tcdad"}">email me</a> at adamkkim00@gmail.com :)
	</p>
</section>`;
});
export { Routes as default, prerender };
