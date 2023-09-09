function findMissingLetter(arr) {
  if (arr.length === 0) return "";
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1].charCodeAt() - arr[i].charCodeAt() !== 1) {
      res = String.fromCharCode(arr[i].charCodeAt() + 1);
      break;
    }
  }
  return res;
}

console.log(findMissingLetter(["t", "u", "v", "w", "x", "z"]));
module.exports = findMissingLetter;
