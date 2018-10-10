/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    return checkNonDeAry(nums);
};

const checkNonDeAry = nums => {
    let pre = null;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(i > 0 && nums[i-1] - nums[i] > 0){
            if(count > 0) return false;  
            if(i===1 || nums[i] >= nums[i-2]){ 
                nums[i-1] = nums[i];
            }else{
                nums[i] = nums[i - 1];
            }
            count++;            
        }
    }
    return true;
}