console.log('howdy!');


/*----- constants -----*/



/*----- state variables -----*/
// let pScore;
// let cScore;

// let pGuess;
// formula for computer to generate their secret code
// const INIT_STATE = {
//   cCode = 
let cArray = [];
let cNums = [1, 2, 3, 4, 5, 6]
let colorBtnEls = document.querySelectorAll('.color-buttons > button');
colorBtnEls.forEach((el)=>{cArray.push(el.getAttribute('class'))})
let cCode = [];
function cpuCode () {
  cCode.push(cArray[Math.floor(Math.random() * 5)+1], cArray[Math.floor(Math.random() * 5)+1], cArray[Math.floor(Math.random() * 5)+1], cArray[Math.floor(Math.random() * 5)+1])
}
cpuCode()
console.log(cCode)
/*----- cached elements  -----*/

let guessEls = document.querySelectorAll('#player-guess > section');
let submitBtn = document.querySelector('.submit')



let guess1 = document.getElementById('guess1')
let guess2 = document.getElementById('guess2')
let guess3 = document.getElementById('guess3')
let guess4 = document.getElementById('guess4')

let row1circle1 = document.querySelector('.row1 :nth-child(1)')
let row1circle2 = document.querySelector('.row1 :nth-child(2)')
let row1circle3 = document.querySelector('.row1 :nth-child(3)')
let row1circle4 = document.querySelector('.row1 :nth-child(4)')


let guessArray =[];

/*----- event listeners -----*/
colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick));
// colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick2));
/*----- functions -----*/
submitBtn.disabled = true;

function handleBtnClick(e) { 

  let newClass = e.target.getAttribute('class');;
  guessEls.forEach(section=>section.addEventListener('click', updateGuess))
  
  function updateGuess(guessChoice) {
  guessChoice.target.className = newClass;

  if ((guess1.getAttribute('class').includes('fill')) && ((guess2.getAttribute('class').includes('fill'))) &&((guess3.getAttribute('class').includes('fill'))) &&((guess4.getAttribute('class').includes('fill'))))
  {submitBtn.disabled = false;}

  submitBtn.addEventListener('click', submitAnswer);
  console.log('test')
  function submitAnswer() {
    let guessArray = [guess1.getAttribute('class'), guess2.getAttribute('class'), guess3.getAttribute('class'), guess4.getAttribute('class')];
    row1circle1.className = guessArray[0];
    row1circle2.className = guessArray[1];
    row1circle3.className = guessArray[2];
    row1circle4.className = guessArray[3];
    submitBtn.disabled = true;


    // console.log('cCode', cCode);
    // console.log('guessArray', guessArray);
    if ((cCode[1] === guessArray[1]) && (cCode[2] === guessArray[2]) && (cCode[3] === guessArray[3]) && (cCode[4] === guessArray[4])) {console.log('yay')}
  };

        }
    };






// if (guessChoice.class != null) {console.log(guessChoice) }
      // TODO: need to figure out how to make 'submitBtn.disabled = false' happen when all 4 guess circles are filled 
  //  };
   

  //1. Grab all the circles
//2. Iterate through each circle
//3. On each iteration you want to check if the current circle has a color
//3a. Pretend we are in an iteration:
// console.log(circle.className)
// if (circle.className.includes('red')) {
//     console.log("Disable feature!")
// }

// function updateGuess(gNum) {

// }

// updateGuess();
// handleBtnClick()