/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit=0;
    prices.forEach((n,i)=>{
        let prof = prices[i+1]-prices[i];
        if(prof>0) profit +=prof;
    });
    return profit;
};
