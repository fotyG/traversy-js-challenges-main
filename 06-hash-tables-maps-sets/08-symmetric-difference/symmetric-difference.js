function symmetricDifference(arr1, arr2) {
  const resultArr = [];
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  for (const value of set1) {
    if (!set2.has(value)) resultArr.push(value);
  }

  for (const value of set2) {
    if (!set1.has(value)) resultArr.push(value);
  }

  return resultArr;
}

const result = symmetricDifference([1, 2, 3], [2, 3, 4]);

console.log(result);

module.exports = symmetricDifference;
