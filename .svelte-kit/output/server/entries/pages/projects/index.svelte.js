import { c as create_ssr_component } from "../../../chunks/index-4ef0e261.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-7kkluf{padding:30px}.project.svelte-7kkluf{margin-bottom:80px}h2.svelte-7kkluf{font-size:xx-large}span.svelte-7kkluf{font-size:large}p.svelte-7kkluf{font-size:large}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="${"svelte-7kkluf"}"><div class="${"project svelte-7kkluf"}"><h2 class="${"svelte-7kkluf"}">Personal Site
            <i><span class="${"svelte-7kkluf"}">\xB7 Svelte</span></i>
            <span class="${"svelte-7kkluf"}">\xB7 <a href="${"https://github.com/akdiam/personal-site"}">source</a></span></h2>
        <hr>
        <p class="${"svelte-7kkluf"}">You&#39;re looking at it! Originally, I implemented this site with vanilla JS, HTML, CSS. Having only developed sites with JavaScript UI frameworks before, I figured this would be a good learning opportunity.
        </p>
        <p class="${"svelte-7kkluf"}">As the site evolved and I began thinking about how to keep it maintainable, I began to miss some of the luxuries offered by React: state-driven development; a pre-configured Node server baked into CRA (create react app) to locally serve your site; component-based architectures.
        </p>
        <p class="${"svelte-7kkluf"}">I also didn&#39;t want to use CRA for this, as I felt it was probably overkill for a personal site. SvelteKit seemed like a fun &amp; lightweight tool that included all of the things mentioned above, so I tried it out. It&#39;s great.
        </p></div>
    <div class="${"project svelte-7kkluf"}"><h2 class="${"svelte-7kkluf"}">michigantime
            <i><span class="${"svelte-7kkluf"}">\xB7 React</span></i>
            <span class="${"svelte-7kkluf"}">\xB7 <a href="${"https://github.com/akdiam/michigantime"}">source</a> \xB7 <a href="${"https://michigantime.tech"}">live site</a></span></h2>
        <hr>
        <p class="${"svelte-7kkluf"}">michigantime is a schedule building tool for Michigan students. Building a schedule is as easy as clicking the courses you want and letting the site handle conflict resolutions.
        </p>
        <p class="${"svelte-7kkluf"}">It was used by 1000+ students during the Winter 2021 backpacking period. The following semester, the University released its own schedule building tool. Admittedly it was much better than michigantime, so I ended up using the school&#39;s tool for the rest of my time at Michigan.
        </p></div>
    <div class="${"project svelte-7kkluf"}"><h2 class="${"svelte-7kkluf"}">UMScheduler
            <i><span class="${"svelte-7kkluf"}">\xB7 React, Python, Node/Express</span></i>
            <span class="${"svelte-7kkluf"}">\xB7 <a href="${"https://github.com/akdiam/um-scheduler"}">source</a></span></h2>
        <hr>
        <p class="${"svelte-7kkluf"}">UMScheduler was &#39;v1&#39; of michigantime. Given a list of classes, UMScheduler generated all possible conflict-free schedules. This was my first experience creating any sort of website, so there were more than a few experience-breaking bugs. However, it was an excellent learning experience and set the foundation for michigantime.
        </p></div>
    <div class="${"project svelte-7kkluf"}"><h2 class="${"svelte-7kkluf"}">School Projects
            <i><span class="${"svelte-7kkluf"}">\xB7 C++, Go</span></i></h2>
        <hr>
        <p class="${"svelte-7kkluf"}">I can&#39;t publically show my code for these because of my school&#39;s policies. However, I spent a lot of time on some of these projects and wanted to include them here too.
        </p>
        <p class="${"svelte-7kkluf"}">Some cool ones include: A thread library implemented from scratch in C++, a remote filesystem implemented from scratch in C++, (more soon from distsys)...
        </p></div>
</section>`;
});
export { Projects as default };
