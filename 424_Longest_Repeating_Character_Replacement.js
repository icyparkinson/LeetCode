/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    if (s.length === 0) return 0
    let res = 0
    let chart = {}
    let l = 0
    for (let i = 0; i < s.length; i++){
        // Keep track of the number of characters in window
        let char = s[i]
        if (!chart[char]){
            chart[char] = 1
        } else{
            chart[char] +=1
        }
        // Sliding window
        let values = Object.values(chart)
        let maxChar = Math.max(...values)
        console.log(maxChar)
        let windowLen = i - l +1
        if (windowLen - maxChar <= k){
            res = Math.max(windowLen, res)
            continue
        }else {
            chart[s[l]] -=1
            l++
        }
    
    }
    return res
    
};
