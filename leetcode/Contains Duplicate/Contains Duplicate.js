/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let tmp=null;
    let ans = null;
    if(nums === []) return false;
    nums.sort().forEach(n=>{(tmp !== n) ? tmp = n : ans = n});
    return (ans === null)? false : true;
};
