/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    res = [];
    prem(nums, []);
    return res;
};

let res = []

const prem = (nums, current) => {
    if(nums.length == current.length) res.push(current);
    
    nums.forEach((e,i)=> {
       if(!current.includes(e)){
          prem(nums, current.concat(e));
       }
    });
}