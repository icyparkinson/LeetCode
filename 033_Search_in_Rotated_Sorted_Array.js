/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let l = 0
    let r = nums.length-1
    while (l <= r){
        let mid = Math.floor(l+(r-l)/2)
        if (nums[mid] === target){
            return mid
        } 
        
        //left portion
        if (nums[mid] >= nums[l]){
            if (nums[mid] < target || target < nums[l]){
                l = mid+1
            } else{
                r = mid-1
            }
        }
        //right portion
        else{
            if (nums[mid] > target || target > nums[r]){
                r = mid-1
            } else{
                l = mid+1
            }
        }
        
    } return -1
};