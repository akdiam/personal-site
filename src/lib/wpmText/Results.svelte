<script>
    import ElapsedTime from './ElapsedTime.svelte';
    import { fade } from 'svelte/transition';

    export let netWpm;
    export let grossWpm;
    export let accuracy;
    export let totalTime;
    export let restartTest;
</script>

<div class="result-container" transition:fade="{{ duration:200 }}">
    <div class="data-container">
        <div class="result">
            <div class="result-title">
                Net WPM
            </div>
            <span class="result-data">{netWpm}</span>
        </div>
        <div class="result">
            <div class="result-title">
                Gross WPM
            </div>
            <span class="result-data">{grossWpm}</span>
        </div>
        <div class="result">
            <div class="result-title">
                Accuracy
            </div>
            <span class="result-data">{accuracy}%</span>
        </div>
        <div class="result">
            <div class="result-title">
                Time Spent
            </div>
            <span class="result-data">
                <ElapsedTime elapsedTime={totalTime} />
            </span>
        </div>
    </div>
    <div class="rhs">
        <div class="refresh-container">
            <img class="refresh" src="../../../static/svg/refresh.svg" alt="refresh" on:click={restartTest} />
        </div>
    </div>
</div>

<style>
    .result-container {
        width: auto;
        background-color: var(--card);
        border-radius: var(--border-radius);
        display: flex;
        color: var(--wpm-text)
    }

    .data-container {
        width: 80%;
        text-align: center;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-right: 50px;
        flex-wrap: wrap;
    }

    .rhs {
        align-items: center;
        justify-content: flex-end;
        display: flex;
        flex-direction: row;
        padding: 40px;
    }

    .refresh-container {
        height: 90px;
        width: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background-color: var(--card-secondary);
        border-radius: 50%;
    }

    .refresh {
        height: 70px;
        width: 70px;
        padding: 20px;
        transition: ease-in 100ms;
    }

    .refresh:hover {
        height: 75px;
        width: 75px;
        transition: ease-in 100ms;
        cursor: pointer;
    }

    @media screen and (max-width: 500px) {
        .data-container {
            padding-right: 20px;
        }
        
        .refresh-container {
            height: 30px;
            width: 30px;
            padding: 10px;
        }

        .refresh {
            height: 30px;
            width: 30px;
        }

        .refresh:hover {
            height: 33px;
            width: 33px;
        }
    }

    .result {
        padding: 20px;
    }

    .result-title {
        color: var(--color-secondary)
    }

    .result-data {
        font-size: 100px;
    }
</style>