/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    let L = 0
    let R = nums.length-1
    if (nums[L] < nums[R]) return nums[L]
    while (L < R){
        let M = L + Math.floor((R-L)/2)
        if (nums[M] > nums[M+1]) return nums[M+1]
        else if (nums[M] < nums[M-1]) return nums[M]
        else{
            if(nums[M] > nums[L]){
                L = M+1
            } else{
                R = M
            }
        }
    }
};
