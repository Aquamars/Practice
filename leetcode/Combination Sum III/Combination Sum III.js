/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    res = [];
    combine(k,n,[],1);
    return res;
};
let res = [];
const combine = (k,n,sol,num) => {
    const sum = sol.length > 0 ? sol.reduce((a,b)=>a+b) : 0;
    if(sol.length == k && sum == n){
        res.push(sol.slice());
        return;
    }
    if(num > 9) return;
    if(sol.length < k){
        for(let i=num; i<9+1;i++){
            combine(k,n,sol.concat([i]),i+1);    
        }        
    }
}