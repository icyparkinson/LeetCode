/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    while (b !== 0){
        //when you do a AND b, it returns a 1 only if both a and b is 1 but a 0 otherwise. Then move the value left by 1 digit to bring over the carry (which happens if there is a 1)
        let tmp = (a & b) <<1
        
        //when you do a XOR b, it returns a 1 if either a or b is 1 but a 0 otherwise
        a = a ^ b
        
        //use the tmp value, otherwise it would be altered by the previous step
        b = tmp
    }
    return a
};