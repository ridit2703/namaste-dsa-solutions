function Node(val) {
    this.val = val;
    this.next = null;

}
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;

}
//get value at index
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1;

    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next
    }
    return curr.val;
}


//add at the start
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
}

//add at the end
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
    if (this.head === null) {
        this.head = newNode;
    }
    else {
        let curr = this.head;
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = newNode;
    }
    this.size++;

}

//add at specific index
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0 || index > this.size) return;

    if (index === 0) return this.addAtHead(val);
    if (index === this.size) return this.addAtTail(val);
    const newMode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index; i++) {
        newNode.next = curr.next;
        curr.next = newNode;
        this.sizee++
    }
}

//print the linked list 
MyLinkedList.prototype.printList = function () {
    let curr = this.head;
    let result = [];

    while (curr !== null) {
        result.push(curr.val)
        curr = curr.next
    }

    console.log(result.join("->"));
}




let List = new MyLinkedList();
List.addAtHead(19)
List.addAtHead(90);
List.addAtIndex(2, 50);
List.addAtTail(89);
console.log(List)