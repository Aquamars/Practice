/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    return find(nums);
};

const find = nums => {
    let ary = Array.from(nums);
    let sorted = ary.sort((a,b)=>a-b);
    let leftIdx = 0;
    let rightIdx = nums.length -1;

    while(nums[leftIdx] === sorted[leftIdx] && leftIdx < (nums.length -1)) leftIdx++;
    while(nums[rightIdx] === sorted[rightIdx] && 0 < rightIdx) rightIdx--;
    
    if(rightIdx === 0 && leftIdx === nums.length -1) return 0;
    
    return rightIdx - leftIdx +1;
    
}