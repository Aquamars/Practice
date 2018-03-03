/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let node = head;
    node = reverse(head);
    
    if(n===1)return reverse(node.next);
    
    let tmp = new ListNode();
    let cur = node;
    let pre = tmp;    
    while(n){        
        if(n===1){
            const re = merge(pre.next, cur.next);
            return reverse(re);
        }else{
            pre = merge(pre, new ListNode(cur.val));
            cur = cur.next;
        }
        n--;
    }
};

const reverse = node => {
    let pre = null;
    let cur = node;
    while(cur!==null){
        const tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;        
    }
    return pre;
};

const merge = (node,newNode) => {
    let tmp = new ListNode();
    let pre = tmp;
    pre.next = node;
    while(node!==null){
        pre = node;
        node = node.next;        
    }
    pre.next = newNode;
    return tmp.next;
};
