/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//constructor method는 최초 1회만 실행됨.(n회? x)
//초기값 설정할때 만듬

class Animal {
  constructor(name) {
    this.name = name;
    this.stomach = [];
    this.legs = 4;
    this.tail = true;
  }

  get eat() {
    return this.stomach;
  }

  set eat(food) {
    this.prey = food;
    this.stomach.push(food);
  }
}

// const a = new Animal('호돌이');

class Tiger extends Animal {
  constructor(name) {
    super(name); //부모가 갖고있는 능력을 다 가져다 쓰겠다.
    //부모이 constructor를 실행시키겠다.
    this.pattern = '호랑이무늬';
  }

  static options = {
    version: '0.0.1',
    compay: 'like-lion',
    ceo: '---',
  };

  //언제든지 불러와서 쓸 수 있음.
  static bark() {
    return '어흥';
  }

  hunt(target) {
    return `${target}에 조심히 접근한다.`;
  }
}

const 한라산호랑이 = new Tiger('한돌이');
