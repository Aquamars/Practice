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
var oddEvenList = function(head) {
    return oddEven(head);
};

const oddEven = head => {
    if(!head) return null;
    let odd = head;
    let originEven = head.next;
    let even = head.next;
    while(even && even.next){
        odd.next = odd.next.next;
        even.next = even.next.next;
        odd = odd.next;
        even = even.next;
    }
    odd.next = originEven;
    return head;
}