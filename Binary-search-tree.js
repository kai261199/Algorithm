class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode
        } else {
            let currentNode = this.root;
            while (true) {
                if (value > currentNode.value) {
                    // right node not exist
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.right;
                    }
                } else {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    } else {
                        currentNode = currentNode.left;
                    }
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return "null";

        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else {
                return currentNode;
            }
        }

        return null;
    }
}

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);
tree.insert(1);
tree.insert(6);
tree.insert(15);
tree.insert(170);

console.log(traverse(tree.root));
console.log(tree.lookup(15));
