<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Sidebar from '../lib/sidebar/Sidebar.svelte';
	import Spinner from '../lib/spinner/Spinner.svelte';
	import Hamburger from '../lib/hamburger/Hamburger.svelte';

	const LAST_PAGE = 'last_page';
	let current = null;
	let isSidebarOpen = false;

	onMount(async () => {
		await new Promise(res => setTimeout(res, 1500));
		const last_page = localStorage.getItem(LAST_PAGE);
		current = last_page === null ? 'home' : last_page;
	});

	const toggleActive = (event) => {
		current = event.target.id;
		localStorage.setItem(LAST_PAGE, current);
	}

	const toggleSidebar = () => {
		isSidebarOpen = !isSidebarOpen;
	}

	const closeSidebar = () => {
		isSidebarOpen = false;
	}
</script>

{#if current}
	<div in:fade="{{duration: 800}}">
		<!-- Sidebar -->
		<Sidebar current={current} toggleActive={toggleActive} isSidebarOpen={isSidebarOpen}/>

		<!-- Page content-->
		<div class="content">
			<div class="content-header	" id="home-header">
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
	.content {
		margin-left: 250px;
		padding: 0px 0px;
		height: 100%;
		flex: 1 0 auto;
		text-align: center;
	}

	.content-header {
		position: sticky;
		top: 0;
		background: rgb(54,54,54);
		color: white;
		padding: 3px 8px;
		z-index: 30;
		display: flex;
		flex-wrap: nowrap;
		align-items: center;
	}

	.content-header h2 {
		flex-grow: 1;
	}

	/* Cool CSS trick from https://itnext.io/how-to-make-a-fancy-inverted-border-radius-in-css-5db048a53f95 for inverted border radius on content headers */
	@media screen and (min-width: 850px) {
		.content-header::after {
			content: "";
			position: absolute;
			left: 0;
			background-color: rgba(161, 157, 157, 0);
			bottom: -50px;
			height: 50px;
			width: 25px;
			border-top-left-radius: 20px;
			box-shadow: 0 -25px 0 0 rgb(54,54,54); 
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
		color: white;
		padding: 25px;
	}
</style>
