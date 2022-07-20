/*
Input = 
["APPLE", "PLEAS", "PLEASE"]
keypads = 
["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBSKY"]

Output = 
[0, 1, 3, 2 0] where each number represents the number of words (from the wordlist) that can be formed using the keypad letters.

First of all, the first letter of each keypad HAS to be in the word. (So the one starting with X, for example, would not work)
*/

function solve(wordlist, keypads){
    
    
    
}



let wl = ["APPLE", "PLEAS", "PLEASE"]
let kp = ["AELWXYZ", "AELPXYZ", "AELPSXY", "SAELPRT", "XAEBSKY"]
console.log(solve(wl, kp))