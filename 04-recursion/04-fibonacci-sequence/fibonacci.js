function fibonacci(num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

const result = fibonacci(8);

console.log(result);
module.exports = fibonacci;
