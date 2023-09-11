function findMissingLetter(arr) {
  const missing = [];
  const codeArray = arr.map((item) => item.charCodeAt());
  codeArray.reduce((accum, item) => {
    if (item - accum > 1) missing.push(item - 1);
    accum = item;
    return accum;
  }, codeArray[0]);

  return String.fromCharCode(missing[0]);
}

const result = findMissingLetter(["a", "b", "c", "e"]);

console.log(result);
module.exports = findMissingLetter;
