function countVowels(str) {
  let count = 0;
  const low = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      low[i] === "a" ||
      low[i] === "u" ||
      low[i] === "i" ||
      low[i] === "o" ||
      low[i] === "e"
    )
      count++;
  }

  return count;
}

countVowels("missisiisisi");
module.exports = countVowels;
