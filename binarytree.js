class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // compare node.value to current.value
    // greater than ?
    //if yes check right node.
    //right node null? assign
    function search(node, current) {
      console.log("node", node, "current", current);
      if (node.val > current.val) {
        //go right
        //check null
        if (!current.right) {
          current.right = node.val;
          return current;
        }
        search(node, current.right);
        //null? assign
        //not null? search (node, current.right)
      }
      if (!current.left) {
        current.left = node.val;
        return current;
      }
      search(node, current.left);
    }
    // Implement me!
    return search(node, this);
  }
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");
B.add(A);
