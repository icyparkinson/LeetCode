/**
 * @param {number[]} nums
 * @return {number[]}
 */

 function pivot(nums, left, right){
    let j = left
    let p = right
    let i = left-1
    
    while (j < p){
        if(nums[j] <= nums[p]){
            i++
            [ nums[j], nums[i] ] = [ nums[i], nums[j] ]
            j++
        } else{
            j++
        }
    }
    i++
    [ nums[i], nums[p] ] = [ nums[p], nums[i] ]
    return i
    
}

var sortArray = function(nums, left=0, right=nums.length-1) {
    if (left < right){
        let pivId = pivot(nums, left, right)
        
        sortArray(nums, left, pivId-1)
        sortArray(nums, pivId+1, right)
    } return nums
};