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
        // case 1: newInterval comes after current interval
        if (newInterval[0] > curr[1]){
            result.push(curr)
            continue
        }
        // case 2: newInterval comes before current interval
        else if (newInterval[1] < curr[0]){
            if (!added){
                result.push(newInterval)
                added = true
                result.push(curr)
            } else{
                result.push(curr)
            }
        }
        
        // case 3: newInterval merges with current interval
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

