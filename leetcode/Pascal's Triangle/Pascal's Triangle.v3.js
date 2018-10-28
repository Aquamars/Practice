/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    return pascal(numRows);
};

const pascal = num => {
    if(num == 0) return [];
    if(num == 1) return [[1]];
    if(num == 2) return [[1],[1,1]];
    let res = [[1],[1,1]];
    
    for(let i=2; i<num;i++){
        res.push(new Array(i+1).fill(1));
        for(let j=1;j<i;j++){
            res[i][j] = res[i-1][j-1] + res[i-1][j];
        }
    }
    
    return res;
}