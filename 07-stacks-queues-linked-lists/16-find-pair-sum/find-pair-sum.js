const DoublyLinkedList = require("./DoublyLinkedList");

function findPairSum(numArr, target) {
  const seenList = new DoublyLinkedList();

  for (const num of numArr) {
    const targetNum = target - num;
    if (seenList.contains(targetNum)) {
      return [targetNum, num];
    }
    seenList.append(num);
  }

  return null;
}

const nums = [2, 6, 12, 11, 6, 10];
const targetSum = 22;

const result = findPairSum(nums, targetSum);
console.log(result);
module.exports = findPairSum;
