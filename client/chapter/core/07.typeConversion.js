/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(String(YEAR)); //명시적 형 변환
console.log(YEAR + ''); //암시적 형 변환
//console.log(YEAR + '   '.trim()); //공백 제거 메서드

// undefined, null

let days = null;
let weekend;

console.log(days + '');
console.log(undefined + '');

// boolean
let isClicked = false;
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let cutie = true;
console.log(Number(cutie));
let cuties = false;
console.log(Number(cuties));

// string
let num = '250';
console.log(Number(num)); //명시적 형 변환
console.log(Number(num * 1)); //암시적 형 변환
console.log(Number(num / 1)); //암시적 형 변환
console.log(Number(+num)); //암시적 형 변환

// numeric string
const width = '105.3px';
console.log(Number(width));
console.log(parseInt(width)); //정수로 변환
console.log(parseFloat(width)); // 소수까지 출력

/* 데이터 → 불리언 ---------------------------------------------------------- */

// 불린형 암시적 형변환  '!!'

// null, undefined, 0, NaN, ''
//빈문자와 =>'' , 공백문자 => ' '
console.log(Boolean(friend)); //undefined
console.log(Boolean(money)); //null
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean('0'));

// 위에 나열한 것 이외의 것들

// const value = prompt('값을 입력해주세요');
// console.log(Number(value) + 50); //명시적 형 변환

// const value2 = Number(prompt('값을 입력해주세요'));
// console.log(value2 + 50);
