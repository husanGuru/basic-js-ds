const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    // Remove line below and write your code here
    return this.rootNode;
  }

  add(data) {
    // Remove line below and write your code here
    if (!this.rootNode) {
      this.rootNode = new Node(data);
      return;
    }

    let current = this.rootNode;
    while (true) {
      if (data > current.data) {
        if (!current.right) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      }
    }
  }

  find(data) {
    // Remove line below and write your code here
    let current = this.rootNode;
    while (current !== null) {
      if (data === current.data) {
        return current;
      }

      if (data > current.data) {
        current = current.right;
      } else if (data < current.data) {
        current = current.left;
      }
    }

    return null;
  }

  has(data) {
    // Remove line below and write your code here
    return Boolean(this.find(data));
  }

  remove(data) {
    // Remove line below and write your code here
    this.rootNode = removeNode(this.rootNode, data);
  }

  #removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.#removeNode(node.left, data); return node;
    }
    if (data > node.data) {
      node.right = this.#removeNode(node.right, data); return node;
    }

    if (!node.left) return node.right;
    if (!node.right) return node.right;

    let min = node.right;
    while (min.left) min = node.left;

    node.data = min.data;
    node.right = this.#removeNode(node.right, min.data);
    return node;
  }

  min() {
    // Remove line below and write your code here
    let min = this;
    while (min.left.data) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    // Remove line below and write your code here
    let max = this;
    while (max.right.data) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};


