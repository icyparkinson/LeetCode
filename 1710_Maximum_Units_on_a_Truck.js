/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    let total = 0
    
    boxTypes.sort((a,b) => b[1] - a[1])
     
     for (let i = 0; i < boxTypes.length; i++){
         if (truckSize === 0) break
         let count = Math.min(boxTypes[i][0], truckSize)
         total += count * boxTypes[i][1]
         truckSize -= count
     }
     
     return total
     
 };
 
 
 