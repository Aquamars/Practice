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
var sumOfLeftLeaves = function(root) {
    return sumLeft(root);
};

const sumLeft = root => {
    if(root == null) return 0;
    let res = 0;
    if(root.left != null){
        if(root.left.left == null && root.left.right == null){
            res += root.left.val;
        }else{
            res += sumLeft(root.left);
        }
    }
    
    if(root.right != null) res += sumLeft(root.right);
    return res;
    
};