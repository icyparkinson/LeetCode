var cloneGraph = function(node) {
    if (!node){
        return null
    }
    
    const map = new Map()
    const queue = [node]
    map.set(node, new Node(node.val), [])
    
    while (queue.length > 0){
        let curr = queue.shift()
        for (let neighbor of curr.neighbors){
            if (!map.has(neighbor)){
                map.set(neighbor, new Node(neighbor.val, []))
                queue.push(neighbor)
            }
            const cloneNode = map.get(curr)
            const cloneNeighbor = map.get(neighbor)
            cloneNode.neighbors.push(cloneNeighbor)
        }
    }
return map.get(node)
};