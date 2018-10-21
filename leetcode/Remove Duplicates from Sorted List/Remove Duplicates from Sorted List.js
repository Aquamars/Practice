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
var deleteDuplicates = function(head) {
    return deleteDup(head);
};

const deleteDup = head => {
    if(!head) return head;
    let node = head;
    while(node && node.next){
        
        while(node.next && node.val == node.next.val){
            node.next = node.next.next;
        }
        node = node.next;
    }
    return head;
}