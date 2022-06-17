/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    const graph = buildGraph(edges)
    return hasPath(graph, source, destination, new Set())
    
    
    function hasPath(graph, src, dst, visited){
        if (src === dst){
            return true
        }
        if (visited.has(src)){
            return false
        }
        
        visited.add(src)
        
        for (let neighbor of graph[src]){
            if (hasPath(graph, neighbor, dst, visited) === true){
                return true
            }
        } return false
    }
    
    
    function buildGraph(edges){
        const graph ={}
        
        for (let edge of edges){
            const [a,b] = edge
            if (!(a in graph)){
                graph[a] = []
            } if (!(b in graph)){
                graph[b] = []
            } 
            graph[a].push(b)
            graph[b].push(a)
        } return graph
    }
    
    
};