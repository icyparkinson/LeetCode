/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    let answer = 1
    if (nums.length === 0) return 0
    let l = 0
    let r = 1
    while(r < nums.length){
        if (nums[l] === nums[r]){
            r++
        }else{
            answer+=1
            l++
            nums[l] = nums[r]
        }
    }
    return answer
    
};