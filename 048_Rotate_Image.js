/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let left = 0
    let right = matrix.length-1

    let temp = null
    
    while (left < right){
        for ( let i = 0; i < right-left; i++){
            let top = left
            let bottom = right
            
            temp = matrix[top][left+i]
            matrix[top][left+i] = matrix[bottom-i][left]
            matrix[bottom-i][left] = matrix[bottom][right-i]
            matrix[bottom][right-i] = matrix[top+i][right]
            matrix[top+i][right] = temp
        } 
        left++
        right--
    }
};

//alternative method:

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