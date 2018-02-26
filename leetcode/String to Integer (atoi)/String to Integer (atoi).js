/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    if(str.length === 0) return 0;
    const nums = ['0','1','2','3','4','5','6','7','8','9'];
    const plus = ['+'];    
    const minus = ['-'];
    const max = 2147483647;
    const min = -2147483648;
    let ans=[];
    str = str.trim();
    if(!nums.includes(str[0]) && !plus.includes(str[0]) && !minus.includes(str[0])) return 0;
    if(!plus.includes(str[0]))ans.push(str[0]);    
    let flag = false;
    for(let i=1; i<str.length; i++){
        if(!nums.includes(str[i])) break;
        if(flag){
            ans.push(str[i]);
        }else{
            if(str[i] !== '0' || nums.includes(str[0])){
                flag =  true;
                ans.push(str[i]);
            }
        }
        
    }
    if(ans.length < 2 && !nums.includes(ans[0])) return 0;
    const ansInt = parseInt(ans.join(''));
    if(ansInt>max) return max;
    if(ansInt<min)return min;
    return ansInt;
};
