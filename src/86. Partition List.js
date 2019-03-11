/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    if(!head || !head.next) return head;
    let smallHead = new ListNode(0), 
        largeHead = new ListNode(0),
        smallCur = smallHead, 
        largeCur = largeHead, 
        cur = head;
    while(cur) {
        if(cur.val < x) {
            smallCur.next = cur;
            smallCur = cur;     
        } else {
            largeCur.next = cur;
            largeCur = cur;
        }
        cur = cur.next; 
    }

    smallCur.next = largeHead.next; 
    largeCur.next = null;
    return smallHead.next;
};


var partition1 = function(head, x) {
    if(!head || !head.next) return head;
    let smallHead = null, 
        largeHead = null,
        smallCur = null, 
        largeCur = null, 
        cur = head;
    while(cur) {
        if(cur.val < x) {
            if(!smallHead) {
                smallHead = cur;
                smallCur = smallHead;
            } else {
                smallCur.next = cur;
                smallCur = cur; 
            }
                        
        } else {
            if(!largeHead) {
                largeHead = cur;
                largeCur = largeHead;
            } else {
                largeCur.next = cur;
                largeCur = cur;
            } 
        }
        cur = cur.next; 
    }
    if(!smallHead) return largeHead;
    if(!largeHead) return smallHead; 
    smallCur.next = largeHead; 
    largeCur.next = null;
    return smallHead;
};