/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    return sub(s);
};

const sub = s => {
    let res = s.length;
    for(let i=0;i<s.length;i++){
        res += countPal(s,i,i+1) + countPal(s,i,i+2);
    }
    return res;
}

const countPal = (s, i, j) => {
    let count = 0;
    while(i>=0&&j<s.length&&s[i]==s[j]){
        count++;
        i--;
        j++;
    }
    return count
}