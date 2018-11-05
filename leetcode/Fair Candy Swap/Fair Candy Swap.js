/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    return fair(A,B);
};

const fair = (A,B) => {
    const sumA = A.reduce((a,b)=>a+b);
    // const setA = new Set(A);
    const sumB = B.reduce((a,b)=>a+b);
    const setB = new Set(B);
    const fair = (sumA+sumB)/2;    
    for(let i=0;i<A.length;i++){
        const find = fair - (sumA - A[i]);        
        if(setB.has(find)){
            return [A[i],find];
        }
    }
}