const HashTable = require("./HashTable");

function anagramGrouping(arr) {
  const table = new HashTable();
  for (const word of arr) {
    const sorted = word.split("").sort().join("");

    if (table.has(sorted)) {
      table.get(sorted).push(word);
    } else {
      table.set(sorted, [word]);
    }
  }
  return table.getValues();
}

const words = ["cat", "act", "silent", "listen", "tac", "hello", "foo", "bar"];

const result = anagramGrouping(words);

console.log(result);
module.exports = anagramGrouping;
