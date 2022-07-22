import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

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
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

// const sorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();