/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
    let result = []
    let added = false
    for (let i = 0; i < intervals.length; i++){
        let curr = intervals[i]
        
        //case1: newInterval comes after curr
        if (newInterval[0] > curr[1]){
            result.push(curr)
            continue
        }
        
        //case2: newInterval comes before curr
        if (newInterval[1] < curr[0]){
            if (!added){
                result.push(newInterval)
                added = true
            }
            result.push(curr)
        }
        
        //case3: newInterval merges with curr
        else{
            newInterval[0] = Math.min(newInterval[0], curr[0])
            newInterval[1] = Math.max(newInterval[1], curr[1])
        }
    }
    if (!added){
            result.push(newInterval)
    }
    return result
};