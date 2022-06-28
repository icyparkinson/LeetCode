/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
 var canArrange = function(arr, k) {
    let freq = Array(k).fill(0)
    
    for ( let i = 0; i < arr.length; i++){
        let mod = arr[i] % k
        if (mod < 0){
            mod += k
        }
        freq[mod]++
    }
    
    if (freq[0] %2 !== 0){
        return false
    }
    
    for (let i = 1; i < freq.length; i++){
        if (freq[i] !== freq[k-i]){
            return false
        }
    } return true
};