// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(A);
}

const sol = A => {
    let min =Number.MAX_VALUE;
    let minIdx = -1;
    for(let i=0; i<A.length-1;i++){
        const two = A[i]+A[i+1];
        if(min > two/2){
            min = two/2;
            minIdx = i;
        }
        
        if(i < A.length-2){
            const tree = two + A[i+2];
            if(min > tree/3){
                min = tree/3;
                minIdx = i;
            }
        }
    }
    return minIdx;
}