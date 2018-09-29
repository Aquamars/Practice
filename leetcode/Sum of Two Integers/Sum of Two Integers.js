/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    return getS(a,b);
};

const getS = (a,b) => {
    
    if(b === 0) return a;
    if(a === 0) return b;    
    
    while(b!==0){
        let carry = a&b;
        a = a^b;
        b = carry << 1;
    }
    return a;    
}