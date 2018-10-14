/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    return countB(num);
};
//a & b 	Returns a 1 in each bit position for which the corresponding bits of both operands are 1s.
const countB = num => {
    let res = new Array(num+1).fill(0);
    for(let i=1;i<=num;i++){
        res[i] = res[i & (i - 1)]+1;
    }
    return res;
}