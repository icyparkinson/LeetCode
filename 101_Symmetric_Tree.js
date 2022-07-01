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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if (root.val === null) return true
    function areSymmetric(root1, root2){
        if (root1 === null && root2 === null){
            return true
        }
        else if (root1 === null && root2 !== null){
            return false
        }
        else if (root2 === null && root1 !== null){
            return false
        }
        else if (root1.val !== root2.val){
            return false
        }
        else{
            return areSymmetric(root1.left, root2.right) && areSymmetric(root2.left, root1.right)
        }
    }
    
    return areSymmetric(root.left, root.right)
};