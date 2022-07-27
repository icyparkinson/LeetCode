/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
 var suggestedProducts = function(products, searchWord) {
    products = products.sort()
    let i = 1
    let answers = []
    while (i <= searchWord.length){
        let subs = searchWord.substring(0, i)
        let temp = products.filter((x) => x.substring(0, i) === subs)
        if (temp.length > 3) temp.length = 3
        answers.push(temp)
        i++
    }
    return answers
};