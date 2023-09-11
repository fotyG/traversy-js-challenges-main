function reverseString(str) {
  if (str === "") {
    return "";
  }
  console.log(str);
  return reverseString(str.substring(1)) + str[0];
}

const result = reverseString("hello");

console.log(result);

module.exports = reverseString;
