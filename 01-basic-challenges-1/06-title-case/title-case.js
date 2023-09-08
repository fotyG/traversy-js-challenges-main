function titleCase(str) {
  const newStr = str.toLowerCase().split(" ");
  const result = [];

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i].length > 0) {
      result.push(newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1));
    }
  }

  return result.join(" ");
}

titleCase("hedklaodo  odksapdkwgog jgijJ JJJ dsd");

module.exports = titleCase;
