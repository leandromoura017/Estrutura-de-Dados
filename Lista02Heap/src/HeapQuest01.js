class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    parentIndex(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChildIndex(i) {
      return 2 * i + 1;
    }
  
    rightChildIndex(i) {
      return 2 * i + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    heapifyUp() {
      let index = this.heap.length - 1;
      while (
        index > 0 &&
        this.heap[index] < this.heap[this.parentIndex(index)]
      ) {
        this.swap(index, this.parentIndex(index));
        index = this.parentIndex(index);
      }
    }
  
    extractMin() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const min = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
      return min;
    }
  
    heapifyDown() {
      let index = 0;
  
      while (this.leftChildIndex(index) < this.heap.length) {
        let smallerChildIndex = this.leftChildIndex(index);
        const rightChildIndex = this.rightChildIndex(index);
  
        if (
          rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[smallerChildIndex]
        ) {
          smallerChildIndex = rightChildIndex;
        }
  
        if (this.heap[index] <= this.heap[smallerChildIndex]) {
          break;
        }
  
        this.swap(index, smallerChildIndex);
        index = smallerChildIndex;
      }
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      return this.heap.length > 0 ? this.heap[0] : null;
    }
  }
  
  module.exports = MinHeap;