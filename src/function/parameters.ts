// オプションパラメータ
// * 末尾の`?`によって表現される
// * 必ず最後に書かなければならない
export const isUserLoggedIn = (userId: number, userName?: string): boolean => {
  if (userId === 123) {
    console.log(userName, 'is logged in.');
    return true;
  } else {
    console.log('User is not logged in.');
    return false;
  }
};

// デフォルトパラメータ
// * `=`を用いて設定、引数が渡されなかった場合に反映される
// * 記述する順番は考慮しなくて良い
export const isUserLoggedIn2 = (userId: number, userName: string = 'John Doe'): boolean => {
  if (userId === 123) {
    console.log(userName, 'is logged in.');
    return true;
  } else {
    console.log('User is not logged in.');
    return false;
  }
};

// レストパラメータ（可変長引数）
// * `...`を用いて設定、受け取った引数は配列として受け取る
// * 必ず最後に書かなければならない
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevValue: number, currentValue: number) => {
    return prevValue + currentValue;
  }, 0);
};

// 呼び出しシグネチャ
// * どのような関数なのかを表現する型定義

// 省略記法（アロー関数に似ている）
// `LogName`という型を定義するのであって関数名ではない
/*
type LogName = (name: string) => void;

export const logName: LogName = (name) => {
  console.log('logName:', name);
};
*/

// 安全記法（オブジェクトに似ている）
/*
type FullLogName = {
  (name: string): void;
};

export const fullLogName: FullLogName = (name) => {
  console.log('logName:', name);
};
*/
