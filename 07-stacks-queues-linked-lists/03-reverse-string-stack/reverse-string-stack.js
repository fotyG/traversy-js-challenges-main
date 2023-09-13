const Stack = require("./stack");

function reverseStringStack(str) {
  const stack = new Stack();
  let reversed = "";

  for (const letter of str) {
    stack.push(letter);
  }

  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }

  return reversed;
}

const result = reverseStringStack("Hello World!");

console.log(result);
module.exports = reverseStringStack;
