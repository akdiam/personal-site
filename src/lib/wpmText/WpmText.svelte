<script>
    export let currentWordIndex
    export let currentCharIndex
    export let allTextArray
</script>

{#each allTextArray as word, i}
    <div class="word">
        {#each word as charObj, j}
            {#if i === currentWordIndex && j === currentCharIndex}
                {#if charObj.char === ' '}
                    <span class="blink-before-space">&nbsp;</span>
                {:else}
                    <span class="char unfinished blink-before">{charObj.char}</span>
                {/if}
            {:else}
                {#if charObj.char === ' '}
                    {#if charObj.status === 'incorrect'}
                        <span class="char incorrect-space">&nbsp;</span>
                    {:else}
                        <span class="char">&nbsp;</span>
                    {/if}
                {:else}
                    {#if charObj.status === 'correct'}
                        <span class="char correct">{charObj.char}</span>
                    {:else if charObj.status === 'incorrect'}
                        <span class="char incorrect">{charObj.char}</span>
                    {:else if charObj.status === 'unfinished'}
                        <span class="char unfinished">{charObj.char}</span>
                    {/if}
                {/if}
            {/if}
        {/each}
    </div>
{/each}

<style>
    .word {
        margin: 0.27rem;
        border-bottom: 2px solid transparent;
        line-height: 2.2rem;
    }

    .char {
        border-bottom-style: solid;
        border-bottom-width: 0.05em;
        border-bottom-color: transparent;
        display: inline-block;
        font-weight: 900;
    }

    span {
        font-size: 35px;   
    }

    .correct {
        color: var(--correct);
    }

    .incorrect {
        color: var(--incorrect);
    }

    .incorrect-space {
        background-color: var(--incorrect-transparent);
    }

    .unfinished {
        color: var(--unfinished);
    }

    :global(.blink-before::before) {
        content: "";
        width: 3px;
        background: #ffffff;
        position: absolute;
        border-radius: 5px;
    }

    .blink-before-space::before {
        content: "\00a0 ";
        width: 3px;
        height: 40px;
        background: #ffffff;
        position: absolute;
        border-radius: 5px;
        animation: cursor-blink 1s steps(2) infinite;
    }

    @keyframes cursor-blink {
        0% {
            opacity: 0.5;
        }
    }
</style>