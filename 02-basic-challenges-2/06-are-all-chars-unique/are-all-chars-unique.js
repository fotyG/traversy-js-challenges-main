function areAllCharactersUnique(str) {
  return Array.from(new Set(str)).join("") === str;
}

const result1 = areAllCharactersUnique("abcdefg");
const result2 = areAllCharactersUnique("abcdefgA");
const result3 = areAllCharactersUnique("programming");

console.log(result1);
console.log(result2);
console.log(result3);

module.exports = areAllCharactersUnique;
