export default function objectSample() {
  const a: object = {
    name: 'Amy',
    age: 15,
  };

  // "プロパティ 'name' は型 'object' に存在しません。"というエラーが発生する
  // object型は「objectである」ことしか定義しない
  // a.name;
  console.log(a);

  // 実際そのオブジェクトがどんな構造を持つかを定義しなければならない
  // オブジェクトリテラル記法
  let member : {
    name: String
    age: Number
  } = {
    name: 'Amy',
    age: 15,
  }
  console.log('objectSample:', member);

  // 再代入可能
  member = {
    name: 'John',
    age: 25,
  }
  console.log('objectSample:', member);

  // 一度定義された型は再代入の際も担保される
  // member = {
  //   name: 25,
  //   age: 'John',
  // }

  // オプショナルプロパティ: あってもなくてもよい
  // リードオンリープロパティ: 上書き不可能
  const member2: {
    name: string
    age: number
    job?: string
    readonly country: string
  } = {
    name: 'Sharon',
    age: 20,
    country: 'America',
  }
  console.log('objectSample2:', member2);

  member2.name = 'Yamada';
  member2.job = 'Doctor';
  // member2.country = 'Japan';
  console.log('objectSample3:', member2);

  // インデックスシグネチャ
  // * 定義された構造のプロパティを複数持つことができる
  // * [key: keyの型]: valueの型
  // * keyの型はstring, numberのどちらかのみ
  const capitals: {
    [name: string]: string
  } = {
    Japan: 'Tokyo',
    America: 'Washington',
  }
  // 追加も可能
  capitals.Korea = 'Seoul';

  console.log('indexSignature:', capitals);

  // 型エイリアス
  // * 型に名前をつけて定義することができる
  // * 再利用可能なためDRYになる
  // * 変数の役割が明確化される
  type Country = {
    name: string
    language: string
    capital: string
  };

  const japan: Country = {
    name: 'Japan',
    language: 'Japanese',
    capital: 'Tokyo',
  }
  console.log('alias:', japan);

  const america: Country = {
    name: 'America',
    language: 'English',
    capital: 'Washington',
  };
  console.log('alias:', america);

  // 合併型と交差型
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  };

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  };

  // 合併型: A型とB型のどちらかである
  type Adventurer = Knight | Wizard;

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 80,
    weapon: 'Wood Sword',
    swordSkill: 'Slash'
  }
  console.log('Adventurer1:', adventurer1);

  const adventurer2: Adventurer = {
    hp: 70,
    mp: 130,
    weapon: 'Wood Wand',
    magicSkill: 'Fire Ball'
  };
  console.log('Adventurer2:', adventurer2);

  // 2つの型のプロパティを両方持つこともできてしまうため注意
  const adventurer3: Adventurer = {
    hp: 70,
    sp: 80,
    mp: 130,
    weapon: 'Wood Wand',
    swordSkill: 'Slash',
    magicSkill: 'Fire Ball'
  };
  console.log('Adventurer3:', adventurer3);

  // 交差型: A型とB型の両方を持つ
  type Paladin = Knight & Wizard;

  const paladin1: Paladin = {
    hp: 100,
    sp: 80,
    mp: 100,
    weapon: 'Wood Sword',
    swordSkill: 'Slash',
    magicSkill: 'Fire Ball'
  }
  console.log('Paladin1:', paladin1);

  // 2つの型のプロパティを不足なく持っていなければならない
  // const paladin2: Paladin = {
  //   hp: 100,
  //   sp: 80,
  //   weapon: 'Wood Sword',
  //   magicSkill: 'Fire Ball'
  // }
}