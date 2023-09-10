function validateEmail(email) {
  const part = email.split("@");
  const part2 = part[1]?.split(".");

  if (!part2 || part.length !== 2 || part[0] === "") return false;
  if (part2.length === 2) return true;
  return false;
}

const result1 = validateEmail("brad@gmail.com");
const result2 = validateEmail("bradgmailcom");
const result3 = validateEmail("user@domain");

console.log(result1);
console.log(result2);
console.log(result3);
module.exports = validateEmail;
