// function maxSubarraySum(arr, k) {
//   let maxSum = -Infinity;

//   for (let i = 0; i <= arr.length - k; i++) {
//     const currentSum = arr.slice(i, i + k).reduce((sum, curr) => sum + curr, 0);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// }

function maxSubarraySum(arr, k) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  currentSum = maxSum;

  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];

    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

const arr = [-2, -5, -3, -1, -11, -7, -6, -4];

const result = maxSubarraySum(arr, 4);

console.log(result);
module.exports = maxSubarraySum;
