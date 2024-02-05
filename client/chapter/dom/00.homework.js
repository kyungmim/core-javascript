//querySelector

const idField = document.querySelector('#idField');
const submit = document.querySelector('.btn');

//eventListener
function handleChekId() {
  if (this.value === 'hello') {
    console.log('success');
    idField.classList.remove('is-active');
  } else {
    console.log('error!');
    idField.classList.add('is-active');
    //클래스를 추가하겠다add()
    //classList
  }
}
function handleSubmit(e) {
  e.preventDefault();
  console.log('제출!');
}

//this여기서는 idField인 인풋
idField.addEventListener('input', handleChekId);
//해당 인풋에 값이 입력될때마다 함수 호출함.

submit.addEventListener('click', handleSubmit);
//preventDefault
