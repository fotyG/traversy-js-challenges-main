function maxSubarraySum(arr, k) {
  let maxSum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let currentSum = 0;

    for (let j = i; j < i + k; j++) {
      currentSum += arr[j];
    }

    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const arr = [2, 5, 3, 1, 11, 7, 6, 4];

const result = maxSubarraySum(arr, 3);

console.log(result);
module.exports = maxSubarraySum;
