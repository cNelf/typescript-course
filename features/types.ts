let apples: number = 5;

let str: string[] = ['1', '2', '3'];

let func = (num: number): void => {
  console.log(num);
};

const profile = {
  name: 'alex',
  age: 20,
  sayHi: function () {
    console.log(this.name + 'say Hi~');
  },
};

const { age, sayHi }: { age: number; sayHi: () => void } = profile;
