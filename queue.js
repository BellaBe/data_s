class Queue {
  //First in first out
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  enqueue(value) {
    //TODO argument validation
    const lastIndex = this._length + this._headIndex
    this._storage[lastIndex] = value;
    this._length++;
  }
  dequeue() {
    if (this._length) {
      const firstValue = this._storage[this._headIndex];
      delete this._storage[this._headIndex];
      this._length--;
      this._headIndex++;
      return firstValue;
    }
  }
  peek() {

      return this._storage[this._headIndex];
  }
}

const queue = new Queue();
console.log(queue);

queue.enqueue("zero");
queue.enqueue("one");
//{_storage: {0: "zero", 1: "one"},
//length: 2
//}

console.log(queue);

queue.dequeue();
//{_storage: {1: "one"},
//length: 1
//headIndex: 1
//}

console.log(queue);
queue.enqueue("two");
//{_storage: {1: "one", 2: "two"},
//length: 2
//headIndex:1
//}
console.log(queue);

const firstValue = queue.peek();

console.log(firstValue);
