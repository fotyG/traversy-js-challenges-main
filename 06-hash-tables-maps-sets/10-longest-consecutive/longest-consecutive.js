// function longestConsecutiveSequence(arr) {
//   const sorted = arr.sort((a, b) => a - b);
//   const set = new Set();

//   sorted.forEach((value, index) => {
//     if (sorted[index + 1] - value === 1) {
//       set.add(value);
//       set.add(sorted[index + 1]);
//     }
//   });

//   return set.size;
// }

function longestConsecutiveSequence(arr) {
  const set = new Set(arr);

  let longestSequence = 0;

  for (const num of arr) {
    if (set.has(num + 1)) {
      let currentNum = num;
      let streak = 0;

      while (set.has(currentNum)) {
        streak++;
        currentNum++;
      }
      longestSequence = Math.max(longestSequence, streak);
    }
  }

  return longestSequence;
}

const result = longestConsecutiveSequence([100, 4, 200, 1, 3, 2]);

console.log(result);
module.exports = longestConsecutiveSequence;
