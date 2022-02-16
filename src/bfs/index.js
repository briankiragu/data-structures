"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.left = null;
        this.right = null;
        console.dir(this.data);
    }
    return Node;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree(data) {
        this.nodes = data.map(function (item) { return new Node(item); });
    }
    return BinaryTree;
}());
var tree = new BinaryTree([
    { id: 1, name: 'Joseph', surname: 'Kiragu', age: 60 },
    { id: 2, name: 'Lynette', surname: 'Kiragu', age: 56 },
    { id: 3, name: 'Brian', surname: 'Kiragu', age: 27 },
    { id: 4, name: 'Matthew', surname: 'Kiragu', age: 21 },
]);
