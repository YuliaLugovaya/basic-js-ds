const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return null;
  }

  add(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    // function addNumber(el, data) {
    //   if(!el) {
    //     return new Node(data);
    //   }
    //   if(el.data === data) {
    //     return el;
    //   }
    //   if(data < el.data) {
    //     el.left = addNumber(el.left, data)
    //   } else {
    //     el.right = addNumber(el.right, data)
    //   }
    //   return el;
    // }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};