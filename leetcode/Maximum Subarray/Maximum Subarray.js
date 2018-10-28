/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    for(let i=0;i<nums.length;i++){
        let tmp = nums[i];
        max = Math.max(max,tmp);
        for(let j=i-1;j>-1;j--){
            tmp += nums[j];
            max = Math.max(max,tmp);
        }        
    }
    return max;    
};
