<script>
    import ElapsedTime from "./ElapsedTime.svelte";

    export let netWpm;
    export let grossWpm;
    export let totalTime;
    export let isRaceOngoing;
    export let restartTest;
</script>

<div class="stats">
    <span class="wpm">
        <div class="net">
            <div class="title">
                Net WPM
            </div>
            {netWpm}
        </div>
        <div class="gross">
            <div class="title">
                Gross WPM
            </div>
            {grossWpm}
        </div>
    </span>
    <span class="time">
        <div class="refresh-container">
            <img class="refresh" src="svg/refresh.svg" alt="refresh" on:click={restartTest} />
        </div>
        <div class="elapsed-time">
            <ElapsedTime elapsedTime={totalTime} />
        </div>
    </span>
</div>

<style>
    .stats {
        font-size: 25px;
        color: var(--wpm-text);
        width: auto;
        background-color: var(--card);
        border-radius: var(--border-radius);
        margin: 20px;
        padding: 15px;
        display: flex;
        z-index: 0;
    }

    .wpm {
        width: 95%;
        text-align: start;
        position: relative;
        line-height: 30px;
        display: flex;
        flex-direction: row;
    }

    .net, .gross {
        width: 130px;
        margin-right: 20px;
        background-color: var(--card-secondary);
        padding: 7px;
        border-radius: var(--border-radius);
        position: relative;
        display: block;
        text-align: center;
        font-size: 40px;
    }

    .title {
        font-size: small;
        color: var(--color-secondary);
    }

    .time {
        align-self: flex-end;
        display: flex;
        flex-direction: row
    }

    .refresh-container {
        height: 70px;
        width: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        background-color: var(--card-secondary);
        border-radius: 50%;
    }

    .refresh {
        height: 50px;
        width: 50px;
        padding: 20px;
        transition: ease-in 100ms;
    }

    .refresh:hover {
        transform: rotate(90deg);
        transition: all 0.2s;
        cursor: pointer;
    }

    .elapsed-time {
        background-color: var(--card-secondary);
        padding: 20px;
        line-height: 45px;
        min-width: 100px;
        border-radius: 10px;
        margin-left: 20px;
        font-size: 30px;
    }

    @media screen and (max-width: 950px) {
        .gross {
            display: none;
        }

        .elapsed-time {
            display: none;
        }
    }
</style>