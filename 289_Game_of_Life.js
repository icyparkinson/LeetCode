/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    
    //countNeighbors helper function
    function countNeighbors(r,c){
        let count = 0
        let drx = [[0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, -1], [-1, 1]]
        
        for (let [addR, addC] of drx){
            let [newR, newC] = [r + addR, c + addC]
            if (newR < 0 || newR >= board.length || newC < 0 || newC >= board[0].length) continue
            if (board[newR][newC] === 1 || board[newR][newC] === 3) count++
        }
        
        return count
    }
    
    for (let r = 0; r < board.length; r++){
        for (let c = 0; c < board[0].length; c++){
            let nei = countNeighbors(r, c)
            //change 0s to 1s (temporarily 2)
            
            if (board[r][c] === 0){
                if (nei === 3){
                    board[r][c] = 2
                }
            }
            //change 1s to 0s (temporarily 3)
            if (board[r][c] === 1){
                if (nei !== 2 && nei !== 3){
                    board[r][c] = 3
                }
            }
        }
    }
    
    //change the 2s and 3s to 0s and 1s
    for (let r = 0; r < board.length; r++){
        for (let c = 0; c < board[0].length; c++){
            if (board[r][c] === 2) board[r][c] = 1
            if (board[r][c] === 3) board[r][c] = 0
        }
    }
    
};


//if 0 with 3 neighbors, change to 1
//if 1 with 1 or 0 neighbors or 4+ neighbors, change to 0
//if 1 with 2 or 3 neighbors, nothing 
    
    // original -> new 
        // 0 -> 0 : 0  
        // 1 -> 1 : 1
        // 0 -> 1 : 2  has 3 neighbors
        // 1 -> 0 : 3  not 2 or 3 neighbors




/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var gameOfLife = function(board) {
    let ROW = board.length
    let COL = board[0].length
    
    //count neighbors with this helperfunction
    function countNei(r,c){
        let count = 0
        let dirs = [[0,1],[1,0],[-1,0],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]]
        for (let [addR,addC] of dirs){
            let [newR,newC] = [addR+r, addC+c]
            if (newR < 0 || newC < 0 || newR === ROW || newC === COL) continue
            if (board[newR][newC] === 1 || board[newR][newC] === 3) count++
        }
        return count
    }
    
    //first, run thru the board and change all the ones that need changing to placeholders while counting neighbors
    for (let r = 0; r < ROW; r++){
        for (let c = 0; c < COL; c++){
            let nei = countNei(r,c)
            if (board[r][c] === 0 && nei === 3){
                board[r][c] = 2
            }
            if (board[r][c] === 1 && nei !== 2 && nei !== 3){
                board[r][c] = 3
            }
        }
    }
    
    
    //go through board again and change the placeholders back to 0s and 1s
    for (let r = 0; r < ROW; r++){
        for (let c = 0; c < COL; c++){
            if (board[r][c] === 2) board[r][c] = 1
            if (board[r][c] === 3) board[r][c] = 0
            
        }
    }
    return board
};

// 0 = dead
// 1 = alive

// if 1 w/ 1 nei or 0 nei, dies
// if 1 w/ 4, 5, 6, 7 8 nei, dies
// in other words, 1 has to have 2 or 3 neis to stay the same

// if 0, will live with 3 neis


// turn a chart with placeholders..
// 0 -> 0
// 1 -> 1
// 0 -> 1 (if has 3 neis) = temp 2
// 1 -> 0 (if NOT 2 or 3 neis) = temp 3