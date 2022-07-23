/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    let dirs = [
        [0,1],
        [1,0],
        [0,-1],
        [-1,0],
        [1,1],
        [-1,-1],
        [-1,1],
        [1,-1]
    ]
    if (grid[0][0] === 1) return -1
    
    let queue = [[0,0,1]]
    
    while (queue.length){
        let [r,c, path] = queue.shift()
        if (r === grid.length-1 && c === grid[0].length-1) return path
        
        for (let [addR,addC] of dirs){
            let [newR, newC] = [addR+r, addC+c]
            
            let inBoundsR = newR >= 0 && newR < grid.length
            let inBoundsC = newC >= 0 && newC < grid[0].length
            if (!inBoundsR || !inBoundsC) continue
            
            if (grid[newR][newC] === 1) continue
            
            queue.push([newR,newC, path+1])
            grid[newR][newC] = 1
        }
        
    } return -1
};