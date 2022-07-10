/**
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    let queue = []
    let fresh = 0
    let time = 0
    
    let ROWS = grid.length
    let COLS = grid[0].length
    
    for (let r = 0; r < ROWS; r++){
        for (let c = 0; c < COLS; c++){
            if (grid[r][c] === 1){
                fresh++
            }
            
            if (grid[r][c] === 2){
                queue.push([r, c, 0])
            }
        }
    }
    
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let endR = grid.length-1
    let endC = grid[0].length-1
    
    while (queue.length > 0 && fresh > 0){
        let [curR, curC, min] = queue.shift()
        
        if (grid[curR][curC] === 1){
            grid[curR][curC] = 2
            fresh--
            time = min
        }
        
        for (let [addR, addC] of dirs){
            let [newR, newC] = [curR + addR, curC + addC]
            if (newR < 0 || newR >= grid.length || newC < 0 || newC >= grid[0].length){
                continue
            }
            if (grid[newR][newC] === 1){
                queue.push([newR, newC, min+1])
            }
        }
    }
    
    return fresh > 0 ? -1 : time
    
}