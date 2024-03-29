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

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    for (let r = 0; r < matrix.length; r++){
        for (let c = r; c < matrix[0].length; c++){
            let curr = matrix[r][c]
            matrix[r][c] = matrix[c][r]
            matrix[c][r] = curr
        }
    }
    for (let i = 0; i < matrix.length; i++){
        reverseLine(matrix[i])
    }
};

function reverseLine(arr){
    let l = 0
    let r = arr.length-1
    while (l < r){
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++
        r--
    }
    return arr
}