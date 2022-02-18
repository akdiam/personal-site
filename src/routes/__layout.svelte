<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { theme } from '$lib/stores';
	import { page } from '$app/stores';
	import '../app.css';
	import Sidebar from '../lib/sidebar/Sidebar.svelte';
	import Spinner from '../lib/spinner/Spinner.svelte';
	import Hamburger from '../lib/hamburger/Hamburger.svelte';

	const THEME = 'theme';
	let isSidebarOpen = false;
	let current = null;
	let isLoading = true;

	onMount(async () => {
		const last_theme = localStorage.getItem(THEME);
		theme.set(last_theme === null ? 'light' : last_theme);
		await new Promise(res => setTimeout(() => isLoading = false, 400));
	});

	const toggleSidebar = () => {
		isSidebarOpen = !isSidebarOpen;
	}

	const closeSidebar = () => {
		isSidebarOpen = false;
	}

	$: {
		let curr_page = $page.url.pathname
		if (curr_page === '/') {
			current = 'home'
		} else {
			current = curr_page.replace('/', '')
		}
	}
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"> 
	<link rel="stylesheet" href={`theme/${$theme}.css`} />
	<title>Adam Kim</title>
</svelte:head>

{#if !isLoading}
	<div in:fade="{{duration: 800}}" class="background">
		<!-- Sidebar -->
		<Sidebar isSidebarOpen={isSidebarOpen} current={current}/>

		<!-- Page content-->
		<div class="content">
			<div class="content-header" id="home-header">
				<div class="hamburger">
					<Hamburger isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}></Hamburger>
				</div>
				<h2>{current}</h2>
			</div>
			<div class="text" on:click={closeSidebar}>
				<slot></slot>
			</div>
		</div>
	</div>
{:else}
	<Spinner />
{/if}

<style>
	.background {
		transition: background-color 0.3s;
		background-color: var(--color-background);
	}

	.content {
		margin-left: 250px;
		padding: 0px 0px;
		height: 100%;
		flex: 1 0 auto;
		text-align: center;
	}

	.content-header {
		transition: background-color 0.3s;
		position: sticky;
		top: 0;
		background: var(--color-primary);
		color: var(--text-primary);
		padding: 3px 8px;
		z-index: 30;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.shadow {
		-webkit-box-shadow: 0 3px 5px var(--header-shadow);
		-moz-box-shadow: 0 3px 5px var(--header-shadow);
		box-shadow: 0 3px 5px var(--header-shadow);
	}

	.content-header h2 {
		transition: background-color 0.3s;
		flex-grow: 1;
		color: var(--text-primary);
	}

	/* Cool CSS trick from https://itnext.io/how-to-make-a-fancy-inverted-border-radius-in-css-5db048a53f95 for inverted border radius on content headers */
	@media screen and (min-width: 850px) {
		.content-header::after {
			transition: background-color 0.3s;
			transition: box-shadow 0.3s;
			content: "";
			position: absolute;
			left: 0;
			background-color: var(--color-primary-transparent);
			bottom: -50px;
			height: 50px;
			width: 25px;
			border-top-left-radius: 20px;
			box-shadow: 0 -25px 0 0 var(--color-primary); 
		}

		.hamburger {
			display: none;
		}
	}

	@media screen and (max-width: 850px) {
		.content {
			margin: auto;
			padding: 0px 0px;
			height: 100%;
			flex: 1 0 auto;
			text-align: center;
		}
	}

	.text {
		transition: background-color 0.3s;
		color: var(--text-primary);
		padding: 25px;
	}
</style>
