/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    res = new Set();
    
    combinSum(candidates, target, [], 0);
    let out = [];
    res.forEach(e=>out.push(e.split(',').map(Number)));
    return out;
};
let res = new Set();
const combinSum = (cand, target, sol, idx) => {
    const sum = sol.length > 0 ? sol.reduce((a,b)=>a+b) : 0;
    if(sum === target){
        res.add(Array.from(sol).sort((a,b)=>a-b).toString());
        return;
    }
    
    if(sum > target) return;
    
    for(let i=idx; i< cand.length; i++){      
        sol.push(cand[i]); 
        combinSum(cand, target, sol, i+1);
        sol.pop();
    }
};