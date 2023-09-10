function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const arr1 = [...str1];
  const arr2 = [...str2];

  const freq1 = arr1.reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
  }, {});

  const freq2 = arr2.reduce((obj, char) => {
    obj[char] = (obj[char] || 0) + 1;
    return obj;
  }, {});

  return Object.keys(freq1).every((char) => freq1[char] === freq2[char]);
}
const result = validAnagrams("app", "ppab");

console.log(result);
module.exports = validAnagrams;
