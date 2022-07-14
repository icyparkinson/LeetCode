/**
 * @param {string} s
 * @return {string[]}
 */
 var letterCasePermutation = function(s) {
    let result = []
    
    function dfs(i, s, slate){
        //backtrack case
        
        //base case
        if (i === s.length){
            result.push(slate.join(""))
            return
        }
        
        //dfs case
        let char = s[i]
        if (!Number.isInteger(parseInt(char))){
            //uppercase
            slate.push(char.toUpperCase())
            dfs(i+1, s, slate)
            slate.pop()
            
            //lowercase
            slate.push(char.toLowerCase())
            dfs(i+1, s, slate)
            slate.pop()
        } else{
            slate.push(char)
            dfs(i+1, s, slate)
            slate.pop()
        }
    }
    
    dfs(0, s, [])
    return result
    
};