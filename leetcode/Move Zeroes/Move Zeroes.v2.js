/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    move(nums);
};

const move = nums => {
    let none_zero = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            nums[none_zero] = nums[i];
            none_zero++;
        }
        // console.log(i,nums[i]);
    }
    while(none_zero < nums.length) nums[none_zero++]=0;
    return nums
}