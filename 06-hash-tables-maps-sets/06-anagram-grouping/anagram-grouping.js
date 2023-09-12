function anagramGrouping(arr) {
  const map = new Map();

  for (const entry of arr) {
    const sortedString = entry.split("").sort().join("");
    if (map.has(sortedString))
      map.set(sortedString, [...map.get(sortedString), entry]);
    else map.set(sortedString, [entry]);
  }

  return Array.from(map.values());
}

const result = anagramGrouping(["cat", "act", "dog", "god", "tac"]);

console.log(result);
module.exports = anagramGrouping;
