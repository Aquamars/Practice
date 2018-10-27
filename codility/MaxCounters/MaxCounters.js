// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return maxCount(new Array(N).fill(0),A);
}

const maxCount = (N, A) => {
    let max = 0;
    let base_max = 0;
    for(let i=0;i<A.length;i++){
        const tmp = A[i];
        if(tmp>N.length){
            base_max = max;
            // N = N.map(e=>max);
        }else{
            if(base_max > N[tmp-1]){
                N[tmp-1] = base_max + 1
                
            }else{
                N[tmp-1]+=1;
            }
            max = Math.max(max,N[tmp-1]);
        }
    }
    return N.map(e=> e<base_max ? base_max : e);
}