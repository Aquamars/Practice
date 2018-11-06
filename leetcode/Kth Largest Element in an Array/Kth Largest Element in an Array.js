/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return find(nums,k);
};

const find = (nums,k) => {
    return nums.sort((a,b)=>b-a)[k-1];
}