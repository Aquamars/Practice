/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    sortColor(nums)
    return;
};

const sortColor = nums => {
    for(let i=0;i<nums.length;i++){
        if(nums[i]<nums[i-1]){
            let tmp = nums[i];
            nums[i] = nums[i-1];
            nums[i-1] = tmp;
            i -=2;
        }
    }
    return nums;
}