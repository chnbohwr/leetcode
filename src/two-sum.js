/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const answer = [];
  nums.some((n1, n1Index) => {
    const n2InitialIndex = n1Index + 1;
    return nums.slice(n2InitialIndex).some((n2, n2Index) => {
      if (n1 + n2 === target) {
        answer.push(n1Index, n2Index + n2InitialIndex);
        return true;
      }
      return false;
    });
  });
  return (answer);
};