/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    return getInterNode(headA, headB);
};

const getInterNode = (A,B) => {
    let diffLeng = diff(A,B);
    
    if(diffLeng > 0){
        while(diffLeng > 0){
            A = A.next;
            diffLeng --;
        }
    }else{
        while(diffLeng < 0){
            B = B.next;
            diffLeng ++;
        }
    }
    
    while(A!==null){
        if(A == B) return A;
        A = A.next;
        B = B.next;
    }
    return null;
}

const diff = (A,B) => {
    let aLeng = 0;
    let bLeng = 0;
    
    while(A !== null){
        aLeng ++;
        A = A.next;
    }
    
    while(B !== null){
        bLeng ++;
        B = B.next;
    }
    return aLeng - bLeng;
}