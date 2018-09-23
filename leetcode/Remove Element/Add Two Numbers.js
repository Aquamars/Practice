/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    return addNum(l1,l2);
};

const addNum = (l1, l2) => {
    
    const num1 = toNum(l1);
    const num2 = toNum(l2);
    const total = num1+num2;
    const resultAry = aryPlus(num1,num2);
    
    let result = null;
    
    resultAry.forEach( e => {
        let link = new ListNode();
        link.val = parseInt(e);
        link.next  = (result === null ? null : result);
        result = link;
    });
    return result;
};

const toNum = l1 => {
    let curL1 = l1;
    let tmp1 = '';
    while(curL1 !== null){
        tmp1+= ''+curL1.val;
        curL1 = curL1.next;
    }
    tmp1 = tmp1.split('');
    return tmp1.map(e=>parseInt(e));
};

const aryPlus = (ary1,ary2) => {
    let aryShort = ary1;
    let aryLong = ary2;
    
    if(ary1.length > ary2.length){
        aryShort = ary2;
        aryLong = ary1;
    }
    
    for(let i=0;i<aryShort.length;i++){
        if(aryShort[i]+aryLong[i] > 9){            
            if(aryLong[i+1] === undefined)aryLong.push(0);
            aryLong[i+1] = aryLong[i+1] + 1;
            aryLong[i] = aryShort[i]+aryLong[i] - 10;
        }else{
            aryLong[i] = aryShort[i] + aryLong[i];
        }
    }
    // fill digits
    let j = 0;
    while(aryLong[aryShort.length + j] > 9){
        aryLong[aryShort.length + j] = 0
        if(aryLong[aryShort.length + j + 1] === undefined)aryLong.push(0);
        aryLong[aryShort.length + j + 1] += 1;
        j++;
    }
    
    return aryLong.reverse();
};