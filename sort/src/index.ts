import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([1, -5, 0, 10]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharacterCollection('Xaazb');
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(2);
linkedList.add(-1);
linkedList.add(10);
linkedList.sort();
console.log(linkedList.print());
