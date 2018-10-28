/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    return search(root,val);
};

const search = (root, val) => {
    if(root == null) return [];
    if(root.val == val) return root;
    
    if(root.val > val){
        return search(root.left, val);    
    }else{
        return search(root.right, val);    
    }
}