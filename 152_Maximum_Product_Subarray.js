var maxProduct = function(nums) {
    let max = nums[0]
    let maxNow = [nums[0]]
    let minNow = [nums[0]]
    
    for (let i = 1; i < nums.length; i++){
        maxNow[i] = Math.max(nums[i], nums[i] * maxNow[i-1], nums[i] * minNow[i-1])
        
        minNow[i] = Math.min(nums[i], nums[i] * maxNow[i-1], nums[i] * minNow[i-1])
        
        max = Math.max(max, maxNow[i])
    }
       
return max
    
    
};