/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    return findLowestCom(root, p, q);
};

const findLowestCom = (root, p, q) => {
    if(root == null) return root;
    
    if(root.val == p.val || root.val == q.val) return root;
    
    let left = findLowestCom(root.left, p, q);
    let right = findLowestCom(root.right, p, q);
    
    if(left != null && right != null) return root;
    
    return left !== null ? left : right;
}