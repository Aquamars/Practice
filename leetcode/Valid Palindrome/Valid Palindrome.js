/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const ary = s.toLowerCase().replace(/[\s]|[\W]/gi, '').split('');
    const end = ((ary.length%2 === 0 )? ary.length/2 : Math.ceil(ary.length/2)-1);
    for(let i=0;i<end;i++){
        if(ary[i] !== ary[ary.length-1-i])return false;
    }    
    return true;    
};
