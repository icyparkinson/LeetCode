/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++){
        let val = nums[i]
        if (hashMap.has(val)){
            hashMap.set(val, hashMap.get(val)+1)
        } else{
            hashMap.set(val, 1)
        }
        if (hashMap.get(val) > nums.length / 2) return val
    }
    
};

var majorityElement = function(nums) {
    let count = 0
    let focus = nums[0]
    for (let i = 0; i < nums.length; i++){
        let val = nums[i]
        if (val === focus){
            count++
        }
        else{
            (count--)
            if (count < 0){
                focus = val
                count = 0
            }
        }
    }

    return focus
}