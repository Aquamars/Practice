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
var diameterOfBinaryTree = function(root) {
    res = 0;
    trav(root);
    return res;
};
let res = 0;

const trav = root => {
    if(root!=null){
        // console.log(root.val, res);
        let right = 0;
        let left = 0;
        if(root.right != null){
            right = dep(root.right)+1;
            trav(root.right);
        }
        if(root.left != null){
            left = dep(root.left)+1;
            trav(root.left);
        }

        res = Math.max(res, right+left);
    }
}

const dep = root => {
    if(root!=null){
        let right = 0;
        let left = 0;
        if(root.right != null){
            right = dep(root.right)+1;
        }
        if(root.left != null){
            left = dep(root.left)+1;
        }        
        return Math.max(right, left);
    }
    return 0;
}