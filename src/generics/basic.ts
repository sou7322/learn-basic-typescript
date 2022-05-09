export default function genericsBasicSample() {
  // 以下の2つの例では型は違えど構造は同じ
  // const stringReduce = (array: string, initialValue: string): string => {};
  // const numberReduce = (array: number, initialValue: number): number => {};

  // ジェネリック型により型定義を抽象化し使い回すことができる
  // * <T>に実際の型が入る
  type GenericReduce<T> = {
    (array: T[], initialValue: T): T
  };

  // 省略記法
  // type GenericReduce<T> = (array: T[], initialValue: T) => T;

  const stringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }
  console.log('GenericStringReduce:', stringReduce(['May ', 'I ', 'help ', 'you', '?'], 'Hi! '))

  const numberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  }
  console.log('GenericStringReduce:', numberReduce([1, 10, 100], 1000))
}