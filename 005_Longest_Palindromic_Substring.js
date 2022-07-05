/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let maxSub = ""
    let subLen = 0
    
    function findLongestPal(s, l, r){
        while (l >= 0 && r < s.length && s[l] === s[r]){
            r++
            l--
        }
        return s.slice(l+1, r)
    }
     
     for (let i = 0; i < s.length; i++){
         let c1 = findLongestPal(s, i, i)
         let c2 = findLongestPal(s, i, i+1)
         let longestPal = c1.length > c2.length ? c1 : c2
         if (longestPal.length > subLen){
             subLen = longestPal.length
             maxSub = longestPal
         }
     }
     return maxSub
 
 };
     