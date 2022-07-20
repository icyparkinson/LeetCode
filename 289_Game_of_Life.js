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