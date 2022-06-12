/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    // if (prices.length = 1){
    //     return 0
    // }
    
    let pointA = 0
    let pointB = 1
    let max = 0
    
    while (pointB < prices.length){
        if (prices[pointB] < prices[pointA]){
            pointA = pointB
            pointB++
            
        }
        else{
            max = Math.max(max, ( prices[pointB] - prices[pointA]) )
            pointB++
        }
    } return max
};

