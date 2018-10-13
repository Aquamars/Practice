/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    sortColor(nums)
    return;
};

const sortColor = nums => {
    let last = nums.length - 1;
    let f = 0;
    let i = 0;
    
    while(i<=last){
        switch(nums[i]){
            case 0:
                [nums[i],nums[f]] = [nums[f], nums[i]]; // swap
                f++;
                i++;
                break;
            case 1:
                i++;
                break;
            case 2:
                [nums[i],nums[last]] = [nums[last], nums[i]];
                last --;
                break;
        }
    }
    return nums;
}