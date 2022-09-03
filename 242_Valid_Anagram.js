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


// Slightly more succinct and space-saving, removing one of the hash maps:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let map = new Map()
    for (let i = 0; i < s.length; i++){
        if (!map.has(s[i])){
            map.set(s[i], 1)
        }else{
            map.set(s[i], map.get(s[i]) +1)
        }
    }
    
    for (let j = 0; j < t.length; j++){
        if (map.get(t[j]) === 0 || !map.has(t[j])){
            return false
        }else{
            map.set(t[j], map.get(t[j]) -1)
        }
    }
    return true
};

// Refactored again, even better for the 2nd half:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let sMap = new Map()
    for (let i = 0; i < s.length; i++){
        if (!sMap.has(s[i])){
            sMap.set( s[i], 1)
        }else{
            sMap.set(s[i], sMap.get(s[i]) +1)
        }
    }
    
    for (let j = 0; j < t.length; j++){
        if (sMap.get(t[j]) > 0){
            sMap.set(t[j], sMap.get(t[j]) -1)
        }else{
            return false
        }
    }return true
};