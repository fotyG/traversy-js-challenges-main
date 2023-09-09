function arrayIntersection(arr1, arr2) {
  const set = new Set(arr1);
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (set.has(arr2[i])) result.push(arr2[i]);
  }

  return Array.from(new Set(result));
}

console.log(arrayIntersection([1, 2, 2, 2, 3, 4, 5], [1, 3, 2, 2, 5, 7, 9]));
module.exports = arrayIntersection;
