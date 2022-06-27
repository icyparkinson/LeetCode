/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    let newA = BigInt("0b" + a)
    console.log(newA)
    let newB = BigInt("0b" + b)
    let sum = newA + newB
    console.log(sum)

    let newSum = sum.toString(2)
    return newSum
};