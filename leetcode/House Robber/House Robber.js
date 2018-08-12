/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let aryMax = [];
    const len = nums.length;
    if(len === 0) return 0;
    if(len === 1) return nums[0];
    if(len === 2) return Math.max(nums[0],nums[1]);
    aryMax.push(nums[0]);
    aryMax.push(Math.max(nums[0],nums[1]));
    for(let i=2;i<len;i++){
        aryMax[i] = Math.max(nums[i]+aryMax[i-2], aryMax[i-1]);
    }    
    return aryMax.pop();    
};
