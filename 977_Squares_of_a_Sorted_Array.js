/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let result = []
    
    let left = 0
    let right = nums.length -1
    
    while (left <= right){
        if (nums[left] * nums[left] > nums[right] * nums[right]){
            result.unshift(nums[left] * nums[left])
            left++
        } else{
            result.unshift(nums[right] * nums[right])
            right--
        }
    }
    return result
};