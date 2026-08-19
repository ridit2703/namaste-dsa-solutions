let MyQueue = function () {
    this.s1 = [];
    this.s2 = [];
};

// Push element into queue
MyQueue.prototype.push = function (x) {
    this.s1.push(x);
};

// Remove front element
MyQueue.prototype.pop = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2.pop();
};

// Get front element
MyQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        while (this.s1.length) {
            this.s2.push(this.s1.pop());
        }
    }

    return this.s2[this.s2.length - 1];
};

// Check if queue is empty
MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length === 0;
};


// -------------------
// Example
// -------------------

let q = new MyQueue();

q.push(10);
q.push(20);
q.push(30);

console.log(q.peek());   // 10

console.log(q.pop());    // 10
console.log(q.pop());    // 20

q.push(40);

console.log(q.peek());   // 30

console.log(q.pop());    // 30
console.log(q.pop());    // 40

console.log(q.empty());  // true