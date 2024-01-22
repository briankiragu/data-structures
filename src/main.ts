import createLinkedListStack from './linked-lists/linked-list-stack';

const list = createLinkedListStack();

list.push(5);
list.display();

list.push('S');
list.display();

list.push(2);
list.display();

console.log(`Popped: ${list.pop()}`);
list.display();

list.push('n');
list.display();
