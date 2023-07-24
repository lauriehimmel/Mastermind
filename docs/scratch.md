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



<!-- link formatting: 
[link1](linkhere...) -->




<!-- A README.md file with these sections:

☐ <Your game's title>: A description of your game. Background info of the game is a nice touch.

☐ Screenshot(s): Images of your actual game.

        Note: if you edit your README.md on the github website editor, you can copy and paste image files directly to your markdown.

☐ Technologies Used: List of the technologies used, e.g., JavaScript, HTML, CSS...

☐ Getting Started: In this section include the link to your deployed game and any instructions you deem important.

☐ Next Steps: Planned future enhancements (icebox items).

Note: Don't underestimate the value of a well crafted README.md. The README.md introduces your project to prospective employers and forms their first impression of your work! -->
