export default function tupleSample() {
  // 厳格な配列 = タプル
  // * 配列が持つ要素の数、各要素の型を定義することができる
  let tuple1: [string, number] = ['string', 1];

  // tuple1 = ['string', 1, 'string2'];
  // tuple1 = [1, 'string'];
  console.log('tuple1:', tuple1);

  // pushはできるため注意
  tuple1.push('string');
  console.log('tuple1:', tuple1);

  // 可変長引数に適用することも可能
  const tuple2: [string, ...number[]] = ['string', 1, 2, 3];
  console.log('tuple2:', tuple2);
}