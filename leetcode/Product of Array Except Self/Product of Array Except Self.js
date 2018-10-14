/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    return product(nums);
};

const product = nums => {
    let pre = [];
    let post = new Array(nums.length).fill(1);
    for(let i=0; i<nums.length;i++){
        if(i > 0)pre.push(pre[i-1]*nums[i-1]);
        if(i == 0)pre.push(1);        
        
        let postIdx = nums.length-1-i;
        if(postIdx < nums.length-1)post[postIdx] = (post[postIdx+1]*nums[postIdx+1]);
        if(postIdx == nums.length-1)post[postIdx] = 1;
    }    
    return pre.map((e,i)=>e*post[i]);
}