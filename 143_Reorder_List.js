/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

 function reverseList(head){
    let prev = null
    let current = head
    let next = null
    while (current !== null){
        next = current.next
        current.next = prev
        prev = current
        current = next
    } return prev
}

var reorderList = function(head) {
    
    //split the list
    let fast = head
    let slow = head
    while (fast !== null){
        if (fast.next !== null && fast.next.next !== null){
            slow = slow.next
            fast = fast.next.next
        } else{
            fast = null
        }
    } 
    let secondHalf = slow.next
    console.log(secondHalf)
    slow.next = null
    
    //reverse second half of list
    
    let listTwo = reverseList(secondHalf)
    
    //merge the lists in order
    
    let p1 = head
    let p2 = listTwo
    
    console.log(p1)
    
    let temp1 = null
    let temp2 = null
    
    while (p2){
        temp1 = p1.next
        temp2 = p2.next
        
        p1.next = p2
        p2.next = temp1
        
        p1 = temp1
        p2 = temp2
    }
    
};




