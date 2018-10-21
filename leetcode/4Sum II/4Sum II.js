/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    return fourSum(A, B, C, D);
};

const fourSum = (a,b,c,d) => {
    let map = {};
    let res = 0;
    a.forEach(e=>{
        b.forEach(el=>{
            map[e+el] = map[e+el] + 1 || 1;
        });
    });
    
    c.forEach(e=>{
        d.forEach(el=>{
            res += map[-e-el] || 0;
        });
    });
    return res;
};