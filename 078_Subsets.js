/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    let result = []
    
    function dfs(i, nums, slate){
        //base case
        if (i === nums.length){
            result.push(slate.slice())
            return
        }
        
        //dfs case
        //exclusion 
        dfs(i+1, nums, slate)
        
        //inclusion
        slate.push(nums[i])
        dfs(i+1, nums, slate)
        slate.pop()
        
        
    }
    
    dfs(0, nums, [])
    return result
};