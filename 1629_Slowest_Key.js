/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
 var slowestKey = function(releaseTimes, keysPressed) {
    let maxDiff = 0
    let slowest = keysPressed[0]
    for (let i = 0; i < keysPressed.length; i++){
        let diff = 0
        if (i === 0){
            diff = releaseTimes[i]
        }
        if (i > 0){
            diff = releaseTimes[i] - releaseTimes[i-1]
        }
        if (diff > maxDiff || diff === maxDiff && keysPressed[i] > slowest) {
            maxDiff = diff
            slowest = keysPressed[i]
        }
    } return slowest
};

