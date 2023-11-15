function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {

  if(!head || !head.next){
    return head;
  }

  const result = head.next;
  let cursor = null
  const switcher = (firstNode) => {
    const first = firstNode;
    const second = first ? first.next : null;
    const last = second ? second.next : null;

    if(second){
      second.next = first;
    }
    // console.table({cursor, first, second, last})
    first.next = null;

    if(second){
      if(cursor){
        cursor.next = second;
        cursor = first;
      } else {
        cursor = first;
      }
    } else {
      cursor.next = first;
    }

    if(last){
      switcher(last);
    }
      
  }

  switcher(head);
  // console.log(result.toArray())
  return result;
};


module.exports = swapPairs;
