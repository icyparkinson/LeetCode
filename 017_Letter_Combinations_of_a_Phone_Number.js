/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
    if (digits.length === 0) return []
    let result = []
    let alpha = new Map()

    alpha.set(2, "abc")
    alpha.set(3, "def")
    alpha.set(4, "ghi")
    alpha.set(5, "jkl")
    alpha.set(6, "mno")
    alpha.set(7, "pqrs")
    alpha.set(8, "tuv")
    alpha.set(9, "wxyz")
    
    function dfs(i, s){
        if (i === digits.length){
            result.push(s)
            return
        }
        
        for (let c of alpha.get(parseInt(digits[i]), 10)){
            dfs(i+1, s+c)
        }
            
    }
    dfs(0, "")
    return result
};