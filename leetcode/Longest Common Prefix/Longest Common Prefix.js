/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length < 1) return '';
    if(strs.length === 1) return strs[0];
    const arylen = strs.length;
    const len = strs[0].length;
    let ans = [''];
    for(let i=0;i<len;i++){
        let check = true;
        const base = strs[0];        
        for(let j=1;j<arylen;j++){
            if(base[i] !== strs[j][i]){
                check = false;
                break;
            }
        }
        if(check){ 
            ans.push(base[i]);
        }else{
            break;
        }
    }
    
    return ans.join('').toString();
};
