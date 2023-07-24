## Mastermind - Project 1 Planning

Student name: Laurie Himmel

## Game Choice - Mastermind
A codebreaking game for two! As a frequently played game in my childhood, Mastermind was the obvious choice for me to build with my newly developed and continutally evolving JS skills.  
  
Invented in the 70s by Mordecai Meirowitz, Mastermind was initially based on a paper-based game called Bulls and Cows. Immensely popular in its first decade, the game would sell over 30 million copies before eventually fading away to its lesser known status.

Though Mastermind is typically a two-player game, I will be making a one-player, one-computer version, where the player must guess the computer's randomly generated code. Will you find satisfaction in beating the bot? Or will your codebreaking attempts be thwarted?

## Screenshot for Wireframes
![Wireframe screenshot](/wireframe-2-01.jpg)

## Pseudocode
### Constants
- win: pGuess = cpuCode
- lose: 20 guesses with no winning guess
- losing is 20 pGuesses without match=cpuCode 
- color button object for guessing (colorBtnEls: red, orange, yellow, green, blue, purple)
- submit button
- board null state (no guesses yet)

### State Variables
- board array for empty guess rows
- guess number variable (20 guesses max)
- winner variable - no tie option
- guess array
- peg array (?)
- scores

### Cached Elements
- colorBtnEls (color button object for guessing)
- instructionBtnEl (reveals instructions when clicked) 
- submitBtnEl (submit guess)
- playAgainBtnEl (appears after win/lose)

### Event Listeners
- color button clicks: select colors for guessing
- "submit" button click: submits guess, colors appear on board, then pegs appear to reveal right/wrong guesses
- "instructions" button click: reveals instructions
- "play again" button click: restarts game

### Functions
- init()
- render()
    - renderScores() - 
    - renderScores()
    - renderSelections()
    - renderGameOver()
    - renderInstructions()
    - renderPegs()    
 
Upon loading the app should:
- Initialize the state variables:
    - initialize the board array to 20 null rows
    - initialize the player guess row to be empty
    - create new computer color code
    - initialize win/lose to null because player has not won or lost yet
- Render turn number:
    - if the player has not won and turn number is still <20, screen should display message like "turn 4 out of 20"
- Render a message:
    - if player has won (pGuess = cpuCode), render winner message
    - if player has lost (guesses >=20 and still no pGuess = cpuCode), render loser message
    - otherwise, do not render any message
- Wait for the user to click either:
    - Instructions button or
    - Color button

Handle a player clicking the:
- Instructions button
    - reveal instructions - in a pop-up, dropdown, expanding cell, etc. (not sure yet!)
    - a second click toggles it back to its previous state
- Color button
    - value assigned to each button will be added to the guess array
    - guess aray will be displayed as colors in the guess box
    - need to figure out a way to allow player to change colors before submitting, if they change their mind
    - 4 colors in guess box allow submit button to be clicked - cannot be clicked before that
- Submit button
    - guess array will be populated in the board
    - iterate through guess array/pGuess and see if it equals cpuCode
    - if so, winner message will be revealed
    - if guess 20 and the code is not solved, reveal loser message
    - otherwise:
        - peg variable will be calculated and revealed
        - guess box will be cleared and ready for next guess
- Play Again button
    - resets the UI to init state