/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    return topK(nums, k);
};

const topK = (nums,k) => {
    let rec = {};
    
    nums.forEach(e=>{
        if(rec[e] === undefined){
            rec[e] = 1;
        }else{
            rec[e]++;
        }
    });
    return (Object.keys(rec).sort((a,b)=>rec[b]-rec[a]).splice(0,k).map(e=>parseInt(e)));    
}