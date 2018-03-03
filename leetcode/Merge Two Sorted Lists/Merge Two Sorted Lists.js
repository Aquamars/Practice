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
var mergeTwoLists = function(l1, l2) {
    let pre1 = null;
    let cur1 = l1;
    let pre2 = null;
    let cur2 = l2;
    let newNode = new ListNode();
    let newCur = newNode;
    if((cur1 === null) || (cur2 === null)){
        if(cur2 !== null){
            return cur2;
        }else{
            return cur1;
        }
    }
    while((cur1 !== null) && (cur2 !== null)){  
        if(cur1.val > cur2.val){
            newCur.next = cur2;
            newCur = newCur.next;
            pre2 = cur2;
            cur2 = cur2.next;
        }else if(cur1.val < cur2.val){
            newCur.next = cur1;
            newCur = newCur.next;
            pre1 = cur1;
            cur1 = cur1.next;
        }else if(cur1.val === cur2.val){
            newCur.next = cur1;
            newCur = newCur.next;
            pre1 = cur1;
            cur1 = cur1.next;
            
            newCur.next = cur2;
            newCur = newCur.next;
            pre2 = cur2;
            cur2 = cur2.next;
        }
        
        if((cur1 === null) || (cur2 === null)){
            if(cur2 !== null){
                newCur.next = cur2;
                newCur = newCur.next;
                pre2 = cur2;
                cur2 = cur2.next;
            }else if(cur1 !== null){
                newCur.next = cur1;
                newCur = newCur.next;
                pre1 = cur1;
                cur1 = cur1.next;
            }
        }
    }
    return newNode.next;
    
};

const print = node => {
    while(node !== null){
        console.log(node.val);
        node = node.next;
    }
};
