/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    //bfs
//     if (root === null) return 0
    
//     let depth = 0
    
//     let queue = [root]
//     while (queue.length > 0){
//         let len = queue.length
//         for (let i = 0; i < len; i++){
//             let node = queue.shift()
//             if (node.left) queue.push(node.left)
//             if (node.right) queue.push(node.right)
//         }
//         depth++
//     }
    
//     return depth
    
    
    let lvl = 0
    let dfs = (node, depth) => {
        if (!node) return maxDepth
        lvl = Math.max(lvl, depth)
        dfs(node.left, depth+1)
        dfs(node.right, depth+1)
    }
    
    dfs(root, 1)
    return lvl
    
};