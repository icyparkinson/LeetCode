/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let result = []
    nums.sort((a,b) => a-b)
    
    function dfs(i, nums){
        //base case
        if (i === nums.length){
            result.push(nums.slice())
            return
        }
        
        //dfs case
        for (let j = i; j < nums.length; j++){
            [nums[i],nums[j]] = [nums[j], nums[i]]
            dfs(i+1, nums);
            [nums[i],nums[j]] = [nums[j], nums[i]]
        }
        
    }
    
    dfs(0, nums)
    let hash = {}
    for (let el of result){
        if (hash[el]){
            continue
        }else{
            hash[el] = el
        }
    }
    
    return Object.values(hash)
};