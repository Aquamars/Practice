/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    return sub(nums,k);
};
const sub = (nums,k) => {
    let res = 0;
    for(let i=0; i<nums.length;i++){
        let sum = 0;
        for(let end=i;end<nums.length;end++){
            sum += nums[end];
            if(sum == k) res++;
        }
    }
    return res;
}