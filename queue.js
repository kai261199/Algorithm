class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyQueue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        const result = this.first;
        console.log(result);
        return result;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;

        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        this.first = this.first.next;
        this.length--;
        return this;
    }
}

const myQueue = new MyQueue()

myQueue.enqueue("google");
myQueue.enqueue("youtube");
myQueue.enqueue("udemy");
myQueue.peek();
myQueue.dequeue();

