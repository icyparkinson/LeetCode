/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    for (let i = 0; i < haystack.length; i++){
        let c = haystack[i]
        if (c === needle[0]){
            let temp = haystack.substring(i, i+needle.length)
            if (temp === needle){
                return i
            }
        }
    }
    return -1
};