/**
 * @param {string[]} paths
 * @return {string[][]}
 */
 var findDuplicate = function(paths) {
    let group = {}
    for (let path of paths){
        let [dir, ...files] = path.split(" ")
        for (let file of files){
            let content = file.slice(file.indexOf("(")+1, file.length-1)
            let name = file.slice(0, file.indexOf("("))
            let path = `${dir}/${name}`
            
            if (!group[content]) group[content] = []
            group[content].push(path)
            
        }
    } return [...Object.values(group)].filter((x) => x.length > 1)
};