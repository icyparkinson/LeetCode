/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest = 0
    
    for (let n of nums){
        if (set.has(n-1)) continue
        else{
            let length = 0
            while (set.has(length+n)){
                length +=1
            }
            longest = Math.max(longest, length)
        }
        
    } return longest
};

