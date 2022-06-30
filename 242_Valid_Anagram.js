/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
   
    // let sArr = s.split("")
    // let tArr = t.split("")
    // let sA = (sArr.sort().join(""))
    // let tA = (tArr.sort().join(""))
    // return sA === tA ? true : false
    
     if (s.length !== t.length){
        return false
    }
    
    let sMap = {}
    let tMap = {}
    
    for (let i = 0; i < s.length; i++){
        let charS = s.charAt(i)
        if (sMap[charS] === undefined){
            sMap[charS] = 1
        }
        else {
            sMap[charS] += 1
        }
        
        let charT = t.charAt(i)
        if (tMap[charT] === undefined){
            tMap[charT] = 1
        }
        else {
            tMap[charT] += 1
        }
    } for (const c in sMap){
        if (sMap[c] !== tMap[c]){
            return false
        }
        
    } return true
};

function isAnagram(s1, s2){
    if (s1.length !== s2.length) return false
    let map1 = {}
    let map2 = {}
    for (let i = 0; i < s1.length; i++){
        let c1 = s1[i]
        let c2 = s2[i]
        
        if (map1[c1] === undefined){
            map1[c1] = 1
        } else{
            map1[c1] += 1
        }
        
        if (map2[c2] === undefined){
            map2[c2] = 1
        } else{
            map2[c2] += 1
        }
    }
    for (let char in map1){
        if (map2[char] === undefined){
            return false
        }
        if (map2[char] !== map1[char]){
            return false
        }
    }
    
    return true
}

console.log(isAnagram("hat", "hat"))