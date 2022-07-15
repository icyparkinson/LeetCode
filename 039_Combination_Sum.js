/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let result = []
    
    function dfs(i, candidates, target, slate){
        //backtrack
        if (target < 0) return
        
        //base
        if (target === 0){
            result.push(slate.slice())
            return
        }
        
        //recursive
        for (let j = i; j < candidates.length; j++){
            slate.push(candidates[j])
            dfs(j, candidates, target-candidates[j], slate)
            slate.pop()
        }
    }
    dfs(0, candidates, target, [])
    return result
};