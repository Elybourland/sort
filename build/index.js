"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sorter_1 = require("./sorter");
const LinkedList_1 = require("./LinkedList");
// Sorting Numbers
// const numbersCollection = new NumbersCollection([100, 3, -9, 1])
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// Sorting strings
// const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
// Sorting Linked Lists
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter = new sorter_1.Sorter(linkedList);
sorter.sort();
linkedList.print();
