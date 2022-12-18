class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  getSize() {
    return this.length;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }
  pop() {
    //delete last node
    if (this.head === null) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    let currentNode = this.head;
    let previousNode = null;

    //loop into the list and assign every element to its next until end of list
    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    //reassign the new tail
    this.tail = previousNode;
    //update the length of list
    this.length--;
    console.log('pop');
  }
}

const mylist = new LinkedList();
console.log('mylist', mylist);
mylist.append('pomme');
mylist.append('banane');
mylist.append('fraise');
mylist.append('kiwi');
console.log(mylist.getSize());
