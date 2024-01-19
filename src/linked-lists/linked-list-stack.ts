export type LinkedListNode = {
  value: number | string;
  next?: LinkedListNode;
};

export type LinkedListStack = {
  push: (value: number | string) => void;
  pop: () => number | string | undefined;
  peek: () => number | string | undefined;
  display: () => void;
  size: number;
};

const createLinkedListNode = (value: number | string): LinkedListNode => ({
  value,
  next: undefined,
});

const createLinkedListStack = (): LinkedListStack => {
  let size: number = 0;
  let head: LinkedListNode | undefined = undefined;

  const push = (value: number | string): void => {
    const node = createLinkedListNode(value);

    if (head === undefined) {
      head = node;
    } else {
      node.next = head;
      head = node;
    }

    size++;
  };

  const pop = (): number | string | undefined => {
    if (head === undefined) {
      return undefined;
    }

    const node = head;
    head = node.next;

    size--;

    return node.value;
  };

  const peek = (): number | string | undefined => head?.value;

  const display = (): void => {
    let output = '';
    let node = head;

    if (node === undefined) {
      return;
    }

    while (node !== undefined) {
      output += `${node.value}, `;
      node = node.next;
    }

    console.dir(output);
  };

  return {
    push,
    pop,
    peek,
    display,
    size,
  };
};

export default createLinkedListStack;
