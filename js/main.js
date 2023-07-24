console.log('howdy!');
let colorBtnEls = document.querySelectorAll('.color-buttons > button');
let guessEls = document.querySelectorAll('#player-guess > section');
let submitBtn = document.querySelector('.submit')
colorBtnEls.forEach(btn=>btn.addEventListener('click', handleBtnClick));
submitBtn.disabled = true;

function handleBtnClick(e) { 
    let newClass = e.target.getAttribute('class');
    guessEls.forEach(section=>section.addEventListener('click', updateGuess))
    function updateGuess(guessChoice) {
        guessChoice.target.className = newClass;
    }
};