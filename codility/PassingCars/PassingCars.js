

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return passingcar(A);
}

const passingcar = A => {
    let count = 0;
    let res = 0;
    A.forEach(e=>{
        if(e===0){
            count +=1;
        }else{
            res += count;
        }
    })
    return res >1000000000 ? -1 : res;
}