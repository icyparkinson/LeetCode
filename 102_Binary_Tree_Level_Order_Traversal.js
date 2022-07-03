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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root === null) return []
    let result = []
    let queue = [root]
    while (queue.length > 0){
        let len = queue.length
        let current = []
        for (let i = 0; i < len; i++){
            let item = queue.shift()
            current.push(item.val)
            if (item.left) queue.push(item.left)
            if (item.right) queue.push(item.right)
        }
        result.push(current)
    }
    return result
};