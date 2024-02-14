//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
//--------------------------------------------------
import {
  addClass,
  clearContents,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  removeClass,
  showAlert,
  shake,
  copy,
} from './lib/index.js';
import jujeobData from './data/data.js';

//[phase - 1]
//1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
//2. input 값을 (콘솔에 가져와 주세요.)
//3.jejeob 데이터 가져오기
//4.jujeobData 함수에 input.value를 넣어주세요
//5.랜덤한 주접 한개를 pick
//  //   const name = nameInput.value;
//   let random = getRandom(jujeobData().length);
//   console.log(jujeobData(name)[random]);//내가 한거

// 6. pick을 result에 랜더링해주세요.
//    - result 내용 비우기 ( clearContents, node.textContent = '')
//    - pick text => insertAdjacentHTML('beforeend',text) , insertLast()

// const submit = getNode('#submit');
// const nameField = getNode('#nameField');
// const result = getNode('.result');

// function handleJujeob(e) {
//   e.preventDefault();

//   const name = nameField.value;
//   const list = jujeobData(name);
//   const pick = list[getRandom(list.length)];

//   clearContents('.result');
//   insertLast('.result', pick);
// }

// submit.addEventListener('click', handleJujeob);

//[phase - 2]
// 1. 아무 값도 입력 받지 못했을 때 예외 처리(alert)
// 2. 공백 문자를 받았을 때 예외 처리(alert)
// 3. 숫자형 문자를 받았을 때 예외처리(alert)

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');
// const alertError = getNode('.alert-error');

function handleJujeob(e) {
  e.preventDefault();

  const name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if (!name || name.replace(/\s*/g, '') === '') {
    // alert('이름을 입력해주세요!');
    // alertError.classList.add('is-active');
    // setTimeout(() => {
    //   alertError.classList.remove('is-active');
    // }, 2000); //내가 한거

    showAlert('.alert-error', '이름을 입력해주세요', 2000);
    // addClass(nameField, 'shake');
    shake.restart();
    return;
  }

  if (!isNumericString(name)) {
    showAlert('.alert-error', '정확한 이름을 입력해주세요', 2000);
    shake.restart();
    return;
  }

  clearContents('.result');
  insertLast('.result', pick);
}

function hadleCopy() {
  const text = this.textContent;

  if (!nameField.value) return;

  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사 완료!!');
  });
}

submit.addEventListener('click', handleJujeob);
result.addEventListener('click', hadleCopy);
