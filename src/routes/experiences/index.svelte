<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<section in:fade>
	<p>Amazon &#183 Summer 2021 &#183 Internship</p>
	<p>Invoice Maker LLC &#183 Winter 2021 &#183 Internship</p>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		text-align: center;
	}
	p {
		font-size: xx-large;
	}
</style>