/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    return twoS(numbers, target);
};

const twoS = (nums, tar) => {
    for(let i=0; i<nums.length+1;i++){
        let idx = nums.indexOf(tar - nums[i]);
        if(nums[i] == tar) idx = nums.indexOf(0);
        if(idx > -1 && idx != i){
            if(i+1 > idx+1) return [idx+1,i+1];
            return [i+1,idx+1];
        }
    }
    return [];
}