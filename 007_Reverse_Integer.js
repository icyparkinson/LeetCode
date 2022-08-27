/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let negative = x < 0 ? true : false
    let num = (Math.abs(Number(x))).toString()
    let str = ""
    for (let i = num.length-1; i >= 0; i--){
        str+= num[i]
    }
    let max = Math.pow(2,31)
    let answer = Number(str)
    if (answer > max) return 0
    if (negative) return `-${answer}`
    else{
        return answer
    }
};