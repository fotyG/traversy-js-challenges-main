// function twoSum(arr, sum) {
//   const indexArr = [];
//   const indexMap = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (!indexMap.has(j) && !indexMap.has(i)) {
//         if (arr[i] + arr[j] === sum) {
//           indexArr.push(i, j);
//         }
//       }
//     }
//     indexMap.set(i);
//   }

//   return indexArr;
// }

function twoSum(nums, target) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numSet.has(complement)) {
      return [nums.indexOf(complement), i];
    }

    numSet.add(nums[i]);
  }

  return [];
}

const result = twoSum([2, 7, 11, 15], 17);

console.log(result);
module.exports = twoSum;
