class Tree {
  constructor(array) {
    // remove duplicates and sort the array
    array = [...new Set(array)];
    array.sort((a, b) => a - b);

    this.root = this.buildTree(array);
  }

  buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    const mid = parseInt((start + end) / 2);
    const node = new Node(array[mid]);

    node.left = this.buildTree(array, start, mid - 1);
    node.right = this.buildTree(array, mid + 1, end);

    return node;
  }

  insert(value, node = this.root) {
    if (node === null) return (node = new Node(value));
    if (node.data === value) return;

    value < node.data
      ? (node.left = this.insert(value, node.left))
      : (node.right = this.insert(value, node.right));

    return node;
  }

  delete(value, node = this.root) {
    if (node === null) return node;

    if (value < node.data) node.left = this.delete(value, node.left);
    if (value > node.data) node.right = this.delete(value, node.right);

    if (value === node.data) {
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let parentNode = node;
      let childNode = node.right;

      while (childNode.left) {
        parentNode = childNode;
        childNode = childNode.left;
      }

      parentNode === node
        ? (parentNode.right = childNode.right)
        : (parentNode.left = childNode.right);

      node.data = childNode.data;
    }

    return node;
  }

  find(value, node = this.root) {
    if (node === null) return node;
    if (node.data === value) return node;

    return value < node.data
      ? this.find(value, node.left)
      : this.find(value, node.right);
  }

  levelOrder(cb) {
    const queue = [];
    const result = [];

    if (this.root === null) return;

    queue.push(this.root);

    while (queue.length) {
      let current = queue.shift();
      cb ? cb(current) : result.push(current.data);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  inorder(cb, node = this.root, array = []) {
    if (node === null) return;

    this.inorder(cb, node.left, array);
    cb ? cb(node) : array.push(node.data);
    this.inorder(cb, node.right, array);

    if (!cb) return array;
  }

  preorder(cb, node = this.root, array = []) {
    if (node === null) return;

    cb ? cb(node) : array.push(node.data);
    this.preorder(cb, node.left, array);
    this.preorder(cb, node.right, array);

    if (!cb) return array;
  }

  postorder(cb, node = this.root, array = []) {
    if (node === null) return;

    this.postorder(cb, node.left, array);
    this.postorder(cb, node.right, array);
    cb ? cb(node) : array.push(node.data);

    if (!cb) return array;
  }

  height(node = this.root) {
    if (node === null) return 0;

    const leftHeight = this.height(node.left);
    const rightHeight = this.height(node.right);

    return Math.max(leftHeight, rightHeight) + 1;
  }

  depth(value, node = this.root, count = 0) {
    if (node === null) return;
    if (node.data === value) return count;

    return value < node.data
      ? this.depth(value, node.left, ++count)
      : this.depth(value, node.right, ++count);
  }

  isBalanced(node = this.root) {
    if (node === null) return false;

    return Math.abs(this.height(node.left) - this.height(node.right)) > 1
      ? false
      : true;
  }

  rebalance() {
    const array = this.levelOrder();
    this.root = this.buildTree(array);
  }

  prettyPrint(node = this.root, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? '│   ' : '    '}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function randomArray(length) {
  const array = [];

  while (length--) {
    const number = Math.floor(Math.random() * 100);
    array.push(number);
  }

  return array;
}

function init() {
  // create a tree
  const array = randomArray(10);
  const tree = new Tree(array);

  // check if balanced
  console.log(tree.isBalanced());

  // print out elements using different methods
  console.log(tree.levelOrder());
  console.log(tree.preorder());
  console.log(tree.postorder());
  console.log(tree.inorder());

  // insert new elements
  tree.insert(101);
  tree.insert(102);
  tree.insert(103);
  tree.insert(104);

  // check if balanced
  console.log(tree.isBalanced());

  // rebalance the tree
  tree.rebalance();

  // check if balanced
  console.log(tree.isBalanced());

  // print out elements using different methods
  console.log(tree.levelOrder());
  console.log(tree.preorder());
  console.log(tree.postorder());
  console.log(tree.inorder());

  // print out the tree in a structured format
  tree.prettyPrint();
}

init();
