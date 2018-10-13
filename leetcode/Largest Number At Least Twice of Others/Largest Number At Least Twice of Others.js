/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    return idx(nums);
};

const idx = nums => {
    let ary = Array.from(nums);
    let max = Math.max(...nums);
    let idx = nums.indexOf(max);
    ary.splice(idx,1);
    return (max >= Math.max(...ary)*2) ? idx : -1;
}