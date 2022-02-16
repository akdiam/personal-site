<script>
    export let elapsedTime;

    let minutes = ''
    let seconds = ''

    $: {
        const elapsedTimeInSeconds = elapsedTime / 1000
        let minutesNum = Math.floor(elapsedTimeInSeconds / 60)
        let secondsNum = Math.floor(elapsedTimeInSeconds % 60)

        minutes = ''
        seconds = ''
        minutes += minutesNum

        if (secondsNum < 10) {
            seconds = '0' + secondsNum
        } else {
            seconds += secondsNum
        }
    }
</script>

<span class="timer">    
    {minutes}:{seconds}
</span>
