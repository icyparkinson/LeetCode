/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    k%= nums.length
    if (nums.length <= 1) return nums
    function reverse(start, end, nums){
        while (start < end){
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }
    
    reverse(0, nums.length-1, nums)
    reverse(0, k-1, nums)
    reverse(k, nums.length-1, nums)
    
    
};

// 7 6 5   4 3 2 1