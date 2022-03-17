import { INodeData } from '../interfaces';

class Node {
  protected data: INodeData;
  protected left: Node | null;
  protected right: Node | null;

  constructor(data: INodeData) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  protected nodes: Node[];
}

const tree = new BinaryTree();
