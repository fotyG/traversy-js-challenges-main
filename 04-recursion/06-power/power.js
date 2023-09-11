function power(base, exponent) {
  if (exponent === 0) return 1;

  return power(base, exponent - 1) * base;
}

const result = power(3, 4);

console.log(result);
module.exports = power;
