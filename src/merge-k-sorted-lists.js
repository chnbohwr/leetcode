/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let answer = null;
  let cursor = null;
  lists = lists.filter(node => node !== null);
  while (lists.length > 0) {
    let minVal = Infinity;
    let minIndex = -1;
    // find min vlaue
    lists.forEach((node, nodeIndex) => {
      if (node.val < minVal) {
        minVal = node.val;
        minIndex = nodeIndex;
      }
    });
    const targetNode = lists[minIndex];
    if (cursor) {
      cursor.next = targetNode;
      cursor = cursor.next;
    } else {
      answer = targetNode;
      cursor = answer;
    }
    if (targetNode.next) {
      lists[minIndex] = targetNode.next
    } else {
      lists.splice(minIndex, 1);
    }
  }

  return answer;
};

module.exports = mergeKLists;