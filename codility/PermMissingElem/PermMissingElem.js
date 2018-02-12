// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length === 0) return 1;
    const sum = A.reduce((a,b)=>(a+b));
    let trueSum=0;
    for(let i=0;i<A.length+2;i++)trueSum+=i;
    
    return (trueSum-sum);
}
