/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * test case 
 * [2,4,3]
 * [5,6,4]
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function (l1, l2) {
  const answer = new ListNode(0);
  const handler = (a, b, ans) => {
    const addValue = a.val + b.val + ans.val;
    const carry = Math.floor(addValue / 10);
    const reminder = addValue % 10;
    ans.val = reminder;
    ans.next = new ListNode(carry);
    if (!a.next && !b.next && carry === 0) {
      ans.next = null;
      return;
    }
    handler(a.next || new ListNode(0), b.next || new ListNode(0), ans.next);
  };
  handler(l1, l2, answer);
  return answer;
};

module.exports = addTwoNumbers();