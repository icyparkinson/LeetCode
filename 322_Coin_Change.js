/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let table = Array.from({length: amount+1}, () => Infinity)
    table[0] = 0
    
    for (let coin of coins){
        for (let i = 0; i < table.length; i++){
            if (coin <= i){
                let idx = i - coin
                let potentialAmt = table[idx] + 1
                table[i] = Math.min(table[i], potentialAmt)
            }
        }
    }
    return table[table.length-1] === Infinity ? -1 : table[table.length-1]
    
};