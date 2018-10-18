/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    return find(nums);
};

const find = nums => {
    nums.sort((a,b)=>a-b);
    for(let i=1; i<nums.length;i++){
        if(nums[i-1]==nums[i]) return nums[i];
    }
}