/**
 * https://leetcode.com/problems/meeting-rooms-ii/
 * Time O((N * logN) + (M * logM)) | Space O(1)
 * @param {number[][]} intervals
 * @return {number}
 */
 var minMeetingRooms = function(intervals) {
    const { start, end } = splitIntervals(intervals);
    let [ minRooms, startIndex, endIndex ] = [ 0, 0, 0 ];

    while (startIndex < intervals.length) {
        const [ currStart, prevEnd ]  = [ start[startIndex], end[endIndex] ];

        const hasGap = prevEnd <= currStart;
        if (hasGap) {
            minRooms--;
            endIndex++;
        }

        minRooms++;
        startIndex++;
    }

    return minRooms;
};

const splitIntervals = (intervals, start = [], end = []) => {
    for (const [ startTime, endTime ] of intervals) {
        start.push(startTime);
        end.push(endTime);
    }

    const comparator = ((a, b) => a - b);

    start.sort(comparator);
    end.sort(comparator);

    return { start, end };
};


//ALTERNATE METHOD:

//Time complexity should be O(N log N). We are sorting the two arrays (start and end) individually. Each of them contains N elements considering there are N intervals.
//Space complexity should be O(N) due to creating two individual arrays of size N, one for keeping track of start times and one for the end times.

let intervals = [[0,30],[5,10],[15,20]]

var minMeetingRooms = function(intervals){
    let start = intervals.sort((a, b) => a[0] - b[0])
    let end = intervals.sort((a, b) => a[1] - b[1])

    let rooms = 0

    let j = 0

    for (let i = 0; i < intervals.length; i++){
        if (start[i][0] < end[j][1]){
            rooms++
        }else{
            j++
        }
    }

    return rooms

}

console.log(minMeetingRooms(intervals))