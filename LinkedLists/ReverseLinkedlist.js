function Node(val){
    this.val=val;
    this.next=null;
}
var MyLinkedList=function(){
    this.head=null;
    this.size=0;
}
let head=new Node(1);
head.next=new Node(2);
head.next.next=new Node(45);


var reverseLinkedlist=function(head){
    let prev=null;
    let curr=head;
    while(curr){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }
    return prev;
}

// Reverse
head = reverseLinkedlist(head);


// Print list
let curr = head;

while (curr) {
    console.log(curr.val);
    curr = curr.next;
}

