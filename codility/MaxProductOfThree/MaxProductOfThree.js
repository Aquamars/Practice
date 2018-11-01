// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(A)
}
const sol = A => {
    const ary = A.sort((a,b)=>a-b);
    // console.log(ary)
    if(ary[ary.length-1] > 0){
        if(ary[0]*ary[1] > (ary[ary.length-3]*ary[ary.length-2])){
            return ary[0]*ary[1]*ary[ary.length-1];
        }
    }
    return ary[ary.length-1] * ary[ary.length-2] * ary[ary.length-3]
    
}

