import createLinkedListStack, {
  type LinkedListStack,
} from '../linked-lists/linked-list-stack';

export type TreeNode = {
  left?: TreeNode;
  value: number | string;
  right?: TreeNode;
};

export type Tree = {
  toString: () => string;
};

const createTreeNode = (value: number | string) => ({
  value,
});

const createBinaryTree = (input: string): Tree => {
  let head: TreeNode | undefined = undefined;
  const stack: LinkedListStack = createLinkedListStack();

  input
    .replace(/\s/g, '')
    .split(/,|\(|\)/)
    .forEach((char) => {
      switch (char) {
        case '(': {
          stack.push(char);
          break;
        }
        case ')': {
          stack.pop();
          break;
        }
        default: {
          const node = createTreeNode(char);

          if (head === undefined) {
            head = node;
          }
          break;
        }
      }
    });

  const toString = (): string => {
    return ``;
  };

  return { toString };
};

export default createBinaryTree;
