console.log('howdy!');


/*----- constants -----*/



/*----- state variables -----*/
// let pScore;
// let cScore;

// let pGuess;
// let cGuess; // does this need a function??

// let winner;

// newcolorspot.changeclass
// changeclass function has return color

/*----- cached elements  -----*/
let colorBtnEls = document.querySelectorAll('.color-buttons > button');
let orange = colorBtnEls[1].classList[0]; 
let guess1 = document.getElementById('guess1');
console.log(guess1);

/*----- event listeners -----*/
colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick));

/*----- functions -----*/
function handleBtnClick(e) { 
  let newClass = e.target.getAttribute('id')
  guess1.setAttribute('class', newClass)
  console.log(guess1)
};


handleBtnClick();



