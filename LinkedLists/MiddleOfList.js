let middleNode=function(head){
    let slow=head;
    let fast=head;

    while(fast && fast.next ){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}

function Node(val){
    this.val=val;
    this.next=null;
}
let head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(45);
head.next.next.next=new Node(34);

let middle=middleNode(head);

console.log(middle.val);