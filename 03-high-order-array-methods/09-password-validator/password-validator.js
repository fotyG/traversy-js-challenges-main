function validatePassword(pw) {
  if (pw.length < 8) return false;

  const upperCase = pw
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());
  const lowerCase = pw
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());
  const digit = pw.split("").some((char) => !isNaN(Number(char)));

  return upperCase && lowerCase && digit;
}

const result1 = validatePassword("Abc12345");
const result2 = validatePassword("password");

console.log(result1, result2);
module.exports = validatePassword;
