/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n, cache = {}) {
    if (n === 0) return 1
    if (n === 1) return 1
    if (n > 1){
        if (cache[n]) return cache[n]
        let result = climbStairs(n-1, cache) + climbStairs(n-2, cache)
        cache[n] = result
        return result
    }
};