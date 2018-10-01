/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    return isSquare(num);
};

const isSquare = num => {
    if(num === 1) return true;
    let start = 1;
    let end = Math.floor(num/2);    
    while(start < end){
        if(start**2 === num | end**2 === num) return true;
        if(start**2 < num) start++;
        if((start*10)**2 < num) start *= 10;
        if(end**2 > num) end--;
        if((end/10)**2 > num) end /= 10;
    }
    return false;
}