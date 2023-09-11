function numberRange(startNum, endNum) {
  if (endNum === startNum) return [startNum];

  const numberArray = numberRange(startNum, endNum - 1);
  numberArray.push(endNum);
  return numberArray;
}

const result = numberRange(1, 5);

console.log(result);
module.exports = numberRange;
