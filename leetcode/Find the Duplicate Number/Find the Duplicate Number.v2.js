/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    return find(nums);
};

const find = nums => {
    let set = new Set();
    for(let i=0; i<nums.length;i++){
        if(set.has(nums[i])){
            return nums[i];
        }else{
            set.add(nums[i]);
        }
    }
}