/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let node = head;
    if(node === null || node.nex === null) return false;
    while(node !== null){
        if(node.flag) return true;
        node.flag = true;
        node = node.next;
    }
    return false;
};
