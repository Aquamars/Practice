/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    return isSub(s,t);
};

const isSub = (s,t) => {    
    let root = s;
    let sub = t;

    if(root !== null){
        if(root.val === sub.val){
            if(isSame(root, sub)) return true;
        }
        if(root.left != null && root.right != null) return isSub(root.left, sub) || isSub(root.right, sub);
        if(root.left != null && root.right == null) return isSub(root.left, sub);
        if(root.left == null && root.right != null) return isSub(root.right, sub);
    }
    return false;
}

const isSame = (root, sub) => {
    if(root == null && sub == null) return true;
    if(root != null && sub == null) return false;
    if(root == null && sub != null) return false;
        
    if(root.val !== sub.val) return false;
    
    return isSame(root.right, sub.right) && isSame(root.left, sub.left);
}