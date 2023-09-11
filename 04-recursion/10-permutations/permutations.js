function permutations(str) {
  const result = [];

  if (str.length === 0) {
    result.push("");
    return result;
  }

  for (let i = 0; i < str.length; i++) {
    const firstChar = str[i];
    const restChars = str.slice(0, i) + str.slice(i + 1);
    const subPermutations = permutations(restChars);

    for (let j = 0; j < subPermutations.length; j++) {
      result.push(firstChar + subPermutations[j]);
    }
  }

  return result;
}

const result = permutations("abc");

console.log(result);
module.exports = permutations;
