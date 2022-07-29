/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isMonotonic = function(nums) {
    let lastNum = nums[nums.length-1]
    let firstNum = nums[0]
    
    if (firstNum === lastNum){
        for (let i = 1; i < nums.length; i++){
            if (nums[i-1] !== nums[i] ) return false
        }
    }
    
    else if (firstNum < lastNum){
        for (let i = 1; i < nums.length; i++){
            if (nums[i-1] > nums[i]) return false
        }

    }
    
    else{
        for (let i = 1; i < nums.length; i++){
            if (nums[i-1] < nums[i]) return false
        }
    }
    
    return true
};