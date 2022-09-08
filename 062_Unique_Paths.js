function uniquePaths(m, n) {
    let row = new Array(n).fill(1);

    for (let i = 0; i < m - 1; i++) {
        let newRow = new Array(n).fill(1);

        for (let j = n - 2; j > -1; j--) {
            newRow[j] = newRow[j + 1] + row[j];
        }

        row = newRow;
    }

    return row[0];
}


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n, memo = {}) {
    let pos = m + "," + n
    if (pos in memo) return memo[pos]
    if (m === 0 || n === 0) return 0
    if (m === 1 && n === 1) return 1
    
    memo[pos] = uniquePaths(m-1, n, memo) + uniquePaths(m, n-1, memo)
    return memo[pos]
};