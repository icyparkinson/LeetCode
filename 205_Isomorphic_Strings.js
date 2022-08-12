/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let mapS = {}
    let mapT = {}
    let compare = ""
    if (s.length !== t.length) return false
    for (let i = 0; i < s.length; i++){
        let sc = s[i]
        let tc = t[i]
        if (!mapS[sc]){
            mapS[sc] = tc
        } 
        if (!mapT[tc]){
            mapT[tc] = sc
        }
        if (mapS[sc] !== tc || mapT[tc] !== sc) return false
    }
    console.log(mapS)
    console.log(mapT)
    return true
};