/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    let result = []
    function reverse(str){
        str = str.split("")
        let l = 0
        let r = str.length-1
        while (l <= r){
            [str[l], str[r]] = [str[r], str[l]]
            l++
            r--
        } return str.join("")
    }
    
    let words = s.split(" ")
    for (let word of words){
        result.push(reverse(word))
    }
    return result.join(" ")
};