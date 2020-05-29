class Stack {
  //Last in first out
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(value) {
    //TODO type checking and check arguments
    this._storage[this._length] = value;
    this._length++;
  }

  pop() {
    //TODO empty case(throw error or do nothing/ return undefined)
    if (this._length) {
      const lastVal = this._storage[this._length - 1];
      delete this._storage[this._length - 1];
      this._length--;
      return lastVal;
    } else {
      //or throw error
      return undefined;
    }
  }

  peek() {
    if (this._length) {
      return this._storage[this._length - 1];
    }
  }
}

const stack = new Stack();

console.log(stack);

stack.push("zero");
stack.push("one");
// {_storage: {0: "zero"}, {1: "one"}
// length: 2
// }
console.log(stack);
stack.pop();
// {_storage: {0: "zero"}
// length: 1
// }

console.log(stack);

const lastVal = stack.peek();
console.log(lastVal);
