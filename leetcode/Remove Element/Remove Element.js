/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    return (reE(nums, val)).length;
};

const reE = (nums, val) => {
    let cur = 0;
    const len = nums.length;
    for(let i=0; i < len; i++){
        if(val===nums[cur]){
            nums.splice(cur,1);
            cur --;
        }
        cur ++;
    }
    return nums;
}