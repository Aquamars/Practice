/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    return plus(digits);
};

const plus = digits => {
    let next = 1;
    for(let i = digits.length-1; i>-1;i--){
        if(digits[i]+next > 9){
            digits[i] = digits[i]+next - 10;
        }else{
            digits[i] = digits[i]+next;
            next = 0;
        }
    }
    if(next>0) digits.unshift(1);
    return digits;
}