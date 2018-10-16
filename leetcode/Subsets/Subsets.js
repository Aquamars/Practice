/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    res = [];
    sub(nums,0,[]);
    return res;
};
let res = [];
const sub = (nums, idx, tmp) => {
    
    res.push(tmp.slice());
    
    for(let i=idx; i<nums.length;i++){
        tmp.push(nums[i]);
        // console.log(tmp);
        sub(nums, i+1, tmp);
        tmp.pop();
        // console.log(tmp);
    }
}