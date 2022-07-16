/**
 * @param {number[]} time
 * @return {number}
 */
 var numPairsDivisibleBy60 = function(time) {
    
    let count = 0
    let map = new Map()
    
    for (let num of time){
        let mod = num % 60
        let diff = mod === 0 ? 0 : 60 - mod
        
        if (map.has(diff)){
            count += map.get(diff)
        }
        
        if (!map.has(mod)){
            map.set(mod, 1)
        } else{
            map.set(mod, map.get(mod)+1)
        }
    }
    
    return count
    
};