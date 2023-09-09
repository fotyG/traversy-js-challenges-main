function findFirstNonRepeatingCharacter(str) {
  const object = {};

  for (let i = 0; i < str.length; i++) {
    object[str[i]] = (object[str[i]] || 0) + 1;
  }

  for (let key in object) {
    if (object[key] === 1) return key;
  }

  return null;
}

const result1 = findFirstNonRepeatingCharacter("aabbcdd");
const result2 = findFirstNonRepeatingCharacter("aabbccddeeffghh");

console.log(result1);
console.log(result2);
module.exports = findFirstNonRepeatingCharacter;
