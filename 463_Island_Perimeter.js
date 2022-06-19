/**
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    if (grid === null || grid.length === 0 || grid[0].length === 0){
        return 0
    }
    let perimeter = 0
    
    for (let r = 0; r<grid.length; r++){
        for (let c = 0; c<grid[0].length; c++){
            if (grid[r][c] === 1){
                perimeter+= 4
                if (r > 0 && grid[r-1][c] === 1){
                    perimeter -= 2
                }
                if (c > 0 && grid[r][c-1] === 1){
                    perimeter -= 2
                }
            }
    
        }
    }
    return perimeter
};
