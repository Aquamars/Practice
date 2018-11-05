/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    return find(nums);
};

const find = nums => {
    let map = {};
    nums.forEach(e=>{
       map[e] = (map[e] == undefined) ? 1 : map[e]+1;
    });
    // console.log(map)
    let maxTotal = 0;
     Object.keys(map).forEach(k=>{
        if(map[k-1] !== undefined){
            maxTotal = Math.max(maxTotal,map[k]+map[k-1]);
        }
    });
    return maxTotal;
}