function flattenArray(arr) {
  let result = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      result = [...result, ...flattenArray(item)]; // Alternative: result = result.concat(flattenArray(item))
    } else {
      result.push(item);
    }
  }
  return result;
}

const result = flattenArray([1, 2, 3, [4, 5, [6, 7, 8], 9], 10]);

console.log(result);
module.exports = flattenArray;
