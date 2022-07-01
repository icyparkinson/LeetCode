var findKthLargest = function (nums, k) {
    k = nums.length - k

    function quickSelect(l, r){
        let p = l
        let pivot = nums[r]
        for (let i = l; i < nums.length; i++){
            if (nums[i] < pivot){
                [nums[i], nums[p]] = [nums[p], nums[i]]
                p++
            }
        } 
        [nums[p], nums[r]] = [nums[r], nums[p]]
        if (p < k){
            return quickSelect(p+1, r)
        }
        if (p > k){
            return quickSelect(l, p-1)
        }
        return nums[p]
    }
    
    
    return quickSelect(0, nums.length-1)
};