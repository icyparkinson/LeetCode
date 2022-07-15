/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
 var shoppingOffers = function(price, special, needs) {

    
    function dfs(index, needs){
        ans = needs.reduce((acc, c, index) => acc + c * price[index], 0 )
        
        for (let i = index; i < special.length; i++){
            let nextNeeds = []
            for (let j = 0; j < price.length; j++){
                if (needs[j] < special[i][j]) break
                nextNeeds[j] = needs[j] - special[i][j]
            }
            
            if (nextNeeds.length === needs.length){
            ans = Math.min(ans, special[i].slice(-1)[0] + dfs(i, nextNeeds))
            }
        } 
        
        
        return ans
    }
    return dfs(0, needs)
};