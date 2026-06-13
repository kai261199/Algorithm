class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MyStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        const result = this.top;
        console.log(this.top);
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        this.length++;
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
    }

    pop() {
        if (!this.top) {
            return null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        if (this.length === 0) {
            this.bottom = null;
        }
        console.log(`Popped: ${holdingPointer.value}`);
        return holdingPointer;
    }
}

const stack = new MyStack();
stack.push('google');
stack.push('youtube');
stack.push('udemy');
stack.pop();
stack.peek();