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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let answer = []
    if (!root) return answer
    const traversal = (node) => {
        if (node.left) traversal(node.left)
        answer.push(node.val)
        if (node.right) traversal(node.right)
    }
    traversal(root)
    return answer
};


var kthSmallest = function(root, k) {
    var inorderTraversal = function(root) {
        let answer = []
        if (!root) return answer
        const traversal = (node) => {
            if (node.left) traversal(node.left)
            answer.push(node.val)
            if (node.right) traversal(node.right)
        }
        traversal(root)
        return answer
    };
    
    let list = inorderTraversal(root)
    return list[k-1]
};