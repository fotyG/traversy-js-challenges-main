function findMaxNumber(numArr) {
  let maxNum = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > maxNum) maxNum = numArr[i];
  }

  return maxNum;
}

module.exports = findMaxNumber;
