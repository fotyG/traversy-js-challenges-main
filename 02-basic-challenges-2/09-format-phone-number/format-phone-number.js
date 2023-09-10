function formatPhoneNumber(arr) {
  return `(${arr.slice(0, 3).join("")}) ${arr.slice(3, 6).join("")}-${arr
    .slice(6)
    .join("")}`;
}

const result = formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

console.log(result);
module.exports = formatPhoneNumber;
