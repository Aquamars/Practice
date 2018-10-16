/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    res=[];
    com(n, k, [], 1);
    return res;
};
let res = [];
const com = (n, k, ary, depth) => {
    if(ary.length == k){
        res.push(ary);
        return;
    }
    
    if(depth > n) return;
    
    com(n, k, ary, depth + 1);  
    com(n, k, ary.concat(depth), depth + 1);
}