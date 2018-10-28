/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return stairs(n);
};

const stairs = n => {
    if(n==0) return 0;
    if(n==1) return 1;
    if(n==2) return 2;
    
    let dp = new Array(n);
    dp[1] = 1;
    dp[2] = 2;
    for(let i=3; i<n+1;i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
}