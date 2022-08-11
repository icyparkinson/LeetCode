/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    if (s.length > t.length) return false
    let tPoint = 0
    let sPoint = 0
    while (sPoint < s.length){
        if (s[sPoint] === t[tPoint]){
            sPoint++
            tPoint++
        } else{
            tPoint++
        }
        if (tPoint > t.length) return false
    }
    return sPoint === s.length ? true : false
};