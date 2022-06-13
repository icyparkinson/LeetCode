/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if (nums.length === null || nums.length === 0){
        return 0
    }
    if (nums.length === 1){
        return nums[0]
    }
    // if (nums.length === 2){
    //     return Math.max(nums[0], nums[1])
    // }
    let rob1 = nums[0]
    let rob2 = Math.max(nums[0], nums[1])
    
    for (let i = 2; i < nums.length; i++){
        let temp = Math.max(rob2, (nums[i] + rob1))
        // console.log(`rob1: ${rob1}, rob2: ${rob2}, temp: ${temp}`)
        rob1 = rob2
        rob2 = temp
    }
    return rob2
};


// [2, 1, 1, 2]
    // 2  2  
