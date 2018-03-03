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
var reverseList = function(head) {
    if(!head) return null;
    if(!head.next) return head;
    let pre = head;
    let cur = head.next;
    pre.next = null;
    while(cur !==null){
        const tmp = cur;        
        cur = cur.next;
        tmp.next = pre;
        pre = tmp;
    }
    return pre;
};
