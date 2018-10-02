/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    return trailZero(n);
};

const trailZero = n => {    
    if(n === 0) return 0;
    let res = 0;
    while(n>0){
        res += Math.floor(n/5);
        n = Math.floor(n/5);
    }
    return res;
}
