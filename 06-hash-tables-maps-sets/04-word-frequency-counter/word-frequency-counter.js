function wordFrequencyCounter(str) {
  const wordArr = str.toLowerCase().split(/\W+/);
  const wordMap = new Map();

  wordArr.forEach((word) => {
    if (wordMap.has(word)) {
      const value = wordMap.get(word);
      wordMap.set(word, value + 1);
    } else {
      if (word !== "") wordMap.set(word, 1);
    }
  });

  return wordMap;
}

const result = wordFrequencyCounter(
  "The quick brown fox jumps over the lazy dog dog dog."
);

console.log(result);
module.exports = wordFrequencyCounter;
