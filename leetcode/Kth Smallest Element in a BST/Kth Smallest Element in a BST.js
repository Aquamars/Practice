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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    res = [];
    kSmall(root, k);
    return res[k-1];
};
let res = [];
const kSmall = (root, k) => {
    if(!root) return; 
    
    if(root.left != null) kSmall(root.left, k); 
    
    res.push(root.val);
    
    if(root.right != null) kSmall(root.right, k);
}