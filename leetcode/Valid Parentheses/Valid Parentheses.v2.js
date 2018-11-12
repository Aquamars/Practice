/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    return isVal(s);
};

const isVal = s => {
    let stack = [];
    if(s.length%2 != 0) return false;
    for(let i=0;i<s.length;i++){
        const w = s[i];
        switch(w){
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if(stack.pop() !== w) return false;
                break;
        }
    }
    return stack.length == 0;
}