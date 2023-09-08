function isPalindrome(str) {
  const clean = str.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();
  // console.log(clean, clean.split("").reverse().join(""));
  if (clean === clean.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

const result1 = isPalindrome("racecar");
const result2 = isPalindrome("racecars");
const result3 = isPalindrome("A man, a plan, a canal, Panama");

module.exports = isPalindrome;
