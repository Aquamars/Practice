/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    return levelOrder(root);
};

const levelOrder = root => {    
    let res = [];
    if(root == null) return res;
    
    let queue = [];
    
    queue.push(root);
    
    while(queue.length !== 0){
        let size = queue.length;        
        let tmp = [];
               
        for(let i=0; i<size;i++){            
            let currentNode = queue.shift(); 
            tmp.push(currentNode.val);
            if(currentNode.left != null) queue.push(currentNode.left);
            if(currentNode.right != null) queue.push(currentNode.right);            
        }
        res.unshift(tmp);
    }
    return res;
}