/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 var findCircleNum = function(isConnected) {
    let visited = new Set()
    let circles = 0
    
    for (let i = 0; i < isConnected.length; i++){
        if (!visited.has(i)){
            dfs(i)
            circles++
        }
    }
    
    return circles
    
    function dfs(i){
        for (let j = 0; j < isConnected.length; j++){
            if (isConnected[i][j] === 1 && !visited.has(j)){
                visited.add(j)
                dfs(j)
            }
        }
    }
};



//ADJACENCY LIST METHOD

/**
 * @param {number[][]} isConnected
 * @return {number}
 */



 function getEdges(idx, edge){
    let edges = []
    for (let i = 0; i < edge.length; i++){
        if (i === idx) continue
        if (edge[i] === 0) continue
        edges.push(i)
    }
    
    return edges
}

function buildAdjList(edges, n = edges.length){
    let adjList = Array.from({length: n}, () => [])
    for (let i = 0; i < edges.length; i++){
        adjList[i].push(...getEdges(i, edges[i]))
    }
    
    return adjList
}

function dfs(node, adjList, visited){
    visited[node] = true
    for (let neighbor of adjList[node]){
        if (!visited[neighbor]){
            visited[neighbor] = true
            dfs(neighbor, adjList, visited)
        }
    }
}

var findCircleNum = function(isConnected) {
    let provinces = 0
    let adjList = buildAdjList(isConnected)
    let visited = []
    
    
    for (let vertex = 0; vertex < adjList.length; vertex++){
        if (!visited[vertex]){
            provinces++
            dfs(vertex, adjList, visited)
        }
    }
    return provinces
};