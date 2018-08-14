/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return createBST(nums, 0, nums.length-1);
};

const createBST = (nums, left, right) => {
    if(left > right) return null;
    const mid = Math.floor((left+right)*0.5);
    let node = new TreeNode(nums[mid]);    
    node.left = createBST(nums, left, mid-1);
    node.right = createBST(nums, mid+1, right);
    return node;
}