//  2 ----- 0
// /  \
// 1--3

// edge list
const edges = [[0, 2], [2, 3], [2, 1], [1, 3]];

// adjacency list
const graph = {
    0: [2],
    1: [2, 3],
    2: [0, 1, 3],
    3: [1, 2]
};


class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addVertext(node) {
        // tạo một mảng rỗng cho mỗi node, để lưu trữ các node kề với nó
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdege(node1, node2){
        // undeirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

    showConnections() {
        const allNodes = Object.keys(this.adjacentList);
        for (let node of allNodes) {
            let connections = this.adjacentList[node];
            let formattedConnections = connections.join(' ');
            console.log(node + " --> " + formattedConnections);
        }
    }
}

const myGraph = new Graph();

myGraph.addVertext('0');
myGraph.addVertext('1');
myGraph.addVertext('2');
myGraph.addVertext('3');
myGraph.addVertext('4');
myGraph.addVertext('5');
myGraph.addVertext('6');

myGraph.addEdege('3', '1');
myGraph.addEdege('3', '4');
myGraph.addEdege('4', '2');
myGraph.addEdege('4', '5');
myGraph.addEdege('1', '2');
myGraph.addEdege('1', '0');
myGraph.addEdege('0', '2');
myGraph.addEdege('6', '5');

myGraph.showConnections();