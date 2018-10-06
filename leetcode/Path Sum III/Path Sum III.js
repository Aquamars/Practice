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
 * @return {number}
 */
var pathSum = function(root, sum) {
    res = 0;    
    if(root == null) return res;
    sumP(root, sum);
    travTree(root, sum);
    return res;
};
var res = 0;
const travTree = (root, sum) => {    
    if(root.left != null) {
        sumP(root.left, sum);
        travTree(root.left, sum);
    }
    if(root.right != null) {
        sumP(root.right, sum);
        travTree(root.right, sum);
    }
}
const sumP = (root, sum) => {    
    if(root.val === sum){
        // console.log("res",sum,root.val)
        res ++;
    }
    if(root.left != null) sumP(root.left, (sum-root.val));        
    if(root.right != null) sumP(root.right, (sum-root.val));
};