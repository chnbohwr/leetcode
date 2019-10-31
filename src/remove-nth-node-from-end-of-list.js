/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const nodeArr = [];
  const faltNode = (node) => {
    nodeArr.push(node.val);
    if (node.next) { faltNode(node.next); }
  }
  faltNode(head);
  nodeArr.splice(nodeArr.length - n, 1);
  if (!nodeArr.length) { return null; }
  let answer;
  let cursor;
  while (nodeArr.length > 0) {
    if (!answer) { answer = new ListNode(nodeArr.shift()); cursor = answer; }
    else {
      const node = new ListNode(nodeArr.shift());
      cursor.next = node;
      cursor = node;
    }
  }
  return answer;
};

// var h = (new ListNode(1))
// h.next = (new ListNode(2))
// h.next.next = (new ListNode(3))
// h.next.next.next = (new ListNode(4))
// h.next.next.next.next = (new ListNode(5))

// removeNthFromEnd(h, 1);