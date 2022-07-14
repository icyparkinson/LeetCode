/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
    let result = []
    let nums = []
    for (let i = 1; i < 10; i++) nums.push(i)
    
    function dfs(i, k, n, slate, nums){
        //backtrack case
        if (n < 0) return
        
        //base case
        if (slate.length === k && n === 0){
            result.push(slate.slice())
            return
        }
        
        //recursive case
        for (let j=i; j<nums.length; j++){
            slate.push(nums[j])
            dfs(j+1, k, n-nums[j], slate, nums)
            slate.pop()
        }
    }
    
    dfs(0, k, n, [], nums)
    return result
    
};