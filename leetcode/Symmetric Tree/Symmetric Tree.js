/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isSym(root);
};

const isSym = node => { 
    
    if(node === null) return true;
    if((node.left === null && node.right !== null) || (node.left !== null && node.right === null)) return false;
    
    const nodeLeft = node.left;
    const nodeRight = invert(node.right);
    
    return isSame(nodeLeft, nodeRight);
};

const invert = node => {
    if((node === null) || (node.left === null && node.right === null)) return node;
    
    const tmp = node.left;
    node.left = invert(node.right);
    node.right = invert(tmp);
    
    return node;
};

const isSame = (p, q) => {
    if(p === null && q === null) return true;
    
    if((p !== null && q === null) || (p === null && q !== null)) return false;
    if(p.val !== q.val) return false;
    
    return (isSame(p.left, q.left) && isSame(p.right, q.right));
};