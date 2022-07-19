/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    let result = [[1]]
    for (let i = 0; i < numRows-1; i++){
        let temp = [0, ...result[result.length-1], 0]
        let answer = []
        for (let j = 0; j < temp.length-1; j++){
            answer.push(temp[j]+temp[j+1])
        }
        result.push(answer)
    }
    return result
};

