/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
 var transpose = function(matrix) {
    let result = Array(matrix[0].length).fill(0).map((x) => Array(matrix.length).fill(0))
    for (let row = 0; row < matrix.length; row++){
        for (let col = 0; col < matrix[0].length; col++){
            result[col][row] = matrix[row][col] //important to do result[row][col] with col first or it will be undefined
        }
    } return result
};