function node(val){
    this.val=val;
    this.next=null;

}
var MyLinkedList=function(){
    this.head=null;
    this.size=0;

}
//get value at index
MyLinkedList.prototype.get=function(index){
    if(index<0 || index>=this.size) return -1;
}
let curr=this.head;
for(let i=0;i<index;i++){
    curr=curr.next
}
return curr.val;


function addAtHead(val){
    let newNode= new Node(val);
    newNode.next=this.head;
    this.head=newNode;
    this.size++;
}



let List=new MyLinkedList();
addAtHead.call(List,5)
console.log(List)