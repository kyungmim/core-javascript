/* ---------------- */
/* For In Loop      */
/* ---------------- */

const js = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// 객체의 속성(property) 포함 여부 확인 방법
//부모인 value까지 있다고 판단하는게 for in문에 단점

const key = 'nickName';

//생성된 객체의 method는 불안함, => 진짜 객체의 능력을 빌려씀
//메서드 빌려쓰기 (call)   Object.prototype =({})쓰기 가능,물론 조상은 아님  (빌려쓰는 주체, 야규먼트)
console.log(Object.prototype.hasOwnProperty.call(js, key));

// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
//.hasOwnProperty
//자바스크립트는 hasOwnProperty를 보호해주지 않습니다.
// - "자신(own)의 속성(Property)을 가지고(has)있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

console.clear();

for (let key in js) {
  if (Object.prototype.hasOwnProperty.call(js, key)) {
    console.log(key);
  }
}
