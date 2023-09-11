function factorial(num) {
  if (num === 0) return 1;

  return factorial(num - 1) * num;
}

const result = factorial(1);

console.log(result);
module.exports = factorial;
