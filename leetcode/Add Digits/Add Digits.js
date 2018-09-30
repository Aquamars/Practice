/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return addDig(num);
};

const addDig = num => {
    const ary = num.toString().split('').map(n=>parseInt(n));
    const count = ary.reduce((a,b)=>a+b);
    return count>9 ? addDig(count) : count;
}