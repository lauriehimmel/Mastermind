# Code Review
## Glow
**A piece of your project you are most proud of, but want to improve:**

Functions in general! If you look at the 'Long Code' below, you'll see the disaster that was my first attempt at creating Mastermind (I'm actually... pretty embarrased to show it!!).
So having everything click was huge and I'm so proud of all that I was able to make happen! 
<details>
<summary> Long Code! </summary>

```
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
    console.log(newClass);
    // return(newClass);
    // guess1.className = newClass;
    // console.log(guess1);
    guessEls.forEach(section=>section.addEventListener('click', updateGuess))
    function updateGuess(gNum) {
      gNum.target.className = newClass;
      console.log(gNum.target);
   }
  };


// function updateGuess(gNum) {

// }

// updateGuess();
// handleBtnClick()
</detail>
```
</details>

## Grow
**A piece of code that works but maybe is still a bit tricky/buggy:**

I have several blocks of code like this, and would love to be able to condense them more, but wasn't able to figure out how to do that.

```
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
  setTimeout(function () {
    calculateWinner();
  }, 10);
}
```

I know my game is not mobile-friendly (or even teeny-browser-size-friendly), and would love to work towards that in the future!