/**
 * @param {string} s
 * @return {number}
 */
 var removePalindromeSub = function(s) {
    if (isPal(s)) return 1
    
    let set = new Set()
    for (let i = 0; i < s.length; i++){
        set.add(s[i])
    }
    
    if (set.size === 1) return 1
    if (set.size === 2) return 2
};

function isPal(s){
    let l = 0
    let r = s.length-1
    while (l < r){
        if (s[l] === s[r]){
            l++
            r--
        } else{
            return false
        }
    } return true
}