/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    aryR=[];
    return happy(n);
};
var aryR = [];
const happy = n => {
    if(aryR.indexOf(n)===-1){
        aryR.push(n)
    }else{
        return false;
    }
    const ary = n.toString().split('').map(n=>parseInt(n));
    let count = 0;
    ary.forEach(e=>count+=e*e);
    if(count === 1) return true;
    return happy(count);
}