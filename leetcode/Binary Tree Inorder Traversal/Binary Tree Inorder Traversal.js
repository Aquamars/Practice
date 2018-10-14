/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    return inorder(root)  ;
  };
  
  const inorder = root => {
      if(root == null) return [];
      let res = [];
      if(root.left != null) res = res.concat(inorder(root.left));
      res.push(root.val);
      if(root.right != null) res = res.concat(inorder(root.right));
      return res;
  }