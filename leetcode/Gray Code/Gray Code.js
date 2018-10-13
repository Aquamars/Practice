/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    return gray(n);
};
/*
0000 0001 0011 0010 0110 0111 0101 0100

觀察奇數項的下個數變化時，發現無論是第幾個奇數項Gray Code，下個數永遠只改變最右邊的位元。如果是1就改為0，如果是0就改為1。例如第一項0000變為0001，第三項0011變為0010，第五項0110變為 0111，依此類推。

觀察偶數項的下個數變化時，發現所改變的位元，是由右邊算來首個1的左邊位元。例如第二項0001下個數變為0011，第四項0010下個變為 0110，第六項0111變為0101，依此類推。

Ref: https://openhome.cc/Gossip/AlgorithmGossip/GrayCode.htm
*/
const gray = n => {
    if(n == 0) return [0];
    let ary = new Array(n).fill(0);
    const leng = ary.length;
    const num = Math.pow(2, n);    
    let res = [];
    for(let i=0;i<num;i++){        
        if(i%2){
            ary[leng-1] = ary[leng-1]==0 ? 1 : 0;            
            res.push(parseInt(ary.join(''), 2));
            // res.push(ary.join(''));
        }else{
            
            if(i != 1){
                let idx = leng-1;
                while(ary[idx] == 0) idx--;
                ary[idx-1] = (ary[idx-1] == 1) ? 0 : 1;
            }
            res.push(parseInt(ary.join(''), 2));
            // res.push(ary.join(''));
        }
    }
    // console.log(res);
    return res;    
}