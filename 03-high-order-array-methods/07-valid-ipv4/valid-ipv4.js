const isValidIPv4 = (str) => {
  const arr = str.split(".");
  if (arr.length !== 4) return false;
  return arr.every(
    (item) => item >= 0 && item <= 255 && item === Number(item).toString()
  );
};

const result1 = isValidIPv4("122.164.23.21");
const result2 = isValidIPv4("122.164.23.21.33");

console.log(result1, result2);
module.exports = isValidIPv4;
