export type TreeNode = {
  left?: TreeNode;
  value: number | string;
  right?: TreeNode;
};

export type Tree = {
  serialise: () => string;
};

const createTreeNode = (
  value: number | string,
  left?: TreeNode,
  right?: TreeNode
) => ({
  left,
  value,
  right,
});

// `(5(10(2,333),11(4,6)))`
// [  "(", "5 ", "(", "10 ", "(", "2", ",", " 333", ")", ",", " 11 ", "(", "4", ",", " 6", ")", ")", ")"]
const createBinaryTree = (input: string): Tree => {
  const delimiters = RegExp(/([(),])/);
  const parts = input.split(delimiters).filter((char) => char.trim());
  const node: TreeNode | undefined = undefined;
  console.dir(parts);

  for (let index = 0; index < parts.length; index++) {
    switch (parts[index]) {
      case '(': {
        break;
      }

      case ')': {
        break;
      }

      default: {
        break;
      }
    }
  }

  console.dir(node);

  return {
    serialise: (): string => ``,
  };
};

export default createBinaryTree;
