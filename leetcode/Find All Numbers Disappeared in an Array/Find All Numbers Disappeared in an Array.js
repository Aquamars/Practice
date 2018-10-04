/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    return findNum(nums);
};

const findNum = nums => {
    let res = [];
    let i = 1;
    while(i < nums.length+1){        
        while(nums.indexOf(i) !== -1){
            i++;
        }
        if(i < nums.length+1) res.push(i); 
        i++;
    }    
    return res;
}