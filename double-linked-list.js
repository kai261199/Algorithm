// Linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        const array = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array);
    }

    append(value) {
        const newNode = new Node(value);

        // set new value and new pointer for the next node
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        this.length++;
    }

    insert(index, value) {

        // nếu index lớn hơn length thì append vào cuối
        if (index >= this.length) {
            return this.append(value);
        }

        // nếu insert vào đầu
        if (index === 0) {
            return this.prepend(value);
        }

        const newNode = new Node(value);

        const leader = this.traverseToIndex(index - 1);

        // leader.next = newNode -> set pointer của node có value là 5 trỏ đến newNode với value là 99
        // newNode.next = follower -> set pointer của 99 trỏ đến 10
        //5    10   16...
        // \  /
        //  99

        // lưu lại node cũ phía sau
        const follower = leader.next;

        // node trước trỏ tới node mới
        newNode.prev = leader;
        // node trước trỏ tới node mới
        leader.next = newNode;

        // node mới trỏ tới node cũ phía sau
        newNode.next = follower;
        follower.prev = newNode;

        this.length++;
    }

    remove(index) {

        // remove đầu list
        if (index === 0) {
            this.head = this.head.next;
            this.length--;

            return;
        }

        const leader = this.traverseToIndex(index - 1);

        const unwantedNode = leader.next;

        leader.next = unwantedNode.next;

        // nếu xóa tail thì update tail
        if (unwantedNode === this.tail) {
            this.tail = leader;
        }

        this.length--;
    }

    // return node at index
    traverseToIndex(index) {

        let currentNode = this.head;
        let counter = 0;

        // [ 1, 5, 10, 16 ] -> insert(2, 99)
        // khi đó ta sẽ tìm node ở index 1 để trỏ tới node mới, sau đó node mới sẽ trỏ tới node ở index 2

        while (counter !== index) { // khi counter không bằng index thì tiếp tục duyệt
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

const myLinkedList = new DoublyLinkedList(5);

myLinkedList.append(10);
myLinkedList.append(16);

// myLinkedList.prepend(1);

myLinkedList.insert(1, 99);
// myLinkedList.insert(20, 88);

// // myLinkedList.remove(2);

// myLinkedList.printList();
console.log(myLinkedList);