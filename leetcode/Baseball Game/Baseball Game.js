/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    return cal(ops);
};

const cal = ops => {
    let stack = [];
    for(let i = 0; i<ops.length;i++){
        switch(ops[i]){
            case 'C':
                stack.pop();                
                break;
            case 'D':
                stack.push(stack[stack.length-1]*2);
                break;
            case '+':
                stack.push(stack[stack.length-1]+stack[stack.length-2]);
                break;
            default:
                stack.push(parseInt(ops[i]));
                break;
        }        
    }
    return stack.reduce((p,c)=>p+c);
}