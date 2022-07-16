/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let slowest = keysPressed[0]
    let maxDiff = 0
    for (let i = 0; i < keysPressed.length; i++){
        let diff = i === 0 ? releaseTimes[0] : releaseTimes[i] - releaseTimes[i-1]
        if (diff > maxDiff || diff === maxDiff && keysPressed[i] > slowest){
            maxDiff = diff
            slowest = keysPressed[i]
        }
    }
    return slowest
};