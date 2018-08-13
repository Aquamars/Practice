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
var levelOrder = function(root) {
    
    if(root === null || root.length === 0) return [];
    let map = {};
    let stack = [{depth:0, node:root}];
    
    while(stack.length > 0){
        const current = stack.pop();
        const currentNode = current.node;
        
        if(!map[current.depth]){
            map[current.depth] = [currentNode.val];
        }else{
            map[current.depth].push(currentNode.val);
        }

        if(currentNode.right) stack.push({depth:current.depth+1, node:currentNode.right});
        if(currentNode.left) stack.push({depth:current.depth+1, node:currentNode.left});
    }
    
    let result = [];
    for(let i in map)result.push(map[i]);
    
    return result;
    
};