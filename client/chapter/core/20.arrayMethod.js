/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
const isArray = (data) => Array.isArray(data);
//데이터를 받으면 그 값이 데이터가 맞다면 그 결과값을 반환하겠다.
//isArray({}) //false 나옴

function isArray2(data) {
  return Array.isArray(data);
}

const people = [
  {
    id: 0,
    name: '박가희',
    age: 25,
    job: '명탐정코난 범인',
    imageSrc: 'FAkq31',
  },
  {
    id: 1,
    name: '김보미',
    age: 64,
    job: '짜요짜요 마케터',
    imageSrc: 'GAkz34',
  },
  {
    id: 2,
    name: '한태희',
    age: 13,
    job: '삐돌이',
    imageSrc: 'FAzoq91',
  },
  {
    id: 3,
    name: '이원명',
    age: 81,
    job: '이도령',
    imageSrc: 'Tq9ozli',
  },
];

/* 요소 순환 ---------------------------- */

// forEach
//깂을 반환하지않음

let nameArray = [];
//값을 반환하고 싶으면 위에처럼 빈배열에 push해줘야함.

people.forEach((item, index) => {
  //   console.log(item, index);
  nameArray.push(item.name);
});
// console.log(nameArray);

const list = document.querySelectorAll('span');

list.forEach((item) => {
  item.addEventListener('click', function () {
    console.log('click');
  });
});

// list[0].addEventListener('click',()=>{
//     console.log('first!!!')
// })
// list[2].addEventListener('click',()=>{
//     console.log('second!!!')
// })

/* 원형 파괴 ----------------------------- */

const arr = [10, 100, 1000, 10000];

// push
// pop
// unshift
// shift
// reverse
const reverse = [...arr].reverse();

// splice
// const splice = arr.splice(1, 2,'js','css');

// sort
// arr.sort((a, b) => {
//   return b - a;
//   //b를 앞에 빼주면 오름차순
//   //a를 앞에 빼주면 내림차순
// });

/* 새로운 배열 반환 ------------------------ */

// concat
// slice
// toSorted
// toReversed : reverse와 같지만 원본을 회손하지않음.
// toSpliced

// map
//새로운 배열을 반환함.
// const job = people.map((item, index) => {
//   return item.job;
// });

const card = people.map((item, index) => {
  return /*html*/ `
     <div class="userCard Card-${index + 1}">
      <div class="imageField">
        <img src="${item.imageSrc}.jpg" alt="코난">
      </div> 
     <span>이름: ${item.name}</span>
     <span>나이: ${item.age}</span>
     <span>직업: ${item.job}</span>
     </div>
    `;
});

// card.forEach((item) => document.body.insertAdjacentHTML('beforeend', item));

const newAge = people.map((item) => item.age + 1);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find
// findIndex

const find = people.find((item) => {
  return item.job === '삐돌이';
});

/* 요소 걸러내기 --------------------------- */

// filter

const 젊은이들 = people.filter((item) => {
  return item.age < 30;
});

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
// reduceRight

let reduce = people.reduce((acc, cur) => {
  return acc + cur.age;
}, 0);
console.log(reduce);

const tem = people.reduce((htmlCode, cur) => {
  return htmlCode + `<div>${cur.name} : ${cur.age}</div>`;
}, '');

document.body.insertAdjacentHTML('beforeend', tem);

/* string ←→ array 변환 ------------------ */

// split : 문자 => 배열

const str = '원명 가희 소정 설아 경민 진욱';
const stringToArray = str.split(' ');
console.log(stringToArray);

// join : 배열 => 문자
const arrayToString = stringToArray.join('-');
console.log(arrayToString);
