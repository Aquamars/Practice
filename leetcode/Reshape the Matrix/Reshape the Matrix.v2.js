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
    
    if(r*c !== nums[0].length * nums.length) return nums;
    
    let res = [];
    let ary = nums.reduce((p,c)=>p.concat(c),[]);

    for(let i=0; i<r; i++){
        res.push(ary.slice(i*c, i*c+c));
    }
    
    return res;
}