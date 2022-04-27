export default function arraySample() {
  // 配列が持つことのできる値の型を定義できる
  const array1: string[] = ['red', 'blue'];
  array1.push('green');
  // array1.push(1);

  console.log('array1:', array1);

  // 記法は2つあり、差はない
  const array2: number[] = [1, 2, 3];
  const array3: Array<number> = [4, 5, 6];

  console.log('array2:', array2);
  console.log('array3:', array3);

  // 合併型も使えるが、あまり好ましくない
  const array4: (string | number)[] = ['abc', 1];
  array4.push('def');
  array4.push(2);

  console.log('array4:', array4);

  // 配列の型推論
  const generateSomeArray = () => {
    const someArray_ = []; // => array[]

    someArray_.push('string'); // => string[]
    someArray_.push(1); // => (string | number)[]

    // 型が確定する
    return someArray_;
  };

  const array5 = generateSomeArray();
  // array5.push(true);

  console.log('array5:', array5);
}
