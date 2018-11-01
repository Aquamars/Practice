// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(A,B,K);
}

const sol = (A,B,K) => {
    return Math.floor(B/K) - Math.floor((A-1)/K);
}