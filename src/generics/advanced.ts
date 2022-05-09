export default function genericsAdvancedSample() {
  // 複数のパラメータを用いることも可能
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i]);
    }
    return result;
  }
  const numbers = mapStringsToNumbers(
    ['123', '456', '789'],
    (item) => Number(item)
  );
  console.log('genericAdvanced1:', numbers);

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i]);
    }
    return result;
  }
  const strings = mapNumbersToStrings(
    numbers,
    (item) => String(item)
  );
  console.log('genericAdvanced2:', strings);
}