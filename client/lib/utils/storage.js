// localStorage.setItem('user', JSON.stringify({ name: 'tiger', age: 15 }));

// console.log(JSON.parse(localStorage.getItem('user')));

import { isString } from './typeOf.js';

const { localStorage: storage } = window;

export function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    if (typeof key === 'string') {
      storage.setItem(key, JSON.stringify(value));
      resolve();
    } else {
      reject({ message: 'key값은 문자 타입이여야 합니다.' });
    }
  });
}

export function getStorage(key) {
  return new Promise((resovle, reject) => {
    if (isString(key)) {
      resovle(JSON.parse(storage.getItem(key)));
    } else {
      reject({ message: 'key값은 문자형타입 이여야 합니다.' });
    }
  });
}

export function deleteStorage(key) {
  return new Promise((resolve, reject) => {
    !key ? storage.clear() : storage.removeItem(key);
    resolve();
  });
}
