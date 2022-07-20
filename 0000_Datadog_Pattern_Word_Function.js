function data(pattern, word){
    let i = 0
    let j = 0
    while (j < word.length){
        let patternChar = pattern.charAt(i)
        let wordChar = word.charAt(j)
        if (patternChar === wordChar){
            // console.log(patternChar, wordChar)
            } 
        //characters don't match, first check if it's a number. If it's not a number, return false now
        if (patternChar !== wordChar){
            if (isNaN(patternChar)){
                // console.log(`${patternChar} is not a number`)
                return false
            } else{
                let num = parseInt(patternChar, 10)
                j += num-1
            }
        } 
        i++
        j++
        if (j > word.length) return false
        
    } return true
}

console.log(data("d1tadog", "datadog"))
console.log(data("d2adog", "datadog"))
console.log(data("d5dog", "datadog"))
console.log(data("d2tadog", "datadog"))
console.log(data("2", "ae"))
console.log(data("2eeee", "e"))

// console.log(isNaN("k"))

// b l 2 h         b l a h
//       ^                   ^

//first, check if it's a number. If it's not a number and doesn't match, return false. If it is a number, advance the pointer and then check if it's a match again.

// write function that follows this pattern

// fn(pattern, word) bool

// fn(d1tadog, datadog) -> True

// fn(d2adog, datadog) -> True
        // ^        ^
// fn(d5dog, datadog) -> False

// fn(d2tadog, datadog) -> False

// fn(datadog, datadog) -> True

// fn(2, ae) -> True

// fn(2eeee, e) -> False