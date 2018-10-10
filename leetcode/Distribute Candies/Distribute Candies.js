/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    return distrib(candies);
};

const distrib = ary => {
    let rec = {};
    ary.forEach(e=>{
        rec[e] = (rec[e] === undefined) ? 1 : rec[e]+1;
    });
    // console.log(Object.keys(rec))
    return Math.min(Object.keys(rec).length, ary.length/2);    
}