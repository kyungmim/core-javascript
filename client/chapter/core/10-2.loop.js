/* -------------------- */
/* Do While Loop        */
/* -------------------- */

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력

// let repeat = +prompt('몇번 반복 하시겠습니다?', 0);

// do {
//   console.log(repeat);
// } while (repeat--);

// 아무것도 반복하지않았을때 무한루프를 해결하는 방법
// let repeat2 = +prompt('몇번 반복 하시겠습니다?', 0);

// do {
//   console.log(repeat2);

//   if (repeat2 === '') break;
// } while (repeat2--);

// - 사용자로부터 요청된 횟수가 0보다 작을 경우,
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

//html = document

// let first = document.querySelector('.first');

// do{

//   first = first.nextSibling;

// }while(first.nodeType !== document.ELEMENT_NODE)

// console.log( first );

function next(node) {
  if (typeof node === 'string') node = document.querySelector(node);
  do {
    node = node.nextSibling;
  } while (node.nodeType !== 1);

  return node;
}

// const second = next(first);

console.log(next('.first'));

//prv(second) => first

function prev(node) {
  // if(!node) throw new Error ('선택한 ELEMENT의 이전 요소는 존재하지 않습니다.')

  if (typeof node === 'string') node = document.querySelector(node);

  do {
    node = node.previousSibling;
  } while (node.nodeType !== 1);

  return node;
}

console.log(prev('.second'));
// console.log(prev(document.querySelector('.second')));
