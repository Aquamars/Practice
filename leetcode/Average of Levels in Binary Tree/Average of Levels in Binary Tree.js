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
var averageOfLevels = function(root) {
    return avgLevel(root);
};

const avgLevel = root => {
    let res = [];
    
    if(root == null) return res;
    
    let queue = [];
    
    queue.push(root);
    
    while(queue.length != 0){
        let size = queue.length;
        let total = 0;
        for(let i=0; i<size;i++){
            let node = queue.shift();            
            total += node.val;
            if(node.left != null)queue.push(node.left);
            if(node.right != null)queue.push(node.right);
        }
        res.push(total/size);
    }
    return res;
    
}