const { NotImplementedError } = require('../lib');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = null;
  }
  getUnderlyingList() {
    // Remove line below and write your code here
    const toPlainObject = (node) => {
      if (!node) {
        return null;
      }
      return { value: node.value, next: toPlainObject(node.next) };
    };

    return toPlainObject(this.list);
  }

  enqueue(value) {
    // Remove line below and write your code here
    if (!this.list) {
      this.list = new ListNode(value);
      return;
    }

    let current = this.list;

    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(value);
  }

  dequeue() {
    // Remove line below and write your code here
    if (!this.list) return undefined;

    const value = this.list.value;
    this.list = this.list.next;
    return value;
  }
}

module.exports = {
  Queue
};
