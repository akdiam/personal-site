<!-- Spinner from https://loading.io/css/ -->
<script>
    import { fade } from 'svelte/transition';
</script>

<div class="center" in:fade>
    <p>Loading...</p>
    <div class="lds-ripple"><div></div></div>
</div>

<style>
    .center {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: var(--color-secondary);
    }
    
    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ripple div {
        position: absolute;
        border: 4px solid var(--color-secondary);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }
</style>