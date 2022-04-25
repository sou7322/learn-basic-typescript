/* オブジエクトの型定義*/

import objectSample from './object/object';
objectSample();

/*ここまで */


/* 関数の型定義

import { logMessage } from './function/basic';
logMessage('hello');

// import { alwaysThrowError } from './function/basic';
// alwaysThrowError('Throw Error!!!');

import { isUserLoggedIn } from './function/parameters';
isUserLoggedIn(123);
isUserLoggedIn(123, 'Amy');
isUserLoggedIn(321);

import { isUserLoggedIn2 } from './function/parameters';
isUserLoggedIn2(123, 'Amy');
isUserLoggedIn2(123);

import { sumProductsPrice } from './function/parameters';
const sum = sumProductsPrice(100, 200, 300, 400, 500);
console.log('sumProductsPrice:', sum);

import { logName } from './function/parameters';
logName('Amy');

import { fullLogName } from './function/parameters';
fullLogName('Amy');
ここまで */

/* 基本の型定義

import { unknownSample, anySample, notExistSample, primitiveSample } from './basic/index';

primitiveSample();
notExistSample();
anySample();
unknownSample();

ここまで */

// import World from './world';
// const root = document.getElementById('root');
// const world = new World('Hello World');
// world.sayHello(root);
