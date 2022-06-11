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
                                
                                