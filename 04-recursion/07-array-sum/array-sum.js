function arraySum(arr) {
  if (arr.length === 0) return 0;

  return arraySum(arr.slice(1)) + arr[0];
}

const result = arraySum([1, 2, 3, 4, 5, 6]);

console.log(result);

module.exports = arraySum;
