import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([100, 3, -9, 1])
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);