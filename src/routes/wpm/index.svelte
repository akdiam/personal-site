<script>
    import { fade } from 'svelte/transition';
    import { validTextChars, stringToArrays, calcCorrectnessOfUserText, calcAllWpm } from '../../js/wpm';
    import WpmText from '$lib/wpmText/WpmText.svelte';
    import StatBar from '$lib/wpmText/StatBar.svelte';
    import Results from '$lib/wpmText/Results.svelte';

    const text = `To calculate Net WPM, take your gross WPM result and subtract the amount of errors you left in per minute, also known as the error rate. To calculate error rate, simply divide the number of errors by the time you typed for in minutes.`
    //const text = 'hi'
    const unfinishedTextRaw = text
    const WPM_INTERVAL = 1000

    let isRaceDone = false
    let isRaceOngoing = false

    let currentWordIndex = 0
    let currentCharIndex = 0

    let allTextArray = stringToArrays(unfinishedTextRaw)

    let wpmInterval;
    let grossWpm = 0;
    let netWpm = 0;
    let accuracy = 0;

    let totalTime = 0;
    let hasUserCompletedRace = false;

    const calcRunningCorrectness = (e) => {
        if (!isRaceDone && validTextChars.includes(e.key)) {
            if (!isRaceOngoing) {
                isRaceOngoing = true
                startRunningCalcWpm()
            }

            const res = calcCorrectnessOfUserText(currentWordIndex, currentCharIndex, allTextArray, e.key)
            allTextArray = res.allTextArray
            if (res.currentWordIndex === allTextArray.length) {
                isRaceDone = true
                isRaceOngoing = false
                hasUserCompletedRace = true
                clearInterval(wpmInterval)
            } else {
                currentWordIndex = res.currentWordIndex
                currentCharIndex = res.currentCharIndex
            }
        }
    }

    const calcWpm = () => {
        const wpmObj = calcAllWpm(allTextArray, totalTime)
        grossWpm = wpmObj.grossWpm
        netWpm = wpmObj.netWpm
        accuracy = wpmObj.accuracy
    }

    const startRunningCalcWpm = () => {
        totalTime = 0
        wpmInterval = setInterval(() => {
            totalTime += WPM_INTERVAL
            calcWpm()
        }, WPM_INTERVAL)
    }

    const restartTest = () => {
        clearInterval(wpmInterval)
        grossWpm = 0
        netWpm = 0
        currentWordIndex = 0
        currentCharIndex = 0
        isRaceDone = false
        isRaceOngoing = false
        hasUserCompletedRace = false
        allTextArray = stringToArrays(unfinishedTextRaw)
        totalTime = 0
    }
</script>

<section in:fade>
    {#if !hasUserCompletedRace}
        <StatBar
            netWpm={netWpm}
            grossWpm={grossWpm}
            totalTime={totalTime}
            isRaceOngoing={isRaceOngoing}
            restartTest={restartTest}
        />
        <div class="blur" tabindex=0 on:keydown={calcRunningCorrectness}>
            <div class="racetext" id="racetext" in:fade>
                <WpmText 
                    currentWordIndex={currentWordIndex} 
                    currentCharIndex={currentCharIndex}
                    allTextArray={allTextArray}
                />
            </div>
        </div>
        <div class="helper-text" in:fade>
            <span><i>Click the above blurred text to focus. Once focused, begin typing to start the test.</i></span>
        </div>
    {:else}
        <Results 
            netWpm={netWpm}
            grossWpm={grossWpm}
            accuracy={accuracy}
            totalTime={totalTime}
            restartTest={restartTest}
        />
    {/if}
</section>

<style>
    section {
        outline: 0;
        height: 100%;
        cursor:default;
        overflow-x: hidden;
        border-radius: var(--border-radius);
    }

    .blur {
        filter: blur(8px);
        padding: 20px;
    }

    .blur:focus {
        filter: none;
        outline: 0;
    }

    .blur:focus .racetext {
        border: 2px solid var(--color-secondary);
    }

    .racetext {
        transition: filter 100ms linear ease-out;
        padding: 20px;
        font-size: 0;
        border-radius: var(--border-radius);

        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        user-select: none;
        background-color: var(--card);
    }

    .racetext:focus {
        border: none;
    }

    .racetext:hover {
        cursor:pointer;
    }

    .helper-text {
        padding-top: 20px;
        color: var(--text-primary)
    }
</style>