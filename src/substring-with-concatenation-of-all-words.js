/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {

  const firstWordLength = words[0].length;

  const toatlWordsLength = words[0].length * words.length;

  const lastIndex = s.length - toatlWordsLength + 1;

  if(lastIndex <= 0){
    return [];
  }

  let result = [];

  const cache = {};

  const checkAns = (newStr) => {
    if(newStr in cache){
      return cache[newStr];
    }
    const wordsCopy = [...words];
    // console.log(newStr);
    for(let i = 0; i < words.length; i ++){
      const subStr = newStr.slice(i*firstWordLength, firstWordLength*(i+1));
      const findIndex = wordsCopy.findIndex((d)=>d === subStr);
      if(findIndex === -1){
        cache[newStr] = false;
        return false;
      }
      wordsCopy[findIndex] = null;
    }

    cache[newStr] = true;
    return true;
  }

  for(let i = 0; i < lastIndex; i++){
    const str = s.substring(i, i+toatlWordsLength);
    if(checkAns(str)){
      result.push(i);
    }
  }

  //console.log(result);

  return result;
};

module.exports = findSubstring;
