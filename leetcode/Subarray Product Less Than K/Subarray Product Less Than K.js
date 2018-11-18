/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    return numSub(nums,k);
};
const numSub = (nums,k)=>{
    let total = 1;
    let res = 0;
    let left = 0;
    for(let i=0;i<nums.length;i++){
        total *= nums[i];
        
        while(total >= k){
            total /= nums[left];
            left++;
        }
        // console.log(i-left+1,i,left)
        res += Math.max(0, i-left+1);
    }
    return res;
}