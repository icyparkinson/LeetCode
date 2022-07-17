/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    const preReqMap = new Map()
    const visitSet = new Set()
    
    for (let i = 0; i < numCourses; i++){
        preReqMap.set(i, [])
    }
    for (let [course, prereq] of prerequisites){
        preReqMap.get(course).push(prereq)
    }
    
    function dfs(course){
        if (visitSet.has(course)) return false
        if (preReqMap.get(course).length === 0) return true
        
        visitSet.add(course)
        
        for ( let prereq of preReqMap.get(course)){
            if (!dfs(prereq)) return false
        }
        visitSet.delete(course)
        
        preReqMap.set(course, [])
        
        return true
    }
    
    for (let i = 0; i < numCourses; i++){
        if (!dfs(i)) return false
    }
    return true
};