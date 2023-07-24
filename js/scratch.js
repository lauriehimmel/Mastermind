console.log('howdy!');


/*----- constants -----*/



/*----- state variables -----*/
let pScore;
let cScore;

let pGuess;
let cGuess; // does this need a function??

let winner;

/*----- cached elements  -----*/
const colorBtnEls = document.querySelectorAll('.color-buttons > button');
const submitBtnEl = document.querySelector('.submit');
const instrBtnEl = document.querySelector('.instruction-button');


/*----- event listeners -----*/
colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick));

/*----- functions -----*/
handleBtnClick();

function init() {
    console.log('game started!')
    // render();
  };

function handleBtnClick(e) { 
    const colorz = document.querySelector('.color-buttons > button');
    console.log(document.querySelector('colorz'));
    
    // render();
};

