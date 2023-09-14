const { LinkedList } = require("./linked-list");

function reverseStringLinkedList(str) {
  const list = new LinkedList();

  for (let i = str.length - 1; i >= 0; i--) {
    list.add(str[i]);
  }

  let reversed = "";
  let current = list.head;

  while (current !== null) {
    reversed += current.data;
    current = current.next;
  }

  return reversed;
}

const result = reverseStringLinkedList("Hello World!");

console.log(result);
module.exports = reverseStringLinkedList;
