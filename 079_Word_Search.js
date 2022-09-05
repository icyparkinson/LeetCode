/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let ROWS = board.length
    let COLS = board[0].length
    
    let path = new Set()
    
    function dfs(r, c, i){
        if (i === word.length) return true
        if (r < 0 || r === ROWS || c < 0 || c === COLS) return false
        if (word[i] !== board[r][c]) return false
        let pos = r + "," + c
        if (path.has(pos)) return false
        
        path.add(pos)
        
        let res = (dfs(r+1, c, i+1) ||
            dfs(r-1, c, i+1) ||
            dfs(r, c+1, i+1) ||
            dfs(r, c-1, i+1))
        
        path.delete(pos)
        
        return res
    }
    
    for (let r = 0; r < ROWS; r++){
        for (let c = 0; c < COLS; c++){
            if (dfs(r, c, 0)) return true
        }
    }
    return false
};