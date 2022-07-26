/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    let track = []
    let ROW = matrix.length
    let COL = matrix[0].length
    
    for (let r = 0; r < ROW; r++){
        for (let c = 0; c < COL; c++){
            if (matrix[r][c] === 0){
                track.push([r,c])
            }
        }
    }
    
    for (let i = 0; i < track.length; i++){
        let [x, y] = track[i]
        
        for (let j = 0; j < COL; j++){
            matrix[x][j] = 0
        }
        
        for (let j = 0; j < ROW; j++){
            matrix[j][y] = 0
        }
    }
};