/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let trans = n.toString(2);    
    const orgLeng = trans.length;
    if(orgLeng !== 32){
        for(let i=0; i<(32-orgLeng);i++){
            trans = '0' + trans;
        }
    }    
    return parseInt(trans.split('').reverse().join(''),2);
};
