/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    let result = []
    let i = 0
    let words = s.split(" ")
    for (let word of words){
        while (k > 0){
            result.push(words[i])
            i++
            k--
            
        }
    } return result.join(" ")
};