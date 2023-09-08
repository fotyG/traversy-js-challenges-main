function removeDuplicates(arr) {
  const clean = [];

  for (let i = 0; i < arr.length; i++) {
    if (!clean.includes(arr[i])) clean.push(arr[i]);
  }

  return clean;
}

module.exports = removeDuplicates;
