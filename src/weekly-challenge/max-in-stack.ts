// Use your Stack class to implement a new class MaxStack
// with a method getMax() that returns the largest element in the stack.
// getMax() should not remove the item.
// Your stacks will contain only integers.

class Stack {
  items: number[];

  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item: number) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

/**
 * Get the max value in a stack.
 *
 * @author Brian K. Kiragu <bkariuki@hotmail.com>
 */
class MaxStack extends Stack {
  maxes: number[];

  constructor() {
    super();

    // Initialise empty maxes stack.
    this.maxes = [];
  }

  push(item: number): void {
    // Push the item onto the items stack.
    this.items.push(item);

    // Get the current max.
    const max = this.getMax();

    // If there is max is null (empty maxes stack)
    // or the max is less than the current item,
    // push it onto the stack
    if (max === null || max < item) {
      this.maxes.push(item);
    }
  }

  pop(): number | null {
    // Return null if the stack is empty.
    if (this.items.length <= 0) {
      return null;
    }

    // Pop the latest item in the stack.
    const popped = this.items.pop();

    // If the maxes stack has more than one item (previous maxes)
    // and the current popped item is equal to the current max;
    // remove the latest item in the max stack.
    if (this.maxes.length > 1 && popped === this.getMax()) {
      this.maxes.pop();
    }

    // If the popped item was the last in the items stack (stack is now empty),
    // remove the item from the max stack.
    // Both stacks must be empty at the same time.
    if (this.items.length <= 0) {
      this.maxes.pop();
    }

    // Return the popped value.
    return popped;
  }

  getMax(): number | null {
    // If the maxes stack is empty, return null.
    if (this.maxes.length <= 0) {
      return null;
    }

    // Return the last index (the largest value) in the maxes stack.
    return this.maxes[this.maxes.length - 1];
  }

  printOut(items: number[] | null = null, key: string | null = null): void {
    console.dir({ [key || 'items']: items || this.items });
  }
}
