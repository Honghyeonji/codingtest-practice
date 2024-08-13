const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("test.txt").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input.slice(1).map(Number);

class MinHeap {
  heap = [];
  constructor() {
    this.heap = [];
  }

  insert(v) {
    this.heap.push(v);
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      const temp = this.heap[index];
      const tempIndex = Math.floor((index - 1) / 2);
      this.heap[index] = this.heap[tempIndex];
      this.heap[tempIndex] = temp;
      index = tempIndex;
    }
  }

  remove() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let tempIndex = index * 2 + 1;
      if (
        index * 2 + 2 < this.heap.length &&
        this.heap[index * 2 + 2] < this.heap[tempIndex]
      )
        tempIndex = index * 2 + 2;

      if (this.heap[index] < this.heap[tempIndex]) break;

      const temp = this.heap[index];
      this.heap[index] = this.heap[tempIndex];
      this.heap[tempIndex] = temp;
      index = tempIndex;
    }

    return min;
  }
}

const minHeap = new MinHeap();
let result = "";

for (let i = 0; i < N; i++) {
  if (arr[i] === 0) {
    result += minHeap.remove() + "\n";
  } else {
    minHeap.insert(arr[i]);
  }
}

console.log(result);
