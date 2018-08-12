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
var maxDepth = function(root) {
    return getDepth(root);
};

const getDepth = node => {
    
    if(node === null) return 0;
    
    let depthL = 1;
    let depthR = 1;    
    if(node.left !== null) depthL += getDepth(node.left);
    if(node.right !== null) depthR += getDepth(node.right);
    
    return (depthL > depthR ? depthL : depthR);
};