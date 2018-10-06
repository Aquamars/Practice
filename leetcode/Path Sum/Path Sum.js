/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    sumRes = sum;
    res = false;
    if(root == null) return res;
    travTree(root, 0);
    return res;
};
let sumRes = 0;
let res = false;
    
const travTree = (root, sum) => {
    if(root.left != null ) travTree(root.left, sum + root.val);
    if(root.right != null ) travTree(root.right, sum + root.val);
    
    if(root.right == null && root.left == null){
        if((sum + root.val) == sumRes) res = true;
    }
}