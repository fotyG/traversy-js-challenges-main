function generateHashtag(str) {
  if (str.length > 140 || str === "") return false;
  const arr = str.split(" ");
  console.log(arr);
  const result = arr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  result.unshift("#");
  return result.join("");
}

const result = generateHashtag("    Hello     World   ");

console.log(result);
module.exports = generateHashtag;
