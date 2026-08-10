function Node(val){
    this.next=null;
    this.val=val;
}

function MyLinkedList(){
    this.head=null;
    this.size=0;
}

const list=new MyLinkedList();

const node1=new Node(12);
const node2=new Node(78);
const node3=new Node(9);
const node4=new Node(67);

node1.next=node2;
node2.next=node3;
node3.next=node4;

list.head=node1;
list.size=4;

let current=list.head;
while(current){
    console.log(current.val);
    current=current.next
}