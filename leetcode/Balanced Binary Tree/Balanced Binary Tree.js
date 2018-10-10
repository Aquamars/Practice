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
var isBalanced = function(root) {
    return isBal(root);
};

const isBal = root => {
    if(root === null) return true;

    let left = getDep(root.left);
    let right = getDep(root.right);
 
     let diff = Math.abs(left-right) <= 1;
    
    return diff && isBal(root.left) && isBal(root.right);
}

const getDep = root => {
    if(root == null) return 0;
    let left = 1;
    let right = 1;
    left += getDep(root.left);
    right += getDep(root.right);    
    return Math.max(left, right);
}