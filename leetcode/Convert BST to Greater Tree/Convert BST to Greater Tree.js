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
var convertBST = function(root) {
    sum = 0;
    return convert(root);
};
let sum = 0;
const convert = root => {
    if(root == null) return root;    
    convert(root.right);
    root.val += sum;
    sum = root.val;
    convert(root.left);
    return root;
}