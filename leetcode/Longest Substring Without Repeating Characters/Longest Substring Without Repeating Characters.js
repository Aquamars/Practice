/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    return lls(s);
};

const lls = str => {
    const strAry = str.split('');
    let tmp = [];
    let tmpResult = [];
    let lastIdx;
    strAry.map((e, i) => {
        console.log(e,i)
        if(tmp.length !== 0 && tmp.includes(e)) {
            if(tmpResult.length < tmp.length) tmpResult = tmp.slice();
            tmp.length = 0;
            let findPre = '';
            let idx = i-1;
            while(e !== strAry[idx]){
                tmp.push(strAry[idx]);
                idx --;
            }
            tmp = tmp.reverse();            
        }
        tmp.push(e);
    });    
    return (tmpResult.length < tmp.length ? tmp.length : tmpResult.length);
}