// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort();
    let count = 0;
    let cNum=null;
    let ans;
    if(A.length === 1)return A[0];
    for(let i=0;i<A.length;i++){
        const n = A[i];
        if(cNum === null){
            cNum = n;
            count++;
        }else if(cNum !== n){
            if(count%2 !== 0){
                ans = cNum;
                break;
            }else if(i === A.length-1){
                ans=n;
                break;
            }
            cNum = n;
            count=1;
        }else if(cNum === n){
            count++;
        }
    }
    return ans;
}
