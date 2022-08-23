/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
 var angleClock = function(hour, minutes) {
    let hourDegree = (hour + minutes/60)*30
    let minDegree = 6*minutes //180
    let angle = Math.abs(hourDegree - minDegree)
    return Math.min(angle, 360-angle)
};