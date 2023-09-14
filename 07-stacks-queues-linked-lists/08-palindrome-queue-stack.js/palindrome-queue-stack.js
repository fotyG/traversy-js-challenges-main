const Queue = require("./queue");
const Stack = require("./stack");

function isPalindromeQueueStack(str) {
  const stack = new Stack();
  const queue = new Queue();

  const cleanStr = str.toLowerCase().split(/\W+/).join("");

  for (let char of cleanStr) {
    stack.push(char);
    queue.enqueue(char);
  }

  for (let length in cleanStr) {
    if (stack.pop() !== queue.dequeue()) return false;
  }

  return true;
}

const result1 = isPalindromeQueueStack("A man, a plan, a canal: Panama");
const result2 = isPalindromeQueueStack("Hello");

console.log(result1, result2);
module.exports = isPalindromeQueueStack;
