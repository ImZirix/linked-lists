class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.head;
    this.head = newNode;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }
  head() {
    return this.head;
  }
  tail() {
    return this.tail;
  }
  at(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current;
      current = current.nextNode;
      count++;
    }
    return null;
  }
  pop() {
    if (!this.head) return;

    if (!this.head.nextNode) {
      this.head = null;
      return;
    }

    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }
  contains(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }
  toString() {
    let current = this.head;
    let output = "";

    while (current) {
      output += `( ${current.value} )  -> `;
      current = current.nextNode;
    }
    return output + "null";
  }
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let prev = this.at(index - 1);

    if (!prev) return;

    let newNode = new Node(value);
    newNode.nextNode = prev.nextNode;
    prev.nextNode = newNode;
  }
  removeAt(index) {
    if (index === 0 && this.head) {
      this.head = this.head.nextNode;
      return;
    }
    let prev = this.at(index - 1);
    if (!prev || !prev.nextNode) return;

    prev.nextNode = prev.nextNode.nextNode;
  }
}

export { LinkedList, Node };
