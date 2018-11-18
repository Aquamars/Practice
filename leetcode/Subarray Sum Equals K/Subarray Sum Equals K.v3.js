/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    return sub(nums,k);
};
const sub = (nums,k) => {
    let res = 0;
    let map = new Map();
    let sum = 0;
    map.set(0,1);
    nums.forEach(e=>{
        sum += e;
        if(map.has(sum-k))  res+=map.get(sum-k);
        if(map.has(sum)){
            map.set(sum,map.get(sum)+1);
        }else{
            map.set(sum,1);
        }        
    });
    return res;
}