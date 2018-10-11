/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    return findP(nums, k);
};

const findP = (nums, k) => {
    if(k < 0) return 0;
    
    let once = new Set();
    let pairs = new Set();
    
    nums.forEach(e=>{
        if(once.has(e+k)) pairs.add(e+':'+(e+k));
        if(once.has(e-k)) pairs.add((e-k)+':'+e);
        once.add(e);
    });
    console.log(pairs)
    return pairs.size;
}