function highestScoringWord(str) {
  const arr = str.toLowerCase().split(" ");
  const scores = arr
    .map((item, index) => ({
      index,
      value: [...item].reduce((sum, char) => sum + char.charCodeAt() - 96, 0),
    }))
    .sort((a, b) => {
      return b.value - a.value;
    });

  return arr[scores[0].index];
}

const result = highestScoringWord("what time are we climbing up the volcano");

console.log(result);
module.exports = highestScoringWord;
