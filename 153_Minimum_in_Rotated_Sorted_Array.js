/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0
    let right = nums.length-1

    
    //checking for edge cases
    if (nums.length === 1){
        return nums[0]
    }
    
    if (nums[left] < nums[right]){
        return nums[left]
    }
    
    //check for inflection
    while (left <= right){
    let mid = left + Math.floor((right - left) / 2)
    let midVal = nums[mid]
    let leftVal = nums[left]
    let rightVal = nums[right]
    let leftOfMid = nums[mid-1]
    let rightOfMid = nums[mid+1]
    
        if (rightOfMid < midVal){
            return rightOfMid
        } else if (midVal < leftOfMid){
            return midVal
        }

        if (midVal > leftVal){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
};
    
    
    
//     1, 2, 3, 4, 5
//     2, 3, 4, 5, 1 <--- check inflection
//     3, 4, 5, 1, 2 
//     4, 5, 1, 2, 3
//           m