/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let current1 = list1
    let current2 = list2
    let dummy = { val : -1, next : null }
    let tail = dummy
    while (current1 !== null && current2 !== null){
        if (current1.val <= current2.val){
            tail.next = current1
            current1 = current1.next
        } else{
            tail.next = current2
            current2 = current2.next
        }
        
        tail = tail.next
    } if (current1 === null){
        tail.next = current2
    } if (current2 === null){
        tail.next = current1
    }
    
    return dummy.next
};


//      1 -> 2 -> 4 -> 6 -> 7 -> 9
//                c1
    
//      1 -> 3 -> 3 -> null
//                      c2
     
     
//      null -> 1 -> 1 -> 2 -> 3 -> 3
//                                 tail