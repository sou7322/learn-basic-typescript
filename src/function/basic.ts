// パラメータ（仮パラメータ） = 関数宣言時に渡される値
// 引数（実パラメータ ） = 関数呼び出し時に渡される値
// 戻り値 = 関数が返す値

// void = 関数がreturn文を持たない場合の戻り値
export const logMessage = (message: string): void => {
  console.log('logMessage:', message);
};

// never = 決して戻ることのない関数の場合の戻り値
export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};
