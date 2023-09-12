const HashTable = require("./custom-hash-table");

const myHashTable = new HashTable();

// const result = myHashTable._hash("John", myHashTable.limit);

myHashTable.set("John", "22055985");
myHashTable.set("James", "22055986");
myHashTable.set("Sarah", "22055987");

// myHashTable.remove("Sarah");

// console.log(myHashTable.get("Sarah"));
// myHashTable.printTable();

// console.log(myHashTable.has("John"));

// myHashTable.clear();

myHashTable.printTable();
