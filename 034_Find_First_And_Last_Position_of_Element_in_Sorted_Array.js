/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    function findStart(nums, target){
        if (nums[0] === target){
            return 0
        }
        let left = 0
        let right = nums.length-1
        while (left <= right){
            let mid = Math.floor(left + (right-left)/2)
            if (nums[mid] > target){
                right = mid-1
            }
            else if(nums[mid] < target){
                left = mid+1
            }
            else if(nums[mid] === target && nums[mid-1] === target){
                right = mid-1
            }
            else if(nums[mid] === target && nums[mid-1] < target){
                return mid
            }
        } return -1
    }
    function findEnd(nums, target){
        if (nums[nums.length-1] === target){
            return nums.length-1
        }
        let left = 0
        let right = nums.length-1
        while (left <= right){
            let mid = Math.floor(left + (right-left)/2)
            if (nums[mid] > target){
                right = mid-1
            }
            else if(nums[mid] < target){
                left = mid+1
            }
            else if(nums[mid] === target && nums[mid+1] === target){
                left = mid+1
            }
            else if(nums[mid] === target && nums[mid+1] > target){
                return mid
            }
        } return -1
    }
    
    return [findStart(nums, target), findEnd(nums, target)]
};