/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    return reshape(nums, r, c);
};

const reshape = (nums, r, c) => {
    let ary = [];
    let newS = [];
    for(let i=0;i<nums.length;i++){        
        for(let j=0;j<nums[i].length;j++){
            ary.push(nums[i][j]);            
        }
    }
    
    if(ary.length != r*c) return nums;

    for(let i=0;i<r;i++){
        let tmp = [];
        for(let j=0;j<c;j++){
            tmp.push(ary.splice(0,1)[0]);
        }
        newS.push(tmp);
    }
    return newS;
}