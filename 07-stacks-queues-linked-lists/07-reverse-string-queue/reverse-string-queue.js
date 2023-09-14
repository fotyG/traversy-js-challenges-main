const Queue = require("./queue");

const reverseStringWithQueue = (str) => {
  const queue = new Queue();
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    queue.enqueue(str[i]);
  }

  for (const item in str) {
    reversed += queue.dequeue();
  }

  return reversed;
};

const result = reverseStringWithQueue("Hello World!");

console.log(result);
module.exports = reverseStringWithQueue;
