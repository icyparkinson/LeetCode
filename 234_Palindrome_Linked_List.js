/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    let slow = head
    let fast =  head
    while (fast !== null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    }
    
    let prev = null
    while (slow !== null){
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    
    let l = head
    let r = prev
    while (r !== null){
        if (l.val === r.val){
            l = l.next
            r = r.next
        } else{
            return false
        }
    } return true
};
    
