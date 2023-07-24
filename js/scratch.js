console.log('howdy!');


/*----- constants -----*/



/*----- state variables -----*/
// let pScore;
// let cScore;

// let pGuess;
// formula for computer to generate their secret code
// const INIT_STATE = {
//   cCode = 
// };
// let winner;


/*----- cached elements  -----*/
let colorBtnEls = document.querySelectorAll('.color-buttons > button');
let guessEls = document.querySelectorAll('#player-guess > section');
let submitBtn = document.querySelector('.submit')

// let guessFull = []; --> trying to make an array that can be populated with the guess classes once they've all been clicked
// console.log('guesses', guessEls)
// let guesses = document.getElementById
/*----- event listeners -----*/
colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick));
console.log
/*----- functions -----*/
submitBtn.disabled = true;

  function handleBtnClick(e) { 
      // let frontEl = document.querySelector('.color-buttons > button > span');
      // console.log('frontEl', frontEl);
      // let frontClass = frontEl.getAttribute('class');
      // console.log('frontClass', frontClass);
      // let colorClass = e.target.getAttribute('id');
      // console.log('colorClass', colorClass);
      // let guessChild = document.querySelector('.color-buttons > button').children;
      // console.log('guessChild', guessChild)
      // let child = ;
      // console.log(child);
      // guess1.appendChild(child);
      // guess1.className = colorClass;
      // console.log('guess1', guess1);
      // console.log('guess1', guess1);
      // let classEl = document.querySelector('.color-buttons > button');
      // console.log('classEl', classEl)
      // let correctClass = e.target.getAttribute('id');
      // console.log('correctClass', correctClass);  
      // console.log('guess1', guess1);
      // let child = document.querySelector('.color-buttons > button > span');
      // let childClass = child.getAttribute('class');
      // console.log('childClass', childClass);
      // console.log('guess1', guess1);
      // guess1.className = correctClass;
      // console.log('guess1', guess1);
      // let node = document.createElement('span');
      // document.getElementById('guess1').appendChild(node);
      // node.className = childClass;
      // console.log(guess1);
      // console.log(e.target.style.background);
      // guess1.style.background = e.target.background
      // console.log(guess1)
    let newClass = e.target.getAttribute('class');
    // console.log(newClass);
    // return(newClass);
    // guess1.className = newClass;
    // console.log(guess1);
    guessEls.forEach(section=>section.addEventListener('click', updateGuess))
    function updateGuess(guessChoice) {
      guessChoice.target.className = newClass;
      // if (guessChoice.class != null) {console.log(guessChoice) }
      // TODO: need to figure out how to make 'submitBtn.disabled = false' happen when all 4 guess circles are filled 
   };
   
  };



// function updateGuess(gNum) {

// }

// updateGuess();
// handleBtnClick()