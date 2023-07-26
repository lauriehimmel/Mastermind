console.log('howdy!');


/*----- constants -----*/



/*----- state variables -----*/
// class ColorButton {
//     constructor(name, color) {
//         this.name = name,
//         this.color = color
//     }
// }
// let redButton = {
//     select: document.querySelector('.color-buttons :nth-child(1)'),
//     class: redButton.getAttribute('class')

// };
// console.log(redButton);

let redButton = document.querySelector('.color-buttons :nth-child(1)')
console.log(redButton);

let redClass = redButton.getAttribute('class');

let orangeButton = document.querySelector('.color-buttons :nth-child(2)')
console.log(orangeButton);

let colorButtons = [redButton.getAttribute('class'), orangeButton.getAttribute('class')];
console.log(colorButtons[1]);

let guessArray = [];
// cancelled out
    //     console.log(colorButtons.class)
    // 
    // console.log(redClass);


    // let orangeClass = orangeButton.getAttribute('class');
    // console.log(orangeClass);

    // let yellowClass = document.querySelector('.color-buttons :nth-child(3)').getAttribute('class');
    // console.log(yellowClass);
    // let greenClass = document.querySelector('.color-buttons :nth-child(4)').getAttribute('class');
    // console.log(greenClass);
    // let blueClass = document.querySelector('.color-buttons :nth-child(5)').getAttribute('class');
    // console.log(blueClass);
    // let purpleClass = document.querySelector('.color-buttons :nth-child(6)').getAttribute('class');
    // console.log(purpleClass);

let circle1 = document.getElementById('guess1')
console.log(circle1);
let circle2 = document.getElementById('guess2');
console.log(circle2);
let circle3 = document.getElementById('guess3');
console.log(circle3);
let circle4 = document.getElementById('guess4');
console.log(circle4);

let circleClassArray = [];

/*----- cached elements  -----*/

let guessButt = document.querySelectorAll('.player-guess > section')

/*----- event listeners -----*/
// redButton.addEventListener('click', updateArray)

/*----- functions -----*/
