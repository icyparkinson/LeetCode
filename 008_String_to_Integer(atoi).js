/**
 * @param {string} s
 * @return {number}
 */
 var myAtoi = function(s) {
    let trimmed = s.trim()
    let answer = ""
    let negative = false
    let maxVal = Math.pow(2, 31) -1
    if (trimmed[0] === "-") negative = true
    for (let i = 0; i < trimmed.length; i++){
        if (i === 0 && (trimmed[i] === "-" || trimmed[i] === "+")) continue
        console.log(`here: ${trimmed[i]}`)
        if (isNaN(trimmed[i]) || trimmed[i] === " ") break
        else{
            answer += trimmed[i]
        }
    }
    console.log(answer)
    if (!answer) return 0
    if (answer > maxVal){
        if (negative) answer = maxVal +1
        else{
            answer = maxVal
        }
    }
    if (negative) return `-${answer}`
    return answer
};