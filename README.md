# Binary Search Tree

Binary Search Tree implemented with JavaScript.

## Features

1. `buildTree(array)` turns a sorted array into a balanced binary tree and returns the root node.
2. `insert(value)` inserts a new node with the given value into the tree.
3. `delete(value)` deletes the node with the given value from the tree.
4. `find(value)` returns the node with the given value.
5. `levelOrder(callback)` traverses the tree in breadth-first level order and provides each node as the argument to the provided function. Returns an array of values if no function is given.
6. `inorder(callback)` traverses the tree in a depth-first inorder manner and yields each node to the provided function given as argument. Returns an array of values if no function is given.
7. `preorder(callback)` traverses the tree in a depth-first preorder manner and yields each node to the provided function given as argument. Returns an array of values if no function is given.
8. `postorder(callback)` traverses the tree in a depth-first postorder manner and yields each node to the provided function given as argument. Returns an array of values if no function is given.
9. `height` accepts a node and returns its height.
10. `depth` accepts a node and returns its depth.
11. `isBalanced` checks if the tree is balanced.
12. `rebalance` rebalances an unbalanced tree.
13. `prettyPrint` prints out the tree in a structured format.

---

## Lesson:

[The Odin Project: Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees)
