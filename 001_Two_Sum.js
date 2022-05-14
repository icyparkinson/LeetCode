var twoSum = function(nums, target) {
    let memory = {}
    for (let i = 0; i < nums.length; i++){
        let diff = target - nums[i]
        if (memory[diff] === undefined){
            memory[nums[i]] = i
            
        }
        else if (memory[diff] !== undefined){
            return [memory[diff], i]
        }
    }
};