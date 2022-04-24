export default function primitiveSample() {
  let name: string = 'Amy';

  // string型の変数に数値を代入することはできない
  // name = 123; => error

  console.log('name:', typeof name, name);

  let age: number = 14;
  console.log('age:', typeof age, age);

  let isFemale: boolean = true;
  console.log('isFemale:', typeof isFemale, isFemale);

  let isOver20: boolean = age >= 20;
  console.log('isOver20:', typeof isOver20, isOver20);
}