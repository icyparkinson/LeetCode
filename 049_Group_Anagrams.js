/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    let hashMap = {}
    for (let word of strs){
        count = Array(26).fill(0)
        for (let letter of word){
            count[letter.charCodeAt() - "a".charCodeAt()] += 1
        }
        if (!hashMap[count]) hashMap[count] = []
        hashMap[count].push(word)
    } return Object.values(hashMap)
};