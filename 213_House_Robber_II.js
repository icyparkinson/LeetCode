/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === 1){
        return nums[0]
    }
    
    return Math.max(helper(nums, 1, nums.length), helper(nums, 0, nums.length-1))
    
    
    function helper(nums, start, end){
        let rob1 = 0
        let rob2 = 0
        
        for (let i = start; i < end; i++){
            let temp = Math.max(rob2, nums[i]+rob1)
            rob1 = rob2
            rob2 = temp
        }
        return rob2
    }
    
};


