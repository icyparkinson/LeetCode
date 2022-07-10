/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */ 
 var floodFill = function(image, sr, sc, color) {
    if (image === null || image.length < 1 || image[sr][sc] === color){
        return image
    }
    
    let initCol = image[sr][sc]
    
    function fill (image, r, c, color, initCol){
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length || image[r][c] !== initCol) return
        
        image[r][c] = color
        
        fill (image, r+1, c, color, initCol)
        fill (image, r-1, c, color, initCol)
        fill (image, r, c+1, color, initCol)
        fill (image, r, c-1, color, initCol)

    }
    
    fill (image, sr, sc, color, initCol)
    return image
    
};