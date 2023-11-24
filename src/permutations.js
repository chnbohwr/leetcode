/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  const process = (oldNums, routeArr) => {
    if(!oldNums.length){
      result.push(routeArr);
    }
    for(let i =0; i<oldNums.length; i++){
      const element = oldNums[i];
      const rest = [...oldNums];
      rest.splice(i, 1);
      const newRoute = [...routeArr, element];
      process(rest, newRoute);
    }
  }

  process(nums, []);
  return result;
};

module.exports = permute;