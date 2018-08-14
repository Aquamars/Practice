/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    return invert(root);
};

const invert = node => {
    if(node === null || (node.left === null && node.right === null)) return node;
    
    const tmp = node.left;
    node.left = invert(node.right);
    node.right = invert(tmp);
    
    return node;
};