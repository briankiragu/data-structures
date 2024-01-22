import createBinaryTree from './trees/binary-tree';

const treeString = `(5 (10 (2, 333), 11 (4, 6)))`;
const tree = createBinaryTree(treeString);
console.dir(tree.serialise());
