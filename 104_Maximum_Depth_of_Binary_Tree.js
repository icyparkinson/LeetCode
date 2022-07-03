// function maxDepth(root){
//     if (root === null) return 0
//     let stack = [root]
//     let tempStack = []
//     let temp
//     let count = 0
//     while (stack.length > 0){
//         temp = stack.pop()
//         if (temp.left) tempStack.push(temp.left)
//         if (temp.right) tempStack.push(temp.right)
//         if (stack.length === 0){
//             count ++
//             stack = tempStack
//             tempStack = []
//         }
//     } return count
// }

// function maxDepth(root){
//     if (root === null) return 0
//     return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
// }

function maxDepth(root){
    if (root === null) return 0
    let queue = [root]
    let depth = 0
    
    while (queue.length > 0){
        let len = queue.length
        for (let i = 0; i < len; i++){
            let curr = queue.shift()
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        depth++
    }
    return depth
}