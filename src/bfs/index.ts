import { INodeData } from '../interfaces';

class Node {
  private data: INodeData;
  protected left: Node | null;
  protected right: Node | null;

  constructor(data: INodeData) {
    this.data = data;
    this.left = null;
    this.right = null;

    console.dir(this.data);
  }
}

class BinaryTree {
  private nodes: Node[];

  constructor(data: INodeData[]) {
    this.nodes = data.map((item) => new Node(item));
  }
}

const tree = new BinaryTree([
  { id: 1, name: 'Joseph', surname: 'Kiragu', age: 60 },
  { id: 2, name: 'Lynette', surname: 'Kiragu', age: 56 },
  { id: 3, name: 'Brian', surname: 'Kiragu', age: 27 },
  { id: 4, name: 'Matthew', surname: 'Kiragu', age: 21 },
]);
