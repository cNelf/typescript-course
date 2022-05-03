import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1, -5, 0, 10]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
