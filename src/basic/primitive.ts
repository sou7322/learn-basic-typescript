export default function primitiveSample() {
  const name: string = 'Amy';

  // string型の変数に数値を代入することはできない
  // name = 123; => error

  console.log('name:', typeof name, name);

  const age: number = 14;
  console.log('age:', typeof age, age);

  const isFemale: boolean = true;
  console.log('isFemale:', typeof isFemale, isFemale);

  const isOver20: boolean = age >= 20;
  console.log('isOver20:', typeof isOver20, isOver20);
}
