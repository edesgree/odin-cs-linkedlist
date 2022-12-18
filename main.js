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
  // adds a new node containing value to the end of the list
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
  // TODO adds a new node containing value to the start of the list
  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    if (this.tail === null) {
      this.tail = newNode;
    }
  }
  // returns the total number of nodes in the list
  getSize() {
    return this.length;
  }
  // returns the first node in the list
  getHead() {
    return this.head;
  }
  // returns the last node in the list
  getTail() {
    return this.tail;
  }
  // removes the last element from the list

  pop() {
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
  // returns true if the passed in value is in the list and otherwise returns false.
  contains(lookfor) {
    if (this.head === null) {
      return false;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.next !== null) {
      previousNode = currentNode;

      if (currentNode.value === lookfor) return true;
      currentNode = currentNode.next;
    }
    return false;
  }

  //returns the index of the node containing value, or null if not found.
  find(lookfor) {
    let currentNode = this.head;
    let index = 0;

    while (currentNode !== null) {
      if (currentNode.value === lookfor) return index;
      currentNode = currentNode.next;
      index++;
    }
    return false;
  }
}

const mylist = new LinkedList();
console.log('mylist', mylist);
mylist.append('pomme');
mylist.append('banane');
mylist.append('fraise');
mylist.append('kiwi');
console.log(mylist.getSize());
