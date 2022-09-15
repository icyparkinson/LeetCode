/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let container = 0
    let l = 0
    let r = height.length-1
    while (l < r){
        let lowerH = Math.min(height[l], height[r])
        let area = lowerH * (r-l)
        container = Math.max(area, container)
        if (height[l] <= height[r]){
            l++
        }else{
            r--
        }
    } return container
};