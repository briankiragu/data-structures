import createBinaryTree from './trees/binary-tree';

// const treeString = `(5 (10 (2, 3), 11 (4, 6)))`;
const treeString = `(5)`;
const tree = createBinaryTree(treeString);
console.dir(tree.toString());
