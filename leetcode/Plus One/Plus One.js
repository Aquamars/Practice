/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let last = null;
    let isChange = true;
    digits = digits.reverse().map(n => {        
        if(isChange){
            if(n+1>9){
                isChange = true;
                return 0;
            } else {
                isChange = false;
                return n+1;
            }  
        }
        return n;        
    });
    if(isChange)digits.push(1);
    return digits.reverse();
};
