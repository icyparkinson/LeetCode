/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let sumSoFar = nums[0]
    let iterateSum = 0
    for (let i = 1; i <= nums.length; i++){
        iterateSum += i
    }
    
    for (let j = 1; j < nums.length; j++){
        sumSoFar += nums[j]
    }
    
    return iterateSum - sumSoFar
};


//With Bit Manipulation
var missingNumberWithBit = function (nums) {
    let res = nums.length;

    for (let i = 0; i < nums.length; i++) {
        res = res ^ i ^ nums[i];
    }

    return res;
};