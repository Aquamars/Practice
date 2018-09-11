/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    return (isP(x));
};

const isP = x => {
    const ary = x.toString().split('');
    let right = ary.length -1;
    let left = 0;    
    let center = (ary.length % 2 === 0 ? (ary.length/2) : Math.floor(ary.length/2));
    if(ary.length === 1) return true;    
    if(ary.length === 2) return (ary[0] === ary[1]);
    for(let i = 0; i < center; i++){        
        if(ary[left + i] !== ary[right - i]) return false;        
    }
    return true;    
}