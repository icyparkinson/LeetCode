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