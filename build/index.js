"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LinkedList_1 = require("./LinkedList");
// Sorting Numbers
// const numbersCollection = new NumbersCollection([100, 3, -9, 1])
// const sorter = new Sorter(numbersCollection);
// numbersCollection.sort();
// console.log(numbersCollection.data);
// Sorting strings
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// charactersCollection.sort();
// console.log(charactersCollection.data);
// Sorting Linked Lists
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
