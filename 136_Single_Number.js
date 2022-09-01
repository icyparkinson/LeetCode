/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let map = new Map()
    for (let i = 0; i < nums.length; i++){
        let v = nums[i]
        if (!map.has(v)){
            map.set(v, 1)
        } else{
            map.set(v, 2)
        }
    }
    
    let keys = Array.from(map.keys())
    for (let key of keys){
        if (map.get(key) === 1){
            return key
        }
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let set = new Set()
    for (let i = 0; i < nums.length; i++){
        if (!set.has(nums[i])){
            set.add(nums[i])
        }else{
            set.delete(nums[i])
        }
    } return Array.from(set)[0]
};