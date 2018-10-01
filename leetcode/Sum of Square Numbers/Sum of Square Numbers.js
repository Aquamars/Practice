/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    return sqSum(c);
};

const sqSum = c => {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    
    while(a<=b){        
        if((a**2 + b**2) === c) return true;        
        if((a**2 + b**2) < c) a++;
        if((a**2 + b**2) > c) b--;
    }
    return false;
}