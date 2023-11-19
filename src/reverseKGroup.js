/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (!head || !head.next) {
    return head;
  }
  const resultArr = [];
  let cursor = head;
  const processFunc = () => {
    const tempArr = [];
    for (let i = 0; i < k; i++) {
      tempArr.push(cursor);
      if(cursor.next){
        cursor = cursor.next;
      }else{
        cursor = null;
        break;
      }
    }
    if (tempArr.length < k) {
      resultArr.push(...tempArr);
    } else {
      resultArr.push(...tempArr.reverse());
    }
    if(cursor){
      processFunc();
    }
  };

  processFunc();

  for (let j = 0; j < resultArr.length - 1; j++) {
    resultArr[j].next = resultArr[j + 1];
  }
  resultArr[resultArr.length-1].next = null;
  return resultArr[0];
};

module.exports = reverseKGroup;
