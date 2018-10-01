/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {   
    return nums.sort()[Math.ceil(nums.length/2)-1]
};