/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
};

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 화살표 함수 (표현)식

// spread syntax    ...arr

//                //  rest parameter
// let calcAllMoney = (...args)=>{

//   // args 배열을 순환하여 모든 수의 합을 구하자!

//   let total = 0;
//   // for
//   // for(let i = 0; i < args.length; i++){
//   //   total += args[i];
//   // }

//   // for..of
//   // for(let value of args) total += value

//   // forEach
//   // args.forEach(item => total += item)

//   // reduce

//   // args.reduce((acc,cur)=> acc + cur,0)

//   return args.reduce((acc,cur)=> acc + cur,0)
// };

//  rest parameter
let calcAllMoney = (...args) => args.reduce((acc, cur) => acc + cur, 0);

// console.log(calcAllMoney(10, 30, 40, 50));

// 화살표 함수와 this

// 일반 함수
// this : 나를 호출한 대상을 this로 찾음

// 화살표 함수
// this : 가지고 있지 않음. 내 상위 영역에서 찾음

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = (numeric, powerCount) => {
  let result = 1;

  for (let i = 0; i < powerCount; i++) result *= numeric;

  return result;
};

console.log(pow(2, 3));
// let pow = (a, b) => {
//   return a ** b;
// };
// console.log(pow(2, 3));

let powExprssion = (numeric, powerCount) => {
  //배열을 만들어줌
  //제곱 숫자     //만들어진 배열안에 넣을 수
  return Array(powerCount)
    .fill(null)
    .reduce((acc) => {
      return acc * numeric;
    }, 1);
  //기본값은 0 이기 때문에 1을 넣어줘야함
};

// repeat(text: string, repeatCount: number): string;
let repeat = (repeat, repeatCount) => {
  let result = '';
  //[]넣어도 값이 나오지만 암시적으로 형변환이 일어나기때문에 가독성면에서 '' 더 나음

  for (let i = 0; i < repeatCount; i++) {
    result += repeat;
  }
  return result;
};
console.log(repeat('안녕', 5));

let repeatExprssion = (repeat, repeatCount) => {
  return Array(repeatCount)
    .fill(repeat)
    .reduce((acc) => {
      return acc + repeat;
    });
};
console.log(repeatExprssion('안녕', 2));
