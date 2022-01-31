<script>
    import { fade } from 'svelte/transition';
</script>

<section in:fade>
    <div class="project">
        <h2>
            Personal Site
            <i><span>&#183 Svelte</span></i>
            <span>&#183 <a href="https://github.com/akdiam/personal-site">source</a></span>
        </h2>
        <hr />
        <p>
            You're looking at it! Originally, I implemented this site with vanilla JS, HTML, CSS. Having only developed sites with JavaScript UI frameworks before, I figured this would be a good learning opportunity.
        </p>
        <p>
            As the site evolved and I began thinking about how to keep it maintainable, I began to miss some of the luxuries offered by React: state-driven development; a pre-configured Node server baked into CRA (create react app) to locally serve your site; component-based architectures.
        </p>
        <p>
            I also didn't want to use CRA for this, as I felt it was probably overkill for a personal site. SvelteKit seemed like a fun & lightweight tool that included all of the things mentioned above, so I tried it out. It's great.
        </p>
    </div>
    <div class="project">
        <h2>
            michigantime
            <i><span>&#183 React</span></i>
            <span>&#183 <a href="https://github.com/akdiam/michigantime">source</a> &#183 <a href="https://michigantime.tech">live site</a></span>
        </h2>
        <hr />
        <p>
            michigantime is a schedule building tool for Michigan students. Building a schedule is as easy as clicking the courses you want and letting the site handle conflict resolutions.
        </p>
        <p>
            It was used by 1000+ students during the Winter 2021 backpacking period. The following semester, the University released its own schedule building tool. Admittedly it was much better than michigantime, so I ended up using the school's tool for the rest of my time at Michigan.
        </p>
    </div>
    <div class="project">
        <h2>
            UMScheduler
            <i><span>&#183 React, Python, Node/Express</span></i>
            <span>&#183 <a href="https://github.com/akdiam/um-scheduler">source</a></span>
        </h2>
        <hr />
        <p>
            UMScheduler was 'v1' of michigantime. Given a list of classes, UMScheduler generated all possible conflict-free schedules. This was my first experience creating any sort of website, so there were more than a few experience-breaking bugs. However, it was an excellent learning experience and set the foundation for michigantime.
        </p>
    </div>
    <div class="project">
        <h2>
            School Projects
            <i><span>&#183 C++, Go</span></i>
        </h2>
        <hr />
        <p>
            I can't publically show my code for these because of my school's policies. However, I spent a lot of time on some of these projects and wanted to include them here too.
        </p>
        <p>
            Some cool ones include: A thread library implemented from scratch in C++, a remote filesystem implemented from scratch in C++, (more soon from distsys)...
        </p>
    </div>
</section>

<style>
    section {
        padding: 30px;
    }
    .project {
        margin-bottom: 80px;
    }
    h2 {
        font-size: xx-large;
    }
    span {
        font-size: large;
    }
    p {
        font-size: large;
    }
</style>