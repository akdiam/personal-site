<script lang="ts">
	import '../app.css';
	import Sidebar from '../lib/sidebar/Sidebar.svelte';

	let current = 'home'

	const toggleActive = (event) => {
		current = event.target.id;
	}
</script>

<!-- Sidebar -->
<Sidebar current={current} toggleActive={toggleActive}/>

<!-- Page content-->
<div class="content">
	<div class="content-header" id="home-header">
		<h2>{current}</h2>
	</div>
	<div class="text">
		<slot></slot>
	</div>
</div>

<style>
	/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
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
		z-index: 10;
	}

	/* Cool CSS trick from https://itnext.io/how-to-make-a-fancy-inverted-border-radius-in-css-5db048a53f95 for inverted border radius on content headers */
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

	.text {
		color: white;
		padding: 25px;
	}
</style>
