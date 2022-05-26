/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     let totalSum = nums[0]
     let sumNow = nums[0]
     for (let i = 1; i < nums.length; i++){
        if (sumNow < 0){
            sumNow = 0
        }
        sumNow = sumNow + nums[i]

         totalSum = Math.max(sumNow, totalSum)
     }
     return totalSum
};

// I need to find a continuous subarray where the total is the largest
// Keep a running total that updates as sum grows

console.log(maxSubArray([-2,1]))