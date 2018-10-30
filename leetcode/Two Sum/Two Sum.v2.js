/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmp = {};
    for(let i=0;i<nums.length;i++){
        if(tmp[nums[i]] == undefined){
            tmp[target - nums[i]] = i;
        }else{
            return [tmp[nums[i]],i];
        }
    }
    return [];
};