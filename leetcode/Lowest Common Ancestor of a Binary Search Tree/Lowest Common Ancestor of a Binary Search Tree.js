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
    return lowestCom(root, p, q);
};

const lowestCom = (node, p, q) => {
    if(node !== null){
        if(node.val > p.val && node.val > q.val){ return lowestCom(node.left, p, q);}
        if(node.val < p.val && node.val < q.val) return lowestCom(node.right, p, q);
    }    
    return node;
    
}