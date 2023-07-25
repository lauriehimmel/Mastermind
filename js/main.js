console.log('howdy!');
let colorBtnEls = document.querySelectorAll('.color-buttons > button');
let guessEls = document.querySelectorAll('#player-guess > section');
let submitBtn = document.querySelector('.submit')


let guess1 = document.getElementById('guess1')
let guess2 = document.getElementById('guess2')
let guess3 = document.getElementById('guess3')
let guess4 = document.getElementById('guess4')

colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick));

submitBtn.disabled = true;

function handleBtnClick(e) { 
    let newClass = e.target.getAttribute('class');
    guessEls.forEach(section=>section.addEventListener('click', updateGuess))
    function updateGuess(guessChoice) {
        guessChoice.target.className = newClass;
    if ((guess1.getAttribute('class').includes('fill')) && ((guess2.getAttribute('class').includes('fill'))) &&((guess3.getAttribute('class').includes('fill'))) &&((guess4.getAttribute('class').includes('fill')))) {
        submitBtn.disabled = false;
      } else {};
};
};