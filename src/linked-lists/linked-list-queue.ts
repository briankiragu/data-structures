class LinkedListNode {
  value: number | string;
  next: LinkedListNode | undefined;

  constructor(value: number | string) {
    this.value = value;
  }
}

export default class LinkedListQueue {
  private head: LinkedListNode | undefined;
  private tail: LinkedListNode | undefined;

  enqueue(value: number | string) {
    const node: LinkedListNode = new LinkedListNode(value);

    if (this.head === undefined) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
  }

  dequeue() {
    if (this.head === undefined) {
      return;
    }

    const node = this.head;
    this.head = node.next;

    return node.value;
  }

  peek() {
    if (this.head === undefined) {
      return;
    }

    return this.head.value;
  }

  display() {
    let result: string = '';
    let node: LinkedListNode | undefined = this.head;

    if (node === undefined) {
      return result;
    }

    while (node) {
      result += `${node.value}, `;
      node = node.next;
    }

    console.log(result);
  }
}
