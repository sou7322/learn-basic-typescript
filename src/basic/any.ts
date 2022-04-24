export default function anySample() {
  let name: any = 'Amy';
  // 型はanyのまま変化しない
  console.log('anyName:', typeof name, name);

  // 異なる型の値が代入できてしまう
  // 「どんな値でも代入できてしまう」ことは非常に危険
  name = 15;
  console.log('anyName:', typeof name, name);
}
