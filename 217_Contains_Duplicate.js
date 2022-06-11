/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let cache = {}
    for (let i = 0; i < nums.length; i++){
        if (cache[nums[i]] === undefined){
            cache[nums[i]] = true
        } else {
            return true
        }
    } return false
    
};