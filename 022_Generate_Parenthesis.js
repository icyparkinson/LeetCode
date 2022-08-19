/**
 * @param {number} n
 * @return {string[]}
 */

 const isValid = (str) => {
    let stack = []
    let map = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }
    
    for (let c of str){
        if (map[c]){
            if (stack[stack.length-1] === map[c]){
                stack.pop()
            }else{
                return false
            }
        }else{
            stack.push(c)
        }
    }
    
    return stack.length > 0 ? false : true
}

var generateParenthesis = function(n) {
    let result = []
    
    let dfs = (i, n, slate) => {
        // dfs recursive helper
        if (i === n *2){
            if (isValid(slate.join(""))){
                result.push(slate.join(""))
            }
            return
        }
        
        // recursive case
        
        
        // add open
        slate.push("(")
        dfs(i+1, n, slate)
        slate.pop()
        
        // add close
        slate.push(")")
        dfs(i+1, n, slate)
        slate.pop()
    }
    
    dfs(0, n, [])
    
    return result
};
