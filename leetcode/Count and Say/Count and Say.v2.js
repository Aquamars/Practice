/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let res='1';
    for(let i=0; i<n-1;i++){
        res = count(res);
    }
    return res;
};

const count = n => {
    if(n==1) return '11';
    // if(n==2)return 11;
    
    const ary = `${n}`.split('');
    let last = ary[0];
    let countLast = 1;
    let res = '';
    for(let i=1;i<ary.length;i++){
        if(last == ary[i]){
            countLast++;
        }else{
            res = res + (countLast+last);
            last = ary[i];
            countLast = 1;
        }        
    }
    return res + (countLast+last);
}