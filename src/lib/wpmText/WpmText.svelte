<script>
    export let currentWordIndex
    export let currentCharIndex
    export let allTextArray
</script>

{#each allTextArray as word, i}
    <div class="word">
        {#each word as charObj, j}
            {#if i === currentWordIndex && j === currentCharIndex && charObj.char !== ' '}
                {#if charObj.status === 'correct'}
                    <span class="char correct blink-before">{charObj.char}</span>
                {:else if charObj.status === 'incorrect'}
                    <span class="char incorrect blink-before">{charObj.char}</span>
                {:else if charObj.status === 'unfinished'}
                    <span class="char unfinished blink-before">{charObj.char}</span>
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
        {/each}
    </div>
{/each}

<style>
    .word {
        margin: 0.27rem;
        border-bottom: 2px solid transparent;
        line-height: 2rem;
    }

    .char {
        border-bottom-style: solid;
        border-bottom-width: 0.05em;
        border-bottom-color: transparent;
        display: inline-block;
    }

    span {
        font-size: 30px;   
    }

    .correct {
        color: var(--correct);
    }

    .incorrect {
        color: var(--incorrect);
    }

    .unfinished {
        color: var(--unfinished);
    }

    .blink-before::before {
        content: "";
        width: 3px;
        height: 35px;
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