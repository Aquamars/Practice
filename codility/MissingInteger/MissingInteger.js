// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 1;
    A.sort((a,b)=> a-b).forEach(n=>{
        if(count === n)count ++;
    });
    return count;
    
}
