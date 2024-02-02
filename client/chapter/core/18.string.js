/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = [3];

// 특정 인덱스의 글자 추출
let extractCharacter;

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;
//immutable 바뀌지않는

console.log(message);
// 부분 문자열 추출
//0번째 문자를 제와한 1번째 문자열부터 반환 (인덱스순서)
let slice = message.slice(1);
// console.log(slice);

let subString = message.substring(2, 5);
// console.log(subString);

let subStr;
//let subStr = message.substr;
//잘쓰지않는 레거씨한 아이

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
console.log(indexOf);

function checkBrowser() {
  const agent = window.navigator.userAgent.toLowerCase();
  let browserName;

  switch (true) {
    case agent.indexOf('edge') > -1:
      browserName = 'MS Edge';
      break;
    case agent.indexOf('chrome') > -1:
      browserName = 'chrome';
      break;
    case agent.indexOf('safari') > -1:
      browserName = 'Apple Safari';
      break;
    case agent.indexOf('firefox') > -1:
      browserName = 'FireFox';
      break;
    case agent.indexOf('trident') > -1:
      browserName = 'IE';
      break;
  }

  return browserName;
}

// let lastIndexOf;
//indexOf랑 똑같은데 뒤에서 부터 찾음

let includes = message.includes('Less');
//만약 이 문자안에 'less'라는 문자를 갖고있는지
//불린형으로 반환
console.log(includes);

let startsWith = message.startsWith('Less');
//시작하는 단어를 물어봄
//불린형으로 반환

let endsWith = message.endsWith('more.');
//뒤에 끝나는 단어가 맞는지 물어봄
//불린형으로 반환

let str = '   a                 b           c  d  ';
// 공백 잘라내기
let trimLeft = str.trimLeft();
//왼쪽 공백제거 //위에 예시로 a왼쪽 공백사라짐
let trimRight;
let trim = str.trim();
//양쪽 공백 제거 //위에 예시로 a의 왼쪽 d의 오른쪽의 공백제거

let reg = str.replace(/\s*/g, '');
function normalText(string) {
  return string.replace(/\s*/g, '');
}

// 텍스트 반복
let repeat = message.repeat(3);

// 대소문자 변환
let toLowerCase = message.toUpperCase(); //대문자
let toUpperCase = message.toLowerCase(); //소문자

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
