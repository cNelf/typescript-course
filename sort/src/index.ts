import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([1, -5, 0, 10]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const characterCollection = new CharacterCollection('Xaazb');
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(2);
linkedList.add(-1);
linkedList.add(-3);
linkedList.add(10);
const sorter = new Sorter(linkedList);
sorter.sort();
console.log(linkedList.print());
