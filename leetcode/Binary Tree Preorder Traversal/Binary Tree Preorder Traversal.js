/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    return preorder(root);
};

const preorder = root => {
    let res = [];
    if(root == null) return res;
    
    res.push(root.val);
    
    if(root.left != null) res = res.concat(preorder(root.left));
    if(root.right != null) res = res.concat(preorder(root.right));
    
    return res;    
}