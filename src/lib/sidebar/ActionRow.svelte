<script>
    import { theme } from '$lib/stores';
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

<div class="actions">
    <div class="action" on:click={gotoLinkedin}>
        <img src="svg/linkedin.svg" alt="linkedin icon" height="30">
    </div>
    <div class="action middle" on:click={gotoGithub}>
        <img src="svg/github.svg" alt="github icon" height="30">
    </div>
    <div class="action action-theme" on:click={togglePalette}>
    </div>
</div>

<style>
    .actions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px 10px 30px;
    }

    @media screen and (min-height: 780px) {
        .actions {
            padding-bottom: 0px;
        }

        .middle {
            margin-bottom: 45px;
        }
    }

    .action {
        height: 55px;
        width: 55px;
        background-color: var(--button-background);
        border-radius: 50%;
        border: 1.2px solid var(--color-secondary);
        text-align: center;
        display: flex;
        justify-content: center;
        transition: ease-in-out 0.1s;
    }

    .action:hover {
        cursor: pointer;
    }

    .action:hover img {
        height: 34px;
        width: 34px;
        transition: ease-in-out 0.1s;
    }

    .action img {
        transition: ease-in-out 0.1s;
    }

    img {
        align-self: center;
        vertical-align: center;
    }

    .action-theme {
        background: linear-gradient( -45deg, var(--other-primary), var(--other-primary) 49%, var(--color-secondary) 49%, var(--color-secondary) 51%, var(--other-background) 51% ); 
        transition: all 0.2s ease-in-out 0s;
    }

    .action-theme:hover {
        transition: all 0.2s ease-in-out 0s;
        transform: rotate(90deg);
    }
</style>