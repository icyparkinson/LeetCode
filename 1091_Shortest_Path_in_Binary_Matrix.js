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


/**
 * @param {number[][]} grid
 * @return {number}
 */
 var shortestPathBinaryMatrix = function(grid) {
    let ROW = grid.length
    let COL = grid[0].length
    
    let visited = new Set()
    
    let q = [{r: 0, c: 0, s: 1}]
    
    while (q.length){
        let curr = q.shift()
        let coord = `${curr.r} ${curr.c}`
        if (curr.r < 0 || curr.c < 0 || curr.r === ROW || curr.c === COL || visited.has(coord) || grid[curr.r][curr.c] === 1) continue
        visited.add(coord)
        if (curr.r === ROW-1 && curr.c === COL-1) return curr.s
        
        q.push({r: curr.r+1, c: curr.c, s: curr.s+1})
        q.push({r: curr.r-1, c: curr.c, s: curr.s+1})
        q.push({r: curr.r, c: curr.c+1, s: curr.s+1})
        q.push({r: curr.r, c: curr.c-1, s: curr.s+1})
        q.push({r: curr.r+1, c: curr.c+1, s: curr.s+1})
        q.push({r: curr.r-1, c: curr.c-1, s: curr.s+1})
        q.push({r: curr.r+1, c: curr.c-1, s: curr.s+1})
        q.push({r: curr.r-1, c: curr.c+1, s: curr.s+1})
        
    }
    return -1
};