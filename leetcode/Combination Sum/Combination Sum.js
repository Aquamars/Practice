/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    res = [];
    combineSum(candidates, target, [], 0);
    return res;
};
let res = [];
const combineSum = (cand, target, sol, idx) => {
    const sum = sol.length > 0 ? sol.reduce((a,b)=>a+b) : 0;
    if(sum == target){
        res.push(sol.slice());
        return;
    }
    if(sum > target) return;
    if(sum < target){
        for(let i=idx; i<cand.length;i++){
            sol.push(cand[i]);
            combineSum(cand, target, sol,i);
            sol.pop();
        }
    }
}
