/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    let prev = null
    
    for (let i = 0; i < lists.length; i++){
        prev = mergeTwoLists(prev, lists[i])
    }
    
    return prev
    
    function mergeTwoLists(list1, list2){
        let dummy = {val: -1, next: null}
        let tail = dummy
        
        let l1 = list1
        let l2 = list2
        
        while (l1 && l2){
            if (l1.val < l2.val){
                tail.next = l1
                l1 = l1.next
            }else{
                tail.next = l2
                l2 = l2.next
            }
            tail = tail.next
        }
        
        if (!l1){
            tail.next = l2
        }
        
        if (!l2){
            tail.next = l1
        }
        return dummy.next
    }
};