/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    let result = "1"
    let counter = 0
    let curChar = 0
    let curString = ""
    
    
    if (n === 1) return result
    
    while (n > 1){
        while (counter < result.length){
            while (result.charAt(curChar) === result.charAt(counter)){
                counter++
            }
            curString += (counter - curChar).toString()
            curString += result.charAt(curChar)
            curChar = counter
        }
        result = curString
        curString = ""
        counter = 0
        curChar = 0
        n--
    }
    return result
};

