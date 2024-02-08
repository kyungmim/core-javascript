/* global getNode, insertLast , clearContents ,getNodes*/
// 1. input value 값 가져오기
//    - input에게 input 이벤트 걸기
//    - input.value 사용하기

// 2. 두 수의 합 더하기

// 3. 합계 화면에 뿌리기(랜더링)

import {
  getNode,
  getNodes,
  insertLast,
  clearContents,
  refError,
} from './lib/index.js';

function phase1() {
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');
  const clear = getNode('#clear');

  function handleInput() {
    const firstValue = Number(first.value);
    const secondValue = Number(second.value);

    const total = firstValue + secondValue;

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();
    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

const calculator = getNode('.calculator');
const result = getNode('.result');
const clear = getNode('#clear');
const numberInputs = Array.from(getNodes('input:not(#clear)'));

function handleInput() {
  const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

  clearContents(result);
  insertLast(result, total);
}

function handleClear(e) {
  e.preventDefault();

  numberInputs.forEach(clearContents);

  result.textContent = '-';
}

calculator.addEventListener('input', handleInput);
clear.addEventListener('click', handleClear);
