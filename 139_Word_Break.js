let wordBreak = function (s, wordDict) {
    let dp = new Array(s.length + 1).fill(false);
    dp[s.length] = true;

    for (let i = s.length - 1; i >= 0; i--) {
        for (let w of wordDict) {
            if (
                i + w.length <= s.length &&
                s.substring(i, i + w.length) === w
            ) {
                dp[i] = dp[i + w.length];
            }
            if (dp[i]) {
                break;
            }
        }
    }

    return dp[0];
};

// tabulation method:

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let table = Array.from({length: s.length+1}, () => false)
    table[0] = true
    
    for (let i = 0; i < table.length; i++){
        if (table[i] === false) continue
        for (let j = i + 1; j < table.length; j++){
            if (wordDict.includes(s.slice(i, j))){
                table[j] = true
            }
        }
    }
    return table[table.length-1]
};