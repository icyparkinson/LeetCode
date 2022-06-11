/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let lower = s.toLowerCase().split("")
    let alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789"
    let filtered = lower.filter( (char) => {
        return alphaNum.includes(char) 
    })
    return filtered.join("") === filtered.reverse().join("") ? true : false
};
                                
                                