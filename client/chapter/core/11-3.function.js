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

console.log(calcAllMoney(10, 30, 40, 50));

// 화살표 함수와 this

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow;

// repeat(text: string, repeatCount: number): string;
let repeat;
