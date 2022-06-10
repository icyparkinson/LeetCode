/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = function(s) {
    let stringSet = new Set()
    let max = 0
    let arr = s.split("")
    let l = 0 //index
    let r = 0 //index
    if (arr.length <=1){
        return arr.length
    }
    while (r < arr.length){
        if (!stringSet.has(arr[r])){
            stringSet.add(arr[r])
            r++
            max = Math.max(max, stringSet.size)
        }
          else{
            stringSet.delete(arr[l])
            l++
        }
    } return max
    
};