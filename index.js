class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  add(val) {
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = new Node(val);
  }
  setHead(val) {
    let temp = this.head;
    this.head = new Node(val);
    this.head.next = temp;
  }
  addNodeAtVal(val, content) {
    let current = this.head;
    while (current.next && current.val !== val) {
      current = current.next;
    }
    const newNode = new Node(content);
    let next = current.next;
    newNode.next = next;
    current.next = newNode;
  }
  removeTail() {
    //check for next next
    //a b c d
    // set temp next to null
    let temp = this.head;
    while (temp.next.next !== null) {
      temp = temp.next;
    }
    temp.next = null;
  }

  getList() {
    const listArr = [];
    let current = this.head;
    while (current.next) {
      listArr.push(current.val);
      current = current.next;
    }
    listArr.push(current.val);
    return listArr;
  }
}

const list = new LinkedList("A");
console.log(list.head);
list.add("B");
console.log(list.getList());
list.add("C");
console.log(list.getList());
list.setHead("A");
console.log(list.getList());
list.removeTail();
console.log(list.getList());
list.addNodeAtVal("B", "D");
console.log(list.getList());
list.addNodeAtVal("F", "F");
console.log(list.getList());

module.exports = { LinkedList };
