import { Sortable } from './Sorter';

class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

// head add at print length compare sort
export class LinkedList implements Sortable {
  head: Node | null = null;

  get length(): number {
    if (!this.head) {
      throw new Error('List is empty');
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  at(index: number): Node {
    let node: Node | null = this.head;
    let currentIndex = 0;

    while (node) {
      if (currentIndex === index) {
        return node;
      }

      currentIndex++;
      node = node.next;
    }

    throw new Error('node was not found');
  }

  print(): void {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  compare(leftIndex: number, rightIndex: number) {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number) {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }
}
