/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    return pivot(nums);
};

const pivot = nums => {
    if(nums.length == 0) return -1;
    const sum = nums.reduce((a,b)=>a+b);
    let sumL = 0;
    for(let i=0;i<nums.length;i++){
        if(sumL == sum-sumL-nums[i]) return i;
        sumL += nums[i];
    }
    return -1;
}