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
  default: () => Projects
});
var import_index_08869495 = __toModule(require("../../../chunks/index-08869495.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-63v13t{padding:30px}.project.svelte-63v13t{margin-bottom:80px}h2.svelte-63v13t{font-size:xx-large}span.svelte-63v13t{font-size:large}p.svelte-63v13t{font-size:large}",
  map: null
};
const Projects = (0, import_index_08869495.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-63v13t"}"><div class="${"project svelte-63v13t"}"><h2 class="${"svelte-63v13t"}">Personal Site
            <i><span class="${"svelte-63v13t"}">\xB7 Svelte</span></i>
            <span class="${"svelte-63v13t"}">\xB7 <a href="${"https://github.com/akdiam/personal-site"}" class="${"svelte-63v13t"}">source</a></span></h2>
        <hr>
        <p class="${"svelte-63v13t"}">You&#39;re looking at it! Originally, I implemented this site with vanilla JS, HTML, CSS. Having only developed sites with JavaScript UI frameworks before, I figured this would be a good learning opportunity.
        </p>
        <p class="${"svelte-63v13t"}">As the site evolved and I began thinking about how to keep it maintainable, I began to miss some of the luxuries offered by React: state-driven development; a pre-configured Node server baked into CRA (create react app) to locally serve your site; component-based architectures.
        </p>
        <p class="${"svelte-63v13t"}">I also didn&#39;t want to use CRA for this, as I felt it was probably overkill for a personal site. SvelteKit seemed like a fun &amp; lightweight tool that included all of the things mentioned above, so I tried it out. It&#39;s great.
        </p></div>
    <div class="${"project svelte-63v13t"}"><h2 class="${"svelte-63v13t"}">michigantime
            <i><span class="${"svelte-63v13t"}">\xB7 React</span></i>
            <span class="${"svelte-63v13t"}">\xB7 <a href="${"https://github.com/akdiam/michigantime"}" class="${"svelte-63v13t"}">source</a> \xB7 <a href="${"https://michigantime.tech"}" class="${"svelte-63v13t"}">live site</a></span></h2>
        <hr>
        <p class="${"svelte-63v13t"}">michigantime is a schedule building tool for Michigan students. Building a schedule is as easy as clicking the courses you want and letting the site handle conflict resolutions.
        </p>
        <p class="${"svelte-63v13t"}">It was used by 1000+ students during the Winter 2021 backpacking period. The following semester, the University released its own schedule building tool. Admittedly it was much better than michigantime, so I ended up using the school&#39;s tool for the rest of my time at Michigan.
        </p></div>
    <div class="${"project svelte-63v13t"}"><h2 class="${"svelte-63v13t"}">UMScheduler
            <i><span class="${"svelte-63v13t"}">\xB7 React, Python, Node/Express</span></i>
            <span class="${"svelte-63v13t"}">\xB7 <a href="${"https://github.com/akdiam/um-scheduler"}" class="${"svelte-63v13t"}">source</a></span></h2>
        <hr>
        <p class="${"svelte-63v13t"}">UMScheduler was &#39;v1&#39; of michigantime. Given a list of classes, UMScheduler generated all possible conflict-free schedules. This was my first experience creating any sort of website, so there were more than a few experience-breaking bugs. However, it was an excellent learning experience and set the foundation for michigantime.
        </p></div>
    <div class="${"project svelte-63v13t"}"><h2 class="${"svelte-63v13t"}">School Projects
            <i><span class="${"svelte-63v13t"}">\xB7 C++, Go</span></i></h2>
        <hr>
        <p class="${"svelte-63v13t"}">I can&#39;t publically show my code for these because of my school&#39;s policies. However, I spent a lot of time on some of these projects and wanted to include them here too.
        </p>
        <p class="${"svelte-63v13t"}">Some cool ones include: A thread library implemented from scratch in C++, a remote filesystem implemented from scratch in C++, (more soon from distsys)...
        </p></div>
</section>`;
});