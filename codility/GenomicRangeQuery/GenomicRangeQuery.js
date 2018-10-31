

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    return sol(S,P,Q);
}

const sol = (S,P,Q) => {
    let res = [];
    let A=[];
    let C=[];
    let G=[];
    let tmpA=0;
    let tmpC=0;
    let tmpG=0;
    for(let i=0;i<S.length;i++){
        if(S[i] === 'A'){
            tmpA++;
            A.push(tmpA);
            C.push(tmpC);
            G.push(tmpG);
            tmpA++;
            continue;
        }
        if(S[i] === 'C'){
            tmpC++;
            A.push(tmpA);
            C.push(tmpC);
            G.push(tmpG);
            tmpC++;
            continue;
        }
        if(S[i] === 'G'){
            tmpG++;
            A.push(tmpA);
            C.push(tmpC);
            G.push(tmpG);
            tmpG++;
            continue;
        }
        A.push(tmpA);
        C.push(tmpC);
        G.push(tmpG);
    }
    // console.log(A,C,G)
    const factor = {'A':1,'C':2,'G':3,'T':4}
    for(let i=0;i<P.length;i++){
        const p = P[i];
        const q = Q[i];
        // console.log(A[q],A[p],q,p)
        if(p == q){
            res.push(factor[S[p]]);
            continue;
        }
        if(A[q] - A[p] > 0){
            res.push(1);
            continue;
        }
        if(C[q] - C[p] > 0){
            res.push(2);
            continue;
        }
        if(G[q] - G[p] > 0){
            res.push(3);
            continue;
        }
        res.push(4);
    }
    return res;
}