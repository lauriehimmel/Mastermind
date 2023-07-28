console.log('howdy!');


/*----- constants -----*/



// ******************
// TO DO!!!!!! when you click the player guess circles before choosing a color, they disappear!!!
// CPU CODE CHANGES BEFORE BEING REVEALED - don't do until click play again
// look at this link for instructions button?? https://codepen.io/Saabbir/pen/LNzdGZ
// ******************

/*----- state variables -----*/

let colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let cGuess1;
let cGuess2;
let cGuess3;
let cGuess4;  

let targetClass;
let target;
let newBackground;
let newClassGuess1;
let newClassGuess2;
let newClassGuess3;
let newClassGuess4;
let getRow;
let circle1;
let circle2;
let circle3;
let circle4;
let rowArray = [];
let count = 0;


/*----- cached elements  -----*/
let turnsCount = document.getElementById('turnsCount');
let colorButtonEls = document.querySelectorAll('.color-buttons button');
let circleEls = document.querySelectorAll('.player-guesses .guess');
let submitBtnEl = document.querySelector('.submit');
let codeReveal = document.querySelector('.cpuCode-box');
let popupEl = document.querySelector('.hidden');
let guess1El = (document.getElementById('guess1'));
let guess2El = (document.getElementById('guess2')); 
let guess3El = (document.getElementById('guess3'));
let guess4El = (document.getElementById('guess4'));
let yesPlayAgain = document.querySelector('.yesbutton');
let noPlayAgain = document.querySelector('.nobutton');
let goodbyeScreen = document.querySelector('.byehidden');
let instrBtn = document.querySelector('.instruction-button');
let instructionsEl = document.getElementById("hiddentext");
let winnerMessageEl = document.getElementById('winnerhidden');


let row1ArrayEls = document.querySelector('#row1').children;
for (let i=0; i<4; i++) {
  rowArray.push(row1ArrayEls[i]);
};
let row2ArrayEls = document.querySelector('#row2').children;
for (let i=0; i<4; i++) {
  rowArray.push(row2ArrayEls[i]);
};
let row3ArrayEls = document.querySelector('#row3').children;
for (let i=0; i<4; i++) {
  rowArray.push(row3ArrayEls[i]);
};
let row4ArrayEls = document.querySelector('#row4').children;
for (let i=0; i<4; i++) {
  rowArray.push(row4ArrayEls[i]);
};
let row5ArrayEls = document.querySelector('#row5').children;
for (let i=0; i<4; i++) {
  rowArray.push(row5ArrayEls[i]);
};

/*----- event listeners -----*/
colorButtonEls.forEach((btn) => btn.addEventListener("click", handleBtnClick));
submitBtnEl.addEventListener('click', submitGuess);
yesPlayAgain.addEventListener('click', doPlayAgain);
noPlayAgain.addEventListener('click', dontPlayAgain);
instrBtn.addEventListener('click', toggleInstructions);

/*----- functions -----*/
turnsCount.innerText = 0;

cArray();
disableSubmit();

function cArray() {let cArray =  [(colorArray[Math.floor(Math.random() * 5)+1]), (colorArray[Math.floor(Math.random() * 5)+1]), (colorArray[Math.floor(Math.random() * 5)+1]), (colorArray[Math.floor(Math.random() * 5)+1]), ];
  console.log(cArray);
  cGuess1 = document.querySelector('.cpuCode-box').children[0];
  cGuess2 = document.querySelector('.cpuCode-box').children[1];
  cGuess3 = document.querySelector('.cpuCode-box').children[2];
  cGuess4 = document.querySelector('.cpuCode-box').children[3];
  cGuess1.className = `fill-${cArray[0]}-circle`;
  cGuess2.className = `fill-${cArray[1]}-circle`;
  cGuess3.className = `fill-${cArray[2]}-circle`;
  cGuess4.className = `fill-${cArray[3]}-circle`;
}

function toggleInstructions() {
  if (instructionsEl.style.display === "none") {
    instructionsEl.style.display = "grid"
  } else {
    instructionsEl.style.display = "none"
  }
};

function handleBtnClick(e) {
    targetClass = e.target.getAttribute('class')
    circleEls.forEach((circ) => circ.addEventListener('click', setColor))
};

function setColor(circ) {
    circ.target.className = `${targetClass}-circle`;
    freeSubmit()
};

function disableSubmit() {
    submitBtnEl.disabled = true;
};

// function toggleSubmit() {
//   if (submitBtnEl.disabled = true) {
//     submitBtnEl.id = 'disabled-button'} else {
//       submitBtnEl.id = 'notdisabled'
//     }
// };

function freeSubmit() {
    if (guess1El.className.includes('fill') && guess2El.className.includes('fill') && guess3El.className.includes('fill') && guess4El.className.includes('fill')) {
      submitBtnEl.disabled = false
    }
};

function submitGuess() {
    count++;
    console.log(count);
    turnsCount.innerText = count;
    getRow = document.getElementById(`row${count}`);
    circle1 = getRow.children[0];
    circle2 = getRow.children[1];
    circle3 = getRow.children[2];
    circle4 = getRow.children[3];
    circle1.className = guess1El.className;
    circle2.className = guess2El.className;
    circle3.className = guess3El.className;
    circle4.className = guess4El.className;
    setTimeout(function(){calculateWinner()},10);
};

function calculateWinner(){
    submitBtnEl.disabled = true;
    guess1El.className = 'guess';
    guess2El.className = 'guess';
    guess3El.className = 'guess';
    guess4El.className = 'guess';
    if (count <= 5 && circle1.className === cGuess1.className && circle2.className === cGuess2.   className && circle3.className === cGuess3.className && circle4.className === cGuess4.className) {
      winnerNotice();
    } else if (count >= 5) {
      loserNotice();
    };
  };

function winnerNotice() {
  cArray();
  setTimeout(function(){rowArray.forEach(function(row) {row.removeAttribute('class')})}, 500);
  setTimeout(function(){playAgain()},500);
};

function loserNotice() { 
  count = 0; alert('MISSION FAILED. BACK TO SPY SCHOOL WITH YOU.');
  rowArray.forEach(function(row) {row.removeAttribute('class')})
  setTimeout(function(){revealCode()}, 2000)
  setTimeout(function(){playAgain()}, 2000);
};

function playAgain() {
  popupEl.style.display = 'flex';
};

function doPlayAgain() {
 init();
};

function dontPlayAgain() {
  goodbyeScreen.style.display = 'flex';
};

function init() {
  location.reload()
};

function revealCode() {
  codeReveal.style.visibility = 'visible';
};
