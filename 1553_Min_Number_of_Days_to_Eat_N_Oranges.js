/**
 * @param {number} n
 * @return {number}
 */
 var minDays = function(n) {
    let result = []
    
    function dfs(n, slate){
        //backtrack
        if (n < 0) return
        
        //base
        if (n === 0){
            result.push(slate.slice())
            return
        }
        
        //recursive
        if (n % 3 === 0){
            let eat = (n/3) *2
            slate.push(eat)
            dfs(n-eat, slate)
            slate.pop()
        }
        
        if (n% 2 === 0){
            let eat = n/2
            slate.push(eat)
            dfs(n-eat, slate)
            slate.pop()
        }
        
        slate.push(1)
        dfs(n-1, slate)
        slate.pop()
        
    }
    
    dfs(n, [])
    let shortestLength = result[0].length
    
    for (let i = 1; i < result.length; i++){
        shortestLength = Math.min(shortestLength, result[i].length)
    }
    
    return shortestLength
    
};