function reverseString(str) {
  const newStr = [];
  for (let i = str.length; i >= 0; i--) {
    newStr.push(str[i]);
  }
  return newStr.join("");
}

const result = reverseString("hello world");

console.log(result);

module.exports = reverseString;
