/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    return search(nums, target);
};

const search = (nums, target) => {
    const idx = nums.indexOf(target);
    if(idx > -1) return idx;
    let res = -1;
    let count = 1;    
    
    
    while(res === -1){
        let rightIdx = nums.indexOf(target+count);
        let leftIdx = nums.indexOf(target-count);
        
        if(rightIdx > -1){
            res = rightIdx;
        }
        if(leftIdx > -1){
            res = leftIdx+1;
        }
        count++;
    }
    return res;
}