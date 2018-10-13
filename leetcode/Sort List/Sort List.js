/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    return sortL(head);
};

const sortL = head => {
    if(head == null || head.next == null) return head;
    let slow = head;
    let preSlow = head;
    let fast = head;
    
    while(fast != null && fast.next != null){
        preSlow=slow;
        slow=slow.next;
        fast=fast.next.next;        
    }
    preSlow.next=null;
    // console.log(preSlow)
    // console.log(slow)     
    return merge(sortL(head),sortL(slow));    
}

const merge = (l1,l2) => {
    if(l1 == null) return l2;
    if(l2 == null) return l1;
    
    if(l1.val < l2.val) {
        l1.next = merge(l1.next, l2);
        return l1;
    } else {
        l2.next = merge(l1, l2.next);
        return l2;
    }
}