function findMissingNumber(arr) {
  if (!arr) return undefined;
  if (arr.length === 0) return 1;

  console.log(...arr);
  const maxNum = Math.max(...arr);
  const sumOfArr = (maxNum * (maxNum + 1)) / 2;
  let localSum = 0;

  for (let i = 0; i < arr.length; i++) {
    localSum += arr[i];
  }

  return sumOfArr - localSum;
}

console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]));
module.exports = findMissingNumber;
