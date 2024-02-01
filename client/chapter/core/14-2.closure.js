function earth() {
  let water = true;

  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };

  return function (value) {
    water = value;
    // return apple
  };
}

const UFO = earth();

UFO(0);

/*---------------------------------------*/
/*---------------------------------------*/
/*---------------------------------------*/

//어디에 쓰이나요?
// const first = document.querySelector('.first');

// let isClicked = false;

// function handleClick() {
//   console.log('clicked');

//   return () => {
//     if (!isClicked) {
//       document.body.style.background = 'orange';
//     } else {
//       document.body.style.background = 'white';
//     }

//     isClicked = !isClicked;
//   };
// }

// first.addEventListener('click', handleClick());
//이벤트를 들려줄건데(클릭 이번트를 추가할거야.)
//이벤트 리스너

// IIFE를 써서 만듬.
const handleClick = (() => {
  let isClicked = false;

  return function () {
    if (!isClicked) {
      document.body.style.background = 'orange';
    } else {
      document.body.style.background = 'white';
    }

    isClicked = !isClicked;
  };
})();

//   first.addEventListener('click',handleClick)

function useState(intiValue) {
  let value = intiValue;

  function state() {
    return value;
  }

  function setState(newValue) {
    value = newValue;
  }

  return [state, setState];
}

const [state, setState] = useState();
