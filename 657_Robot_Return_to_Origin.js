/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    // number of ups must = number of downs
    // number of lefts must = number of rights
    // left = 0
    // up = 1
    // right = 2
    // down = 3
    
    let counter = Array(4).fill(0)
    
    for ( let i = 0; i < moves.length; i++){
        if (moves[i] === "L") counter[0]++
        if (moves[i] === "U") counter[1]++
        if (moves[i] === "R") counter[2]++
        if (moves[i] === "D") counter[3]++
    }
    
    if (counter[0] === counter[2] && counter[1] === counter[3]){
        return true
    }
    return false

};