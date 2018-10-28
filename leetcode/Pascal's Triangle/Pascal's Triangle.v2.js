/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [];
    for(let i = 1; i<numRows+1;i++){
        res.push(pascal(i));
    }
    return res;
};

const pascal = num => {
    if(num == 1) return [1];
    if(num == 2) return [1,1];
    let res = [1];
    
    const last = pascal(num-1);
    
    for(let i=1; i<last.length; i++){
        res.push(last[i-1]+last[i]);
    }
    res.push(1);
    return res;
}