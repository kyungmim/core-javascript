/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', (e) => {
  // const self = e.currentTarget //이렇게 this를 사용하기위해 변수로 많이 담아서 사용
  //   console.log(e.target);//첫 번째로 마주하는 마우스 포인터 대상
  //   console.log(e.currentTarget); //이벤트가 걸린 대상
  //   console.log(this === e.currentTarget);
  //   console.log('%c section', 'color:orange');
});

// article.addEventListener('click', () => {
//   console.log('%c article', 'color:dodgerblue');
// });

p.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('%c p', 'color:hotpink');
});
/* 캡처링 ----------------------------------------------------------------- */
