<script lang="ts">
	export let current;
	export let toggleActive;
	export let isSidebarOpen;

	const gotoLinkedin = () => {
    	window.open('https://www.linkedin.com/in/adamkim23/', '_blank');
	}

	const gotoGithub = () => {
		window.open('https://github.com/akdiam', '_blank');
	}
</script>

<div class="sidebar" id="sidebar" class:expanded={isSidebarOpen}>
	<div class="sidebar_links">
		<a id="home" href="/" class:active={current === 'home'} on:click={toggleActive}>home</a>
		<a id="experiences" href="/experiences" class:active={current === 'experiences'} on:click={toggleActive}>experiences</a>
		<a id="projects" href="/projects" class:active={current === 'projects'} on:click={toggleActive}>projects</a>
		<a id="etc" href="/etc" class:active={current === 'etc'} on:click={toggleActive}>etc</a>
	</div>
	<div class="sidebar_footer">
		<div class="myname"><span style="color:rgb(138, 138, 138)">adam kim</span></div>
		<div class="currently_playing"></div>
		<div class="user_info"></div>
		<div class="icons">
			<img src="svg/linkedin.svg" alt="linkedin icon" height="40px" style="margin:10px" on:click={gotoLinkedin}>
			<img src="svg/github.svg" alt="github icon" height="40px" style="margin:10px" on:click={gotoGithub}>
		</div>
		<div class="footer"><span style="color:rgb(138, 138, 138)">2022</span></div>
	</div>
</div>

<style>
	/* The side navigation menu */
	.sidebar {
		margin: 0;
		padding: 0;
		width: 250px;
		background-color: rgb(54,54,54);
		position: fixed;
		min-height: 100%; 
		overflow: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
	}

	.expanded {
		transition: ease-out 200ms;
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
		color: white;
		padding: 30px;
		text-decoration: none;
		height: 20px;
	}
	
	/* Active/current link */
	.sidebar .sidebar_links a.active {
		background-color: #fdef2fe8;
		color: black;
		outline: none;
	}
	
	/* Links on mouse-over */
	.sidebar .sidebar_links a:hover:not(.active) {
		background-color: #555;
		color: white;
	}

	.sidebar .sidebar_links a:hover {
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

	/* On screens that are less than 850px wide, hide the sidebar */
	@media screen and (max-width: 850px) {
		.sidebar {
			height: auto;
			position: fixed;
			top: 0;
			width: 0;
			transition: 0.5s;
		}
		.sidebar a {float: left;}
	}

	.user_info {
		display: inline-block;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;

		background-image: url(../../../static/img/headshot.jpeg);
		border: 2px solid grey;
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
	
	.icons {
		padding: 20px;
	}

	.icons img {
		cursor: pointer;
	}
</style>
