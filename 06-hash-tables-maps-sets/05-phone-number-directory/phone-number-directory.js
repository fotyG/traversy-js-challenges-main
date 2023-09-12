function phoneNumberDirectory(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const keyValue = arr[i].split(":");
    map.set(keyValue[0], keyValue[1]);
  }

  return map;
}

const phoneNumbers = [
  "John:123-456-7890",
  "Jane:987-654-3210",
  "Joe:555-555-5555",
];

const result = phoneNumberDirectory(phoneNumbers);

console.log(result.get("John"));
module.exports = phoneNumberDirectory;
