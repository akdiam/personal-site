<script lang="ts">
	export let current;
	export let toggleActive;

	const gotoLinkedin = () => {
    	window.open('https://www.linkedin.com/in/adamkim23/', '_blank');
	}

	const gotoGithub = () => {
		window.open('https://github.com/akdiam', '_blank');
	}
</script>

<div class="sidebar">
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

	/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
	div.content {
		margin-left: 250px;
		padding: 0px 0px;
		height: 100%;
		flex: 1 0 auto;
	}

	.content .header {
		position: sticky;
		top: 0;
		background: #363636;
		color: white;
		padding: 3px 8px;
		z-index: 10;
		text-align: center;
		/*box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);*/
	}

	/* Cool CSS trick from https://itnext.io/how-to-make-a-fancy-inverted-border-radius-in-css-5db048a53f95 for inverted border radius on content headers */
	.content .header::after {
		content: "";
		position: absolute;
		left: 0;
		background-color: rgba(161, 157, 157, 0);
		bottom: -50px;
		height: 50px;
		width: 25px;
		border-top-left-radius: 20px;
		box-shadow: 0 -25px 0 0 #363636; 
	}

	.content .header::before {
		content: "";
		position: absolute;
		left: 0;
		background-color: rgba(255, 17, 0, 0);
		bottom: 61px;
		height: 50px;
		width: 25px;
		border-bottom-left-radius: 20px;
		box-shadow: 0 25px 0 0 #363636; 
	}

	/* On screens that are less than 700px wide, make the sidebar into a topbar */
	@media screen and (max-width: 850px) {
		.sidebar {
		width: 100%;
		height: auto;
		position: fixed;
		top: 0;
		}
		.sidebar a {float: left;}
		div.content {margin-left: 0;}
	}
	
	/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
	@media screen and (max-width: 400px) {
		.sidebar a {
		text-align: center;
		float: none;
		}
	}

	.user_info {
		display: inline-block;
		width: 150px;
		height: 150px;
		border-radius: 50%;
	
		background-repeat: no-repeat;
		background-position: center center;
		background-size: cover;

		background-image: url(../img/headshot.jpeg);
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
