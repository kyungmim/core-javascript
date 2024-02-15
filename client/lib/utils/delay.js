import { getNode } from '../dom/getNode.js';
import { isNumber, isObject } from './typeOf.js';

const first = getNode('.first');
const second = getNode('.second');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// delay(() => {
//   first.style.top = '-100px';
//   second.style.top = '-100px';

//   delay(() => {
//     first.style.transform = 'rotate(360deg)';
//     second.style.transform = 'rotate(-360deg)';
//     delay(() => {
//       first.style.top = '0';
//       second.style.top = '0';
//     });
//   });
// });

//mixin

//기조낵체  + 전달받은객체

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  successMessag: '성공입니다',
  errorMessage: '알수없는오류',
};

function delayP(options) {
  let config = { ...defaultOptions };

  if (isNumber(options)) {
    config.timeout = options;
  }

  if (isObject(options)) {
    config = { ...defaultOptions, ...options };
  }

  let { shouldReject, successMessag, errorMessage, timeout } = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldReject) {
        resolve(successMessag);
      } else {
        reject(errorMessage);
      }
    }, timeout);
  });
}

delayP(2000).then((res) => {
  console.log(res);
});
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(result);

// const promise = new Promise((resolve, reject) => {
//   reject('실패');
// });

// console.log(promise);
