/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let result = ""
    for (let i = 0; i < strs[0].length; i++){
        for (let s of strs){
            if (i === s.length || s[i] !== strs[0][i]) return result
        }
        result += strs[0][i]
    } 
    return result
};