/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ary = [];
    for(let i=0; i<numRows+1; i++){
        ary.push(tri(i,ary[i-1]));
    }
    return ary.slice(1);
};

const tri = (n, ary) => {
    console.log(n, ary);
    if(n === 0) return [];
    if(n === 1) return [1];
    if(n === 2) return [1,1];
    
    let newAry = [];
    newAry.push(1);
    for (let i=1; i<ary.length; i++){
        const tmp = ary[i] + ary[i-1];
        newAry.push(tmp);
    }
    newAry.push(1);
    return newAry;
};
