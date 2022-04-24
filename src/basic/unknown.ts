export default function unknownSample() {
  const maybeNumber: unknown = 10;
  // 型が代入した値に合わせて変化する
  console.log('maybeNumber:', typeof maybeNumber, maybeNumber);

  // 比較をすることはできる
  const isTen: boolean = maybeNumber === 10;
  console.log('isTen:', typeof isTen, isTen);

  // 計算を行うことはできない
  // const sum: number = maybeNumber + 10;

  // 型の判定を行った後であれば計算を行うことができる
  if (typeof maybeNumber === 'number') {
    const sum: number = maybeNumber + 10;
    console.log('sum:', typeof sum, sum);
  }
}
