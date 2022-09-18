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


//more concise and easy to read:

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    if (nums.length === 1) return nums[0]
    let l = 0
    let r = nums.length-1
    while (l < r){
        let m = l + Math.floor( (r-l) / 2)
        if (nums[l] < nums[r]) return nums[l]
        if (nums[m] > nums[m+1]) return nums[m+1]
        if (nums[m] < nums[m-1]) return nums[m]
        if (nums[m] > nums[l]){
            l = m+1
        }else{
            r = m
        }
    }
};