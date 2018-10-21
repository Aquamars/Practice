/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    return unique(m,n);
};

const unique = (m,n) => {
    let path = new Array(m).fill(new Array(n));
    
    for(let i=0;i<m;i++) path[i][0] = 1;
    for(let i=0;i<n;i++) path[0][i] = 1;
    
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            path[i][j] = path[i-1][j] + path[i][j-1];
        }
    }
    return path[m-1][n-1];
};