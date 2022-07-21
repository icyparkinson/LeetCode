/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    let count = 0
    let words = s.split(" ")
    for (let word of words){
        if (word.length > 0) count++
    }
    return count
};