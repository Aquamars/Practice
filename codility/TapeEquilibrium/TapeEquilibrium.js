// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sum = A.reduce((a,b)=>a+b,0);
    let sumL = 0;
    let min = null;
    for(let i=0; i< A.length-1;i++){
        const n = A[i];
        sumL += n;
        let sumR = sum - sumL;
        const diff = Math.abs(sumL-sumR);
        if(min === null)min = diff;
        if(min>diff)min = diff;
    }
    return min;
}

