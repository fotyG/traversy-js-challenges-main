function countDown(num) {
  if (num < 1) {
    return Array.from(num);
  }

  return num + countDown(num - 1);
}

const res = countDown(6);
console.log(res);

module.exports = countDown;
