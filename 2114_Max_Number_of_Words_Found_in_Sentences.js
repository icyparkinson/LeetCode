/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let maxCount = 0
    
    for (let sentence of sentences){
        let count = 0
        let word = sentence.split(" ")
        console.log(word)
        for (let i = 0; i < word.length; i++){
            count++
        }
        if (count > maxCount){
            maxCount = count
        }
        
    }
    return maxCount
};