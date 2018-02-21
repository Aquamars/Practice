/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let tmp = [];
    const len = matrix[0].length;
    matrix.reverse().map(r=>r.reverse());
    for(let i=len-1;i>-1;i--){
        for(let j=0;j<len;j++){
            tmp.push(matrix[j][i]);
        }
    }
    
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            matrix[i][j] = tmp.shift();
        }
    }
};
