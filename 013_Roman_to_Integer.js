/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let sum = 0
    for (let i = 0; i < s.length; i++){
        let c = s[i]
        let n = s[i+1]
        if (c === "I"){
            if (n === "V" || n === "X"){
                sum -= 1
            } else{
                sum += 1
            }
        }
        if (c === "V") sum += 5
        if (c === "X"){
            if (n === "L" || n === "C"){
                sum -= 10
            }else{
                sum += 10
            }
        }
        if (c === "L") sum += 50
        if (c === "C"){
            if (n === "D" || n === "M"){
                sum -= 100
            }else{
                sum += 100
            }
        }
        if (c === "D") sum += 500
        if (c === "M") sum += 1000
        
    } return sum
}
