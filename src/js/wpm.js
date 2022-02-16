const compareArrays = (a, b, isLastWord) => {
    if (isLastWord) {
        return a.length === b.length && a.every((v, i) => v === b[i]);
    } else {
        return a.length === b.length + 1 && a.every((v, i) => {
            if (i == a.length-1) {
                return v === ' ';
            } else {
                return v === b[i];
            }
        });
    }
}

export const validTextChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                               "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                               "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", 
                               ",", ".", "!", "?", "\"", " ", "/", "\\", "'", "&", "(", ")", "+", "-", "Backspace"]

// returns array of array of objects
export const stringToArrays = (fullText) => {
    let metaWordArray = []
    let wordArray = fullText.split(' ')

    let i = 0;
    for (const word of wordArray) {
        const chars = word.split('')
        let charArray = []

        for (const char of chars) {
            let charData = {
                char: char,
                status: 'unfinished'
            }
            charArray.push(charData)
        }

        if (i !== wordArray.length - 1) {
            charArray.push({ char: ' ', status: 'unfinished' })
        }

        metaWordArray.push(charArray)
        i++
    }

    return metaWordArray
}

/**
 * 
 * @param {Number} currentCharIndex 
 * @param {Number} currentWordIndex 
 * @param {Array} allTextArray
 * @param {String} key 
 * @returns 
 */
export const calcCorrectnessOfUserText = (currentWordIndex, currentCharIndex, allTextArray, key) => {
    if (validTextChars.includes(key)) {
        // console.log(key)
        if (key === 'Backspace') {
            // Decrement char position in current word
            if (currentCharIndex !== 0) {
                currentCharIndex--
            // Otherwise, go to previous word (if currentWordIndex is not the first word in the full text)
            } else if (currentWordIndex !== 0) {
                currentWordIndex--
                currentCharIndex = allTextArray[currentWordIndex].length - 1
            }

            allTextArray[currentWordIndex][currentCharIndex].status = 'unfinished'
        } else {
            if (key === allTextArray[currentWordIndex][currentCharIndex].char) {
                allTextArray[currentWordIndex][currentCharIndex].status = 'correct'
            } else {
                allTextArray[currentWordIndex][currentCharIndex].status = 'incorrect'
            }

            // If the last char of the current word was typed
            if (currentCharIndex === allTextArray[currentWordIndex].length - 1) {
                currentWordIndex++
                currentCharIndex = 0
            // Otherwise, just go to the next char of the current word
            } else {
                currentCharIndex++
            }
        }
    }

    return {
        currentWordIndex: currentWordIndex,
        currentCharIndex: currentCharIndex,
        allTextArray: allTextArray
    }
}

// https://www.speedtypingonline.com/typing-equations
export const calcAllWpm = (allTextArray, totalTime) => {
    let allTypedEntries = 0
    let allIncorrectEntries = 0
    let allCorrectEntries = 0
    for (const word of allTextArray) {
        for (const char of word) {
            if (char.status !== 'unfinished') {
                allTypedEntries++
            } 

            if (char.status === 'incorrect') {
                allIncorrectEntries++
            }

            if (char.status === 'correct') {
                allCorrectEntries++
            }
        }
    }

    // Calculate time elapsed in minutes
    let timeInMin = (totalTime / 1000) / 60

    // Calculate gross WPM
    let grossWpm = (allTypedEntries / 5) / timeInMin

    // Calculate net WPM
    let netWpm = Math.round(grossWpm - (allIncorrectEntries / timeInMin))

    // Round gross WPM
    grossWpm = Math.round(grossWpm)

    // Adjust net WPM
    if (netWpm < 0) {
        netWpm = 0
    }

    // Calculate accuracy
    let accuracy = Math.round((allCorrectEntries / allTypedEntries) * 100)

    return {
        grossWpm: grossWpm,
        netWpm: netWpm,
        accuracy: accuracy
    }
}