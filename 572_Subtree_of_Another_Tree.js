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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
    function isSameTree(s, t){
        if (!s || !t) return !s && !t
        if (s.val !== t.val) return false
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
    }
                                                    
    let queue = [root]
    while (queue.length > 0){
        let curr = queue.shift()
        if (isSameTree(curr, subRoot)) return true
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }
    
    return false
    
};