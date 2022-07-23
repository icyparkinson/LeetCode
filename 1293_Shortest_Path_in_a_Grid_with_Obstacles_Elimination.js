/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
 var shortestPath = function(grid, k) {
    let visited = new Set()
    let ROW = grid.length
    let COL = grid[0].length
    
    let q = [{r: 0, c: 0, s: 0, o:0}]
    
    while (q.length){
        let curr = q.shift()
        let coord = `${curr.r} ${curr.c} ${curr.o}`
        if (curr.r < 0 || curr.r === ROW || curr.c < 0 || curr.c === COL || visited.has(coord) || curr.o > k) continue
        
        if (grid[curr.r][curr.c] === 1) curr.o++
        
        if (curr.r === ROW-1 && curr.c === COL-1) return curr.s
        
        visited.add(coord)
        
        q.push({r:curr.r+1, c: curr.c, s: curr.s+1, o: curr.o})
        q.push({r:curr.r-1, c: curr.c, s: curr.s+1, o: curr.o})
        q.push({r:curr.r, c: curr.c+1, s: curr.s+1, o: curr.o})
        q.push({r:curr.r, c: curr.c-1, s: curr.s+1, o: curr.o})
    }
    return -1
    
};