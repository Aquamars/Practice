/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    return product(nums);
};

const product = nums => {
    let res = new Array(nums.length).fill(1);
    let right = 1;
    let left = 1;
    for(let i=0; i<nums.length;i++){                
        let rightIdx = nums.length-1-i;
        
        res[i] *= left;
        res[rightIdx] *= right;
        
        left *= nums[i];
        right *= nums[rightIdx];
        
    }    
    return res;
}