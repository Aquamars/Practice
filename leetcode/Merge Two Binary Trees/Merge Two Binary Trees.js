/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(t1 === null && t2 === null) return [];
    return merge(t1, t2);
};

const merge = (t1, t2) => {    
    
    if(t1 === null && t2 === null) return null;
    let val = 0;
    val += (t1 !== null) ? t1.val : 0;
    val += (t2 !== null) ? t2.val : 0;    
    let node = new TreeNode(val);
    
    if(t1 !== null && t2 !== null){
        node.right = merge(t1.right, t2.right);
        node.left = merge(t1.left, t2.left);        
    }
    else if(t1 !== null && t2 === null){
        node.right = merge(t1.right, null);
        node.left = merge(t1.left, null);
    }
    else if(t1 === null && t2 !== null){
        node.right = merge(null, t2.right);
        node.left = merge(null, t2.left);
    }
    return node;    
}