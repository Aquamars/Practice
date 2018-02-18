// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let ary = Array.from({length:X},(v,k)=>0);
    let ans = -1;
    let count = 0;
    for(let i=0;i<A.length;i++){
        const n = A[i];
        if(ary[n-1] === 0){
            ary[n-1] = 1;
            count++
            if(count === X){
                ans = i;
                break;
            }
        }
    }
    return ans;
}
