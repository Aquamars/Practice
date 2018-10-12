/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {    
    let min = Number.MAX_VALUE;
    let prev = null;
    
    const getMini = root => {
        if (root == null) return min;
        
        getMini(root.left);
        
        if (prev != null) {
            min = Math.min(min, root.val - prev);
        }
        prev = root.val;
        
        getMini(root.right);
        
        return min;
    }
    
    return getMini(root);
};