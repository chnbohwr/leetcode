/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  // Create a frequency map
  const frequencyMap = new Map();
  
  // Count frequencies of each number
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  
  // Convert the map to array of [num, frequency] pairs
  const freqPairs = Array.from(frequencyMap.entries());
  
  // Sort the array by frequency in descending order
  freqPairs.sort((a, b) => b[1] - a[1]);
  
  // Take the first k elements and extract just the numbers
  return freqPairs.slice(0, k).map(pair => pair[0]);
};

module.exports = topKFrequent;