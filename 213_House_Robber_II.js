/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    for (let row = 0; row < matrix.length; row++){
        for (let col = row; col < matrix.length; col++){
            let cur = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = cur
        }
    }
    
    for (let i = 0; i < matrix.length; i++){
        matrix[i].reverse()
    }
};