<script lang="ts">
	import { theme } from '$lib/stores';
	import ActionRow from './ActionRow.svelte';
	export let isSidebarOpen;
	export let current;

	const gotoLinkedin = () => {
    	window.open('https://www.linkedin.com/in/adamkim23/', '_blank');
	}

	const gotoGithub = () => {
		window.open('https://github.com/akdiam', '_blank');
	}
	
	const togglePalette = () => {
		const nextTheme = $theme === 'dark' ? 'light' : 'dark';
		theme.set(nextTheme);
		localStorage.setItem('theme', nextTheme);
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={`theme/${$theme}.css`} />
</svelte:head>

<div class="sidebar" id="sidebar" class:expanded={isSidebarOpen}>
	<div class="sidebar_links">
		<a id="home" href="/" class:active={current === 'home'}>home</a>
		<a id="experiences" href="/experiences" class:active={current === 'experiences'}>experiences</a>
		<a id="projects" href="/projects" class:active={current === 'projects'}>projects</a>
		<a id="wpm" href="/wpm" class:active={current === 'wpm'}>wpm</a>
	</div>
	<div class="sidebar_footer">
		<div class="currently_playing"></div>
		<ActionRow />
		<div class="user_info_container">
			<div class="user_info"></div>
		</div>
		<!--<div class="icons">
			<img src="svg/linkedin.svg" alt="linkedin icon" height="40px" style="margin:10px" on:click={gotoLinkedin}>
			<img src="svg/github.svg" alt="github icon" height="40px" style="margin:10px" on:click={gotoGithub}>
		</div>-->
		<hr>
		<div class="footer"><span>Adam Kim - 2022</span></div>
	</div>
</div>

<style>
	/* The side navigation menu */
	.sidebar {
		transition: background-color 0.3s;
		margin: 0;
		padding: 0;
		width: 250px;
		background-color: var(--color-primary);
		position: fixed;
		height: 100%; 
		overflow: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.expanded {
		transition: ease-out 200ms;
		transition: background-color 0.3s;
		width: 250px !important;
		z-index: 20;
	}
	
	.sidebar_links {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		overflow: auto;
		margin-top: 100px;
	}
	
	/* Sidebar links */
	.sidebar .sidebar_links a {
		display: block;
		color: var(--text-primary);
		padding: 30px;
		text-decoration: none;
		height: 20px;
		transition: ease-in 0.15s !important;
	}
	
	/* Active/current link */
	.sidebar .sidebar_links a.active {
		transition: ease-in-out 0.2s;
		transition: background-color 0.3s;
		background-color: var(--color-secondary);
		color: var(--text-secondary);
		outline: none;
	}
	
	/* Links on mouse-over */
	.sidebar .sidebar_links a:hover:not(.active) {
		transition: background-color 0.3s;
		background-color: var(--color-secondary-hover);
	}

	.sidebar .sidebar_links a:hover {
		transition: ease-in 0.15s;
		font-size: 120%;
	}

	.sidebar_footer {
		position: absolute;
		text-align: center;
		width: 250px;
		flex-shrink: 0;
		bottom: 0;
		padding-bottom: 20px;
	}

	.footer {
		transition: background-color 0.3s;
		color: var(--footer);
		text-align: center;
		padding-top: 10px;
	}

	hr {
		background: var(--footer);
		background-color: var(--footer);
		height: 1px;
		border: 0;
	}

	@media screen and (max-height: 780px) and (max-width: 850px) {
		.user_info_container {
			width: 120px !important;
			height: 120px !important;
		}

		.user_info {
			width: 100px !important;
			height: 100px !important;
		}

		.user_info:hover {
			width: 110px !important;
			height: 110px !important;
		}
	}

	@media screen and (max-height: 780px) {
		.user_info_container {
			display: none !important;
		}
		
		.user_info {
			display: none !important;
		}
	}

	/* On screens that are less than 850px wide, hide the sidebar */
	@media screen and (max-width: 850px) {
		.sidebar {
			transition: background-color 0.3s;
			top: 0;
			width: 0;
			transition: 0.5s;
		}

		.sidebar a {float: left;}
	}

	.user_info_container {
		width: 150px;
		height: 150px;
		margin-bottom: 20px;
		display: inline-block;
	}

	.user_info {
		transition: background-color 0.3s;
		transition: ease-in .15s;
		display: inline-block;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		align-items: center;
	
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;

		background-image: url(../../../static/img/headshot.jpeg);
		border: 2px solid var(--color-secondary);
	}

	.currently_playing {
		padding-bottom: 20px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.sidebar .currently_playing a {
		height:auto;
	}

	.sidebar .currently_playing a:link {
		color:#98d9ff
	}

	.sidebar .currently_playing a:visited {
		color:rgb(230, 130, 255)
	}
</style>
