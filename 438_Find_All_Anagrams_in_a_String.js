/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    let mapP = Array(26).fill(0)
    let result = []
    for (let i = 0; i < p.length; i++){
        let c = p[i]
        mapP[c.charCodeAt() - "a".charCodeAt()] += 1
    }
    // console.log(mapP)
    
    let l = 0
    let r = p.length-1
    
    while (r < s.length){
        let mapS = Array(26).fill(0)
        let part = s.slice(l, r+1)
        // console.log(part)
        for (let c of part){
            mapS[c.charCodeAt() - "a".charCodeAt()] += 1
        }
        if (mapS.join("") === mapP.join("")){
            result.push(l)
        }
        
        r++
        l++
    }
    return result
    
};