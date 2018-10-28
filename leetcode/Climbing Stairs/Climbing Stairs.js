/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    let twoNum = Math.floor(n/2);
    let count = 1;
    
    while(twoNum !== 0){
        const nums = n - twoNum;
        console.log(twoNum,n,nums);
        count = count + combin(nums,twoNum);
        twoNum--;
    }
    
   return count;
    
};
/*Combinations*/
const combin = (n,k) => {
    let tmp = n-k;
    let count = 1;
    while(n > tmp){
        count = count * n;
        n--;
    }
    let count2 = 1
    while(k !== 1){
        count2 = count2 * k;
        k--;
    }
    return (count/count2);
}