/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
 var pacificAtlantic = function(heights) {
    let ROWS = heights.length
    let COLS = heights[0].length
    let pac = new Set ()
    let atl = new Set ()
    
    function dfs(r, c, visited, prevHeight){
        
        let rowInbounds = 0 <= r && r < ROWS
        let colInbounds = 0 <= c && c < COLS
        
        if (!rowInbounds || !colInbounds){
            return
        }
        
        let pos = r + "," + c
        if (visited.has(pos)){
            return
        }
        
        if (heights[r][c] < prevHeight){
            return
        }
        
        visited.add(pos)
        
        dfs(r+1, c, visited, heights[r][c])
        dfs(r-1, c, visited, heights[r][c])
        dfs(r, c+1, visited, heights[r][c])
        dfs(r, c-1, visited, heights[r][c])
        
    }
    
    for (let c = 0; c < COLS; c++){
        dfs(0, c, pac, heights[0][c])
        dfs(ROWS-1, c, atl, heights[ROWS-1][c])
        
    }
    
    for (let r = 0; r < ROWS; r++){
        dfs(r, 0, pac, heights[r][0])
        dfs(r, COLS-1, atl, heights[r][COLS-1])
    }
    
    let result = []
    for (let r = 0; r < ROWS; r++){
        for (let c = 0; c < COLS; c++){
            let pos = r + "," + c
            if ( pac.has(pos) && atl.has(pos) ){
                result.push([r,c])
             }
            }
        }
    
    
    return result
};