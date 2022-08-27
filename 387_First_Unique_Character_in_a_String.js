/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    let arr = {}
    for (let i = 0; i < s.length; i++){
        if (!arr[s[i]]){
            arr[s[i]] = 1
        }else{
            arr[s[i]] += 1
        }
    }
    for (let j = 0; j < s.length; j++){
        if (arr[s[j]] === 1) return j
    }
    return -1
};

