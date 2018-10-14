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
var minDiffInBST = function(root) {
    return minDif(root);
};

const minDif = root => {
    let min = Number.MAX_VALUE;
    const inorderAry = inorder(root);
    
    for(let i = 0; i<inorderAry.length-1;i++){
        min = Math.min(inorderAry[i+1]-inorderAry[i],min);
    }
    return min;    
}

const inorder = root => {
    if(root == null) return [];
    let res = [];
    if(root.left != null) res = res.concat(inorder(root.left));
    res.push(root.val);
    if(root.right != null) res = res.concat(inorder(root.right));
    return res;
}