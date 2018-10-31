// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(S,P,Q);
}

const sol = (S,P,Q) => {
    const fac = {'A':1,'C':2,'G':3,'T':4};
    const numAry = S.split('').map(e=>fac[e]);
    let res = [];
    for(let i=0;i<P.length;i++){
        let ary = Array.from(numAry).splice(P[i],(Q[i]-P[i]+1));
        let min = Math.min(...ary);
        res.push(min);
    }
    return res;
}
/*
const sol = (S,P,Q) => {    
    const fac = {'A':1,'C':2,'G':3,'T':4};
    let res = [];
    for(let i=0;i<P.length;i++){
        let ary = Array.from(S).splice(P[i],(Q[i]-P[i]+1));
        let min = 5;
        
        for(let j=0;j<ary.length;j++){
            if(fac[ary[j]]==1){
                min = 1;
                break;
            }else{
                min = Math.min(min,fac[ary[j]]);
            }
        }
        res.push(min);
    }
    return res;
}
*/