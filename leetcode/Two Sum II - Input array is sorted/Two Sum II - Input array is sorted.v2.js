/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    return twoS(numbers, target);
};

const twoS = (nums, tar) => {
    let left = 0;
    let right = nums.length - 1;
    
    while(left < right){
        const sum = nums[left] + nums[right];
        
        if(sum == tar) return [left + 1, right +1];
        
        if(sum < tar) left ++;
        if(sum > tar) right--;
    }
    return [-1,-1];
}