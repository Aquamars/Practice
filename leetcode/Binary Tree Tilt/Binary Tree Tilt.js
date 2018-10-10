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
var findTilt = function(root) {
    return find(root);
};

const find = root => {
    if(root == null) return 0;    
    let tilt = Math.abs(getSum(root.right) - getSum(root.left));
    return tilt + find(root.right) + find(root.left);
}

const getSum = root => {
    if(root == null) return 0;
    return root.val + getSum(root.left) + getSum(root.right);
    
}