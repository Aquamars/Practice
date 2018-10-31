// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(A);
}

const sol = A => {
    const ary = A.sort((a,b)=>a-b);
    if(ary[ary.length-1] < 0) return 1;
    let count = 1;
    let sets = new Set(ary.filter(e=>e>0));
    for(let i=0;i<sets.size;i++){        
        if(!sets.has(i+1)) break;
        count++;
    }
    return count;
}

