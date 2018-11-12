/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    return rev(S);
};

const rev = s => {
    let stack = [];
    let res = new Array(s.length);
    for(let i=0;i<s.length;i++){        
        if( s[i].match(/[a-zA-Z]/i))stack.push(s[i]);
    }
    
    for(let i=0;i<s.length;i++){        
        if( s[i].match(/[a-zA-Z]/i)){
            res[i] = stack.pop();
        }else{
            res[i] = s[i];
        }
    }
    return res.join('');
}