/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    return convert(n);
};

const convert = n => {
    let count = 0;
    let res = '';
    while(n > 26){
        n -= 26;
        count ++;
    }
    res = String.fromCharCode(64 + n)
    if(count !== 0) res = convert(count) + res;   
    return res;
}