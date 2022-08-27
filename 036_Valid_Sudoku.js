/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    let set = new Set()
    for (let row = 0; row < board.length; row++){
        for (let col = 0; col < board[0].length; col++){
            let cur = board[row][col]
            let rowList = `row: ${row} ${cur}`
            let colList = `col: ${col} ${cur}`
            let boxList = `box: ${Math.floor(row/3)},${Math.floor(col/3)} ${cur}`
            
            if (cur === ".") continue
            if (set.has(rowList) || set.has(colList) || set.has(boxList)) return false
            else{
                set.add(rowList)
                set.add(colList)
                set.add(boxList)
            }
        }
    }
    return true
};