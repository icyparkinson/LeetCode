/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    // let lower = s.toLowerCase().split("")
    // let alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789"
    // let filtered = lower.filter( (char) => {
    //     return alphaNum.includes(char) 
    // })
    // return filtered.join("") === filtered.reverse().join("") ? true : false
    
    let pointerOne = 0
    let pointerTwo = s.length-1
    
    while (pointerOne < pointerTwo){
        while ( !isValidChar(s.charAt(pointerOne))  ){
            pointerOne++
        }
        while ( !isValidChar(s.charAt(pointerTwo)) ){
            pointerTwo--
        }
        
        if (s.charAt(pointerOne).toLowerCase() !== s.charAt(pointerTwo).toLowerCase()){
            return false
        }
        pointerOne++
        pointerTwo--
    } return true
    
    function isValidChar(c){
        let valid = "abcdefghijklmnopqrstuvwxyz0123456789"
        return valid.includes(c.toLowerCase())
    }
    
    
};
                                
                    
// break everything up into helper functions:

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    let isVal = (str) => {
        let chars = "0123456789abcdefghjijklmnopqrstuvwxyz"
        if (chars.includes(str)){
            return true
        }
        return false
    }
    
    let isPal = (str) => {
        let l = 0
        let r = str.length-1
        while (l < r){
            if (str[l] !== str[r]) return false
            l++
            r--
        }
        return true
    }
    
    
    let lower = s.toLowerCase()
    let str = ""
    for (let c of lower){
        if (isVal(c)){
            str+= c
        }
    }
    
    return isPal(str)
    
};

