class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  } }

  class BinaryTree {
    constructor(num) {
      this.root = new BinaryTreeNode(num);
    }
 
insert(val){
  if (!this.root) {
    this.root = new BinaryTreeNode(val);
    return this;
    } else {
      this.add(this.root, new BinaryTreeNode(val));
    } 
 
}
  add(current, node) {
    //new node left or right
      if (node.val > root.val) {
        //not null then check if left or right
        //go right
        //check null
        if (!current.right) {
          current.right = node;
        } else {
          this.add(current.right, node);
        }
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
