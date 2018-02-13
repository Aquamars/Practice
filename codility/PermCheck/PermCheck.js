// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let tmp=Array.from({length:A.length+1}, (v, k) => k);
  let ans = 1;
  A.forEach(n=>{
      if(tmp[n] === n){ 
          tmp[n] = 'check'
      }else {
          ans = 0;
      }
  });
  return ans;
}
