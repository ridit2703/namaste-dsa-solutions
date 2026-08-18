var MyStack = function() {
    this.q = [];
};

// Push element onto stack
MyStack.prototype.push = function(x) {
    this.q.push(x);
};

// Remove and return top element
MyStack.prototype.pop = function() {
    let n = this.q.length;

    // Move first n-1 elements to the back
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }

    // The last pushed element is now at the front
    return this.q.shift();
};

// Return top element without removing it
MyStack.prototype.top = function() {
    let n = this.q.length;

    // Move first n-1 elements to the back
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }

    // Get front element
    let front = this.q.shift();

    // Put it back
    this.q.push(front);

    return front;
};

// Check if stack is empty
MyStack.prototype.empty = function() {
    return this.q.length === 0;
};


// ==========================
// Example
// ==========================

let stack = new MyStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.q);        // [10, 20, 30]

console.log(stack.top());   // 30
console.log(stack.q);       // [10, 20, 30]

console.log(stack.pop());   // 30
console.log(stack.q);       // [10, 20]

console.log(stack.pop());   // 20
console.log(stack.q);       // [10]

console.log(stack.top());   // 10

console.log(stack.empty()); // false

console.log(stack.pop());   // 10

console.log(stack.empty()); // true