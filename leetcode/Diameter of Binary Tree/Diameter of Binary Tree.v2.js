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
var diameterOfBinaryTree = function(root) {
    res = 0;
    fingDep(root);
    return res
};
let res = 0;
const fingDep = root => {
    if(root == null) return 0;
    let left = fingDep(root.left);
    let right  = fingDep(root.right);
    res = Math.max(res, left+right);
    return Math.max(left, right)+1;

}