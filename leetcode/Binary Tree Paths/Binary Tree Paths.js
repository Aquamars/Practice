/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    res = [];
    if(root == null) return res;
    path(root,root.val+'');
    return res;
};
let res = [];
const path = (root,s) => {
    if(root.left == null && root.right == null) res.push(s);
    if(root.left != null) path(root.left, s + '->' + root.left.val);
    if(root.right != null) path(root.right, s + '->' + root.right.val);
}