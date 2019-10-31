class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1) { return l2; }
  if (!l2) { return l1; }
  let head = new ListNode(0);
  let cursor = head;
  while (1) {
    if (l1.val < l2.val) {
      cursor.next = l1;
      cursor = cursor.next;
      if (l1.next) {
        l1 = l1.next;
      } else {
        cursor.next = l2;
        break;
      }
    } else {
      cursor.next = l2;
      cursor = cursor.next;
      if (l2.next) {
        l2 = l2.next;
      } else {
        cursor.next = l1;
        break;
      }
    }
  }
  return head.next;
};

module.exports = mergeTwoLists;
