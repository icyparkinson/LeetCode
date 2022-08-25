/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let mPointer = m-1
    let nPointer = n-1
    for (let i = nums1.length-1; i >= 0; i--){
            if (nums1[mPointer] > nums2[nPointer]){
                if (mPointer >= 0){
                    nums1[i] = nums1[mPointer]
                    mPointer--
                }else{
                    nums[i] = nums2[nPointer]
                    nPointer--
                }
                
                // console.log(nums1)
            }else{
                if (nPointer >= 0){
                    nums1[i] = nums2[nPointer]
                    nPointer--
                }else{
                    nums1[i] = nums1[mPointer]
                    mPointer--
                }
                
                // console.log(nums1)
            }
    }
};
