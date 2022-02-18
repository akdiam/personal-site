<script>
    import ElapsedTime from "./ElapsedTime.svelte";

    export let netWpm;
    export let grossWpm;
    export let totalTime;
    export let isRaceOngoing;
    export let restartTest;

    const openWpmHelp = () => {
        window.open('https://www.speedtypingonline.com/typing-equations', '_blank');
    }

    const enterRestartTest = (e) => {
        if (e.key === "Enter") {
            restartTest()
            document.getElementById('blur').focus()
        }
    }
</script>

<div class="stats">
    <span class="wpm">
        <div class="net">
            <div class="title">
                net wpm
            </div>
            {netWpm}
        </div>
        <div class="gross">
            <div class="title">
                gross wpm
            </div>
            {grossWpm}
        </div>
        <div class="help-container" on:click={openWpmHelp}>
            <img class="help" src="svg/question-circle.svg" alt="question-circle" />
        </div>
    </span>
    <span class="time">
        <div class="refresh-container" on:click={restartTest} on:keydown={enterRestartTest} tabindex="2">
            <img class="refresh"
                src="svg/refresh.svg" 
                alt="refresh" 
            />
            <span class="refresh-tooltip">restart</span>
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

    .help-container {
        background-color: var(--card-secondary);
        height: 20px;
        width: 20px;
        border-radius: 50%;
        position: relative;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: auto 0;
    }

    .help-container:hover {
        cursor: pointer;
    }

    .help {
        justify-content: center;
    }

    @media screen and (max-width: 420px) {
        .help-container {
            display: none;
        }
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
        position: relative;
        outline: none;
    }

    .refresh-container .refresh-tooltip {
        visibility: hidden;
        background-color: var(--card-secondary);
        color: var(--color-secondary);
        text-align: center;
        padding: 10px;
        border-radius: 6px;
        
        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
        top: 22px;
        right: 108%;
    }

    .refresh-container:hover .refresh-tooltip {
        visibility: visible;
    }

    .refresh-container:focus .refresh-tooltip {
        visibility: visible;
    }

    .refresh {
        height: 50px;
        width: 50px;
        padding: 20px;
        transition: ease-in 100ms;
    }

    .refresh-container:hover .refresh {
        transform: rotate(90deg);
        transition: all 0.2s;
        cursor: pointer;
    }

    .refresh-container:focus .refresh {
        transform: rotate(90deg);
        transition: all 0.2s;
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

    @media screen and (max-width: 990px) {
        .gross {
            display: none;
        }

        .elapsed-time {
            display: none;
        }
    }
</style>