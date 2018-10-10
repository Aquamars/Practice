/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    return maxP(prices);
};

const maxP = ary =>{
    let min = Number.MAX_VALUE;
    let profit = 0;
    for(let i=0;i<ary.length;i++){
        min = Math.min(min,ary[i]);
        profit = Math.max(profit, (ary[i]-min));
    }
    return profit;
};