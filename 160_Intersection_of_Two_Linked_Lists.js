/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let pointA = headA
    let pointB = headB
    
    let lengthA = 0
    let lengthB = 0
    
    while (pointA !== null){
        pointA = pointA.next
        lengthA++
    }
    
     while (pointB !== null){
        pointB = pointB.next
        lengthB++
    }
    
    let shorterPath
    let longerPath
    let diff = Math.abs(lengthA - lengthB)
    
    if (lengthA > lengthB){
        shorterPath = headB
        longerPath = headA
    } else{
        shorterPath = headA
        longerPath = headB
    }
    
    while (diff > 0){
        longerPath = longerPath.next
        diff--
    }
    
    while(longerPath !== shorterPath){
        if (longerPath === null){
            return null
        }else{
            longerPath = longerPath.next
            shorterPath = shorterPath.next
        }
    }
    return longerPath
    
};