/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    return find(root, k, set = new Set());
};

const find = (root, k, set) => {
    if(root === null) return false;
    if(set.has(k-root.val)) return true;    
    set.add(root.val);
    
    return find(root.right, k, set) || find(root.left, k, set);
    
}