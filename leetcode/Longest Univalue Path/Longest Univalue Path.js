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
var longestUnivaluePath = function(root) {
    rec = 0;
    if(root === null) return rec;
    travTree(root);
    return rec;
};
let rec = 0;
const travTree = root => {    
    const res = find(root, root.val);
    rec = rec < res ? res : rec;

    if(root.left != null){
        travTree(root.left);
    }
    if(root.right != null){
        travTree(root.right);
    }
}

const find = (node, num) => {
    let count = 0;
    let countL = 0;
    let countR = 0;
    if(node.left != null){
        // console.log(node.left.val, num);
        if(node.left.val == num){

            countL = find(node.left, num) + 1;
        }
    }
    if(node.right != null){
        // console.log(node.right.val, num);
        if(node.right.val == num){
            countR= find(node.right, num) + 1;
        }
    }
    count += countL > countR ? countL : countR;
    rec = rec < count ? count : rec;
    rec = rec < (countL+countR) ? (countL+countR) : rec;
    return count;
}