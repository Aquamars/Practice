/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const sAry = s.split('');
    if(sAry.length%2 !==0) return false;
    let ary = [];
    let ans = true;
    sAry.forEach((n,i)=>{        
        if(par[n]!== undefined){
            ary.push(par[n]);
        }else if(n === ary[ary.length-1]){
            ary.pop();
        }else {
            ans = false;
        }
    });
    ans = (ary.length === 0);
    return ans;
};

const par = {
    '{':'}',
    '(':')',
    '[':']'
}
