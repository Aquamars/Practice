/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    return genParent(n);
};

const genParent = n => {    
    
    let res = [];
    
    const combine = (current, left, right) => {
        if(current.length == 2*n){
            res.push(current);
            return;
        }
        
        if(left < n) combine(current+'(',left+1,right);
        if(right < left) combine(current+')',left,right+1);
    }
    combine('',0,0);
    return res;        
};