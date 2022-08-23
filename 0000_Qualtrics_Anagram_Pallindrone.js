const isAnaPal = (str) => {
    let arr = Array(26).fill(0)
    for (let c of str){
        let charIdx = (c.charCodeAt() - "a".charCodeAt())
        arr[charIdx] += 1
    }
    
    let buffer = 1
    
    for (let v of arr){
        if (v%2 !== 0){
            if (buffer === 1){
                buffer -= 1
            } else{
                return false
            }
        }
    }
    return true
}

console.log(isAnaPal("aabbbccc"))