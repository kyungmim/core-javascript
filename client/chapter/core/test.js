const a = [10, 20, 30, 40];
//인덱스
// let b = a.forEach((num, i) => {
//   console.log(num, i);
//   return num;
// });

// let b = a.map((num, i) => {
//   // console.log(num, i);
//   return num + 1;
// });
// console.log(b);
//acc : 문자형으로 형변환되기때문에 초기값을 넣어주는것을 권장함
// let b = a.reduce((acc, cur) => {
//   return acc + cur;
// }, 10);
// console.log(b);

//생성자함수 안에 this 가르키는것은 이 생성자함수가 만들어낸 인스턴스
// function TestFunc(name) {
//   this.name = name;
// }

// TestFunc.setAge = function (age) {
//   console.log(age);
// };

// let b = new TestFunc('이경민');

// let c = new TestFunc('멋사');

// console.log(b);
// console.log(c);
// console.log(TestFunc);

function TestFunc(name, age) {
  this.name = '이경민';
  this.age = 28;

  this.getAge = function () {
    return age;
  };
  this.getName = function () {
    return name;
  };
}

// let a = new TestFunc('kim', 21);

// console.log(a.getAge());
// console.log(a.getName());
// console.log(TestFunc.getAge());
// console.log(TestFunc());
