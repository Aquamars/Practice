/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return duplicate(nums);
};

const duplicate = nums => {
    let dup = new Set();
    for(let i=0; i<nums.length;i++){
        if(!dup.has(nums[i])){
            dup.add(nums[i]);
        }else{     
            return true;
        }        
    }
    return false;
}