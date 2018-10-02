/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    return toNum(s);
};

const toNum = s => {
    const ary = s.split('');
    let res = 0;
    ary.forEach((e,i)=>{        
        if(i < ary.length-1){            
            if(ary.length-1 - i > 1){
                let nums = (e.charCodeAt() - 64);
                for(let x = (ary.length-1 - i); x > 0;x--){
                    nums *= 26;
                }
                res += nums;
            }else{
                res += (e.charCodeAt() - 64)*26;
            }
            
        }else{
            res += (e.charCodeAt() - 64);
        }
    });
    return res;
}