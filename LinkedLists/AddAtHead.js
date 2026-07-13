function node(val){
    this.val=val;
    this.next=null;

}
var MyLinkedList=function(){
    this.head=null;
    this.size=0;

}

function atHead(val){
    let newNode= new Node(val);
    newNode.next=this.head;
    this.head=newNode;
    this.size++;
}
let List=new MyLinkedList();
atHead.call(List,5)
console.log(List)