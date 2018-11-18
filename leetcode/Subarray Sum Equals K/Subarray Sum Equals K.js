/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    return sub(nums,k);
};
const sub = (nums,k) => {
    let ary = [];
    let res = 0;
    nums.forEach((e,i)=>ary[i]=e+(ary[i-1] == undefined ? 0 :ary[i-1]));
    for(let i=0; i<ary.length;i++){
        let idx = 0;
        if(ary[i]==k) res++;
        while(idx < i){
            if(ary[i] - ary[idx] == k) res++;
            idx++;
        }
    }
    return res;
}