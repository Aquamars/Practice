/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    return findP(nums, k);
};

const findP = (nums, k) => {
    // console.log(nums.sort((a,b)=>a-b));
    let res = 0;
    let set = new Set();
    if(k<0) return 0;
    if(k === 0){
        for(let i = 0; i<nums.length;i++){
            if(!set.has(nums[i])){
                set.add(nums[i]);
                let tmp = Array.from(nums);
                tmp.splice(i,1);
                if(tmp.indexOf(nums[i])>-1) res++;
            }
        }        
    }else{
        let notRepeat = new Set();
        for(let i = 0; i<nums.length;i++){
            // console.log(set);
            if(!notRepeat.has(nums[i])){
                notRepeat.add(nums[i]);
                set.add(nums[i]);
                if(nums.indexOf(nums[i]-k)>-1){
                    res++
                    set.add(nums[i]-k);
                    // console.log(nums[i]-k, nums[i]);
                }
                if(nums.indexOf(nums[i]+k)>-1){
                    res++
                    set.add(nums[i]+k);
                    // console.log(nums[i]+k, nums[i]);
                }
            }
        }
        res /=2;
    }
    return res;
}