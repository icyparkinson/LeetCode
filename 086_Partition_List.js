/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    
    let left = new ListNode()
    let right = new ListNode()
    
    let leftTail = left
    let rightTail = right

    let prev = null
    let current = head
    
    while (current !== null){
        if (current.val < x){
            leftTail.next = current
            leftTail = leftTail.next
        } else{
            rightTail.next = current
            rightTail = rightTail.next
        }
        current = current.next
    }
    
    leftTail.next = right.next
    rightTail.next = null
    
    return left.next
    
};
