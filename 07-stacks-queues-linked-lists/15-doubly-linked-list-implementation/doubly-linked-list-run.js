const DoublyLinkedList = require("./doubly-linked-list");

const list = new DoublyLinkedList();

list.append(200);
list.append(300);
list.append(400);

list.prepend(100);

list.insertAt(2, "New");
list.printAll();
