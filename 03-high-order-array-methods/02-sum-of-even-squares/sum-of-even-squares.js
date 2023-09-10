// function sumOfEvenSquares(arr) {
//   const even = arr.filter((num) => num % 2 === 0);
//   const square = even.map((num) => num ** 2);
//   const sum = square.reduce((total, num) => total + num, 0);

//   return sum;
// }

function sumOfEvenSquares(nums) {
  return nums
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((total, num) => total + num, 0);
}

const result = sumOfEvenSquares([1, 2, 3, 4, 5, 6]);

console.log(result);
module.exports = sumOfEvenSquares;
