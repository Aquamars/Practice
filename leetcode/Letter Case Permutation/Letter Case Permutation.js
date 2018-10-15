/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    res = [];
    letter(S, 0, '');
    return res;
};

let res = [];

const letter = (str, idx, sol) => {
    if(idx === str.length){
        res.push(sol);
        return;
    }
    
    letter(str, idx+1, sol + str[idx].toLowerCase());
    if(/[a-zA-Z]/.test(str[idx])){
        letter(str, idx+1, sol + str[idx].toUpperCase());
    }
    
    
}