/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
    let map = new Map()
    for (let i = 0; i < nums1.length; i++){
        if (!map.has(nums1[i])){
            map.set(nums1[i], 1)
        } else{
            map.set(nums1[i], map.get(nums1[i]) + 1)
        }
    }
    
    let array = []
    
    for (let j = 0; j < nums2.length; j++){
        if (map.get(nums2[j]) > 0){
            array.push(nums2[j])
            map.set(nums2[j], map.get(nums2[j]) - 1)
        }
    }
    return array
};