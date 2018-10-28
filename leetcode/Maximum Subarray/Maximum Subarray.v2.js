/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return max(nums);
};

const max = nums => {
    let maxTmp = nums[0];
    let ans = nums[0];
    for(let i=1; i<nums.length;i++){
        maxTmp = Math.max(nums[i], maxTmp+nums[i]);
        ans = Math.max(ans,maxTmp);
    }
    return ans;
};