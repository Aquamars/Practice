// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(A);
}
const sol = A => {
    const ary = A.sort((a,b)=>a-b);
    for(let i=0;i<ary.length-2;i++){
        if(ary[i] + ary[i+1] > ary[i+2]) return 1;
    }
    return 0;
}