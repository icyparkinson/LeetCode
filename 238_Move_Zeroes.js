/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let snowball = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            snowball++
        } else if (snowball > 0){
            let t = nums[i]
            nums[i - snowball] = t
            nums[i] = 0
        }
    }
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 const flip = (arr, j, k) => {
    [arr[j], arr[k]] = [arr[k], arr[j]]
}

var moveZeroes = function(nums) {
    let j = 0
    let k = 1
    
    while (k < nums.length){
        if (nums[j] === 0 && nums[k] !== 0){
            flip(nums, j, k)
            j++
            k++
        } else if (nums[j] === 0 && nums[k] === 0){
            k++
        } else{
            j++
            k++
        }
    }
    
};