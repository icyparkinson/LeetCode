/**
 * @param {string} path
 * @return {string}
 */
 var simplifyPath = function(path) {
    let broken = path.split("/")
    let filtered = broken.filter((x) => x !== "")
    let answer = []
    for (let s of filtered){
        if (s === "."){
            continue
        } else if(s === ".."){
            answer.pop()
        } else{
            answer.push(s)
        }
    }
    return "/" + answer.join("/")
};