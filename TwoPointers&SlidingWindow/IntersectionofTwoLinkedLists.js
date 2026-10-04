// Create a Linked List Node
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


// Intersection function
let getIntersectionNode = function(headA, headB) {

    let pA = headA;
    let pB = headB;

    while (pA != pB) {
        pA = pA == null ? headB : pA.next;
        pB = pB == null ? headA : pB.next;
    }

    return pA;
};


// Create common nodes
let node8 = new ListNode(8);
let node10 = new ListNode(10);

node8.next = node10;


// List A
let headA = new ListNode(2);
let node4 = new ListNode(4);

headA.next = node4;
node4.next = node8;


// List B
let headB = new ListNode(1);
let node5 = new ListNode(5);

headB.next = node5;
node5.next = node8;


// Find intersection
let result = getIntersectionNode(headA, headB);

console.log(result);
console.log("Intersection value:", result.val);