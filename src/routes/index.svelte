<script context="module" lang="ts">
	import { fade } from 'svelte/transition';
</script>

<section in:fade>
	<p>
		Hi! I'm Adam.
	</p>
	<p>
		I'm a <strong>senior</strong> at the University of Michigan studying <strong>computer science</strong>.
	</p>
	<p>
		I'm interested in <strong>modern web development</strong>.
	</p>
	<p>
		My goals are to build <i>clean, maintainable,</i> and <i>extensible</i> software that works.
	</p>
	<p>
		If you're interested in my experiences, here's <a href="/resume">my resume</a>.
	</p>
	<p>
		If you'd like to get in touch, please <a href="mailto:adamkkim00@gmail.com">email me</a> at adamkkim00@gmail.com :)
	</p>
</section>

<style>
	p {
		font-size: xx-large;
	}
</style>
