## Mastermind - Project 1 Planning

Student name: Laurie Himmel

## Game Choice - Mastermind

## Screenshot for Wireframes
[Wireframe screenshot](wireframe-2-01.jpg)

## Pseudocode
/*----- constants -----*/  
losing is 20 pGuesses without match=cpuGuess  
pGuess=cpuGuess is a win


/*----- state variables -----*/  
let state;  
let guessNumber; (20 guesses max - do I need this as a state variable?)  
  

/*----- cached elements  -----*/
colorBtnEl  
colorBtnEl.red  
colorBtnEl.orange  
...  
is there a way to do like... colorEl.[] so it can be dynamic?  
  
instructionBtnEl  
guessBtnEl - this needs to have options to choose from  
submitBtnEl  
playAgainBtnEl  



/*----- event listeners -----*/  
colorEl  

/*----- functions -----*/


## ~Brain Dump~
computer chooses 4 colors from a possible 6 (randomize choice)

color options ex: 

    RED | ORANGE | YELLOW | GREEN | BLUE | PURPLE

player guesses: has a limited amount of guesses
- if guess matches right away, that's a win!
- if color is right but position is wrong: **black peg**
- if color and position are right: **red peg**
- if nothing is right: **white peg**

ex: if code is:

    RED | ORANGE | YELLOW | BLUE

and player guesses

    RED | GREEN | BLUE | PURPLE

computer would return a red peg, a black peg, and two white pegs

the guesses are in a rectangle, the pegs are in a block, so peg order doesn't matter

visually:
- board has a row for each guess and one for the code, but the code is hidden until the player guesses correctly or runs out of turns
- each guess will fill in the row's shape with the color

afweaw
