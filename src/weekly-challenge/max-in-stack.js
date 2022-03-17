// Use your Stack class to implement a new class MaxStack
// with a method getMax() that returns the largest element in the stack.
// getMax() should not remove the item.
// Your stacks will contain only integers.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Stack = /** @class */ (function () {
    function Stack() {
        // Initialize an empty stack
        this.items = [];
    }
    // Push a new item onto the stack
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    // Remove and return the last item
    Stack.prototype.pop = function () {
        // If the stack is empty, return null
        // (It would also be reasonable to throw an exception)
        if (!this.items.length) {
            return null;
        }
        return this.items.pop();
    };
    // Returns the last item without removing it
    Stack.prototype.peek = function () {
        if (!this.items.length) {
            return null;
        }
        return this.items[this.items.length - 1];
    };
    return Stack;
}());
/**
 * Get the max value in a stack.
 *
 * @author Brian K. Kiragu <bkariuki@hotmail.com>
 */
var MaxStack = /** @class */ (function (_super) {
    __extends(MaxStack, _super);
    function MaxStack() {
        var _this = _super.call(this) || this;
        // Initialise empty maxes stack.
        _this.maxes = [];
        return _this;
    }
    MaxStack.prototype.push = function (item) {
        // Push the item onto the items stack.
        this.items.push(item);
        // Get the current max.
        var max = this.getMax();
        // If there is max is null (empty maxes stack)
        // or the max is less than the current item,
        // push it onto the stack
        if (max === null || max < item) {
            this.maxes.push(item);
        }
    };
    MaxStack.prototype.pop = function () {
        // Return null if the stack is empty.
        if (this.items.length <= 0) {
            return null;
        }
        // Pop the latest item in the stack.
        var popped = this.items.pop();
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
    };
    MaxStack.prototype.getMax = function () {
        // If the maxes stack is empty, return null.
        if (this.maxes.length <= 0) {
            return null;
        }
        // Return the last index (the largest value) in the maxes stack.
        return this.maxes[this.maxes.length - 1];
    };
    MaxStack.prototype.printOut = function (items, key) {
        var _a;
        if (items === void 0) { items = null; }
        if (key === void 0) { key = null; }
        console.dir((_a = {}, _a[key || 'items'] = items || this.items, _a));
    };
    return MaxStack;
}(Stack));
var myStack = new MaxStack();
myStack.push(1);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(1);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(1);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(1);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(2);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(3);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(4);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.push(5);
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
myStack.pop();
myStack.printOut();
myStack.printOut(myStack.maxes, 'maxes');
console.dir({ Max: myStack.getMax() });
