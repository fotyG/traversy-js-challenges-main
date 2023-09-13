const Stack = require("./stack");

function balancedParenthesis(str) {
  const stack = new Stack();

  for (let item of str) {
    if (item === "(") {
      stack.push(item);
    } else if (item === ")") {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}

const result1 = balancedParenthesis("()()()");
const result2 = balancedParenthesis("()(");

console.log(result1, result2);
module.exports = balancedParenthesis;
