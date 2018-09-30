/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    return isU(num);
};

const isU = num => {
    num = Math.sqrt(num).isInteger ? Math.sqrt(num) : num;
    if(num === 0) return false;
    if(num === 1) return true;
    if(num === 2) return true;
    if(num === 3) return true;
    if(num === 5) return true;
    if(num%2 === 0) return isU(num/2);
    if(num%3 === 0) return isU(num/3);
    if(num%5 === 0) return isU(num/5);
    
    return false;    
}